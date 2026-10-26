# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Arham Awan for remote full-time or contract engineering roles. They arrive from a CV, LinkedIn, or a job application, usually skim on desktop in a short window, and need to confirm real experience, breadth of stack, and a way to contact him.

Secondary (confirmed as lower priority): freelance clients arriving from Fiverr, Upwork, or Freelancer profiles.

## Product Purpose

Personal portfolio site for Arham Awan, Full Stack Developer and Software Engineer based in Karachi, Pakistan. It replaces the previous jQuery-template site at https://arham-awan.com with a Next.js rebuild that keeps every piece of real content. The site exists to prove experience quickly and route the visitor to a next step.

Success for a single visit is any of:

- contact form submitted (composes a `mailto:` to the site email; no backend)
- CV downloaded (`public/cv/Arham_Awan.pdf`)
- click-through to LinkedIn, Fiverr, Upwork, or Freelancer
- a live project opened on the App Store, Play Store, or the web

## Positioning

One developer covering the full product surface: web (Next.js, React, Node, Express, Firebase, MongoDB, PostgreSQL), cross-platform mobile (React Native, Expo, Flutter), and AI-driven features (OpenAI, VAPI, ElevenLabs, vector search). The claim is breadth backed by shipped work, not a single specialty. Shipped products and client testimonials are supporting evidence, not the lead.

## Operating Context

- Single-page site with anchored sections: Home, About, Services, Resume (Experience + Education), Skills, Projects, Reviews + Clients, Contact.
- Content is data-driven from `data/*.ts`; copy edits happen there, not in components.
- Years of experience and age are computed at render from `lib/site.ts` (`careerStartYear` 2019, `birthYear` 1999), matching the reference site's behavior.
- Visitors evaluate alongside a CV and LinkedIn; the site must agree with both.
- Reference site remains the source of truth for content. Projects hidden on the reference (Aimm Panel, Gold app) and its commented-out pricing section are deliberately excluded.

## Capabilities and Constraints

- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, Motion, Lenis. Server components by default; client islands only for the masthead menu, the project filter and the contact form.
- No WebGL since the 2026-10-23 redesign: the visual world is print (see DESIGN.md). Motion is a scroll-driven CSS reveal with a static fallback; reduced-motion preference must stay respected.
- No backend, auth, CMS, analytics, or form service is confirmed. Contact is `mailto:` only. Do not add a form backend without the user's decision.
- Project filters: All, Web Apps, Mobile Apps.
- Terminology: "Projects" (not "Work" or "Case studies"), "Resume" for the experience + education section, "Reviews" for testimonials.
- Freelance availability is displayed as "Available".
- Undecided: whether a dedicated per-project page or case-study depth is wanted; currently cards with description, contributions, stack, and an external link.

## Brand Commitments

- Name: Arham Awan. Tagline: "Web & Mobile App Developer". Rotating role list in `data/profile.ts`.
- Logo: flame "A" mark (`public/images/logo.png`), also used for `app/icon.png` and `app/apple-icon.png`.
- Voice: first-person, direct, confident but not boastful; About copy includes a personal middle-class, self-made background story that must be kept verbatim in spirit.
- Languages: English (full professional), Urdu (native).
- Visual world: "The Shipped Issue", a mid-century magazine identity program chosen by the user on 2026-10-23 (bright coated paper, black ink, one teal spot taken from the flame-A mark). Tokens and rules live in DESIGN.md. The previous mint-on-dark look is retired.

## Evidence on Hand

- Ten real projects with live links, named clients, roles, and contribution bullets: `data/projects.ts`; screenshots in `public/images/projects/*.webp`. One (Chef Circle) is noted as removed from the store by its owners.
- Eight client testimonials with names and titles: `data/testimonials.ts`.
- Five client logos: `public/images/clients/*.webp`.
- Experience at Code Shock LLC, Nodis.io, House Of Techies Ltd, and Fiverr (Top-Rated): `data/experience.ts`.
- Education from matriculation through a Master of Software Engineering (NED University): `data/education.ts`.
- Portrait: `public/images/arham-awan.webp`. CV: `public/cv/Arham_Awan.pdf`. OG image: `public/images/og.jpg`.
- Social profiles: LinkedIn, GitHub, Fiverr, Upwork, Freelancer, Facebook: `data/socialLinks.ts`.
- Absent, do not fabricate: metrics (revenue, users, download counts), awards, press, certifications, pricing, availability dates, and any project not on arham-awan.com.

## Product Principles

1. Prove breadth with evidence: every claim of web, mobile, or AI capability should point at a shipped project or role already in the data.
2. Recruiter-first flow: experience, stack, and a contact or CV action must be reachable within the first screens; the 3D treatment never delays that.
3. Nothing invented: content mirrors the reference site and the CV; new copy requires the user's confirmation.
4. Every section ends in a way out: contact, CV, a platform profile, or a live project.
5. Degrade gracefully: the site must read fully without WebGL, on mobile, and under reduced motion.

## Accessibility & Inclusion

No formal standard was specified. Existing commitments to preserve: `prefers-reduced-motion` respected across Motion and WebGL, custom cursor on fine-pointer devices only, keyboard-reachable navigation and form.
