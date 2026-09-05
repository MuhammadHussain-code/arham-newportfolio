import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-space bg-surface/60 border-y border-border" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHeading id="skills-title" script="Developing on" title="Coding skills" description="The stack I ship with every week." />
        <div className="mt-12 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="grid gap-4 lg:grid-cols-12 lg:gap-8">
              <h3 className="lg:col-span-3 font-display text-h3 font-bold text-foreground lg:pt-4">{category.title}</h3>
              <Stagger className="lg:col-span-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
                {category.skills.map((skill) => (
                  <StaggerItem key={skill.name} className="h-full">
                    <SkillBadge skill={skill} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
