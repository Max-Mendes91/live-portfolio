# SEO Management Skill

This skill helps manage SEO for the Max Mendes portfolio website targeting Poland (Częstochowa, Kraków, Warszawa) and international markets (UK, US).

## Quick Reference

**Site Owner:** Max Mendes
**Primary Language:** English (default at `/`)
**Secondary Language:** Polish (at `/pl`)
**Target Markets:** Poland, UK, US
**Target Cities:** Częstochowa, Kraków, Warszawa, Katowice, Wrocław

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

### 3. Keyword Rotation (Avoid Stuffing)
Use synonyms to avoid repeating the same keyword:

| Instead of repeating | Rotate with |
|---------------------|-------------|
| web developer | programista, twórca stron, developer |
| strony internetowe | strony www, witryny, serwisy www |
| tworzenie | budowa, projektowanie, wykonanie |

### 4. Footer SEO Pattern
Include location keywords in footer:
```
Web Developer Czestochowa · Programista Krakow · Tworzenie Stron Warszawa · React Developer Poland
```

### 5. Trust Signals Data
Available in `lib/seo/config.ts`:
- `TRUST_SIGNALS` - experience badges (5+ years, 20+ projects, etc.)
- `USP_BADGES` - unique selling points (Full-Stack, Remote-First, etc.)

Use these in About section or wherever social proof is needed.

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
Add new keywords to the keyword database.

```
/seo keywords add <language> <category> "<keyword>"
```

**Languages:** `en`, `pl`
**Categories:** `core`, `service`, `location`, `intent`, `synonym`

**Actions:**
- Update `lib/seo/keywords.ts` with new keyword
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
Manage local SEO for Polish cities.

```
/seo local <city>
```

**Cities:** `czestochowa`, `krakow`, `warszawa`, `katowice`, `wroclaw`

**Actions:**
- Generate city-specific keywords
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
<link rel="alternate" hreflang="en" href="https://maxmendes.dev/" />
<link rel="alternate" hreflang="en-US" href="https://maxmendes.dev/" />
<link rel="alternate" hreflang="en-GB" href="https://maxmendes.dev/" />
<link rel="alternate" hreflang="pl" href="https://maxmendes.dev/pl" />
<link rel="alternate" hreflang="x-default" href="https://maxmendes.dev/" />
```

---

## File Locations

| File | Purpose |
|------|---------|
| `lib/seo/config.ts` | Site configuration |
| `lib/seo/keywords.ts` | Keyword database |
| `lib/seo/schemas.ts` | JSON-LD generators |
| `lib/seo/metadata.ts` | Metadata generators |
| `components/seo/JsonLd.tsx` | Schema injection |
| `app/sitemap.ts` | Sitemap generation |
| `app/robots.ts` | Robots.txt |
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
- [ ] H1 contains primary keyword
- [ ] H2-H6 hierarchy correct
- [ ] Keywords in first 100 words
- [ ] Alt tags on all images
- [ ] Internal links present
- [ ] External links to authority sites
- [ ] Mobile-friendly design
- [ ] Fast page load (< 3s)

### Content SEO
- [ ] Unique content on each page
- [ ] Keywords used naturally (no stuffing)
- [ ] Synonyms and variations included
- [ ] FAQ section with rich content
- [ ] Call-to-actions present
- [ ] Contact information visible

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
User: /seo keywords add pl location "strony internetowe Gdańsk"
Claude: Adds keyword to Polish location keywords in lib/seo/keywords.ts
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
