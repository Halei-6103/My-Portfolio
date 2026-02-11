# My Portfolio

Monochrome portfolio built with Vite + React, deployed on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages (repo: My-Portfolio)

1. Create a repo on GitHub named **My-Portfolio** and add it as `origin`:
   ```bash
   git remote add origin https://github.com/<username>/My-Portfolio.git
   ```

2. Build and push the site to the `gh-pages` branch:
   ```bash
   npm install
   npm run deploy
   ```

3. In the repo on GitHub: **Settings → Pages**  
   - Source: **Deploy from a branch**  
   - Branch: **gh-pages** (and `/ (root)`)  
   - Save.

Your site will be at **https://\<username>.github.io/My-Portfolio/**.
