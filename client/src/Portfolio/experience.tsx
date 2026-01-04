import styles from "./experience.module.css"
import { experience_img } from "../assets/images/experience";
import { ProjectCard } from "./project-home";
import type { Project } from "./project-home";
import { useState } from "react";


// array of experiences
const experiences: Project[] = [
    {
        title: "Rice Robotics: Rover Software Lead",
        image: experience_img.roboticg,
        route: "/experience/rrc",
        gridRow: "1",
        gridColumn: "4",
        professional: "university",
        labels: [],
        backgroundColor: "rgba(141, 187, 255, 0.9)",
    },
    {
        title: "Rice AR/VR: President",
        image: experience_img.arvrg,
        route: "/experience/arvr",
        gridRow: "2",
        gridColumn: "5",
        professional: "university",
        labels: [],
        backgroundColor: "rgba(141, 187, 255, 0.9)",
    },
    {
        title: "McMurtry College: Website Committee",
        image: experience_img.mcm_com,
        route: "/experience/murt",
        gridRow: "1",
        gridColumn: "5",
        professional: "university",
        labels: [],
        backgroundColor: "rgba(82, 79, 83, 0.9)",
    },
    {
        title: "AbbVie SWE Intern (2025)",
        image: experience_img.abbv,
        route: "/experience/abbvie2025",
        gridRow: "2",
        gridColumn: "1",
        professional: "professional",
        labels: [],
        backgroundColor: "rgba(141, 187, 255, 0.9)",
    },
    {
        title: "Paycom SWE Intern (2026)",
        image: experience_img.paycom,
        route: "/experience/paycom",
        gridRow: "3",
        gridColumn: "1",
        professional: "professional",
        labels: [],
        backgroundColor: "rgba(68, 169, 76, 0.9)",
    },
    {
        title: "AbbVie DS Intern (2024)",
        image: experience_img.abbv,
        route: "/experience/abbvie2024",
        gridRow: "3",
        gridColumn: "2",
        professional: "professional",
        labels: [],
        backgroundColor: "rgba(141, 187, 255, 0.9)",
    },
]


// Main experience componenent
function Experience(){

    // State to determine hovered labels
    const [hoveredLabel, setHoveredLabel] = useState<string>("");

    return(
        <div className = {styles.section}>
            <div className = {styles.cardGrid}>
                {experiences.map((experience) => (
                    <ProjectCard 
                        key = {experience.route}
                        {...experience}
                        onMouseEnter={() => setHoveredLabel(experience.professional ?? "")}
                        onMouseLeave={() => setHoveredLabel("")}
                    />
                ))}
                <div className = {styles.text} style = {{gridRow: "1", gridColumn: "1", opacity: hoveredLabel === "professional" ? "100%" : "50%"}}> professional </div>
                <div className = {styles.text} style = {{gridRow: "2", gridColumn: "3", fontWeight: "bold"}}> experience </div>
                <div className = {styles.text} style = {{gridRow: "3", gridColumn: "5", opacity: hoveredLabel === "university" ? "100%" : "50%"}}> university </div>
            </div>
        </div>
    )
}

export default Experience;