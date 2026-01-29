import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const privacyPolicy = dictionary.privacyPolicy;

  if (!privacyPolicy) return { title: 'Polityka Prywatności | Max Mendes' };

  return {
    title: `${privacyPolicy.title} | Max Mendes`,
    description: 'Polityka Prywatności maxmendes.dev. Informacje o zbieraniu i przetwarzaniu danych oraz Twoje prawa zgodnie z RODO.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: getFullUrl('/pl/polityka-prywatnosci'),
      languages: {
        en: getFullUrl('/en/privacy'),
        pl: getFullUrl('/pl/polityka-prywatnosci'),
      },
    },
  };
}

export default async function PrivacyPolicyPage() {
  const dictionary = await getDictionary('pl');
  const privacyPolicy = dictionary.privacyPolicy;

  if (!privacyPolicy) {
    return null;
  }

  const { sections } = privacyPolicy;

  return (
    <div className="relative">
      {/* Main content */}
      <div className="relative z-10 bg-background">
        <Navbar locale="pl" dictionary={dictionary.nav} />

        <main className="min-h-screen bg-background pt-24 pb-16 sm:pt-32 sm:pb-20 short:pt-20 short:pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <header className="mb-10 sm:mb-14 short:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
                {privacyPolicy.title}
              </h1>
              <p className="text-text-muted text-xs sm:text-sm">
                Ostatnia aktualizacja: {privacyPolicy.lastUpdated}
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-8 sm:space-y-10 short:space-y-6 text-text-secondary">
              {/* Controller */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.controller.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.controller.content}</p>
              </section>

              {/* Data Collected */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.dataCollected.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.dataCollected.content}</p>
                {sections.dataCollected.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm">
                    {sections.dataCollected.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Purpose */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.purpose.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.purpose.content}</p>
                {sections.purpose.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm">
                    {sections.purpose.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.legalBasis.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.legalBasis.content}</p>
                {sections.legalBasis.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm">
                    {sections.legalBasis.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Third Parties */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.thirdParties.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.thirdParties.content}</p>
                {sections.thirdParties.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm mb-2 sm:mb-3">
                    {sections.thirdParties.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sections.thirdParties.additionalContent && (
                  <p className="text-sm sm:text-base leading-relaxed">{sections.thirdParties.additionalContent}</p>
                )}
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.internationalTransfers.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.internationalTransfers.content}</p>
              </section>

              {/* Retention */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.retention.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.retention.content}</p>
                {sections.retention.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm">
                    {sections.retention.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Rights */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.rights.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.rights.content}</p>
                {sections.rights.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm mb-2 sm:mb-3">
                    {sections.rights.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sections.rights.additionalContent && (
                  <p className="text-sm sm:text-base leading-relaxed">{sections.rights.additionalContent}</p>
                )}
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.cookies.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.cookies.content}</p>
                {sections.cookies.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm mb-2 sm:mb-3">
                    {sections.cookies.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sections.cookies.additionalContent && (
                  <p className="text-sm sm:text-base leading-relaxed">{sections.cookies.additionalContent}</p>
                )}
              </section>

              {/* Complaint */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.complaint.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.complaint.content}</p>
                {sections.complaint.authority && (
                  <div className="bg-surface border border-border rounded-lg p-3 sm:p-4 mb-2 sm:mb-3">
                    <p className="font-medium text-text-primary text-sm sm:text-base">{sections.complaint.authority.name}</p>
                    <p className="text-text-muted text-xs sm:text-sm">{sections.complaint.authority.address}</p>
                    <a
                      href={sections.complaint.authority.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {sections.complaint.authority.website}
                    </a>
                  </div>
                )}
                {sections.complaint.additionalContent && (
                  <p className="text-sm sm:text-base leading-relaxed">{sections.complaint.additionalContent}</p>
                )}
              </section>

              {/* Automated Decisions */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.automatedDecisions.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.automatedDecisions.content}</p>
              </section>

              {/* Children */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.children.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.children.content}</p>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.updates.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.updates.content}</p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.contact.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{sections.contact.content}</p>
                <div className="bg-surface border border-border rounded-lg p-3 sm:p-4">
                  <p className="font-medium text-text-primary text-sm sm:text-base">{SITE_CONFIG.owner.name}</p>
                  <p className="text-text-muted text-xs sm:text-sm">{SITE_CONFIG.owner.address.city}, {SITE_CONFIG.owner.address.country}</p>
                  <a
                    href={`mailto:${SITE_CONFIG.owner.email}`}
                    className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {SITE_CONFIG.owner.email}
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Spacer for footer reveal */}
          <div className="h-[15vh]" />
        </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen-safe w-full">
        <FooterSection locale="pl" dictionary={dictionary.footer} hideCTA />
      </div>
    </div>
  );
}
