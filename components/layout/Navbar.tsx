"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open ? "glass border-b border-border" : "border-b border-transparent",
        )}
      >
        <nav className="container-x flex h-[var(--nav-height)] items-center justify-between" aria-label="Primary">
          <a href="#home" className="flex items-center gap-3 group" aria-label={`${profile.name} — home`}>
            <Image src="/images/logo.png" alt="" width={36} height={36} className="size-9 transition-transform duration-500 group-hover:rotate-[-8deg]" priority />
            <span className="font-display font-bold leading-[1.05] text-sm tracking-tight">
              {profile.firstName}
              <br />
              {profile.lastName}
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-200",
                      isActive ? "text-foreground" : "text-muted hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full bg-accent transition-[transform,opacity] duration-300",
                        isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                      )}
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href={profile.cvPath} variant="secondary" size="sm" className="hidden sm:inline-flex" download>
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </Button>
            <button
              type="button"
              className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground hover:border-accent hover:text-accent transition-colors"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[var(--nav-height)] bottom-0 bg-background/[0.97] backdrop-blur-xl border-t border-border overflow-y-auto"
          >
            <div className="container-x flex min-h-full flex-col justify-between py-10">
              <ul className="flex flex-col gap-2" role="list">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.06, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? "location" : undefined}
                      className={cn(
                        "flex items-center gap-4 py-3 font-display text-4xl font-bold tracking-tight transition-colors",
                        active === item.id ? "text-accent" : "text-foreground hover:text-accent",
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-6">
                <Button href={profile.cvPath} variant="secondary" download className="w-full sm:w-auto">
                  <Download className="size-4" aria-hidden="true" />
                  Download CV
                </Button>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" role="list">
                  {socialLinks.slice(0, 4).map((social) => (
                    <li key={social.label}>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
