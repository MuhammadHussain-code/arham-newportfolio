import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mark } from "@/components/ui/Mark";
import { PageTurn } from "@/components/motion/PageTurn";

export function Contact() {
  const [emailUser, emailDomain] = site.email.split("@");
  return (
    <section id="contact" className="relative bg-spot text-on-spot gutter-x dept-space" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <PageTurn className="lg:col-span-5">
          <h2 id="contact-title" className="text-dept">
            Let&apos;s talk.
          </h2>
          <p className="mt-6 text-lede text-on-spot-soft measure">Have a web, mobile or AI product in mind? Send a message below, or write to me directly.</p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex max-w-full items-baseline gap-2 font-display text-[clamp(1.375rem,0.95rem+1.1vw,1.875rem)] leading-tight text-on-spot [overflow-wrap:anywhere] transition-colors hover:text-on-spot-soft"
          >
            <span className="border-b border-on-spot/60 pb-1 transition-colors group-hover:border-on-spot">
              {emailUser}
              <wbr />@{emailDomain}
            </span>
            <ArrowUpRight className="size-[0.6em] shrink-0 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.75} />
          </a>
          <p className="label mt-8 text-on-spot">
            {profile.location.city}, {profile.location.country} · Freelance {profile.freelance.toLowerCase()} · Open to remote teams
          </p>
          <SocialLinks className="mt-5" tone="spot" />
        </PageTurn>

        <PageTurn className="lg:col-span-7" delay={0.1}>
          <ContactForm />
        </PageTurn>
      </div>
      <Mark size={22} className="absolute bottom-5 right-6 opacity-90" />
    </section>
  );
}
