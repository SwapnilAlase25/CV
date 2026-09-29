# Swapnil Alase: Personal Website & CV

My personal site: **Senior AI Engineer**, building intelligent systems from silicon to models.
Built with [Astro](https://astro.build) + Tailwind CSS and hosted free on **GitHub Pages**.

🌐 Live: https://swapnilalase25.github.io/CV/ (later: https://swapnilalase.cv)

> ✏️ **Want to change something?** Read **[EDITING.md](EDITING.md)**. Almost everything is plain text or Markdown and can be edited in the GitHub website.

---

## Features
- Dark "circuit → neural" design with an animated hero (embedded traces flowing into a neural network), plus a light-mode toggle
- Sections: About & journey, experience, projects, skills, education, blog, contact
- `/projects` and `/blog`: each item is one Markdown file
- `/resume`: a print-friendly CV page ("Print / Save as PDF")
- SEO: meta tags, social preview image, sitemap, RSS feed and JSON-LD `Person` schema
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
npm run dev       # http://localhost:4321/CV/
npm run build     # production build into dist/
```

## One-time GitHub Pages setup
1. Make the repository **public**: *Settings → General → Danger Zone → Change visibility*.
2. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
3. Make sure the code is on the `main` branch. Every push to `main` deploys automatically (see the *Actions* tab).

## Custom domain (`swapnilalase.cv`)
Yes, this works with GitHub Pages:
1. Buy the domain from a registrar that sells `.cv` (check the renewal price, not just the first-year price).
2. At the registrar's DNS settings add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (optional IPv6) `AAAA` for `@` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www` → `swapnilalase25.github.io`
3. Create a file `public/CNAME` containing just `swapnilalase.cv`.
4. In `astro.config.mjs`, set `site: 'https://swapnilalase.cv'` and `base: '/'`.
5. *Settings → Pages → Custom domain* → `swapnilalase.cv` → wait for the DNS check → tick **Enforce HTTPS**.
6. Recommended: verify the domain under your GitHub account's *Settings → Pages* to prevent takeovers.

With a custom domain you **don't** need to rename the repo. If you ever want `https://swapnilalase25.github.io/` without `/CV`, the repo must be named exactly `swapnilalase25.github.io` (it must match your username), and `base` becomes `'/'`.
