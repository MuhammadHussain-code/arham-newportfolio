# Arham Awan portfolio — 3D reinterpretation design

Date: 2026-09-05. Reference: https://arham-awan.com/ (static "myour" template, jQuery).

## Goal

Rebuild the reference as a Next.js App Router site with a signature WebGL hero, keeping every piece of real content (bio, services, experience, education, skills, testimonials, ten projects, contact, socials) and the brand palette.

## Content decisions

- All copy comes from the reference site and lives in `data/*.ts`. Nothing invented.
- Years of experience and age are computed (`currentYear - 2019`, `currentYear - 1999`) exactly like the reference JS; the page revalidates daily so they stay current.
- Projects hidden on the reference (Aimm Panel, Gold app) and the commented-out pricing section are excluded.
- Section order: Hero, About, Services, Resume (Experience + Education), Skills, Projects, Reviews + Clients, Contact. Projects moved ahead of reviews for recruiter flow.
- Contact form composes a `mailto:` message; there is no backend on the reference either.

## Visual system

- Palette: `#14171c` background, `#1a1d23` surface, `#20242b` card, mint `#68e0cf` accent (from the reference and the flame "A" logo), `#b8bcc4` muted.
- Type: Poppins (body, from reference), Syne (display), Mr Dafoe (script subtitles, from reference). Fluid `clamp()` scale in `globals.css`.
- Motion: Motion (Framer) for reveals, Lenis for smooth scroll on fine-pointer devices, custom cursor on desktop only. `MotionConfig reducedMotion="user"`.

## 3D

- Hero "Signal Core": faceted dark icosahedron core with clearcoat, mint wireframe shell, three metallic torus rings, Fibonacci-sphere node constellation with nearest-neighbour links. Pointer parallax, scroll-linked rotation/drift, drei `Float`. Environment via drei `Lightformer` (no external HDR).
- Contact: additive point light field with pointer parallax.
- Gates: WebGL detection, IntersectionObserver, page visibility, reduced motion (`frameloop="demand"`), quality tier by viewport (`dpr [1,1.5]` desktop, `[1,1]` mobile, fewer nodes/points). Error boundary falls back to CSS glow + SVG rings.
- Canvases are dynamically imported (`ssr: false`) inside client wrappers so Three never enters the server bundle.

## Architecture

```
app/            layout (fonts, metadata, JSON-LD), page, sitemap, robots, icons
components/
  layout/       Navbar, Footer, Providers
  sections/     Hero, About, Services, Resume, Skills, Projects(+Grid), Testimonials, Contact
  three/        SceneGate, SceneLights, HeroScene/HeroCanvas/HeroObject, ContactScene/ContactCanvas/LightField
  ui/           Button, Chip, SectionHeading, SocialLinks, RotatingRole, Timeline, SkillBadge, ProjectCard, TiltCard, TestimonialCarousel, ContactForm, CustomCursor, MagneticButton
  motion/       Reveal/Stagger, TextReveal, SmoothScroll
data/           profile, services, experience, education, skills, projects, testimonials, socialLinks, navigation
lib/            site, utils, hooks
public/         optimized WebP images, CV
```

Server components by default; client islands only where interaction or WebGL requires it.
