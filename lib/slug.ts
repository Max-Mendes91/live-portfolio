import GithubSlugger from 'github-slugger';
import React from 'react';

/**
 * Slugify a single heading into a URL-safe anchor id.
 * A fresh slugger per call keeps it stateless so the value is identical
 * whether it runs in the MDX renderer (heading id) or the TOC builder.
 */
export function slugify(text: string): string {
  return new GithubSlugger().slug(text);
}

/** Flatten MDX/React heading children down to their plain text. */
export function nodeToText(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  if (React.isValidElement(node)) {
    return nodeToText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}
