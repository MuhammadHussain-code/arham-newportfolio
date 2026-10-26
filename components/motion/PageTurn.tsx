import { cn } from "@/lib/utils";

/**
 * The issue's one authored motion: content turns in from the gutter with a
 * clip-path wipe as it enters the viewport, and any `[data-mark]` inside
 * appears last. Driven by a native scroll timeline (see globals.css), so
 * browsers without it, and readers who prefer reduced motion, see the page
 * fully open with no script in the way.
 */
export function PageTurn({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  /** Shifts the wipe later along the entry, in tenths of the entry range. */
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">) {
  const style = delay ? ({ "--turn-shift": `${Math.round(delay * 100)}%` } as React.CSSProperties) : undefined;
  return (
    <Tag className={cn("page-turn", className)} style={style} {...rest}>
      {children}
    </Tag>
  );
}
