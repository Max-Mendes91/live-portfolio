# Copy Map — About, Services & FAQ Pages

## Overview

Same principles as homepage:

- Remove defensive language ("No X", "Not Y", "Unlike Z")
- Client-focused framing
- Preserve internal links and anchor text
- Maintain keyword distribution

---

# ABOUT PAGE

## Internal Links to Preserve

| Element                 | Destination              |
| ----------------------- | ------------------------ |
| cta.button "Let's Talk" | `/en/contact` (implicit) |
| social.github           | External                 |
| social.linkedin         | External                 |

---

### About: Bio Paragraphs

**CURRENT bio[0]:**

```
"I'm Max, a full-stack web developer based in Częstochowa, Poland. I build modern business websites, e-commerce stores, and AI-powered web applications for companies that need more than a basic template. My work focuses on clean, maintainable code, strong performance, and real-world usability."
```

**PROBLEM:** "for companies that need more than a basic template" — subtle dig at templates

**PROPOSED:**

```
"I'm Max, a full-stack web developer based in Częstochowa, Poland. I build modern business websites, e-commerce stores, and AI-powered web applications — with a focus on clean, maintainable code, strong performance, and real-world usability."
```

**CHANGE:** Removed template comparison. Same information, no attack.

---

**CURRENT bio[1]:**

```
"I'm not a designer or a branding specialist. I don't create logos or visual identities from scratch. My role is technical: I write code and turn ideas into working products. I implement interfaces using proven UI patterns and component libraries like shadcn/ui and Tailwind CSS, with a strong focus on speed, SEO optimization, and scalability. I also integrate AI capabilities using OpenAI and Anthropic APIs—tools I've used in production to build features like smart content generation, automated workflows, and intelligent data processing."
```

**PROBLEM:** Opens with two sentences of what you DON'T do

**PROPOSED:**

```
"My role is technical: I write code and turn ideas into working products. I implement interfaces using proven UI patterns and component libraries like shadcn/ui and Tailwind CSS, with a strong focus on speed, SEO optimization, and scalability. I also integrate AI capabilities using OpenAI and Anthropic APIs—tools I've used in production to build features like smart content generation, automated workflows, and intelligent data processing. Design and branding are outside my scope — I focus entirely on development."
```

**CHANGE:** Moved the limitation to the end as a simple statement, not a defensive opener.

---

**CURRENT bio[2]:** ✅ No changes needed — describes process clearly

**CURRENT bio[3]:** ✅ No changes needed — FlowMate showcase is good

**CURRENT bio[4]:** ✅ No changes needed — availability statement is clear

---

### About: Experience Section

**CURRENT experience[0].description (Freelance):**

```
"Based in Częstochowa, Poland, I moved into freelance development after a year of self-study in React, Next.js, and TypeScript. I build production web products—websites, SaaS, e-commerce—with code, not templates. FlowMate (my first full SaaS, 300+ hours) set how I approach client work: own the entire stack, ship real products."
```

**PROBLEM:** "with code, not templates" — defensive

**PROPOSED:**

```
"Based in Częstochowa, Poland, I moved into freelance development after a year of self-study in React, Next.js, and TypeScript. I build production web products—websites, SaaS, e-commerce—focusing on code quality and long-term maintainability. FlowMate (my first full SaaS, 300+ hours) set how I approach client work: own the entire stack, ship real products."
```

**CHANGE:** "with code, not templates" → "focusing on code quality and long-term maintainability"

---

### About: CTA Section

**CURRENT:**

```json
"cta": {
  "title": "Now you know enough to decide.",
  "description": "If working together makes sense for your project, reach out. If not, that's fine—I'd rather work with the right clients than all clients.",
  "button": "Let's Talk"
}
```

**PROBLEMS:**

- "Now you know enough to decide." — dismissive, almost condescending
- "I'd rather work with the right clients than all clients" — arrogant, pushes people away

**PROPOSED:**

```json
"cta": {
  "title": "That's how I work.",
  "description": "If your project needs this approach, let's build it.",
  "button": "Let's Talk"
}
```

**CHANGE:** Welcoming tone instead of dismissive. Still selective, but not arrogant.

---

# SERVICES OVERVIEW PAGE (/en/services)

## Internal Links to Preserve

| Element         | Destination                                 |
| --------------- | ------------------------------------------- |
| Full-Stack card | `/en/services/web-development`              |
| SaaS card       | `/en/services/saas-web-apps`                |
| E-commerce card | `/en/services/ecommerce-development`        |
| SEO card        | `/en/services/seo-performance-optimization` |
| AI card         | `/en/services/ai-integration`               |
| secondaryButton | `/en/projects` (implicit)                   |

---

### Services Overview: Hero

**CURRENT:**

```json
"hero": {
  "badge": "Product Mindset",
  "title": "Every project starts with thinking",
  "subtitle": "One person, end-to-end responsibility",
  "description": "Before anything is built, I focus on structure, constraints, and what actually needs to work. No handoffs, no account managers, no guessing between departments. You get clear decisions, fast feedback, and products built with intent—not feature bloat. This works for Polish businesses and international teams who value clarity over bureaucracy."
}
```

**PROBLEM:** "No handoffs, no account managers, no guessing between departments" — triple negative

**PROPOSED:**

```json
"hero": {
  "badge": "Product Mindset",
  "title": "Every project starts with thinking",
  "subtitle": "One person, end-to-end responsibility",
  "description": "Before anything is built, I focus on structure, constraints, and what actually needs to work. Direct communication, fast feedback, and products built with intent — not feature bloat. This works for Polish businesses and international teams who value clarity over bureaucracy."
}
```

**CHANGE:** "No handoffs, no account managers, no guessing" → "Direct communication, fast feedback" — same meaning, positive framing

---

### Services Overview: Service Cards

**All 5 cards are clean.** No defensive language, good descriptions. No changes needed.

---

# SERVICE SUBPAGES

## Web Development Page

### Internal Links to Preserve

| Element                     | Destination    |
| --------------------------- | -------------- |
| "Check the Projects page →" | `/en/projects` |
| "See the FAQ page →"        | `/en/faq`      |

---

**CURRENT subtitle:**

```
"Custom web applications built with React and Next.js. Production code designed for your business requirements, not template limitations."
```

**PROBLEM:** "not template limitations" — defensive

**PROPOSED:**

```
"Custom web applications built with React and Next.js. Production code designed around your business requirements, built to scale as you grow."
```

---

**CURRENT sections[0].paragraphs[1]:**

```
"Unlike WordPress or website builders, custom applications are built around your specific requirements. Your business doesn't adapt to a template—the software is designed for your exact workflows, data structures, and growth plans."
```

**PROBLEM:** "Unlike WordPress or website builders" — comparative attack

**PROPOSED:**

```
"Custom applications are built around your specific requirements. Your business doesn't adapt to the software — the software is designed for your exact workflows, data structures, and growth plans."
```

**CHANGE:** Removed WordPress/builders comparison. Made it about the client, not competitors.

---

**CURRENT sections[3].paragraphs[0] (How I Work):**

```
"You work directly with me—no agency layers or project handoffs. I handle requirements, architecture, development, and deployment. Code is production-ready from day one, not prototypes that need rebuilding later."
```

**PROBLEM:** "not prototypes that need rebuilding later" — defensive

**PROPOSED:**

```
"You work directly with me — no layers between you and the person writing your code. I handle requirements, architecture, development, and deployment. Code is production-ready from day one, built to extend as your needs evolve."
```

**CHANGE:** Removed prototype dig. Added positive framing about extensibility.

---

## SaaS Page

### Internal Links to Preserve

| Element                                                                | Destination    |
| ---------------------------------------------------------------------- | -------------- |
| "See FlowMate on the Projects page →"                                  | `/en/projects` |
| "Questions about SaaS development pricing or process? Check the FAQ →" | `/en/faq`      |

---

**CURRENT sections[2].paragraphs[0] (Who This Is For):**

```
"This service is for SaaS founders building an MVP that is meant to become a real product, not a disposable prototype. It also fits businesses launching subscription platforms or internal SaaS tools that replace spreadsheets or manual workflows..."
```

**PROBLEM:** "not a disposable prototype" — defensive

**PROPOSED:**

```
"This service is for SaaS founders building an MVP designed to scale into a real product. It also fits businesses launching subscription platforms or internal SaaS tools that replace spreadsheets or manual workflows..."
```

**CHANGE:** "not a disposable prototype" → "designed to scale into a real product"

---

**CURRENT sections[3].paragraphs[0] (How It's Delivered):**

```
"You work directly with one developer, without agency handoffs or junior teams. The focus is production-ready code from day one, so the platform does not need rebuilding after validation..."
```

**PROBLEM:** "without agency handoffs or junior teams" — defensive attack

**PROPOSED:**

```
"You work directly with one developer who handles the full stack. The focus is production-ready code from day one, so the platform can grow without major rewrites after validation..."
```

**CHANGE:** Removed agency/junior attack. Same meaning through positive framing.

---

## E-commerce Page

### Internal Links to Preserve

| Element                                                                        | Destination |
| ------------------------------------------------------------------------------ | ----------- |
| "Questions about e-commerce development timelines or pricing? Check the FAQ →" | `/en/faq`   |

---

**CURRENT subtitle:**

```
"Custom online stores built with React for speed and conversions. Designed around your catalog and business logic—not template compromises."
```

**PROBLEM:** "not template compromises" — defensive

**PROPOSED:**

```
"Custom online stores built with React for speed and conversions. Designed around your catalog and business logic, with full control over every detail."
```

---

**CURRENT sections[0].paragraphs[0]:**

```
"Custom e-commerce development means your online store is built specifically for how your business operates, instead of adapting your processes to a Shopify or WooCommerce template. Templates work well at the start, but many businesses outgrow them when pricing rules become complex, inventory logic is non-standard, or integrations are required."
```

**ANALYSIS:** This is actually reasonable context — it explains WHEN custom makes sense, not attacking platforms. The second sentence is informative.

**PROPOSED:** Keep as-is, OR soften slightly:

```
"Custom e-commerce development means your online store is built specifically for how your business operates. Standard platforms work well at the start, but many businesses outgrow them when pricing rules become complex, inventory logic is non-standard, or integrations are required."
```

**CHANGE:** "instead of adapting your processes to a Shopify or WooCommerce template" removed. Rest stays — it's educational, not defensive.

---

## SEO Page

✅ **No changes needed.** This page is clean — focuses on client outcomes, no defensive language.

---

## AI Integration Page

✅ **No changes needed.** This page is clean — practical, honest about AI limitations, no attacks on competitors.

---

# FAQ PAGE

## Internal Links to Preserve

| Element                                | Destination    |
| -------------------------------------- | -------------- |
| "View service details"                 | `/en/services` |
| "Get in touch to discuss your project" | `/en/contact`  |
| CTA primaryButton "Contact Me"         | `/en/contact`  |

---

### FAQ: Services & Approach Category

**CURRENT item[0] (What services do you provide?):**

```
"I build production web applications: business websites, SaaS platforms, custom e-commerce systems, and AI-powered features. Everything is built with React, Next.js, and TypeScript—production-ready from day one, not demos or prototypes."
```

**PROBLEM:** "not demos or prototypes" — defensive

**PROPOSED:**

```
"I build production web applications: business websites, SaaS platforms, custom e-commerce systems, and AI-powered features. Everything is built with React, Next.js, and TypeScript — production-ready from day one, built to scale."
```

---

**CURRENT item[1] (What don't you build?):**

```
"I don't build WordPress sites, page-builder websites, or design-only projects. I also don't offer branding, visual identity, or marketing services. My work is software development—writing real code that scales."
```

**PROBLEM:** Entire answer is what you DON'T do — reads defensive

**PROPOSED:**

```
"I focus exclusively on custom software development — websites, web apps, and SaaS built with React and Next.js. Design, branding, and marketing are outside my scope. If you need those services, I can recommend specialists."
```

**CHANGE:** Lead with what you DO, end with scope limits. Offer to help find alternatives — collaborative, not dismissive.

---

**CURRENT item[2] (Do you work solo or with a team?):**

```
"I work as a solo full-stack developer and handle the entire build myself. No handoffs, no project managers, no communication gaps. You work directly with the person writing your code."
```

**PROBLEM:** "No handoffs, no project managers, no communication gaps" — triple negative

**PROPOSED:**

```
"I work as a solo full-stack developer and handle the entire build myself. You work directly with the person writing your code — one point of contact from start to finish."
```

**CHANGE:** Triple negative → positive benefit statement

---

**REST OF FAQ:** ✅ Clean. No changes needed for items 3-22.

---

# SUMMARY: All Changes

## About Page (4 changes)

| Location      | Change                                                          |
| ------------- | --------------------------------------------------------------- |
| bio[0]        | Remove "need more than a basic template"                        |
| bio[1]        | Move "not a designer" limitation to end                         |
| experience[0] | "with code, not templates" → "code quality and maintainability" |
| cta           | Welcoming tone instead of dismissive                            |

## Services Overview (1 change)

| Location         | Change                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| hero.description | "No handoffs, no account managers..." → "Direct communication, fast feedback" |

## Web Development Page (3 changes)

| Location                  | Change                                                    |
| ------------------------- | --------------------------------------------------------- |
| subtitle                  | "not template limitations" → "built to scale as you grow" |
| sections[0].paragraphs[1] | Remove "Unlike WordPress or website builders"             |
| sections[3].paragraphs[0] | "not prototypes" → "built to extend"                      |

## SaaS Page (2 changes)

| Location                  | Change                                                                   |
| ------------------------- | ------------------------------------------------------------------------ |
| sections[2].paragraphs[0] | "not a disposable prototype" → "designed to scale"                       |
| sections[3].paragraphs[0] | "without agency handoffs or junior teams" → "who handles the full stack" |

## E-commerce Page (2 changes)

| Location                  | Change                                                         |
| ------------------------- | -------------------------------------------------------------- |
| subtitle                  | "not template compromises" → "full control over every detail"  |
| sections[0].paragraphs[0] | Remove "instead of adapting to Shopify/WooCommerce" (optional) |

## SEO Page

✅ No changes needed

## AI Integration Page

✅ No changes needed

## FAQ Page (3 changes)

| Location           | Change                                       |
| ------------------ | -------------------------------------------- |
| Services[0].answer | "not demos or prototypes" → "built to scale" |
| Services[1].answer | Reframe from "don't do" to "focus on"        |
| Services[2].answer | Triple negative → positive framing           |

---

## Total: 15 surgical changes across 5 pages

All internal links preserved. No keyword changes. No structural changes.
