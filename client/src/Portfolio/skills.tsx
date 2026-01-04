// Imports
import { useState, useRef, useEffect } from "react";

import styles from "./skills.module.css";
import { skillIcons } from "../assets/images/skills";
import arrowIcon from "../assets/images/skills/arrow.png"


// Skill Table Component
interface SkillsTableProps{
    skillsData: any;
}

function SkillsTable({skillsData} : SkillsTableProps){

    const [selectedState, setSelectedState] = useState("webdev");
    
    return(
        <div className = {styles.skillTable}>
            <SkillsSelection 
                selectedState = {selectedState}
                setSelectedState = {setSelectedState}/>
            <hr />
            <div className = {styles.carouselWrapper}>
                <SkillsCarousel 
                    selectedState = {selectedState}
                    title = {"languages"}
                    skills = {skillsData[selectedState].languages}
                />
                <SkillsCarousel 
                    selectedState = {selectedState}
                    title = {"frameworks"}
                    skills = {skillsData[selectedState].frameworks}
                />  
                <SkillsCarousel 
                    selectedState = {selectedState}
                    title = {"technologies"}
                    skills = {skillsData[selectedState].technologies}
                />  
            </div>

        </div>
    )
}

// Buttons to choose skill category
interface SkillsSelectionProps{
    selectedState: string;
    setSelectedState: React.Dispatch<React.SetStateAction<string>>;
}


function SkillsSelection({selectedState, setSelectedState}:SkillsSelectionProps){
    return(
        <div className = {styles.skillSelector}>
            <div 
                className={`${styles.skillButton} ${selectedState === "webdev" ? styles.selected : ""}`}
                onClick={() => setSelectedState("webdev")}
            >
                webdev
            </div>
            <div className={`${styles.skillButton} ${selectedState === "ml/ai" ? styles.selected : ""}`}
                onClick={() => setSelectedState("ml/ai")}
            >
                ml/ai
            </div>
            <div className={`${styles.skillButton} ${selectedState === "robotics" ? styles.selected : ""}`}
                onClick={() => setSelectedState("robotics")}
            >
                robotics
            </div>
            <div className={`${styles.skillButton} ${selectedState === "ar/vr" ? styles.selected : ""}`}
                onClick={() => setSelectedState("ar/vr")}
            >
                ar/vr
            </div>
            <div className={`${styles.skillButton} ${selectedState === "all" ? styles.selected : ""}`}
                onClick={() => setSelectedState("all")}
            >
                all
            </div>

        </div>
    )
}

// Carousel to display skills

interface SkillsCarouselProps{
    title: string,
    selectedState: string,
    skills: Array<{name: string, icon:string}>
}

function SkillsCarousel({title, selectedState, skills} : SkillsCarouselProps){

    // Get DOM componenets for dynamic scrolling
    const carouselWindowRef = useRef<HTMLDivElement>(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Infinite Scroll Wheel
    const infiniteSkills = [...skills, ...skills, ...skills, ...skills, ...skills];
    const scrollAmount = 100;

    const scrollLeft = () => {
        setScrollPosition(prev => prev - scrollAmount);
    };

    const scrollRight = () => {
        setScrollPosition(prev => prev + scrollAmount);
    };

    // centers carousel when out of bounds (infinite effect)
    useEffect(() => {
        if (carouselTrackRef.current && skills.length > 0){
            const trackWidth = carouselTrackRef.current.scrollWidth;
            const singleSetWidth = trackWidth / 5;

            if (scrollPosition >= singleSetWidth * 3.1){
                setScrollPosition(2 * singleSetWidth);
            }
            else if (scrollPosition < singleSetWidth*.9){
                setScrollPosition(2 * singleSetWidth);
            }
        }
    }, [scrollPosition, skills.length]);

    // initailizes starting position when skills change
    useEffect(() => {
        if (carouselTrackRef.current && skills.length > 0){
            const trackWidth = carouselTrackRef.current.scrollWidth;
            const singleSetWidth = trackWidth / 5;
            setScrollPosition(2 * singleSetWidth);
        }
    }, [skills]);

    return(
        <div className = {styles.carousel}>
            <div className = {styles.carouselTitle}>
                {title}
            </div>
            <div className = {styles.carouselContainer}>
                <button 
                    className={`${styles.carouselArrow} ${styles.leftArrow}`}
                    onClick={scrollLeft}
                >
                    <img src={arrowIcon} alt="Previous" />
                </button>
                
                <div className = {styles.carouselWindow} ref={carouselWindowRef}>
                    <div className = {styles.carouselTrack} 
                        ref={carouselTrackRef} 
                        style={{ transform: `translateX(-${scrollPosition}px)` }}>

                        {infiniteSkills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name}
                                    className={styles.skillIcon}
                                />
                                <div className={styles.skillName}>
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button 
                    className={`${styles.carouselArrow} ${styles.rightArrow}`}
                    onClick={scrollRight}
                >
                    <img src={arrowIcon} alt="Next" />
                </button>
            </div>
        </div>
    )
}

// Overall Skill section
type SkillCategory = {
    languages: Array<{ name: string; icon: any }>;
    frameworks: Array<{ name: string; icon: any }>;
    technologies: Array<{ name: string; icon: any }>;
};

type SkillsData = {
    webdev: SkillCategory;
    "ml/ai": SkillCategory;
    robotics: SkillCategory;
    "ar/vr": SkillCategory;
    all?: SkillCategory; 
};

function Skills(){
    // Skills Data to pass into componenets
    const skillsData: SkillsData = {
        webdev:{
            languages: [
                { name: 'Python', icon: skillIcons.python},
                { name: 'Java', icon: skillIcons.java},
                { name: 'C#', icon: skillIcons.csharp},
                { name: 'Go', icon: skillIcons.go},
                { name: 'JavaScript', icon: skillIcons.js},
                { name: 'TypeScript', icon: skillIcons.typescript},
                { name: 'HTML', icon: skillIcons.html},
                { name: 'CSS', icon: skillIcons.css},
                { name: 'SQL', icon: skillIcons.sql},
            ],
            frameworks: [
                { name: 'Node', icon: skillIcons.nodejs},
                { name: 'Express', icon: skillIcons.express},
                { name: 'React', icon: skillIcons.react},
                { name: 'Next', icon: skillIcons.nextjs},
                { name: 'Django', icon: skillIcons.django},
                { name: 'Flask', icon: skillIcons.flask},
                { name: 'Spring Boot', icon: skillIcons.springboot},
                { name: 'Vite', icon: skillIcons.vite},
            ],
            technologies: [
                { name: 'Git', icon: skillIcons.git},
                { name: 'GitHub', icon: skillIcons.github},
                { name: 'PostgreSQL', icon: skillIcons.postgresql},
                { name: 'MySQL', icon: skillIcons.mysql},
                { name: 'MongoDB', icon: skillIcons.mongodb},
                { name: 'AWS', icon: skillIcons.aws},
                { name: 'Docker', icon: skillIcons.docker},
                { name: 'Vercel', icon: skillIcons.vercel},
                { name: 'Postman', icon: skillIcons.postman},
            ],
        },
        "ml/ai":{
            languages: [
                { name: 'Python', icon: skillIcons.python},
                { name: 'R', icon: skillIcons.r},
                { name: 'SQL', icon: skillIcons.sql},
                { name: 'C++', icon: skillIcons.cpp},
                { name: 'Java', icon: skillIcons.java},
            ],
            frameworks: [
                { name: 'PyTorch', icon: skillIcons.pytorch},
                { name: 'Scikit-Learn', icon: skillIcons.sklearn},
                { name: 'Pandas', icon: skillIcons.pandas},
                { name: 'NumPy', icon: skillIcons.numpy},
                { name: 'Matplotlib', icon: skillIcons.matplotlib},
                { name: 'Seaborn', icon: skillIcons.seaborn},
                { name: 'LangChain', icon: skillIcons.langchain},
                { name: 'OpenCV', icon: skillIcons.opencv},
                { name: 'HuggingFace', icon: skillIcons.huggingface},
            ],
            technologies: [
                { name: 'Git', icon: skillIcons.git},
                { name: 'GitHub', icon: skillIcons.github},
                { name: 'Google Colab', icon: skillIcons.colab},
                { name: 'Kaggle', icon: skillIcons.kaggle},
                { name: 'Cloudera', icon: skillIcons.cloudera},
                { name: 'AWS', icon: skillIcons.aws},
                { name: 'OpenAI', icon: skillIcons.openai},
                { name: 'Gemini', icon: skillIcons.gemini},
                { name: 'Docker', icon: skillIcons.docker},
            ],
        },
        robotics:{
            languages: [
                { name: 'Python', icon: skillIcons.python},
                { name: 'C', icon: skillIcons.c},
                { name: 'C++', icon: skillIcons.cpp},
                { name: 'Lua', icon: skillIcons.lua},
                { name: 'XML', icon: skillIcons.xml},
                { name: 'SDF', icon: skillIcons.sdf},
                { name: 'URDF', icon: skillIcons.urdf},
            ],
            frameworks: [
                { name: 'ROS 2 Jazzy', icon: skillIcons.ros2jazzy},
                { name: 'ROS 2 Humble', icon: skillIcons.ros2humble},
                { name: 'Gazebo Sim', icon: skillIcons.gazebo},
                { name: 'MoveIt', icon: skillIcons.moveit},
                { name: 'NAV2', icon: skillIcons.nav2},
                { name: 'CARLA', icon: skillIcons.carla},
                { name: 'Unreal Engine', icon: skillIcons.unreal},
                { name: 'OpenCV', icon: skillIcons.opencv},
            ],
            technologies: [
                { name: 'Git', icon: skillIcons.git},
                { name: 'GitHub', icon: skillIcons.github},
                { name: 'Docker', icon: skillIcons.docker},
                { name: 'Nvidia Jetson', icon: skillIcons.jetson},
                { name: 'Ubuntu', icon: skillIcons.ubuntu},
            ],
        },
        "ar/vr":{
            languages: [
                { name: 'C#', icon: skillIcons.csharp},
                { name: 'C++', icon: skillIcons.cpp},
                { name: 'JavaScript', icon: skillIcons.js},
                { name: 'TypeScript', icon: skillIcons.typescript},
                { name: 'Java', icon: skillIcons.java},
                { name: 'Python', icon: skillIcons.python},
            ],
            frameworks: [
                { name: 'Unity', icon: skillIcons.unity},
                { name: 'Unreal Engine', icon: skillIcons.unreal},
                { name: 'OpenXR', icon: skillIcons.openxr},
                { name: 'MRTK 2', icon: skillIcons.mrtk},
                { name: 'MRTK 3', icon: skillIcons.mrtk},
            ],
            technologies: [
                { name: 'Git', icon: skillIcons.git},
                { name: 'GitHub', icon: skillIcons.github},
                { name: 'Hololens 2', icon: skillIcons.hololens2},
                { name: 'Meta Quest', icon: skillIcons.meta},
                { name: 'Visual Studio', icon: skillIcons.visualstudio},
            ],
        },
    }

    // add all section
    const allLanguagesMap = new Map();
    const allFrameworksMap = new Map();
    const allTechnologiesMap = new Map();

    for(const category of Object.values(skillsData)){

        for(const lang of category.languages){
            allLanguagesMap.set(lang.name, lang)
        }

        for(const frame of category.frameworks){
            allFrameworksMap.set(frame.name, frame)
        }

        for(const tech of category.technologies){
            allTechnologiesMap.set(tech.name, tech)
        }
    }

    skillsData.all = {
        languages: Array.from(allLanguagesMap.values()),
        frameworks: Array.from(allFrameworksMap.values()),
        technologies: Array.from(allTechnologiesMap.values()),
    };



    return(
        <div className = {styles.section}>
            <div className = {styles.title}>
                skills
            </div>
            <SkillsTable skillsData={skillsData}/>
            
        </div>
    )
}



export default Skills;