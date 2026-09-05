"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Skill } from "@/data/skills";

export function SkillBadge({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  return (
    <div
      ref={ref}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-[border-color,transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-card-hover"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="font-semibold text-foreground">{skill.name}</h4>
        <span className="text-xs tabular-nums text-subtle" aria-label={`Proficiency ${skill.level} percent`}>
          {skill.level}%
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{skill.description}</p>
      <div className="mt-auto pt-4">
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-border" aria-hidden="true">
          <motion.div
            className="h-full origin-left rounded-full bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? skill.level / 100 : 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}
