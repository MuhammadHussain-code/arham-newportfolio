export type Skill = {
  name: string;
  level: number;
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "Next.js", level: 95, description: "React framework with server-side rendering and static generation for fast, scalable web apps." },
      { name: "React JS", level: 95, description: "Component-driven library for building user interfaces." },
      { name: "React Native", level: 95, description: "Open-source framework for cross-platform hybrid applications." },
      { name: "TypeScript", level: 95, description: "Strongly typed JavaScript with static checking and a better developer experience." },
      { name: "JavaScript", level: 95, description: "One of the core technologies of the web." },
      { name: "HTML, CSS", level: 95, description: "Markup and styling languages for the browser." },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node JS", level: 90, description: "Back-end JavaScript runtime that executes code outside the browser." },
      { name: "Express JS", level: 90, description: "Back-end framework for building RESTful APIs with Node." },
      { name: "Firebase", level: 95, description: "Backend-as-a-Service with realtime database, cloud storage, auth and functions." },
      { name: "Mongo DB", level: 90, description: "Cross-platform document-oriented NoSQL database." },
      { name: "SQL", level: 90, description: "Managing and querying relational databases." },
      { name: "Prisma", level: 90, description: "Type-safe ORM for Node.js and TypeScript." },
      { name: "AWS", level: 90, description: "Scalable cloud infrastructure, storage and services on demand." },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "AI Development", level: 95, description: "Intelligent applications using machine learning, deep learning, and NLP techniques." },
      { name: "Vector DB", level: 90, description: "Pinecone and MongoDB Atlas Vector Search for embeddings in AI-driven apps." },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
