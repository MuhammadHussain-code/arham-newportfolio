import Image from "next/image";
import { clients, testimonials } from "@/data/testimonials";
import { Department } from "@/components/ui/Department";
import { PageTurn } from "@/components/motion/PageTurn";

export function Testimonials() {
  return (
    <section id="reviews" className="gutter-x dept-space pt-0" aria-labelledby="reviews-title">
      <Department id="reviews-title" title="Reviews" />

      <ul className="mt-8 grid md:grid-cols-2 md:gap-x-12 lg:mt-10" role="list">
        {testimonials.map((item, index) => (
          <PageTurn key={item.name} as="li" className="border-t border-hair py-6 md:py-7" delay={0.04 * index}>
            <figure>
              <blockquote>
                <p className={index < 2 ? "dropcap text-ink" : "text-ink"}>{item.quote}</p>
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-label text-[0.875rem] font-medium">{item.name}</p>
                <p className="label-sm mt-0.5 text-ink-mute">{item.title}</p>
              </figcaption>
            </figure>
          </PageTurn>
        ))}
      </ul>

      <PageTurn className="mt-12 lg:mt-16">
        <div className="flex items-baseline justify-between border-t border-ink pt-5">
          <h3 className="text-h3">Clients</h3>
          <p className="label-sm tabular text-ink-mute">{clients.length} shown</p>
        </div>
        <ul className="mt-6 grid grid-cols-2 border-t border-hair sm:grid-cols-3 lg:grid-cols-5" role="list">
          {clients.map((client) => (
            <li key={client.name} className="border-b border-hair">
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-24 items-center justify-center px-5 grayscale transition-[filter] duration-300 hover:grayscale-0 focus-visible:grayscale-0"
                aria-label={client.name}
              >
                <Image src={client.logo} alt={client.name} width={client.width} height={client.height} className="max-h-11 w-auto max-w-[9rem] object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </PageTurn>
    </section>
  );
}
