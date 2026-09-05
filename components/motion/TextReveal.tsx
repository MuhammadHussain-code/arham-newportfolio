"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function TextReveal({ lines, className, lineClassName, delay = 0, as = "span" }: TextRevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: delay } } }}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            variants={{
              hidden: { y: "110%", rotate: 2 },
              show: { y: 0, rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
