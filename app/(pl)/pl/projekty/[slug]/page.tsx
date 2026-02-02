import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/config';
import { generateCaseStudyPageMetadata } from '@/lib/seo/metadata';
import { CaseStudyPageJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import CaseStudyClient from '@/components/sections/CaseStudyClient';
import { CaseStudyPageDict } from '@/types/i18n';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const dictionary = await getDictionary('pl');
  const caseStudies = (dictionary.caseStudies || {}) as Record<string, CaseStudyPageDict>;

  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dictionary = await getDictionary('pl');
  const caseStudies = dictionary.caseStudies as Record<string, CaseStudyPageDict> | undefined;
  const caseStudyData = caseStudies?.[slug];

  if (!caseStudyData) {
    return {
      title: 'Case Study Nie Znaleziono | Max Mendes',
    };
  }

  return generateCaseStudyPageMetadata(caseStudyData, 'pl');
}

export default async function CaseStudyPagePL({ params }: PageProps) {
  const { slug } = await params;
  const dictionary = await getDictionary('pl');
  const caseStudies = dictionary.caseStudies as Record<string, CaseStudyPageDict> | undefined;
  const caseStudyData = caseStudies?.[slug];

  if (!caseStudyData) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Strona Główna', url: '/pl' },
    { name: 'Projekty', url: '/pl/projekty' },
    { name: caseStudyData.label },
  ];

  return (
    <>
      <CaseStudyPageJsonLd caseStudyData={caseStudyData} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <CaseStudyClient locale="pl" caseStudyData={caseStudyData} />
    </>
  );
}
