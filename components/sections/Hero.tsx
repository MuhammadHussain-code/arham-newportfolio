import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { mailto, yearsOfExperience } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Plate } from "@/components/ui/Plate";
import { Mark } from "@/components/ui/Mark";
import { TextLink } from "@/components/ui/TextLink";
import { PageTurn } from "@/components/motion/PageTurn";

const cover = projects.find((p) => p.slug === "easygpt") ?? projects[0];
const teasers = ["andymation", "nodis"].map((slug) => projects.find((p) => p.slug === slug)).filter((p): p is (typeof projects)[number] => Boolean(p));

export function Hero() {
  const years = yearsOfExperience();
  const year = new Date().getFullYear();

  return (
    <section id="home" className="gutter-x pt-5 lg:pt-7" aria-labelledby="cover-title">
      {/* Folio */}
      <div className="label flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink pb-3 text-ink">
        <span>No. 10 · The Shipped Issue</span>
        <span className="hidden sm:inline">
          {profile.location.city}, {profile.location.country}
        </span>
        <span className="tabular">{year}</span>
      </div>

      <div className="grid gap-10 pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-10">
        <PageTurn className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h1 id="cover-title" className="text-display">
              Built end
              <br />
              to end.
            </h1>
            <p className="mt-7 text-lede text-ink-soft measure">
              A Master&apos;s in Software Engineering and a Full Stack Developer with over {years} years of experience in commercial application and software
              development. {projects.length} shipped products on the web and in both app stores, built with Next.js, React Native, Node.js and Firebase.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg">
              Read the projects
            </Button>
            <Button href={mailto("Hello from your portfolio")} variant="outline" size="lg">
              Email {profile.firstName}
            </Button>
          </div>
        </PageTurn>

        <PageTurn className="lg:col-span-6" delay={0.15}>
          <Plate src={cover.image.src} alt={cover.image.alt} width={cover.image.width} height={cover.image.height} shape="disc" priority sizes="(min-width: 1024px) 48vw, 100vw" aspect="4 / 3">
            <Mark size={22} className="absolute bottom-3 right-3 z-10" />
          </Plate>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="font-display text-[1.375rem] leading-tight">
              Cover story: {cover.name}
              <span className="label ml-3 text-ink-mute">{cover.category}</span>
            </p>
            {cover.link ? <TextLink href={cover.link.href}>{cover.link.label}</TextLink> : null}
          </div>
        </PageTurn>
      </div>

      {/* Features at the fold */}
      <div className="rule-heavy mt-12 grid gap-8 pt-6 md:grid-cols-2 md:gap-10 lg:mt-14">
        {teasers.map((project, index) => (
          <PageTurn key={project.slug} as="article" className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-5 sm:items-start" delay={0.1 * index}>
            <Plate src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} shape={index === 0 ? "quadrant" : "slab"} aspect="4 / 3" sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" />
            <div>
              <h2 className="text-h3">
                <a href="#projects" className="hover:text-spot transition-colors">
                  {project.name}
                </a>
              </h2>
              <p className="label mt-2 text-ink-mute">
                {project.category}
                {project.client ? ` · for ${project.client}` : ""}
              </p>
              <p className="mt-3 text-[0.9375rem] text-ink-soft line-clamp-3">{project.description}</p>
            </div>
          </PageTurn>
        ))}
      </div>
    </section>
  );
}
