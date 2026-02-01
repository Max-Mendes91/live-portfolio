# SEO Management Skill

> **Last updated:** 2026-02-01

This skill helps manage SEO for the Max Mendes portfolio website targeting Poland (Częstochowa, Śląskie) and international markets (UK, US, EU).

## Quick Reference

**Site Owner:** Max Mendes
**Primary Language:** English (at `/en`)
**Secondary Language:** Polish (at `/pl`)
**Routing:** Localized URLs (see [ARCHITECTURE.md](../ARCHITECTURE.md))
**Target Markets:**
- **Polish:** Local (Częstochowa), Regional (Śląskie), National (Polska)
- **International:** UK, US, EU (Poland, United Kingdom, United States, European Union)
**areaServed (Polish):** Częstochowa, Śląskie, Polska
**areaServed (English):** Poland, United Kingdom, United States, European Union

> **IMPORTANT:** All SEO metadata MUST use the dictionary-based pattern. See [CLAUDE.md](../../CLAUDE.md#seo-dictionary-pattern-mandatory-for-all-pages)

---

## SEO Rules (MANDATORY)

> These rules are adapted from professional SEO advice. Follow them strictly.

### 1. Title Tag Formula
```
[Primary Keyword] | [Brand Name] - [Trust Signal/Specialty]
```

**Examples:**
```
EN: Web Developer Poland | Max Mendes - React & Next.js Full Stack Specialist
PL: Programista Czestochowa | Max Mendes - Tworzenie Stron Internetowych
```

**Rules:**
- Primary keyword MUST be FIRST
- Keep under 60 characters
- Include brand name
- Add specialty/trust signal at end

### 2. Meta Description Formula
```
[Keyword in FIRST words]. [Value proposition]. [CTA with phone]. [Trust signal].
```

**Examples:**
```
EN: Web developer in Poland serving UK & US clients. Modern websites using React, Next.js. Free quote: +48 502 742 941
PL: Programista Czestochowa i okolice. Tworzenie stron internetowych React, Next.js. Zadzwon: 502 742 941
```

**Rules:**
- Keyword MUST appear in FIRST words
- Keep under 160 characters
- Include phone number for direct action
- Add location ("i okolice" = "and surrounding areas")

### 3. Heading Hierarchy (H1-H6) Rules

**Structure:**
```
H1 - One per page, contains primary keyword
└── H2 - Main sections (2-6 per page)
    └── H3 - Subsections within H2
        └── H4-H6 - Rarely needed, deep nesting
```

**Rules:**
- **ONE H1 per page** - Never multiple H1s
- **H1 must contain primary keyword** - Naturally, not forced
- **Never skip levels** - Don't go H1 → H3 (must have H2 between)
- **H2s are your main sections** - Services, About, FAQ, etc.
- **H3s support H2s** - Individual service items, FAQ questions

**Example - Homepage:**
```html
<h1>Web Developer Poland | Max Mendes</h1>           <!-- Primary keyword -->
  <h2>Services</h2>                                   <!-- Section -->
    <h3>Full Stack Development</h3>                   <!-- Service item -->
    <h3>E-Commerce Solutions</h3>
  <h2>About Me</h2>
  <h2>Frequently Asked Questions</h2>
    <h3>How much does a website cost?</h3>            <!-- FAQ item -->
```

**Example - Service Page:**
```html
<h1>Web Development Services in Poland</h1>
  <h2>What I Offer</h2>
    <h3>React & Next.js Applications</h3>
    <h3>E-Commerce Stores</h3>
  <h2>My Process</h2>
  <h2>Pricing</h2>
```

---

### 4. Keyword Stuffing Rules (AVOID)

**What is stuffing?**
Repeating the same keyword unnaturally. Google penalizes this.

**Bad Example (stuffed):**
```
Web developer Częstochowa. I'm a web developer in Częstochowa.
Looking for a web developer? This Częstochowa web developer...
```

**Good Example (natural with synonyms):**
```
Web developer based in Częstochowa. I'm a programmer specializing
in modern websites. Looking for a developer? I create custom
web solutions for businesses in Poland and beyond.
```

**Keyword Density Rule:**
- Primary keyword: **1-2%** of content (1-2 times per 100 words)
- Use **synonyms and variations** to reach 3-4% total keyword coverage

**Rotation Table:**

| Instead of repeating | Rotate with |
|---------------------|-------------|
| web developer | programista, twórca stron, developer, programmer |
| strony internetowe | strony www, witryny, serwisy www, witryny internetowe |
| tworzenie | budowa, projektowanie, wykonanie, realizacja |
| Częstochowa | miasto, region, Śląskie, okolice |

**Per-Section Limits:**
- Hero: Primary keyword 1x in H1, 1x in description
- About: 1-2 keyword mentions
- Services: Keyword in section title, then use variations
- FAQ: Use keyword in 1-2 questions naturally
- Footer: Can list location keywords (this is acceptable)

---

### 5. Internal Linking (Deep Links) Rules

**Why internal links matter:**
- Passes SEO authority between pages
- Helps Google discover all pages
- Improves user navigation
- Reduces bounce rate

**Rules:**

1. **Every page should link to 2-5 other internal pages**
2. **Use descriptive anchor text** (not "click here")
3. **Link to relevant content** (services → related projects)
4. **Footer links don't count** - Need contextual links in content

**Good Anchor Text:**
```html
<!-- ✅ DO: Descriptive anchor text -->
<a href="/en/services">web development services</a>
<a href="/pl/uslugi">usługi tworzenia stron</a>

<!-- ❌ DON'T: Generic anchor text -->
<a href="/en/services">click here</a>
<a href="/en/services">learn more</a>
```

**Link Structure:**
```
Homepage
├── links to → Services, Projects, About, Contact
│
Services Page
├── links to → Individual service pages
├── links to → Related projects
├── links to → Contact (CTA)
│
Project Page
├── links to → Related services used
├── links to → Similar projects
├── links to → Contact (CTA)
```

**Implementation Locations:**
- **Hero**: CTA buttons → Services, Contact
- **About**: "View my work" → Projects
- **Services**: Each service → Service detail page
- **Projects**: "Built with" → Related service
- **FAQ**: Answers can link to relevant pages
- **Footer**: Navigation links (these are standard, not deep links)

**Deep Link Examples:**
```tsx
// In About section
<p>
  I specialize in <Link href="/en/services/web-development">
  custom web development</Link> and
  <Link href="/en/services/ecommerce">e-commerce solutions</Link>.
</p>

// In FAQ answer
<p>
  Yes, I offer <Link href="/en/services/seo">SEO optimization</Link>
  as part of my services.
</p>

// In Project card
<p>
  Built with <Link href="/en/services/web-development">Next.js</Link>
</p>
```

---

### 6. Footer SEO Pattern

Include location keywords in footer (this is acceptable, not stuffing):

```
Web Developer Czestochowa · Programista Krakow · Tworzenie Stron Warszawa · React Developer Poland
```

**Why footer keywords are OK:**
- Users expect location info in footer
- Google understands footer patterns
- Helps with local SEO for multiple cities

---

### 7. Trust Signals Data

Available in `lib/seo/config.ts`:
- `TRUST_SIGNALS` - experience badges (2+ years, UK/US timezone, Fluent English)
- `USP_BADGES` - unique selling points (Full-Stack, Remote-First, etc.)

Use these in Hero section and wherever social proof is needed.

---

## Commands

### 1. SEO Status Check
Check current SEO implementation status.

```
/seo status
```

**Actions:**
- Read `app/layout.tsx` and check metadata configuration
- Verify JSON-LD schemas in `lib/seo/schemas.ts`
- Check sitemap.ts and robots.ts exist
- Verify i18n dictionaries have SEO content
- Report missing or incomplete SEO elements

### 2. Add Keywords
Add new keywords to page SEO in dictionaries.

```
/seo keywords add <language> <page> "<keyword>"
```

**Languages:** `en`, `pl`
**Pages:** `home`, `about`, `contact`, `projects`, `services`, or specific service page IDs

> **Note:** Keywords are stored in `lib/i18n/dictionaries/{lang}.json` under each page's `seo.keywords` array. The keyword reference list below is for guidance.

**Actions:**
- Add keyword to the relevant dictionary (`en.json` or `pl.json`) in `seo.keywords` array
- Suggest content updates to include keyword naturally
- Check for keyword stuffing risks

### 3. Generate Meta Description
Create SEO-optimized meta descriptions.

```
/seo meta <page> <language>
```

**Pages:** `home`, `services`, `web-development`, `web-design`, `seo`, `ecommerce`, `portfolio`, `contact`

**Actions:**
- Generate description starting with primary keyword
- Keep under 160 characters
- Include call-to-action
- Provide both EN and PL versions

### 4. Generate JSON-LD
Create or update structured data for a page.

```
/seo schema <type>
```

**Types:** `person`, `localbusiness`, `organization`, `website`, `service`, `faq`, `breadcrumb`

**Actions:**
- Generate complete JSON-LD schema
- Update `lib/seo/schemas.ts`
- Validate against schema.org spec

### 5. Optimize Content
Analyze and optimize content for SEO.

```
/seo optimize <section>
```

**Sections:** `hero`, `about`, `services`, `process`, `faq`, `footer`

**Actions:**
- Analyze current content for keyword density
- Suggest improvements for keyword inclusion
- Check heading hierarchy (H1, H2, H3)
- Verify alt tags on images
- Ensure internal linking opportunities

### 6. Competitor Analysis
Analyze competitor SEO for insights.

```
/seo analyze <url>
```

**Actions:**
- Fetch competitor page metadata
- Extract keywords and descriptions
- Analyze JSON-LD schemas
- Compare with our implementation
- Suggest improvements

### 7. Local SEO
Manage local SEO for Polish market.

```
/seo local <area>
```

**Areas:** `czestochowa`, `slaskie`, `polska`

> **Note:** We focus on Częstochowa (local), Śląskie (regional), and Polska (national). Do NOT add other cities like Katowice, Kraków, etc. - these were removed from our SEO strategy.

**Actions:**
- Generate area-specific keywords
- Create location schema markup
- Suggest local content additions
- Update geo meta tags

### 8. i18n Content
Manage bilingual content.

```
/seo i18n <action> <section>
```

**Actions:** `check`, `translate`, `sync`

**Check:** Verify both EN and PL versions exist
**Translate:** Generate translation for missing content
**Sync:** Ensure consistency between versions

### 9. Sitemap Management
Update sitemap entries.

```
/seo sitemap <action>
```

**Actions:** `add`, `remove`, `regenerate`, `check`

---

## Keyword Database

### English Keywords

#### Core
- web developer Poland
- freelance web developer
- React developer for hire
- Next.js developer
- full stack developer

#### Synonyms
- website creator
- website builder
- hire web developer
- web developer for hire
- web designer for hire
- custom website development
- website maker
- build website
- create website
- website development services
- professional web developer
- experienced web developer
- affordable web developer
- remote web developer

#### Location-Specific
- web developer Częstochowa Poland
- web developer Kraków
- web developer Warsaw
- Polish web developer
- Eastern European developer
- offshore web developer Poland

#### Service-Specific
- e-commerce developer
- online store development
- SEO specialist
- SEO optimization services
- UI/UX designer
- React.js development
- Next.js development
- Node.js developer
- JavaScript developer
- TypeScript developer
- frontend developer
- backend developer

#### Intent
- looking for web developer
- need a website
- website quote
- how much does a website cost
- affordable web development
- professional website services
- custom web solutions
- website redesign
- website maintenance

---

### Polish Keywords

#### Core
- web developer Częstochowa
- programista Częstochowa
- tworzenie stron internetowych
- strony internetowe Częstochowa
- pozycjonowanie stron

#### Synonyms
- tworzenie stron www
- budowa stron internetowych
- wykonanie strony www
- projektowanie stron www
- projektant stron internetowych
- firma tworząca strony
- agencja webowa
- webmaster
- strony www na zamówienie
- profesjonalne strony internetowe
- nowoczesne strony www
- responsywne strony internetowe
- strony mobilne
- kreator stron www
- twórca stron internetowych

#### City-Specific
- strony internetowe Kraków
- strony internetowe Warszawa
- strony internetowe Katowice
- strony internetowe Wrocław
- web developer Śląsk
- programista Śląskie
- agencja webowa Kraków
- tworzenie stron Warszawa

#### Service-Specific
- sklepy internetowe
- sklepy online
- e-commerce
- pozycjonowanie SEO
- optymalizacja stron
- audyt SEO
- projektowanie UI/UX
- aplikacje webowe
- aplikacje React
- programista React
- developer Next.js

#### Intent
- zatrudnij programistę
- szukam web developera
- potrzebuję strony internetowej
- wycena strony www
- ile kosztuje strona internetowa
- tania strona internetowa
- profesjonalna strona www
- darmowa wycena strony

---

## SEO Configuration

### Site Config Location
`lib/seo/config.ts`

### Owner Information
```typescript
{
  name: 'Max Mendes',
  email: 'maxmendesnoah1991@gmail.com',
  phone: '+48 502 742 941',
  address: 'Śląska 30/8, 42-200 Częstochowa, Poland',
  geo: { lat: 50.8118, lng: 19.1203 },
  social: {
    twitter: '@maxmendes91',
    linkedin: 'max-mendes-776ab5212',
    github: 'Max-Mendes91',
    instagram: 'max_mendes91'
  }
}
```

### hreflang Configuration
```html
<link rel="alternate" hreflang="en" href="https://example.com/en" />
<link rel="alternate" hreflang="en-US" href="https://example.com/en" />
<link rel="alternate" hreflang="en-GB" href="https://example.com/en" />
<link rel="alternate" hreflang="pl" href="https://example.com/pl" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en" />
```

> Note: Domain is placeholder. Update when domain is chosen.

---

## File Locations

| File | Purpose |
|------|---------|
| `lib/seo/config.ts` | Site configuration, trust signals |
| `lib/seo/schemas.ts` | JSON-LD generators |
| `lib/seo/metadata.ts` | Metadata generators |
| `components/seo/JsonLd.tsx` | Schema injection |
| `app/sitemap.ts` | Sitemap generation |
| `app/robots.ts` | Robots.txt |
| `app/[locale]/layout.tsx` | Locale-specific layout |
| `middleware.ts` | Locale detection & redirects |
| `types/i18n.ts` | Dictionary TypeScript interfaces |
| `lib/i18n/dictionaries/en.json` | English content |
| `lib/i18n/dictionaries/pl.json` | Polish content |

---

## SEO Checklist

### Technical SEO
- [x] Meta title with primary keyword FIRST (under 60 chars)
- [x] Meta description starting with keyword FIRST (under 160 chars)
- [x] Phone number in meta description for direct CTA
- [ ] Canonical URL set
- [ ] hreflang tags for EN/PL
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] JSON-LD schemas (Person, LocalBusiness, Organization)
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Geo meta tags set

### On-Page SEO
- [ ] H1 contains primary keyword (ONE per page)
- [ ] H2-H6 hierarchy correct (never skip levels)
- [ ] No multiple H1s on same page
- [ ] Keywords in first 100 words
- [ ] Alt tags on all images (with keywords where natural)
- [ ] Internal/deep links present (2-5 per page)
- [ ] Descriptive anchor text (not "click here")
- [ ] External links to authority sites (1-2 per page)
- [ ] Mobile-friendly design
- [ ] Fast page load (< 3s)

### Content SEO
- [ ] Unique content on each page
- [ ] Keywords used naturally (1-2% density max)
- [ ] Synonyms and variations included (rotate keywords)
- [ ] No keyword stuffing (use rotation table)
- [ ] FAQ section with rich content
- [ ] Call-to-actions present
- [ ] Contact information visible
- [ ] Deep links to related content in body text

### Local SEO
- [x] NAP (Name, Address, Phone) consistent (via SITE_CONFIG)
- [x] City names in content (footer keywords)
- [ ] LocalBusiness schema
- [x] Geo coordinates in meta
- [x] Service areas defined (Poland, UK, US, Europe)

---

## Validation Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## Usage Examples

### Check SEO Status
```
User: /seo status
Claude: Analyzes current SEO and reports missing elements
```

### Add New Keyword
```
User: /seo keywords add pl home "strony internetowe Gdańsk"
Claude: Adds keyword to Polish homepage seo.keywords in lib/i18n/dictionaries/pl.json
```

### Generate Service Page Meta
```
User: /seo meta web-development en
Claude: Generates optimized meta description for web development page
```

### Optimize Hero Section
```
User: /seo optimize hero
Claude: Analyzes Hero.tsx and suggests keyword improvements
```

### Analyze Competitor
```
User: /seo analyze https://simplyhtml.pl
Claude: Fetches and analyzes competitor SEO, suggests improvements
```
