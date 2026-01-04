import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
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

// 3. Mount API routes
app.use('/api', apiRouter);

// Start Server
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
