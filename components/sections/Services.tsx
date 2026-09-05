import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Services() {
  return (
    <section id="services" className="section-space bg-surface/60 border-y border-border" aria-labelledby="services-title">
      <div className="container-x">
        <SectionHeading id="services-title" script="What I do" title="Services" description="From first wireframe to production release, across web, mobile and AI." />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 md:p-8 transition-[border-color,transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:bg-card-hover">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors duration-300 group-hover:border-accent/50">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-h3 font-bold">{service.title}</h3>
                  </div>
                  <p className="mt-5 text-muted">{service.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} technologies`}>
                    {service.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
