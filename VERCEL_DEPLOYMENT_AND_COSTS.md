# Vercel Deploy and Costs

## Live Domains

- Main domain: `https://tvoya-tysha.vercel.app`
- Previous test domain: `https://tvoya-tysha-test.vercel.app`

## Vercel CLI Commands

Use Node 20 before deploy (required by this Next.js version):

```bash
export PATH="$HOME/.nvm/versions/node/v20.11.1/bin:$PATH"
```

### 1) Link project (one time)

```bash
pnpm dlx vercel link --yes --project tvoya-tysha
```

### 2) Deploy to production

```bash
pnpm dlx vercel deploy --prod --yes
```

### 3) Deploy preview (non-production)

```bash
pnpm dlx vercel deploy --yes
```

### 4) Inspect deployment

```bash
pnpm dlx vercel inspect tvoya-tysha.vercel.app
```

## Cost Estimate

## Hosting (Vercel)

- Hobby plan: typically `0 USD/month` for small personal sites.
- Pro plan (if needed later): about `20 USD/month` per member.

## Domain Costs

- `vercel.app` subdomain: `0 USD/month`.
- Custom domain (if you buy one): usually about `10-25 USD/year` (roughly `1-2 USD/month` average).

## Maintenance Costs (Typical)

- Basic maintenance by yourself: `0 USD/month`.
- Optional paid maintenance (freelancer/agency): commonly `20-200+ USD/month` depending on updates, SEO work, and content changes frequency.

## Current Realistic Monthly Cost for This Project

- With current setup (`tvoya-tysha.vercel.app`, no paid services): **~0 USD/month**.
