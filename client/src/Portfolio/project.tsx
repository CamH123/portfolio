import styles from "./project.module.css"
import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router';
import arrowIcon from "../assets/images/skills/arrow.png"

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

// Image Viewer
interface CarouselProps{
    slug: string;
}

// Takes a folder path and outputs images from in it
export function ImageCarousel({slug} : CarouselProps){

    // State to store current visible image
    const [currentIndex, setCurrentIndex] = useState(0);

    // State to store array of images
    const [image_urls, setImageUrls] = useState<string[]>([]);

    // call api to get images
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
    fetch(`${API_URL}/api/projects/${slug}/images`)
        .then(res => {
            if (!res.ok) throw new Error('Project images not found');
            return res.json();
        })
        .then(data => {
            setImageUrls(data);
        })
        .catch(error => {
                console.error('Error fetching images:', error);
        });
    }, [slug]);


    // handles null/empty array
    if (!image_urls || image_urls.length === 0){
        return (<div className = "carousel-empty"></div>);
    }

    // functions to handle carousel movement
    const handleNext = () =>{
        setCurrentIndex((prev) => (prev+1) % image_urls.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? image_urls.length - 1 : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    
    return(
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWindow}>
                <img 
                    key={currentIndex}
                    src={image_urls[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.carouselImage}
                />
            </div>
            <div className={styles.carouselControls}>
                <button onClick={handlePrevious} className={styles.carouselArrow}>
                    <img src={arrowIcon} alt="PreviousButton" className={styles.arrowLeft}/>
                </button>

                <div className={styles.carouselIndicator}>
                    {image_urls.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.carouselDot} ${index === currentIndex ? styles.active : ''}`}
                        />
                    ))}
                </div>

                <button onClick={handleNext} className={styles.carouselArrow}>
                    <img src={arrowIcon} alt="NextButton" className={styles.arrowRight}/>
                </button>
            </div>
        </div>
    )
}

// construction page
export function ConstructionPage(){
    return(
    <>
        <NavigationBar />
        <div className = {styles.constructionDiv}>
            <img src = "/images/misc/construction.png" />
            <h1>page under construction</h1>
            <h2>please come back soon!</h2>
        </div>
    </>

    )
}

// Navigation Header Bar
export function NavigationBar(){

    // Navigation handlers
    const navigate = useNavigate();
    const handleNavigateToSection = (section: string) =>{
        navigate('/', {state: {scrollTo: section}});
    };

    const handleNavigateToBlog = () => {
        navigate('/blog');
    };
    return(
        <div className = {styles.banner}>
            <div className = {styles.home}>
                <button 
                    className = {styles.navigationButton} 
                    style = {{fontSize: "40px", padding: "0px"}}
                    onClick = {() => handleNavigateToSection('landing')}
                >
                    cameron huang
                </button>
            </div>
            <nav className = {styles.navigation}>
                <button 
                    className = {styles.navigationButton}
                    onClick={() => handleNavigateToSection('landingRef')}
                >
                    home
                </button>
                <button 
                    className = {styles.navigationButton}
                    onClick={() => handleNavigateToSection('research')}
                >
                    projects
                </button>
                <button 
                    className = {styles.navigationButton}
                    onClick={() => handleNavigateToSection('experience')}
                >
                    experience
                </button>
                <button 
                    className = {styles.navigationButton}
                    onClick={handleNavigateToBlog}
                >
                    blog
                </button>
                <button 
                    className = {styles.navigationButton}
                    onClick={() => handleNavigateToSection('about')}
                >
                    about/contact
                </button>

            </nav>
        </div>
    )
}


// Main Project Page
export function ProjectPage(){

    // Get project slug
    let params = useParams(); 
    const slug = params.projectName;
    
    // Set project, loading, and error states
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Call api for project data
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
    fetch(`${API_URL}/api/projects/${slug}`)
        .then(res => {
        if (!res.ok) throw new Error('Project not found');
        return res.json();
        })
        .then(data => {
        setProject(data);
        setLoading(false);
        })
        .catch(err => {
        setError(err.message);
        setLoading(false);
        });
    }, [slug]);

    if (loading) return <div>Loading...</div>;

    // load construction page if error :)
    if (error || !project) {
        return ConstructionPage();
    }

    return (
        <>
            <NavigationBar />
            <div className = {styles.mainSection}>
                <div className = {styles.textColumn}>
                    <div className = {styles.projectTitle}>
                        {project.title}
                    </div>
                    <div className = {styles.shortDescription}>
                        {project.short_description}
                    </div>
                    <div className = {styles.longDescription}>
                        {project.full_description ? project.full_description.map((paragraph) => (
                            <p className = {styles.projectDescription}>
                                {paragraph}
                            </p>
                        )) : "none"}
                    </div>
                </div>
                <div className = {styles.imgColumn}>
                    <ImageCarousel slug = {project.slug}/>
                    <div className = {styles.lists}>
                        <div className = {styles.architecture}>
                            Tech Stack: 
                            <ul style = {{marginTop: "5px"}}>
                            {project.tech_stack ? project.tech_stack.map(tech => (
                                <li className = {styles.techList}>{tech}</li>
                            )): "none"}
                            </ul>
                        </div>

                        <div className = {styles.resource}>
                            Resource Links:
                            <ul style = {{marginTop: "5px"}}>
                                {project.github_url && (
                                    <li className = {styles.resourceItem}>
                                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                            GitHub Repository
                                        </a>
                                    </li>
                                )}
                                {project.resources && Object.entries(project.resources).map(([name, path]) => (
                                    <li key={name} className = {styles.resourceItem}>
                                        <a href={path} target="_blank" rel="noopener noreferrer">
                                            {name.split('_').map(word => 
                                                word.charAt(0).toUpperCase() + word.slice(1)
                                            ).join(' ')}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}
