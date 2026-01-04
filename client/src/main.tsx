import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import Portfolio from './Portfolio/portfolio.tsx'
import {ProjectPage} from './Portfolio/project.tsx'
import Blog from './Blog/blog.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Portfolio/>} />
        <Route path = "projects/:projectName" element = {<ProjectPage />} />
        <Route path = "experience/:experienceName" element = {<ProjectPage />} />
        <Route path = "blog" element = {<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
