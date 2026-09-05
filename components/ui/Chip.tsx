import { cn } from "@/lib/utils";

export function Chip({ children, className, accent = false }: { children: React.ReactNode; className?: string; accent?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap",
        accent ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted bg-surface",
        className,
      )}
    >
      {children}
    </span>
  );
}
