import { useState, useRef, useEffect} from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Add.module.css"
import MarkdownEditor from "./MarkDownEditor"
import { BlogPreview } from "./BlogPreview";
import uploadIcon from "../../assets/images/admin/upload_icon.png"
import fileIcon from "../../assets/images/admin/file.png"

// Define available categories (matching your backend CATEGORY_MAP)
const AVAILABLE_CATEGORIES = ['opinion', 'tech', 'entertainment', 'food', 'music'] as const;


export default function Add(){
    // Markdown content state
    const [markdown, setMarkdown] = useState<string>('');

    // tracks uploaded file name
    const [markdownFileName, setMarkdownFileName] = useState<string | null>(null);

    // Form field states for live preview
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [slug, setSlug] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    // Thumbnail states
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

    // determines whether to show the editor or the preview
    const [editorState, setEditorState] = useState<string>('editor');
    
    // state to store cateogries and pin status
    const [categories, setCategories] = useState<string[]>([]);
    const [pin, setPin] = useState<boolean>(false);

    // state to trigger updates in markdown
    const [editorKey, setEditorKey] = useState<number>(0);

    // effect to clean memory leaks for thumbnail uploads
    useEffect(() => {
        // Cleanup function runs when component unmounts
        return () => {
            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, []);

    // reference to form and data helper function
    const formRef = useRef<HTMLFormElement>(null);
    const getFormData = () => {
        if (!formRef.current) return null;
        
        const formData = new FormData(formRef.current);
        return {
            title: formData.get('title') as string || '',
            subtitle: formData.get('subtitle') as string || '',
            date: formData.get('date') as string || '',
            slug: formData.get('slug') as string || '',
            author: formData.get('author') as string || '',
        };
    };

    // Handle category checkbox toggle
    const handleCategoryChange = (category: string) => {
        setCategories(prev => {
            if (prev.includes(category)) {
                // Remove if already selected
                return prev.filter(cat => cat !== category);
            } else {
                // Add if not selected
                return [...prev, category];
            }
        });
    };

    // handle form submission
    async function handlePost(formData: FormData){
        // Validate
        if (!markdown) {
            console.error('Markdown content is required');
            return;
        }
        if (categories.length === 0) {
            console.error('At least one category is required');
            return;
        }
        if (!thumbnailFile) {
            console.error('Thumbnail image is required');
            return;
        }

        // Convert markdown string to File
        const markdownBlob = new Blob([markdown], { type: 'text/markdown' });
        const markdownFile = new File([markdownBlob], 'blog-post.md', { type: 'text/markdown' });
        
        // Append markdown file to formData
        formData.append('markdown', markdownFile);

        //Append thumbnail file to formData
        formData.append('thumbnail', thumbnailFile);
        
        // Append categories as JSON string 
        formData.append('categories', JSON.stringify(categories));
        
        // Append pin value
        formData.append('pin', pin.toString());

        const API_URL = import.meta.env.VITE_API_URL;
        try{
            const response = await fetch(`${API_URL}/api/blog`, {
                method: 'POST',
                credentials: 'include',
                body: formData 
            });

            if (!response.ok){
                throw new Error(`Post failed: ${response.status}`);
            }

            const data = await response.json();
            console.log('Blog created successfully:', data);
            
            // TODO: Redirect to blog list or show success message
            resetForm();
            
        } catch (err){
            console.error('Post error:', err);
        }
    }

    // Thumbnail dropzone configuration
    const {
        getRootProps: getThumbnailRootProps,
        getInputProps: getThumbnailInputProps,
        isDragActive: isThumbnailDragActive
    } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
        },
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (!file) return;
            
            // Revoke old preview URL to free memory
            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }
            
            setThumbnailFile(file);
            const previewUrl = URL.createObjectURL(file);
            setThumbnailPreview(previewUrl);
            setEditorKey(prev => prev + 1);
        }
    });

    // Markdown dropzone configuration
    const {
        getRootProps: getMarkdownRootProps,
        getInputProps: getMarkdownInputProps,
        isDragActive: isMarkdownDragActive
    } = useDropzone({
        accept: {
            'text/markdown': ['.md'],
            'text/plain': ['.txt']
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (!file) return;
            
            // Read the file content
            const text = await file.text();
            setMarkdownFileName(file.name);
            
            // Load content into the markdown editor
            setMarkdown(text);
            setEditorKey(prev => prev + 1);
        }
    });

    const resetForm = () => {
        // Reset all form fields
        setTitle('');
        setSubtitle('');
        setDate('');
        setSlug('');
        setAuthor('');
        
        // Reset markdown content and file name
        setMarkdown('');
        setMarkdownFileName(null);
        
        // Reset thumbnail - revoke URL first to free memory
        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }
        setThumbnailFile(null);
        setThumbnailPreview(null);
        
        // Reset categories and pin
        setCategories([]);
        setPin(false);
        
        // Reset editor state to default
        setEditorState('editor');
        
        // Increment editor key to force re-render of MarkdownEditor
        setEditorKey(prev => prev + 1);
        
        // Reset the actual form element (clears any uncontrolled inputs)
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return(
        <div className={styles.section}>
            <form action={handlePost} className={styles.form} ref = {formRef}>
                <div className={styles.uploadSection}>
                    {/* Markdown Upload Bubble */}
                    <div 
                        {...getMarkdownRootProps()}
                        className={styles.uploadBubble}
                        style={{
                            border: isMarkdownDragActive ? '2px dashed #0066cc' : undefined,
                            backgroundColor: isMarkdownDragActive ? '#f0f8ff' : undefined
                        }}
                    >
                        <input {...getMarkdownInputProps()} />
                        <div className={styles.uploadBubbleContent}>
                            <div className={styles.uploadLeft}>
                                <img src={uploadIcon} className={styles.uploadIcon} alt="Upload" />
                                <div>
                                    {isMarkdownDragActive ? 
                                        'Drop markdown file here...' : 
                                        'drop blog.md here'
                                    }
                                </div>
                            </div>
                            {markdownFileName && (
                                <div className={styles.uploadRight}>
                                    <div className={styles.filePreview}>
                                        <img src={fileIcon} className={styles.fileIcon} alt="File" />
                                        <span className={styles.fileName}>{markdownFileName}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Thumbnail Upload Bubble */}
                    <div 
                        {...getThumbnailRootProps()} 
                        className={styles.uploadBubble}
                        style={{
                            border: isThumbnailDragActive ? '2px dashed #0066cc' : undefined,
                            backgroundColor: isThumbnailDragActive ? '#f0f8ff' : undefined
                        }}
                    >
                        <input {...getThumbnailInputProps()} />
                        <div className={styles.uploadBubbleContent}>
                            <div className={styles.uploadLeft}>
                                <img src={uploadIcon} className={styles.uploadIcon} alt="Upload" />
                                <div>
                                    {isThumbnailDragActive ? 
                                        'Drop image here...' : 
                                        'drop blog thumbnail image here'
                                    }
                                </div>
                            </div>
                            {thumbnailPreview && (
                                <div className={styles.uploadRight}>
                                    <div className={styles.thumbnailPreviewContainer}>
                                        <img 
                                            src={thumbnailPreview} 
                                            alt="Thumbnail preview" 
                                            className={styles.thumbnailPreviewImage}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.editSection}>
                    <div className={styles.editor}>
                        <div className = {styles.editorSelector}>
                                <button 
                                    type="button"  // Important: prevents form submission
                                    className={styles.radioButton}
                                    onClick={() => setEditorState('editor')}
                                    style={{ 
                                        fontWeight: editorState === 'editor' ? 'bold' : 'normal',
                                        opacity: editorState === 'editor' ? 1 : 0.6
                                    }}
                                >
                                    text editor
                                </button>
                                <button 
                                    type="button"  // Important: prevents form submission
                                    className={styles.radioButton}
                                    onClick={() => setEditorState('preview')}
                                    style={{ 
                                        fontWeight: editorState === 'preview' ? 'bold' : 'normal',
                                        opacity: editorState === 'preview' ? 1 : 0.6
                                    }}
                                >
                                    preview
                                </button>
                        </div>
                        {editorState === 'editor' ? (
                            <MarkdownEditor 
                                key = {editorKey}
                                markdown={markdown}
                                onChange={setMarkdown}
                            />
                        ) : (
                            <BlogPreview 
                                formData={getFormData()}
                                markdown={markdown}
                                thumbnailPreview={thumbnailPreview}
                            />
                        )}
                    </div>
                    <div className={styles.editor}>
                        {/* Title */}
                        <div className={styles.formGroup}>
                            <label htmlFor="title" className={styles.label}>
                                title
                            </label>
                            <input 
                                id="title"
                                name="title"
                                type="text"
                                className={styles.input}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Subtitle */}
                        <div className={styles.formGroup}>
                            <label htmlFor="subtitle" className={styles.label}>
                                subtitle
                            </label>
                            <input 
                                id="subtitle"
                                name="subtitle"
                                type="text"
                                className={styles.input}
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Date */}
                        <div className={styles.formGroup}>
                            <label htmlFor="date" className={styles.label}>
                                post date
                            </label>
                            <input 
                                id="date"
                                name="date"
                                type="date"
                                className={styles.input}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>

                        {/* Slug */}
                        <div className={styles.formGroup}>
                            <label htmlFor="slug" className={styles.label}>
                                slug
                            </label>
                            <input 
                                id="slug"
                                name="slug"
                                type="text"
                                className={styles.input}
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required
                            />
                        </div>

                        {/* Author */}
                        <div className={styles.formGroup}>
                            <label htmlFor="author" className={styles.label}>
                                author
                            </label>
                            <input 
                                id="author"
                                name="author"
                                type="text"
                                className={styles.input}
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </div>
                        <div className = {styles.checkBoxSection}>
                            {/* Categories Checkboxes */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    categories
                                </label>
                                <div className={styles.checkboxGroup}>
                                    {AVAILABLE_CATEGORIES.map(category => (
                                        <label key={category} className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                checked={categories.includes(category)}
                                                onChange={() => handleCategoryChange(category)}
                                                className={styles.checkbox}
                                            />
                                            <span className={styles.checkboxText}>{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Pin Checkbox */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    pinned
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={pin}
                                        onChange={(e) => setPin(e.target.checked)}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxText}>pin to top</span>
                                </label>
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Create Blog Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}