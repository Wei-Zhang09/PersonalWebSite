# Mr Z Portfolio

A bilingual static portfolio for **Mr Z**, focused on CleanMaster and approachable Windows utilities.

## Local preview

Open `index.html` directly in a browser.

## Validate

```sh
npx --yes html-validate index.html
```

## Project documentation

Start at [`docs/README.md`](docs/README.md):

- Requirements: `docs/requirements/site-brief.md`
- Visual direction: `docs/design/visual-direction.md`
- Validation baseline: `docs/discovery/baseline.md`

## Assets

Place approved CleanMaster screenshots in:

```text
assets/cleanmaster/screenshots/
```

The current approved CleanMaster screenshot is integrated into `index.html`, and the v2.3.0 Gitee installer is linked as the primary download action. The page also exposes the verified source repository, capability overview, product origin, public technology stack, contact email, and GitHub profile.
## Deployment

The repository is prepared for GitHub Pages with `CNAME` set to `awesoftware.dpdns.org`.

After the first push:

1. In GitHub, open **Settings → Pages** and set the publishing source to the repository's default branch at `/ (root)`.
2. Keep the custom domain as `awesoftware.dpdns.org` and wait for GitHub to validate it.
3. In the DigitalPlat Domain dashboard, configure the DNS record(s) GitHub Pages displays for this custom domain.
4. Enable **Enforce HTTPS** after DNS propagation and GitHub certificate issuance complete.

Do not change DNS records until GitHub Pages supplies its verification instructions.
