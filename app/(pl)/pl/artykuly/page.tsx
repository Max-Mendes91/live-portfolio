import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateBlogListingMetadata } from '@/lib/seo/metadata';
import { BlogListingJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getBlogPosts } from '@/lib/blog';
import BlogListingClient from '@/components/sections/BlogListingClient';
import { BlogPageDict } from '@/types/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const blogData = dictionary.blogPage as BlogPageDict | undefined;

  if (!blogData) {
    return { title: 'Artykuły | Max Mendes' };
  }

  return generateBlogListingMetadata(blogData, 'pl');
}

export default async function ArtykulyPage() {
  const dictionary = await getDictionary('pl');
  const blogData = dictionary.blogPage as BlogPageDict | undefined;
  const posts = await getBlogPosts('pl');

  const breadcrumbItems = [
    { name: 'Strona główna', url: '/pl' },
    { name: 'Artykuły' },
  ];

  return (
    <>
      {blogData && <BlogListingJsonLd blogData={blogData} posts={posts} locale="pl" />}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BlogListingClient locale="pl" dictionary={dictionary} posts={posts} />
    </>
  );
}
