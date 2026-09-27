# Kirthik Aditya Portfolio

Static portfolio site built with Vite, React and Tailwind CSS. Hosted on S3 behind CloudFront.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```

## Editing content

All text, links and skills live in `src/data/resume.js`. Replace `public/resume.pdf` to update the downloadable resume.

## Hosting (Cloudflare Workers)

The site is served by a Cloudflare Worker with static assets, configured in `wrangler.jsonc`. The `name` there must match the Worker in your Cloudflare dashboard.

### Deploy by hand

```bash
npx wrangler login   # first time only
npm run deploy       # builds, then uploads dist/ to Cloudflare
```

### Deploy automatically with GitHub Actions

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. Add two repository secrets under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`: create one at Cloudflare **My Profile → API Tokens → Create Token**, using the **Edit Cloudflare Workers** template.
- `CLOUDFLARE_ACCOUNT_ID`: shown on the Workers & Pages overview page, or in the URL of your Cloudflare dashboard.

## TryHackMe stats

`scripts/fetch-tryhackme.mjs` reads the public TryHackMe profile API (with a plain request, then headless Chromium via Playwright if TryHackMe blocks it) and writes `public/tryhackme.json`, which the TryHackMe card loads. The deploy workflow runs it before every build, and also on a schedule every 6 hours, so the numbers stay fresh without a push. If the fetch fails, the build still succeeds and the card shows the fallback numbers in `src/data/resume.js`. Run `npm run stats` to fetch them locally.
