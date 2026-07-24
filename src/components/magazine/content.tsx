import Narrative from "./pages/feature/Narrative"
import Media from "./pages/feature/Media"
import { Chapter, Entity, NarrativeData, MediaItem, ProjectLink } from "./pages/types"
import { buildPages } from "./buildPages"

// ---- experience ----

const placeholderDescription =
    "Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more! Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more! Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more!";

const atntNarrative: NarrativeData = {
    title: "Software Developer Internship",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const atntMediaItems: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Team Photo Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Project Screen Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Office Caption",
    },
];

const abbvieSweNarrative: NarrativeData = {
    title: "Software Developer Internship",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const abbvieDataEngNarrative: NarrativeData = {
    title: "Data Engineering Internship",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const arvrNarrative: NarrativeData = {
    title: "Club President",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const roboticsNarrative: NarrativeData = {
    title: "Simulations Lead",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const experienceItems: Entity[] = [
    {
        title: "Software Developer Internship",
        subtitle: "AT&T - 2026",
        image: "/pages/projects/project_placeholder.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="atnt-narrative" pageNumber={pageNumber} data={atntNarrative} />,
            (pageNumber) => <Media key="atnt-media" pageNumber={pageNumber} items={atntMediaItems} />,
        ],
    },
    {
        title: "Software Developer Internship",
        subtitle: "AbbVie - 2025",
        image: "/pages/projects/project_placeholder.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="abbvie-swe-narrative" pageNumber={pageNumber} data={abbvieSweNarrative} />,
        ],
    },
];

const experienceItemsContinued: Entity[] = [
    {
        title: "Data Engineering Internship",
        subtitle: "AbbVie - 2026",
        image: "/pages/projects/project_placeholder.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="abbvie-data-eng-narrative" pageNumber={pageNumber} data={abbvieDataEngNarrative} />,
        ],
    },
    {
        title: "Club President",
        subtitle: "Rice AR/VR Club",
        image: "/pages/projects/project_placeholder.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="club-president-narrative" pageNumber={pageNumber} data={arvrNarrative} />,
        ],
    },
    {
        title: "Simulations Lead",
        subtitle: "Rice Robotics Club - Martian Rover Team",
        image: "/pages/projects/project_placeholder.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="sims-lead-narrative" pageNumber={pageNumber} data={roboticsNarrative} />,
        ],
    },
];

const experienceChapter: Chapter = {
    chapterNumber: "02",
    chapterName: "experience",
    entityGroups: [experienceItems, experienceItemsContinued],
};

// ---- projects ----

const suits2026Narrative: NarrativeData = {
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

const rover: Entity = {
    title: suits2026Narrative.title,
    subtitle: "NASA SUITS 2026",
    image: "/pages/projects/project_placeholder.jpg",
    detailPages: [
        (pageNumber) => <Narrative key="rover-narrative" pageNumber={pageNumber} data={suits2026Narrative} />,
        (pageNumber) => <Media key="rover-media" pageNumber={pageNumber} items={roverMediaItems} links={roverLinks} />,
    ],
};

const suits2025Narrative: NarrativeData = {
    title: "Augmented Reality Spacesuit Display",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const arDisplayMediaItems: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Heads-Up Display Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Field Test Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Team Photo Caption",
    },
];

const arDisplayLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
    { label: "Proposal", href: "#" },
];

const arDisplay: Entity = {
    title: suits2025Narrative.title,
    subtitle: "NASA SUITS 2025",
    image: "/pages/projects/project_placeholder.jpg",
    detailPages: [
        (pageNumber) => <Narrative key="ar-display-narrative" pageNumber={pageNumber} data={suits2025Narrative} />,
        (pageNumber) => <Media key="ar-display-media" pageNumber={pageNumber} items={arDisplayMediaItems} links={arDisplayLinks} />,
    ],
};

const pongAgentNarrative: NarrativeData = {
    title: "Reinforcement Learning Pong Agent",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const pongAgentMediaItems: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Training Graph Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Gameplay Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Architecture Diagram Caption",
    },
];

const pongAgentLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
];

const pongAgent: Entity = {
    title: pongAgentNarrative.title,
    subtitle: "Double DQN Architecture",
    image: "/pages/projects/project_placeholder.jpg",
    detailPages: [
        (pageNumber) => <Narrative key="pong-agent-narrative" pageNumber={pageNumber} data={pongAgentNarrative} />,
        (pageNumber) => <Media key="pong-agent-media" pageNumber={pageNumber} items={pongAgentMediaItems} links={pongAgentLinks} />,
    ],
};

const roverSimulatorNarrative: NarrativeData = {
    title: "Rover Simulator",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const roverSimulatorMediaItems: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Simulation Environment Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Rover Model Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Team Photo Caption",
    },
];

const roverSimulatorLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
];

const roverSimulator: Entity = {
    title: roverSimulatorNarrative.title,
    subtitle: "Rice Robotics",
    image: "/pages/projects/project_placeholder.jpg",
    detailPages: [
        (pageNumber) => <Narrative key="rover-simulator-narrative" pageNumber={pageNumber} data={roverSimulatorNarrative} />,
        (pageNumber) => <Media key="rover-simulator-media" pageNumber={pageNumber} items={roverSimulatorMediaItems} links={roverSimulatorLinks} />,
    ],
};

const sspNarrative: NarrativeData = {
    title: "Near Earth Asteroid Model",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const asteroidModelMediaItems: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Model Visualization Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Data Plot Caption",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Team Photo Caption",
    },
];

const asteroidModelLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
    { label: "Report", href: "#" },
];

const asteroidModel: Entity = {
    title: sspNarrative.title,
    subtitle: "Summer Science Program",
    image: "/pages/projects/project_placeholder.jpg",
    detailPages: [
        (pageNumber) => <Narrative key="asteroid-model-narrative" pageNumber={pageNumber} data={sspNarrative} />,
        (pageNumber) => <Media key="asteroid-model-media" pageNumber={pageNumber} items={asteroidModelMediaItems} links={asteroidModelLinks} />,
    ],
};

const projectsChapter: Chapter = {
    chapterNumber: "03",
    chapterName: "projects",
    entityGroups: [
        [rover, arDisplay],
        [pongAgent, roverSimulator, asteroidModel],
    ],
};

const chapters: Chapter[] = [experienceChapter, projectsChapter];

export const pages = buildPages(chapters);
