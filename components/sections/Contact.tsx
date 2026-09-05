import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { ContactScene } from "@/components/three/ContactScene";

export function Contact() {
  const [emailUser, emailDomain] = site.email.split("@");
  return (
    <section id="contact" className="section-space relative overflow-hidden" aria-labelledby="contact-title">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ContactScene />
      </div>

      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="contact-title" script="Contact" title="Let's talk" description="Have a web, mobile or AI product in mind? Send a message and I will reply within a day." />
          <Reveal delay={0.1} className="mt-10">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex max-w-full items-baseline gap-2 font-display text-[clamp(1.25rem,0.7rem+1.9vw,2.4rem)] font-bold leading-tight tracking-tight text-foreground [overflow-wrap:anywhere] transition-colors hover:text-accent"
            >
              <span className="underline decoration-accent/50 decoration-2 underline-offset-8 transition-colors group-hover:decoration-accent">
                {emailUser}
                <wbr />@{emailDomain}
              </span>
              <ArrowUpRight className="size-[0.7em] shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <p className="mt-6 text-muted">
              {profile.location.city}, {profile.location.country} · Freelance {profile.freelance.toLowerCase()} · Open to remote teams
            </p>
            <SocialLinks className="mt-8" />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="rounded-3xl border border-border glass p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
