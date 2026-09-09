# Ceylon Threads — Premium Socks E-Commerce Showcase

A premium, fast-loading, animated e-commerce showcase website for a Sri Lankan socks manufacturing business.

## Design Philosophy

"Brunello Cucinelli meets modern SaaS" — luxurious but understated. No flashy gimmicks, just confident design that lets the product speak.

## Tech Stack

- **Framework:** React 18 + Vite (static generation)
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Animations:** Framer Motion (sparingly) + CSS transitions
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Playfair Display (headings)
- **Routing:** React Router DOM v6

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#0F172A` | Deep Navy — authority, trust |
| Secondary | `#1E293B` | Slate — depth |
| Accent | `#B8860B` | Muted Gold — premium touch |
| Background | `#FAFAF9` | Warm off-white |
| Surface | `#FFFFFF` | Cards, containers |
| Text Muted | `#64748B` | Secondary text |

## Pages

- `/` — Home (hero, categories, value props, best sellers, origin story, testimonials, newsletter)
- `/categories` — All category cards
- `/categories/:slug` — Filtered product grid
- `/products/:slug` — Product detail with WhatsApp ordering
- `/about` — Brand story, values, certifications
- `/contact` — Contact form, WhatsApp, map

## Environment Variables

Create a `.env` file:

```env
VITE_WHATSAPP_NUMBER=94771234567
VITE_EMAIL_TO=orders@ceylonthreads.com
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/` directory (static files)

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

The `vercel.json` in `public/` handles SPA routing.

### Any Static Host
Upload the `dist/` folder. Configure your host to redirect all routes to `index.html` for SPA routing.

## Performance

- Lighthouse target: 95+
- FCP target: <1.2s
- LCP target: <2.0s
- Total JS bundle: <150KB gzipped
- CLS: <0.05

## WhatsApp Integration

All "Order" buttons link to `wa.me/{number}` with pre-filled messages containing product details, size, color, and quantity.

## Accessibility

- Semantic HTML5 throughout
- ARIA labels on icon buttons
- Keyboard navigable
- Focus states visible
- Alt text on all images
