# Mr Z Portfolio Documentation

## Purpose
This static bilingual portfolio presents Mr Z as an independent Windows utility maker and highlights CleanMaster.

## Source of truth
- `requirements/site-brief.md` — audience, scope, content and acceptance criteria.
- `design/visual-direction.md` — original visual direction and reference constraints.

## Change rule
When a user-visible page, copy, project link, or visual system changes, update the relevant document with the affected Astro component or `src/data/site.ts`.

## Local validation
- `npm run check` for Astro and TypeScript diagnostics.
- `npm run build` for a production static build.
- `npm run preview` to inspect the generated site locally.
- Check Chinese/English switching, project links, download button, email link, and mobile layout.

## Deployment
The repository uses [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) to build and publish the Astro `dist/` output. GitHub Pages must use **GitHub Actions** as its publishing source. `public/CNAME` preserves `awesoftware.dpdns.org`; keep the custom domain and HTTPS enforcement enabled after the next successful workflow run.
