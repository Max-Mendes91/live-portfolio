// This root layout is required by Next.js but all actual content
// goes through route groups (en) and (pl) which have their own
// layouts with proper lang attributes.
//
// The middleware redirects / to /en or /pl, so this layout
// is only a technical requirement.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return children directly - the route group layouts handle html/body
  return children;
}
