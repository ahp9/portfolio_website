export type Job = {
  id: string;
  number: string;
  period: string;

  title: string;
  company: string;
  location: string;

  description: string;
  responsibilities: string[];
  takeaway: string | null;

  tags: {
    text: string;
    color: string;
  }[];
};

export const jobs: Job[] = [
  {
    id: "ta-dtu",
    number: "01",
    period: "Spring 2026",

    title: "Teaching Assistant",
    company: "Technical University of Denmark (DTU)",
    location: "Denmark",

    description:
      "I was a teaching assistant in Personal Data Interaction, where students worked on a data-driven project.",

    responsibilities: [
      "Listened to where each group was in their project and helped them move forward.",
      "Helped students choose the right user tests for their project.",
      "Kept the students focused on the user: whether the product did what it was supposed to do, without adding unnecessary complexity.",
    ],

    takeaway: null,

    tags: [
      { text: "Teaching", color: "coral" },
      { text: "HCI", color: "pink" },
      { text: "User testing", color: "pink" },
    ],
  },

  {
    id: "barbarian-toro",
    number: "02",
    period: "Summer 2025 – 2026",

    title: "Bartender",
    company: "Barbarian and Toro",
    location: "Denmark",

    description:
      "I worked as a bartender making drinks and coffee, cleaning, keeping track of stock and opening and closing the bar. After I started, I was also given the job of training new staff.",

    responsibilities: [
      "Trained new staff on the flow of the bar, how we open and close and how to make the drinks.",
      "Created three cocktails that were added to the menu.",
      "Kept track of stock and reminded the team to report when something was running low.",
      "Made sure the workspace was always cleaned the same way.",
    ],

    takeaway:
      "The menu was mostly classic cocktails, but I enjoy experimenting with flavours and liqueurs, which is how my own drinks ended up on it.",

    tags: [
      { text: "Training", color: "orange" },
      { text: "Inventory", color: "blue" },
      { text: "Hospitality", color: "pink" },
    ],
  },

  {
    id: "tryggingar-og-radgjof",
    number: "03",
    period: "Summer 2024",

    title: "Back Office",
    company: "Tryggingar og ráðgjöf",
    location: "Iceland",

    description:
      "I reviewed insurance contracts sent to me by the advisors and registered them in our systems.",

    responsibilities: [
      "Processed every type of contract the office handled.",
      "Covered the front desk when both receptionists were on holiday at the same time.",
      "Learned a new system on short notice and answered questions I had not dealt with before.",
    ],

    takeaway:
      "I picked up the work quickly, which is why I was trusted with all contract types.",

    tags: [
      { text: "Data entry", color: "blue" },
      { text: "Customer service", color: "teal" },
    ],
  },

  {
    id: "ta-hi",
    number: "04",
    period: "Autumn 2022 and 2023",

    title: "Teaching Assistant",
    company: "University of Iceland (Háskóli Íslands)",
    location: "Iceland",

    description:
      "I was a teaching assistant in two first-year courses: Web Development 1 and Computer Science 1.",

    responsibilities: [
      "Web Development 1: Helped students with assignments in HTML, CSS and JavaScript and gave guidance on accessible, user-friendly web design.",
      "Computer Science 1: Guided students through Java programming, debugging and problem solving, with a focus on well-structured code and a methodical way of working.",
    ],

    takeaway: null,

    tags: [
      { text: "Teaching", color: "coral" },
      { text: "JavaScript", color: "purple" },
      { text: "Java", color: "blue" },
      { text: "Accessibility", color: "pink" },
    ],
  },

  {
    id: "jardbodin",
    number: "05",
    period: "Summer 2023",

    title: "General Staff",
    company: "Mývatn Nature Baths (Jarðböðin við Mývatn)",
    location: "Iceland",

    description:
      "I moved north for the summer and worked at the baths, at the reception desk and the bar, monitoring the outdoor area and handling cleaning and laundry.",

    responsibilities: [
      "Worked reception and the bar.",
      "Monitored the outdoor bathing area.",
      "Handled cleaning and laundry.",
      "Received first aid training.",
    ],

    takeaway:
      "Large groups meant busy shifts where everything had to move fast. I work well under pressure, and that helped. I also remember the people, the small town and the attitude that things could always be sorted out.",

    tags: [
      { text: "Customer service", color: "teal" },
      { text: "First aid", color: "orange" },
    ],
  },

  {
    id: "flyover-iceland",
    number: "06",
    period: "2021 – 2023",

    title: "General Staff",
    company: "FlyOver Iceland",
    location: "Iceland",

    description:
      "I worked in ticket sales and the shop and guided guests through the experience. Most guests were tourists, and the working language was English.",

    responsibilities: [
      "Sold tickets and worked in the shop.",
      "Guided guests through the experience.",
      "Counted stock, flagged products that were running low and checked deliveries when they arrived.",
      "Covered for the shop manager when he was on holiday.",
    ],

    takeaway:
      "In my second year I offered to help more in the shop. My manager agreed and gave me responsibility for stock.",

    tags: [
      { text: "Customer service", color: "teal" },
      { text: "Inventory", color: "blue" },
      { text: "English", color: "purple" },
    ],
  },

  {
    id: "leikskolinn-vesturborg",
    number: "07",
    period: "january - agust 2021",

    title: "Preschool Assistant",
    company: "Leikskólinn Vesturborg",
    location: "Iceland",

    description:
      "Between secondary school and university I worked in the youngest group, with children aged 1–3.",

    responsibilities: [
      "Played with the children and invented games that got them playing together.",
      "Used my coaching experience to teach them new things through play.",
      "Read to them and practised calming down with them.",
    ],

    takeaway: null,

    tags: [
      { text: "Teaching", color: "coral" },
      { text: "Childcare", color: "coral" },
    ],
  },

  {
    id: "jsb",
    number: "08",
    period: "2018 – 2020",

    title: "Receptionist",
    company: "JSB Dance School and Gym",
    location: "Iceland",

    description:
      "I started at the front desk making health drinks and selling products. The owner gradually gave me more tasks to take work off her hands.",

    responsibilities: [
      "Managed registration for all gym and dance school courses and made sure classes never went over capacity.",
      "Kept track of payments.",
      "Stayed in close contact with the instructors.",
      "Answered the gym's email, mostly questions about courses and products.",
    ],

    takeaway: null,

    tags: [
      { text: "Administration", color: "blue" },
      { text: "Customer service", color: "teal" },
    ],
  },

  {
    id: "kr-grotta",
    number: "09",
    period: "2016 – 2019",

    title: "Football Coach",
    company: "KR and Grótta",
    location: "Iceland",

    description:
      "I coached KR's 8th division, children aged 2–5. I started as an assistant coach and over time became the unofficial head coach.",

    responsibilities: [
      "Planned the training sessions and guided the other coaches.",
      "Built sessions around games, obstacle courses and passing and shooting drills, usually ending with a match and always with stretching together.",
      "Coached summer football camps for children aged 5–10 at Grótta (2017) and KR (2018), where we could go deeper into technique.",
      "Completed the KSÍ 1 coaching certificate.",
    ],

    takeaway: null,

    tags: [
      { text: "Coaching", color: "coral" },
      { text: "Leadership", color: "coral" },
      { text: "KSÍ 1", color: "blue" },
    ],
  },
];
