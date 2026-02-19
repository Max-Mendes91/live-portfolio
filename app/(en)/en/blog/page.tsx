import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateBlogListingMetadata } from '@/lib/seo/metadata';
import { BlogListingJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getBlogPosts } from '@/lib/blog';
import BlogListingClient from '@/components/sections/BlogListingClient';
import { BlogPageDict } from '@/types/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const blogData = dictionary.blogPage as BlogPageDict | undefined;

  if (!blogData) {
    return { title: 'Blog | Max Mendes' };
  }

  return generateBlogListingMetadata(blogData, 'en');
}

export default async function BlogPage() {
  const dictionary = await getDictionary('en');
  const blogData = dictionary.blogPage as BlogPageDict | undefined;
  const posts = await getBlogPosts('en');

  const breadcrumbItems = [
    { name: 'Home', url: '/en' },
    { name: 'Blog' },
  ];

  return (
    <>
      {blogData && <BlogListingJsonLd blogData={blogData} posts={posts} locale="en" />}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BlogListingClient locale="en" dictionary={dictionary} posts={posts} />
    </>
  );
}
