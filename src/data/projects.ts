export type Project = {
    id: string;
    number: string;
    status: string;
    period: string;

    title: string;
    description: string;

    problem: string;
    solution: string;
    hardPart: string;
    role: string;

    tags: {
        text: string;
        color: string;
    }[];

    links: {
        caseStudy: string | null;
        github: string | null;
        demo: string | null;
    };

    image: string;
    featured: boolean;
    grade?: string;
};

export const projects: Project[] = [
    {
        id: "master-thesis",
        number: "01",
        status: "Finished",
        period: "2025 — 2026",

        title: "Scaffolding Learning with an AI Tutor",

        description:
            "My MSc thesis at DTU: I designed, built and evaluated an LLM-based tutor that supports self-regulated learning instead of simply giving students the answer.",

        problem:
            "LLMs make it easy for students to offload the thinking that academic tasks are meant to develop.",

        solution:
            "An adaptive tutoring system that guides students through the problem-solving process while actively preventing direct solution leakage.",

        hardPart:
            "Turning learning theory into a reliable multi-stage LLM architecture that could adapt its support while keeping pedagogical decisions inspectable.",

        role:
            "Research, system architecture, LLM engineering, usability testing and experimental evaluation.",

        tags: [
            { text: "Python", color: "blue" },
            { text: "LLMs", color: "blue" },
            { text: "HCI", color: "pink" },
            { text: "SRL", color: "orange" },
        ],

        links: {
            caseStudy: "/projects/master-thesis",
            github: "https://github.com/ahp9/thesis-chatbot",
            demo: null,
        },

        image: "public/master_thesis.png",
        featured: true,
        grade: "12 / 12",
    },

    {
        id: "spotify-wrapped",
        number: "02",
        status: "Finished",
        period: "2025",

        title: "Beyond Spotify Wrapped",

        description:
            "An interactive music-data exploration tool that lets Spotify users go beyond yearly summaries and investigate how their listening habits change over time.",

        problem:
            "Spotify Wrapped tells users what they listened to, but gives them little control to explore why, when or how their listening habits changed.",

        solution:
            "A web-based personal informatics dashboard with interactive timelines, listening patterns, artist exploration and multiple views of a user's Spotify history.",

        hardPart:
            "Turning years of listening data into understandable interactive visualizations, then evaluating whether plots or text helped users make sense of that data more effectively.",

        role:
            "Data analysis, interaction design, D3 development, HCI experiment design, user testing and evaluation.",

        tags: [
            { text: "D3.js", color: "purple" },
            { text: "JavaScript", color: "purple" },
            { text: "Data visualization", color: "pink" },
            { text: "HCI", color: "pink" },
        ],

        links: {
            caseStudy: "/projects/spotify-wrapped",
            github: "https://github.com/malfriduranna/personal_data",
            demo: "https://malfriduranna.github.io/personal_data/",
        },

        image: "/images/projects/spotify-wrapped.png",
        featured: true,
    },

    {
        id: "f1-prediction-league",
        number: "03",
        status: "Finished",
        period: "2025",

        title: "F1 Prediction League",

        description:
            "A full-stack Formula 1 prediction league where users predict race results, earn points through a custom scoring system and compete across an entire season.",

        problem:
            "Running an F1 prediction league with friends becomes tedious when predictions, race results, scoring and standings all have to be tracked manually.",

        solution:
            "A web application that collects top-eight race predictions, imports official F1 results and automatically calculates points, standings and season statistics.",

        hardPart:
            "Turning real race results into reliable scoring logic — including DNFs, DNSs, disqualifications and driver changes — while keeping predictions, points and leaderboard history synchronized.",

        role:
            "Full-stack development, database design, scoring logic, API integration and interface development.",

        tags: [
            { text: "React", color: "purple" },
            { text: "Express", color: "blue" },
            { text: "PostgreSQL", color: "blue" },
            { text: "OpenF1 API", color: "blue" },
        ],

        links: {
            caseStudy: "/projects/f1-prediction-league",
            github: "https://github.com/ahp9/f1_prediction_league",
            demo: null,
        },

        image: "/images/projects/f1-prediction.png",
        featured: true,
    },

    {
        id: "mental-health-visualization",
        number: "04",
        status: "Finished",
        period: "2025",

        title: "Contextualizing Mental Health Data",

        description:
            "An interactive self-tracking system that helps patients and therapists understand mental health data by connecting recorded events with notes, calendar activity and personal context.",

        problem:
            "Self-tracking data can show when something happened, but without context it is difficult for patients or therapists to understand why a pattern occurred.",

        solution:
            "A patient app and therapist dashboard that combine one-button wearable data with notes and calendar events, turning isolated timestamps into contextualized interactive visualizations.",

        hardPart:
            "Transforming raw wearable timestamps into meaningful events, merging them with personal context and designing visualizations that worked for two very different users: patients reflecting on their own data and therapists interpreting it.",

        role:
            "Research, UX design, full-stack development, data visualization and usability testing.",

        tags: [
            { text: "Next.js", color: "purple" },
            { text: "TypeScript", color: "purple" },
            { text: "D3.js", color: "purple" },
            { text: "Supabase", color: "blue" },
            { text: "HCI", color: "pink" },
        ],

        links: {
            caseStudy: "/projects/mental-health-visualization",
            github:
                "https://github.com/ahp9/project_digital_media_engineering",
            demo:
                "https://project-digital-media-engineering.vercel.app",
        },

        image: "/images/projects/mental-health.png",
        featured: true,
    },

    {
        id: "talking-tactics",
        number: "05",
        status: "Finished",
        period: "2026",

        title: "Talking Tactics",

        description:
            "A text and network analysis of Premier League managers exploring whether tactical language reveals connections between managers that their career histories do not.",

        problem:
            "Club history and performance statistics show where managers worked and how successful they were, but they do not necessarily capture similarities in tactical identity or managerial style.",

        solution:
            "A multiplex network of Premier League managers combining tactical similarity extracted from Wikipedia biographies with shared-club career connections, then comparing the communities formed by each layer.",

        hardPart:
            "Turning noisy Wikipedia biographies into a meaningful network: cleaning the text, identifying football-specific vocabulary, weighting tactical language and validating whether the resulting communities represented real structure rather than arbitrary clustering.",

        role:
            "Data collection, NLP pipeline development, network construction, community analysis, visualization and interpretation.",

        tags: [
            { text: "Python", color: "blue" },
            { text: "NetworkX", color: "blue" },
            { text: "NLP", color: "blue" },
            { text: "TF-IDF", color: "blue" },
            { text: "Network Science", color: "orange" },
        ],

        links: {
            caseStudy: "/projects/talking-tactics",
            github:
                "https://github.com/ahp9/social_graphs_02805_project",
            demo: null,
        },

        image: "/images/projects/talking-tactics.png",
        featured: true,
    },
];