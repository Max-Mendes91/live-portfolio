# Architecture: i18n with Localized URLs

> **Last updated:** 2026-01-21
> **Status:** Active - Follow this document for all i18n work

---

## Strategy: Option B - Localized URLs

This project uses **localized URLs** for better SEO targeting in each market.

### Why Localized URLs?

| Approach | Example | SEO Impact |
|----------|---------|------------|
| Same slugs | `/pl/contact` | Generic, less local relevance |
| **Localized slugs** | `/pl/kontakt` | Better for Polish SEO, local search ranking |

**Decision:** We use localized slugs to maximize SEO for both markets:
- **English** (`/en`) → UK, US, EU clients (English slugs)
- **Polish** (`/pl`) → Poland local market (Polish slugs)

---

## URL Structure

### Complete URL Map

| Page | English URL | Polish URL |
|------|-------------|------------|
| Home | `/en` | `/pl` |
| About | `/en/about` | `/pl/o-mnie` |
| Contact | `/en/contact` | `/pl/kontakt` |
| Projects | `/en/projects` | `/pl/projekty` |
| Services | `/en/services` | `/pl/uslugi` |

### Service Detail Pages (Localized Slugs)

| Service | English URL | Polish URL |
|---------|-------------|------------|
| Web Development | `/en/services/web-development` | `/pl/uslugi/tworzenie-stron` |
| SaaS & Web Apps | `/en/services/saas-web-apps` | `/pl/uslugi/aplikacje-webowe` |
| E-Commerce | `/en/services/ecommerce-development` | `/pl/uslugi/sklepy-internetowe` |
| SEO & Performance | `/en/services/seo-performance-optimization` | `/pl/uslugi/pozycjonowanie` |
| AI Integration | `/en/services/ai-integration` | `/pl/uslugi/integracja-ai` |

> **Note:** Service pages use dictionary-based SEO metadata. See [../CLAUDE.md](../CLAUDE.md#seo-dictionary-pattern-mandatory-for-all-pages) for implementation pattern.

### Root URL Behavior

- `/` → Redirects to `/en` (default) or `/pl` (based on browser language)
- Middleware handles locale detection from `Accept-Language` header

---

## File Structure

```
app/
├── [locale]/                    # Dynamic segment for HOME PAGE ONLY
│   ├── layout.tsx               # Sets <html lang={locale}>, hreflang tags
│   ├── page.tsx                 # Server component - loads dictionary
│   └── HomeClient.tsx           # Client component - renders home sections
│
├── en/                          # English subpages (English slugs)
│   ├── about/
│   │   ├── page.tsx
│   │   └── AboutClient.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactClient.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── ProjectsClient.tsx
│   └── services/
│       ├── page.tsx
│       ├── ServicesClient.tsx
│       └── [slug]/
│           └── page.tsx
│
├── pl/                          # Polish subpages (Polish slugs!)
│   ├── o-mnie/                  # NOT /pl/about
│   │   ├── page.tsx
│   │   └── AboutClient.tsx
│   ├── kontakt/                 # NOT /pl/contact
│   │   ├── page.tsx
│   │   └── ContactClient.tsx
│   ├── projekty/                # NOT /pl/projects
│   │   ├── page.tsx
│   │   └── ProjectsClient.tsx
│   └── uslugi/                  # NOT /pl/services
│       ├── page.tsx
│       ├── ServicesClient.tsx
│       └── [slug]/
│           └── page.tsx
│
├── layout.tsx                   # Root layout (fonts, globals)
├── globals.css
├── robots.ts
├── sitemap.ts
└── manifest.ts

middleware.ts                    # Locale detection & legacy redirects

lib/
├── i18n/
│   ├── config.ts                # Locale config, helpers
│   ├── routes.ts                # Route mapping between locales
│   └── dictionaries/
│       ├── en.json              # English content
│       └── pl.json              # Polish content
└── seo/
    ├── config.ts                # Site config, hreflang definitions
    ├── metadata.ts              # Page metadata generators
    └── schemas.ts               # JSON-LD structured data

types/
├── i18n.ts                      # Dictionary interfaces
└── seo.ts                       # SEO types (SupportedLocale, etc.)
```

---

## Route Mapping

The file `lib/i18n/routes.ts` defines mappings between locales:

```typescript
// Example structure
export const ROUTE_MAP = {
  en: {
    about: '/en/about',
    contact: '/en/contact',
    projects: '/en/projects',
    services: '/en/services',
  },
  pl: {
    about: '/pl/o-mnie',
    contact: '/pl/kontakt',
    projects: '/pl/projekty',
    services: '/pl/uslugi',
  },
} as const;
```

This is used by:
- **Navbar** - to generate correct links per locale
- **Language switcher** - to navigate to equivalent page in other locale
- **Middleware** - for legacy redirects

---

## How It Works

### 1. Homepage (Dynamic `[locale]`)

The homepage uses `[locale]` because both versions have the same structure:
- `/en` and `/pl` are handled by `app/[locale]/page.tsx`
- Content comes from dictionaries (`en.json` / `pl.json`)
- Components receive dictionary props

### 2. Subpages (Static locale folders)

Subpages have **different URL slugs** per locale, so they need separate folders:
- `/en/contact` → `app/en/contact/page.tsx`
- `/pl/kontakt` → `app/pl/kontakt/page.tsx`

Both pages can share the same `ContactClient.tsx` component - they just pass different dictionaries.

### 3. Middleware

`middleware.ts` handles:
- Root redirect: `/` → `/en` or `/pl` (based on Accept-Language)
- Legacy redirects: `/contact` → `/en/contact`
- Invalid locale handling

### 4. Language Switcher

When user clicks language switch:
- Current page: `/en/about`
- Middleware/component looks up: `ROUTE_MAP.pl.about`
- Navigates to: `/pl/o-mnie`

---

## Content Management

### Dictionaries

All translatable content lives in JSON dictionaries:

```
lib/i18n/dictionaries/
├── en.json    # English content
└── pl.json    # Polish content (translated)
```

### Dictionary Structure

```typescript
// types/i18n.ts
interface Dictionary {
  meta: MetaDict;           // Page titles, descriptions
  nav: NavDict;             // Navigation labels
  hero: HeroDict;           // Hero section
  about: AboutDict;         // About section
  services: ServicesDict;   // Services section
  // ... etc
}
```

### Using Dictionaries in Components

```tsx
// Server component loads dictionary
const dictionary = await getDictionary(locale);

// Pass to client component
<HeroClient dictionary={dictionary.hero} locale={locale} />
```

---

## SEO Implementation

### hreflang Tags

Each page includes hreflang tags pointing to its equivalent in other locales:

```html
<!-- On /en/about -->
<link rel="alternate" hreflang="en" href="https://example.com/en/about" />
<link rel="alternate" hreflang="pl" href="https://example.com/pl/o-mnie" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/about" />
```

### Sitemap

`app/sitemap.ts` generates entries for all pages in both locales with proper alternates.

### Structured Data

JSON-LD schemas include locale-specific information (language, geographic targeting).

---

## Adding a New Page

### Step 1: Create English version
```
app/en/new-page/
├── page.tsx           # Server component
└── NewPageClient.tsx  # Client component (if needed)
```

### Step 2: Create Polish version (with Polish slug!)
```
app/pl/nowa-strona/    # Polish URL slug
├── page.tsx
└── NewPageClient.tsx  # Can reuse same client component
```

### Step 3: Add dictionary content
```json
// en.json
{ "newPage": { "title": "New Page", ... } }

// pl.json
{ "newPage": { "title": "Nowa Strona", ... } }
```

### Step 4: Add to route map
```typescript
// lib/i18n/routes.ts
export const ROUTE_MAP = {
  en: { ..., newPage: '/en/new-page' },
  pl: { ..., newPage: '/pl/nowa-strona' },
};
```

### Step 5: Update navigation (if needed)
Add links to Navbar using the route map.

---

## Legacy Routes (To Be Removed)

These old routes should be deleted after migration is complete:

```
app/contact/           # Old - no locale prefix
app/projects/          # Old - no locale prefix
app/services/          # Old - no locale prefix
```

Middleware currently redirects these to `/en/...` versions.

---

## Quick Reference

### Check current locale in component
```typescript
// From params in page.tsx
export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale as SupportedLocale;
}
```

### Get dictionary
```typescript
import { getDictionary } from '@/lib/i18n/config';
const dict = await getDictionary(locale);
```

### Navigate between locales
```typescript
import { ROUTE_MAP } from '@/lib/i18n/routes';
const polishUrl = ROUTE_MAP.pl.about; // '/pl/o-mnie'
```

---

## Verification Checklist

When adding/modifying pages:

- [ ] English page exists at correct path
- [ ] Polish page exists with Polish slug
- [ ] Dictionary content added for both locales
- [ ] Route map updated
- [ ] hreflang tags correct
- [ ] Language switcher navigates to correct page
- [ ] Sitemap includes both versions
- [ ] `pnpm run lint` passes
- [ ] `pnpm run build` passes
