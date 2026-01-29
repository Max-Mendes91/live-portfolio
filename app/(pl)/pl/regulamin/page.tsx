import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const termsConditions = dictionary.termsConditions;

  if (!termsConditions) return { title: 'Regulamin | Max Mendes' };

  return {
    title: `${termsConditions.title} | Max Mendes`,
    description: 'Regulamin korzystania ze strony maxmendes.dev. Zasady i wytyczne dotyczące korzystania z tej witryny.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: getFullUrl('/pl/regulamin'),
      languages: {
        en: getFullUrl('/en/terms'),
        pl: getFullUrl('/pl/regulamin'),
      },
    },
  };
}

export default async function TermsPage() {
  const dictionary = await getDictionary('pl');
  const termsConditions = dictionary.termsConditions;

  if (!termsConditions) {
    return null;
  }

  const { sections } = termsConditions;

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
                {termsConditions.title}
              </h1>
              <p className="text-text-muted text-xs sm:text-sm">
                Ostatnia aktualizacja: {termsConditions.lastUpdated}
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-8 sm:space-y-10 short:space-y-6 text-text-secondary">
              {/* Acceptance */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.acceptance.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.acceptance.content}</p>
              </section>

              {/* Services */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.services.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.services.content}</p>
                {sections.services.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm mb-2 sm:mb-3">
                    {sections.services.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sections.services.additionalContent && (
                  <p className="text-sm sm:text-base leading-relaxed">{sections.services.additionalContent}</p>
                )}
              </section>

              {/* User Obligations */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.userObligations.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">{sections.userObligations.content}</p>
                {sections.userObligations.items && (
                  <ul className="list-disc list-inside space-y-1 text-text-muted text-xs sm:text-sm">
                    {sections.userObligations.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.intellectualProperty.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.intellectualProperty.content}</p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.limitationLiability.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.limitationLiability.content}</p>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.disclaimer.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.disclaimer.content}</p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.governingLaw.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.governingLaw.content}</p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.disputeResolution.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.disputeResolution.content}</p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.termination.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.termination.content}</p>
              </section>

              {/* Contact Info */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.contactInfo.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{sections.contactInfo.content}</p>
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

              {/* Changes */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.changes.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.changes.content}</p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.severability.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.severability.content}</p>
              </section>

              {/* Entire Agreement */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                  {sections.entireAgreement.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">{sections.entireAgreement.content}</p>
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
