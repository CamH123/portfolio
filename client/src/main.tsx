import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router'

import './index.css'
import Portfolio from './Portfolio/portfolio.tsx'
import {ProjectPage} from './Portfolio/project.tsx'
import {Blog} from './Blog/Blog.tsx'
import BlogArticle from './Blog/BlogArticle.tsx'

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTo({ top: 0 })
    }, 0.1);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path = "/" element = {<Portfolio/>} />
        <Route path = "projects/:projectName" element = {<ProjectPage />} />
        <Route path = "experience/:experienceName" element = {<ProjectPage />} />
        <Route path = "blog" element = {<Blog />} />
        <Route path = "blog/:blogSlug" element = {<BlogArticle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
