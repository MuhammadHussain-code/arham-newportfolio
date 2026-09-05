"use client";

import { useEffect, useRef, useState } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

type CursorMode = "default" | "link" | "view" | "drag";

export function CustomCursor() {
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const pointer = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      setVisible(true);
      const target = event.target as HTMLElement | null;
      const cursorTarget = target?.closest<HTMLElement>("[data-cursor]");
      if (cursorTarget) {
        setMode((cursorTarget.dataset.cursor as CursorMode) ?? "default");
      } else if (target?.closest("a, button, [role=button], input, textarea, label")) {
        setMode("link");
      } else {
        setMode("default");
      }
    };
    const onLeave = () => setVisible(false);

    const loop = () => {
      ring.x += (pointer.x - ring.x) * 0.18;
      ring.y += (pointer.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  const label = mode === "view" ? "View" : mode === "drag" ? "Drag" : "";
  const ringSize = label ? 72 : mode === "link" ? 44 : 32;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
      <div ref={dotRef} className="absolute top-0 left-0 size-1.5 rounded-full bg-accent" style={{ opacity: label ? 0 : 1, transition: "opacity 0.2s" }} />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-accent/70 text-[11px] font-medium tracking-wider text-accent-ink"
        style={{
          width: ringSize,
          height: ringSize,
          background: label ? "var(--accent)" : "transparent",
          transition: "width 0.25s var(--ease-out), height 0.25s var(--ease-out), background 0.25s",
        }}
      >
        {label}
      </div>
    </div>
  );
}
