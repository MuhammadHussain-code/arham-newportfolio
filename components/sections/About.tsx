import { profile } from "@/data/profile";
import { site } from "@/lib/site";
import { currentAge, yearsOfExperience } from "@/lib/utils";
import { Department } from "@/components/ui/Department";
import { Plate } from "@/components/ui/Plate";
import { Mark } from "@/components/ui/Mark";
import { PageTurn } from "@/components/motion/PageTurn";

export function About() {
  const years = yearsOfExperience();
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Residence", value: profile.location.country },
    { label: "City", value: profile.location.city },
    { label: "Age", value: <span className="tabular">{currentAge()}</span> },
    { label: "Experience", value: <span className="tabular">{years}+ years</span> },
    { label: "Freelance", value: <span className="text-spot">{profile.freelance}</span> },
    {
      label: "Email",
      value: (
        <a href={`mailto:${site.email}`} className="underline decoration-hair hover:decoration-spot hover:text-spot transition-colors [overflow-wrap:anywhere]">
          {site.email}
        </a>
      ),
    },
    { label: "Languages", value: profile.languages.map((l) => l.name).join(", ") },
  ];

  return (
    <section id="about" className="gutter-x dept-space" aria-labelledby="about-title">
      <Department id="about-title" title="About" standfirst={<q className="font-display italic">{profile.quote}</q>} />

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
        <PageTurn className="lg:col-span-4">
          <Plate src={profile.portrait.src} alt={`${profile.name}, ${profile.tagline}`} width={profile.portrait.width} height={profile.portrait.height} shape="quadrant" aspect="4 / 5" sizes="(min-width: 1024px) 26vw, 100vw" imgClassName="object-cover object-top" className="max-w-sm lg:max-w-none" />
          <dl className="mt-6 border-t border-ink">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-hair py-2.5 text-[0.9375rem]">
                <dt className="label pt-0.5 text-ink-mute">{fact.label}</dt>
                <dd className="text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex justify-end">
            <Mark size={18} />
          </div>
        </PageTurn>

        <PageTurn className="lg:col-span-8" delay={0.1}>
          <div className="space-y-5 text-ink-soft md:columns-copy md:space-y-0 [&>p]:mb-5">
            <p className="dropcap">{profile.story[0]}</p>
            <p>
              Now, with {years}+ years of experience in commercial application and software development, I am more than just a developer, I am an innovator, a
              problem solver, and a builder. My passion lies in creating impactful solutions, writing clean, modern code, and continuously pushing the boundaries of
              technology.
            </p>
            <p>{profile.story[1]}</p>
          </div>
        </PageTurn>
      </div>
    </section>
  );
}
