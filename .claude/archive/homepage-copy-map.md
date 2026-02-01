# Homepage Copy Map — Strategic Rewrite

## Overview

**Objective:** Remove defensive positioning, distribute keywords intelligently, make each section build trust progressively.

**Core Differentiators (from competitor analysis):**
- Only React/Next.js developer in Częstochowa
- Only local SaaS/MVP capability
- Only bilingual (EN/PL) targeting UK/US
- Direct access (no agency layers)

**Keyword Distribution Strategy:**
| Keyword Group | Primary Section | Secondary Mention |
|---------------|-----------------|-------------------|
| "freelance developer", "for hire" | Hero | — |
| "Poland", "Częstochowa" | Hero, Footer | — |
| "UK/US", "international" | Hero | Footer |
| "React", "Next.js" | Services hero | Tech marquee |
| "full-stack" | Hero | About page (not homepage) |
| "SaaS", "web apps" | SaaS card only | — |
| "e-commerce" | E-commerce card only | — |
| "direct access", "one developer" | About | — |
| "production-ready" | Process | — |

---

## Section 1: Hero

**JOB:** Hook + locate. Who, what, where. First impression.

**CURRENT:**
```json
"headline": "Freelance Developer for Hire",
"subheadline": "Websites. E-commerce. Web Apps. SaaS.",
"description": "I'm Max, a full-stack developer based in Poland. I build websites, e-commerce stores, web apps, and SaaS products. I handle everything — from research and prototyping to deployment. UK and US clients welcome."
```

**PROBLEMS:**
- "I build... I handle... I..." — self-focused
- "full-stack" repeated later in About
- Lists services twice (subheadline + description)

**PROPOSED:**
```json
"headline": "Freelance Developer for Hire",
"subheadline": "Websites. E-commerce. Web Apps. SaaS.",
"description": "Max Mendes — developer based in Poland, available for projects across Europe, UK, and US. From first conversation to live deployment, one person handles your entire project."
```

**CHANGES:**
- Third person intro (less "I I I")
- "Available for" = truthful positioning without claiming existing clients
- Location + international reach upfront
- "One person handles" = benefit, not "I do everything"
- Removed "full-stack" (save for about page)
- Removed service list from description (already in subheadline)

**KEYWORDS USED:** freelance developer, Poland, UK, US, deployment
**LINKS:** None

**TRUST SIGNALS UPDATE:**
```json
"trustSignals": [
  { "label": "2+ Years Experience", "icon": "trophy" },
  { "label": "EU Timezone — Overlaps UK & US", "icon": "globe" },
  { "label": "Fluent EN / PT / ES", "icon": "languages" }
]
```
**Why:** 
- "UK/US Friendly Timezone" → "EU Timezone — Overlaps UK & US" = more specific, shows you understand the value
- "Fluent English" → "Fluent EN / PT / ES" = differentiator, signals EU market capability, honest about range

---

## Section 2: About (Homepage Preview)

**JOB:** Your approach → their benefit. Build trust through philosophy.

**CURRENT:**
```json
"headline": "Why Work With Me?",
"subheadline": "I don't just code what you ask for—I help figure out what actually needs to be built first.",
"description": "Most developers jump straight into development. I spend time understanding the problem: what the site or app needs to achieve, who it's for, and how competitors approach it. Then I prototype, plan scope, and build something that actually solves the problem.",
"description2": "You work directly with me—not an agency team that hands off between designers, developers, and project managers. One person. Full ownership. From research through deployment. That means faster decisions, clearer communication, and code that reflects what you actually need.",
"trustBadges": [
  "500+ Hours Building Production Software",
  "One Developer, Complete Ownership",
  "Modern Architecture, Zero Technical Debt"
]
```

**PROBLEMS:**
- "Why Work With Me?" = self-focused headline
- "Most developers jump straight..." = attacking others
- "not an agency team" = defensive
- "One Developer" badge repeats description2
- "Zero Technical Debt" = jargon clients don't care about

**PROPOSED:**
```json
"headline": "Built Around How Your Business Works",
"subheadline": "Before any code gets written, I make sure we're solving the right problem.",
"description": "Every project starts with understanding: what success looks like for you, who your users are, what constraints matter. Then prototyping, scoping, and building something that fits your business — not a template you'll outgrow.",
"description2": "You get direct access throughout the project. Questions get answered in hours, not days. Decisions happen fast. And at the end, you own code that actually reflects what you needed.",
"trustBadges": [
  "500+ Hours on Production Software",
  "Direct Access, Fast Decisions",
  "Code You Own, Built to Scale"
]
```

**CHANGES:**
- Headline: client-focused ("your business")
- Removed comparison to "most developers"
- Removed "not an agency" — reframed as "direct access"
- Badges: outcomes, not process descriptors
- "Code You Own" = resonates with clients burned by agencies

**KEYWORDS USED:** direct access, code, scale
**LINKS:** "Learn More About Me" → `/en/about` (unchanged)

---

## Section 3: Services Hero

**JOB:** Introduce capabilities. ONE mention of tech stack.

**CURRENT:**
```json
"title": "Production web software. No templates. No WordPress.",
"subtitle": "I build production web apps with React and Next.js—not prototypes, not templates. One developer. Full stack. Real code."
```

**PROBLEMS:**
- "No templates. No WordPress." = defensive attack
- "not prototypes, not templates" = says it twice
- "One developer. Full stack. Real code." = already said in About
- React/Next.js crammed with defensive language

**PROPOSED:**
```json
"title": "Websites, SaaS, and E-Commerce — Built with React and Next.js",
"subtitle": "Custom software designed around your requirements. Every feature serves a purpose, and the codebase scales as you grow."
```

**CHANGES:**
- Title: services + tech stack (positive framing, SEO keywords)
- Removed all "No X" and "Not Y" language
- Subtitle: client outcomes (purpose, scale)
- No repetition of "one developer" (already in About)

**KEYWORDS USED:** React, Next.js, SaaS, e-commerce, websites, custom, scales
**LINKS:** None

---

## Section 4: Service Cards (5 cards)

**JOB:** Each card = one specific problem solved. Unique angle per card.

### Card: E-Commerce

**CURRENT:**
```json
"title": "E-Commerce & Online Stores",
"description": "I build custom e-commerce platforms using React and Next.js with Stripe or PayPal payments, inventory control, and order management. Ideal for businesses that have outgrown Shopify or need full control over their store logic."
```

**PROBLEMS:**
- "I build" (repeated across cards)
- "React and Next.js" (already in services hero)
- "outgrown Shopify" = subtle attack

**PROPOSED:**
```json
"title": "E-Commerce & Online Stores",
"description": "Online stores with fast checkout, real inventory management, and payment processing that works across borders. Full control over pricing rules, promotions, and customer experience — no platform limitations."
```

**CHANGES:**
- Removed "I build"
- Removed tech stack (already mentioned once in services hero)
- "outgrown Shopify" → "no platform limitations" (same meaning, not attacking)
- Focus: what they GET (fast checkout, inventory, control)

**KEYWORDS USED:** e-commerce, online stores, checkout, payments
**LINK:** "e-commerce platforms" → `/en/services/ecommerce-development` (unchanged)

---

### Card: SaaS & Web Apps

**CURRENT:**
```json
"title": "SaaS & Web Applications",
"description": "Custom web applications with authentication, dashboards, APIs, and real user workflows. Built for production from day one—handling data, permissions, payments, and integrations without duct-tape solutions or prototype shortcuts."
```

**PROBLEMS:**
- "Built for production" (used elsewhere)
- "duct-tape solutions or prototype shortcuts" = defensive

**PROPOSED:**
```json
"title": "SaaS & Web Applications",
"description": "Web applications with user accounts, dashboards, permissions, and subscription billing. Architected to handle real users from launch — and structured so new features don't break existing ones."
```

**CHANGES:**
- Removed defensive language
- "production from day one" → "handle real users from launch" (same meaning, fresher)
- Added "new features don't break" = client fear addressed

**KEYWORDS USED:** SaaS, web applications, dashboards, subscription
**LINK:** "web applications" → `/en/services/saas-web-apps` (unchanged)

---

### Card: Full-Stack Web Development

**CURRENT:**
```json
"title": "Full-Stack Web Development",
"description": "I build fast, modern business websites with React, Next.js, and TypeScript. No page builders, no templates—just clean code that loads quickly, scales well, and is easy to maintain as your business grows."
```

**PROBLEMS:**
- "I build" again
- "React, Next.js, and TypeScript" (tech overload, already mentioned)
- "No page builders, no templates" = defensive

**PROPOSED:**
```json
"title": "Full-Stack Web Development",
"description": "Business websites that load fast, rank well, and stay easy to update. Clean architecture that grows with your business — not something you'll need to rebuild in two years."
```

**CHANGES:**
- Removed "I build"
- Removed tech stack (mentioned in services hero)
- "No templates" → "not something you'll rebuild" (client outcome)
- Added "rank well" = SEO benefit clients care about

**KEYWORDS USED:** full-stack, web development, business websites
**LINK:** "business websites" → `/en/services/web-development` (unchanged)

---

### Card: SEO & Performance

**CURRENT:**
```json
"title": "SEO & Performance Optimization",
"description": "Technical SEO optimization focused on speed, structure, and search visibility. I improve Core Web Vitals, fix rendering and indexing issues, and make sure your site is fast, crawlable, and built the way Google expects."
```

**ANALYSIS:** This one is actually fine. Client-focused, specific, no defensive language.

**PROPOSED:** Keep as-is, minor trim:
```json
"title": "SEO & Performance Optimization",
"description": "Technical SEO focused on speed, structure, and search visibility. Core Web Vitals improvements, indexing fixes, and architecture that Google rewards with better rankings."
```

**CHANGES:**
- Removed "I improve" / "I fix"
- Tightened wording
- "built the way Google expects" → "Google rewards with better rankings" (outcome)

**KEYWORDS USED:** SEO, performance, Core Web Vitals, rankings
**LINK:** "SEO optimization" → `/en/services/seo-performance-optimization` (unchanged)

---

### Card: AI Integration

**CURRENT:**
```json
"title": "AI Integration",
"description": "I integrate AI features into your product: email automation, document processing, intelligent search, custom workflows. Built with production-ready APIs (OpenAI, Anthropic, Google), not proof-of-concepts."
```

**PROBLEMS:**
- "I integrate" 
- "not proof-of-concepts" = defensive

**PROPOSED:**
```json
"title": "AI Integration",
"description": "AI features that solve real problems: automated email handling, document processing, intelligent search, workflow automation. Production-ready implementations using OpenAI, Anthropic, and Google APIs."
```

**CHANGES:**
- "I integrate" → "AI features that solve"
- "not proof-of-concepts" → "Production-ready implementations" (positive framing)
- Same meaning, no attack

**KEYWORDS USED:** AI integration, automation, OpenAI, Anthropic
**LINK:** "AI features" → `/en/services/ai-integration` (unchanged)

---

## Section 5: Process

**JOB:** Show how it works. Their experience, not your methodology.

**CURRENT:**
```json
"title": "How I Build Your Software",
"subtitle": "A proven workflow for building SaaS applications, e-commerce platforms, and AI-powered features that scale—not prototypes or WordPress templates."
```

**PROBLEMS:**
- "How I Build" = self-focused
- "not prototypes or WordPress templates" = defensive (again)

**PROPOSED:**
```json
"title": "How Your Project Gets Built",
"subtitle": "A structured process from requirements to deployment. Clear milestones, regular updates, and a production-ready result."
```

**CHANGES:**
- "How I Build" → "How Your Project Gets Built" (their perspective)
- Removed all defensive language
- Focus: clarity, milestones, result

**KEYWORDS USED:** project, deployment, production-ready
**LINKS:** 
- "View Services" → `/en/services` (unchanged)
- "See Projects" → `/en/projects` (unchanged)

### Process Step Cards

**CURRENT:**
```json
{
  "number": "01",
  "title": "Requirements & Architecture",
  "subtitle": "Technical Discovery",
  "description": "I analyze your business requirements, select the optimal React and Next.js stack, and design database architecture and API structure for scalability."
},
{
  "number": "02", 
  "title": "Development & Integration",
  "subtitle": "Build & Test",
  "description": "I write production TypeScript code, implement features with real-time updates and authentication, test continuously, and integrate AI capabilities where needed."
},
{
  "number": "03",
  "title": "Production Deployment",
  "subtitle": "Deploy & Document",
  "description": "I deploy to production infrastructure, optimize performance and SEO, provide complete documentation, and train your team on maintenance."
}
```

**PROBLEMS:**
- "I analyze", "I write", "I deploy" — self-focused (same pattern we fixed elsewhere)
- "React and Next.js stack" — mentioned again (already in services hero)
- "production TypeScript code" — tech repetition

**PROPOSED:**
```json
{
  "number": "01",
  "title": "Requirements & Architecture",
  "subtitle": "Technical Discovery",
  "description": "Understanding your business goals, defining technical requirements, and designing database and API structure for scalability."
},
{
  "number": "02",
  "title": "Development & Integration", 
  "subtitle": "Build & Test",
  "description": "Building features iteratively with continuous testing. Authentication, real-time updates, and third-party integrations implemented as needed."
},
{
  "number": "03",
  "title": "Production Deployment",
  "subtitle": "Deploy & Document",
  "description": "Deployment to production infrastructure, performance optimization, complete documentation, and team training on maintenance."
}
```

**CHANGES:**
- Removed "I" from all three steps
- Removed tech stack mentions (React, Next.js, TypeScript — already covered in services hero)
- Same information, client-perspective framing
- Reads as "what happens" not "what I do"

---

## Section 6: FAQ Teaser

**JOB:** Answer top objections. Reduce friction.

**CURRENT (first item):**
```json
"question": "What do you build?",
"answer": "Production web applications—SaaS platforms, custom e-commerce systems, and business websites—built with React, Next.js, and TypeScript. No WordPress or templates."
```

**PROBLEMS:**
- "No WordPress or templates" = defensive (STILL here)
- Tech stack already covered in Services hero

**PROPOSED:**
```json
"question": "What do you build?",
"answer": "SaaS platforms, custom e-commerce systems, and business websites. Every project is custom-built for your specific requirements — you own the code completely."
```

**CHANGES:**
- Removed tech stack (mentioned elsewhere)
- Removed "No WordPress or templates"
- Added "you own the code" = addresses client concern

**KEYWORDS USED:** SaaS, e-commerce, websites, custom
**LINK:** "See All Questions" → `/en/faq` (unchanged)

---

## Section 7: Footer

**JOB:** Final CTA. Location. One clear message.

**CURRENT:**
```json
"headline": "Not an Agency. Not WordPress. Just Code.",
"subheadline": "One full-stack developer in Poland building production web software. Available for projects worldwide.",
"seoText": "No Committees, Just Code"
```

**PROBLEMS:**
- "Not an Agency. Not WordPress." = most defensive line on the site
- "No Committees" = same

**PROPOSED:**
```json
"headline": "One Developer. Direct Access. Real Results.",
"subheadline": "Based in Poland, working in English, building for businesses that need modern web software. Available across Europe, UK, and US.",
"seoText": "Your Project, One Developer"
```

**CHANGES:**
- Complete reframe: what they GET, not what you're NOT
- "Real Results" = outcome-focused
- "Based in Poland, working in English" = signals intentional international positioning
- Polish visitors see: strategic, professional, thinking ahead
- International visitors see: EU-based, English workflow, no barriers
- seoText: still punchy, not defensive

**KEYWORDS USED:** developer, Poland, Europe, UK, US
**LINKS:** All footer navigation links unchanged

---

## Summary: Keyword Distribution (After Rewrite)

| Keyword | Section | Count |
|---------|---------|-------|
| React / Next.js | Services hero title | 1 |
| freelance developer | Hero headline | 1 |
| Poland | Hero, Footer | 2 |
| UK / US | Hero, Footer | 2 |
| SaaS | Services hero, SaaS card, FAQ | 3 (appropriate for differentiator) |
| e-commerce | Services hero, E-com card | 2 |
| full-stack | Web dev card title | 1 |
| direct access | About section | 1 |
| production-ready | Process, AI card | 2 |
| custom | Services hero, FAQ | 2 |

**No keyword appears more than 3 times. No defensive "No X" language anywhere.**

---

## What Stays Unchanged

- All `href` values
- All `linkText` values (SEO anchor text)
- Trust signals in hero (experience, timezone, language)
- FAQ teaser items 2-4 (already good)
- Tech marquees
- All service page content (separate review if needed)
- Legal content
- Contact page content

---

## Next Step

Review this map. Flag anything that feels off. Then I generate the final `en.json` in one pass.
