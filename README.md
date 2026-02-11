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

## Deploy to GitHub Pages (Halei-6103/My-Portfolio)

Deployment is handled by **GitHub Actions**. When you push to `main`, the workflow builds the site and pushes it to the `gh-pages` branch.

1. **Turn on Pages** (one-time):
   - Go to **https://github.com/Halei-6103/My-Portfolio** → **Settings** → **Pages**.
   - **Source:** Deploy from a branch  
   - **Branch:** `gh-pages` → `/ (root)`  
   - Save.

2. **Deploy:** Push to `main`. The "Deploy to GitHub Pages" workflow will run and update the site at **https://halei-6103.github.io/My-Portfolio/**.

If you see `spawn ENAMETOOLONG` when running `npm run deploy` locally (common on Windows with long paths), use the Actions workflow instead—just push to `main` and the workflow deploys for you.
