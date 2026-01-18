import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { findAdminByUsername } from "../db/queries/admin";

// Login Controller
export async function login(req: Request, res: Response){
    try{
        // 1. Extract credentials from request body
        const {username, password} = req.body;

        // 2. validate inputs
        if (!username || !password){
            res.status(400).json({error: "Username and password required"});
            return;
        }

        // 3. find user in database
        const user = await findAdminByUsername(username);

        // 4. validate user
        if (!user){
            res.status(401).json({error: "invalide credentials"});
            return;
        }

        // 5. validate password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid){
            res.status(401).json({error:'Invalid credentials'});
            return;
        }

        // 6. generate jwt
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            res.status(500).json({error: 'JWT_SECRET not configured'});
            return;
        }
        const payload = {
            userId: user.id,
            username: user.username
        };

        const options: jwt.SignOptions = {
            expiresIn: 60*60*24
        };

        const token = jwt.sign(payload, jwtSecret, options);

        // 7. add cookie
        res.cookie('token', token, {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000

        });

        // 8. return success
        res.status(200).json({
            message: "login sucessful",
            user:{
                id: user.id,
                username: user.username
            }
        });
    } catch (error){
        console.error('login error:', error);
        res.status(500).json({error:'Internal server error'});
    }
};

// logout controller
export async function logout(req: Request, res: Response) {
    res.clearCookie('token');

    res.status(200).json({
        message: 'logout sucessful'
    });
};

// check autho middleware controller
export async function checkAuth (req: Request, res: Response){
    res.status(200).json({
        authenticated: true,
        user: req.user
    });
};