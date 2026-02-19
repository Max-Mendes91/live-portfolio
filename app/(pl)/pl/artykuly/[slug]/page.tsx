import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/config';
import { generateBlogPostMetadata } from '@/lib/seo/metadata';
import { BlogPostJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getBlogPostSlugs, getBlogPost } from '@/lib/blog';
import BlogPostLayout from '@/components/sections/BlogPostLayout';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs('pl');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost('pl', slug);

  if (!post) {
    return { title: 'Artykuł nie znaleziony | Max Mendes' };
  }

  return generateBlogPostMetadata(post.meta, 'pl');
}

export default async function ArtykulPostPage({ params }: PageProps) {
  const { slug } = await params;
  const dictionary = await getDictionary('pl');
  const post = await getBlogPost('pl', slug);

  if (!post) {
    notFound();
  }

  const { meta, Content } = post;

  const breadcrumbItems = [
    { name: 'Strona główna', url: '/pl' },
    { name: 'Artykuły', url: '/pl/artykuly' },
    { name: meta.title },
  ];

  return (
    <>
      <BlogPostJsonLd postMeta={meta} locale="pl" />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BlogPostLayout locale="pl" dictionary={dictionary} meta={meta}>
        <Content />
      </BlogPostLayout>
    </>
  );
}
