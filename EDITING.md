# ✏️ How to edit this website

You can do everything below **in the browser on github.com**: open a file → click the ✏️ pencil → edit → **Commit changes**.
The site rebuilds automatically in ~1–2 minutes (watch the **Actions** tab; green ✓ = live).

---

## 1. Change your info (name, headline, jobs, skills…)
Edit **`src/data/profile.ts`**. It is organised in blocks:

| What | Where in `profile.ts` |
|---|---|
| Name, role, headline, rotating words, summary | `profile` at the top |
| About paragraphs | `profile.about` |
| Email / phone / show-hide phone | `profile.email`, `profile.phone`, `profile.showPhone` |
| Stats strip (3+ years in AI…) | `profile.stats` |
| Journey timeline | `profile.journey` |
| Jobs | `experience` |
| Skills | `skills` |
| Education, certifications, publications | `education`, `certifications`, `publications` |

⚠️ Keep the quotes `'...'` and commas. If the text contains an apostrophe, use `’` (curly) or escape it `\'`.
If the build fails (red ✗ in Actions), open the failed run and read the error; it's almost always a missing quote or comma.

### 🔴 TODO for you
In `experience` → the Forvia **AI Team** entry → `points`: replace the two general bullets with **3–4 concrete bullets about your real AI work**.
Formula: *action verb + what you built + tech + measurable result*.
> e.g. "Built a Python pipeline that classifies infotainment test logs with scikit-learn, cutting manual triage time by 40%."

## 2. Add your photo
1. Upload a square photo to `public/images/` (e.g. `profile.jpg`, ~600×600): *Add file → Upload files*.
2. In `profile.ts` set `photo: 'images/profile.jpg'`.

## 3. Resume PDF download button
1. Upload your updated resume as `public/resume.pdf`.
2. In `profile.ts` set `showResumePdf: true`.
(It's off for now so the old PDF, which has a different title, doesn't contradict the site.)
The `/resume` page also has a **Print / Save as PDF** button that always matches the site.

## 4. Add a new project
Create a file `src/content/projects/my-project-name.md` (*Add file → Create new file*). The file name becomes the URL.

```markdown
---
title: "Driver Drowsiness Detection on Raspberry Pi"
summary: "One or two sentences recruiters will read: problem, approach, result."
category: ai            # ai | embedded | foundation
status: live            # live | building | archived
tags: ["Python", "PyTorch", "OpenCV"]
metrics: ["94% accuracy", "18 ms / frame"]
github: "https://github.com/swapnilalase25/your-repo"
demo: "https://your-demo-link"        # optional, delete the line if none
featured: true          # true = shown on the home page (top 3 by order)
order: 1                # smaller = shown first
draft: false            # true = hidden
spotlight: false        # true = the big highlighted card at the top of Projects (use for ONE project)
playground: false       # true = embed the live neural-network playground
roadmap:                # optional progress stepper; status = done | active | todo
  - { label: "Collect data", status: done }
  - { label: "Train model", status: active }
  - { label: "Deploy on device", status: todo }
---

## Problem
...

## Approach
...

## Results
...
```
Tip: to put an image in a project/post, upload it to `public/images/` and write `![Alt text](/CV/images/file.png)`.
(After moving to the custom domain, use `/images/file.png`.)

## 5. Write a blog post
Create `src/content/blog/my-post-title.md`:

```markdown
---
title: "What I learned deploying a model on a microcontroller"
description: "One-line teaser shown on cards and in link previews."
date: 2026-10-15
tags: ["edge-ai", "tinyml"]
draft: false
---

Your text in **Markdown**. Use `## Headings` (they build the table of contents).

```python
print("code blocks get syntax highlighting")
```
```
The newest 3 posts automatically appear on the home page and in the RSS feed.

## 6. The spotlight AI project
The big card with the live neural-network playground comes from `src/content/projects/ai-edge-lab.md`
(`spotlight: true`, `playground: true`). As you make progress, update its `roadmap` statuses
(`todo` → `active` → `done`); the progress bar updates automatically.
When your first real AI project is ready, set `spotlight: true` on that project and `false` (or `draft: true`) on this placeholder.

## 7. Change colours
Edit the tokens at the top of `src/styles/global.css` (`--amber`, `--cyan`, `--violet`, backgrounds).
