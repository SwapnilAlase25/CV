# Swapnil Alase: Personal Website & CV

My personal site: **Senior AI Engineer**, building intelligent systems from silicon to models.
Built with [Astro](https://astro.build) + Tailwind CSS and hosted free on **GitHub Pages**.

🌐 Live: https://swapnilalase.tech

> ✏️ **Want to change something?** Read **[EDITING.md](EDITING.md)**. Almost everything is plain text or Markdown and can be edited in the GitHub website.

---

## Features
- Dark "circuit → neural" design with an animated hero (embedded traces flowing into a neural network)
- Sections: About & journey, experience, projects, skills, education, blog, contact
- `/projects` and `/blog`: each item is one Markdown file
- `/resume`: a print-friendly CV page ("Print / Save as PDF")
- SEO: meta tags, social preview image, sitemap and JSON-LD `Person` schema
- Fast static HTML, mobile-first, respects `prefers-reduced-motion`

## Project structure
```
src/data/profile.ts        ← name, headline, experience, skills, education (edit me!)
src/content/projects/*.md  ← one file per project
src/content/blog/*.md      ← one file per blog post
public/                    ← images, favicon, og.png, resume.pdf, CNAME
src/components/            ← UI sections (Hero, Experience, Skills, …)
src/pages/                 ← routes (/, /projects, /blog, /resume)
astro.config.mjs           ← site URL + base path
.github/workflows/deploy.yml ← auto-deploy to GitHub Pages
```

## Run locally (optional)
```bash
npm install
npm run dev       # http://localhost:4321/
npm run build     # production build into dist/
```

## One-time GitHub Pages setup
1. Make the repository **public**: *Settings → General → Danger Zone → Change visibility*.
2. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
3. Make sure the code is on the `main` branch. Every push to `main` deploys automatically (see the *Actions* tab).

## Custom domain (`swapnilalase.tech`)
The site is served from `swapnilalase.tech`:
- `public/CNAME` contains `swapnilalase.tech`.
- `astro.config.mjs` has `site: 'https://swapnilalase.tech'` (no `base`).
- DNS at the registrar: `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` → `swapnilalase25.github.io`.
- *Settings → Pages → Custom domain* → `swapnilalase.tech`, with **Enforce HTTPS** ticked.
