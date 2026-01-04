import React, {useState} from 'react';
import styles from './landing-section.module.css';
import { useNavigate } from 'react-router';

// Interface for navigation text
interface NavigationText{
    text: string;
    x: number;
    y: number;
    onClick: () => void;
}

// Generates Navigation Text on landing screen
const TextButton = ({text, x, y, onClick}: NavigationText) => {
    return(
        <button
            onClick = {onClick}
            className = {styles.textButton}
            style = {{
                left: `${x}%`,
                top: `${y}%`
            }}
        >
            {text}
        </button>
    )
}


// Generates Landing Page

interface LandingPageProps {
    onScrollToResearch: () => void;
    onScrollToExperience: () => void;
    onScrollToSkills: () => void;
    onScrollToAbout: () => void;
}

function LandingPage({onScrollToResearch, onScrollToAbout, onScrollToExperience, onScrollToSkills} : LandingPageProps){
    const navigate = useNavigate();
    
    return (
        <div className = {styles.section}>

            <div className = {styles.title}>
                cameron huang
            </div>

            <TextButton
                text='projects'
                x = {40}
                y = {15}
                onClick = {onScrollToResearch}
            />
            <TextButton
                text='resume'
                x = {80}
                y = {25}
                onClick = {onScrollToAbout}
            />
            <TextButton
                text='research'
                x = {15}
                y = {40}
                onClick = {onScrollToResearch}
            />
            <TextButton
                text='experience'
                x = {55}
                y = {50}
                onClick = {onScrollToExperience}
            />
            <TextButton
                text='about'
                x = {31}
                y = {70}
                onClick = {onScrollToAbout}
            />
            <TextButton
                text='skills'
                x = {72}
                y = {75}
                onClick = {onScrollToSkills}
            />
            <TextButton
                text='blog'
                x = {5}
                y = {85}
                onClick = {() => navigate('/blog')}
            />
            <TextButton
                text='contact'
                x = {88}
                y = {85}
                onClick = {onScrollToAbout}
            />

        </div>

    )

}

export default LandingPage;