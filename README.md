# Max Mendes - Portfolio

Production portfolio for freelance web development.

**Live:** [Coming soon - deploying to Vercel]

## Tech Stack

- Next.js 15 (App Router)
- TypeScript 5 (strict mode)
- Tailwind CSS 3.4
- Framer Motion
- Vercel deployment

## Architecture Decisions

**Internationalization:**
- Route groups `(en)` and `(pl)` for clean URLs without `/en/` or `/pl/` prefixes
- Dictionary-based translations (not i18n libraries)
- Localized slugs per language (`/about` vs `/o-mnie`)
- hreflang tags for international SEO

**SEO Strategy:**
- Title formula: `[Keyword] - [Differentiator] | Max Mendes` (60 char limit)
- JSON-LD structured data (Person, LocalBusiness schemas)
- Dynamic meta tags per page/locale
- Automatic sitemap with hreflang alternates

**Performance:**
- Parallax effects desktop-only (mobile excluded)
- WebP images
- Code splitting by route group
- Framer Motion lazy-loaded

## Project Structure

```
app/
├── [locale]/           # Homepage (en, pl)
├── (en)/en/            # English pages
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── projects/
│   └── services/
└── (pl)/pl/            # Polish pages (localized slugs)
    ├── o-mnie/
    ├── kontakt/
    ├── pytania/
    ├── projekty/
    └── uslugi/

components/
├── effects/            # Visual effects (FloatingTechIcons)
├── sections/           # Page sections (Hero, Footer, etc.)
├── seo/                # SEO components (JsonLd)
└── ui/                 # Reusable UI primitives

lib/
├── i18n/               # Internationalization (dictionaries)
└── seo/                # SEO config, metadata, schemas

hooks/                  # Custom React hooks
types/                  # TypeScript definitions
```

## Pages

| English | Polish | Description |
|---------|--------|-------------|
| `/en` | `/pl` | Homepage |
| `/en/about` | `/pl/o-mnie` | About page |
| `/en/contact` | `/pl/kontakt` | Contact page |
| `/en/projects` | `/pl/projekty` | Projects showcase |
| `/en/services` | `/pl/uslugi` | Services offered |
| `/en/faq` | `/pl/pytania` | FAQ page |

---

Built for client acquisition in Polish and international markets.
