"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
};

export function TiltCard({ children, className, maxTilt = 5, scale = 1.015 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), { stiffness: 180, damping: 22 });
  const hoverScale = useSpring(1, { stiffness: 200, damping: 24 });

  const onMove = (event: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };
  const onEnter = () => enabled && hoverScale.set(scale);
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    hoverScale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ rotateX: enabled ? rotateX : 0, rotateY: enabled ? rotateY : 0, scale: hoverScale, transformPerspective: 1200 }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
