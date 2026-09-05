import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { primarySocials } from "@/data/socialLinks";
import { mailto, yearsOfExperience } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { RotatingRole } from "@/components/ui/RotatingRole";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { HeroScene } from "@/components/three/HeroScene";

export function Hero() {
  const years = yearsOfExperience();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--nav-height)]" aria-labelledby="hero-title">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(70%_60%_at_60%_40%,black,transparent)] opacity-70" aria-hidden="true" />

      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] pointer-events-none lg:pointer-events-auto opacity-75 lg:opacity-100" aria-hidden="true">
        <HeroScene />
      </div>

      <div className="container-x relative z-10 w-full py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal y={12} className="mb-4">
            <p className="font-script text-accent text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] leading-none" aria-hidden="true">
              Hello, I&apos;m
            </p>
          </Reveal>

          <h1 id="hero-title" className="font-display font-extrabold text-display text-foreground">
            <TextReveal lines={[profile.firstName, profile.lastName]} delay={0.15} />
          </h1>

          <Reveal delay={0.45} y={16} className="mt-6 md:mt-8">
            <p className="text-h3 font-medium text-foreground/95 min-h-[1.4em]">
              <RotatingRole roles={profile.roles} />
            </p>
          </Reveal>

          <Reveal delay={0.55} y={16}>
            <p className="mt-6 max-w-xl text-lead text-muted">
              A Master&apos;s in Software Engineering and a Full Stack Developer with over {years}+ years of experience in commercial
              application and software development. An innovative, creative thinker who is adept at coming up with real solutions that
              work for clients.
            </p>
          </Reveal>

          <Reveal delay={0.65} y={16} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href={mailto("Need assistance")} size="lg">
              Contact me
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View projects
            </Button>
          </Reveal>

          <Reveal delay={0.75} y={12} className="mt-10">
            <SocialLinks items={primarySocials} />
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-2 text-xs text-subtle hover:text-accent transition-colors"
        aria-label="Scroll to about section"
      >
        Scroll
        <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
