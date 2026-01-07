import type { Blog, BlogInfo } from "../db/queries/blog";
import { getBlogBySlug, getBlogInfoByCategory, getBlogsInfo, getPinnedBlogsInfo } from "../db/queries/blog";
import { Request, Response } from "express";


// gets blog by slug
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

// gets x most recent blog info (home page)
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



