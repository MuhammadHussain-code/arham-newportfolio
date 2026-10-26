import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper gutter-x py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
        <p className="font-display text-xl uppercase leading-none tracking-[0.02em]">{profile.name}</p>
        <nav aria-label="Colophon">
          <ul className="flex flex-wrap gap-x-5 gap-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="label-sm text-ink-mute transition-colors hover:text-spot">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-6 flex flex-col gap-1 border-t border-hair pt-4 label-sm text-ink-mute md:flex-row md:justify-between">
        <p className="tabular">
          © {new Date().getFullYear()} {profile.name} · {profile.location.city}, {profile.location.country}
        </p>
        <a href={`mailto:${site.email}`} className="normal-case tracking-normal font-body text-[0.9375rem] text-ink hover:text-spot transition-colors">
          {site.email}
        </a>
      </div>
    </footer>
  );
}
