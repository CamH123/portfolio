-- Insert NASA SUITS project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'suits',
    'Augmented Reality Interface for Lunar EVAs',
    'An augmented reality system for the HoloLens 2 that helps astronauts navigate the lunar surface, manage EVA procedures, and collect geological samples. Built for NASA''s SUITS Challenge with a team of 15+ students.',
    ARRAY[
        'For the past year, I''ve led Rice''s team for the NASA SUITS challenge, a competition where universities build augmented reality interfaces for astronauts to use during extravehicular activities on the moon. The goal was to create a HoloLens 2 system that assists with three main tasks: getting in and out of airlocks (ingress/egress), navigating the lunar surface, and collecting rock samples.',
        'As Lead Software Developer, I worked on the overall system architecture and specifically built out the geological sampling feature and telemetry integration. The sampling system included an XRF spectrometer for elemental analysis, while the telemetry piece streamed real-time data from two astronauts'' suit vitals plus rover status. I also partnered with Brown University to create a data-sharing protocol so their pressurized rover could access our geological data.',
        'The technical challenges were everywhere. Migrating from MRTK2 to MRTK3 with barely any documentation was rough. Learning to manage Unity projects with version control and a large team was its own adventure. But the hardest part was actually the communication, as we had to synchronize our thoughts not just between software developers, but also UI/UX designers, human factors researchers, and a separate lunar rover team based across the country.',
        'SUITS is the first project that I worked on in collaboration with human factors psychologists. Working with their new perspectives was a new and incredibly rewarding experience. They taught us how to measure whether our system actually reduced cognitive load (we got it down by 26%) and showed us why voice commands work better than touch interfaces in certain scenarios. With their help, we were able to run proper human-in-the-loop testing using NASA methodologies, ultimately allowing us to create the best product possible.',
        'The coolest part of this project was the in-person testing at Johnson Space Center. We got to work with actual NASA engineers, explore the labs developing next-gen AR systems for real spacesuits, and test our interface on their lunar rock yard at night. However, that first night of testing almost broke us. The darkness interfered with hand tracking and suddenly nothing worked. Thankfully we''d built in voice command redundancy. Watching the system actually function when it mattered and seeing all the pieces come together after months of work made everything worth it!',
        'Beyond the code, I learned what it takes to lead a large, multidisciplinary team. Setting clear expectations, following through with people, being honest when things aren''t working, and organizing enough team bonding events that people actually trust each other when deadlines hit. That part was just as valuable as any technical skill.',
        'Finally, I''m excited to continue with the Rice 2026 SUITS team, however this time as Product Manager. Less individual coding and more architecture and system design. This year, we are planning to integrate custom hardware modifications, like custom gloves and POV extenders, as well as explore AI-driven interactions into our system!'
    ],
    ARRAY['Unity', 'C#', 'MRTK3', 'HoloLens 2', 'Git', 'Python'],
    'https://github.com/OWL-SUITS-2025/Owl_SUITS_2025',
    '/images/projects/suits',
    '{"proposal": "/files/projects/suits/proposal.pdf", "exit_pitch": "/files/projects/suits/exitpitch.pdf", "research_poster": "/files/projects/suits/poster.pdf"}'::jsonb
);

-- Insert RRC Rover project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'rover',
    'Autonomous Martian Rover',
    'Developing autonomous navigation and a realistic 1:1 Gazebo simulation for the Rice Robotics URC team.',
    ARRAY[
        'As Simulations Lead for Rice Robotics'' URC team, I''m directing the development of our rover''s autonomous navigation capabilities and simulation environment. I founded the University Rover Challenge branch within Rice Robotics, building the team from the ground up and managing everything from design to funding.',
        'I''m building a 1:1 simulation of our rover in Gazebo Harmonic that accurately models real-world physics and sensor behavior. The simulation environment includes realistic Martian terrain with rocks, slopes, and obstacles that mirror the actual competition conditions. This lets us test and iterate on navigation algorithms without risking hardware damage.',
        'On the autonomy side, I''m integrating lidar and camera sensors with ROS2 Jazzy to enable real-time perception and decision making. The rover uses Nav2 for path planning and obstacle avoidance, allowing it to autonomously navigate to GPS waypoints while handling rough terrain. I''m also implementing computer vision with OpenCV to enhance the rover''s ability to identify and avoid obstacles that might not show up clearly on lidar scans.',
        'The project involves coordinating a team of 10+ engineers across mechanical, electrical, and software disciplines. We''re tackling challenges like sensor fusion, localization in GPS-denied environments, and robust navigation algorithms that work on steep slopes and loose soil.'
    ],
    ARRAY['Python', 'ROS2 Jazzy', 'Gazebo Harmonic', 'OpenCV', 'Nav2', 'Lidar'],
    NULL,
    '/images/projects/rover',
    '{"preliminary_design_review": "/files/projects/rover/pdr.pdf"}'::jsonb
);


-- Insert CARLA ADAS Simulation project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'carla',
    'CARLA Simulation for QA Testing Large Transit ADAS Systems',
    'Building a realistic CARLA simulation of University of Alabama''s campus and transit buses to develop AI-driven quality assurance testing for advanced driver assistance systems.',
    ARRAY[
        'I''m working as a student researcher with Rice''s Mobility-X Lab on a Federal Transit Administration project to integrate advanced driver assistance systems into large transit buses at the University of Alabama. The broader project aims to bring Level 1-4 automation features like pedestrian collision avoidance, precision docking, and smooth acceleration/deceleration to buses serving the UA campus through their Crimson Ride system.',
        'My specific role focuses on developing the simulation infrastructure and AI testing algorithms that will push these systems to their limits before real-world deployment. I''m building a detailed CARLA simulation that recreates the University of Alabama campus environment, complete with accurate bus models, route geometries, and realistic traffic patterns. The simulation runs on Unreal Engine and uses CARLA''s Scenario Runner to create complex test scenarios.',
        'The end goal is to develop an AI algorithm that automatically generates and executes comprehensive test cases across different conditions like varying weather, pedestrian densities, traffic volumes, and edge cases that would be difficult or dangerous to test in the real world. This AI-driven approach will help identify performance limitations and safety concerns before the ADAS systems go into revenue service with actual passengers.',
        'I''m using PyTorch to build the reinforcement learning models that generate these test scenarios, essentially teaching the system to find the boundary conditions where the ADAS might struggle. The simulation feeds back quantitative metrics like detection accuracy, response times, braking aggressiveness, and docking precision that help us understand exactly how the system performs under stress.',
        'This work is part of a larger effort to make transit buses safer and more accessible, particularly for people with disabilities who benefit from precision docking technology. The simulation work I''m doing will help validate the system before it moves to closed-course testing and eventually year-long revenue service pilots on real buses.'
    ],
    ARRAY['CARLA', 'Unreal Engine', 'Scenario Runner', 'Python', 'PyTorch'],
    NULL,
    '/images/projects/carla',
    '{"fact_sheet": "/files/projects/carla/fact-sheet.pdf"}'::jsonb
);


-- Insert ATARI RL project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'atari-rl',
    'Reinforcement Learning Agents for Atari Pole Position',
    'Experimenting with three different AI approaches to play Atari''s Pole Position: double Q-learning, computer vision with decision trees, and imitation learning.',
    ARRAY[
        'This is a personal research project inspired by the DeepMind documentaries and my curiosity about how game-playing AI translates to real-world autonomous navigation. I chose Pole Position because driving game agents share similar challenges with the autonomous systems I''m working on for the rover and CARLA projects. Understanding how different AI approaches handle racing mechanics, obstacle avoidance, and trajectory planning in a simpler environment helps me build intuition for the more complex robotics work.',
        'I''m training three different agents to play Pole Position and comparing their performance and robustness. The first approach uses double Q-learning, a reinforcement learning technique that learns optimal actions through trial and error by maximizing cumulative rewards. The agent starts knowing nothing about the game and gradually figures out racing strategies entirely on its own.',
        'The second approach combines computer vision with decision trees. I''m using OpenCV to extract visual features from game frames like road edges, car positions, and upcoming turns. These features feed into a decision tree that maps visual input to control actions. This approach is more interpretable than deep learning since you can actually see the decision logic, and it requires less training data.',
        'The third approach uses imitation learning, where the agent learns by watching me play. I''m recording my own gameplay sessions and training the model to mimic my driving behavior. This is interesting because it doesn''t require a reward signal like RL does, but it''s limited by how good I am at the game.',
        'The goal isn''t just to see which agent performs best, but to understand the tradeoffs. How sample efficient is each approach? How robust are they to variations in game conditions? Can the computer vision agent generalize better than the deep RL agent? Does the imitation learning agent inherit my bad habits? These insights will help me choose the right approach for autonomous navigation problems in my robotics projects.',
        'This project is currently in the planning and design phase. I''m setting up the Gym environment, designing the feature extraction pipeline for the CV approach, and figuring out the best way to record and process gameplay data for imitation learning.'
    ],
    ARRAY['Python', 'PyTorch', 'OpenAI Gym', 'OpenCV', 'Scikit-Learn'],
    NULL,
    '/images/projects/atari',
    NULL
);

-- Insert SSP Near Earth Asteroid project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'ssp',
    'Near Earth Asteroid Orbit Determination and Simulation',
    'Complete pipeline for determining the orbital trajectory of near-Earth asteroid 1998 RO4 through telescopic observation, orbit calculation, and 50-million-year numerical simulation.',
    ARRAY[
        'I spent summer 2023 at the Summer Science Program doing computational astrophysics research at the University of Colorado Boulder. Our team''s goal was to determine the orbital elements of near-Earth asteroid 1998 RO4 and assess whether it poses any collision risk to Earth over the next 50 million years.',
        'We conducted five nights of telescopic observations using the 20-inch telescopes at Sommers-Bausch Observatory. Each observation session involved capturing images of the asteroid, processing them with flat and dark corrections, and plate solving to determine the asteroid''s right ascension and declination coordinates. This was my first experience with real astronomical observation, and there''s something uniquely satisfying about watching your target asteroid slowly drift across the field of view.',
        'After collecting observational data, I helped implement Gauss''s method in Python to calculate the asteroid''s position and velocity vectors. This classical orbital determination technique uses three observations to recursively compute the orbit until convergence. We then converted these vectors into the six standard orbital elements: semi-major axis, eccentricity, inclination, longitude of ascending node, argument of periapsis, and mean anomaly.',
        'To quantify uncertainties in our orbital elements, we ran a 10,000-iteration Monte Carlo simulation that propagated observational errors through our calculations. This gave us confidence intervals for each element and showed that our results matched JPL Horizons data within reasonable error margins. We also calculated the asteroid''s absolute H magnitude using linear regression on reference star photometry.',
        'The final step was simulating the asteroid''s long-term behavior using Rebound, a numerical integration package used by professional astronomers. We ran 60 different trajectory simulations over 50 million years, each using slightly different initial conditions based on our uncertainty distributions. The results showed that 25% of trajectories remained stable, 13% crashed into the sun, and 62% were ejected from the solar system. Importantly, none collided with Earth, confirming that 1998 RO4 poses no threat within this timeframe.',
        'Beyond the technical work, this project taught me how astronomical research actually happens. Working with real telescopes, dealing with weather delays and cloudy nights, debugging code at 2am when observations are waiting, and collaborating with teammates who each brought different strengths. It was my first taste of research outside a classroom, and it solidified my interest in applying computational methods to real-world problems.'
    ],
    ARRAY['Python', 'Rebound', 'AstroImageJ', 'NumPy', 'Matplotlib', 'SciPy'],
    'https://github.com/CamH123/ssp_astrophysics_code',
    '/images/projects/ssp',
    '{"research_paper": "/files/projects/ssp/paper.pdf"}'::jsonb
);

-- Insert Pothole Detector project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'pothole',
    'Pothole Detector',
    'Computer vision system for automated pothole detection and reporting to improve Houston''s road infrastructure.',
    ARRAY[
        'This is an early-stage project idea I''m exploring to tackle Houston''s pothole problem using computer vision. The concept is simple: build a system that can automatically detect potholes from camera footage and either report them to the city or potentially guide autonomous repair systems.',
        'I''m currently in the research and design phase, exploring different CV approaches. The main options I''m considering are using OpenCV for traditional computer vision techniques or fine-tuning a YOLO model for real-time object detection. Each approach has tradeoffs in terms of accuracy, speed, and training data requirements that I need to test out.',
        'The software-focused version would involve building a detection and reporting pipeline, possibly using dashcam footage or phone cameras to identify potholes and automatically submit reports to Houston''s 311 system. A more ambitious extension could involve integrating this with a small autonomous robot that can navigate to detected potholes for repairs or closer inspection.',
        'Right now, I''m researching existing solutions, looking at pothole image datasets, and figuring out the best data collection approach. This project combines my interest in computer vision with a real-world infrastructure problem I encounter daily while driving around Houston.'
    ],
    ARRAY['Python', 'OpenCV', 'YOLO', 'PyTorch'],
    NULL,
    '/images/projects/pothole',
    NULL
);

-- Insert Personal Website/Blog project into the database
INSERT INTO projects (
    slug,
    title,
    short_description,
    full_description,
    tech_stack,
    github_url,
    image_folder,
    resources
) VALUES (
    'website',
    'Personal Website/Blog',
    'Full-stack portfolio and blog built from scratch to showcase my projects and share random thoughts on tech, robotics, and whatever else I''m working on.',
    ARRAY[
        'This is the project I''m working on right now! You''re looking at it. I built this website from scratch as a way to showcase my work and have a space to write about things I''m learning or find interesting.',
        'I wanted complete control over the design and functionality, so I started in Figma and designed the entire interface before writing any code. This was my first real experience with full-stack development, and it taught me how all the pieces fit together. Building interactive components in React, designing a database schema that actually makes sense, setting up API endpoints, and deploying everything to production was a huge learning curve.',
        'The site is built with React and TypeScript on the frontend, with Node and Express handling the backend API. All the project data, blog posts, and metadata live in a PostgreSQL database. I''m hosting everything on Vercel, which made deployment surprisingly straightforward once I figured out the configuration.',
        'Right now, the portfolio section is complete and you can browse through all my projects. I''m currently working on the blog section where I''ll write about technical topics, project updates, and random thoughts on robotics and AI. I''m also building an admin interface so I can easily add new projects and write posts without touching the database directly.',
        'Future plans include adding analytics to see what people are actually reading, implementing a recommendation algorithm to suggest related posts and projects, and probably redesigning things when I inevitably get tired of how it looks. But for now, I''m just excited to have a platform that''s completely mine to experiment with and share my work.'
    ],
    ARRAY['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Vercel'],
    'https://github.com/CamH123/portfolio',
    '/images/projects/website',
    NULL
);



