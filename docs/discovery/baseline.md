# Baseline — 2026-08-14

## Current artifact
- Entry point: `index.html`
- Delivery model: standalone static HTML with embedded CSS and JavaScript.
- Content modes: Simplified Chinese and English; selection persists in localStorage under `mr-z-language`.

## Validation performed
- `npx --yes html-validate index.html` — passed (exit code 0).
- Python `HTMLParser` parse — passed.
- Local preview opened through the Hermes preview pane; rendered text includes all expected Chinese content, navigation anchors, CleanMaster link text, product concept, approach and contact sections.

## Visual verification limitation
The isolated browser automation runtime has no installed Chrome binary. A screenshot-based visual pass could not be performed in that runtime. Open `index.html` locally in a browser to review desktop and mobile rendering before publishing.

## Known content limitation
The CleanMaster visual is an original concept placeholder. Replace it with an approved product screenshot when available.
