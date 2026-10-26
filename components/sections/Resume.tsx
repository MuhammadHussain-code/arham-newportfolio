import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { Department } from "@/components/ui/Department";
import { TextLink } from "@/components/ui/TextLink";
import { Mark } from "@/components/ui/Mark";
import { PageTurn } from "@/components/motion/PageTurn";

export function Resume() {
  return (
    <section id="resume" className="gutter-x dept-space pt-0" aria-labelledby="resume-title">
      <Department
        id="resume-title"
        title="Resume"
        aside={
          <TextLink href={profile.cvPath} external={false}>
            Download CV
          </TextLink>
        }
      />

      <div className="mt-10 grid gap-14 lg:mt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h3 className="text-h3">Experience</h3>
          <ol className="mt-5 border-t border-ink" role="list">
            {experience.map((item, index) => (
              <PageTurn key={item.company} as="li" className="grid gap-2 border-b border-hair py-6 md:grid-cols-[9.5rem_1fr] md:gap-6" delay={0.05 * index}>
                <p className="label tabular text-ink-mute pt-1.5">
                  <time>{item.start}</time>
                  <br />
                  <span className="inline-flex items-center gap-2">
                    <time>{item.end}</time>
                    {item.end === "Present" ? <Mark size={14} /> : null}
                  </span>
                </p>
                <div>
                  <p className="font-display text-[1.5rem] leading-tight">{item.company}</p>
                  <p className="label mt-1.5 text-spot">{item.role}</p>
                  <p className="mt-3 text-ink-soft">{item.summary}</p>
                  <p className="label-sm mt-4 text-ink-mute">{item.technologies.join(" · ")}</p>
                </div>
              </PageTurn>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <h3 className="text-h3">Education</h3>
          <ol className="mt-5 border-t border-ink" role="list">
            {education.map((item, index) => (
              <PageTurn key={item.institution} as="li" className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-hair py-4" delay={0.05 * index}>
                <p className="label tabular text-ink-mute pt-1">
                  {item.start}–{item.end}
                </p>
                <div>
                  <p className="font-display text-[1.25rem] leading-tight">{item.institution}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink-soft">{item.degree}</p>
                  {item.result ? <p className="label-sm mt-1.5 text-spot">{item.result}</p> : null}
                </div>
              </PageTurn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
