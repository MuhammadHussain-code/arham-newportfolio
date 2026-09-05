"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("li");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="scrollbar-none -mx-[var(--gutter)] flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-2"
        role="list"
        aria-label="Client reviews"
      >
        {items.map((item) => (
          <li key={item.name} className="w-[min(85vw,22rem)] shrink-0 snap-start md:w-[24rem]">
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40">
              <blockquote>
                <Quote className="size-5 text-accent" aria-hidden="true" />
                <p className="mt-4 text-foreground/90">{item.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-subtle">{item.title}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <button type="button" onClick={() => scrollBy(-1)} className="inline-flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent" aria-label="Previous reviews">
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scrollBy(1)} className="inline-flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent" aria-label="Next reviews">
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
