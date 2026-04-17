# Start Project Guide

## Requirements

- Node.js `20.11.1` or newer (project requires Node 20+)
- `pnpm` package manager

## 1) Open project

```bash
cd /Users/viachaslau/Desktop/programming/TvoyaTysha
```

## 2) Use Node 20 (recommended)

If you use `nvm`:

```bash
nvm use 20.11.1
node -v
```

Expected: `v20.x.x`

## 3) Install dependencies

```bash
pnpm install
```

## 4) Run local development server

```bash
pnpm dev
```

Open:

- `http://localhost:3000`

## 5) Build for production (optional local check)

```bash
pnpm build
pnpm start
```

## Helpful Commands

- Lint:

```bash
pnpm lint
```

- Reinstall dependencies cleanly (if native package issues happen):

```bash
rm -rf node_modules
pnpm install --force
```

## Deployment

See:

- `VERCEL_DEPLOYMENT_AND_COSTS.md`
