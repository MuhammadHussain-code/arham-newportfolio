"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { filterProjects, projectFilters, type ProjectFilter } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filterProjects(filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((option) => {
          const selected = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(option)}
              className={cn(
                "h-10 rounded-full border px-5 text-sm font-medium transition-[background-color,color,border-color] duration-200",
                selected ? "border-accent bg-accent text-accent-ink" : "border-border-strong text-muted hover:border-accent hover:text-accent",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-subtle" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <LayoutGroup>
        <div className="mt-12 space-y-20 md:space-y-28">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}
