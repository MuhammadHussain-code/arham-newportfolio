import type { Metadata, Viewport } from "next";
import { Archivo, Bodoni_Moda, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Arham Awan",
    "Full Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "React Native Developer",
    "Next.js Developer",
    "Software Engineer",
    "Karachi",
    "Pakistan",
    "Freelance Developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Arham Awan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      email: `mailto:${site.email}`,
      image: `${site.url}${profile.portrait.src}`,
      jobTitle: "Full Stack Developer",
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.location.city,
        addressCountry: profile.location.country,
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "NED University" },
        { "@type": "CollegeOrUniversity", name: "Dawood University" },
      ],
      knowsAbout: ["Next.js", "React", "React Native", "Node.js", "Firebase", "MongoDB", "TypeScript", "AI Development"],
      sameAs: socialLinks.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${serif.variable} ${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
