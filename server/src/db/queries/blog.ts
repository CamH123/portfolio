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

// 5. Check if slug exists (used for admin adding)
export async function checkSlugExists(slug: string): Promise<boolean>{
    const query = `
        SELECT blog_id
        FROM blog
        WHERE slug = $1
        LIMIT 1
    `;
    try{
        const result = await pool.query(query, [slug]);
        return result.rows.length >0;
    } catch(error){
        console.error('Database error checking slug:', error);
        throw error;
    }
}

// 6. updates blog categories junction table
export async function insertBlogCategories(blog_id: number, category_ids: number[], client?: any): Promise<void>{
    // if no categories, nothing to insert
    if (category_ids.length === 0){
        return;
    }

    // builds dynamic values clause where $1 is the blog_id, $2+ is the category ids
    const values = category_ids.map((_, index) => `($1, $${index+2})`).join(', ');
    const query = `
        INSERT INTO blog_category (blog_id, category_id)
        VALUES ${values}
    `;

    try{
        // client for transactions, otherwise pool
        const executor = client || pool;
        await executor.query(query, [blog_id, ...category_ids])
    } catch(error){
        console.error('Database error inserting blog categories:', error);
        throw error;
    }
}

// 7. Inserts blog object into the blog database
export async function insertBlog(blogData: Omit<Blog, 'blog_id' | 'categories'>, client?: any): Promise<number> {
    // unwrap components from blogData
    const {
        title,
        subtitle,
        slug,
        date,
        author,
        content,
        pin,
        thumbnail_url
    } = blogData;

    const query = `
        INSERT INTO BLOG (
            title,
            subtitle,
            slug,
            date,
            author,
            content,
            pin,
            thumbnail_url
        )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING blog_id
    `;

    try{
        const executor = client || pool;
        const result = await executor.query(query, [title, subtitle, slug, date, author, content, pin, thumbnail_url]);
        return result.rows[0].blog_id;
    } catch(error){
        console.error('Database error inserting blog:', error);
        throw error;
    }
}

// 8. Transaction that ensures blog is added and categories are updated
export async function createBlog(blogData: Omit<Blog, 'blog_id' | 'categories'>, category_ids: number[]): Promise<Blog> {
    const client = await pool.connect();
    try{
        await client.query('BEGIN');
        const blog_id = await insertBlog(blogData, client);
        await insertBlogCategories(blog_id, category_ids, client);
        await client.query('COMMIT');

        const completeBlog = await getBlogBySlug(blogData.slug);

        if(!completeBlog){
            throw new Error('Failed to retrieve created blog');
        }
        return completeBlog;
    } catch(error){
        await client.query('ROLLBACK');
        console.error('Database error creating blog:', error);
        throw error;
    } finally{
        client.release();
    }
}