import { Link } from "react-router";
import { useState } from "react";
import styles from "./project-home.module.css";
import {projectImages} from "../assets/images/research-projects/index";


interface Project{
    title: string;
    image: string;
    route: string;
    labels: Array<string>;
    gridColumn: string;
    gridRow: string;
    backgroundColor: string;
    professional?: string;
    onMouseEnter? : () => void;
    onMouseLeave? : () => void;
}

// Project Card React Component
const ProjectCard = ({title, image, route, gridColumn, gridRow, backgroundColor, onMouseEnter, onMouseLeave}: Project) => {

    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            className = {styles.projectCard}
            style = {{
                gridColumn: gridColumn,
                gridRow: gridRow
            }}
            onMouseEnter={() =>{setIsHovered(true); onMouseEnter?.()}}
            onMouseLeave={() =>{setIsHovered(false); onMouseLeave?.()}}
        >

            <Link to={route}>
                <div className = {styles.imageContainer}>
                    <img className = {styles.projectImg} src = {image}></img>
                    <div className = {styles.colorOverlay}
                        style = {{
                            backgroundColor: backgroundColor,
                            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                        }}
                    >
                        <h3 className = {styles.projectTitle}>
                            {title}
                        </h3>
                    </div>
                </div>
                
            </Link>
        </div>
    )
}

// array of projects
const projects: Project[] = [
    {
        title: "NASA SUITS: Spacesuit HMD",
        image: projectImages.suits,
        route: "/projects/suits",
        labels: ["machine learning", "mixed reality", "computer vision"],
        gridRow: "1",
        gridColumn: "1",
        backgroundColor: "rgba(78, 27, 33, .9)",
    },
    {
        title: "URC: Mars Rover Simulation",
        image: projectImages.roverSim,
        route: "/projects/rover",
        labels: ["machine learning", "robotics", "computer vision", "simulation", "scientific computing"],
        gridRow: "2",
        gridColumn: "1",
        backgroundColor: "rgba(194, 165, 164, .9)",
    },
    {
        title: "CARLA: Autonomous Vehicle Simulation",
        image: projectImages.carlaSim,
        route: "/projects/carla",
        labels: ["machine learning", "robotics", "computer vision", "simulation", "data science"],
        gridRow: "2",
        gridColumn: "2",
        backgroundColor: "rgba(52, 41, 22, .9)",
    },
    {
        title: "ATARI Racing RL Agent",
        image: projectImages.atariRl,
        route: "/projects/atari-rl",
        labels: ["machine learning", "data science"],
        gridRow: "3",
        gridColumn: "1",
        backgroundColor: "rgba(76, 110, 153, .9)",
    },
    {
        title: "Near Earth Asteroid Orbit Simulation",
        image: projectImages.ssp,
        route: "/projects/ssp",
        labels: ["machine learning", "data science", "scientific computing"],
        gridRow: "3",
        gridColumn: "2",
        backgroundColor: "rgba(190, 190, 190, .9)",
    },
    {
        title: "Pothole Detector",
        image: projectImages.potholeDetector,
        route: "/projects/pothole",
        labels: ["machine learning", "computer vision"],
        gridRow: "3",
        gridColumn: "3",
        backgroundColor: "rgba(141, 125, 132, .9)",
    },
    {
        title: "Personal Website/Blog",
        image: projectImages.blog,
        route: "/projects/website",
        labels: ["web development"],
        gridRow: "3",
        gridColumn: "4",
        backgroundColor: "rgba(210, 208, 196, .9)",
    },

]

// Projects Section React Component
function ResearchProjects(){

    // labels
    const labels = [
        "machine learning",
        "robotics",
        "mixed reality",
        "simulation",
        "web development",
        "data science",
        "scientific computing",
        "computer vision",
    ];

    // project state to keep track of project being hovered
    const [hoveredLabels, setHoveredLabels] = useState<string[] | null>(null);


    return(
        <div className = {styles.section} >
            <div className = {styles.leftColumn}>
                <h1 className = {styles.title}>research and projects</h1>
                <div className = {styles.projectGrid}>
                    {
                        projects.map((project) => (
                            <ProjectCard
                                key = {project.route}
                                {...project}
                                onMouseEnter={() => setHoveredLabels(project.labels)}
                                onMouseLeave={() => setHoveredLabels(null)}
                            />
                        ))
                    }
                </div>
            </div>
            
            <div className = {styles.textColumn}>
                <p>
                    {labels.map((label) => (
                        <span
                            key = {label}
                            className = {styles.label}
                            style = {{
                                opacity: hoveredLabels === null ? 1 : hoveredLabels.includes(label) ? 1 : 0.3
                            }}
                        >
                            {label}
                            <br/>
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export {ResearchProjects, ProjectCard};
export type {Project};