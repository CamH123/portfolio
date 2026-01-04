import { useEffect, useRef } from 'react'
import {useLocation} from 'react-router'
import { useDocumentTitle } from '../useDocumentTitle'


import './portfolio.css'

import LandingPage from './landing-section'
import {ResearchProjects} from './project-home'
import Experience from './experience'
import Skills from './skills'
import About from './about'


function Portfolio() {
  const location = useLocation();

  // Set title
  useDocumentTitle("cameron huangs portfolio")

  // Scrolling Refs
  const landingRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // handle navigation from other routes with target
  useEffect(() => {
    const scrollToSection = location.state?.scrollTo;

    if (scrollToSection){
      const refMap: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
        landing: landingRef,
        research: researchRef,
        experience: experienceRef,
        skills: skillsRef,
        about: aboutRef,
      };

      // delay to render componenets
      setTimeout(() => {
        refMap[scrollToSection]?.current?.scrollIntoView({behavior: 'smooth'});
      }, 100);
    }
  }, [location]);

  // Scroll Handlers
  const scrollToLanding = () => {
    landingRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToResearch = () => {
    researchRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <div ref = {landingRef} className="snap-section">
        <LandingPage 
          onScrollToResearch = {scrollToResearch}
          onScrollToExperience = {scrollToExperience}
          onScrollToSkills = {scrollToSkills}
          onScrollToAbout = {scrollToAbout}
        />
      </div>
      <div ref = {researchRef} className="snap-section">
        <ResearchProjects />
      </div>
      <div ref = {experienceRef} className="snap-section">
        <Experience />
      </div>
      <div ref = {skillsRef} className="snap-section">
        <Skills />
      </div>
      <div ref = {aboutRef} className="snap-section">
        <About />
      </div>
    </>
  )
}

export default Portfolio
