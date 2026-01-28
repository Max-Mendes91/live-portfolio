import { SITE_CONFIG } from '@/lib/seo/config';

interface ConfirmationEmailProps {
  name: string;
  locale?: 'en' | 'pl';
}

// Email colors - lighter body with dark card
const colors = {
  background: '#1a1a1a',           // Lighter grey body
  surface: '#080808',              // Dark card (bg-surface)
  textPrimary: '#FFFFFF',          // text-text-primary
  textSecondary: '#a1a1aa',        // text-text-secondary (zinc-400)
  textMuted: '#71717a',            // text-text-muted (zinc-500)
  border: 'rgba(255,255,255,0.1)', // border-border (white/10)
  borderSubtle: 'rgba(255,255,255,0.05)', // border-border-subtle (white/5)
  accent: '#3b82f6',               // blue accent
  accentMuted: 'rgba(59,130,246,0.1)', // accent with opacity
};

const content = {
  en: {
    subject: 'Thank you for reaching out!',
    greeting: 'Hi',
    thankYou: 'Thank you for contacting me!',
    received: 'I\'ve received your message and will get back to you within',
    timeframe: '24 hours',
    meanwhile: 'In the meantime, feel free to check out my recent work or connect with me on social media.',
    viewWork: 'View My Work',
    closing: 'Looking forward to connecting with you!',
    signature: 'Best regards,',
    footer: 'This is an automated confirmation. Please do not reply to this email.',
  },
  pl: {
    subject: 'Dziękuję za kontakt!',
    greeting: 'Cześć',
    thankYou: 'Dziękuję za kontakt!',
    received: 'Otrzymałem Twoją wiadomość i odpowiem w ciągu',
    timeframe: '24 godzin',
    meanwhile: 'W międzyczasie możesz sprawdzić moje ostatnie projekty lub połączyć się ze mną w mediach społecznościowych.',
    viewWork: 'Zobacz projekty',
    closing: 'Do usłyszenia!',
    signature: 'Pozdrawiam,',
    footer: 'To jest automatyczne potwierdzenie. Proszę nie odpowiadać na tego maila.',
  },
};

export function renderConfirmationEmail({ name, locale = 'en' }: ConfirmationEmailProps): string {
  const logoUrl = `${SITE_CONFIG.url}/navbar-logo.png`;
  const t = content[locale];
  const projectsUrl = locale === 'pl'
    ? `${SITE_CONFIG.url}/pl/projekty`
    : `${SITE_CONFIG.url}/en/projects`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: ${colors.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: ${colors.surface}; border-radius: 16px; border: 1px solid ${colors.border}; overflow: hidden;">

      <!-- Header with Logo -->
      <div style="padding: 32px 32px 24px; text-align: center; border-bottom: 1px solid ${colors.borderSubtle};">
        <img src="${logoUrl}" alt="${SITE_CONFIG.owner.name}" style="height: 40px; margin-bottom: 16px;" />
      </div>

      <!-- Content -->
      <div style="padding: 32px;">

        <!-- Greeting -->
        <h1 style="color: ${colors.textPrimary}; font-size: 24px; font-weight: 600; margin: 0 0 24px; letter-spacing: -0.02em;">
          ${t.greeting} ${escapeHtml(name)}!
        </h1>

        <!-- Thank you message -->
        <p style="color: ${colors.textSecondary}; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
          ${t.thankYou}
        </p>

        <!-- Response time box -->
        <div style="background-color: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid rgba(255,255,255,0.2);">
          <p style="color: ${colors.textPrimary}; font-size: 15px; line-height: 1.6; margin: 0;">
            ${t.received} <strong>${t.timeframe}</strong>.
          </p>
        </div>

        <!-- Meanwhile text -->
        <p style="color: ${colors.textSecondary}; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
          ${t.meanwhile}
        </p>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 32px 0;">
          <a href="${projectsUrl}" style="display: inline-block; background-color: rgba(255,255,255,0.08); color: ${colors.textSecondary}; font-size: 13px; font-weight: 500; text-decoration: none; padding: 12px 28px; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.1);">
            ${t.viewWork} →
          </a>
        </div>

        <!-- Closing -->
        <p style="color: ${colors.textSecondary}; font-size: 15px; line-height: 1.7; margin: 24px 0 8px;">
          ${t.closing}
        </p>

        <p style="color: ${colors.textPrimary}; font-size: 15px; margin: 0;">
          ${t.signature}<br />
          <strong>${SITE_CONFIG.owner.name}</strong>
        </p>

        <!-- Social Links -->
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid ${colors.borderSubtle};">
          <p style="color: ${colors.textMuted}; font-size: 12px; margin: 0 0 12px; text-align: center;">
            Connect with me
          </p>
          <div style="text-align: center;">
            <a href="${SITE_CONFIG.owner.social.github}" style="display: inline-block; margin: 0 8px; color: ${colors.textMuted}; text-decoration: none; font-size: 13px;">GitHub</a>
            <a href="${SITE_CONFIG.owner.social.linkedin}" style="display: inline-block; margin: 0 8px; color: ${colors.textMuted}; text-decoration: none; font-size: 13px;">LinkedIn</a>
            <a href="${SITE_CONFIG.owner.social.x}" style="display: inline-block; margin: 0 8px; color: ${colors.textMuted}; text-decoration: none; font-size: 13px;">X</a>
            <a href="${SITE_CONFIG.owner.social.instagram}" style="display: inline-block; margin: 0 8px; color: ${colors.textMuted}; text-decoration: none; font-size: 13px;">Instagram</a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 20px 32px; border-top: 1px solid ${colors.borderSubtle};">
        <p style="color: ${colors.textMuted}; font-size: 11px; margin: 0; text-align: center;">
          ${t.footer}
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

export function getConfirmationSubject(locale: 'en' | 'pl' = 'en'): string {
  return content[locale].subject;
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

export default renderConfirmationEmail;
