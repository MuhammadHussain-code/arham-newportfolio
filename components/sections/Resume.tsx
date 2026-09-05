import { GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Resume() {
  return (
    <section id="resume" className="section-space" aria-labelledby="resume-title">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionHeading id="resume-title" script="Working with" title="Experience" />
          <Reveal className="mt-12">
            <Timeline items={experience} />
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <SectionHeading script="Studied at" title="Education" />
          <Stagger className="mt-12 space-y-3">
            {education.map((item) => (
              <StaggerItem key={item.institution}>
                <article className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/40">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-subtle tabular-nums">
                      {item.start} — {item.end}
                      {item.result ? <span className="text-accent"> · {item.result}</span> : null}
                    </p>
                    <h3 className="mt-1 font-semibold text-foreground">{item.institution}</h3>
                    <p className="text-sm text-muted">{item.degree}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
