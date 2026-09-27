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

## Hosting on AWS (S3 + CloudFront)

1. **S3 bucket**: create a bucket and keep **Block all public access** on. Don't enable static website hosting.
2. **Certificate** (only for a custom domain): request one in ACM in **us-east-1**.
3. **CloudFront distribution**:
   - Origin: the S3 bucket, with **Origin Access Control (OAC)**. Let CloudFront update the bucket policy.
   - Viewer protocol policy: **Redirect HTTP to HTTPS**.
   - Default root object: `index.html`.
   - Response headers policy: the managed **SecurityHeadersPolicy** (adds HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy).
4. **Domain** (optional): point it at the distribution with a Route 53 alias record.

### Deploy by hand

```bash
npm run build
aws s3 sync dist/ s3://YOUR_BUCKET --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Deploy automatically with GitHub Actions

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. It signs in to AWS with OIDC, so no access keys are stored in GitHub.

1. In IAM, add GitHub's OIDC provider (`token.actions.githubusercontent.com`) and create a role that trusts your repo. Give it `s3:ListBucket`, `s3:PutObject`, `s3:DeleteObject` on the bucket and `cloudfront:CreateInvalidation` on the distribution.
2. In the repo's **Settings → Secrets and variables → Actions**, add:
   - Secret `AWS_ROLE_ARN`
   - Variables `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`
