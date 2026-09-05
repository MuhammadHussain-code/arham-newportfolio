"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type RotatingRoleProps = { roles: readonly string[]; className?: string };

export function RotatingRole({ roles, className }: RotatingRoleProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(roles[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const word = roles[index] ?? "";
    let delay = deleting ? 40 : 75;
    if (!deleting && length === word.length) delay = 1800;
    if (deleting && length === 0) delay = 300;

    const timer = window.setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, index, length, reducedMotion, roles]);

  const shown = reducedMotion ? roles[0] : (roles[index] ?? "").slice(0, length);

  return (
    <span className={className}>
      <span className="sr-only">{roles.slice(0, 3).join(", ")}</span>
      <span aria-hidden="true" className={reducedMotion ? undefined : "caret"}>
        {shown}
      </span>
    </span>
  );
}
