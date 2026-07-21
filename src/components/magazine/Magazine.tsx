import Cover from "./pages/Cover"
import About from "./pages/about/About"
import ChapterIndex from "./pages/chapter-index/ChapterIndex"
import Narrative from "./pages/feature/Narrative"
import Media from "./pages/feature/Media"
import { NarrativeData, ProjectItemData, ProjectLink, MediaItem } from "./pages/types"

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

const experienceItems: ProjectItemData[] = [
    {
        pageRange: "5 — 6",
        title: "Software Developer Internship",
        subtitle: "AT&T - 2026",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "7 — 8",
        title: "Software Developer Internship",
        subtitle: "AbbVie - 2025",
        image: "/pages/projects/project_placeholder.jpg",
    },
];

const experienceItemsContinued: ProjectItemData[] = [
    {
        pageRange: "9 — 10",
        title: "Data Engineering Internship",
        subtitle: "AbbVie - 2026",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "11 — 12",
        title: "Club President",
        subtitle: "Rice AR/VR Club",
        image: "/pages/projects/project_placeholder.jpg",
    },
    {
        pageRange: "13 — 14",
        title: "Simulations Lead",
        subtitle: "Rice Robotics Club - Martian Rover Team",
        image: "/pages/projects/project_placeholder.jpg",
    },
];
const rover: NarrativeData = {
    title: "Pressurized Rover Intelligence Platform",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description:
        "Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more! Long paragraph covering what the project is, what my role is during it, any reflections i had during development, and more!",
};


const roverMediaItems: MediaItem[] = [
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
                    {/* <ChapterIndex pageNumber={3} chapterNumber="03" chapterName="projects" items={projectItems} /> */}
                    <ChapterIndex pageNumber={1} chapterNumber="02" chapterName="experience" items={experienceItems} />
                </div>

                {/* Right page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25 overflow-hidden">
                    {/* <ChapterIndex pageNumber={4} chapterNumber="03" chapterName="projects" items={projectItemsContinued} showTitle={false} /> */}
                    <ChapterIndex pageNumber={2} chapterNumber="02" chapterName="experience" items={experienceItemsContinued} showTitle={false} />
                </div>
            </div>
        </div>
    )
}