import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";
import { currentAge, yearsOfExperience } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  const years = yearsOfExperience();
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Residence", value: profile.location.country },
    { label: "City", value: profile.location.city },
    { label: "Age", value: currentAge() },
    { label: "Experience", value: `${years}+ years` },
    { label: "Freelance", value: <span className="text-accent">{profile.freelance}</span> },
    {
      label: "Email",
      value: (
        <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors break-all">
          {site.email}
        </a>
      ),
    },
    { label: "Languages", value: profile.languages.map((l) => l.name).join(", ") },
  ];

  return (
    <section id="about" className="section-space relative" aria-labelledby="about-title">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <TiltCard maxTilt={4} className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={profile.portrait.src}
                  alt={`${profile.name}, ${profile.tagline}`}
                  width={profile.portrait.width}
                  height={profile.portrait.height}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 100vw"
                  className="size-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm text-foreground/90">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  {profile.location.city}, {profile.location.country}
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-accent/10 blur-2xl" aria-hidden="true" />
            </TiltCard>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-border pt-3">
                  <dt className="text-subtle">{fact.label}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading id="about-title" script="My story" title="About me" />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-lead text-muted max-w-2xl">
            <p>{profile.story[0]}</p>
            <p>
              Now, with {years}+ years of experience in commercial application and software development, I am more than just a developer, I am
              an innovator, a problem solver, and a builder. My passion lies in creating impactful solutions, writing clean, modern code, and
              continuously pushing the boundaries of technology.
            </p>
            <p>{profile.story[1]}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <blockquote className="relative border-l-2 border-accent pl-6">
              <p className="font-display text-h3 font-semibold text-foreground">“{profile.quote}”</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
