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
      { text: "HCI", color: "purple" },
      { text: "UX Design", color: "purple" },
      { text: "Data Visualization", color: "orange" },
      { text: "Human-Centered AI", color: "pink" },
      { text: "Python", color: "pink" },
    ],
    description:
      "Áhersla á Human-Computer Interaction, þar sem ég jók þekkingu og skilning á notendaupplifun og efldi getu mína í data visualization og þróun hugbúnaðar.",
  },
  {
    degree: "BSc í Hugbúnaðarverkfræði",
    institution: "Háskóli Íslands",
    period: "2021 – 2024",
    tags: [
      { text: "Software Engineering", color: "green" },
      { text: "Full-Stack", color: "green" },
      { text: "Frontend", color: "blue" },
      { text: "Web Development", color: "blue" },
      { text: "OOP", color: "green" },
    ],
    description:
      "Áhersla á forritun og hugbúnaðarverkfræði.",
  },
];