import { pool } from "../pool";

export interface Blog{
    blog_id: number;
    title: string;
    subtitle: string;
    slug: string;
    date: Date;
    author: string;
    content: string;
    categories: string[];
    pin: boolean;
    thumbnail_url: string;
}

export interface BlogInfo{
    blog_id: number;
    title: string;
    subtitle: string;
    slug: string;
    date: Date;
    author: string;
    categories: string[];
    pin: boolean;
    thumbnail_url: string;
}

// 1. Get Blog By Slug
export async function getBlogBySlug(slug: string): Promise<Blog | null>{
    const query = `
        SELECT
            b.blog_id,
            b.title,
            b.subtitle,
            b.slug,
            b.date,
            b.author,
            b.content,
            c.name as category_name,
            b.pin,
            b.thumbnail_url
        FROM blog b
        LEFT JOIN blog_category bc on b.blog_id = bc.blog_id
        LEFT JOIN category c ON bc.category_id = c.category_id
        WHERE b.slug = $1
    `;

    try{
        const result = await pool.query(query, [slug]);
        if (result.rows.length === 0){
            return null;
        }

        // aggregate all teh category names
        const firstRow = result.rows[0];
        const blog: Blog = {
            blog_id: firstRow.blog_id,
            title: firstRow.title,
            subtitle: firstRow.subtitle,
            slug: firstRow.slug,
            date: firstRow.date,
            author: firstRow.author,
            content: firstRow.content,
            categories: result.rows.map(row => row.category_name).filter(name => name !== null),
            pin: firstRow.pin,
            thumbnail_url: firstRow.thumbnail_url
        };
        
        return blog;
    } catch (error){
        console.error('Database blog error: ', error);
        throw error;
    }
}

// 2. Get X number of blogs info (no content) by category
export async function getBlogInfoByCategory(category: string, num: number): Promise<BlogInfo[] | null>{
    const query = `
        WITH filtered_blogs AS (
            SELECT DISTINCT b.blog_id, b.date
            FROM blog b
            INNER JOIN blog_category bc ON b.blog_id = bc.blog_id
            INNER JOIN category c ON bc.category_id = c.category_id
            WHERE c.name = $1
            ORDER BY b.date DESC
            LIMIT $2
        )
        SELECT
            b.blog_id,
            b.title,
            b.subtitle,
            b.slug,
            b.date,
            b.author,
            COALESCE(
                json_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL),
                '[]'
            ) AS categories,
            b.pin,
            b.thumbnail_url
        FROM filtered_blogs fb
        INNER JOIN blog b ON fb.blog_id = b.blog_id
        LEFT JOIN blog_category bc ON b.blog_id = bc.blog_id
        LEFT JOIN category c ON bc.category_id = c.category_id
        GROUP BY b.blog_id
        ORDER BY b.date DESC
    `;
    try{
        const result = await pool.query(query, [category, num]);
        if (result.rows.length === 0){
            return null;
        }
        return result.rows as BlogInfo[];
    } catch (error){
        console.error('Database blog info error: ', error);
        throw error;
    }

}

// 3. Get X number of blogsinfo (no content)
export async function getBlogsInfo(num: number): Promise<BlogInfo[] | null>{
    const query = `
        SELECT
            b.blog_id,
            b.title,
            b.subtitle,
            b.slug,
            b.date,
            b.author,
            COALESCE(
                json_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL),
                '[]'
            ) AS categories,
            b.pin,
            b.thumbnail_url
        FROM blog b
        LEFT JOIN blog_category bc ON b.blog_id = bc.blog_id
        LEFT JOIN category c ON bc.category_id = c.category_id
        GROUP BY b.blog_id
        ORDER BY b.date DESC
        LIMIT $1
    `;

    try{
        const result = await pool.query(query, [num]);
        if (result.rows.length === 0){
            return null;
        }
        return result.rows as BlogInfo[];
    } catch (error){
        console.error('Database blog info error: ', error);
        throw error;
    }
}

// 4. Get X number of Blogs info that are pinned
export async function getPinnedBlogsInfo(num: number): Promise<BlogInfo[] | null>{
    const query = `
        SELECT
            b.blog_id,
            b.title,
            b.subtitle,
            b.slug,
            b.date,
            b.author,
            COALESCE(
                json_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL),
                '[]'
            ) AS categories,
            b.pin,
            b.thumbnail_url
        FROM blog b
        LEFT JOIN blog_category bc ON b.blog_id = bc.blog_id
        LEFT JOIN category c ON bc.category_id = c.category_id
        WHERE b.pin = true
        GROUP BY b.blog_id
        ORDER BY b.date DESC
        LIMIT $1
    `;

    try{
        const result = await pool.query(query, [num]);
        if (result.rows.length === 0){
            return null;
        }
        return result.rows as BlogInfo[];
    } catch (error){
        console.error('Database blog info error: ', error);
        throw error;
    }
}