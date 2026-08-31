

export type SkillCategory = {
    name: string;
    color: string;
    skills: { name: string }[];
};

export const skills = [
    {
        name: "FRONTEND",
        color: "purple",
        skills: [
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "React" },
            { name: "Next.js" },
        ]
    },
    {
        name: "BACKEND & DATA",
        color: "blue",
        skills: [
            { name: "Node.js" },
            { name: "Python" },
            { name: "SQL" },
            { name: "Express" },
            { name: "Prisma" }
        ]
    },
    {
        name: "UX & HUMAN-COMPUTER INTERACTION",
        color: "pink",
        skills: [
            { name: "UX design"},
            { name: "Prototyping" },
            { name: "User testing"},
            { name: "Data visualization" },
            { name: "Human-centered design" }
        ]
    },
    {
        name: "TOOLS",
        color: "green",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Figma" },
            { name: "VS Code" },
            { name: "Jupyter Notebook" },
            { name: "Docker"}
        ]
    }
]