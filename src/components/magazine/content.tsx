import Narrative from "./pages/feature/Narrative"
import Media from "./pages/feature/Media"
import { Chapter, Entity, NarrativeData, MediaItem, ProjectLink } from "./pages/types"
import { buildPages } from "./buildPages"

// ---- experience ----

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
        caption: "10 weeks, 133 commits, and 16 PRs later, our code is officially in production.",
    },
    {
        image: "/pages/experience/att_2.jpg",
        caption: "Still can’t believe we built an entire agentic workflow in just 48 hours. Let's go team Flowbreakers!",
    },
    {
        image: "/pages/experience/att_3.jpg",
        caption: "The best part about the Dallas office was that you were never more than a step away from the World Cup.",
    },
];

const abbvieSweNarrative: NarrativeData = {
    title: "AbbVie SWE Internship",
    time: "Summer 2025",
    image: "/pages/experience/abbv_2025.jpg",
    caption: "It was cool to see everyone's work come together!",
    description:
        "This summer showed me the power of AI and just how far its applications can reach across every industry. I spent the summer building ARMANI, an end-to-end agentic application that helps compliance managers automate their reviews of medical affairs content. Along the way, I learned a ton about LLMs, RAG, and what it actually takes to build a full-stack system from the ground up. One of the biggest lessons I took away was that the best automation doesn't replace people, but instead augments their workflow. That idea shaped how I approached the entire project. Some of the most enjoyable parts of my summer were sitting down with compliance managers, understanding their pain points firsthand, and refining the automation to solve real problems all while keeping them in the loop rather than cutting them out of it. Watching the app get deployed and reviewing feedback was incredibly rewarding, seeing something I built actually make a difference.",
};

const abbvieDataSciNarrative: NarrativeData = {
    title: "AbbVie DS Internship",
    time: "Summer 2024",
    image: "/pages/experience/abbv_2024.jpg",
    caption: "A small but mighty crew of chemists, mechanical, biomedical, and software engineers.",
    description:
        "Wow, I can't believe it all started here. This was my very first internship experience, and I learned more than I ever expected to. Over the summer, I built an infusion pump data ingestion and analysis platform, working across different data systems to bring it all together. What I remember most was getting to sit on both sides of the tool I was building. In addition to developing the platform, I was also using it myself to dig through infusion pump flow rate test data, uncover patterns, and answer questions the team had been trying to understand. It was my first real glimpse into how software engineering and data science could work together, and it sparked my interest in building systems that use real-world data to solve real problems. Outside of the work, some of my favorite memories were going to a Cubs game with the team and discovering ping pong, a sport that I've somehow brought with me to every office since!",
};

const arvrNarrative: NarrativeData = {
    title: "Rice AR/VR Club",
    time: "Club President",
    image: "/pages/experience/arvr_0.jpg",
    caption: "Recruiting at the Rice Spring Club Fair.",
    description: "Running this club has been one of the most formative experiences of my time at Rice. It was my first opportunity to truly shape the direction of a large organization, from growing our community and leading different project teams to building relationships with professors, local companies, and labs. Along the way, I learned that leadership is about much more than making decisions. It’s about bringing people together around a shared vision, creating opportunities for others to grow, and building something people genuinely want to be a part of. Watching the club grow has been one of the most rewarding parts of college, especially knowing how much I’ve grown alongside it. It also gave me the opportunity to build two of my favorite projects through the NASA SUITS competition, meet some of my closest friends and mentors, and make some of my favorite memories at Rice along the way. "
};

const roboticsNarrative: NarrativeData = {
    title: "Rice Robotics Club",
    time: "Mars Rover Simulations Lead",
    image: "/pages/experience/robotics.avif",
    caption: "Presenting our first prototype at the OEDK Engineering Showcase.",
    description: "I joined Rice Robotics freshman year knowing almost nothing about robotics, and it quickly became one of the communities that shaped my time at Rice. It was where I first got to work with ROS 2, build software that had to interact with a much larger system, and learn the inevitable cycle of building, breaking, debugging, and trying again. I especially loved working with simulations, where I could build an entire world in code and watch the robot navigate and react to it. It opened my eyes to a completely different kind of software development, where what I built could interact with an environment rather than just live on a screen. Being surrounded by people who were constantly building and excited to share what they knew also pushed me to explore parts of computer science I probably never would have found on my own. Robotics helped me discover the kind of technical problems I love working on, gave me people to turn to through some of my hardest classes, and ultimately became a huge part of my college experience. ",
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
    caption: "Moments before our first test night at the Johnson Space Center!",
    description:
        "Developed for the NASA SUITS 2026 Challenge, our goal was to create an autonomous pressurized rover control interface to help astronauts navigate the lunar south pole and find a missing Lunar Terrain Vehicle (LTV). I ended up wearing a lot of hats for this project: I owned the system architecture, shaped user workflows with our HF team, led project management, and took technical ownership of the autonomous navigation system. It became one of those projects where I got to explore almost every part of building a complex system. I fine-tuned a YOLO model, built a streaming service, and architected a platform that could run multiple AI processes alongside concurrent rover control systems. At the same time, leading a team of over 20 people gave me a completely new appreciation for project management, from setting priorities and coordinating across subteams to making sure all of our work actually came together on schedule. More than anything, I loved watching all of those pieces come together into something we built as a team.",
};

const suits2026Media: MediaItem[] = [
    {
        image: "/pages/projects/suits2026/auto_nav_demo.mp4",
        caption: "Navigation Screen: A display that lets the pilot control the rover and engage autonomous navigation.",
    },
    {
        image: "/pages/projects/suits2026/telemetry_demo.mp4",
        caption: "Telemetry Screen: An intuitive dashboard that highlights and alerts important health data.",
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
    description: "For the NASA SUITS 2025 Challenge, we developed an augmented reality interface to help astronauts perform extravehicular activities at the lunar south pole. This was my first time developing for the HoloLens 2, or for AR in general, and it completely changed how I thought about interface design. Moving from a 2D screen into a spatial environment taught me to think much more intentionally about how software could reduce cognitive load rather than add to it. As lead developer, I built the high-performance server that streamed live telemetry to the interface and developed the geological sampling notebook used during EVA operations. Our project was ultimately selected as a top-five finalist in the nation, and getting to test it at Johnson Space Center, hear directly from NASA engineers, and meet other teams approaching the same problem in completely different ways was one of my favorite experiences from the project. ",
};

const suits2025Media: MediaItem[] = [
    {
        image: "/pages/projects/suits2025/suits_2025_geo.mp4",
        caption: "A virtual geological sampling notebook with AI-powered analysis.",
    },
    {
        image: "/pages/projects/suits2025/suits2025_ingegg_demo.mp4",
        caption: "A UIA digital twin to assist with ingress and egress procedures.",
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
    image: "/pages/projects/pong/pong_late.loop.mp4",
    caption: "7 hours later, the agent (green) finally learned how to play pong!",
    description: "This project actually started long before I wrote any code. Freshman year, I met with a professor to talk about my interest in AI and transportation, and he pointed me toward Playing Atari with Deep Reinforcement Learning. The idea of teaching an AI to navigate a game environment, and how that could translate to autonomous systems in the real world, stuck with me. A year later, Psych 203 gave me the perfect excuse to finally build it myself. I trained a deep reinforcement learning agent using cloud computing, getting my first hands-on experience with environment systems and turning something I had only read about into something I could actually experiment with. My favorite part came when I connected it back to cognitive science, overlaying attention heat maps from the model against our own visual attention to explore how humans and AI focus on the same environment differently.",
};

const pongAgentMedia: MediaItem[] = [
    {
        image: "/pages/projects/pong/pong_early.loop.mp4",
        caption: "At first, I was worried that the agent was never going to learn.",
    },
    {
        image: "/pages/projects/pong/pong_reward.png",
        caption: "It was cool learning how RL optimizes rewards instead of minimizing loss like in traditional ML.",
    },
    {
        image: "/pages/projects/pong/saliency_grid.png",
        caption: "Saliency grid highlighting the CNN's 'attention' while playing pong.",
    },
];

const pongAgentLinks: ProjectLink[] = [
    { label: "Github", href: "https://github.com/CamH123/RL-Pong-DQN" },
    { label: "Reference Paper", href: "https://arxiv.org/abs/1312.5602" },
];

const roverSimulatorNarrative: NarrativeData = {
    title: "Rover Simulator",
    time: "Rice Robotics - University Rover Challenge",
    image: "/pages/projects/robotics/robotics_sim_demo.mp4",
    caption: "Turns out making a virtual rover drive like a real one takes a lot of fine-tuning",
    description: "What started as a way to test our rover in simulation quickly became a tool for the entire team. I built a virtual rover and environment where we could develop control systems, experiment with autonomous navigation, and iterate without needing the physical rover every step of the way. I loved recreating the rover in code, from modeling its movement and sensors to building environments where we could test how it responded. Along the way, I explored Gazebo, PyBullet, and eventually Genesis as the simulation grew in scope. What I came to appreciate most was how important simulation was for integration, giving us a shared space to bring together controls, autonomy, perception, and mechanical designs. Seeing all of those pieces come together as one system gave me a much better understanding of how complex robotics systems are built and made simulation and integration some of my favorite parts of robotics. ",
};

// const roverSimulatorMedia: MediaItem[] = [
//     {
//         image: "/pages/projects/project_placeholder.jpg",
//         caption: "Simulation Environment Caption",
//     },
//     {
//         image: "/pages/projects/project_placeholder.jpg",
//         caption: "Rover Model Caption",
//     },
//     {
//         image: "/pages/projects/project_placeholder.jpg",
//         caption: "Team Photo Caption",
//     },
// ];

// const roverSimulatorLinks: ProjectLink[] = [
//     { label: "Github", href: "#" },
// ];

const sspNarrative: NarrativeData = {
    title: "NEA Orbit Modeling",
    time: "Summer Science Program 2023",
    image: "/pages/projects/ssp2023/ssp_vid.mp4",
    caption: "10 Million Year Orbital Simulation of NEA 1998 RO4",
    description: "In high school, I couldn't decide whether I was more interested in computer science or astrophysics, and SSP gave me the chance to explore both at once. Over the summer, my team conducted computational astrophysics research on a near-Earth asteroid, using real observational data to calculate and model its orbit. It was my first experience using code as a tool for scientific research, and I loved being able to turn observations from a telescope into something we could analyze, model, and actually learn from. But SSP was just as much about the people as the research. Spending a summer surrounded by students who were constantly asking questions, sharing ideas, and getting excited about what they were working on pushed me to be more curious and ambitious myself. I left with a much bigger sense of what I could do with computer science and, more importantly, a desire to keep exploring. ",
};

// const sspMedia: MediaItem[] = [
//     {
//         image: "/pages/projects/ssp2023/ssp_vid.mp4",
//         caption: "Model Visualization Caption",
//     },
//     {
//         image: "/pages/projects/ssp2023/ssp_1.jpg",
//         caption: "Data Plot Caption",
//     },
//     {
//         image: "/pages/projects/ssp2023/ssp_2.jpg",
//         caption: "Team Photo Caption",
//     },
// ];

// const sspLinks: ProjectLink[] = [
//     { label: "Github", href: "#" },
//     { label: "Report", href: "#" },
// ];


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
        subtitle: "Psych 203 Final Project",
        image: "/pages/projects/pong/pong_idx.mp4",
        detailPages: [
            (pageNumber) => <Narrative key="pong-agent-narrative" pageNumber={pageNumber} data={pongAgentNarrative} />,
            (pageNumber) => <Media key="pong-agent-media" pageNumber={pageNumber} items={pongAgentMedia} links={pongAgentLinks} />,
        ],
    },
    {
        title: "Rover Simulator",
        subtitle: "Rice Robotics - University Rover Challenge",
        image: "/pages/projects/robotics/robotics_sim_demo.mp4",
        detailPages: [(pageNumber) => <Narrative key="rover-simulator-narrative" pageNumber={pageNumber} data={roverSimulatorNarrative} />],
    },
    {
        title: "Near Earth Asteroid Orbit Determination",
        subtitle: "Summer Science Program 2023",
        image: "/pages/projects/ssp2023/ssp_vid.mp4",
        detailPages: [(pageNumber) => <Narrative key="asteroid-model-narrative" pageNumber={pageNumber} data={sspNarrative} />],
    },
];

const projectsChapter: Chapter = {
    chapterNumber: "03",
    chapterName: "projects",
    entityGroups: [projectItems, projectItemsContinued],
};

const chapters: Chapter[] = [experienceChapter, projectsChapter];

export const { pages, sections } = buildPages(chapters);
