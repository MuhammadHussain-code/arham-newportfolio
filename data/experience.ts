export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Code Shock LLC",
    role: "Senior MERN Stack Developer",
    start: "Mar 2021",
    end: "Jun 2024",
    summary:
      "Joined during its early phase and played a key role in securing more contracts and positive client reviews. Lead Developer, driving technical excellence and project success.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Next.js"],
  },
  {
    company: "Nodis.io",
    role: "React Native Developer",
    start: "Mar 2022",
    end: "Mar 2023",
    summary:
      "Developed an empowering social platform for genuine self-expression, meaningful connections, and dynamic content creation.",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
  },
  {
    company: "House Of Techies Ltd",
    role: "Full Stack Developer",
    start: "Feb 2020",
    end: "Jun 2021",
    summary:
      "As the first developer to join this startup, I significantly contributed to its growth, leading to a substantial increase in revenue and business expansion.",
    technologies: ["React", "React Native", "Node.js", "Firebase"],
  },
  {
    company: "Fiverr",
    role: "Full Stack Developer",
    start: "Nov 2017",
    end: "Present",
    summary:
      "Top-Rated Full-Stack Developer on Fiverr for several years, providing high-quality solutions to clients worldwide and earning consistently positive feedback.",
    technologies: ["Next.js", "React Native", "Node.js", "Firebase", "MongoDB"],
  },
];
