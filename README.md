# Bridgeway Landing Page

A responsive landing page for Bridgeway, a payments platform, built from the supplied Figma frames.

## Tech Stack

Vue 3 (Composition API, `<script setup>`), Tailwind CSS v4, and Vite.

## Getting Started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Project Structure

- `src/components/common` – reusable pieces: logo, button, social link.
- `src/components/features` – the feature card and its icon.
- `src/components/sections` – one component per page section; `App.vue` only composes them.
- `src/data` – content and artwork kept apart from markup: feature copy, partner logos, and `artwork.js`, which holds the original vector paths taken from the Figma frames.
- `src/assets` – the original logos, partner logos and photos.
- `src/styles/main.css` – Tailwind entry with the brand colours from the Figma brand board.

## Implementation Notes

The desktop hero and CTA are overlapping, free-form compositions: the bridge photo is clipped to a curved shape that crosses both the purple and lime panels, and the headline has to sit exactly on the edge between them. Each of these sections is laid out as a fixed-ratio artboard, with the original Figma vectors drawn in one SVG and the real HTML text placed on top using container-width (`cqw`) units. Text and shapes therefore scale together between 1024px and 1440px. Below 1024px the sections switch to the stacked layout from the mobile frames.

## Possible Improvements

- Confirm the font family from the Figma text styles and load the exact typeface.
- Add visual regression screenshots for the main breakpoints.

## Design Differences

- The text font is unverified: the Figma exports contain outlined text only. Inter is used because it matches the mobile frames. The desktop headings in Figma use a slightly wider typeface.
- The mobile header uses the original white wordmark. The mobile frame draws "Bridgeway" in the text font instead.
- The "Get Started" buttons in the header and CTA have no signup destination yet. They keep their design but do not act as links. The header button scrolls to the contact section.
- The social icons are not linked because no official profile URLs were provided.
