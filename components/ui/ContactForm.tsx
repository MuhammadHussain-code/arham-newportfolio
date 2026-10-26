"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { mailto } from "@/lib/utils";

const fieldClass =
  "peer w-full border-0 border-b border-on-spot/60 bg-transparent px-0 py-3 font-body text-[1.0625rem] text-on-spot placeholder:text-on-spot-soft transition-colors duration-200 focus:border-on-spot focus:outline-none";

const labelClass = "label mb-1 block text-on-spot";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = mailto(`Message from ${name}`, body);
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="border-t border-on-spot pt-6">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={5} className={fieldClass} placeholder="Tell me about the project, the team, the timeline." />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Button type="submit" variant="ink" size="lg" className="hover:bg-paper hover:text-ink">
          Send message
        </Button>
        <p className="text-[0.9375rem] text-on-spot-soft" aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : "Opens in your email app."}
        </p>
      </div>
    </form>
  );
}
