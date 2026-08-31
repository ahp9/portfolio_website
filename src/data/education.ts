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
    degree: "MSc í Human-Centered Artificial Intelligence",
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
      "Áhersla á Human-Computer Interaction, þar sem ég jók þekkingu og skilning á notendaupplifun og efldi getu mína í data visualization og þróun hugbúnaðar.",
  },
  {
    degree: "BSc í Hugbúnaðarverkfræði",
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
      "Áhersla á forritun og hugbúnaðarverkfræði.",
  },
];