# Development Roadmap

> Portfolio website for Max Mendes - Full-Stack Developer
> Last updated: 2026-02-01

---

## Architecture Reference

> **IMPORTANT:** For i18n architecture details, see [ARCHITECTURE.md](ARCHITECTURE.md)

---

## Current Status

| Area | Status |
|------|--------|
| Framework | Next.js 15 + App Router |
| Styling | Tailwind CSS + Framer Motion |
| i18n | **Localized URLs** (see Architecture) |
| SEO | Metadata, sitemap, JSON-LD schemas |
| Deployment | ✅ Live at maxmendes.dev |

### i18n Strategy: Localized URLs

We use **different URL slugs per locale** for better SEO:

| English | Polish |
|---------|--------|
| `/en` | `/pl` |
| `/en/about` | `/pl/o-mnie` |
| `/en/contact` | `/pl/kontakt` |
| `/en/projects` | `/pl/projekty` |
| `/en/services` | `/pl/uslugi` |
| `/en/faq` | `/pl/pytania` |

See [ARCHITECTURE.md](ARCHITECTURE.md) for full details.

---

## Phase 1: Homepage Completion (Current)

### 1.1 Content Population
- [x] Hero section - real headline, CTAs, trust signals from dictionary
- [x] About Me - bio, skills tags, trust badges from dictionary
- [ ] About Me - professional photo
- [x] Work Grid - real projects only (Flowmate, Markmind) with dictionary data
- [x] Services - card-based layout with real copy (text done)
- [x] Process - steps customized
- [x] FAQ - real Q&As with FAQTeaserSection on homepage
- [x] Footer - social links from SITE_CONFIG, refined layout

### 1.2 Assets
- [ ] Professional photo for About section
- [x] Project screenshots/mockups (Flowmate, Markmind added)
- [x] Favicon and OG images (optimized for Google discovery)
- [ ] Logo/wordmark
- [ ] PWA icons (icon-192x192.png, icon-512x512.png) - **needed for Lighthouse**

### 1.3 Polish
- [x] Mobile responsiveness audit
- [x] Animation performance check (CSS animations, memoization)
- [x] Lighthouse score optimization (LCP fixes, progressive enhancement)
- [ ] Cross-browser testing
- [x] SmokeEffect visual component added
- [x] SEO titles optimized: [Keyword] - [Differentiator] | Max Mendes
- [x] WCAG AA accessibility compliance (contrast ratios)

---

## Phase 2: Additional Pages

> **Note:** Using localized URLs. See [ARCHITECTURE.md](ARCHITECTURE.md) for full URL map.

### 2.1 Project Detail Pages
- [x] `/en/projects` + `/pl/projekty` - Projects listing page (dictionary-based)
- [x] `/en/projects/[slug]` + `/pl/projekty/[slug]` - Individual project pages (FlowMate case study)
- [x] Project data structure in dictionaries (ProjectsPageDict, WorkGridProjectDict, CaseStudyPageDict)
- [x] Real projects only: Flowmate, Markmind (removed placeholders)
- [x] External URL support for projects
- [x] Case study template component (CaseStudyClient)

### 2.2 Service Pages (SEO Infrastructure Complete)
- [x] `/en/services` + `/pl/uslugi` - Service listing pages
- [x] Individual service pages (5 EN + 5 PL) with localized URLs:
  - Web Development: `/en/services/web-development` ↔ `/pl/uslugi/tworzenie-stron`
  - SaaS & Web Apps: `/en/services/saas-web-apps` ↔ `/pl/uslugi/aplikacje-webowe`
  - E-Commerce: `/en/services/ecommerce-development` ↔ `/pl/uslugi/sklepy-internetowe`
  - SEO & Performance: `/en/services/seo-performance-optimization` ↔ `/pl/uslugi/pozycjonowanie`
  - AI Integration: `/en/services/ai-integration` ↔ `/pl/uslugi/integracja-ai`
- [x] Dictionary-based SEO metadata (title, description, keywords, h1, canonical)
- [x] Hreflang tags for language alternates
- [x] JSON-LD Service schema markup
- [x] Sitemap with all service pages and hreflang
- [x] Homepage services section restructured (card-based with hero, pills, marquee)
- [x] Real content for homepage services (text done)
- [ ] Populate individual service page content
- [ ] Add pricing/packages info (optional)

### 2.3 Contact Page
- [x] `/en/contact` + `/pl/kontakt` - Contact pages (structure done)
- [x] Contact form component
- [x] Form validation
- [x] Email integration (Resend - Gmail sandbox mode)
- [x] Success/error states

### 2.4 About Page (SEO & Content Complete)
- [x] `/en/about` + `/pl/o-mnie` - About pages (structure done)
- [x] Dictionary-based SEO metadata (title, description, keywords, h1, ogTitle)
- [x] Hreflang tags for language alternates
- [x] JSON-LD Person schema markup
- [x] Breadcrumb schema markup
- [x] Social links from SITE_CONFIG (GitHub, LinkedIn, Twitter, Instagram)
- [x] Real content populated (bio, experience, skills - text done)

### 2.5 FAQ Pages (Complete)
- [x] `/en/faq` + `/pl/pytania` - FAQ pages with localized routes
- [x] FAQTeaserSection component on homepage
- [x] Dictionary-based FAQ content (EN/PL)
- [x] Added to sitemap with hreflang

### 2.6 Legal Pages (Complete)
- [x] `/en/privacy` + `/pl/polityka-prywatnosci` - Privacy policy
- [x] `/en/terms` + `/pl/regulamin` - Terms of service
- [x] Cookie consent banner (GDPR-compliant)

---

## Phase 3: Features & Integrations

### 3.1 Contact Form
- [x] Form component with validation
- [x] Backend API route `/api/contact`
- [x] Email service integration (Resend)
- [ ] Spam protection (honeypot/reCAPTCHA)
- [ ] Auto-reply email

### 3.2 Analytics (Complete)
- [x] Google Analytics 4 with gtag
- [x] Route change tracking (SPA navigation)
- [x] GDPR-compliant implementation (cookie consent)

### 3.3 CMS Integration (Optional)
- [ ] Evaluate: Sanity / Contentful / Notion
- [ ] Projects from CMS
- [ ] Blog posts (if adding blog)

### 3.4 Blog (Optional - Future)
- [ ] `/[locale]/blog` - Blog listing
- [ ] `/[locale]/blog/[slug]` - Blog posts
- [ ] MDX support
- [ ] RSS feed

---

## Phase 4: Deployment & Launch ✅

### 4.1 Pre-Launch (Complete)
- [x] Environment variables setup
- [x] Production API keys (GA4)
- [x] Domain purchased and configured (maxmendes.dev)
- [x] SSL certificate (via Vercel)

### 4.2 Hosting Setup (Complete)
- [x] Vercel project created
- [x] Custom domain connected (maxmendes.dev)
- [x] Environment variables in Vercel
- [x] Preview deployments working

### 4.3 Launch Checklist (Mostly Complete)
- [ ] All content populated (projects need case studies)
- [ ] Forms tested end-to-end (contact form pending)
- [x] SEO meta tags verified
- [x] OG images working
- [x] Sitemap submitted to Google Search Console
- [x] Analytics verified (GA4 working)
- [x] Performance: Lighthouse 90+ all categories
- [x] Accessibility audit passed (WCAG AA)

### 4.4 Post-Launch
- [x] Monitor analytics (GA4 dashboard)
- [ ] Set up uptime monitoring
- [ ] Backup strategy
- [ ] Content update workflow

---

## Phase 5: Enhancements (Future)

### 5.1 Performance
- [ ] Image CDN (if not using Vercel)
- [ ] Edge caching strategy
- [ ] Bundle size optimization

### 5.2 Features
- [ ] Dark/light mode toggle
- [ ] Project filtering/search
- [ ] Testimonials section
- [ ] Client logos marquee
- [ ] Blog with MDX

### 5.3 Integrations
- [ ] Cal.com / Calendly for booking
- [ ] Notion for project management
- [ ] Slack notifications for form submissions

---

## Tech Debt & Maintenance

- [ ] Update dependencies quarterly
- [ ] Review and update SEO keywords
- [ ] Refresh project portfolio annually
- [ ] Monitor Core Web Vitals

---

## Quick Reference

**Start dev server:**
```bash
pnpm run dev
```

**Build & check:**
```bash
pnpm run lint && pnpm run build
```

**Deploy:**
```bash
git push origin main  # Auto-deploys via Vercel
```

---

## Notes

### Jan 23-24, 2026
- **Route Groups**: Refactored to Next.js route groups `(en)` and `(pl)` for cleaner organization
- **SEO Formula**: All titles follow `[Keyword] - [Differentiator] | Max Mendes`
- **Trust Signals**: Moved from hardcoded constants to dictionary (hero + about sections)
- **FAQ Pages**: Added `/en/faq` + `/pl/pytania` with localized content
- **Projects**: Cleaned up to real projects only (Flowmate, Markmind), dictionary-based
- **UI Polish**: Added SmokeEffect component, refined Hero/AboutMe/Footer/WorkGrid
- **Handoff Skill**: Added `.claude/skills/handoff.md` for session continuity
- **Lighthouse**: Near-perfect score, only missing PWA icons (404)

### Jan 24-30, 2026
- **🚀 DEPLOYED**: Site live at maxmendes.dev with custom domain
- **Performance Overhaul**:
  - LCP optimizations (fetchPriority, preconnect, progressive enhancement)
  - Converted Framer Motion whileInView to CSS animations
  - Mobile LCP fix (skip intro for bots/Lighthouse)
  - Scroll animations optimized with memoization
  - PageSpeed Insights metrics optimized
- **Analytics**: Google Analytics 4 with GDPR-compliant cookie consent
- **Legal Pages**: Privacy Policy + Terms of Service (EN/PL)
- **Accessibility**: WCAG AA contrast compliance in CodeSnippet
- **SEO Fixes**:
  - Favicon optimized for Google discovery
  - Removed unsupported `Host:` directive from robots.txt
  - Proper gtag initialization with route change tracking
- **Bug Fixes**:
  - Hero animation hydration issue resolved
  - Intro overlay flash on revisit fixed
  - Intro animation shows only once per session

### Jan 31 - Feb 1, 2026
- **SEO**: Updated skill documentation to reflect dictionary-based keywords pattern
- **Projects**: Added project images and portfolio entry for Flowmate/Markmind
- **Projects**: Added shortDescription field for homepage project hooks
- **Code Quality**: Added knip config, removed dead code
- **Bug Fix**: Fixed intro flash prevention for returning visitors on desktop

### Feb 2, 2026
- **FlowMate Case Study**: Complete case study pages for EN/PL with:
  - Dictionary-based content (CaseStudyPageDict)
  - SEO metadata (title, description, keywords, h1)
  - JSON-LD TechArticle + HowTo schemas
  - generateStaticParams for static generation
  - Breadcrumb navigation
- **SEO Compliance Fix**: Optimized FlowMate titles (< 60 chars) and descriptions (150-160 chars)
- **Cleanup**: Removed redundant `/pl/uslugi/[slug]` folder (was generating wrong English URLs)
- **Audit**: Full page compliance audit - 24/28 pages compliant (4 legal pages missing JSON-LD)
