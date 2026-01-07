import { pool } from "../pool";

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
