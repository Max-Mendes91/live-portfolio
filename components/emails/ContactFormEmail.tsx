import { SITE_CONFIG } from '@/lib/seo/config';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

// Email colors - lighter body with dark card
const colors = {
  background: '#1a1a1a',           // Lighter grey body
  surface: '#080808',              // Dark card (bg-surface)
  messageBox: '#2a2a2a',           // Lighter grey for message box
  textPrimary: '#FFFFFF',          // text-text-primary
  textSecondary: '#a1a1aa',        // text-text-secondary (zinc-400)
  textMuted: '#71717a',            // text-text-muted (zinc-500)
  border: 'rgba(255,255,255,0.1)', // border-border (white/10)
  borderSubtle: 'rgba(255,255,255,0.05)', // border-border-subtle (white/5)
  accent: '#3b82f6',               // blue accent for links
};

export function renderContactEmail({ name, email, message }: ContactFormEmailProps): string {
  const logoUrl = `${SITE_CONFIG.url}/navbar-logo.png`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: ${colors.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="padding: 32px 20px;">
    <div style="max-width: 520px; margin: 0 auto; background-color: ${colors.surface}; border-radius: 16px; border: 1px solid ${colors.border}; overflow: hidden;">

      <!-- Header with Logo -->
      <div style="padding: 24px 24px 20px; border-bottom: 1px solid ${colors.borderSubtle}; text-align: center;">
        <img src="${logoUrl}" alt="${SITE_CONFIG.owner.name}" style="height: 36px; margin-bottom: 16px;" />
        <h1 style="color: ${colors.textPrimary}; font-size: 20px; font-weight: 600; margin: 0 0 6px;">
          New Contact Form
        </h1>
        <p style="color: ${colors.textMuted}; font-size: 13px; margin: 0;">
          Someone reached out through your portfolio
        </p>
      </div>

      <!-- Content -->
      <div style="padding: 24px;">

        <!-- From Section -->
        <div style="margin-bottom: 16px;">
          <p style="color: ${colors.textMuted}; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px;">
            From
          </p>
          <p style="color: ${colors.textPrimary}; font-size: 15px; font-weight: 500; margin: 0;">
            ${escapeHtml(name)} · <a href="mailto:${escapeHtml(email)}" style="color: ${colors.accent}; text-decoration: none;">${escapeHtml(email)}</a>
          </p>
        </div>

        <!-- Divider -->
        <div style="height: 1px; background-color: ${colors.borderSubtle}; margin: 16px 0;"></div>

        <!-- Message Section -->
        <div>
          <p style="color: ${colors.textMuted}; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">
            Message
          </p>
          <div style="background-color: ${colors.messageBox}; border-radius: 10px; padding: 16px; border: 1px solid ${colors.borderSubtle};">
            <p style="color: ${colors.textPrimary}; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 16px 24px; border-top: 1px solid ${colors.borderSubtle};">
        <p style="color: ${colors.textMuted}; font-size: 12px; margin: 0; text-align: center;">
          Reply to this email to respond to ${escapeHtml(name)}
        </p>
      </div>
    </div>

    <!-- Brand Footer -->
    <div style="text-align: center; margin-top: 24px;">
      <p style="color: ${colors.textMuted}; font-size: 12px; margin: 0;">
        ${SITE_CONFIG.owner.name}
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

export default renderContactEmail;
