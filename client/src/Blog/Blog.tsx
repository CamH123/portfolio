import { useState, useEffect, Fragment } from 'react'
import {useNavigate, Link} from 'react-router'
import { ConstructionPage } from '../Portfolio/project'

import styles from "./Blog.module.css"

interface BlogInfo{
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

interface BlogCardProp {
  isMain : boolean;
  blogInfo: BlogInfo;
}

export function MainBlogCard({isMain, blogInfo} : BlogCardProp){

  return(
    <Link to={`/blog/${blogInfo.slug}`} className = {`${styles.mainCard} ${!isMain ? styles.sideCard : ''}`}>
        <div className = {styles.textSection}>
          <div className = {styles.cardTitle}>
            {blogInfo.title}
          </div>
          <div className = {styles.cardDate}>
            {blogInfo.date.toLocaleDateString()}
          </div>
          {
            isMain &&           
            <div className = {styles.cardSubtitle}>
              {blogInfo.subtitle}
            </div>
          }
        </div>
        <div className = {styles.imageSection}>
          <img src = {blogInfo.thumbnail_url}></img>
        </div>
    </Link>
  )
}

// Header
export function BlogHeader(){
  const navigate = useNavigate();

  const navigateBlogHome = () => {
    navigate('/blog');
  };

  const navigatePortfolio = () => {
    navigate('/');
  };

  return(
      <nav className = {styles.header}>
        <button 
          className = {styles.navButton}
          onClick = {navigateBlogHome}
        >
          cam's blog
        </button>
        <button 
          className = {styles.navButton}
          onClick = {navigatePortfolio}
        >
          portfolio
        </button>
      </nav>
  )
}


// Main Blog Section
export function Blog() {
  // stores what category is displayed
  const [category, setCategory] = useState("all");

  // stores list of primary articles
  const [primaryArticles, setPrimaryArticles] = useState([]);

  // stores list of pinned articles
  const [pinnedArticles, setPinnedArticles] = useState([]);

  // call api to get pinned articles
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/blog/?pinned=true&num=20`)
      .then(res => {
        if (!res.ok) throw new Error('Pinned Blogs not found');
        return res.json();
      })
      .then(returnedArticles => {
        setPinnedArticles(returnedArticles.map((article: BlogInfo) => ({
          ...article,
          date: new Date(article.date),
          thumbnail_url: `${API_URL}${article.thumbnail_url}`
        })));
      })
      .catch(error=>{
        console.error('Error fetching pinned blogs', error)
      });
  }, []);

  // Updates primary category
  useEffect(() => {
    const url = category === "all" 
      ? `${API_URL}/api/blog/?num=20`
      : `${API_URL}/api/blog/?category=${category}&num=20`;
      
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Blogs not found');
        return res.json();
      })
      .then(returnedArticles => {
        setPrimaryArticles(returnedArticles.map((article: BlogInfo) => ({
          ...article,
          date: new Date(article.date),
          thumbnail_url: `${API_URL}${article.thumbnail_url}`
        })));
      })
      .catch(error => {
        console.error('Error fetching blogs', error);
      });
  }, [category]);
  

  return (
    <>

      <BlogHeader />
      <div className = {styles.mainSection}>
        <div className = {styles.mainColumn}>
          <div className = {styles.categorySelector}>
            <button className = {`${styles.categoryButton} ${category === "all" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("all")}}>
              all
            </button>
            <button className = {`${styles.categoryButton} ${category === "opinion" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("opinion")}}>
              opinion
            </button>
            <button className = {`${styles.categoryButton} ${category === "tech" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("tech")}}>
              tech
            </button>
            <button className = {`${styles.categoryButton} ${category === "entertainment" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("entertainment")}}>
              entertainment
            </button>
            <button className = {`${styles.categoryButton} ${category === "food" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("food")}}>
              food
            </button>
            <button className = {`${styles.categoryButton} ${category === "music" ? styles.categorySelected : ''}`}
              onClick = {() => {setCategory("music")}}>
              music
            </button>
          </div>
          <hr></hr>
            {
              primaryArticles.map((article: BlogInfo, idx: number) => (
                <Fragment key={article.blog_id}>
                  <MainBlogCard isMain = {idx === 0} blogInfo = {article}/>
                  {idx !== primaryArticles.length - 1 && <hr></hr>}
                </Fragment>
              ))
            }


          
        
        </div>
        <div className = {styles.verticalLine}>

        </div>

        <div className = {styles.recColumn}>
          <div className = {styles.recTitle}>
            editor's favorites
          </div>
          <hr></hr>
          {
            pinnedArticles.map((article: BlogInfo, idx: number) => (
              <Fragment key={article.blog_id}>
                <MainBlogCard isMain = {false} blogInfo = {article}/>
                {idx !== pinnedArticles.length - 1 && <hr></hr>}
              </Fragment>
            ))
          }

        </div>

      </div>
      <div className = {styles.footer}>
        this is the footer
      </div>


    </>
  )
}

