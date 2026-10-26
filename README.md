# Arham Awan — Portfolio

[arham-awan.com](https://arham-awan.com/) rebuilt as a single issue of a magazine: masthead rail, departments in fixed order, features, letters and a colophon. Next.js App Router, TypeScript, Tailwind CSS v4, Motion and Lenis.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

## Where things live

- `data/` — all site content (profile, services, experience, education, skills, projects, testimonials, social links, navigation). Edit these to update copy.
- `components/sections/` — one component per department, in page order: Hero (cover), About, Services, Resume, Skills, Projects, Testimonials (reviews + clients), Contact.
- `components/layout/` — `Masthead` (the sticky rail on wide screens, the bar and contents menu on narrow ones), `Footer`, `Providers`.
- `components/ui/` — the issue's component language: `Button`, `TextLink`, `Plate` (black panel, one spot shape, the product screenshot as the artwork), `Department` (heavy rule + title + standfirst), `Mark` (the hidden flame-A), `ProjectCard`, `ContactForm`, `SocialLinks`.
- `components/motion/PageTurn.tsx` — the one authored motion: a scroll-driven clip-path wipe (CSS `animation-timeline: view()`), static where unsupported or under reduced motion.
- `app/globals.css` — tokens (paper, ink, spot), type voices and rules.
- `public/images/` — optimized WebP assets; `public/cv/` — downloadable CV.
- `lib/site.ts` — site URL, email, and the years used to compute experience/age.

Design system: `DESIGN.md`. Product truth: `PRODUCT.md`. The 2026-09 3D concept this replaced is kept for history in `docs/superpowers/specs/`.
