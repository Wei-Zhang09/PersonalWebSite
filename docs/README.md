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
The repository includes `CNAME` for `awesoftware.dpdns.org` and is prepared for GitHub Pages. GitHub Pages itself and the corresponding DNS records have not yet been configured or verified. Before launch, enable Pages in GitHub, apply the DNS records GitHub provides in the DigitalPlat Domain dashboard, then wait for domain and HTTPS validation.
