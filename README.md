# My Portfolio

**Live site:** [halei-6103.github.io/My-Portfolio](https://halei-6103.github.io/My-Portfolio/)

---

A monochrome, single-page portfolio built with **Vite**, **React**, and **TypeScript**. The layout is built around a full-bleed background image (ASCII-style portrait) with a dark overlay; typography uses **Space Grotesk** for headings and **JetBrains Mono** for body and UI.

**What’s in it:**

- **Hero** — Name and tagline with nav that smooth-scrolls to Projects, About, and Contact. A home icon in the top-left scrolls back to the top.
- **Projects** — Clickable cards in a row; each can open the project in a new tab, in a desktop-sized popup, or in a mobile-sized window (e.g. Operation Smile). Cards for Operation Smile and Gavin’s Portfolio use live iframe previews; the rest use gradient placeholders until you add images or preview URLs.
- **About** — Section reserved for a short bio.
- **Contact** — Intro line plus link boxes for Email, LinkedIn, and GitHub (each opens mail or profile in a new tab).

**Tech and deployment:**

- **Languages:** TypeScript, JavaScript, CSS, HTML.
- **Vite** for dev and production builds, with `base: '/My-Portfolio/'` for GitHub Pages.
- **GitHub Actions** builds on push to `main` and deploys the built output to the `gh-pages` branch; the live site is served from that branch.

To run it locally: `npm install` then `npm run dev`.
