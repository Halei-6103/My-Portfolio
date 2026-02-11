# Ian Portfolio

Monochrome portfolio built with Vite + React, for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `Ian-Portfolio`).
2. If the site will be at `https://<username>.github.io/<repo-name>/`, set the base in `vite.config.ts`:
   ```ts
   base: '/Ian-Portfolio/',  // use your repo name
   ```
3. Install and deploy:
   ```bash
   npm install
   npm run deploy
   ```
4. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **gh-pages** → Save.

Your site will be at `https://<username>.github.io/<repo-name>/`.
