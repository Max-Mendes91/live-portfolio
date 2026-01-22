# Development Roadmap

> Portfolio website for Max Mendes - Full-Stack Developer
> Last updated: 2026-01-22

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
| Deployment | Not deployed |

### i18n Strategy: Localized URLs

We use **different URL slugs per locale** for better SEO:

| English | Polish |
|---------|--------|
| `/en` | `/pl` |
| `/en/about` | `/pl/o-mnie` |
| `/en/contact` | `/pl/kontakt` |
| `/en/projects` | `/pl/projekty` |
| `/en/services` | `/pl/uslugi` |

See [ARCHITECTURE.md](ARCHITECTURE.md) for full details.

---

## Phase 1: Homepage Completion (Current)

### 1.1 Content Population
- [ ] Hero section - real headline, CTAs
- [ ] About Me - bio, photo, skills tags
- [ ] Work Grid - real project images + descriptions
- [ ] Services - finalize service offerings
- [ ] Process - customize steps
- [ ] FAQ - write real Q&As
- [ ] Footer - social links, contact info

### 1.2 Assets
- [ ] Professional photo for About section
- [ ] Project screenshots/mockups (4-6 projects)
- [ ] Favicon and OG images
- [ ] Logo/wordmark

### 1.3 Polish
- [ ] Mobile responsiveness audit
- [ ] Animation performance check
- [ ] Lighthouse score optimization
- [ ] Cross-browser testing

---

## Phase 2: Additional Pages

> **Note:** Using localized URLs. See [ARCHITECTURE.md](ARCHITECTURE.md) for full URL map.

### 2.1 Project Detail Pages
- [ ] `/en/projects` + `/pl/projekty` - Projects listing page
- [ ] `/en/projects/[slug]` + `/pl/projekty/[slug]` - Individual project pages
- [ ] Project data structure in constants
- [ ] Case study template component

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
- [ ] Populate real content for each service
- [ ] Add pricing/packages info (optional)

### 2.3 Contact Page
- [x] `/en/contact` + `/pl/kontakt` - Contact pages (structure done)
- [ ] Contact form component
- [ ] Form validation
- [ ] Email integration (Resend/SendGrid)
- [ ] Success/error states

### 2.4 About Page
- [x] `/en/about` + `/pl/o-mnie` - About pages (structure done)
- [ ] Populate real content

### 2.5 Legal Pages
- [ ] `/en/privacy` + `/pl/polityka-prywatnosci` - Privacy policy
- [ ] `/en/terms` + `/pl/regulamin` - Terms of service
- [ ] Cookie consent banner (if needed)

---

## Phase 3: Features & Integrations

### 3.1 Contact Form
- [ ] Form component with validation
- [ ] Backend API route `/api/contact`
- [ ] Email service integration
- [ ] Spam protection (honeypot/reCAPTCHA)
- [ ] Auto-reply email

### 3.2 Analytics
- [ ] Google Analytics 4 / Plausible
- [ ] Event tracking (CTA clicks, form submissions)
- [ ] Privacy-compliant implementation

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

## Phase 4: Deployment & Launch

### 4.1 Pre-Launch
- [ ] Environment variables setup
- [ ] Production API keys
- [ ] Domain purchased and configured
- [ ] SSL certificate

### 4.2 Hosting Setup
- [ ] Vercel project created
- [ ] Custom domain connected
- [ ] Environment variables in Vercel
- [ ] Preview deployments working

### 4.3 Launch Checklist
- [ ] All content populated
- [ ] Forms tested end-to-end
- [ ] SEO meta tags verified
- [ ] OG images working
- [ ] Sitemap submitted to Google Search Console
- [ ] Analytics verified
- [ ] Performance: Lighthouse 90+ all categories
- [ ] Accessibility audit passed

### 4.4 Post-Launch
- [ ] Monitor analytics
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

_Add notes, ideas, and decisions here as the project evolves._
