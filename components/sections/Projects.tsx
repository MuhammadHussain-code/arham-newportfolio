import { projects } from "@/data/projects";
import { Department } from "@/components/ui/Department";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="gutter-x dept-space pt-0" aria-labelledby="projects-title">
      <Department
        id="projects-title"
        title="Projects"
        aside={<p className="label tabular text-ink-mute">{projects.length} shipped</p>}
      />
      <div className="mt-8 lg:mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
