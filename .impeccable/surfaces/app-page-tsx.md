---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx"]
---

# Surface brief: home page (app/page.tsx)

Scope: the whole single-page site, every section. Visitor mode: Experience (a portfolio; the shipped work leads, the interface recedes).

Audience and job: a recruiter or hiring manager skimming on desktop, arriving from a CV or LinkedIn, deciding in about a minute whether to book a call. Secondary: freelance clients from Fiverr/Upwork.
Action: email, CV download, click-through to LinkedIn/Fiverr/Upwork, open a live project.
Proof: ten shipped projects with live links and screenshots, eight named testimonials, five client logos, experience at four companies, degrees through a Master of Software Engineering. Nothing else may be claimed.
Constraints: section set and order fixed (Hero, About, Services, Resume, Skills, Projects, Reviews + Clients, Contact); content from data/*.ts; mailto contact; CV download; social links; reduced-motion fallbacks; WebGL dropped by direction (the world is print, not screen).

Chosen direction: "The Shipped Issue", the mid-century magazine identity program (challenger brand-identity-canon-art-paul-magazine-program), chosen by the user on the decision page over the assigned Ajrak Cloth direction. Memorable moment: the portfolio reads as one issue of a magazine, and the flame-A mark is hidden once in every view.

## Direction contract

THESIS: The portfolio is a single issue of a magazine about one developer: masthead, departments in fixed order, features, letters, colophon. It refuses the category's centred-name hero, bento cards and badge rows; structure comes from rules, columns and initials.

OWN-WORLD: Bright coated paper (#fbfaf6), smooth ink (#0d0d0d), one issue spot: teal ink (#0a7466), the colour of the flame-A mark. Bodoni Moda for the masthead, headlines and drop initials; Source Serif 4 for body in two columns; Archivo, tracked uppercase, for labels, nav, buttons, tables and tabular numerals. Heavy 3px rules above features, hairline rules between rows, sharp-cornered buttons (spot fill, outlined secondary), ruled tables, drop initials in spot. Plates: screenshots framed in black panels with one spot shape behind. The flame-A mark appears once per view, small, as a found landmark. With all content removed, the page is a magazine spread: a rail, rules, two columns, one spot.

STORY: The visitor sees a masthead with the name, a cover story that is a real shipped product, and a dateline that says Karachi and the current year. They understand this developer ships complete products across web, mobile and AI, read the proof department by department, and leave by the rail: Download CV, email, or a platform profile.

FIRST VIEWPORT (1440x900): Left rail, 300px, sticky: "ARHAM AWAN" in Bodoni 40px, "Web. Mobile. AI." in spot label, nav (Cover, Profile, Services, Resume, Skills, Projects, Letters, Contact) with the active item in spot, Download CV as the spot button, email and LinkedIn as links. Main column from x=300: a folio line across the top (No. 10, The Shipped Issue, Karachi, year). Two-column feature: left, the headline "Built end to end." in Bodoni 96px, a 22px serif lede, "Read the projects" spot button and "Email Arham" outlined; right, the cover plate: a black panel with a spot shape and the EasyGPT screenshot framed, captioned "Cover story: EasyGPT". Under a 3px rule at the fold: two feature teasers with small plates (Andymation, Nodis). The mark hides in the cover plate's corner.

FORM: mid-century magazine identity program; a dealt catalog challenger, chosen over the assigned direction (index 5 of my list, Ajrak Cloth) and over my top-ranked pick (Three Lines transit diagram). seed:272c19386f1c62b6

SIGNATURE INTERACTION AND MOTION: one authored moment, the page turn: each section's content wipes in from the gutter with a clip-path reveal and the hidden mark appears last; the active nav item carries the spot; hover on a spot button slides the mark in at its left edge (the program's active state); read links drop their rule weight. Reduced motion: no wipes, marks visible, states still change colour.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Unresolved: whether project case-study depth beyond the card is wanted (not in scope); no form backend (mailto stays).
