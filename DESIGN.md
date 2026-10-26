---
name: Arham Awan Portfolio
description: One issue of a magazine about one developer. Coated paper, smooth ink, one teal spot.
colors:
  paper: "#fbfaf6"
  paper-deep: "#f2efe8"
  ink: "#0d0d0d"
  ink-soft: "#3b3a37"
  ink-mute: "#6a6864"
  hair: "rgba(13, 13, 13, 0.16)"
  spot: "#0a7466"
  spot-deep: "#06564c"
  spot-tint: "#e2f0ec"
  on-spot: "#ffffff"
  on-spot-soft: "#e6f3ef"
typography:
  masthead:
    fontFamily: "Bodoni Moda, Bodoni MT, Didot, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.01em"
  display:
    fontFamily: "Bodoni Moda, Bodoni MT, Didot, Georgia, serif"
    fontSize: "clamp(3rem, 1.9rem + 4.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni MT, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Bodoni MT, Didot, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.5vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
  label-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  rail: "18.75rem"
  bar: "4.25rem"
  gutter: "clamp(1.25rem, 0.75rem + 2.5vw, 3.5rem)"
  dept: "clamp(4.5rem, 3.5rem + 4vw, 7.5rem)"
  column-gap: "2.5rem"
  row: "0.625rem"
components:
  button-spot:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.on-spot}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.5rem"
  button-spot-hover:
    backgroundColor: "{colors.spot-deep}"
    textColor: "{colors.on-spot}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.5rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.5rem"
  button-ink-hover:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.paper}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.spot}"
  plate:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "15% 6% 9% 24%"
  input-on-spot:
    backgroundColor: "transparent"
    textColor: "{colors.on-spot}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0"
  nav-item:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  nav-item-active:
    textColor: "{colors.spot}"
  filter-tab:
    textColor: "{colors.ink-mute}"
    typography: "{typography.label}"
    padding: "0 0 0.75rem"
  filter-tab-selected:
    textColor: "{colors.spot}"
---

# Design System: Arham Awan Portfolio

## Overview

**Creative North Star: "The Shipped Issue"**

The site is a single issue of a mid-century magazine about one developer. A masthead rail runs down the left, departments arrive in a fixed order under heavy rules, features run in two columns with drop initials, and the issue closes with a letters-and-colophon spread. Structure comes from rules, columns and type; nothing is boxed, lifted or glossed. The one colour is a teal ink taken from the flame-A mark, printed as a spot: buttons, the active department, drop initials, the shape behind every plate, and the full-bleed closing spread.

Imagery is commissioned-art only. Every screenshot is mounted as a plate: a black panel, one hard-edged teal shape, the product sitting over the shape's right-hand field. The flame-A mark is a found landmark, hidden small once per view and revealed last by the page turn. Density is editorial: long measures, hairline-ruled rows, tabular numerals in Archivo, generous department space. The rejected category defaults, confirmed by the build: no centred-name hero, no bento cards, no badge rows, no WebGL.

**Key Characteristics:**
- Coated paper ground, smooth near-black ink, one teal spot; no gradients, no second accent.
- Three faces with real jobs: Bodoni Moda (masthead, headlines, initials), Source Serif 4 (reading), Archivo tracked caps (labels, nav, buttons, tables, numerals).
- Rules carry hierarchy: 3px heavy above a department, 1px ink above a list, hairline between rows.
- Zero radius everywhere except the 6px nav bullet; zero box-shadow anywhere.
- One authored motion, the scroll-driven page turn, with the mark landing last.

## Colors

Three materials: paper, ink and a single spot teal, each with a quiet secondary tone, and one hairline.

### Primary
- **Issue Teal** (`spot`): The spot ink. Fills primary buttons, the Contact spread ground, the shape inside every plate, drop initials, the active nav item and its bullet, role lines in Resume and Projects, caret, selection, `accent-color` and the focus ring. Rare on paper; total on the closing spread.
- **Pressed Teal** (`spot-deep`): Hover state of the spot button only.
- **Teal Wash** (`spot-tint`): Defined in the token set; not yet placed on any shipped surface. Reserve for a tinted paper if one is ever needed; do not use it as a second accent.
- **Spot White** (`on-spot`): Text, labels, rules and form fields on the teal spread; button text on spot.
- **Spot White Soft** (`on-spot-soft`): Lede, placeholder text and hover tone for links on the teal spread.

### Neutral
- **Coated Paper** (`paper`): Page, rail, bar and footer ground; also the text colour of ink buttons and of outline buttons on hover.
- **Deep Paper** (`paper-deep`): Scrollbar track only in the shipped build.
- **Smooth Ink** (`ink`): Body headings, nav, folio, masthead, the rail border, every 1px and 3px structural rule, plate ground, ink buttons.
- **Soft Ink** (`ink-soft`): Running text in columns, standfirsts, summaries, table descriptions.
- **Mute Ink** (`ink-mute`): Captions, category and stack labels, table heads, dateline, colophon.
- **Hairline** (`hair`): The 1px rule between rows, column rules, and the underline under email links at rest.

### Named Rules
**The One Spot Rule.** The only chromatic ink is `spot`. It appears on paper as small marks (buttons, active nav, initials, roles) and once at full bleed on the Contact spread. No second hue, no tints as accents, no gradients.

**The Ink Hierarchy Rule.** Text tone drops by exactly one step per level: `ink` for the thing being read, `ink-soft` for the running copy around it, `ink-mute` for the metadata beneath it. Never skip from `ink` to `ink-mute` inside one block.

## Typography

**Display Font:** Bodoni Moda, variable with optical size axis (with Bodoni MT, Didot, Georgia, serif)
**Body Font:** Source Serif 4, variable with optical size axis (with Georgia, Times New Roman, serif)
**Label Font:** Archivo, variable with width axis (with Helvetica Neue, Arial, sans-serif)

**Character:** High-contrast Didone display over a sturdy transitional text serif, with a plain grotesque doing all the administrative work in tracked capitals. Optical sizing is on; Bodoni at 96px is hairline-thin, Source Serif at 17px is even and dark.

### Hierarchy
- **Masthead** (600, 2.5rem, 0.95): The name in the rail, set in uppercase on two lines. The only bold use of Bodoni.
- **Display** (400, clamp 3rem to 6rem, 0.96, -0.015em): The cover headline only ("Built end to end.").
- **Headline** (400, clamp 2.25rem to 3.75rem, 1, -0.01em): Department titles beside the heavy rule, the Contact headline, the lead project name.
- **Title** (400, clamp 1.5rem to 2.125rem, 1.1, -0.005em): Feature teasers, project names, service titles, sub-department heads (Experience, Education, Clients, skill categories).
- **Display small** (400, 1.25rem to 1.5rem, tight): Company and institution names, the cover caption, the Contact email line, the bar wordmark. Bodoni at text size, never bold.
- **Lede** (400, clamp 1.2rem to 1.4rem, 1.45): The cover standfirst and the department standfirst, in `ink-soft`, max 68ch.
- **Body** (400, 1.0625rem, 1.6): Running copy. Secondary copy (teasers, table cells, contribution rows, facts) drops to 0.9375rem. Columns use `columns-copy` (2 columns, 2.5rem gap, hairline column rule) from the md breakpoint.
- **Label** (500, 0.75rem, 0.16em, uppercase): Nav, folio, buttons, captions, roles, category lines, form labels, filter tabs, social links.
- **Label small** (500, 0.6875rem, 0.16em, uppercase): Stack lists, table heads, dateline, colophon, counts.
- **Table text** (Archivo 500, 0.875rem): Skill names and reviewer names, in `ink`, no tracking, no caps.

### Named Rules
**The Drop Initial Rule.** The first paragraph of a feature and the first two reviews open with a drop initial: Bodoni 400, `spot`, 4.6em, floated, line-height 0.78. One per block, never on a lede.

**The Tabular Rule.** Every number that sits in a column, dateline or count sets `tabular-nums lining-nums` in Archivo.

**The No Kicker Rule.** Departments open with a rule and a title. Labels sit beneath or beside the title (category, role, dateline), never above it as an eyebrow.

## Layout

The page is a rail plus a main column. From the `lg` breakpoint (1024px) a fixed rail 18.75rem wide, bordered right in 1px ink, holds the masthead, nav, Download CV, email, social links and the dateline; the main column is padded left by the rail width. Below `lg` the rail becomes a fixed 4.25rem bar (mark, wordmark, a bordered "Contents" toggle) and the main column is padded top by the bar height; the menu is a full-screen paper sheet with the nav in Bodoni 2.5rem.

The main column has one horizontal gutter, `clamp(1.25rem, 0.75rem + 2.5vw, 3.5rem)`, applied to every section and the footer. Departments are spaced by `clamp(4.5rem, 3.5rem + 4vw, 7.5rem)` of block padding; sections after the first use bottom padding only so the heavy rule of the next department follows at one consistent interval. Inside a department the content grid is 12 columns with a 3rem gap at `lg`, split 5/7, 4/8, 6/6 or 7/5 according to the feature; two-up lists (services, reviews) use `md:grid-cols-2` with a 3rem column gap. Department headers are 5 columns of title, 5 of standfirst, 2 of aside.

Vertical rhythm inside lists is set by rules, not space: a 1px ink rule opens a list, a hairline closes each row, with row padding of 0.625rem (facts), 0.75rem (table cells), 1rem to 1.5rem (education, experience, reviews) and 2.5rem to 3.5rem (project features). The reading measure is 68ch. Plates keep fixed aspect ratios (4/3 cover and teasers, 4/5 portrait, 2/1 lead feature, 16/10 project features).

## Elevation & Depth

Flat. No box-shadow exists anywhere in the build; no blur, no gloss, no rim light on plates. Depth is conveyed by ink on paper: the black plate panel sits on the page as printed art, the teal spread is a solid change of stock, and layering (rail over page, menu sheet over page, mark over plate) is pure z-order with a 1px ink border where two surfaces meet.

### Named Rules
**The Printed Flat Rule.** Nothing casts a shadow and nothing glows. If an element needs to separate from the page, give it a rule, a solid ground, or a border in `ink`, never a shadow.

## Shapes

Everything is square-cut. Buttons, plates, inputs, the bar toggle, the menu sheet and the Contact spread have 0 radius. The single rounded form is the 6px (`size-1.5`) teal bullet beside the active nav item (10px in the mobile menu); it is a typographic bullet, not a UI shape.

Lines are the form language. Three weights: heavy (3px ink, above a department), ink (1px ink, above a list, under the folio, beside the rail, around outline buttons) and hair (1px at 16% ink, between rows and between columns). Underlines are 1px, offset 0.18em, drawn as a bottom border on labels (`pb-0.5`) and as text-decoration in hairline on serif email links.

Plates carry the only curves: four hard-edged spot shapes in a 100x100 viewBox stretched to the panel, chosen per plate: disc (circle at 30,34 r 44), quadrant (a quarter circle from the top-left corner), wave (a top band with a curved lower edge) and slab (a diagonal bar). Project features cycle through them in that order.

## Components

### Buttons
Tracked Archivo capitals in a sharp rectangle; the found mark is the hover state.
- **Shape:** Square (0 radius), inline-flex, overflow hidden.
- **Spot (default):** `spot` fill, `on-spot` text; hover fills `spot-deep`. Download CV, Read the projects, the mobile menu CTA.
- **Outline:** 1px `ink` border, `ink` text, transparent ground; hover inverts to `ink` fill with `paper` text. The secondary action beside a spot button (Email Arham).
- **Ink:** `ink` fill, `paper` text; hover fills `spot`. On the teal spread the Contact submit overrides hover to `paper` fill with `ink` text.
- **Sizes:** sm 2.5rem high, 1rem side padding; md 3rem high, 1.5rem; lg 3.5rem high, 2rem, label raised to 0.8125rem.
- **Hover / Focus:** The 16px flame-A mark slides in from the left edge (translate from -220% to 0 with opacity 0 to 1) and the label shifts right 0.625rem; 300ms, `cubic-bezier(0.22, 1, 0.36, 1)`. Focus uses the global 2px `spot` outline at 3px offset. Colour transitions 300ms.
- **Disabled:** 50% opacity, pointer events off.

### Text Links
A label with an underline and an arrow; the program's read-on device.
- **Style:** Label typography in `ink`, the text carrying a 1px `ink` bottom border, followed by a 14px Lucide arrow (right for in-page, up-right for external) at 1.75 stroke.
- **Hover:** Text and rule turn `spot`; the arrow travels 4px right over 300ms. Social links use the same pattern with a hairline underline at rest and a 12px up-right arrow that nudges up and right.
- **On spot:** `on-spot` text, 50% `on-spot` rule; hover softens to `on-spot-soft` with a solid rule.

### Plates
The commissioned-art panel: black ground, one spot shape, the shipped product mounted over it.
- **Corner Style:** Square, overflow hidden, `isolate`.
- **Background:** `ink`, with one of the four shapes filled in `spot` behind.
- **Image inset:** The screenshot sits inside `inset: 15% 6% 9% 24%`, `object-contain` and top-aligned (the portrait plate switches to `object-cover`).
- **Shadow Strategy:** None; printed flat (see Elevation & Depth).
- **Mark:** Cover, lead feature and portrait plates carry the hidden 22px mark in the bottom-right corner (0.75rem to 1rem in), revealed last by the page turn.
- **Caption:** Below the plate, never inside: Bodoni 1.375rem title plus a `label` in `ink-mute`, with a text link on the right.

### Department Opener
- **Style:** A 3px `ink` rule across the column, 1.25rem of air, then the headline in 5 columns, an optional standfirst in `ink-soft` lede type in the next 5, and an optional aside (count or text link) right-aligned in the last 2. No kicker above the title.

### Ruled Lists and Tables
- **Style:** A 1px `ink` rule opens the list; each row closes with a hairline. Rows are grids with a fixed label column (7rem facts, 9.5rem experience dates, 6.5rem education dates, 11rem skill names) in `label` `ink-mute` and the content beside it.
- **Tables:** Skills tables have a `label-sm` `ink-mute` head row, Archivo 0.875rem row headers, serif 0.9375rem descriptions and a right-aligned tabular level column. No zebra, no cell borders beyond the hairline.
- **Reviews:** A hairline above each entry, the quote in body serif (first two with drop initials), name in Archivo 0.875rem, title in `label-sm`.
- **Client logos:** Five hairline-ruled cells, 6rem high, logos at 2.75rem max height, greyscale at rest and full colour on hover or focus.

### Inputs / Fields
Only shipped on the teal spread.
- **Style:** No box; transparent ground, 0 radius, a 1px bottom border at 60% `on-spot`, serif body text in `on-spot`, placeholder in `on-spot-soft`, 0.75rem vertical padding, no side padding. `label` above in `on-spot`.
- **Focus:** Bottom border turns solid `on-spot`; no outline.
- **Form frame:** A 1px `on-spot` rule across the top; fields in a 2-column grid with 1.5rem to 2rem gaps; submit is the ink button with a serif helper line beside it.

### Navigation
- **Rail (lg and up):** Fixed, 18.75rem wide, paper ground, 1px `ink` right border, padded 2rem x 2.25rem. Masthead name in uppercase Bodoni over two lines with the 28px mark beside it, then "Web. Mobile. AI." as a `spot` label. Nav list under a 1px ink rule: `label` items in `ink`, 0.625rem apart, each with a 6px teal bullet that scales in when active; active and hover turn `spot` (`aria-current="location"`). Bottom: full-width spot button, ink rule, serif email with hairline underline, social labels, `label-sm` dateline in `ink-mute`.
- **Bar (below lg):** Fixed, 4.25rem high, 1px `ink` bottom border; 24px mark plus Bodoni 1.375rem uppercase wordmark; a 2.5rem outlined "Contents" toggle that inverts on hover.
- **Menu sheet:** Full-screen paper panel under the bar, 250ms opacity fade (Motion), nav in Bodoni 2.5rem with 10px bullets, then the same CTA, email and social block. Escape closes; the document scroll locks while open.
- **Filter tabs:** `label` buttons on a 1px ink baseline, 1.5rem apart, selected in `spot` with a 2px `spot` underline (`aria-pressed`), others `ink-mute` turning `ink` on hover.

### Page Turn (signature motion)
The issue's one authored motion. Any block wrapped as a page turn reveals with `clip-path: inset(0 100% 0 0)` to `inset(0)` along a native scroll timeline (`animation-timeline: view()`, range entry 0% to entry 45%, shiftable later via `--turn-shift` in tenths), eased on `cubic-bezier(0.22, 1, 0.36, 1)`. Any `[data-mark]` inside fades and lifts 4px into place over entry 35% to 85%, so the hidden mark is the last thing to land. The animation is declared only inside `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`; everywhere else the page is simply open. Lenis smooth scroll (lerp 0.1) runs only on fine-pointer devices without reduced motion; anchor clicks scroll over 1.2s. The global reduced-motion rule collapses all transitions to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** open every department with the 3px ink rule and the title in headline Bodoni; put counts and links in the aside column, labels beneath titles.
- **Do** mount every screenshot or portrait as a plate: `ink` panel, one `spot` shape, image inside the 15/6/9/24% inset, caption below.
- **Do** hide the flame-A mark exactly once per section at 14px to 22px with `data-mark`, so the page turn lands it last.
- **Do** separate rows with hairlines and open lists with a 1px ink rule; let padding stay at the 0.625rem to 1.5rem row scale.
- **Do** set every button, link and metadata line in Archivo 0.75rem, 0.16em tracking, uppercase, 500 weight; numbers tabular.
- **Do** keep ground paper and text ink; drop to `ink-soft` for running copy and `ink-mute` for metadata.
- **Do** keep the page turn as the only authored motion and gate it on scroll-timeline support and no reduced-motion preference.

### Don't:
- **Don't** add a radius to any surface; the nav bullet is the only round form.
- **Don't** add box-shadow, blur, gloss or rim light; plates print flat.
- **Don't** introduce a second hue, a gradient, or `spot-tint` as an accent; the spot stays rare on paper and total on the Contact spread.
- **Don't** place a kicker or eyebrow label above a headline; the rule and the title are the opener.
- **Don't** box content in cards, bento tiles or badge rows; use rules and columns.
- **Don't** set Bodoni bold anywhere but the masthead name, and never below 1.25rem.
- **Don't** bring back WebGL, canvases or cursor effects; the world is print.
