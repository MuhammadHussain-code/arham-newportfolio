"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { primarySocials } from "@/data/socialLinks";
import { site } from "@/lib/site";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Mark } from "@/components/ui/Mark";
import { SocialLinks } from "@/components/ui/SocialLinks";

const sectionIds = navItems.map((item) => item.id);

function MastheadName({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("group/mast inline-flex items-end gap-3", className)} aria-label={`${profile.name}, cover`}>
      <span className="text-masthead uppercase text-ink">
        {profile.firstName}
        <br />
        {profile.lastName}
      </span>
    </a>
  );
}

function NavList({ active, onPick, large = false }: { active: string; onPick?: () => void; large?: boolean }) {
  return (
    <ul className={cn("flex flex-col", large ? "gap-1" : "gap-2.5")} role="list">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={onPick}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "group/nav inline-flex items-center gap-3 transition-colors duration-200",
                large ? "font-display text-[2.5rem] leading-none py-2" : "label py-0.5",
                isActive ? "text-spot" : "text-ink hover:text-spot",
              )}
            >
              <span
                className={cn("shrink-0 rounded-full bg-spot transition-[transform,opacity] duration-300", large ? "size-2.5" : "size-1.5", isActive ? "scale-100 opacity-100" : "scale-0 opacity-0")}
                aria-hidden="true"
              />
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Masthead() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Rail: the masthead column on wide pages. */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--rail)] flex-col justify-between border-r border-ink bg-paper px-8 py-9 lg:flex" aria-label="Masthead">
        <div>
          <div className="flex items-start justify-between gap-4">
            <MastheadName />
            <Mark size={28} hidden={false} className="mt-1" />
          </div>
          <p className="label mt-3 text-spot">Web. Mobile. AI.</p>

          <nav className="mt-10 border-t border-ink pt-6" aria-label="Departments">
            <NavList active={active} />
          </nav>
        </div>

        <div className="space-y-5">
          <Button href={profile.cvPath} download className="w-full">
            Download CV
          </Button>
          <div className="border-t border-ink pt-4">
            <a href={`mailto:${site.email}`} className="font-body text-[0.9375rem] text-ink underline decoration-hair hover:decoration-spot hover:text-spot transition-colors [overflow-wrap:anywhere]">
              {site.email}
            </a>
            <SocialLinks items={primarySocials} className="mt-3 gap-x-4" />
          </div>
          <p className="label-sm text-ink-mute tabular">
            No. 10 · {profile.location.city} · {year}
          </p>
        </div>
      </aside>

      {/* Bar: the masthead strip on narrow pages. */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink bg-paper lg:hidden">
        <div className="flex h-[var(--bar-height)] items-center justify-between gutter-x">
          <a href="#home" className="inline-flex items-center gap-3" aria-label={`${profile.name}, cover`} onClick={() => setOpen(false)}>
            <Mark size={24} hidden={false} />
            <span className="font-display text-[1.375rem] uppercase leading-none tracking-[0.02em]">{profile.name}</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 border border-ink px-3 label text-ink transition-colors hover:bg-ink hover:text-paper"
            aria-expanded={open}
            aria-controls="issue-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden="true" strokeWidth={1.75} /> : <Menu className="size-4" aria-hidden="true" strokeWidth={1.75} />}
            {open ? "Close" : "Contents"}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="issue-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-[var(--bar-height)] bottom-0 overflow-y-auto bg-paper"
            >
              <div className="flex min-h-full flex-col justify-between gutter-x py-8">
                <nav aria-label="Departments">
                  <p className="label text-spot">Contents</p>
                  <div className="mt-4 border-t border-ink pt-4">
                    <NavList active={active} large onPick={() => setOpen(false)} />
                  </div>
                </nav>
                <div className="mt-10 space-y-5 border-t border-ink pt-6">
                  <Button href={profile.cvPath} download className="w-full sm:w-auto">
                    Download CV
                  </Button>
                  <a href={`mailto:${site.email}`} className="block font-body text-ink underline decoration-hair hover:text-spot [overflow-wrap:anywhere]">
                    {site.email}
                  </a>
                  <SocialLinks />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
