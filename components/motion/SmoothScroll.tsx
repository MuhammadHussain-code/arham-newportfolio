"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

export function SmoothScroll() {
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!finePointer || reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -8, duration: 1.2 });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [finePointer, reducedMotion]);

  return null;
}
