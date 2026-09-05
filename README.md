# Arham Awan — Portfolio

Immersive 3D reinterpretation of [arham-awan.com](https://arham-awan.com/), built with Next.js App Router, TypeScript, Tailwind CSS v4, React Three Fiber, Motion and Lenis.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

## Where things live

- `data/` — all site content (profile, services, experience, education, skills, projects, testimonials, social links). Edit these to update copy.
- `components/sections/` — one component per page section.
- `components/three/` — WebGL scenes. Both scenes are dynamically imported, gated by WebGL support, viewport visibility and reduced-motion preference, and fall back to CSS when WebGL fails.
- `public/images/` — optimized WebP assets; `public/cv/` — downloadable CV.
- `lib/site.ts` — site URL, email, and the years used to compute experience/age.

Design notes: `docs/superpowers/specs/2026-09-05-3d-portfolio-design.md`.
