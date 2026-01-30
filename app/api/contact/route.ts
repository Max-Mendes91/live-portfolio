import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { renderContactEmail } from '@/components/emails/ContactFormEmail';
import { renderConfirmationEmail, getConfirmationSubject } from '@/components/emails/ConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validation helpers
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateContactForm(data: ContactFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Valid email is required';
  }

  if (!data.message || data.message.trim().length < 30) {
    errors.message = 'Message must be at least 30 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as ContactFormData;

    // Server-side validation
    const validation = validateContactForm({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Send email via Resend
    // Using Gmail for sandbox mode - change to SITE_CONFIG.owner.email when domain is verified
    const CONTACT_RECIPIENT = 'maxmendesnoah1991@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Change to your domain later: contact@maxmendes.dev
      to: CONTACT_RECIPIENT,
      replyTo: email.trim(),
      subject: `New Contact Form: ${name.trim()}`,
      html: renderContactEmail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user (will only work with verified domain)
    // This won't break the flow if it fails - we still return success for the main email
    try {
      await resend.emails.send({
        from: 'Max Mendes <onboarding@resend.dev>', // Change to: noreply@yourdomain.com
        to: email.trim(),
        subject: getConfirmationSubject('en'), // TODO: detect locale from request
        html: renderConfirmationEmail({
          name: name.trim(),
          locale: 'en',
        }),
      });
    } catch (confirmationError) {
      // Log but don't fail - confirmation email is nice-to-have
      console.log('Confirmation email skipped (domain not verified):', confirmationError);
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error instanceof Error ? error.message : error);
    console.error('Full error:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
