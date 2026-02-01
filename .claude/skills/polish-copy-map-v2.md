# Polish Copy Map — pl.json Changes

> **File:** `pl.json`  
> **Format:** FIND → REPLACE (exact string matching)  
> **Status:** Ready for Claude Code implementation  
> **Review:** Wife will review final output

---

## INTERNAL LINKING REFERENCE

These `linkText` values MUST remain unchanged (SEO anchor text):

| linkText | href | Location |
|----------|------|----------|
| "platformy e-commerce" | `/pl/uslugi/sklepy-internetowe` | services.cards[0] |
| "aplikacje webowe" | `/pl/uslugi/aplikacje-webowe` | services.cards[1] |
| "strony firmowe" | `/pl/uslugi/tworzenie-stron` | services.cards[2] |
| "pozycjonowanie SEO" | `/pl/uslugi/pozycjonowanie` | services.cards[3] |
| "funkcje AI" | `/pl/uslugi/integracja-ai` | services.cards[4] |

**Internal link keywords to preserve in body copy:**
- "React" and "Next.js" → mentioned in aboutPage.bio[1]
- "SEO" → mentioned in aboutPage.bio[2]

---

# HOMEPAGE — `hero` section

## Change 1: hero.description

**PATH:** `hero.description`

**FIND:**
```
Jestem Max, programista full-stack z Częstochowy. Buduję strony biznesowe, sklepy internetowe i aplikacje webowe w React, Next.js i TypeScript. Obsługuję cały proces — od researchu i prototypu po wdrożenie. Otwarty na projekty z Częstochowy, Katowic, Krakowa i całej Polski.
```

**REPLACE:**
```
Max Mendes — programista z Częstochowy, dostępny dla projektów z Polski, UK i USA. Jako jedna osoba odpowiadam za cały projekt - od pierwszej rozmowy po wdrożenie produkcyjne.
```

---

## Change 2: hero.trustSignals

**PATH:** `hero.trustSignals`

**FIND:**
```json
[
  { "label": "2+ lata doświadczenia", "icon": "trophy" },
  { "label": "Klienci z UK/US", "icon": "globe" },
  { "label": "Płynny angielski", "icon": "languages" }
]
```

**REPLACE:**
```json
[
  { "label": "Specjalista React & Next.js", "icon": "trophy" },
  { "label": "Strefa EU — pokrywa UK i US", "icon": "globe" },
  { "label": "Płynny EN / PT / ES · Wsparcie PL", "icon": "languages" }
]
```

---

# HOMEPAGE — `about` section

## Change 3: about.headline

**PATH:** `about.headline`

**FIND:**
```
Dlaczego Warto Ze Mną Pracować?
```

**REPLACE:**
```
Dopasowane do Twojego Biznesu
```

---

## Change 4: about.subheadline

**PATH:** `about.subheadline`

**FIND:**
```
Nie buduję stron na WordPressie. Piszę prawdziwy kod w React i Next.js—to oznacza szybsze strony, lepsze SEO i możliwość rozwoju bez wymuszania migracji za rok czy dwa.
```

**REPLACE:**
```
Zanim powstanie jakikolwiek kod, upewniam się, że rozwiązujemy właściwy problem.
```

---

## Change 5: about.description

**PATH:** `about.description`

**FIND:**
```
Pracujesz bezpośrednio ze mną, nie z agencją gdzie projekt przechodzi przez kilka osób. Jeden developer. Pełna odpowiedzialność. Najpierw rozumiem problem biznesowy i analizuję konkurencję. Potem planuję strukturę. Dopiero wtedy piszę kod. Efekt: aplikacje i strony, które rozwiązują realne problemy i można je rozwijać.
```

**REPLACE:**
```
Każdy projekt zaczyna się od zrozumienia: czym jest sukces dla Ciebie, kim są użytkownicy, jakie ograniczenia mają znaczenie. Potem prototypowanie, planowanie zakresu i budowa czegoś, co pasuje do Twojego biznesu — nie szablonu, z którego wyrośniesz.
```

---

## Change 6: about.description2

**PATH:** `about.description2`

**FIND:**
```
Zbudowałem wszystko—od landing page'y po platformę SaaS (FlowMate) z autoryzacją, płatnościami i dashboardami (300+ godzin). Otwarty na współpracę z firmami w Częstochowie, na Śląsku i w całej Polsce.
```

**REPLACE:**
```
Masz bezpośredni dostęp przez cały projekt. Odpowiadam na pytania w ciągu paru godzin, nie dni. Decyzje zapadają szybko. A na końcu dostajesz kod, który rzeczywiście odpowiada Twoim potrzebom.
```

---

## Change 7: about.trustBadges

**PATH:** `about.trustBadges`

**FIND:**
```json
[
  "500+ godzin w produkcyjnym kodzie",
  "Jeden deweloper, pełna własność projektu",
  "Bez WordPress, tylko nowoczesny kod"
]
```

**REPLACE:**
```json
[
  "500+ godzin na produkcyjnym oprogramowaniu",
  "Bezpośredni dostęp, szybkie decyzje",
  "Kod na własność, gotowy do skalowania"
]
```

---

# HOMEPAGE — `services` section

## Change 8: services.hero.title

**PATH:** `services.hero.title`

**FIND:**
```
Produkcyjne oprogramowanie webowe. Bez szablonów. Bez WordPress.
```

**REPLACE:**
```
Strony, SaaS i E-Commerce — w React i Next.js
```

---

## Change 9: services.hero.subtitle

**PATH:** `services.hero.subtitle`

**FIND:**
```
Tworzę produkcyjne aplikacje webowe w React i Next.js—nie prototypy, nie szablony. Jeden programista. Full stack. Prawdziwy kod.
```

**REPLACE:**
```
Oprogramowanie projektowane wokół Twoich wymagań. Każda funkcja ma swój cel, a kod rośnie razem z firmą.
```

---

## Change 10: services.cards[0] — E-Commerce

**PATH:** `services.cards[0].description`

**FIND:**
```
Buduję dedykowane platformy e-commerce w React i Next.js z płatnościami Przelewy24, PayU lub Stripe, kontrolą magazynu i zarządzaniem zamówieniami. Idealne dla firm, które przerosły Shopify lub potrzebują pełnej kontroli nad logiką sklepu.
```

**REPLACE:**
```
Buduję platformy e-commerce oraz sklepy internetowe z szybkim checkoutem, rzeczywistym zarządzaniem magazynem i płatnościami działającymi na rynku polskim i międzynarodowym. Pełna kontrola nad cenami, promocjami i doświadczeniem klienta.
```

**NOTE:** Preserves "platformy e-commerce" for linkText match.

---

## Change 11: services.cards[1] — SaaS

**PATH:** `services.cards[1].description`

**FIND:**
```
Dedykowane aplikacje webowe z uwierzytelnianiem, dashboardami, API i prawdziwymi przepływami użytkowników. Budowane dla produkcji od pierwszego dnia—obsługa danych, uprawnień, płatności i integracji bez prowizorycznych rozwiązań.
```

**REPLACE:**
```
Aplikacje webowe z kontami użytkowników, dashboardami, uprawnieniami i rozliczaniem subskrypcji. Architektura gotowa na realnych użytkowników od startu — i zbudowana tak, że nowe funkcje nie niszczą istniejących.
```

---

## Change 12: services.cards[2] — Web Development

**PATH:** `services.cards[2].description`

**FIND:**
```
Tworzę szybkie, nowoczesne strony firmowe w React, Next.js i TypeScript. Bez kreatorów stron, bez szablonów—tylko czysty kod, który szybko się ładuje, dobrze skaluje i jest łatwy w utrzymaniu wraz z rozwojem Twojej firmy.
```

**REPLACE:**
```
Strony firmowe, które ładują się szybko, dobrze się pozycjonują i są łatwe w utrzymaniu. Czysta architektura, która rośnie z firmą — nie coś, co trzeba będzie przepisać za dwa lata.
```

---

## Change 13: services.cards[3] — SEO

**PATH:** `services.cards[3].description`

**FIND:**
```
Techniczne pozycjonowanie SEO skoncentrowane na szybkości, strukturze i widoczności w wyszukiwarkach. Poprawiam Core Web Vitals, naprawiam problemy z renderowaniem i indeksowaniem, zapewniam że strona jest szybka i zbudowana zgodnie z oczekiwaniami Google.
```

**REPLACE:**
```
Techniczne SEO skupione na szybkości, strukturze i widoczności w wyszukiwarkach. Poprawa Core Web Vitals, naprawy indeksowania i optymalizacja, którą Google nagradza lepszym pozycjonowaniem.
```

---

## Change 14: services.cards[4] — AI

**PATH:** `services.cards[4].description`

**FIND:**
```
Dodaję funkcje AI do Twojego produktu: automatyzacja emaili, przetwarzanie dokumentów, inteligentne wyszukiwanie, własne procesy. Oparte na produkcyjnych API (OpenAI, Anthropic, Google), nie demka ani prototypy.
```

**REPLACE:**
```
Funkcje AI rozwiązujące realne problemy: automatyzacja emaili, przetwarzanie dokumentów, inteligentne wyszukiwanie, automatyzacja procesów. Produkcyjne implementacje oparte na OpenAI, Anthropic i Google APIs.
```

---

# HOMEPAGE — `process` section

## Change 15: process.title

**PATH:** `process.title`

**FIND:**
```
Jak Buduję Twoje Oprogramowanie
```

**REPLACE:**
```
Jak Powstaje Twój Projekt
```

---

## Change 16: process.subtitle

**PATH:** `process.subtitle`

**FIND:**
```
Sprawdzony proces tworzenia sklepów internetowych, systemów webowych i funkcji AI które rosną z Twoim biznesem—bez szablonów i WordPress.
```

**REPLACE:**
```
Uporządkowany proces od wymagań po wdrożenie. Jasne etapy, regularne aktualizacje i produkcyjny rezultat.
```

---

## Change 17: process.steps[0].description

**PATH:** `process.steps[0].description`

**FIND:**
```
Analizuję wymagania biznesowe, wybieram nowoczesne technologie webowe, projektuję strukturę bazy danych i API dla skalowalności.
```

**REPLACE:**
```
Zrozumienie celów biznesowych, zdefiniowanie wymagań technicznych, zaprojektowanie struktury bazy danych i API pod skalowalność.
```

---

## Change 18: process.steps[1].description

**PATH:** `process.steps[1].description`

**FIND:**
```
Piszę kod produkcyjny, implementuję funkcje z autoryzacją i aktualizacjami w czasie rzeczywistym, testuję na bieżąco i integruję funkcje AI gdzie potrzeba.
```

**REPLACE:**
```
Budowa funkcji iteracyjnie z ciągłym testowaniem. Autoryzacja, aktualizacje w czasie rzeczywistym i integracje zewnętrzne implementowane według potrzeb.
```

---

## Change 19: process.steps[2].description

**PATH:** `process.steps[2].description`

**FIND:**
```
Wdrażam na środowisko produkcyjne, optymalizuję wydajność i SEO, dostarczam kompletną dokumentację i szkolę Twój zespół z utrzymania systemu.
```

**REPLACE:**
```
Wdrożenie na infrastrukturę produkcyjną, optymalizacja wydajności i SEO, kompletna dokumentacja i szkolenie zespołu z utrzymania systemu.
```

---

# HOMEPAGE — `faqTeaser` section

## Change 20: faqTeaser.items[0].answer

**PATH:** `faqTeaser.items[0].answer`

**FIND:**
```
Produkcyjne aplikacje webowe—platformy SaaS, niestandardowe systemy e-commerce i strony biznesowe—zbudowane w React, Next.js i TypeScript. Bez WordPress ani szablonów.
```

**REPLACE:**
```
Platformy SaaS, dedykowane systemy e-commerce i strony biznesowe. Każdy projekt stworzony pod konkretne wymagania — kod na własność.
```

---

# HOMEPAGE — `footer` section

## Change 21: footer.headline

**PATH:** `footer.headline`

**FIND:**
```
Nie agencja. Nie WordPress. Tylko kod.
```

**REPLACE:**
```
Jeden Developer. Bezpośredni Dostęp. Realne Rezultaty.
```

---

## Change 22: footer.subheadline

**PATH:** `footer.subheadline`

**FIND:**
```
Jeden programista full-stack w Polsce tworzący produkcyjne oprogramowanie webowe. Dostępny dla projektów na całym świecie.
```

**REPLACE:**
```
Z Polski, pracując po angielsku, budując dla firm potrzebujących nowoczesnego oprogramowania. Dostępny w Europie, UK i USA.
```

---

## Change 23: footer.seoText

**PATH:** `footer.seoText`

**FIND:**
```
Bez Komitetów, Tylko Kod
```

**REPLACE:**
```
Twój Projekt, Jeden Developer
```

---

# ABOUT PAGE — `aboutPage.bio`

## Change 24: aboutPage.bio[0]

**PATH:** `aboutPage.bio[0]`

**FIND:**
```
Nazywam się Max i jestem programistą full-stack z Częstochowy. Buduję nowoczesne strony internetowe, sklepy online i aplikacje webowe z integracją AI dla firm, które potrzebują czegoś więcej niż kolejny szablon WordPress.
```

**REPLACE:**
```
Nazywam się Max i jestem programistą full-stack z Częstochowy. Buduję nowoczesne strony internetowe, sklepy online i aplikacje webowe z integracją AI — z naciskiem na czysty, utrzymywalny kod, wydajność i realne użycie.
```

---

## Change 25: aboutPage.bio[1]

**PATH:** `aboutPage.bio[1]`

**INTERNAL LINKING:** This paragraph must contain "React" and "Next.js" for SEO linking.

**FIND:**
```
Na lokalnym rynku prawie wszystkie agencje używają WordPressa. To szybkie na start, ale po roku pojawiają się problemy: wolne ładowanie, słabe SEO, niemożliwa rozbudowa bez migracji. Ja buduję w React i Next.js. Efekt: strony szybsze, lepiej pozycjonujące się w Google i gotowe na rozwój bez przepisywania wszystkiego od podstaw.
```

**REPLACE:**
```
Buduję w React i Next.js — nowoczesnym stacku, który daje szybsze strony, lepsze pozycjonowanie w Google i możliwość rozwoju bez przepisywania kodu od podstaw. To technologie używane przez duże firmy (Netflix, Airbnb, TikTok), teraz dostępne dla lokalnych firm z Częstochowy i Śląska.
```

---

## Change 26: aboutPage.bio[2]

**PATH:** `aboutPage.bio[2]`

**INTERNAL LINKING:** This paragraph contains "SEO" for keyword relevance.

**FIND:**
```
Nie jestem grafikiem ani specjalistą od brandingu. Nie tworzę logo ani identyfikacji wizualnych. Moja rola to kod: przekształcam pomysły w działające produkty. Implementuję interfejsy używając sprawdzonych bibliotek komponentów (shadcn/ui, Tailwind CSS) z naciskiem na wydajność, SEO i skalowalność. Integruję również funkcje AI wykorzystując API OpenAI i Anthropic—narzędzia, których używałem w produkcji do tworzenia inteligentnej generacji treści, automatyzacji procesów i przetwarzania danych.
```

**REPLACE:**
```
Moja rola to kod: przekształcam pomysły w działające produkty. Implementuję interfejsy używając sprawdzonych bibliotek komponentów (shadcn/ui, Tailwind CSS) z naciskiem na wydajność, SEO i skalowalność. Integruję również funkcje AI wykorzystując API OpenAI i Anthropic — narzędzia, których używałem w produkcji do inteligentnej generacji treści, automatyzacji procesów i przetwarzania danych. Grafika i branding są poza moim zakresem — skupiam się wyłącznie na programowaniu.
```

---

## aboutPage.bio[3], bio[4], bio[5] — NO CHANGES

These paragraphs are clean. No defensive language found.

---

## Change 27: aboutPage.cta.title

**PATH:** `aboutPage.cta.title`

**FIND:**
```
Teraz wiesz wystarczająco, żeby zdecydować.
```

**REPLACE:**
```
Tak pracuję.
```

---

## Change 28: aboutPage.cta.description

**PATH:** `aboutPage.cta.description`

**FIND:**
```
Jeśli współpraca ma sens dla Twojego projektu, odezwij się. Jeśli nie—w porządku. Wolę pracować z odpowiednimi klientami niż ze wszystkimi.
```

**REPLACE:**
```
Jeśli Twój projekt potrzebuje takiego podejścia, zbudujmy go.
```

---

# SERVICES OVERVIEW PAGE — `servicesPage.hero`

## Change 29: servicesPage.hero.description

**PATH:** `servicesPage.hero.description`

**FIND:**
```
Zanim cokolwiek powstanie, koncentruję się na strukturze, ograniczeniach i tym, co naprawdę musi działać. Bez przekazywania między działami, bez account managerów, bez zgadywania. Otrzymujesz jasne decyzje, szybki feedback i produkty budowane z intencją—nie przeładowane funkcjami.
```

**REPLACE:**
```
Zanim cokolwiek powstanie, koncentruję się na strukturze, ograniczeniach i tym, co naprawdę musi działać. Bezpośrednia komunikacja, szybki feedback i produkty budowane z intencją — nie przeładowane funkcjami.
```

---

# SERVICES OVERVIEW PAGE — `servicesPage.services` cards

## Change 30: servicesPage.services[0].description (Full-Stack card)

**PATH:** `servicesPage.services[0].description`

**FIND:**
```
Kod napisany od zera, nie WordPress ani gotowe szablony. Strony biznesowe powinny być szybkie, stabilne i gotowe na rozwój. Projekty traktuję jak produkty—z czystą strukturą i myśleniem długoterminowym. Wszystko działa na nowoczesnym stacku: React, Next.js i TypeScript.
```

**REPLACE:**
```
Strony biznesowe powinny być szybkie, stabilne i gotowe na rozwój. Projekty traktuję jak produkty — z czystą strukturą i myśleniem długoterminowym. Wszystko działa na nowoczesnym stacku: React, Next.js i TypeScript.
```

---

## servicesPage.services[1], [2], [3], [4] — NO CHANGES

These cards are clean. No defensive language found.

---

# SERVICE SUBPAGE — Web Development

## Change 31: servicePages.web-development.content.subtitle

**PATH:** `servicePages["web-development"].content.subtitle`

**FIND:**
```
Dedykowane aplikacje webowe w React i Next.js. Kod produkcyjny dostosowany do wymagań Twojej firmy, nie ograniczeń szablonów.
```

**REPLACE:**
```
Dedykowane aplikacje webowe w React i Next.js. Kod produkcyjny zaprojektowany wokół wymagań Twojej firmy, gotowy do skalowania.
```

---

## Change 32: servicePages.web-development.content.sections[0].paragraphs[1]

**PATH:** `servicePages["web-development"].content.sections[0].paragraphs[1]`

**FIND:**
```
W przeciwieństwie do WordPress czy kreatorów stron, dedykowane aplikacje są budowane wokół Twoich konkretnych wymagań. Twoja firma nie dostosowuje się do szablonu—oprogramowanie jest projektowane pod Twoje dokładne procesy, struktury danych i plany rozwoju.
```

**REPLACE:**
```
Dedykowane aplikacje są budowane wokół Twoich konkretnych wymagań. Firma nie dostosowuje się do szablonu — oprogramowanie jest projektowane pod dokładne procesy, struktury danych i plany rozwoju.
```

---

# SERVICE SUBPAGE — E-commerce

## Change 33: servicePages.ecommerce-development.content.subtitle

**PATH:** `servicePages["ecommerce-development"].content.subtitle`

**FIND:**
```
Niestandardowe sklepy internetowe tworzone w React — szybkie, wydajne i nastawione na konwersję. Projektowane pod Twój katalog i logikę biznesową, bez kompromisów narzuconych przez szablony WooCommerce.
```

**REPLACE:**
```
Dedykowane sklepy internetowe w React — szybkie, wydajne i nastawione na konwersję. Projektowane pod Twój katalog i logikę biznesową, z pełną kontrolą nad każdym detalem.
```

---

# SERVICE SUBPAGE — SaaS

**NO CHANGES** — User confirmed current version is good.

---

# SERVICE SUBPAGE — SEO

**NO CHANGES** — Content is clean, no defensive language.

---

# SERVICE SUBPAGE — AI Integration

**NO CHANGES** — Content is clean, no defensive language.

---

# FAQ PAGE — `faqPage.categories`

## Change 34: faqPage.categories[0].items[0].answer (Services category, first item)

**PATH:** `faqPage.categories[0].items[0].answer`

**FIND:**
```
Buduję produkcyjne aplikacje webowe: strony biznesowe, platformy SaaS, niestandardowe sklepy internetowe i funkcje oparte na AI. Wszystko w React, Next.js i TypeScript—gotowe do użycia od pierwszego dnia, nie prototypy ani demka.
```

**REPLACE:**
```
Buduję produkcyjne aplikacje webowe: strony biznesowe, platformy SaaS, niestandardowe sklepy internetowe i funkcje oparte na AI. Wszystko w React, Next.js i TypeScript — gotowe do użycia od pierwszego dnia, zbudowane pod skalowanie.
```

---

## Change 35: faqPage.categories[0].items[1].answer (Services category, "What don't you build")

**PATH:** `faqPage.categories[0].items[1].answer`

**FIND:**
```
Nie tworzę stron WordPress, witryn z page builderów ani projektów tylko-design. Nie oferuję również brandingu, identyfikacji wizualnej czy usług marketingowych. Moja praca to rozwój oprogramowania—pisanie prawdziwego kodu, który się skaluje.
```

**REPLACE:**
```
Skupiam się wyłącznie na dedykowanym oprogramowaniu — strony, aplikacje webowe i SaaS budowane w React i Next.js. Design, branding i marketing są poza moim zakresem. Jeśli potrzebujesz tych usług, mogę polecić specjalistów.
```

---

## Change 36: faqPage.categories[0].items[2].answer (Services category, "Solo or team")

**PATH:** `faqPage.categories[0].items[2].answer`

**FIND:**
```
Pracuję jako samodzielny full-stack developer i sam obsługuję cały projekt. Bez przekazywania między osobami, bez project managerów, bez luk w komunikacji. Pracujesz bezpośrednio z osobą, która pisze Twój kod.
```

**REPLACE:**
```
Pracuję jako samodzielny full-stack developer i sam obsługuję cały projekt. Pracujesz bezpośrednio z osobą, która pisze Twój kod.
```

---

# SUMMARY

## Total Changes: 39

| Section | Changes |
|---------|---------|
| Homepage Hero | 2 |
| Homepage About | 5 |
| Homepage Services | 7 |
| Homepage Process | 5 |
| Homepage FAQ Teaser | 1 |
| Homepage Footer | 3 |
| About Page Bio | 3 |
| About Page CTA | 2 |
| Services Overview | 2 |
| Web Development Subpage | 2 |
| E-commerce Subpage | 1 |
| FAQ Page | 3 |
| **Diacritic Fixes (common)** | **3** |

## No Changes Needed

- SaaS subpage — clean
- SEO subpage — clean
- AI Integration subpage — clean
- Contact page — clean
- Projects page — clean
- Privacy Policy — legal, untouched
- Terms & Conditions — legal, untouched
- All SEO metadata — preserved
- All href values — preserved
- All linkText values — preserved

---

# DIACRITIC FIXES — `common` section

> **NOTE:** These are standalone fixes. No internal linking affected.

## Change 37: common.learnMore

**PATH:** `common.learnMore`

**FIND:**
```
Dowiedz sie wiecej
```

**REPLACE:**
```
Dowiedz się więcej
```

---

## Change 38: common.readMore

**PATH:** `common.readMore`

**FIND:**
```
Czytaj wiecej
```

**REPLACE:**
```
Czytaj więcej
```

---

## Change 39: common.backToHome

**PATH:** `common.backToHome`

**FIND:**
```
Powrot do strony glownej
```

**REPLACE:**
```
Powrót do strony głównej
```

---

# VERIFICATION CHECKLIST

After implementation, verify:

- [ ] All 39 FIND strings were found and replaced
- [ ] No broken JSON syntax (valid UTF-8 encoding)
- [ ] Internal links still work (all `linkText` and `href` preserved)
- [ ] Keywords preserved: programista, Częstochowa, React, Next.js, SEO, aplikacje webowe, sklepy internetowe
- [ ] No "Nie X", "Bez Y", "W przeciwieństwie do Z" patterns remain
- [ ] Polish diacritics correct: ą, ę, ó, ś, ć, ż, ź, ł, ń

---

*Version: 2.0*  
*Created: 2026-02-01*  
*Ready for: Claude Code in Cursor*
