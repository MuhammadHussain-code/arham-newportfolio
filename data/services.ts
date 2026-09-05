import type { LucideIcon } from "lucide-react";
import { Globe, Smartphone, Sparkles, PenTool } from "lucide-react";

export type Service = {
  title: string;
  icon: LucideIcon;
  summary: string;
  stack: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    icon: Globe,
    summary:
      "High-performance, responsive web applications using Next.js, React.js, TypeScript, and vanilla JavaScript. Backends powered by Node.js, Express.js, or Firebase with MongoDB, Firestore, MySQL, or PostgreSQL. State handled with Redux, Recoil, or Zustand; UI crafted with custom styling, Tailwind CSS, or in-demand UI libraries.",
    stack: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    summary:
      "Cross-platform mobile applications using React Native (custom or Expo) and Flutter, providing highly performant and scalable solutions. Backend development with Node.js, Firebase, or Google Cloud Functions, and data stored in MongoDB, Firestore, or MySQL.",
    stack: ["React Native", "Expo", "Flutter", "Firebase", "Cloud Functions", "MongoDB", "MySQL"],
  },
  {
    title: "AI Development",
    icon: Sparkles,
    summary:
      "AI-driven features built with OpenAI, generative AI, and machine learning APIs. Intelligent chatbots, voice assistants, and AI-powered automation using tools like VAPI AI, OpenAI, and ElevenLabs, delivered through scalable RESTful APIs and WebSockets.",
    stack: ["OpenAI", "Generative AI", "VAPI AI", "ElevenLabs", "REST APIs", "WebSockets", "Cursor IDE", "GitHub Copilot"],
  },
  {
    title: "UX / UI Designing",
    icon: PenTool,
    summary:
      "Modern, interactive, and user-friendly interfaces for web and mobile using Figma, Adobe XD, and modern UI libraries: Material UI, Tailwind CSS, ShadCN, Styled Components, Bootstrap, and custom Flutter UI components. Focused on accessibility, engagement, and seamless navigation.",
    stack: ["Figma", "Adobe XD", "Material UI", "Tailwind CSS", "ShadCN", "Styled Components", "Bootstrap"],
  },
];
