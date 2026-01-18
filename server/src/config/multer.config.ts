import multer from "multer";
import path from "node:path";
import { Request } from "express";


// configure storage
const storage = multer.diskStorage({

    // determines where to store files
    destination: (req: Request, file: Express.Multer.File, cb) =>{
        if (file.fieldname === "markdown"){
            cb(null, "uploads/blogs/markdown");
        } else if (file.fieldname === "thumbnail"){
            cb(null, 'uploads/blogs/thumbnails');
        } else{
            cb(new Error('Invalid field name'), '');
        }
    },

    // determines how to name files (date + original name with dashes instead of spaces)
    filename: (req: Request, file: Express.Multer.File, cb) => {
        const uniqueSuffix = Date.now();
        const originalName = file.originalname.replace(/\s+/g, '-'); 
        cb(null, `${uniqueSuffix}-${originalName}`);
    }   
});


// validates file types
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.fieldname === 'markdown') {
        // Only accept .md files
        if (file.mimetype === 'text/markdown' || path.extname(file.originalname) === '.md') {
            cb(null, true);
        } else {
            cb(new Error('Only markdown files are allowed for content'));
        }
    } else if (file.fieldname === 'thumbnail') {
        // Only accept image files
        const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG, PNG, and WebP images are allowed for thumbnails'));
        }
    } else {
        cb(new Error('Invalid field name'));
    }
};

// create multer instance
export const uploadBlogFiles = multer({
    storage: storage,
    fileFilter:fileFilter,
    limits: {
        fileSize: 10*1024*1024, // 10mb
    }
});