# Bridgeway Landing Page

A responsive landing page for Bridgeway, built using the provided Figma designs.

## Tech Stack

- Vue 3 (Composition API)
- Tailwind CSS v4
- Vite

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

- `src/components/common` – shared components such as buttons, logos, and social icons.
- `src/components/features` – reusable feature cards and icons.
- `src/components/sections` – individual landing page sections.
- `src/data` – feature content, partner data, and SVG artwork definitions.
- `src/assets` – images, logos, and other design assets.
- `src/styles/main.css` – Tailwind styles and brand colors.

`App.vue` brings the sections together.

## Implementation Notes

The main challenge was implementing the overlapping shapes and text in the desktop hero and CTA sections while keeping them responsive.

I used the original Figma SVG paths for the artwork and positioned the HTML content using container-relative units (`cqw`). This keeps the elements aligned as the container scales.

For smaller screens, the layout switches to the mobile structure.

## Possible Improvements

- Use the exact font family once it is confirmed from Figma.
- Add visual regression tests for different screen sizes.

## Design Differences

- Inter is used because the exported Figma text is outlined, making the original font difficult to identify.
- The mobile header uses the original Bridgeway SVG logo instead of text.
- The header "Get Started" button scrolls to the CTA section.
- The lower "Get Started" button has no destination because a signup URL was not provided.
- Social icons are displayed without links because official profile URLs were not provided.
