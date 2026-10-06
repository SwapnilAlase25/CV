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
| Email | `profile.email` |
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

## 3. Your CV (PDF)
The CV shown on the **Resume** page and downloaded by the **Download CV** button is the file
`public/Swapnil_Alase_CV.pdf`.
To update it: on GitHub open `public/` → *Add file → Upload files*, and upload your new CV with **exactly the same
file name** (`Swapnil_Alase_CV.pdf`) to replace it. The page and button update automatically.
(Anything inside the PDF, such as phone number, job title and dates, is public once it is uploaded.)

## 3b. Your photo
The photo in the hero (and the small portrait in the About section) is `src/assets/profile.webp`.
- **Change it:** upload a new photo with **exactly the same file name** (`profile.webp`) into `src/assets/`
  (*Add file → Upload files*). Best results: a **cut-out with a transparent background** (WebP or PNG), about 1300 px wide,
  with the person's torso running off the bottom edge (the hero fades it out at the bottom).
  If you upload a PNG, name it `profile.webp` anyway, or ask me to switch the file type.
- **Hide it:** set `showPhoto: false` in `src/data/profile.ts` (the monogram avatar is shown instead).
- **Link previews:** the image shown when the link is shared on LinkedIn/WhatsApp is `public/og.png`. It is a screenshot of
  the hero, so it does not update automatically: ask me to regenerate it after you change the photo.
- The little `swapnil 0.99` detection box on the face is in `src/components/Hero.astro` (class `det-box`); delete that line to remove it.

## 4. Add a new project
Create a file `src/content/projects/my-project-name.md` (*Add file → Create new file*). The file name becomes the URL.

```markdown
---
title: "Customer Support Chatbot with RAG"
summary: "One or two sentences recruiters will read: problem, approach, result."
category: ai            # ai | embedded | foundation
status: live            # live | building | archived
tags: ["Python", "LLMs", "RAG"]
metrics: ["your key number", "another result"]
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
Tip: to put an image in a project/post, upload it to `public/images/` and write `![Alt text](/images/file.png)`.

## 5. Write a blog post
Create `src/content/blog/my-post-title.md`:

```markdown
---
title: "What I learned deploying a model on a microcontroller"
description: "One-line teaser shown on cards and in link previews."
date: 2026-10-15
tags: ["genai", "llm"]
draft: false
---

Your text in **Markdown**. Use `## Headings` (they build the table of contents).

```python
print("code blocks get syntax highlighting")
```
```
The newest 3 posts automatically appear on the home page.

## 6. Optional: spotlight card with the live neural-network playground
The site still contains an optional big "spotlight" project card with an interactive neural-network playground, but it
is **not used right now**. To bring it back, add `spotlight: true`, `playground: true` and a `roadmap:` list to a
project's front matter (see the field list above). Your current AI project is `src/content/projects/rag-chatbot.md`.

## 7. Change colours
Edit the tokens at the top of `src/styles/global.css` (`--amber`, `--cyan`, `--violet`, backgrounds).
