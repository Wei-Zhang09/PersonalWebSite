# Baseline — 2026-08-15

## Current artifact
- Entry point: `index.html`
- Delivery model: standalone static HTML with embedded CSS and JavaScript.
- Content modes: Simplified Chinese and English; selection persists in localStorage under `mr-z-language`.
- Product image: approved CleanMaster disk-cleanup screenshot at `assets/cleanmaster/screenshots/52fd3fae-a51d-4366-a992-a8b94462df69.png`; displayed with `contain` so the complete desktop interface remains visible.

## Validation performed
- `npx --yes html-validate index.html` — passed (exit code 0).
- Python `HTMLParser` parse — passed.
- Local preview opened through the Hermes preview pane; rendered text includes expected Chinese content, navigation anchors, CleanMaster link text, product screenshot region, approach, and contact sections.

## Visual verification limitation
The isolated browser automation runtime has no installed Chrome binary. A screenshot-based visual pass could not be performed in that runtime. Open `index.html` locally in a browser to review desktop and mobile rendering before publishing.

## Deployment status
`CNAME` contains `awesoftware.dpdns.org`. GitHub Pages, corresponding DNS records, and HTTPS validation are still pending platform-side configuration.
