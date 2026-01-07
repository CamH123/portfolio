import styles from "./about.module.css"
import aboutImg from "../assets/images/about/182.jpg"
import githubIcon from "../assets/images/about/github.svg"
import mailIcon from "../assets/images/about/gmail.png"
import linkedinIcon from "../assets/images/about/LinkedIn_icon.svg.webp"
import resumeIcon from "../assets/images/about/resume-7.png"

import { Link } from "react-router"
import resumePDF from '../assets/files/about/cameronh_resume_2026.pdf'


function About(){

    const bioParagraphs = [
    "Hi, I'm Cameron! ",

    "I'm a Computer Science student at Rice University with a minor in Data Science, and I enjoy taking ideas from rough sketches to working systems you can actually interact with. I'm especially interested in work at the intersection of hardware and software, including robotics, AR and VR, and finding practical ways to integrate AI into real world systems. I like learning new tools along the way and figuring things out by building.",
    
    "Over the past couple of years, I've had the chance to apply these interests through industry and research experience at AbbVie and in the Mobility-X Lab, where I worked on full stack, machine learning, and applied research projects in fast paced, collaborative environments. I enjoy working on teams, learning from others, and contributing to projects where iteration and problem solving happen quickly.",
    
    "Outside of tech, I'm a big foodie, not just when it comes to eating but also with trying to cook new recipes (sometimes with mixed results)! I like staying active through pickleball, tennis, hiking, and biking, and some of my favorite experiences have been spending time outdoors in places like Banff. I also love traveling to new cities and trying out new bakeries and cafes!",
    
    "Thanks for checking out my portfolio and projects! If you're interested, feel free to take a look at my blog as well :)"
    ];

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    const handleMailClick = () => {
        window.location.href = "mailto:cameron.h.1732@gmail.com"
    }

    const handleLinkedInClick = () => {
        openInNewTab("https://www.linkedin.com/in/cameronh123/")
    }

    const handleGithubClick = () => {
        openInNewTab("https://github.com/CamH123")
    }

    const handleResumeClick = () => {
        openInNewTab(resumePDF)
    }

    return(
        <div className = {styles.section}>
            <div className = {styles.title}> about </div>
            <div className = {styles.wrapper}> 
                <div className = {styles.textInfo}> 
                    <div>
                        {bioParagraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 20)} className={styles.bioParagraph}>
                                {paragraph.toLowerCase()}
                            </p>
                        ))}
                    </div>
                </div>
                <div className = {styles.image} > 
                    <img src = {aboutImg}></img>
                </div>
            </div>
            <div className = {styles.contactSection}>
                <div className = {styles.title} style = {{fontSize: "30px", marginBottom: "20px"}}> contact </div>
                    <div className = {styles.contact}>
                        <div className = {styles.contactWrapper}>
                                <button
                                    className={styles.contactElem}
                                    type="button"
                                    onClick={handleMailClick}
                                >
                                    <img src = {mailIcon}></img>
                                    <span>cameron.h.1732@gmail.com</span>
                                </button>
                                <button
                                    className={styles.contactElem}
                                    type="button"
                                    onClick={handleLinkedInClick}
                                >
                                    <img src = {linkedinIcon}></img>
                                    <span>linkedin</span>
                                </button>
                                <button
                                    className={styles.contactElem}
                                    type="button"
                                    onClick={handleGithubClick}
                                >
                                    <img src = {githubIcon}></img>
                                    <span>camh123</span>
                                </button>
                                <button
                                    className={styles.contactElem}
                                    type="button"
                                    onClick={handleResumeClick}
                                >
                                    <img src = {resumeIcon}></img>
                                    <span>resume</span>
                                </button>
                            </div>
                            <div className = {styles.blogButton}>
                                <Link to={"/blog"}>
                                    <span>check out my blog :{")"} </span>
                                </Link>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default About;