import { Router } from "express";
import { getBlog, getXBlog } from "../controllers/blog.controller";

export const blogRouter = Router();

// Get Blog by Slug
blogRouter.get('/:slug', getBlog);

// Get Blog Information
blogRouter.get('/', getXBlog);

