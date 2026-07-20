import Cover from "./pages/Cover"
import About from "./pages/about/About"
import ProjectContents from "./pages/projects/ProjectContents"
import ProjectInfo from "./pages/projects/ProjectInfo"
import ProjectMedia from "./pages/projects/ProjectMedia"
import { ProjectInfoData, ProjectItemData, ProjectLink, ProjectMediaItem } from "./pages/types"

const projectItems: ProjectItemData[] = [
    {
        pageRange: "5 — 6",
        title: "Pressurized Rover Intelligence Platform",
        subtitle: "NASA SUITS 2026",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "7 — 8",
        title: "Augmented Reality Spacesuit Display",
        subtitle: "NASA SUITS 2025",
        image: "/pages/projects/project_placeholder.jpg",
    },
];

const projectItemsContinued: ProjectItemData[] = [
    {
        pageRange: "9 — 10",
        title: "Reinforcement Learning Pong Agent",
        subtitle: "Double DQN Architecture",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "11 — 12",
        title: "Rover Simulator",
        subtitle: "Rice Robotics",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "13 — 14",
        title: "Near Earth Asteroid Model",
        subtitle: "Summer Science Program",
        image: "/pages/projects/project_placeholder.jpg",
    },
];
const rover: ProjectInfoData = {
    title: "Pressurized Rover Intelligence Platform",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description:
        "Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more!",
};


const roverMediaItems: ProjectMediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Navigation Screen Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Telemetry Screen Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Team Group Photo",
    },
];

const roverLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
    { label: "Proposal", href: "#" },
    { label: "CDR", href: "#" },
    { label: "SDR", href: "#" },
    { label: "Exit Pitch", href: "#" },
    { label: "Exit Pitch Presentation", href: "#" },
];



export default function Magazine() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full max-h-full items-stretch justify-center p-4">
                {/* Left page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25">
                    <ProjectInfo pageNumber={3} data={rover}/>
                </div>

                {/* Right page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25 overflow-hidden">
                    <ProjectMedia pageNumber={4} items={roverMediaItems} links={roverLinks}/>
                </div>
            </div>
        </div>
    )
}