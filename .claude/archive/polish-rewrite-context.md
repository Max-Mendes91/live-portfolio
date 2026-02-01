# Polish Text Transformation Context

> **Purpose:** Context file for Claude to rewrite pl.json from defensive/self-protective language to client-focused language.
> **Reference:** English rewrite already completed (see en.json, homepage-copy-map.md, pages-copy-map.md)

---

## TASK SUMMARY

Transform Polish content (`pl.json`) using the same principles applied to English:

1. **Remove defensive language** ("Nie X", "Żaden Y", "W przeciwieństwie do Z")
2. **Client-focused framing** instead of "I do/I build/I handle"
3. **Positive positioning** instead of attacking competitors
4. **Preserve all SEO keywords** and internal links

---

## POLISH CULTURE CONSIDERATIONS

The Polish copy must feel **NATIVE**, not translated from English.

### B2B Tone in Poland
- Polish business communication is generally **more formal** than US/UK
- Use "Pan/Pani" forms where appropriate, but modern tech/startup context allows informal
- Śląskie region: practical, direct, value hard work — avoid flashy marketing speak
- Relationship matters: Poles prefer working with people they trust, not faceless agencies

### Cultural Fit
- Polish SMBs are **skeptical of big promises** — be concrete, not grandiose
- "Show, don't tell" — results and specifics over vague claims
- Local references (Częstochowa, Śląskie) build trust with regional audience
- Avoid American-style hype — Polish readers find it inauthentic

### Tone Target
- Professional but approachable
- Direct and clear (Śląskie style)
- Confident without arrogance
- Specific and concrete, never vague

---

## NO GENERIC FILLER (CRITICAL)

### Polish Corporate Clichés to AVOID

| Cliché | Why It's Bad |
|--------|--------------|
| "najwyższa jakość" (highest quality) | Every agency says this |
| "profesjonalne usługi" (professional services) | Meaningless filler |
| "kompleksowa obsługa" (comprehensive service) | Vague, overused |
| "indywidualne podejście" (individual approach) | Every competitor claims this |
| "innowacyjne rozwiązania" (innovative solutions) | Corporate buzzword |
| "lider na rynku" (market leader) | Unverifiable claim |
| "wieloletnie doświadczenie" (years of experience) | Be specific: "2+ lata" |
| "najlepsi specjaliści" (best specialists) | Empty superlative |

### Rule: If It Sounds Like Every Polish Agency Site, Rewrite It

✅ **Be specific and concrete:**
- Instead of "wysokiej jakości strony" → "strony ładujące się poniżej 2 sekund"
- Instead of "profesjonalna obsługa" → "odpowiedź w ciągu 24 godzin"
- Instead of "indywidualne podejście" → "kod pisany specjalnie dla Twojego projektu"

---

## REVIEW PROCESS (MANDATORY)

### Workflow
1. **Claude proposes changes** in markdown map format (like homepage-copy-map.md)
2. **Native Polish speaker reviews** for:
   - Natural language (not robotic/translated)
   - Cultural fit for Polish B2B audience
   - Business tone appropriateness
   - Regional relevance (Śląskie context)
3. **Native speaker has FINAL AUTHORITY** on all language choices
4. **Only after approval** → generate final pl.json

### Why This Matters
- Machine translations and non-native rewrites sound "off" to Polish readers
- Subtle word choices affect trust and professionalism
- Regional expressions matter for local SEO and credibility

---

## CORE TRANSFORMATION RULES

### Rule 1: Remove Defensive Language

| Polish Pattern | Replace With |
|----------------|--------------|
| "Nie używam WordPress" | (remove entirely or reframe as positive) |
| "Żadnych szablonów" | "Kod pisany od zera" |
| "W przeciwieństwie do agencji..." | "Bezpośredni kontakt..." |
| "Nie jestem..." | Move limitation to END, not opener |
| "To nie jest prototyp" | "Gotowe do produkcji" |

### Rule 2: Replace Self-Focused "I" Statements

| Instead of | Use |
|------------|-----|
| "Buduję strony..." | "Strony zbudowane..." (passive) |
| "Tworzę aplikacje..." | "Aplikacje zaprojektowane..." |
| "Ja robię wszystko sam" | "Jeden developer, pełna odpowiedzialność" |
| "Moja praca polega na..." | "Projekty obejmują..." |

### Rule 3: Triple Negatives → Single Positive

| Before | After |
|--------|-------|
| "Bez pośredników, bez project managerów, bez opóźnień" | "Bezpośredni kontakt, szybkie decyzje" |
| "Nie WordPress, nie szablony, nie page buildery" | "Kod pisany specjalnie dla Twojego projektu" |

### Rule 4: Move Limitations to End

```
// BAD - opens with limitation
"Nie jestem grafikiem ani specjalistą od brandingu. Moja rola jest techniczna..."

// GOOD - limitation at end
"Moja rola jest techniczna: piszę kod i zamieniam pomysły w działające produkty. Grafika i branding są poza moim zakresem."
```

---

## KEYWORD PRESERVATION (CRITICAL)

### Polish Primary Keywords (MUST KEEP)
- programista Częstochowa
- tworzenie stron internetowych
- strony internetowe Częstochowa
- web developer Polska
- aplikacje webowe
- sklepy internetowe
- pozycjonowanie SEO

### Keyword Rotation Table (Use Synonyms)

| Instead of repeating | Rotate with |
|---------------------|-------------|
| web developer | programista, twórca stron, developer |
| strony internetowe | strony www, witryny, serwisy www |
| tworzenie | budowa, projektowanie, wykonanie, realizacja |
| Częstochowa | miasto, region, Śląskie, okolice |
| aplikacje | systemy, platformy, rozwiązania |

### Keyword Density Rules
- Primary keyword: 1-2% of content (1-2 times per 100 words)
- Use synonyms to reach 3-4% total coverage
- NO keyword stuffing

---

## POLISH MARKET POSITIONING

### Target Audience
- **Local:** Częstochowa businesses
- **Regional:** Śląskie voivodeship
- **National:** Polish companies needing modern web solutions

### Key Differentiators (from competitor analysis)
1. Only React/Next.js developer in Częstochowa (competitors use WordPress/Joomla)
2. Only local SaaS/MVP capability
3. Modern tech stack vs outdated CMS solutions
4. Direct access (no agency layers)

### Competitor Weaknesses to Exploit (POSITIVELY)
| Gap | Your Positive Framing |
|-----|----------------------|
| All use WordPress | "Nowoczesny stack: React, Next.js, TypeScript" |
| No SaaS capability | "Aplikacje SaaS i MVP dla startupów" |
| Slow, template sites | "Szybkie strony, zoptymalizowane pod Core Web Vitals" |
| Agency bureaucracy | "Bezpośredni kontakt z developerem" |

---

## STRUCTURE TO PRESERVE

### DO NOT CHANGE:
- All `href` values (internal links)
- All `linkText` values (anchor text for SEO)
- SEO metadata structure (title, metaDescription, keywords, h1)
- hrefLang values
- Schema markup fields

### CAN CHANGE:
- Headlines and subheadlines
- Description paragraphs
- Trust badges text
- FAQ answers
- CTA text (keeping same intent)

---

## SECTION-BY-SECTION GUIDANCE

### Hero
- Keep: "Freelance Developer" keyword
- Change: Remove any "not agency/not WordPress" language
- Focus: Location (Poland/Częstochowa) + availability for projects

### About (Homepage Preview)
- Change headline from self-focused to client-benefit
- Remove comparisons to "other developers"
- Trust badges: outcomes, not process descriptions

### Services Hero
- One mention of tech stack (React/Next.js) here
- Remove ALL "No X" and "Not Y" language
- Focus: what client GETS

### Service Cards
- Remove "I build" from each card
- Don't repeat tech stack (mentioned in hero)
- Each card = one specific client problem solved

### Process Section
- "How Your Project Gets Built" not "How I Build"
- Remove defensive language about prototypes
- Client perspective: what happens at each step

### FAQ
- Lead with what you DO, not what you DON'T
- Triple negatives → single positive benefit
- Offer alternatives when mentioning scope limits

### Footer
- Strongest CTA placement
- "One Developer. Direct Access. Real Results." pattern
- Location + international availability

---

## QUALITY CHECKLIST

Before finalizing pl.json:

- [ ] No "Nie X" / "Żaden Y" / "W przeciwieństwie do" patterns
- [ ] No triple negatives
- [ ] "I build/I do" replaced with passive or outcome framing
- [ ] Limitations moved to end of paragraphs
- [ ] All keywords preserved (check rotation table usage)
- [ ] All href values unchanged
- [ ] All linkText values unchanged
- [ ] SEO metadata structure intact
- [ ] Reads naturally in Polish (not translated English)

---

## OUTPUT FORMAT

### Step 1: Propose Changes (Map Format)
Create a markdown document like `polish-copy-map.md` showing:

```markdown
### Section Name

**CURRENT:**
```json
"key": "current Polish text here"
```

**PROBLEM:** [What's wrong - defensive, generic, translated-feeling, etc.]

**PROPOSED:**
```json
"key": "proposed new Polish text"
```

**CHANGES:** [Explanation of what changed and why]
```

### Step 2: Native Speaker Review
- Wait for native Polish speaker approval
- Incorporate feedback
- Iterate until approved

### Step 3: Generate Final pl.json
- Only after approval
- Complete file with all approved changes
- Preserve all structure, hrefs, SEO fields

---

## ENCODING NOTE

Ensure all files are saved with **UTF-8 encoding** to preserve Polish characters:
- ą, ć, ę, ł, ń, ó, ś, ź, ż
- Ą, Ć, Ę, Ł, Ń, Ó, Ś, Ź, Ż

If you see broken characters (Ä™, Å¼, etc.), re-save with UTF-8.

---

*Context file created: 2026-02-01*
*Last updated: 2026-02-01*
*For use with: Claude web for pl.json transformation*
*Native speaker review: REQUIRED before final output*
