# Baseline — 2026-08-16

## Current artifact
- Source entry: `src/pages/index.astro`.
- Delivery model: Astro static output with TypeScript data modules and reusable Astro components.
- Content modes: Simplified Chinese and English; selection persists in localStorage under `mr-z-language`.
- Product image: approved CleanMaster disk-cleanup screenshot at `public/assets/cleanmaster/screenshots/52fd3fae-a51d-4366-a992-a8b94462df69.png`; emitted with `contain` so the complete desktop interface remains visible.
- Product expansion: CleanMaster v2.3.0 direct installer link, four source-verified capabilities, product origin narrative, public technical stack, and contact email are present.

## Validation performed
- `npm run check` — Astro/TypeScript diagnostics passed with 0 errors, 0 warnings, and 0 hints.
- `npm run build` — static production build passed and emitted `dist/index.html`.
- `GITHUB_ACTIONS=true npm run build` — repository Pages build passed with relative asset paths.
- Build artifact check — `dist/CNAME` and the CleanMaster screenshot exist.
- HTTP smoke check — Astro dev output includes the download URL, contact email, and screenshot path.

## Visual verification limitation
The isolated browser automation runtime has no installed Chrome binary. A screenshot-based visual pass could not be performed in that runtime. Run `npm run dev` or `npm run preview` locally to review desktop and mobile rendering before publishing.

## Deployment status
The deployment workflow is `.github/workflows/deploy-pages.yml`. GitHub Pages must use **GitHub Actions** as its publishing source. `public/CNAME` contains `awesoftware.dpdns.org`; keep the custom domain and HTTPS enforcement enabled after the workflow deploys successfully.
