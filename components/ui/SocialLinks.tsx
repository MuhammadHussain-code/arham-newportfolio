import { socialLinks, type SocialLink } from "@/data/socialLinks";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function SocialLinks({ items = socialLinks, className, compact = false }: { items?: SocialLink[]; className?: string; compact?: boolean }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}>
      {items.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-1 text-muted hover:text-accent transition-colors duration-200",
              compact ? "text-sm" : "text-sm md:text-base",
            )}
          >
            {social.label}
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
