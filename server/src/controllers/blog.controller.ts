import type { Blog, BlogInfo } from "../db/queries/blog";
import { getBlogBySlug, getBlogInfoByCategory, getBlogsInfo, getPinnedBlogsInfo, createBlog, checkSlugExists } from "../db/queries/blog";
import { Request, Response } from "express";
import { unlink } from "node:fs/promises";

// 1. gets blog by slug
export async function getBlog(req: Request, res: Response){
    try{
        const {slug} = req.params;
        const blog = await getBlogBySlug(slug);

        // Check if the project is found
        if (!blog){
            return res.status(404).json({error: "Blog not found"});
        } else{
            return res.json(blog);
        }
    } catch (error){
        console.error('Error fetching blog:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

// 2. gets x most recent blog info (home page)
export async function getXBlog(req: Request, res: Response){
    try{
        // return item
        let blogs; 
        
        // Set safety limits
        const DEFAULT_LIMIT = 10;
        const MAX_LIMIT = 20;
        let limit = DEFAULT_LIMIT;

        // parse and validate num parameter
        if (req.query.num){
            const parsedNum = parseInt(req.query.num as string, 10);

            if(isNaN(parsedNum) || parsedNum <= 0){
                console.error("Invalid num parameter");
                limit = DEFAULT_LIMIT;
            }
            else{
                limit = Math.min(MAX_LIMIT, parsedNum);

                if (parsedNum > MAX_LIMIT){
                    console.log("Num parameter too large, capped to maximum");
                }
            }
        }

        // parse and validate pinned parameter
        const pinnedParam = req.query.pinned as string | undefined;
        const isPinnedFilter = pinnedParam === 'true';

        // parse and validate category parameter
        const category = req.query.category as string | undefined;

        if (isPinnedFilter) {
            blogs = await getPinnedBlogsInfo(limit);
        } else if (category){
            if (category.trim() === ''){
                console.error('Empty category parameter');
                blogs = await getBlogsInfo(limit);
            } else{
                blogs = await getBlogInfoByCategory(category, limit);
            }
        } else{
            blogs = await getBlogsInfo(limit);
        }

        // Check if the project is found
        if (!blogs || blogs.length === 0){
            return res.status(200).json([]);
        } else{
            return res.json(blogs);
        }
    } catch (error){
        console.error('Error fetching blogs:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

// 3. Controller to create a new blog post

// Allowed category names
const CATEGORY_MAP: { [key: string]: number } = {
    'opinion': 1,
    'tech': 2,
    'entertainment': 3,
    'food': 4,
    'music': 5
};
const ALLOWED_CATEGORIES = ['opinion', 'tech', 'entertainment', 'food', 'music'];

export async function postBlog(req: Request, res: Response) {
    try {
        // Get files reference early
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        
        // 1. Extract form data from request body
        const { title, subtitle, slug, date, author, pin } = req.body;
        
        // Parse categories
        let categories;
        try {
            categories = typeof req.body.categories === 'string' 
                ? JSON.parse(req.body.categories) 
                : req.body.categories;
        } catch (parseError) {
            // **CLEANUP**
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(400).json({ 
                error: 'Invalid categories format. Must be a JSON array.' 
            });
        }

        // 2. Validate required fields
        if (!title || !subtitle || !slug || !date || !author) {
            // **CLEANUP**
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(400).json({ 
                error: 'Missing required fields: title, subtitle, slug, date, author' 
            });
        }

        // 3. Validate and parse categories
        if (!categories || !Array.isArray(categories) || categories.length === 0) {
            // **CLEANUP**
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(400).json({ 
                error: 'At least one category is required' 
            });
        }

        // Check if all categories are valid
        const invalidCategories = categories.filter(cat => !ALLOWED_CATEGORIES.includes(cat));
        if (invalidCategories.length > 0) {
            // **CLEANUP**
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(400).json({ 
                error: `Invalid categories: ${invalidCategories.join(', ')}. Allowed: ${ALLOWED_CATEGORIES.join(', ')}` 
            });
        }

        // 4. Check slug uniqueness
        const slugExists = await checkSlugExists(slug);
        if (slugExists) {
            // **CLEANUP**
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(409).json({ 
                error: 'Slug already exists. Please use a unique slug.' 
            });
        }

        // 5. Validate uploaded files
        if (!files || !files.markdown || !files.thumbnail) {
            // **CLEANUP** 
            if (files) await cleanupUploadedFiles(files);
            
            return res.status(400).json({ 
                error: 'Both markdown file and thumbnail image are required' 
            });
        }

        // Extract file paths
        const markdownFile = files.markdown[0];
        const thumbnailFile = files.thumbnail[0];

        const contentPath = `/uploads/blogs/markdown/${markdownFile.filename}`;
        const thumbnailPath = `/uploads/blogs/thumbnails/${thumbnailFile.filename}`;

        // 6. Map category names to IDs
        const categoryIds = categories.map(name => CATEGORY_MAP[name]);

        // 7. Parse date and pin
        const blogDate = new Date(date);
        const isPinned = pin === 'true' || pin === true;

        // 8. Create blog data object
        const blogData = {
            title,
            subtitle,
            slug,
            date: blogDate,
            author,
            content: contentPath,
            pin: isPinned,
            thumbnail_url: thumbnailPath
        };

        // 9. Insert into database
        const createdBlog = await createBlog(blogData, categoryIds);

        // 10. Return success response
        return res.status(201).json(createdBlog);

    } catch (error) {
        console.error('Error creating blog:', error);
        
        // **CLEANUP**
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        if (files) await cleanupUploadedFiles(files);
        
        if (error instanceof Error) {
            return res.status(500).json({ 
                error: 'Failed to create blog',
                details: error.message 
            });
        }
        
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// clean up helper to remove multer files 
async function cleanupUploadedFiles(files: { [fieldname: string]: Express.Multer.File[] }) {
    try {
        const filesToDelete: Express.Multer.File[] = [];
        
        // Collect all uploaded files
        for (const fieldName in files) {
            filesToDelete.push(...files[fieldName]);
        }
        
        // Delete each file
        await Promise.all(
            filesToDelete.map(file => 
                unlink(file.path).catch(err => 
                    console.error(`Failed to delete ${file.path}:`, err)
                )
            )
        );
        
        console.log(`Cleaned up ${filesToDelete.length} uploaded file(s)`);
    } catch (error) {
        console.error('Error during file cleanup:', error);
    }
}