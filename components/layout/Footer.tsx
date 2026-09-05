import Image from "next/image";
import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <Image src="/images/logo.png" alt="" width={40} height={40} className="size-10" />
              <span className="font-display font-bold text-lg leading-tight tracking-tight">{profile.name}</span>
            </a>
            <p className="mt-4 text-muted max-w-sm">
              {profile.tagline}. Based in {profile.location.city}, {profile.location.country}, working with remote teams worldwide.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm text-subtle mb-3">Sections</p>
            <ul className="space-y-2" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-muted hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm text-subtle mb-3">Elsewhere</p>
            <SocialLinks className="flex-col gap-y-2" compact />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
