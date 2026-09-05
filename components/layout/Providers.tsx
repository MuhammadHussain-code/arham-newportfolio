"use client";

import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <SmoothScroll />
      <CustomCursor />
      {children}
    </MotionConfig>
  );
}
