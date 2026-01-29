'use client';

import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import XIcon from '@/components/ui/XIcon';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import PulseBadge from '@/components/ui/PulseBadge';
import { Display, Heading, Text, BinderClip } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/seo/config';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';

interface ContactClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactClient: React.FC<ContactClientProps> = ({ locale, dictionary }) => {
  const { owner } = SITE_CONFIG;
  const { contact, nav, footer } = dictionary;
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState<string>('');

  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return locale === 'pl' ? 'Imię jest wymagane' : 'Name is required';
        if (value.trim().length < 2) return locale === 'pl' ? 'Imię musi mieć co najmniej 2 znaki' : 'Name must be at least 2 characters';
        if (!/^[a-zA-ZàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]+$/.test(value.trim()))
          return locale === 'pl' ? 'Imię zawiera nieprawidłowe znaki' : 'Name contains invalid characters';
        return undefined;
      case 'email':
        if (!value.trim()) return locale === 'pl' ? 'Email jest wymagany' : 'Email is required';
        if (!EMAIL_REGEX.test(value.trim())) return locale === 'pl' ? 'Wprowadź poprawny adres email' : 'Enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return locale === 'pl' ? 'Wiadomość jest wymagana' : 'Message is required';
        if (value.trim().length < 30)
          return locale === 'pl'
            ? `Wiadomość musi mieć co najmniej 30 znaków (${value.trim().length}/30)`
            : `Message must be at least 30 characters (${value.trim().length}/30)`;
        return undefined;
      default:
        return undefined;
    }
  }, [locale]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, [validateField]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  }, [touched, validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: FormErrors = {};
    let hasError = false;

    ['name', 'email', 'message'].forEach(field => {
      const error = validateField(field, (formData.get(field) as string) || '');
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (hasError) return;

    // Submit to API
    setFormStatus('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      formRef.current?.reset();
      setTouched({});
      setErrors({});
    } catch (error) {
      setFormStatus('error');
      setServerError(
        error instanceof Error
          ? error.message
          : locale === 'pl'
            ? 'Nie udało się wysłać wiadomości. Spróbuj ponownie.'
            : 'Failed to send message. Please try again.'
      );
    }
  }, [validateField, locale]);

  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;

  if (!contact) return null;

  const inputBaseClass = 'w-full px-4 py-3 rounded-xl bg-surface border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-active transition-colors';
  const inputErrorClass = 'border-red-500/50';
  const inputValidClass = 'border-border';

  return (
    <div className="relative">
      <FloatingTechIcons preset="contact" />

      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="relative min-h-screen bg-background overflow-hidden">

          {/* Hero Section */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 200, scale: prefersReducedMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 1.6,
                ease: [0.22, 1, 0.36, 1],
                ...(!prefersReducedMotion ? { y: { type: "spring", damping: 25, stiffness: 80, mass: 1.2 } } : {}),
              }}
              style={{ willChange: 'transform, opacity' }}
              className="relative max-w-4xl mx-auto border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
            >
              {/* Mesh Gradient Background */}
              <div className="mesh-gradient-bg" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-5 sm:mb-6 md:mb-8">
                  <PulseBadge text={contact.badge} />
                </div>

                <Display size="md" as="h1" className="mb-5 sm:mb-6 md:mb-8">
                  {contact.title}
                </Display>

                <Text size="lg" color="secondary" className="max-w-2xl leading-relaxed font-light">
                  {contact.subtitle}
                </Text>
              </div>
            </motion.div>
          </section>

          {/* Contact Content */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-20">
            <div className="relative max-w-[90rem] mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">

                    {/* Contact Information */}
                    <motion.div
                      initial={{ opacity: 0, x: shouldUseViewportTrigger ? -30 : 0 }}
                      animate={shouldUseViewportTrigger ? undefined : { opacity: 1, x: 0 }}
                      whileInView={shouldUseViewportTrigger ? { opacity: 1, x: 0 } : undefined}
                      viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                      transition={{ duration: shouldUseViewportTrigger ? 0.8 : 0.2 }}
                      style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                    >
                      <Heading size="lg" as="h2" className="mb-6 sm:mb-8">
                        {contact.infoTitle}
                      </Heading>

                      <div className="space-y-4 sm:space-y-6">
                        <a
                          href={`mailto:${owner.email}`}
                          className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border transition-all group"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-colors">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-label-sm uppercase text-text-muted block">
                              {contact.labels.email}
                            </span>
                            <div className="h-[1px] bg-border-subtle w-full my-2 sm:my-3" />
                            <span className="text-text-primary font-light">{owner.email}</span>
                          </div>
                        </a>

                        <a
                          href={`tel:${owner.phone}`}
                          className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border transition-all group"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-colors">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-label-sm uppercase text-text-muted block">
                              {contact.labels.phone}
                            </span>
                            <div className="h-[1px] bg-border-subtle w-full my-2 sm:my-3" />
                            <span className="text-text-primary font-light">
                              {locale === 'pl' ? owner.phone.replace('+48 ', '') : owner.phone}
                            </span>
                          </div>
                        </a>

                        <a
                          href="https://maps.google.com/?q=Częstochowa,Poland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border transition-all group"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-colors">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-label-sm uppercase text-text-muted block">
                              {contact.labels.location}
                            </span>
                            <div className="h-[1px] bg-border-subtle w-full my-2 sm:my-3" />
                            <span className="text-text-primary font-light">
                              {owner.address.city}, {owner.address.country}
                            </span>
                            <span className="text-text-muted text-sm block mt-1">
                              {contact.servingRemote}
                            </span>
                          </div>
                        </a>

                        <div className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-surface border border-border-subtle">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-label-sm uppercase text-text-muted block">
                              {contact.labels.availability}
                            </span>
                            <div className="h-[1px] bg-border-subtle w-full my-2 sm:my-3" />
                            <span className="text-text-primary font-light">{contact.availabilityHours}</span>
                            <span className="text-text-muted text-sm block mt-1">
                              {contact.flexibleTimezone}
                            </span>
                          </div>
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-1 pt-4">
                          <a
                            href={owner.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={owner.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={owner.social.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                          >
                            <XIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                      initial={{ opacity: 0, x: shouldUseViewportTrigger ? 30 : 0 }}
                      animate={shouldUseViewportTrigger ? undefined : { opacity: 1, x: 0 }}
                      whileInView={shouldUseViewportTrigger ? { opacity: 1, x: 0 } : undefined}
                      viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                      transition={{ duration: shouldUseViewportTrigger ? 0.8 : 0.2 }}
                      style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                    >
                      <Heading size="lg" as="h2" className="mb-2 sm:mb-3">
                        {contact.formTitle}
                      </Heading>

                      {contact.formDescription && (
                        <Text color="secondary" className="mb-6 sm:mb-8">
                          {contact.formDescription}
                        </Text>
                      )}

                      <form ref={formRef} className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="text-label-sm uppercase text-text-muted block mb-2"
                            >
                              {contact.labels.name}
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder={contact.placeholders.name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className={`${inputBaseClass} ${touched.name && errors.name ? inputErrorClass : inputValidClass}`}
                            />
                            {touched.name && errors.name && (
                              <span className="text-red-400 text-xs mt-1.5 block">{errors.name}</span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="text-label-sm uppercase text-text-muted block mb-2"
                            >
                              {contact.labels.email}
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder={contact.placeholders.email}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className={`${inputBaseClass} ${touched.email && errors.email ? inputErrorClass : inputValidClass}`}
                            />
                            {touched.email && errors.email && (
                              <span className="text-red-400 text-xs mt-1.5 block">{errors.email}</span>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="text-label-sm uppercase text-text-muted block mb-2"
                          >
                            {contact.labels.message}
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder={contact.placeholders.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`${inputBaseClass} resize-none ${touched.message && errors.message ? inputErrorClass : inputValidClass}`}
                          />
                          {touched.message && errors.message && (
                            <span className="text-red-400 text-xs mt-1.5 block">{errors.message}</span>
                          )}
                        </div>

                        {/* Success Message */}
                        <AnimatePresence mode="wait">
                          {formStatus === 'success' && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <p className="text-green-400 text-sm">
                                {locale === 'pl'
                                  ? 'Wiadomość wysłana! Odpowiem najszybciej jak to możliwe.'
                                  : 'Message sent! I\'ll get back to you as soon as possible.'}
                              </p>
                            </motion.div>
                          )}

                          {formStatus === 'error' && serverError && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                            >
                              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                              <p className="text-red-400 text-sm">{serverError}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="group relative inline-flex h-12 items-center justify-center px-8 py-3.5 text-label-sm uppercase text-text-primary transition-all duration-300 hover:text-accent-muted w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="absolute top-0 right-0 w-8 h-[1px] bg-glow-soft group-hover:bg-accent-muted group-hover:shadow-glow-white transition-all duration-500" />
                          <span className="absolute top-0 right-0 w-[1px] h-8 bg-glow-soft group-hover:bg-accent-muted group-hover:shadow-glow-white transition-all duration-500" />
                          <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-glow-soft group-hover:bg-accent-muted group-hover:shadow-glow-white transition-all duration-500" />
                          <span className="absolute bottom-0 left-0 w-[1px] h-8 bg-glow-soft group-hover:bg-accent-muted group-hover:shadow-glow-white transition-all duration-500" />

                          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                            {formStatus === 'submitting' ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {locale === 'pl' ? 'Wysyłanie...' : 'Sending...'}
                              </>
                            ) : (
                              <>
                                {contact.submit}
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </span>
                        </button>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacer for footer reveal */}
          <div className="h-[20vh]" />
        </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen-safe w-full">
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

export default ContactClient;
