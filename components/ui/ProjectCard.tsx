"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const href = project.link?.href;

  const media = (
    <TiltCard maxTilt={4} className="group/media relative">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.04]"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-[box-shadow] duration-500 group-hover/media:shadow-[inset_0_0_0_1px_rgba(104,224,207,0.4)]" aria-hidden="true" />
      </div>
    </TiltCard>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, transition: { duration: 0.25 } }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="view" className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`${project.name} — ${project.link?.label}`}>
            {media}
          </a>
        ) : (
          media
        )}
      </div>

      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <Chip accent>{project.category}</Chip>
          {project.client ? <span className="text-sm text-subtle">for {project.client}</span> : null}
        </div>
        <h3 className="mt-4 font-display text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-bold leading-[1.05] tracking-tight">{project.name}</h3>
        <p className="mt-2 text-sm text-accent">{project.role}</p>
        <p className="mt-4 text-muted">{project.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-muted" aria-label="Contributions">
          {project.contributions.map((item) => (
            <li key={item} className="flex gap-2.5">
              <Check className="mt-1 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          {project.link ? (
            <Button href={project.link.href} variant="secondary">
              {project.link.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          ) : null}
          {project.note ? <p className="text-xs text-subtle">{project.note}</p> : null}
        </div>
      </div>
    </motion.article>
  );
}
