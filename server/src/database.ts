import { Pool } from "pg";
import dotenv from 'dotenv';
import {execSync} from 'child_process';

dotenv.config();

// Get windows host ip dynamically in wsl
function getWindowsHostIP(): string {
  if (process.platform === 'linux') {
    // We're in WSL - get Windows host IP
    try {
      const ip = execSync("ip route show | grep -i default | awk '{ print $3}'")
        .toString()
        .trim();
      return ip;
    } catch (error) {
      console.error('Failed to get Windows host IP, falling back to localhost');
      return 'localhost';
    }
  }
  // Not in WSL - use localhost
  return 'localhost';
}

const dbHost = process.env.DB_HOST || getWindowsHostIP();

export interface ProjectResources {
  documentation?: string;
  poster?: string;
  proposal?: string;
  demo?: string;
}

export interface Project{
    id: number;
    slug: string;
    title: string;
    short_description: string | null;
    full_description: string[] | null;
    tech_stack: string[] | null;
    github_url: string | null;
    image_folder: string | null;
    resources: ProjectResources | null;
}

// create connection pool
const pool = new Pool({
    host: dbHost,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// get project by slug
export async function getProjectBySlug(slug: string): Promise<Project| null>{
    const query = 'SELECT * FROM projects WHERE slug = $1';

    try{
        const result = await pool.query(query, [slug]);
        if (result.rows.length === 0){
            return null;
        }

        return result.rows[0] as Project;
    } catch (error){
        console.error('Database error:', error);
        throw error;
    }
}

pool.connect()
  .then(client => {
    console.log('✅ Database connected successfully!');
    client.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
  });