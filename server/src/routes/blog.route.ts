import { Router, Express } from "express";
import { getBlog, getXBlog, postBlog } from "../controllers/blog.controller";
import { uploadBlogFiles } from "../config/multer.config";
import { authenticateToken } from "../middlewares/auth.middleware";

export const blogRouter = Router();

// Get Blog by Slug
blogRouter.get('/:slug', getBlog);

// Get Blog Information
blogRouter.get('/', getXBlog);

blogRouter.post(
    "/",
    authenticateToken,  
    uploadBlogFiles.fields([              
        { name: 'markdown', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 }
    ]),
    postBlog                       
);