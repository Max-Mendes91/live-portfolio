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
  const slugs = getBlogPostSlugs('en');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost('en', slug);

  if (!post) {
    return { title: 'Post Not Found | Max Mendes' };
  }

  return generateBlogPostMetadata(post.meta, 'en');
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const dictionary = await getDictionary('en');
  const post = await getBlogPost('en', slug);

  if (!post) {
    notFound();
  }

  const { meta, Content } = post;

  const breadcrumbItems = [
    { name: 'Home', url: '/en' },
    { name: 'Blog', url: '/en/blog' },
    { name: meta.title },
  ];

  return (
    <>
      <BlogPostJsonLd postMeta={meta} locale="en" />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BlogPostLayout locale="en" dictionary={dictionary} meta={meta}>
        <Content />
      </BlogPostLayout>
    </>
  );
}
