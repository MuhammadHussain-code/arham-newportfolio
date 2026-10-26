import { skillCategories } from "@/data/skills";
import { Department } from "@/components/ui/Department";
import { PageTurn } from "@/components/motion/PageTurn";

export function Skills() {
  return (
    <section id="skills" className="gutter-x dept-space pt-0" aria-labelledby="skills-title">
      <Department id="skills-title" title="Skills" />
      <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-12">
        {skillCategories.map((category, index) => (
          <PageTurn key={category.title} className={index === 0 ? "lg:col-span-6" : index === 1 ? "lg:col-span-6" : "lg:col-span-12"} delay={0.06 * index}>
            <h3 className="text-h3">{category.title}</h3>
            <table className="mt-4 w-full border-t border-ink text-left">
              <thead>
                <tr className="label-sm text-ink-mute">
                  <th scope="col" className="w-[11rem] py-2 pr-4 font-medium">
                    Skill
                  </th>
                  <th scope="col" className="py-2 pr-4 font-medium">
                    What it covers
                  </th>
                  <th scope="col" className="w-12 py-2 text-right font-medium">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.skills.map((skill) => (
                  <tr key={skill.name} className="border-t border-hair align-top">
                    <th scope="row" className="py-3 pr-4 font-label text-[0.875rem] font-medium">
                      {skill.name}
                    </th>
                    <td className="py-3 pr-4 text-[0.9375rem] text-ink-soft">{skill.description}</td>
                    <td className="py-3 text-right font-label tabular text-[0.9375rem]">{skill.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PageTurn>
        ))}
      </div>
    </section>
  );
}
