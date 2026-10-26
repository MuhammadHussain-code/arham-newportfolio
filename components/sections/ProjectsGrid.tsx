"use client";

import { useState } from "react";
import { filterProjects, projectFilters, type ProjectFilter } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filterProjects(filter);

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink">
        <div className="flex gap-6" role="group" aria-label="Filter projects">
          {projectFilters.map((option) => {
            const selected = option === filter;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(option)}
                className={cn(
                  "label -mb-px border-b-2 pb-3 transition-colors duration-200",
                  selected ? "border-spot text-spot" : "border-transparent text-ink-mute hover:text-ink",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
        <p className="label-sm tabular text-ink-mute pb-3" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div>
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
