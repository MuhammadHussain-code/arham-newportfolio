import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const revalidate = 86400;

export default function HomePage() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-spot focus:px-4 focus:py-2 focus:label focus:text-on-spot">
        Skip to content
      </a>
      <Masthead />
      <div className="flex-1 pt-[var(--bar-height)] lg:pt-0 lg:pl-[var(--rail)]">
        <main id="main">
          <Hero />
          <About />
          <Services />
          <Resume />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
