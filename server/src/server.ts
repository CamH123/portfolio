import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import path from "node:path";

import cookieParser from 'cookie-parser';

import { apiRouter } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT

// Middleware:
// 1. Enable CORS for frontend communication
const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

// 2. Parse JSON request bodies
app.use(express.json());

// 3. Parse urlencoded bodies
app.use(express.urlencoded());

// 4. Parse cookies
app.use(cookieParser()); 

// 5. Mount API routes
app.use('/api', apiRouter);

// 6. Mount static assets
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Start Server
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
