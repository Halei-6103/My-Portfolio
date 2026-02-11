# Ian’s Portfolio

🔗 **Live Site:**  
https://halei-6103.github.io/My-Portfolio/

---

A modern, monochrome single-page portfolio built with **React**, **TypeScript**, and **Vite**.  

The design centers around a full-bleed ASCII-style portrait background with a dark overlay, paired with clean typography for a minimal, high-contrast aesthetic.

---

## Overview

This portfolio highlights projects through an interactive, app-like interface rather than a traditional static layout.

### Typography
- **Space Grotesk** — headings and display text  
- **JetBrains Mono** — body text and UI elements  

The result is a technical, minimalist visual identity that reflects a developer-focused brand.

---

## Features

### Hero Section
- Name and tagline
- Smooth-scroll navigation to:
  - Projects
  - About
  - Contact
- Home icon (top-left) scrolls back to the top

---

### Projects Section
- Horizontally aligned project cards
- Each card supports:
  - Opening the project in a new tab
  - Desktop-sized popup view
  - Mobile-sized preview window
- Live iframe previews for:
  - Operation Smile
  - Gavin’s Portfolio
- Gradient placeholders for projects without preview images

---

### About Section
- Dedicated space for a short personal bio

---

### Contact Section
- Clean link cards for:
  - Email
  - LinkedIn
  - GitHub
- All links open externally in new tabs

---

## Tech Stack

### Frontend
- React
- TypeScript
- JavaScript
- CSS
- HTML

### Build Tool
- Vite

### Deployment
- GitHub Pages
- GitHub Actions (automatic build and deploy on push to `main`)

---

## Deployment Configuration

The project is configured for GitHub Pages with:

```ts
// vite.config.ts
export default defineConfig({
  base: '/My-Portfolio/',
})
