import styles from "./BlogPreview.module.css"
import Markdown from "react-markdown";

interface PreviewProps {
    formData: {
        title: string;
        subtitle: string;
        date: string;
        slug: string;
        author: string;
    } | null;
    markdown: string;
    thumbnailPreview: string | null;
}

export function BlogPreview({ formData, markdown, thumbnailPreview }: PreviewProps) {
    if (!formData) return null;

    const displayDate = formData.date 
        ? new Date(formData.date).toLocaleDateString() 
        : 'No date set';

    return (
        <div className={styles.previewContainer}>
            <div className={styles.articleTitle}>
                {formData.title || 'Untitled Blog Post'}
            </div>
            <div className={styles.articleSubtitle}>
                {formData.subtitle || 'No subtitle'}
            </div>
            <div className={styles.articleDate}>
                {displayDate}
            </div>
            {thumbnailPreview && (
                <div className={styles.thumbnail}>
                    <img src={thumbnailPreview} alt="Blog thumbnail" />
                </div>
            )}
            <div className={styles.articleContent}>
                <Markdown>{markdown}</Markdown>
            </div>
        </div>
    );
}

