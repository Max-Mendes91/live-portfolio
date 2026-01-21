# i18n Migration Plan: `[locale]` Dynamic Segment

## Summary

Migrate from duplicated route structure (`/`, `/pl`, `/pl/kontakt`) to unified `[locale]` pattern (`/en`, `/pl`, `/en/contact`, `/pl/contact`) with components consuming dictionary props.

## Current Problems

1. **Dictionaries exist but are NOT used** - `en.json` and `pl.json` have content but components ignore them
2. **Duplicate components** - `Hero.tsx` + `HeroPL.tsx` are 95% identical
3. **Hardcoded text** in all 8 section components
4. **Different URL paths** per locale (`/contact` vs `/pl/kontakt`)
5. **No middleware** for locale detection

## Workflow: Section by Section

We will work **one section at a time**:
1. Refactor section to use dictionary props
2. Update EN/PL content for that section
3. Verify it works
4. Move to next section

**Order of sections:**
1. Hero (content already done today - just refactor to use dictionary)
2. AboutMe
3. ServiceSection
4. ProcessSection
5. FAQSection
6. WorkGrid
7. FooterSection
8. Navbar
9. Contact page
10. Projects page
11. Services pages

## Target URL Structure

| Current EN | Current PL | New EN | New PL |
|------------|------------|--------|--------|
| `/` | `/pl` | `/en` | `/pl` |
| `/contact` | `/pl/kontakt` | `/en/contact` | `/pl/contact` |
| `/projects` | `/pl/projekty` | `/en/projects` | `/pl/projects` |
| `/services/[slug]` | `/pl/uslugi/[slug]` | `/en/services/[slug]` | `/pl/services/[slug]` |

## New File Structure

```
app/
├── [locale]/
│   ├── layout.tsx           # Unified layout (lang={locale})
│   ├── page.tsx             # Server component (loads dict)
│   ├── HomeClient.tsx       # Client component (animations)
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── services/
│       └── [slug]/
│           └── page.tsx
├── globals.css
├── robots.ts
├── sitemap.ts
└── manifest.ts
middleware.ts                 # NEW: locale detection/redirect
```

---

## Implementation Phases

### Phase 1: Foundation (No Breaking Changes)

**1.1 Create type definitions**
- File: `types/i18n.ts`
- Define `Dictionary`, `SupportedLocale`, section-specific types

**1.2 Extend dictionaries with missing keys**
- Files: `lib/i18n/dictionaries/en.json`, `pl.json`
- Add: `scrollDown`, `toSeeProjects`, `workGrid`, `contact` sections, `projects` section

**1.3 Update i18n config**
- File: `lib/i18n/config.ts`
- Add: `isValidLocale()` helper, `localeNames` object

### Phase 2: Create Middleware

**2.1 Create middleware**
- File: `middleware.ts` (NEW)
- Redirects `/` → `/en`, `/contact` → `/en/contact`
- Detects browser language from `Accept-Language` header
- Skips static files and API routes

### Phase 3: Create `[locale]` Structure

**3.1 Create locale layout**
- File: `app/[locale]/layout.tsx`
- Sets `<html lang={locale}>`
- Generates metadata per locale
- Has `generateStaticParams()` for `['en', 'pl']`

**3.2 Create unified home page**
- File: `app/[locale]/page.tsx` (server component)
- File: `app/[locale]/HomeClient.tsx` (client component)
- Loads dictionary, passes to components

**3.3 Create unified subpages**
- `app/[locale]/contact/page.tsx`
- `app/[locale]/projects/page.tsx`
- `app/[locale]/services/[slug]/page.tsx`

### Phase 4: Update Components (Section by Section)

For each section, we will:
1. Add dictionary props to component
2. Update dictionary content (EN + PL)
3. Test and verify
4. Move to next section

**4.1 Hero** (content already done - just needs refactor)
- Merge `Hero.tsx` + `HeroPL.tsx` into single component
- Move current hardcoded text to dictionaries
- Delete `HeroPL.tsx`

**4.2 AboutMe** → refactor + update content
**4.3 ServiceSection** → refactor + update content
**4.4 ProcessSection** → refactor + update content
**4.5 FAQSection** → refactor + update content
**4.6 WorkGrid** → refactor + update content
**4.7 FooterSection** → refactor + update content
**4.8 Navbar** → refactor + update content

### Phase 5: Update SEO

**5.1 Update hreflang config**
- File: `lib/seo/config.ts`
- Change paths: `/` → `/en`, `/pl` stays `/pl`

**5.2 Update metadata generation**
- File: `lib/seo/metadata.ts`
- All paths use `/${locale}/...` format

**5.3 Update sitemap**
- File: `app/sitemap.ts`
- Generate entries for both locales

### Phase 6: Cleanup

**Delete old files:**
```
app/layout.tsx          → replaced by app/[locale]/layout.tsx
app/page.tsx            → replaced by app/[locale]/page.tsx
app/contact/            → replaced by app/[locale]/contact/
app/projects/           → replaced by app/[locale]/projects/
app/services/           → replaced by app/[locale]/services/
app/pl/                 → entire folder (merged into [locale])
components/sections/HeroPL.tsx → merged into Hero.tsx
```

---

## Critical Files to Modify

| File | Action |
|------|--------|
| `lib/i18n/config.ts` | Extend with helpers |
| `lib/i18n/dictionaries/en.json` | Add missing keys |
| `lib/i18n/dictionaries/pl.json` | Add missing keys |
| `types/i18n.ts` | Create (NEW) |
| `middleware.ts` | Create (NEW) |
| `app/[locale]/layout.tsx` | Create (NEW) |
| `app/[locale]/page.tsx` | Create (NEW) |
| `components/sections/Hero.tsx` | Add dictionary props |
| `components/sections/*.tsx` | Add dictionary props (6 files) |
| `components/Navbar.tsx` | Add dictionary props |
| `lib/seo/config.ts` | Update hreflang |
| `lib/seo/metadata.ts` | Update paths |
| `app/sitemap.ts` | Update for new structure |

---

## Verification

After each phase:
```bash
npm run lint
npm run build
```

Final verification:
```bash
npm run build && npm run start

# Test routes
curl -I localhost:3000/           # → redirects to /en
curl -I localhost:3000/en         # → 200
curl -I localhost:3000/pl         # → 200
curl -I localhost:3000/en/contact # → 200
curl -I localhost:3000/pl/contact # → 200

# Verify in browser:
# - <html lang="en"> or <html lang="pl">
# - hreflang tags present
# - All text displays correctly per locale
# - Language switcher works
```

---

## Estimated Scope

- **Files to create:** 8
- **Files to modify:** 15
- **Files to delete:** 12
- **Dictionary keys to add:** ~30

## Risk Mitigation

1. Implement phase by phase with verification
2. Keep old routes working until new ones are verified
3. Test both locales after each component update
4. Run full build after each phase
