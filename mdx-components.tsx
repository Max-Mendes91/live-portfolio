import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { slugify, nodeToText } from '@/lib/slug';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-text-primary mb-6 sm:mb-8">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id || slugify(nodeToText(children))} className="scroll-mt-28 text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-text-primary mt-10 sm:mt-12 mb-4 sm:mb-5">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id || slugify(nodeToText(children))} className="scroll-mt-28 text-lg sm:text-xl font-normal tracking-tight text-text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-4 sm:mb-5">
        {children}
      </p>
    ),
    a: ({ href, children }) => {
      if (!href) return <span>{children}</span>;
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return (
          <Link href={href} className="text-text-primary underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-text-primary underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors">
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 sm:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-text-secondary text-sm sm:text-base font-light">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 sm:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-text-secondary text-sm sm:text-base font-light">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-white/20 pl-4 sm:pl-6 my-6 sm:my-8 italic text-text-muted">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-medium text-text-primary">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-text-secondary">{children}</em>
    ),
    hr: () => (
      <hr className="border-border my-8 sm:my-10" />
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-white/5 border border-border text-sm text-text-primary font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="rounded-xl bg-surface border border-border p-4 sm:p-6 overflow-x-auto mb-5 sm:mb-6 text-sm">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt || ''} className="rounded-xl border border-border my-6 sm:my-8 w-full" />
    ),
    table: ({ children }) => (
      <div className="not-prose my-6 sm:my-8 overflow-x-auto rounded-xl border border-border bg-[#0A0A0A]/60">
        <table className="w-full table-fixed text-left text-[11px] leading-snug sm:text-sm sm:leading-normal border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-white/[0.07] text-text-primary">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="[&>tr:nth-child(even)]:bg-white/[0.02] [&>tr:last-child>td]:border-0">
        {children}
      </tbody>
    ),
    th: ({ children }) => (
      <th className="px-2 sm:px-4 py-2 sm:py-3 font-medium border-b border-border align-top break-words hyphens-auto">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-2 sm:px-4 py-2 sm:py-3 text-text-secondary font-light border-b border-border-subtle align-top break-words hyphens-auto">
        {children}
      </td>
    ),
    ...components,
  };
}
