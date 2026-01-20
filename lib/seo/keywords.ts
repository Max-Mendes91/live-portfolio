// SEO Keywords organized by language and category

export const KEYWORDS = {
  en: {
    core: [
      'web developer Poland',
      'freelance web developer',
      'React developer for hire',
      'Next.js developer',
      'full stack developer',
    ],
    synonyms: [
      'website creator',
      'website builder',
      'hire web developer',
      'web developer for hire',
      'web designer for hire',
      'custom website development',
      'website maker',
      'build website',
      'create website',
      'website development services',
      'professional web developer',
      'experienced web developer',
      'skilled web developer',
      'affordable web developer',
      'remote web developer',
    ],
    location: [
      'web developer Czestochowa Poland',
      'web developer Krakow',
      'web developer Warsaw',
      'Polish web developer',
      'Eastern European developer',
      'offshore web developer Poland',
    ],
    services: {
      webDevelopment: [
        'full stack development',
        'React.js development',
        'Next.js development',
        'Node.js developer',
        'JavaScript developer',
        'TypeScript developer',
        'frontend developer',
        'backend developer',
        'custom web applications',
        'web app development',
      ],
      webDesign: [
        'UI/UX designer',
        'web design services',
        'responsive web design',
        'modern website design',
        'website redesign',
        'Figma designer',
        'user interface design',
        'user experience design',
      ],
      seo: [
        'SEO specialist',
        'SEO optimization services',
        'technical SEO',
        'on-page SEO',
        'local SEO services',
        'SEO audit',
        'search engine optimization',
      ],
      ecommerce: [
        'e-commerce developer',
        'online store development',
        'ecommerce website',
        'Shopify developer',
        'custom e-commerce solutions',
        'payment integration',
        'shopping cart development',
      ],
    },
    intent: [
      'looking for web developer',
      'need a website',
      'website quote',
      'how much does a website cost',
      'affordable web development',
      'professional website services',
      'custom web solutions',
      'website redesign',
      'website maintenance',
    ],
    ukUs: [
      'web developer UK clients',
      'web developer USA clients',
      'European web developer',
      'timezone-friendly developer',
    ],
  },
  pl: {
    core: [
      'web developer Czestochowa',
      'programista Czestochowa',
      'tworzenie stron internetowych',
      'strony internetowe Czestochowa',
      'pozycjonowanie stron',
    ],
    synonyms: [
      'tworzenie stron www',
      'budowa stron internetowych',
      'wykonanie strony www',
      'projektowanie stron www',
      'projektant stron internetowych',
      'firma tworzaca strony',
      'agencja webowa',
      'webmaster',
      'strony www na zamowienie',
      'profesjonalne strony internetowe',
      'nowoczesne strony www',
      'responsywne strony internetowe',
      'strony mobilne',
      'kreator stron www',
      'tworca stron internetowych',
    ],
    location: [
      'strony internetowe Krakow',
      'strony internetowe Warszawa',
      'strony internetowe Katowice',
      'strony internetowe Wroclaw',
      'web developer Slask',
      'programista Slaskie',
      'agencja webowa Krakow',
      'tworzenie stron Warszawa',
    ],
    services: {
      webDevelopment: [
        'aplikacje webowe',
        'aplikacje React',
        'programista React',
        'developer Next.js',
        'programista Node.js',
        'programista JavaScript',
        'programista TypeScript',
      ],
      webDesign: [
        'projektowanie UI/UX',
        'projektowanie stron www',
        'responsywny design',
        'nowoczesny design strony',
        'przebudowa strony',
        'projektant Figma',
      ],
      seo: [
        'pozycjonowanie SEO',
        'optymalizacja stron',
        'audyt SEO',
        'pozycjonowanie lokalne',
        'optymalizacja SEO',
        'specjalista SEO',
      ],
      ecommerce: [
        'sklepy internetowe',
        'sklepy online',
        'e-commerce',
        'tworzenie sklepow internetowych',
        'integracja platnosci',
        'koszyk zakupowy',
      ],
    },
    intent: [
      'zatrudnij programiste',
      'szukam web developera',
      'potrzebuje strony internetowej',
      'wycena strony www',
      'ile kosztuje strona internetowa',
      'tania strona internetowa',
      'profesjonalna strona www',
      'darmowa wycena strony',
    ],
  },
};

// Get all keywords for a locale (flattened)
export function getAllKeywords(locale: 'en' | 'pl'): string[] {
  const localeKeywords = KEYWORDS[locale];
  const allKeywords: string[] = [
    ...localeKeywords.core,
    ...localeKeywords.synonyms,
    ...localeKeywords.location,
    ...localeKeywords.intent,
  ];

  // Add service keywords
  Object.values(localeKeywords.services).forEach((serviceKeywords) => {
    allKeywords.push(...serviceKeywords);
  });

  // Add UK/US specific for English
  if (locale === 'en' && 'ukUs' in localeKeywords) {
    allKeywords.push(...localeKeywords.ukUs);
  }

  return [...new Set(allKeywords)]; // Remove duplicates
}

// Get keywords for a specific service
export function getServiceKeywords(
  locale: 'en' | 'pl',
  service: 'webDevelopment' | 'webDesign' | 'seo' | 'ecommerce'
): string[] {
  return KEYWORDS[locale].services[service];
}

// Get primary keywords (core + location) for meta tags
export function getPrimaryKeywords(locale: 'en' | 'pl'): string[] {
  const localeKeywords = KEYWORDS[locale];
  return [...localeKeywords.core, ...localeKeywords.location.slice(0, 3)];
}
