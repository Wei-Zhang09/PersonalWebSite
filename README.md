# Mr Z Portfolio

A bilingual Astro portfolio for **Mr Z**, focused on CleanMaster and approachable Windows utilities.

## Local Development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run check
npm run build
npm run preview
```

`npm run build` writes a fully static site to `dist/`. The production build includes `CNAME` and the CleanMaster screenshot from `public/`.

## Content Maintenance

The main portfolio content is structured in [`src/data/site.ts`](src/data/site.ts):

- CleanMaster version, download URL, source URL, screenshot, capabilities, and origin story.
- Mr Z profile, contact email, GitHub URL, technology stack, and hero text.

Page sections live under `src/components/`; site-wide styling is in `src/styles/global.css`.

## Project Documentation

Start at [`docs/README.md`](docs/README.md):

- Requirements: `docs/requirements/site-brief.md`
- Visual direction: `docs/design/visual-direction.md`
- Architecture decisions: `docs/architecture/adr/`
- Validation baseline: `docs/discovery/baseline.md`

## Assets

Place approved CleanMaster screenshots in:

```text
public/assets/cleanmaster/screenshots/
```

The current approved CleanMaster screenshot is exposed by the data module, while the v2.3.0 Gitee installer is the primary download action.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). GitHub Actions builds the Astro site and deploys the `dist/` artifact to GitHub Pages.

The custom domain is preserved by `public/CNAME`:

```text
awesoftware.dpdns.org
```

GitHub Pages must be set to **GitHub Actions** as its publishing source. After the first workflow deployment, keep the custom domain and HTTPS enforcement enabled in repository settings.
