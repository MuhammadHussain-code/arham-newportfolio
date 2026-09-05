export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arhamawan99/", handle: "arhamawan99" },
  { label: "GitHub", href: "https://github.com/arham1999", handle: "arham1999" },
  { label: "Fiverr", href: "https://www.fiverr.com/arhamawan", handle: "arhamawan" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01155b81cb3c60b73f", handle: "Arham Awan" },
  { label: "Freelancer", href: "https://www.freelancer.com/u/arham1999", handle: "arham1999" },
  { label: "Facebook", href: "https://www.facebook.com/arham.a.awan", handle: "arham.a.awan" },
];

export const primarySocials = socialLinks.slice(0, 2);
