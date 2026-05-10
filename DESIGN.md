---
name: Magewa
version: alpha
description: Warm craft meets clean modern — a design system rooted in Japanese cooperage and the bentwood ring metaphor.

colors:
  primary: "#2C2A28"
  secondary: "#8C7E6F"
  tertiary: "#C4944A"
  neutral: "#FAF7F2"
  surface: "#FFFFFF"
  ink: "#1A1816"
  muted: "#A89E93"
  border: "#E2DDD5"
  ring: "#C4944A"

typography:
  h1:
    fontFamily: "'Crimson Pro', Georgia, serif"
    fontSize: 3rem
    fontWeight: "600"
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "'Crimson Pro', Georgia, serif"
    fontSize: 2rem
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "'Crimson Pro', Georgia, serif"
    fontSize: 1.5rem
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: "400"
    lineHeight: "1.65"
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: "1.6"
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: "1.55"
  label-caps:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: "0.08em"
    fontFeature: "'calt' 0"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: "1.5"

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: 12px
    typography: "{typography.body-md}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
    border: "1px solid {colors.border}"
    typography: "{typography.body-md}"
  button-secondary-hover:
    backgroundColor: "{colors.border}"
  button-tertiary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: 12px
    typography: "{typography.body-md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.border}"
    padding: 10px
    typography: "{typography.body-md}"
  input-focus:
    border: "1px solid {colors.tertiary}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.border}"
    padding: "{spacing.lg}"
  card-hover:
    border: "1px solid {colors.tertiary}"
  badge:
    backgroundColor: "{colors.border}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: 4px
    typography: "{typography.label-caps}"
  nav-link:
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
  nav-link-active:
    textColor: "{colors.ink}"
  section-divider:
    border: "1px solid {colors.border}"
---

## Overview

Magewa's visual identity is rooted in the Japanese craft of bentwood cooperage — warm, precise, tactile. The UI should feel like a premium workshop tool: inviting to the hand, clear to the eye, never clinical. Think warm timber, hand-shaped rings, quiet confidence. Not cold SaaS. Not startup playful.

The palette centers on warm neutrals with a single amber accent (the "ring" color) that draws attention exactly where it's needed. Typography pairs a warm serif for headlines (authority, craft heritage) with a humanist sans for body text (readability, modern tooling). Together they create a tension between tradition and utility that matches the product's identity.

## Colors

The palette is built around three groups: a warm dark foundation, neutral surfaces, and a single craft accent.

- **Primary (#2C2A28):** Deep charcoal with warm undertone. Used for headlines, primary text, and filled buttons. Not pure black — retains warmth.
- **Secondary (#8C7E6F):** Warm stone. Used for secondary text, captions, metadata, navigation links. Recedes without disappearing.
- **Tertiary / Ring (#C4944A):** Honeyed amber — the bentwood accent. The sole driver for interaction highlights, active states, and key call-to-action elements. Used sparingly; its power comes from restraint.
- **Neutral (#FAF7F2):** Warm limestone. The dominant background. Softer than pure white — like raw canvas or unfinished timber.
- **Surface (#FFFFFF):** Clean white for elevated cards and input fields. Creates subtle depth when layered on the neutral background.
- **Ink (#1A1816):** Near-black for maximum-contrast text where primary isn't enough.
- **Muted (#A89E93):** Ash tone for disabled states and placeholder text.
- **Border (#E2DDD5):** Warm hairline for dividers, card outlines, and input borders.

## Typography

Two families create the typographic voice: a serif for presence, a sans for clarity.

- **Headlines (Crimson Pro):** A warm modern serif with high contrast. Used for h1–h3. Tight tracking and bold weight give headlines a sculptural, premium feel. Never use sans-serif for page titles — the serif is the brand's voice.
- **Body (Inter):** A humanist sans optimized for screen reading. Used for body text, labels, navigation, and UI chrome. Clean without being cold.
- **Labels (Inter, uppercase):** Small-caps tracking for section labels, tags, and metadata. Disables contextual alternates for a mechanical, categorical feel.
- **Mono (JetBrains Mono):** For code, technical IDs, version references, and token displays.

## Layout & Spacing

The spacing scale follows a warm 8px base grid. Larger jumps (2xl, 3xl) create breathing room between sections — the UI should never feel cramped. Generous whitespace is part of the identity.

- Content containers max out at 1200px, centered.
- Sidebar layouts use 280px for navigation.
- Section padding uses `2xl` (48px) vertically, `lg` (24px) horizontally minimum.
- Component internal spacing defaults to `md` (16px).

## Elevation & Depth

Magewa avoids heavy drop shadows. Elevation is expressed through subtle layering:

- **Level 0:** Neutral background — the page surface.
- **Level 1:** Surface cards with 1px border — barely raised.
- **Level 2:** Cards on hover or active modals with a faint warm shadow: `0 2px 8px rgba(44, 42, 40, 0.08)`.
- **Level 3:** Overlays and dropdowns with `0 4px 16px rgba(44, 42, 40, 0.12)`.

No colored shadows. No blur-heavy glassmorphism. Depth should feel like layers of material, not digital effects.

## Shapes

Rounded corners echo the bentwood ring motif — present but not bubbly:

- **sm (4px):** Inputs, small badges, inline elements.
- **md (8px):** Buttons, select dropdowns, text fields.
- **lg (12px):** Cards, panels, modals.
- **xl (16px):** Hero containers, feature cards.
- **full (9999px):** Pills, avatar containers, notification dots.

## Components

Components are quiet and functional. The ring accent (`tertiary`) appears only on interactive focus, hover states, and primary call-to-action. Most of the UI lives in the warm neutral palette.

- **Buttons:** Solid primary buttons use deep charcoal. The amber ring color is reserved for the single most important action per view. Secondary buttons are outlined. No ghost buttons.
- **Cards:** White surface on neutral background, with warm border. On hover, the border shifts to the ring color — a subtle "the ring binds this element" signal.
- **Inputs:** Clean white fields with warm borders. Focus state highlights with the ring accent.
- **Badges:** Low-contrast pills in the border color with secondary text. Status badges may use a dot of the ring color for "active" indicators.

## Do's and Don'ts

- **Do** use the serif for all page-level headings.
- **Do** keep the amber accent to one or two elements per view.
- **Do** use generous whitespace between sections.
- **Do** pair surface cards on neutral backgrounds for depth.
- **Don't** use pure black (`#000000`) anywhere — it breaks the warmth.
- **Don't** use the amber accent for large filled areas — it's a highlight, not a fill.
- **Don't** use geometric or monospaced fonts for headlines.
- **Don't** use heavy drop shadows, gradients, or glassmorphism.
- **Don't** use playful or bouncy animations. All motion should feel smooth and tactile — like shaping wood by hand.
