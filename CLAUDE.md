# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **IMPORTANT:** For i18n architecture, see [.claude/ARCHITECTURE.md](.claude/ARCHITECTURE.md)
> For project roadmap, see [.claude/ROADMAP.md](.claude/ROADMAP.md)
> For SEO management, see [.claude/skills/seo.md](.claude/skills/seo.md)
> **For design system & UI components, see [.claude/DESIGN_SYSTEM.md](.claude/DESIGN_SYSTEM.md)**
> **MANDATORY FOR RESPONSIVE:** For device breakpoints, see [.claude/DEVICE_BREAKPOINTS.md](.claude/DEVICE_BREAKPOINTS.md) - **ALWAYS reference when creating/editing components**
> **CRITICAL:** For session handoffs, see [.claude/skills/handoff.md](.claude/skills/handoff.md) - USE THIS when user asks for "handoff"

## Project Overview

Dark-themed portfolio website for Max Mendes, a freelance web developer based in Częstochowa, Poland.

**Target markets:**
- **English** (`/en`) → UK, US, EU clients
- **Polish** (`/pl`) → Local (Częstochowa), Regional (Śląskie), National (Poland)

**Routing:** Uses **localized URLs** for better SEO (see Architecture doc):

| English | Polish |
|---------|--------|
| `/en` | `/pl` |
| `/en/about` | `/pl/o-mnie` |
| `/en/contact` | `/pl/kontakt` |
| `/en/projects` | `/pl/projekty` |
| `/en/services` | `/pl/uslugi` |

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript 5 (strict)
- Tailwind CSS 3.4
- Framer Motion (animations)
- Lucide React (icons)

## Commands

```bash
pnpm install         # Install dependencies
pnpm run dev         # Start dev server on port 3000
pnpm run build       # Production build
pnpm run start       # Start production server
pnpm run lint        # Run ESLint
```

> **Note:** This project uses pnpm (not npm). Lock file: `pnpm-lock.yaml`

---

## Color System (MANDATORY)

**Dark theme portfolio.** Use semantic color tokens defined in the design system.

> **Full details:** See [.claude/DESIGN_SYSTEM.md](.claude/DESIGN_SYSTEM.md)

### Semantic Tokens (Preferred)

| Purpose | Tailwind Class | Value |
|---------|---------------|-------|
| Background | `bg-background` | `#050505` |
| Surface | `bg-surface` | `#080808` |
| Primary text | `text-text-primary` | `#FFFFFF` |
| Secondary text | `text-text-secondary` | `#a1a1aa` |
| Muted text | `text-text-muted` | `#71717a` |
| Borders | `border-border` | `white/10` |
| Borders subtle | `border-border-subtle` | `white/5` |

### Examples

```tsx
// ✅ DO: Use semantic tokens
<div className="bg-surface text-text-primary">
<p className="text-text-secondary">
<div className="border border-border">

// ❌ DON'T: Use hardcoded values
<div className="bg-[#080808] text-white">
<p className="text-zinc-400">
```

### UI Components

Import from `@/components/ui`:

```tsx
import { Display, Text, Card, Button, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
```

---

## Layout & Overflow Rules (MANDATORY)

**NEVER break the layout.** These rules prevent horizontal scroll.

### Section Level

```tsx
// ✅ DO: Always add overflow-hidden to sections with animations
<section className="relative overflow-hidden">
  {/* Content with animations */}
</section>

// ❌ DON'T: Leave animated sections without overflow protection
<section className="relative">
```

### Decorative/Animated Elements

```tsx
// ✅ DO: Contain blur effects and large elements
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute ... blur-[160px]" />
</div>

// ❌ DON'T: Let blur effects extend beyond viewport
<div className="absolute bottom-[-25%] left-[-15%] blur-[160px]">
```

### Framer Motion Animations

```tsx
// ✅ DO: Use transforms (don't affect layout)
animate={{ x: [-120, 160], scale: [1, 1.3] }}

// ❌ DON'T: Animate properties that cause reflow
animate={{ left: [-120, 160], width: [100, 200] }}
```

### Quality Checklist - Layout

Before commit, verify:
- [ ] Sections with animations have `overflow-hidden`
- [ ] No horizontal scroll on mobile
- [ ] Blur effects contained within parent

---

## Responsive Design Rules (MANDATORY)

**Reference:** See [.claude/DEVICE_BREAKPOINTS.md](.claude/DEVICE_BREAKPOINTS.md) for target device dimensions.

### Core Principles

1. **NEVER delete content for mobile** - All text, links, and elements must remain visible on ALL screen sizes
2. **NEVER hide content with `hidden sm:block`** - Instead, reduce sizes and spacing to fit
3. **Desktop/Laptop views are untouched** - Only modify classes for mobile breakpoints (below `sm:`)
4. **Test all device dimensions** - Use the device list in DEVICE_BREAKPOINTS.md

### Mobile-First Approach

```tsx
// ✅ DO: Reduce sizes for mobile, keep content visible
<p className="text-xs sm:text-sm md:text-base">Content visible everywhere</p>
<div className="gap-1 sm:gap-4 md:gap-8">Tighter on mobile</div>

// ❌ DON'T: Hide content on mobile
<p className="hidden sm:block">This content is lost on mobile!</p>
<div className="sm:flex hidden">Hidden on mobile - BAD</div>
```

### Breakpoint Strategy

| Breakpoint | Target | Strategy |
|------------|--------|----------|
| Default (< 640px) | Mobile phones | Smallest text, tightest spacing, 3-col grids |
| `sm:` (640px+) | Large phones/tablets | Slightly larger, normal spacing |
| `md:` (768px+) | Tablets | **DO NOT CHANGE** - Works fine |
| `lg:` (1024px+) | Laptops | **DO NOT CHANGE** - Works fine |
| `xl:` (1280px+) | Desktops | **DO NOT CHANGE** - Works fine |

### Quality Checklist - Responsive

Before commit, verify on DEVICE_BREAKPOINTS.md devices:
- [ ] All content visible (no hidden elements on mobile)
- [ ] Text readable (min 10px font)
- [ ] Touch targets adequate (min 44px)
- [ ] No overlapping elements
- [ ] Desktop/laptop unchanged

---

## Commit Workflow (MANDATORY)

### Step 1: Check for Errors (BEFORE staging)

```bash
# Run ESLint check - MUST PASS
pnpm run lint

# Run build to check TypeScript - MUST PASS
pnpm run build

# If errors, FIX THEM before continuing
```

### Step 2: Commit with Convention

```bash
git add .
git commit -m "type(scope): description"

# Types: feat, fix, refactor, style, docs, chore, perf, test
# Examples:
# feat(hero): add trust signal badges
# fix(footer): correct social media links
# refactor(seo): update metadata structure
```

### Branch Naming

```
feature/component-name
fix/bug-description
refactor/what-changed
```

---

## GitHub Workflow

### PR-Based Workflow (Professional Standard)

**ALWAYS use PRs** - never commit directly to main after initial setup.

```bash
# 1. Create feature branch
git checkout main
git pull origin main
git checkout -b feature/description

# 2. Run checks BEFORE committing
pnpm run lint
pnpm run build

# 3. Stage and commit
git add [files]
git commit -m "type(scope): description

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# 4. Push and create PR
git push -u origin feature/description
gh pr create --title "type(scope): description" --body "$(cat <<'EOF'
## Summary
- Change 1
- Change 2

## Test plan
- [ ] Test item 1
- [ ] Test item 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"

# 5. Merge and cleanup
gh pr merge [PR-NUMBER] --merge --delete-branch
git checkout main
git pull origin main
```

---

## TypeScript Rules

```typescript
// DO: Use interfaces for objects
interface ProjectProps {
  title: string;
  description: string;
}

// DON'T: Use type for objects
type ProjectProps = { title: string };

// DO: Use const assertions
const SERVICES = ["web-dev", "design", "seo"] as const;

// DON'T: Use enums
enum Service { WebDev, Design }

// DO: Explicit return types for functions
function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// DON'T: Use any
const data: any = fetch(); // NO!
```

---

## Component Rules

```typescript
// Current pattern: Default exports with React.FC
// (This is the existing pattern in the codebase)

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Content */}
    </section>
  );
};

export default Hero;
```

### When to use "use client"

```typescript
// DO: Add "use client" when using:
// - Framer Motion
// - useState, useEffect, useRef
// - onClick, onChange handlers
// - Browser APIs

'use client';
export default function AnimatedComponent() { ... }

// DON'T: Add "use client" for static components
// (Server Components are the default)
export function StaticContent() { ... }
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files/Folders | PascalCase (components) | `Hero.tsx`, `AboutMe.tsx` |
| Files/Folders | kebab-case (lib/utils) | `seo-config.ts` |
| Components | PascalCase | `FooterSection` |
| Functions/Variables | camelCase | `handleSubmit`, `isLoading` |
| Constants | SCREAMING_SNAKE | `SITE_CONFIG` |
| Interfaces | PascalCase | `ProjectProps` |

---

## Architecture

### Data Flow
- **SEO config** (`lib/seo/config.ts`) → Central source of truth for site config, trust signals, USP badges
- **Metadata** (`lib/seo/metadata.ts`) → Generates page metadata using config + keywords
- **i18n** (`lib/i18n/dictionaries/`) → JSON dictionaries for EN/PL content
- **Schemas** (`lib/seo/schemas.ts`) → JSON-LD structured data generators

### Key Patterns
- All page sections are in `components/sections/`
- Reusable UI primitives in `components/ui/`
- Font: Outfit (loaded in root layout via `next/font/google`)
- Path alias: `@/` maps to project root

### i18n Pattern
Components receive dictionary props for localized content:

```tsx
interface HeroProps {
  locale: SupportedLocale;
  dictionary: HeroDict;
}

const Hero: React.FC<HeroProps> = ({ locale, dictionary }) => {
  return <h1>{dictionary.headline}</h1>;
};
```

Dictionary types defined in `types/i18n.ts`. JSON files in `lib/i18n/dictionaries/`.

---

## SEO Dictionary Pattern (MANDATORY FOR ALL PAGES)

**ALL content pages MUST use dictionary-based SEO metadata.** Never hardcode SEO data in components.

This pattern ensures:
- Full control over titles, descriptions, keywords per market
- Localized URLs with keyword-rich slugs
- Hreflang tags for language alternates
- JSON-LD schema markup for rich results
- Single source of truth in dictionaries

### What Goes Where (MANDATORY)

**In Dictionaries (translatable text only):**
- Titles, descriptions, keywords (SEO text)
- UI labels (buttons, headings, navigation)
- Content paragraphs
- `href` (page path) and `hrefLang` (language alternates as paths)

**In SITE_CONFIG (`lib/seo/config.ts`):**
- Email address (`SITE_CONFIG.owner.email`)
- Phone number (`SITE_CONFIG.owner.phone`)
- Social media URLs (`SITE_CONFIG.owner.social.*`)
- Domain URL (`SITE_CONFIG.url`)
- Owner name (`SITE_CONFIG.owner.name`)
- Address (`SITE_CONFIG.owner.address`)

**Generated Dynamically (NEVER hardcode in dictionaries):**
- Canonical URLs → Use `getFullUrl(href)` from dictionary path
- Full hreflang URLs → Use `getFullUrl(hrefLang.en)`, `getFullUrl(hrefLang.pl)`

### Dictionary Structure

Add SEO metadata to dictionaries (`en.json`, `pl.json`) for each page:

```json
{
  "pageSlug": {
    "id": "page-slug",
    "label": "Page Name",
    "href": "/en/page-slug",
    "hrefLang": {
      "en": "/en/page-slug",
      "pl": "/pl/polish-slug"
    },
    "seo": {
      "title": "Page Title | Max Mendes",
      "metaDescription": "150-160 char description with keywords",
      "keywords": ["keyword1", "keyword2", "keyword3"],
      "h1": "Page Main Heading",
      "ogTitle": "OG Title | Max Mendes"
    },
    "schema": {
      "type": "WebPage or Service or Article",
      "description": "Schema description",
      "areaServed": ["Poland", "UK", "US"]
    }
  }
}
```

> **Note:** `canonical` is NOT in the dictionary. It's generated dynamically using `getFullUrl(href)`.

### Page Implementation Template

```tsx
import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import { ServicePageJsonLd } from '@/components/seo/JsonLd';
import { ServiceLink } from '@/types/i18n';

const PAGE_ID = 'page-slug';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en'); // or 'pl'
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  if (!pageData) {
    return { title: 'Fallback Title | Max Mendes' };
  }

  return generateServicePageMetadata(pageData, 'en');
}

export default async function Page() {
  const dictionary = await getDictionary('en');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  return (
    <>
      {pageData && <ServicePageJsonLd serviceData={pageData} />}
      <h1>{pageData?.seo.h1 || 'Page Title'}</h1>
      {/* Page content */}
    </>
  );
}
```

### Dynamic Canonical URL Pattern (for all pages)

All pages MUST generate canonical URLs dynamically from dictionary `href`.

**Option 1: Use the centralized utility (PREFERRED for service pages)**
```tsx
import { generateServicePageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;
  if (!pageData) return { title: 'Fallback Title | Max Mendes' };
  return generateServicePageMetadata(pageData, 'en');
}
```

**Option 2: Inline implementation (for pages with custom needs like About)**
```tsx
import { getFullUrl } from '@/lib/seo/config';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const pageData = dictionary.aboutPage;

  if (!pageData) return {};

  // Generate canonical URL dynamically from dictionary href
  const canonicalUrl = getFullUrl(pageData.href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(pageData.hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    title: pageData.seo.title,
    description: pageData.seo.metaDescription,
    keywords: pageData.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: pageData.seo.ogTitle,
      description: pageData.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.seo.ogTitle,
      description: pageData.seo.metaDescription,
      images: ['/og-image.png'],
    },
  };
}
```

### SEO Requirements Checklist

For EVERY new page:

- [ ] Add entry to BOTH `en.json` AND `pl.json` dictionaries
- [ ] Title: under 60 characters, keyword first
- [ ] Meta description: 150-160 characters
- [ ] Keywords: 5-7 relevant terms per market
- [ ] Localized hrefs (Polish uses Polish slugs: `/pl/uslugi/` not `/pl/services/`)
- [ ] Both hrefLang entries (en + pl)
- [ ] Schema with correct type and areaServed
- [ ] Page uses dictionary metadata functions
- [ ] Added to `app/sitemap.ts` with hreflang alternates

### Polish vs English Market

| Aspect | English | Polish |
|--------|---------|--------|
| **URLs** | `/en/services/web-development` | `/pl/uslugi/tworzenie-stron` |
| **Keywords** | Global terms | Local + "Częstochowa", "Śląskie" |
| **Emphasis** | Modern tech stack | "Nie WordPress, kod od zera" |
| **areaServed** | Poland, UK, US, EU | Częstochowa, Śląskie, Polska |

### DO NOT

```tsx
// ❌ NEVER hardcode SEO in components
export const metadata: Metadata = {
  title: 'Hardcoded Title',  // NO!
  description: 'Hardcoded desc'  // NO!
};

// ❌ NEVER hardcode canonical URLs in dictionaries
"seo": {
  "canonical": "https://maxmendes.dev/..."  // NO! Use getFullUrl(href)
}

// ❌ NEVER hardcode email, phone, or social URLs in dictionaries or components
<a href="mailto:hardcoded@email.com">  // NO! Use SITE_CONFIG.owner.email
<a href="https://github.com/hardcoded">  // NO! Use SITE_CONFIG.owner.social.github

// ❌ NEVER use different patterns per page
// All pages MUST use dictionary + generateMetadata pattern

// ✅ DO: Use centralized config
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';
<a href={`mailto:${SITE_CONFIG.owner.email}`}>
<a href={SITE_CONFIG.owner.social.github}>
const canonicalUrl = getFullUrl(dictionary.href);
```

### Helper Functions Reference

| Function | File | Purpose |
|----------|------|---------|
| `getFullUrl(path)` | `lib/seo/config.ts` | Converts path to full URL with domain |
| `generateServicePageMetadata()` | `lib/seo/metadata.ts` | Generates Next.js Metadata from dictionary |
| `generateServicePageSchema()` | `lib/seo/schemas.ts` | Generates JSON-LD schema |
| `ServicePageJsonLd` | `components/seo/JsonLd.tsx` | Schema injection component |
| `SITE_CONFIG` | `lib/seo/config.ts` | Central config (email, social, domain) |

## File Structure

> **Full details:** See [.claude/ARCHITECTURE.md](.claude/ARCHITECTURE.md)

```
app/
├── [locale]/            # Homepage only (en, pl)
│   ├── layout.tsx       # Locale-specific layout (html lang, hreflang)
│   ├── page.tsx         # Home page (server component)
│   └── HomeClient.tsx   # Home page client component
│
├── en/                  # English subpages (English slugs)
│   ├── about/
│   ├── contact/
│   ├── projects/
│   └── services/
│
├── pl/                  # Polish subpages (Polish slugs!)
│   ├── o-mnie/          # NOT /pl/about
│   ├── kontakt/         # NOT /pl/contact
│   ├── projekty/        # NOT /pl/projects
│   └── uslugi/          # NOT /pl/services
│
├── globals.css          # Tailwind + custom styles
├── robots.ts            # Robots.txt generation
├── sitemap.ts           # Sitemap generation
└── manifest.ts          # PWA manifest

middleware.ts            # Locale detection & redirects

components/
├── ui/                  # Reusable UI (Button, Card, Badge, Typography)
├── sections/            # Page sections (Hero, AboutMe, WorkGrid, FooterSection, etc.)
├── seo/                 # SEO components (JsonLd, ServicePageJsonLd)
└── Navbar.tsx

lib/
├── seo/                 # SEO (config, keywords, metadata, schemas)
├── i18n/                # i18n config + dictionaries (en.json, pl.json)
│   └── routes.ts        # Route mapping between locales
└── constants.tsx        # Static data

types/
├── index.ts             # General types
├── seo.ts               # SEO types (SupportedLocale, SiteConfig)
└── i18n.ts              # Dictionary interfaces (HeroDict, AboutDict, etc.)
```

---

## Animation Patterns (Framer Motion)

### Scroll-based Parallax

```tsx
const { scrollY } = useScroll();
const opacity = useTransform(scrollY, [0, 600], [1, 0]);
const y = useTransform(scrollY, [0, 600], [0, 100]);

<motion.div style={{ opacity, y }}>
```

### Entrance Animations

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
```

### Scroll-triggered (whileInView)

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
>
```

### Infinite Animations (Background effects)

```tsx
<motion.div
  animate={{
    x: [-120, 160, -30],
    y: [120, -160, 60],
    scale: [1, 1.3, 0.85, 1],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

---

## Code Comments

```typescript
// WHY comments explain decisions, not what
// Example:

// Using transform instead of position because transforms
// are GPU-accelerated and don't cause layout reflow
animate={{ x: 100 }}  // Good
animate={{ left: 100 }}  // Bad - causes reflow

// SITE_CONFIG used for consistency across components
// and to enable easy updates from one location
import { SITE_CONFIG } from '@/lib/seo/config';
```

---

## Quality Checklist

Before commit:
- [ ] `pnpm run lint` passes
- [ ] `pnpm run build` passes
- [ ] No `console.log` in code
- [ ] No `any` types
- [ ] Mobile responsive tested
- [ ] No horizontal scroll on any device
- [ ] Animations smooth (60fps)
- [ ] SEO: Keywords in correct position (see `.claude/skills/seo.md`)

---

## References

**Architecture & Planning:**
- [.claude/ARCHITECTURE.md](.claude/ARCHITECTURE.md) - **i18n with localized URLs (MUST READ)**
- [.claude/ROADMAP.md](.claude/ROADMAP.md) - Project phases and progress

**Design System:**
- [.claude/DESIGN_SYSTEM.md](.claude/DESIGN_SYSTEM.md) - **UI components, tokens, patterns (MUST READ)**
- [components/ui/](components/ui/) - Reusable UI components (Button, Card, Badge, Typography, Icon)
- [tailwind.config.ts](tailwind.config.ts) - Design tokens (colors, spacing, typography, shadows)
- [lib/utils.ts](lib/utils.ts) - `cn()` utility for class merging

**SEO:**
- [.claude/skills/seo.md](.claude/skills/seo.md) - SEO management skill with keyword rules
- [lib/seo/config.ts](lib/seo/config.ts) - Site configuration and trust signals
- [lib/seo/metadata.ts](lib/seo/metadata.ts) - Page metadata with keyword-first titles

**i18n:**
- [lib/i18n/routes.ts](lib/i18n/routes.ts) - Route mapping between locales
- [types/i18n.ts](types/i18n.ts) - Dictionary TypeScript interfaces
- [lib/i18n/dictionaries/](lib/i18n/dictionaries/) - EN/PL content dictionaries
