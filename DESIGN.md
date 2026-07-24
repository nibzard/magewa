# MAGEWA Visual System

**Registry:** MAGEWA/DESIGN/001  
**Status:** Canonical  
**Direction:** Definitive Category Grid

## 1. Visual premise

MAGEWA combines institutional authority with computational energy.

The base layer is an industrial document system: warm paper, black ink, strict grids, oversized typography, registration marks, serial labels, and line-drawn technical geometry. Spectral color fields, layered transparency, grain, and dither bring contemporary depth without weakening the system.

The result should feel like:

- an operational blueprint;
- an aerospace or public-infrastructure standard;
- a classified technical registry opened to public view;
- a modern software system with physical weight.

It should not feel like a conventional SaaS gradient page, a heritage craft brand, or a generic AI network.

## 2. Design principles

### Indexed, not decorated

Every line, number, label, and frame should appear to identify or organize something. Ornament takes the form of useful structure.

### Heavy type, fine mechanics

Pair large, dense sans-serif typography with hairline grids, compact mono labels, dimension marks, and small operational metadata.

### Warm institution, electric system

Use warm paper and black ink as the authoritative base. Reserve spectral color for active fields, system energy, and moments of convergence.

### Geometry implies work

Shapes should route, converge, section, project, or resolve. Prefer wedges, planes, cones, vectors, and cutaway forms over passive blobs.

### Grain carries materiality

Dither and grain should prevent gradients from feeling synthetic. Texture is a surface treatment, not the subject.

## 3. Logo system

### Wordmark

The wordmark is **MAGEWA** in large, heavy, all-caps sans-serif letters.

Requirements:

- very high weight;
- compact spacing without collisions;
- simple, unmodified counters;
- no rounded “friendly tech” treatment;
- no decorative cuts, inline effects, or gradient fill;
- black on light fields or warm paper on dark fields.

The master wordmark should be supplied as vector artwork. Do not re-create it ad hoc with a substitute font in production lockups.

### Mark 12: Convergence Vector

The approved figurative element is formed by six angular wedges that converge at one controlled junction and resolve into a single execution vector.

#### Meaning

- **Six wedges:** multiple agents, inputs, or streams of context.
- **Convergence point:** shared governance and orchestration.
- **Execution vector:** one directed outcome or deliverable.

#### Construction logic

- Build the symbol from six related polygonal modules.
- Give each module a visible directional edge.
- Aim all modules toward one non-circular junction.
- Preserve enough separation to read the six inputs at small sizes.
- Let the combined silhouette imply forward motion.
- Use consistent angle families and line weights.
- Keep the center solid or intersecting; never cut an opening through it.

The symbol may be shown as a solid mark, a technical outline, or a sectional pseudo-3D construction drawing. All variants must preserve the same silhouette and directional logic.

#### Explicit exclusions

Do not introduce:

- circles, rings, loops, holes, or aperture-like centers;
- rosettes, flowers, stars, knots, or spirals;
- speech bubbles, sparkles, brains, or neural-network nodes;
- letter monograms forced into the geometry;
- glossy 3D effects that soften the edges;
- rotational symmetry that removes the execution direction.

### Clear space and minimum size

Let **X** equal the height of one wedge at the mark’s outer edge.

- Minimum clear space around the mark: **1X**.
- Minimum clear space between mark and wordmark: **0.75X**.
- Minimum digital size for the stand-alone mark: **20 px** high.
- Below 20 px, use a simplified solid silhouette only.

### Lockup behavior

- Prefer a horizontal mark-and-wordmark lockup for product headers.
- Use a stacked institutional lockup when the expanded name is present.
- Keep the expanded name smaller and left-aligned to the wordmark.
- Do not place the tagline inside the logo lockup.
- Do not use the mark as a repeating pattern at a scale that makes it resemble a flower.

## 4. Color system

### Foundation

| Token | Hex | Role |
|---|---:|---|
| Paper 00 | `#F2EFE7` | Primary background |
| Paper 10 | `#E5E0D5` | Secondary panels and rules |
| Ink 100 | `#11110F` | Primary type, borders, and logo |
| Ink 70 | `#4B4A45` | Supporting text |
| Steel 30 | `#C5C5BE` | Disabled states and fine structure |
| White | `#FFFDF8` | High-value highlights |

### Spectral field

| Token | Hex | Role |
|---|---:|---|
| Cobalt | `#2F5EFF` | Intelligence and system depth |
| Violet | `#7357FF` | Transition and orchestration |
| Signal Pink | `#F04FC5` | Active convergence |
| Signal Orange | `#FF5A35` | Execution and release |

### Canonical gradient

```css
background:
  radial-gradient(circle at 18% 24%, rgba(47, 94, 255, 0.94), transparent 43%),
  radial-gradient(circle at 74% 64%, rgba(240, 79, 197, 0.88), transparent 46%),
  linear-gradient(135deg, #7357ff 0%, #ff5a35 100%);
```

Keep spectral fields expansive and atmospheric. Do not put a rainbow gradient inside the logo or individual letters.

### Color ratios

For a typical editorial page:

- 55–70% warm paper;
- 20–35% black ink and dark fields;
- 10–20% spectral color.

Color can dominate a hero or transition panel, but the overall system should return to paper and ink.

## 5. Typography

Use three functional voices.

### Display and wordmark voice

A heavy grotesk with blunt geometry and excellent uppercase rhythm.

Recommended characteristics:

- 800–950 weight;
- tight tracking between `-0.04em` and `-0.07em`;
- large optical sizes;
- short line lengths;
- sentence case for major editorial statements, all caps for the wordmark.

Fallback stack:

```css
font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
```

### Reading voice

A neutral neo-grotesk for explanations, rules, and product content.

```css
font-family: Inter, "Helvetica Neue", Arial, sans-serif;
```

Use generous leading and avoid light weights on textured or gradient backgrounds.

### Nomenclature voice

A monospaced face for registries, IDs, timestamps, versions, coordinates, and interface metadata.

```css
font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
```

Typical treatment:

- 10–13 px on web;
- uppercase;
- tracking from `0.06em` to `0.14em`;
- short identifiers such as `MAGEWA/SYS/012`, `STATUS: RATIFIED`, or `VECTOR 06→01`.

## 6. Grid and composition

### Base grid

- Desktop: 12 columns with 24–32 px gutters.
- Tablet: 8 columns.
- Mobile: 4 columns.
- Primary spacing unit: 8 px.
- Fine blueprint subdivision: 4 px.

Use visible grid lines selectively. A grid can be printed into the background at low contrast or made structural through card borders and section rules.

### Frames

- Default border: 1 px solid Ink 100.
- Emphasis border: 2 px solid Ink 100.
- Corners: square or minimally rounded, 0–6 px maximum.
- Avoid floating cards with large soft shadows.
- Use hard offsets, thin inset rules, or colored underlays when depth is required.

### Editorial rhythm

Alternate between:

1. dense indexed information;
2. large typographic declarations;
3. technical geometric fields;
4. quiet paper space.

This contrast keeps the industrial system from becoming visually exhausting.

## 7. Technical geometry

The visual library can include:

- sectional cones and tapered volumes;
- angular wedges and converging planes;
- projected grids and wireframes;
- cutaway prisms;
- axis arrows and measurement lines;
- exploded assemblies;
- coordinate plots and calibration ticks;
- pseudo-3D forms built from flat line work.

Technical drawings should use the same angle families as Mark 12 without turning every diagram into the logo.

Avoid using a torus, ring, circular aperture, or centered opening as a recurring identity device. If a circular measurement is functionally necessary in a diagram, keep it clearly subordinate and never present it as a brand mark.

## 8. Texture, grain, and dither

Texture should be perceptible but never obscure text.

### Grain

- Use monochrome noise at 3–7% opacity.
- Prefer fine grain on warm paper and slightly coarser grain on spectral fields.
- Set overlays to `pointer-events: none`.
- Keep grain assets tileable and lightweight.

### Dither

- Use dither to transition between spectral fields and paper.
- Keep dot scale consistent within one composition.
- Avoid retro pixel-art styling; the reference is industrial print and signal processing.
- Do not apply dither to small body text or the master logo.

### Layering

Use multiply, screen, and transparent overlays to reveal construction:

- black wireframes over spectral fields;
- cobalt or violet planes under paper cards;
- translucent index labels crossing frame boundaries;
- offset color layers behind technical objects.

## 9. Labels and nomenclature

Industrial labels give the system its institutional tone.

Use:

- slash-separated registry codes;
- sequential numbers;
- revision marks;
- dates in unambiguous ISO form;
- status labels;
- arrows and vector notation;
- concise technical captions.

Examples:

```text
MAGEWA/IDENTITY/012
REV 01.4
STATUS: CANONICAL
VECTOR 06→01
2026-07-23
WORK AUTOMATION / GLOBAL ENTERPRISE
```

Labels should support hierarchy, not simulate military authority gratuitously. Avoid fake warnings, ranks, weapons language, or claims of government certification.

## 10. Imagery and illustration

Prefer:

- vector line drawings;
- diagrammatic process views;
- macro crops of materials and engineered surfaces;
- artifact previews shown as evidence of work;
- monochrome photography with spectral overlays.

Avoid:

- humanoid robots;
- glowing brains;
- stock photos of people pointing at dashboards;
- floating glass orbs;
- generic network constellations;
- excessive chrome, glassmorphism, or neon-on-black cyberpunk imagery.

## 11. Motion

Motion should demonstrate coordination:

- wedges align into a shared vector;
- grid lines register into place;
- labels count, index, or ratify;
- wireframes resolve into solid deliverables;
- spectral fields move slowly beneath fixed technical structure.

Use short, deliberate transitions. Respect `prefers-reduced-motion` and ensure the page remains complete when animation is disabled.

## 12. Accessibility and production rules

- Meet WCAG AA contrast for all reading text.
- Place body text on stable fields, not across high-frequency gradients.
- Keep focus states visible in Ink, Cobalt, or White.
- Never encode status with spectral color alone.
- Keep texture overlays below text in the stacking order.
- Provide text alternatives for diagrams that carry meaning.
- Keep the logo monochrome when color contrast is uncertain.
- Supply SVG for line art and marks; reserve raster assets for grain or photography.
- Test the six-wedge mark at favicon, navigation, presentation, and large-format scales.

## 13. Interface components

### Buttons

- Primary: Ink 100 background, Paper 00 text, square or 2 px radius.
- Active/special: spectral field with an Ink 100 border.
- Secondary: transparent, 1 px Ink 100 border.
- Labels should be direct verbs: **View pipeline**, **Open artifact**, **Copy name**.

### Cards

- Use cards as registry entries, rule modules, or artifact records.
- Include one clear index, title, status, and supporting statement.
- Prefer border and color-plane hierarchy over drop shadow.

### Data and status

- Use mono labels and aligned columns.
- Keep state language literal: Draft, In review, Approved, Released, Superseded.
- Use Cobalt for active, Orange for required action, and Ink for approved or stable.

## 14. Anti-pattern checklist

Reject a design if it:

- makes the logo circular, hollow, or aperture-like;
- restores the retired bentwood or ring story;
- hides MAGEWA behind an abstract symbol;
- uses color without the paper-and-ink framework;
- imitates a military document without functional hierarchy;
- turns every component into a rounded floating card;
- uses generic AI imagery or inflated copy;
- lets texture interfere with legibility;
- treats the full expanded name as optional or rewrites its wording;
- makes the system look suited only to small teams rather than global enterprise work.

The visual system is successful when it feels authoritative before it feels decorative, alive before it feels sterile, and directed toward work rather than fascinated by technology alone.
