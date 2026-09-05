export type ProjectCategory = "Web App" | "Mobile App";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  stack: string[];
  role: string;
  client?: string;
  description: string;
  contributions: string[];
  image: { src: string; width: number; height: number; alt: string };
  link?: ProjectLink;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "screen-indie",
    name: "Screen Indie",
    category: "Web App",
    stack: ["React", "Material UI", "Node.js", "Express.js", "MongoDB"],
    role: "Full Stack Developer",
    client: "Codeshock",
    description:
      "A vibrant community showcasing original content from independent filmmakers, offering them a platform to share their work globally.",
    contributions: [
      "Developed an intuitive, responsive UI using React.js and Material UI.",
      "Built a scalable backend with Node.js, Express.js, and MongoDB.",
      "Providing continuous improvements, bug fixes, and feature enhancements.",
    ],
    image: { src: "/images/projects/screen-indie.webp", width: 1400, height: 800, alt: "Screen Indie web app screens on a dark background" },
    link: { label: "Visit site", href: "https://www.screenindie.com/" },
  },
  {
    slug: "sendmea",
    name: "Sendmea",
    category: "Web App",
    stack: ["React", "Firebase", "Cloud Functions"],
    role: "Frontend & Firebase Developer",
    client: "Codeshock",
    description:
      "A web app built from scratch enabling businesses to collect and manage authentic video testimonials.",
    contributions: [
      "Built the React.js frontend for video recording, uploading, and sharing.",
      "Integrated Firebase auth, Firestore, storage, and cloud functions.",
      "Built an admin panel for managing testimonials and tracking engagement.",
    ],
    image: { src: "/images/projects/sendmea.webp", width: 1400, height: 800, alt: "Sendmea video testimonial platform screens" },
    link: { label: "Visit site", href: "https://www.sendmea.io/" },
  },
  {
    slug: "easygpt",
    name: "EasyGPT",
    category: "Web App",
    stack: ["Next.js", "AI Agents", "Voice Automation"],
    role: "Frontend Developer",
    description:
      "An AI-powered platform for building and deploying smart agents that work alongside your team. Create agents for chat, phone, SMS, and more, train them on your knowledge base, and connect them with the tools your team already uses.",
    contributions: [
      "Built the frontend with Next.js for a fast, responsive web experience.",
      "Developed agent dashboards, chat interfaces, and knowledge base management flows.",
      "Integrated Slack, Zendesk, HubSpot, Twilio, WhatsApp, Salesforce, and Google Drive.",
      "Implemented voice and phone automation for AI-powered customer support.",
    ],
    image: { src: "/images/projects/easygpt.webp", width: 1400, height: 788, alt: "EasyGPT AI agent dashboard, chat and integrations screens" },
    link: { label: "Visit site", href: "https://easygpt.builders/" },
  },
  {
    slug: "gearshare",
    name: "GearShare",
    category: "Web App",
    stack: ["Next.js", "Payments", "Location Search"],
    role: "Frontend Developer",
    description:
      "A peer-to-peer marketplace where musicians can rent musical instruments and professional audio equipment. Owners list unused gear and earn income, while renters get affordable access to the tools they need.",
    contributions: [
      "Developed the Next.js frontend for browsing, search, and booking flows.",
      "Built product listing pages, owner dashboards, and secure payment experiences.",
      "Implemented category filters, location-based search, and flexible rental options.",
    ],
    image: { src: "/images/projects/gearshare.webp", width: 1400, height: 788, alt: "GearShare musical equipment rental marketplace screens" },
    link: { label: "Visit site", href: "https://gear-share.ca/" },
  },
  {
    slug: "credential-management",
    name: "Credential Management",
    category: "Web App",
    stack: ["React", "Chakra UI", "Firebase", "Stripe"],
    role: "Frontend & Firebase Developer",
    client: "Codeshock",
    description:
      "A secure credential storage platform that lets users store credentials, manage access, and collaborate by adding team members.",
    contributions: [
      "Built the frontend with React.js and Chakra UI.",
      "Integrated Firebase authentication, Firestore, storage, and analytics.",
      "Added the Stripe Firebase extension for subscriptions and payments.",
      "Implemented role-based access control for team management.",
    ],
    image: { src: "/images/projects/credential-management.webp", width: 1400, height: 788, alt: "Credential Management platform screens" },
    link: { label: "Visit site", href: "https://getcredmanagement.com/" },
  },
  {
    slug: "andymation",
    name: "Andymation",
    category: "Mobile App",
    stack: ["React Native", "Firebase", "React Admin Panel"],
    role: "Mobile Developer",
    client: "Andymation",
    description:
      "A creative mobile app built for Andy, a popular US YouTuber. The app enables users to create, animate, and explore flipbooks in a fun and engaging way.",
    contributions: [
      "Developed the cross-platform app using React Native.",
      "Integrated Firebase for real-time storage, authentication, and cloud functions.",
      "Built a React.js admin panel for monitoring user activity.",
      "Designed a kid-friendly UI/UX with smooth animations and interactive tutorials.",
    ],
    image: { src: "/images/projects/andymation.webp", width: 1400, height: 788, alt: "Andymation flipbook mobile app screens" },
    link: { label: "App Store", href: "https://apps.apple.com/us/app/andymation-flipbooks/id6451327356" },
  },
  {
    slug: "jebby",
    name: "Jebby",
    category: "Mobile App",
    stack: ["Flutter", "Node.js"],
    role: "Mobile Developer",
    client: "Jebby Inc.",
    description:
      "A mobile rental marketplace that helps users discover, browse, and rent products across multiple categories with a simple and modern mobile experience.",
    contributions: [
      "Developed the cross-platform mobile app using Flutter.",
      "Built home, search, category browsing, and product detail screens.",
      "Implemented user profiles, settings, and account management flows.",
    ],
    image: { src: "/images/projects/jebby.webp", width: 1400, height: 788, alt: "Jebby rental marketplace mobile app screens" },
    link: { label: "Visit site", href: "https://jebbylistings.com/" },
  },
  {
    slug: "can-you",
    name: "Can You",
    category: "Mobile App",
    stack: ["React Native CLI", "Firebase"],
    role: "Mobile Developer",
    client: "Nuclius",
    description:
      "A task platform where invited users can accept requests, allowing them to send and receive tasks efficiently.",
    contributions: [
      "Built a dynamic, user-friendly interface using React Native CLI.",
      "Integrated Firebase auth, Firestore, storage, analytics, and cloud functions for real-time sync.",
    ],
    image: { src: "/images/projects/can-you.webp", width: 1400, height: 788, alt: "Can You task management mobile app screens" },
    link: { label: "App Store", href: "https://apps.apple.com/us/app/canyou/id1627695368" },
  },
  {
    slug: "chef-circle",
    name: "Chef Circle",
    category: "Mobile App",
    stack: ["React Native", "Firebase", "Web Admin Panel"],
    role: "Mobile Developer",
    description:
      "Developed to give everyone the opportunity to have a personal chef without the high cost. Users view, book, and enjoy a well-prepared meal cooked at home within a few hours.",
    contributions: [
      "Built two mobile apps: one for chefs and one for customers.",
      "Built a web admin panel for controlling both apps.",
    ],
    image: { src: "/images/projects/chef-circle.webp", width: 1400, height: 800, alt: "Chef Circle personal chef booking app screens" },
    link: { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.luxe" },
    note: "App is currently removed by owners",
  },
  {
    slug: "nodis",
    name: "Nodis",
    category: "Mobile App",
    stack: ["React Native", "Expo", "Node.js", "MongoDB"],
    role: "Full Stack Mobile Developer",
    client: "Nodis.io",
    description:
      "A social app available on both App Store and Google Play. It enhances social networking with real-time engagement and seamless user interaction.",
    contributions: [
      "Developed the frontend with React Native Expo for a smooth, responsive UI.",
      "Built the Node.js and MongoDB backend for real-time messaging, user profiles, and image sharing.",
      "Maintaining the app for performance, scalability, and new feature rollouts.",
    ],
    image: { src: "/images/projects/nodis.webp", width: 1400, height: 800, alt: "Nodis social networking mobile app screens" },
    link: { label: "App Store", href: "https://apps.apple.com/ca/app/nodis/id1520418106" },
  },
];

export const projectFilters = ["All", "Web Apps", "Mobile Apps"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects(filter: ProjectFilter) {
  if (filter === "All") return projects;
  return projects.filter((p) => (filter === "Web Apps" ? p.category === "Web App" : p.category === "Mobile App"));
}
