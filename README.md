# Portfolio

This is the code behind my personal site, live at **[me.skysec.org](https://me.skysec.org)**.

I'm Kirthik Aditya, a cybersecurity student. The site is where I keep my projects, skills and resume in one place, mainly PurgeMark, IndexCase and BIT CyberSpace. It's a small React app built with Vite and Tailwind CSS, and it runs on Cloudflare.

## Running it locally

You'll need Node.js. Then:

```bash
npm install
npm run dev
```

That starts the site at http://localhost:5173 and reloads as you edit. To check the production build, run `npm run build` and then `npm run preview`.

## Changing the content

Almost everything you read on the site, from the intro and projects to the skills and links, comes from one file: `src/data/resume.js`. I edit that file and leave the components alone. The downloadable resume is `public/resume.pdf`, so updating it means dropping in a new PDF with the same name.

## How it gets deployed

Every push to `main` runs a GitHub Actions workflow that builds the site and deploys it to a Cloudflare Worker. The workflow needs two repository secrets, `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

To deploy by hand instead, log in once with `npx wrangler login`, then run `npm run deploy`.
