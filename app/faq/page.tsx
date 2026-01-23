import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | Max Mendes',
  description: 'Frequently asked questions about web development services.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-8">
          Frequently Asked Questions
        </h1>

        <p className="text-text-secondary text-lg">
          Coming soon.
        </p>
      </div>
    </main>
  );
}
