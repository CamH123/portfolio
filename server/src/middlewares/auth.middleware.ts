import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Express types
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        username: string;
      };
    }
  }
}

interface JWTPayload {
  userId: number;
  username: string;
  iat: number;
  exp: number;
}

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  try {
    // 1. Get token from cookie
    const token = req.cookies.token;
    
    // 2. Check if token exists
    if (!token) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }
    
    // 3. Get JWT secret
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      res.status(500).json({ error: 'Server configuration error' });
      return;
    }
    
    // 4. Verify and decode token
    const decoded = jwt.verify(token, jwtSecret) as JWTPayload;
    
    // 5. Attach user to request object
    req.user = {
      userId: decoded.userId,
      username: decoded.username
    };
    
    // 6. Continue to next handler
    next();
    
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ error: 'Token expired' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      console.error('Authentication error:', error);
      res.status(401).json({ error: 'Authentication failed' });
    }
  }
}