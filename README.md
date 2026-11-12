# Software Frameworks and AI Agents — Seminar Site

Companion site for the seminar *Software Frameworks and AI Agents in Modern Development: From Choosing the Right Framework to Building with Claude Code*.

Includes the full slide deck viewer, schedule, study notes, Claude Code install steps, a searchable CLI cheat sheet, and downloadable resources.

## Run locally

```bash
npm install
npm run dev       # dev server
npm run build     # static build in dist/
npm run preview   # serve the build
```

## Edit content

- `src/content.js` — schedule, key ideas, install steps, CLI commands, downloads, links
- `src/slides.js` — slide titles and text (images live in `public/slides/`)
- `public/resources/` — downloadable files

## Deploy on Render

This repo includes a `render.yaml` Blueprint.

1. In the Render dashboard, choose **New + → Blueprint** and connect this repository.
2. Render reads `render.yaml` and creates a static site that runs `npm ci && npm run build` and publishes `dist/`.

Manual alternative: **New + → Static Site**, build command `npm ci && npm run build`, publish directory `dist`.
