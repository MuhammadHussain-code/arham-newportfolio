"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "@/data/experience";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = refs.current.filter((n): n is HTMLLIElement => n !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(nodes.indexOf(entry.target as HTMLLIElement));
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <ol className="relative" role="list">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border-strong to-transparent" aria-hidden="true" />
      {items.map((item, index) => {
        const isActive = index === active;
        return (
          <li
            key={item.company}
            ref={(el) => {
              refs.current[index] = el;
            }}
            className="relative pl-10 pb-12 last:pb-0"
          >
            <span
              className={cn(
                "absolute left-0 top-2 size-[15px] rounded-full border-2 transition-[background-color,border-color,box-shadow] duration-500",
                isActive ? "border-accent bg-accent shadow-[0_0_0_6px_rgba(104,224,207,0.18)]" : "border-border-strong bg-background",
              )}
              aria-hidden="true"
            />
            <p className="text-sm text-subtle tabular-nums">
              <time>{item.start}</time> — <time>{item.end}</time>
            </p>
            <h3 className={cn("mt-1 font-display text-h3 font-bold transition-colors duration-500", isActive ? "text-accent" : "text-foreground")}>
              {item.company}
            </h3>
            <p className="mt-0.5 font-medium text-foreground/90">{item.role}</p>
            <p className="mt-3 max-w-xl text-muted">{item.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies at ${item.company}`}>
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <Chip>{tech}</Chip>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}
