import { pool } from "../pool";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

export interface AdminUser{
    id: number;
    username: string;
    password_hash: string;
    created_at: Date;
}

// Query to find admin by usernam
export async function findAdminByUsername (username: string): Promise<AdminUser | null> {
    const query = `
        SELECT *
        FROM admin_users
        WHERE username = $1
    `;
    
    try{
        const result = await pool.query(query, [username]);
        if (result.rows.length === 0){
            return null;
        }
        else{
            return result.rows[0] as AdminUser;
        }
    } catch (error){
        console.error('Error finding admin in database:', error);
        throw error;
    }
}
