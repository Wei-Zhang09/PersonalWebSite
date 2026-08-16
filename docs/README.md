# Mr Z Portfolio Documentation

## Purpose
This static bilingual portfolio presents Mr Z as an independent Windows utility maker and highlights CleanMaster.

## Source of truth
- `requirements/site-brief.md` — audience, scope, content and acceptance criteria.
- `design/visual-direction.md` — original visual direction and reference constraints.

## Change rule
When a user-visible page, copy, project link, or visual system changes, update the relevant document with `index.html`.

## Local validation
- HTML: `npx --yes html-validate index.html`
- Open `index.html` in a browser and check Chinese/English switching, links, and mobile layout.

## Deployment
Deployment and DNS records are intentionally not configured yet. `awesoftware.dpdns.org` must point to the selected static host before launch.
