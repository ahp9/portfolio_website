type EducationEntry = {
  degree: string;
  institution: string;
  specialization?: string;
  tags?: {
    text: string;
    color: string;
  }[];
  period: string;
  description: string;
};

export const education: EducationEntry[] = [
  {
    degree: "MSc in Human-Centered Artificial Intelligence",
    institution: "Danmarks Tekniske Universitet (DTU)",
    specialization: "Human-Computer Interaction",
    period: "2024 – 2026",
    tags: [
      { text: "HCI", color: "pink" },
      { text: "UX Design", color: "pink" },
      { text: "Data Visualization", color: "pink" },
      { text: "Human-Centered AI", color: "pink" },
      { text: "Python", color: "blue" },
    ],
    description:
      "I focussed on Human-Computer Interaction, where I gained knowledge and understanding of user experience and the ability to create data visualizations and develop software.",
  },
  {
    degree: "BSc in Software Engineering",
    institution: "Háskóli Íslands",
    period: "2021 – 2024",
    tags: [
      { text: "Software Engineering", color: "orange" },
      { text: "Full-Stack", color: "purple" },
      { text: "Frontend", color: "purple" },
      { text: "Web Development", color: "purple" },
      { text: "OOP", color: "blue" },
    ],
    description:
      "I focused on software engineering through practical projects involving full-stack development, with an emphasis on front-end development, user interfaces, and object-oriented programming.",
  },
];