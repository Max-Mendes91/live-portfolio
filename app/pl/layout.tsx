import type { Metadata, Viewport } from 'next';
import { generateHomeMetadata, viewport as viewportConfig } from '@/lib/seo/metadata';

export const metadata: Metadata = generateHomeMetadata('pl');

export const viewport: Viewport = viewportConfig;

export default function PolishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
