import Narrative from "./pages/feature/Narrative"
import Media from "./pages/feature/Media"
import { Chapter, Entity, NarrativeData, MediaItem, ProjectLink } from "./pages/types"
import { buildPages } from "./buildPages"

// ---- experience ----

const placeholderDescription =
    "Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more! Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more! Long paragraph covering what the role involved, what my responsibilities were, any reflections i had during the experience, and more!";

const atntNarrative: NarrativeData = {
    title: "AT&T SWE Internship",
    time: "Summer 2026",
    image: "/pages/experience/att_0.jpg",
    caption: "Nonchalantly meeting the CEO on a random Thursday.",
    description: "Working at AT&T this summer has been one of the most influential experiences of my life, both professionally and personally. Over 10 weeks in the hot Dallas summer, I led a modernization of LEVO, our logistics and inventory management system for cell towers, migrating it to a modular React-based architecture. I also built an agentic workflow to automate a personalized customer anniversary experience, which went on to win the national intern hackathon. And somewhere in between, I shook hands with CEO John Stankey (I'm never washing my hands again)! Outside of work, I joined 36 other interns in the Technology Development Program for go-karting, endless ping pong matches, and more cups of coffee than I can count. Through it all, I learned how much teamwork and communication matter when working across large codebases, why quality and regression testing are non-negotiable when your code touches thousands of users, and how to keep sight of business impact in every line I write.",
};

const atntMediaItems: MediaItem[] = [
    {
        image: "/pages/experience/att_1.jpg",
        caption: "10 weeks, 133 commits, and 16 PRs later, our code is officially in production! Shoutout Jeffery, Prasit, and our mentor Dan!",
    },
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "Still can’t believe we built an entire agentic workflow and presented it nationally in just 48 hours. Couldn’t have done it without Kriti, Sadhana, Kevin, and our mentor Afreen!",
    },
    {
        image: "/pages/experience/att_3.jpg",
        caption: "Best part about working in this office? You were never more than a step away from the World Cup.",
    },
];

const abbvieSweNarrative: NarrativeData = {
    title: "AbbVie SWE Internship",
    time: "Summer 2025",
    image: "/pages/experience/abbv_2025.jpg",
    caption: "Moments before the end of summer poster showcase!",
    description:
        "This summer showed me the power of AI and just how far its applications can reach across every industry. I spent the summer building ARMANI, an end-to-end agentic application that helps compliance managers automate their reviews of medical affairs content. Along the way, I learned a ton about LLMs, RAG, and what it actually takes to build a full-stack system from the ground up. One of the biggest lessons I took away was that the best automation doesn't replace people, but instead augments their workflow. That idea shaped how I approached the entire project. Some of the most enjoyable parts of my summer were sitting down with compliance managers, understanding their pain points firsthand, and refining the automation to solve real problems all while keeping them in the loop rather than cutting them out of it. Watching the app get deployed and reviewing feedback was incredibly rewarding, seeing something I built actually make a difference.",
};

const abbvieDataSciNarrative: NarrativeData = {
    title: "AbbVie DS Internship",
    time: "Summer 2024",
    image: "/pages/experience/abbv_2024.jpg",
    caption: "A small but mighty crew of chemist, mechanical, biomedical, and software engineers.",
    description:
        "Wow, I can't believe it all started here. This was my very first internship experience, and I learned more than I ever expected to. Over the summer, I built an infusion pump data ingestion and analysis platform, working across different data systems to bring it all together. The part of this summer I remember most is building software that actually connects to physical hardware, not something that lives purely in a virtual world. I came to really appreciate what it means to build software and data products in an environment that isn't traditionally software first. Throughout the ten weeks, I spent a lot of time in the lab, working and talking with engineers from all kinds of backgrounds to understand the infusion pump, the problems they were facing, and how to best build software around the test rigs and everything else that came with it. This was also the summer that first introduced me to ping pong, a sport that I've brought with me to every office since!",
};

const arvrNarrative: NarrativeData = {
    title: "Rice AR/VR Club",
    time: "Club President",
    image: "/pages/experience/arvr_0.jpg",
    caption: "Recruiting at the Rice Spring Club Fair.",
    description: "Running this club has been one of the most formative experiences of my life. This was the first time I was truly in charge of a large organization, where my decisions had a direct impact on the club's trajectory. I learned about the difficulties of recruitment and retention, of balancing the goals of different members and teams, of building relationships with professors, local companies, and labs, of raising money, hosting workshops and events, and so much more. But every challenge came with a win just as rewarding, and watching the club grow because of it was one of the best feelings I've had. Being in this club truly taught me how to be a leader, something completely different from my experiences in high school, where coaches and teachers absorbed a lot of that burden. This is also the club that helped me create two of my favorite projects, built while competing in the NASA SUITS competition."
};

const roboticsNarrative: NarrativeData = {
    title: "Rice Robotics Club",
    time: "Mars Rover Simulations Lead",
    image: "/pages/experience/robotics.avif",
    caption: "Presenting our first prototype at the OEDK Engineering Showcase.",
    description: "I still remember exactly what it felt like walking into my first robotics club meeting freshman year. I was nervous, having never touched robotics before, but excited to meet new people and dive into something completely unfamiliar. I couldn't be more grateful I joined. Between working with ROS 2 and learning how to stay adaptable when things inevitably broke, I picked up more technical knowledge than I ever expected. But more than anything, what I gained from this experience was the people. Everyone around me was passionate, sharp, and genuinely in love with the craft, and that energy was contagious. Their desire to build and lead rubbed off on me, and it's something I still carry with me today. They shaped how I found the area of CS I care about most, got me through some of the hardest classes in the curriculum, and along the way became some of my closest friends.",
};

const experienceItems: Entity[] = [
    {
        title: "AT&T - Summer 2026",
        subtitle: "Software Developer Intern (TDP)",
        image: "/pages/experience/att_2026.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="atnt-narrative" pageNumber={pageNumber} data={atntNarrative} />,
            (pageNumber) => <Media key="atnt-media" pageNumber={pageNumber} items={atntMediaItems} />,
        ],
    },
    {
        title: "AbbVie - Summer 2025",
        subtitle: "Software Developer Intern (BTS)",
        image: "/pages/experience/abbv_2025.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="abbvie-swe-narrative" pageNumber={pageNumber} data={abbvieSweNarrative} />,
        ],
    },
];

const experienceItemsContinued: Entity[] = [
    {
        title: "AbbVie - Summer 2024",
        subtitle: "Data Science Intern (PDS&T)",
        image: "/pages/experience/abbv_2024.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="abbvie-data-sci-narrative" pageNumber={pageNumber} data={abbvieDataSciNarrative} />,
        ],
    },
    {
        title: "Rice AR/VR Club",
        subtitle: "Club President",
        image: "/pages/experience/arvr.jpg",
        detailPages: [
            (pageNumber) => <Narrative key="club-president-narrative" pageNumber={pageNumber} data={arvrNarrative} />,
        ],
    },
    {
        title: "Rice Robotics Club",
        subtitle: "Mars Rover Simulations Lead",
        image: "/pages/experience/robotics.avif",
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

export const { pages, sections } = buildPages(chapters);
