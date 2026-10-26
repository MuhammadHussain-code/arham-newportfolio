import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** A tracked label link with the program's arrow; external links get the up-right arrow. */
export function TextLink({ href, children, className, external }: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
  const isExternal = external ?? /^https?:/.test(href);
  const Arrow = isExternal ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/link label inline-flex items-center gap-2 text-ink transition-colors duration-200 hover:text-spot focus-visible:text-spot",
        className,
      )}
    >
      <span className="border-b border-ink pb-0.5 transition-colors duration-200 group-hover/link:border-spot">{children}</span>
      <Arrow className="size-3.5 transition-transform duration-300 ease-[var(--ease-out)] group-hover/link:translate-x-1" aria-hidden="true" strokeWidth={1.75} />
    </a>
  );
}
