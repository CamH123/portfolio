import { useState, useEffect } from "react"
import { useParams } from "react-router";
import Markdown from "react-markdown";

import styles from "./BlogArticle.module.css"

import { BlogHeader } from "./Blog"
import { ConstructionPage } from "../Portfolio/project";


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

export default function BlogArticle (){
    // get blog slug
    let params = useParams();
    const slug = params.blogSlug;

    // import the blog information
    const [blog, setBlog] = useState<Blog | null>(null);
    const [markdownContent, setMarkdownContent] = useState<string>("");

    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
            fetch(`${API_URL}/api/blog/${slug}`)           
                .then(res => res.json())                    
                .then(data => {                             
                    setBlog({
                        ...data, 
                        date: new Date(data.date),
                        thumbnail_url: `${API_URL}${data.thumbnail_url}`
                    });
                    return fetch(`${API_URL}${data.content}`);             
                })
                .then(res => res.text())                   
                .then(markdown => {                        
                    setMarkdownContent(markdown);
                })
                .catch(error => {                          
                    console.error('Error loading blog:', error);
                });
        }, [slug, API_URL]);

    if(!blog || !markdownContent){
        return ConstructionPage();
    }
    

    return(
        <div className = {styles.blogWrapper}>
            <BlogHeader />
            <div className = {styles.articleSection}>
                <div className = {styles.articleTitle}>
                    {blog.title}
                    
                </div>
                <div className = {styles.articleSubtitle}>
                    {blog.subtitle}

                </div>
                <div className = {styles.articleDate}>
                    {blog.date.toLocaleDateString()}
                </div>
                <div className = {styles.thumbnail}>
                    <img src = {blog.thumbnail_url}></img>
                </div>
                <div className = {styles.articleContent}>
                    <Markdown>{markdownContent}</Markdown>

                </div>
                <div className = {styles.reconmendations}>

                </div>
            </div>
        </div>
    )
}