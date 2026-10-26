"use client";

import type { Project } from "@/data/projects";
import { Plate } from "@/components/ui/Plate";
import { Mark } from "@/components/ui/Mark";
import { TextLink } from "@/components/ui/TextLink";
import { PageTurn } from "@/components/motion/PageTurn";
import { cn } from "@/lib/utils";

const shapes = ["disc", "slab", "quadrant", "wave"] as const;

function Copy({ project, feature }: { project: Project; feature: boolean }) {
  return (
    <>
      <h3 id={`project-${project.slug}`} className={cn(feature ? "text-dept" : "text-h3")}>
        {project.name}
      </h3>
      <p className="label mt-2 text-ink-mute">
        {project.category}
        {project.client ? ` · for ${project.client}` : ""}
      </p>
      <p className="label mt-1 text-spot">{project.role}</p>
    </>
  );
}

function Detail({ project }: { project: Project }) {
  return (
    <>
      <p className="text-ink-soft">{project.description}</p>
      <ul className="mt-4 border-t border-ink" aria-label="Contributions">
        {project.contributions.map((item) => (
          <li key={item} className="border-b border-hair py-2 text-[0.9375rem] text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
      <p className="label-sm mt-4 text-ink-mute">{project.stack.join(" · ")}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        {project.link ? <TextLink href={project.link.href}>{project.link.label}</TextLink> : null}
        {project.note ? <p className="text-sm italic text-ink-mute">{project.note}</p> : null}
      </div>
    </>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const feature = index === 0;
  const reversed = index % 2 === 0;
  const shape = shapes[index % shapes.length];

  const plate = (
    <Plate
      src={project.image.src}
      alt={project.image.alt}
      width={project.image.width}
      height={project.image.height}
      shape={shape}
      aspect={feature ? "2 / 1" : "16 / 10"}
      sizes={feature ? "(min-width: 1024px) 79vw, 100vw" : "(min-width: 1024px) 46vw, 100vw"}
      priority={feature}
    >
      {feature ? <Mark size={22} className="absolute bottom-4 right-4 z-10" /> : null}
    </Plate>
  );

  const linked = project.link ? (
    <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-2 focus-visible:outline-spot focus-visible:outline-offset-4" aria-label={`${project.name}: ${project.link.label}`}>
      {plate}
    </a>
  ) : (
    plate
  );

  if (feature) {
    // The lead feature runs at full width: plate across the column, copy in two columns beneath.
    return (
      <PageTurn as="article" className="border-b border-hair py-10 lg:py-14" aria-labelledby={`project-${project.slug}`}>
        {linked}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Copy project={project} feature />
          </div>
          <div className="lg:col-span-7">
            <Detail project={project} />
          </div>
        </div>
      </PageTurn>
    );
  }

  return (
    <PageTurn as="article" className="grid gap-6 border-b border-hair py-10 lg:grid-cols-12 lg:gap-12 lg:py-14" aria-labelledby={`project-${project.slug}`}>
      <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>{linked}</div>
      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <Copy project={project} feature={false} />
        <div className="mt-4">
          <Detail project={project} />
        </div>
      </div>
    </PageTurn>
  );
}
