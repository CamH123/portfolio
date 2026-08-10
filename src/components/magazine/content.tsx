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
        caption: "10 weeks, 133 commits, and 16 PRs later, our code is officially in production. Shoutout Jeffery, Prasit, and our mentor Dan!",
    },
    {
        image: "/pages/experience/att_2.jpg",
        caption: "Still can’t believe we built an entire agentic workflow and presented it nationally in just 48 hours. Couldn’t have done it without the team, let's go Flowbreakers!",
    },
    {
        image: "/pages/experience/att_3.jpg",
        caption: "Best part about working in the Dallas office? You were never more than a step away from the World Cup.",
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
    title: "PR Intelligence Platform",
    time: "NASA SUITS 2026",
    image: "/pages/projects/suits2026/suits2026_0.jpg",
    caption: "Moments before our first test night at the Johsnon Space Center!",
    description:
        "Developed for the NASA SUITS 2026 Challenge, our goal was to create an autonomous pressurized rover control interface to help astronauts navigate the lunar south pole and find a missing Lunar Terrain Vehicle (LTV). I ended up wearing a lot of hats: I owned the system architecture, shaped user workflows with our HF team, led project management, and took technical ownership of the autonomous navigation system. Technically, this project stretched me. I fine-tuned a YOLO model from scratch, built a streaming service, and architected a system that could handle multiple intensive AI processes and concurrent control systems at once. But the hardest lessons were about leadership. I was in charge of over 20 people, each with their own background and ideas about how things should get done. This project pushed me to lead without always having the answers, to trust others in their domains, and to communicate constantly so we stayed aligned throughout the year.",
};

const suits2026Media: MediaItem[] = [
    {
        image: "/pages/projects/suits2026/auto_nav_demo.mp4",
        caption: "Navigation Screen: A display that let's the pilot control the rover and engage autonomous navigation.",
    },
    {
        image: "/pages/projects/suits2026/telemetry_demo.mp4",
        caption: "Telemetry Screen: An intutitive dashboard that highlights and alerts important health data.",
    },
    {
        image: "/pages/projects/suits2026/ltv_search_demo.mp4",
        caption: "Map Screen: An advanced path planning application to help the pilot find the lost LTV.",
    },
];

const suits2026Links: ProjectLink[] = [
    { label: "Github", href: "https://github.com/Rice-ARVR/OWL-SUITS-2026-PR" },
    { label: "Proposal", href: "https://docs.google.com/document/d/1vViXCav1NrxgJCWB73lyFr7TjIqc36ObeJcpyedRY2I/edit?tab=t.0" },
    { label: "Exit Pitch Slides", href: "https://docs.google.com/presentation/d/17pI6eu1O87Ero6XG_PJkbaEzfBmWmDGLCrxGnhLNep8/edit?usp=sharing" },
    { label: "Exit Pitch Recording", href: "https://www.youtube.com/live/VIQ5LbNfwNY?t=8556&si=ZFugoQ2kFGSLxOyk" },
];

const suits2025Narrative: NarrativeData = {
    title: "AR Spacesuit Interface",
    time: "NASA SUITS 2025",
    image: "/pages/projects/suits2025/suits2025_0.jpg",
    caption: "The only way to beat Murphy's law is ... redundancy!",
    description: "For the NASA SUITS 2025 Challenge, we developed an augmented reality interface to help astronauts perform extravehicular activities at the lunar south pole. This was my first time developing for the HoloLens 2, and AR as a platform in general. It was interesting to rethink how I approached interface design when moving from a 2D system to something spatial, and it taught me a lot about UI design and how it can be used to reduce cognitive load rather than add to it. For this project, I was the lead developer, owning both the high-performance server for streaming live telemetry data and the geological sampling notebook. Our project was selected as top 5 in the nation, and getting to test it at Johnson Space Center, get feedback directly from NASA engineers, and meet other students tackling the same problem in completely different ways was one of the highlights of the whole experience.",
};

const suits2025Media: MediaItem[] = [
    {
        image: "/pages/projects/suits2025/suits_2025_geo.mp4",
        caption: "A virtual notebook connected to the XRF scanner to help with geological sampling.",
    },
    {
        image: "/pages/projects/suits2025/suits2025_ingegg_demo.mp4",
        caption: "Procedures to assist with ingress and egress.",
    },
    {
        image: "/pages/projects/suits2025/16.jpg",
        caption: "I think we were the smallest team selected!",
    },
];

const suits2025Links: ProjectLink[] = [
    { label: "Github", href: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025" },
    { label: "Proposal", href: "https://docs.google.com/document/d/1PcB0ZTBY3s5H4OZfvU3oWCtm59bli4tEMxpLIZt2VuA/edit?usp=sharing" },
    { label: "Exit Pitch Slides", href: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025/blob/main/content/NASA%20SUITS%20Exit%20Pitch%20May%202025.pdf" },
    { label: "Exit Pitch Recording", href: "https://www.youtube.com/live/2fiBoE0x6wE?t=3849s" },
    { label: "Poster", href: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025/blob/main/content/NASA%20SUITS%20Poster%20Spring%2025.pdf" },
];

const pongAgentNarrative: NarrativeData = {
    title: "RL Pong Agent",
    time: "Psych 203 Final Project",
    image: "/pages/projects/pong_late.mp4",
    caption: "I felt like a proud dad when I saw my agent score its first point.",
    description: "This is a project I wish I'd finished sooner. It all started freshman year, when I first met with a professor about my interest in AI and its use in transportation systems. He recommended I read Playing Atari with Deep Reinforcement Learning, highlighting the similarities between using AI to beat racing games and modern day autonomous transportation systems. I remember being so confused the first time I read the article, getting lost in all of the statistical and computational theory. It took until sophomore year for me to actually sit down and build it out, when Psych 203, Intro to Cognitive Science, gave me the perfect excuse with a final project that asked us to connect core concepts from the class to something of our own. I used cloud computing for training and got my first real hands-on experience working with environment systems, finally turning what I'd only read about into something I'd built myself. Then I pushed it further, overlaying attention heat maps from the AI system against our own brains to see how each one directs its focus.",
};

const pongAgentMedia: MediaItem[] = [
    {
        image: "/pages/projects/project_placeholder.jpg",
        caption: "At first, I was worried that the agent was never going to learn.",
    },
    {
        image: "/pages/projects/pong_reward.png",
        caption: "It was cool learning and compare RL's optimization of reward to loss in traditional ML",
    },
    {
        image: "/pages/projects/saliency_grid.png",
        caption: "Saliency grid highlighting the CNN's 'attention'",
    },
];

const pongAgentLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
];

const roverSimulatorNarrative: NarrativeData = {
    title: "Rover Simulator",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const roverSimulatorMedia: MediaItem[] = [
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

const sspNarrative: NarrativeData = {
    title: "Near Earth Asteroid Model",
    image: "/pages/projects/project_placeholder.jpg",
    caption: "Screens: Caption Here ...",
    description: placeholderDescription,
};

const sspMedia: MediaItem[] = [
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

const sspLinks: ProjectLink[] = [
    { label: "Github", href: "#" },
    { label: "Report", href: "#" },
];


const projectItems: Entity[] = [
    {
        title: "Pressurized Rover Intelligence Platform",
        subtitle: "NASA SUITS 2026",
        image: "/pages/projects/suits2026/auto_nav_demo.mp4",
        detailPages: [
            (pageNumber) => <Narrative key="suits2026-narrative" pageNumber={pageNumber} data={suits2026Narrative} />,
            (pageNumber) => <Media key="suits2026-media" pageNumber={pageNumber} items={suits2026Media} links={suits2026Links} />,
        ],
    },
    {
        title: "Augmented Reality Spacesuit Display",
        subtitle: "NASA SUITS 2025",
        image: "/pages/projects/suits2025/suits_2025_geo.mp4",
        detailPages: [
            (pageNumber) => <Narrative key="suits2025-narrative" pageNumber={pageNumber} data={suits2025Narrative} />,
            (pageNumber) => <Media key="suits2025-media" pageNumber={pageNumber} items={suits2025Media} links={suits2025Links} />,
        ],
    },
];

const projectItemsContinued: Entity[] = [
    {
        title: "Reinforcement Learning Pong Agent",
        subtitle: "Pysch 203 Final",
        image: "/pages/projects/pong_idx.mp4",
        detailPages: [
            (pageNumber) => <Narrative key="pong-agent-narrative" pageNumber={pageNumber} data={pongAgentNarrative} />,
            (pageNumber) => <Media key="pong-agent-media" pageNumber={pageNumber} items={pongAgentMedia} links={pongAgentLinks} />,
        ],
    },
    // {
    //     title: "Rover Simulator",
    //     subtitle: "Rice Robotics",
    //     image: "/pages/projects/project_placeholder.jpg",
    //     detailPages: [
    //         (pageNumber) => <Narrative key="rover-simulator-narrative" pageNumber={pageNumber} data={roverSimulatorNarrative} />,
    //         (pageNumber) => <Media key="rover-simulator-media" pageNumber={pageNumber} items={roverSimulatorMedia} links={roverSimulatorLinks} />,
    //     ],
    // },
    {
        title: "Near Earth Asteroid Model",
        subtitle: "Summer Science Program 2023",
        image: "/pages/projects/ssp_vid.mp4",
        detailPages: [
            (pageNumber) => <Narrative key="asteroid-model-narrative" pageNumber={pageNumber} data={sspNarrative} />,
            (pageNumber) => <Media key="asteroid-model-media" pageNumber={pageNumber} items={sspMedia} links={sspLinks} />,
        ],
    },
];

const projectsChapter: Chapter = {
    chapterNumber: "03",
    chapterName: "projects",
    entityGroups: [projectItems, projectItemsContinued],
};

const chapters: Chapter[] = [experienceChapter, projectsChapter];

export const { pages, sections } = buildPages(chapters);
