import { Router } from "express";
import { login, logout, checkAuth } from "../controllers/admin.controller";
import { authenticateToken } from "../middlewares/auth.middleware";

export const adminRouter = Router();

// login
adminRouter.post('/login', login);

// logout
adminRouter.post('/logout', authenticateToken, logout);

// check
adminRouter.get('/check', authenticateToken, checkAuth);
