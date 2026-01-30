# Max Mendes - Portfolio

Production portfolio for freelance web development.

**Live:** https://maxmendes.dev

## Tech Stack

- Next.js 15 (App Router)
- TypeScript 5 (strict mode)
- Tailwind CSS 3.4
- Framer Motion
- Vercel deployment
- Google Analytics 4 (GDPR-compliant)

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
- LCP optimized (fetchPriority, preconnect, progressive enhancement)
- CSS animations replacing Framer Motion whileInView for better performance
- Parallax effects desktop-only (mobile excluded)
- WebP images with proper sizing
- Code splitting by route group
- Intro overlay skipped for bots/Lighthouse

## Project Structure

```
app/
├── [locale]/           # Homepage (en, pl)
├── en/                 # English pages
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── privacy/
│   ├── projects/
│   ├── services/
│   └── terms/
└── pl/                 # Polish pages (localized slugs)
    ├── o-mnie/
    ├── kontakt/
    ├── polityka-prywatnosci/
    ├── projekty/
    ├── pytania/
    ├── regulamin/
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
| `/en/privacy` | `/pl/polityka-prywatnosci` | Privacy policy |
| `/en/terms` | `/pl/regulamin` | Terms of service |

---

Built for client acquisition in Polish and international markets.
