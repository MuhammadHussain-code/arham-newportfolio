import { ArrowUpRight } from "lucide-react";
import { socialLinks, type SocialLink } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

export function SocialLinks({ items = socialLinks, className, tone = "ink" }: { items?: SocialLink[]; className?: string; tone?: "ink" | "spot" }) {
  const onSpot = tone === "spot";
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2", className)} role="list">
      {items.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group/soc label inline-flex items-center gap-1 transition-colors duration-200",
              onSpot ? "text-on-spot hover:text-on-spot-soft" : "text-ink hover:text-spot",
            )}
          >
            <span className={cn("border-b pb-0.5 transition-colors", onSpot ? "border-on-spot/50 group-hover/soc:border-on-spot" : "border-hair group-hover/soc:border-spot")}>{social.label}</span>
            <ArrowUpRight className="size-3 transition-transform duration-300 ease-[var(--ease-out)] group-hover/soc:-translate-y-0.5 group-hover/soc:translate-x-0.5" aria-hidden="true" strokeWidth={1.75} />
          </a>
        </li>
      ))}
    </ul>
  );
}
