# Boardupscale Landing

Marketing site for [boardupscale.com](https://boardupscale.com) — the free, open-source Jira alternative.

Built with **Next.js 14 App Router** and deployed to **Vercel**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, features, AI duplicate detection spotlight, pricing preview |
| `/pricing` | Full pricing page with monthly/yearly toggle and feature comparison table |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |

## Dev

```bash
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_URL` | URL of the hosted Boardupscale app | `https://app.boardupscale.com` |

## Related repos

- [codeupscale/boardupscale](https://github.com/codeupscale/boardupscale) — main app (NestJS + Vite, EC2)
