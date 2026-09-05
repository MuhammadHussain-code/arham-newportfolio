import Image from "next/image";
import { clients, testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="section-space bg-surface/60 border-y border-border overflow-hidden" aria-labelledby="reviews-title">
      <div className="container-x">
        <SectionHeading id="reviews-title" script="What customers say" title="Reviews" />
        <Reveal className="mt-12">
          <TestimonialCarousel items={testimonials} />
        </Reveal>

        <Reveal className="mt-20">
          <p className="font-script text-accent text-2xl leading-none" aria-hidden="true">
            My partners
          </p>
          <h3 className="mt-2 font-display text-h3 font-bold">Clients</h3>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" role="list">
            {clients.map((client) => (
              <li key={client.name}>
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-6 grayscale opacity-70 transition-[opacity,filter,border-color] duration-300 hover:grayscale-0 hover:opacity-100 hover:border-accent/40"
                  aria-label={client.name}
                >
                  <Image src={client.logo} alt={client.name} width={client.width} height={client.height} className="max-h-12 w-auto max-w-full object-contain" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
