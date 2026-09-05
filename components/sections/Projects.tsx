import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="section-space" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionHeading id="projects-title" script="Latest works" title="Projects" description="Web and mobile products shipped for clients and startups, from first commit to store release." />
        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
