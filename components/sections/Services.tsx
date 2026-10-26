import { services } from "@/data/services";
import { Department } from "@/components/ui/Department";
import { PageTurn } from "@/components/motion/PageTurn";

export function Services() {
  return (
    <section id="services" className="gutter-x dept-space pt-0" aria-labelledby="services-title">
      <Department id="services-title" title="Services" />
      <ol className="mt-8 grid md:grid-cols-2 md:gap-x-12 lg:mt-10" role="list">
        {services.map((service, index) => (
          <PageTurn key={service.title} as="li" className="rule-ink pt-5 pb-10" delay={0.06 * index}>
            <h3 className="text-h3">{service.title}</h3>
            <p className="mt-4 text-ink-soft">{service.summary}</p>
            <p className="label mt-5 text-ink-mute">{service.stack.join(" · ")}</p>
          </PageTurn>
        ))}
      </ol>
    </section>
  );
}
