export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Zac Smith",
    title: "Founder of Code Shock LLC",
    quote:
      "It is always very nice to work with Arham. His efforts for the company are commendable. Proud of you. I would love to keep him as my dev for long term.",
  },
  {
    name: "Pace Ellsworth",
    title: "CEO of Bestimate",
    quote:
      "His responsiveness and attention to detail are superb. What I love the most is that he's proactive about fixing errors and issues before we even find out about them. He's saved us way more than we count.",
  },
  {
    name: "Tom Krol",
    title: "Founder of Wholesaling Inc.",
    quote:
      "Honest, Talented, Trustworthy, Fast. He turned my idea into reality and developed a task management mobile app for me. Love to work with him.",
  },
  {
    name: "Nathan Mukena",
    title: "Co-Founder of Nodis.io",
    quote:
      "Working with Arham Awan to customize my Mobile App is an awesome experience. Thanks a lot for very good communication and proper delivery times.",
  },
  {
    name: "BJ Hamaker",
    title: "Maker of Japanese The Game",
    quote: "Perfect experience. 100% will work with him again. Thank you and Good Luck.",
  },
  {
    name: "Andy Bailey",
    title: "CEO of Andymation",
    quote: "Fantastic work, and a pleasure to work with.",
  },
  {
    name: "Jared Shirley",
    title: "CEO of Jebby Inc.",
    quote: "Arham! Best dev in the business!!",
  },
  {
    name: "Gary Giunta",
    title: "CEO of Albert SAV",
    quote:
      "Perfect gentlemen for your web applications, highly recommended, will surely work with him long term.",
  },
];

export type Client = {
  name: string;
  href: string;
  logo: string;
  width: number;
  height: number;
};

export const clients: Client[] = [
  { name: "Code Shock LLC", href: "https://codeshock.dev", logo: "/images/clients/codeshock.webp", width: 200, height: 200 },
  { name: "Jebby", href: "https://jebbylistings.com", logo: "/images/clients/jebby.webp", width: 400, height: 400 },
  { name: "Wholesaling Inc.", href: "https://wholesalinginc.com", logo: "/images/clients/wholesaling-inc.webp", width: 400, height: 101 },
  { name: "Nodis", href: "https://nodis.io", logo: "/images/clients/nodis.webp", width: 96, height: 93 },
  { name: "Japanese The Game", href: "https://japanesethegame.com", logo: "/images/clients/japanese-the-game.webp", width: 220, height: 300 },
];
