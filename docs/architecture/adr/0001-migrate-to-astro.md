# ADR-0001: Migrate The Portfolio To Astro

## Status
Accepted

## Context
The original portfolio is a single `index.html` containing page structure, CSS, bilingual copy, project metadata, download URLs, and client behavior. It is viable for a first release but becomes error-prone as projects, releases, screenshots, metadata, and pages grow.

The site is hosted as a static GitHub Pages site behind `awesoftware.dpdns.org`. It does not require a server, database, authentication, or a runtime API.

## Decision
Migrate to Astro with TypeScript and static output.

- Use Astro components for page sections.
- Store portfolio content in typed TypeScript data modules.
- Keep language switching as small client-side JavaScript with localStorage persistence.
- Build static output in GitHub Actions and deploy it to GitHub Pages.
- Preserve `CNAME` in the built site so the custom domain remains attached.

## Consequences
Positive:
- Page sections can be maintained independently.
- Project data, version numbers, download URLs, and capabilities are changed in one structured location.
- Additional projects and pages can be added without turning the site into another monolithic HTML file.
- Deployment has a reproducible build step.

Tradeoffs:
- Local development requires Node.js and `npm install`.
- The development entry point is no longer directly opening `index.html`; use `npm run dev` or `npm run build` followed by `npm run preview`.
- GitHub Pages deployment moves from branch-root publishing to GitHub Actions.
