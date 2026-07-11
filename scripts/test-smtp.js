// Test outbound email through Resend SMTP before configuring Gmail "Send mail as".
// Usage: node scripts/test-smtp.js
// Reads RESEND_API_KEY from .env.local (SMTP password = API key, user is always "resend").

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

function loadEnv(file) {
  const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  for (const line of content.split('\n')) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

async function main() {
  loadEnv('.env.local');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not found in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true, // SSL
    auth: { user: 'resend', pass: apiKey },
  });

  const info = await transporter.sendMail({
    from: '"Max Mendes" <contact@maxmendes.dev>',
    to: 'maxmendesnoah1991@gmail.com',
    subject: 'Resend SMTP test from contact@maxmendes.dev',
    text: 'Test email sent through Resend SMTP relay. Check "Show original" in Gmail: SPF and DKIM should both pass for maxmendes.dev.',
  });

  console.log('Sent OK');
  console.log('Message ID:', info.messageId);
  console.log('Server response:', info.response);
}

main().catch((err) => {
  console.error('Send failed:', err.message);
  process.exit(1);
});
