# Ridgetechone

Marketing site for **Ridgetechone Construction and Development Corp.** — concrete formwork, crane operations & rigging, reinforcing, project management, property development, equipment rental, and upcoming field training.

Live reference: [ridgetechone.com](https://www.ridgetechone.com/)

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · Framer Motion · Lucide
- ESLint + Prettier · next-themes (dark-first)

## Brand

Dark industrial system: carbon fiber ground, fat condensed display type, electric blue signal color.

| Token | Value |
| --- | --- |
| Background | `#090909` |
| Surface | `#151515` |
| Primary | `#3B9EFF` Electric Blue |
| Accent | `#7DD3FC` Ice Blue |
| Text | `#FFFFFF` / `#A3A3A3` |

**Typography:** Oswald (display) · Inter (body) · IBM Plex Mono (technical)

**Tokens:** `app/globals.css`  
**UI library:** `components/library/`  
**Type / effects:** `components/design-system/`  
**Chrome:** `components/navigation/` + `components/marketing/`

## Content architecture

Structured so a CMS (Sanity / Payload) can replace the local seed later.

```text
types/                 # Document contracts
content/               # Local seed data
lib/content/           # Adapter API — app code imports only here
  source/local.ts      # Swap for Sanity/Payload when ready
components/library/    # Prop-driven UI (no marketing copy)
components/marketing/  # Section composers
app/                   # Routes resolve content → pass props
```

1. Put copy in `content/`, never in components  
2. Import through `@/lib/content`, not `@/content`  
3. Resolve Lucide icons from name strings in `lib/icons.ts`  
4. Keep SEO on each page document (`seo.title` / `seo.description`)

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home |
| `/projects` | Featured work + full portfolio directory |
| `/team` | Leadership & operations |
| `/services` | Capabilities index |
| `/services/[slug]` | Service detail (formwork, crane-rigging, reinforcing, …) |
| `/reinforcing` | Reinforcing overview |
| `/equipment` | Equipment rental |
| `/careers` | Careers |
| `/contact` | Contact |

Service registry: `content/services/registry.ts`  
Service template: `components/services/service-page.tsx`

## Scripts

```bash
npm install
npm run dev          # Turbopack
npm run build
npm run start
npm run lint
npm run format
npm run typecheck
```

## Environment

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` (defaults to `https://ridgetechone.com` when unset).

## Contact

- **Address:** #505 - 4211 Kingsway, Burnaby, BC V5H 1Z6  
- **Phone:** (604) 335-9216  
- **Email:** info@ridgetechone.com

## Next steps

1. Polish remaining interior pages (Team, Contact, Careers) to match Projects  
2. Swap `lib/content/source/local.ts` for Sanity or Payload when ready  
3. Scaffold training platform routes under `app/(platform)` when ready
