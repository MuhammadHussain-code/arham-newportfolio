"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mailto } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-subtle transition-colors duration-200 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

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
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm text-muted">
            Full name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-muted">
            Email address
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={5} className={fieldClass} placeholder="Tell me about the project, timeline and budget." />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          Send message
          <Send className="size-4" aria-hidden="true" />
        </Button>
        <p className="text-sm text-subtle" aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : "Opens in your email app."}
        </p>
      </div>
    </form>
  );
}
