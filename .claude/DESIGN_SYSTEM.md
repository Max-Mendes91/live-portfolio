# Design System

This document defines the design system for Max Mendes Portfolio. All components and pages should follow these guidelines for visual consistency.

## Quick Reference

```tsx
// Import design system components
import { Display, Heading, Text, Label } from '@/components/ui';
import { Card, ServiceCard } from '@/components/ui';
import { Button, IconButton } from '@/components/ui';
import { Badge, StatusBadge, TagBadge } from '@/components/ui';
import { IconContainer, FeatureIcon, ListIcon } from '@/components/ui';

// Import utility
import { cn } from '@/lib/utils';
```

---

## Color Palette

### Semantic Colors (Use These)

| Token | Tailwind Class | Use Case |
|-------|---------------|----------|
| **Backgrounds** | | |
| Background | `bg-background` | Page background |
| Background Alt | `bg-background-alt` | Alternative background |
| Background Elevated | `bg-background-elevated` | Elevated surfaces |
| Surface | `bg-surface` | Cards, modals |
| Surface Hover | `bg-surface-hover` | Hover states |
| **Text** | | |
| Primary | `text-text-primary` | Headlines, important text |
| Secondary | `text-text-secondary` | Body copy |
| Muted | `text-text-muted` | Supporting text |
| Subtle | `text-text-subtle` | Disabled, hints |
| **Borders** | | |
| Default | `border-border` | Standard borders |
| Subtle | `border-border-subtle` | Subtle dividers |
| Hover | `border-border-hover` | Hover states |

### Examples

```tsx
// ✅ DO: Use semantic tokens
<div className="bg-surface border border-border">
  <h1 className="text-text-primary">Title</h1>
  <p className="text-text-secondary">Body text</p>
</div>

// ❌ DON'T: Use hardcoded values
<div className="bg-[#080808] border border-white/10">
  <h1 className="text-white">Title</h1>
  <p className="text-zinc-400">Body text</p>
</div>
```

---

## Typography

### Typography Components

```tsx
import { Display, Heading, Text, Label, Prose } from '@/components/ui';

// Display - Hero headlines (responsive: 48px → 80px)
<Display size="xl">Build Something Amazing</Display>
<Display size="lg" as="h1">Page Title</Display>

// Heading - Section titles (responsive: 20px → 40px)
<Heading size="xl" as="h2">Section Title</Heading>
<Heading size="lg" as="h3">Subsection</Heading>
<Heading size="md" as="h4">Card Title</Heading>

// Text - Body copy
<Text size="xl" color="secondary">Lead paragraph</Text>
<Text size="md">Regular paragraph</Text>
<Text size="sm" color="muted">Small text</Text>

// Label - UI labels, buttons
<Label size="sm">Button Text</Label>
<Label size="md" uppercase>Category</Label>

// Prose - Long-form content
<Prose size="md">
  <p>Rich text with automatic styling...</p>
</Prose>
```

### Typography Scale

| Token | Size | Use Case |
|-------|------|----------|
| `text-display-xl` | 80px | Hero headlines |
| `text-display-lg` | 72px | Large headlines |
| `text-display-md` | 60px | Section headlines |
| `text-display-sm` | 48px | Page titles |
| `text-heading-xl` | 40px | Section titles |
| `text-heading-lg` | 32px | Card titles |
| `text-heading-md` | 24px | Subsections |
| `text-heading-sm` | 20px | Small headings |
| `text-body-xl` | 20px | Lead text |
| `text-body-lg` | 18px | Featured text |
| `text-body-md` | 16px | Body copy |
| `text-body-sm` | 14px | Secondary text |
| `text-body-xs` | 12px | Captions |
| `text-label-sm` | 10px | Button text |

### Direct Tailwind Usage

```tsx
// When not using components
<h1 className="text-display-sm md:text-display-lg text-text-primary tracking-tighter">
  Headline
</h1>

<p className="text-body-lg text-text-secondary font-light leading-relaxed">
  Body text
</p>
```

---

## Spacing

### Section Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `py-section-sm` | 48px | Small section padding |
| `py-section-md` | 80px | Standard sections |
| `py-section-lg` | 120px | Hero, featured |
| `py-section-xl` | 160px | Major sections |

### Component Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `gap-component-xs` | 8px | Tight grouping |
| `gap-component-sm` | 16px | Related items |
| `gap-component-md` | 24px | Standard gap |
| `gap-component-lg` | 32px | Section items |
| `gap-component-xl` | 48px | Major sections |

### Container

```tsx
// Standard container
<div className="max-w-container-xl mx-auto px-container-x md:px-container-x-md lg:px-container-x-lg">

// Or use the CSS class
<div className="container-base">
```

---

## Components

### Button

```tsx
import { Button, IconButton, ButtonGroup } from '@/components/ui';

// Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glow">Glow Effect</Button>
<Button variant="corner-glow">Corner Glow</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With link
<Button href="/contact" variant="primary">Contact Me</Button>

// With icon
<Button icon={<ArrowRight />} iconPosition="right">
  Learn More
</Button>

// Loading state
<Button loading>Processing...</Button>

// Full width
<Button fullWidth>Full Width</Button>

// Button group
<ButtonGroup direction="horizontal" gap="md">
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
</ButtonGroup>

// Icon button
<IconButton icon={<Menu />} aria-label="Open menu" />
```

### Card

```tsx
import { Card, CardHeader, CardContent, CardFooter, ServiceCard } from '@/components/ui';

// Basic card
<Card variant="default" size="md">
  <CardHeader>
    <Heading size="md">Card Title</Heading>
  </CardHeader>
  <CardContent>
    <Text>Card content goes here...</Text>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>

// Interactive card with link
<Card href="/projects/example" interactive animate animationDelay={0.1}>
  Content
</Card>

// Variants
<Card variant="default">Standard</Card>
<Card variant="elevated">Elevated with shadow</Card>
<Card variant="outline">Outline only</Card>
<Card variant="ghost">No background</Card>

// Service card (pre-built)
<ServiceCard
  icon={<Code className="w-6 h-6" />}
  title="Web Development"
  description="Custom web applications..."
  features={['React', 'Next.js', 'TypeScript']}
  href="/services/web-dev"
  index={0}
/>
```

### Badge

```tsx
import { Badge, StatusBadge, TagBadge, BadgeGroup } from '@/components/ui';

// Basic badge
<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="pulse">Available Now</Badge>
<Badge variant="glow">Featured</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// With dot
<Badge dot>With Dot</Badge>
<Badge pulse>With Pulse</Badge>

// Status badge
<StatusBadge status="active" />
<StatusBadge status="pending">In Review</StatusBadge>

// Tag badge (for tech stack, categories)
<TagBadge>React</TagBadge>
<TagBadge removable onRemove={() => {}}>TypeScript</TagBadge>

// Badge group
<BadgeGroup>
  <TagBadge>React</TagBadge>
  <TagBadge>Next.js</TagBadge>
  <TagBadge>TypeScript</TagBadge>
</BadgeGroup>
```

### Icon

```tsx
import { IconContainer, IconWrapper, FeatureIcon, ListIcon } from '@/components/ui';
import { Code, Palette, Search } from 'lucide-react';

// Icon container (for cards, features)
<IconContainer size="lg" variant="default">
  <Code />
</IconContainer>

// Feature icon (with gradient background)
<FeatureIcon icon={<Palette />} size="xl" glow />

// Icon wrapper (just sizing)
<IconWrapper size="md" color="muted">
  <Search />
</IconWrapper>

// List icons
<ul>
  <li className="flex items-center gap-2">
    <ListIcon variant="dot" />
    <span>Feature item</span>
  </li>
  <li className="flex items-center gap-2">
    <ListIcon variant="check" />
    <span>Completed item</span>
  </li>
</ul>
```

---

## Shadows & Effects

### Elevation Shadows

```tsx
<div className="shadow-elevation-sm">Subtle shadow</div>
<div className="shadow-elevation-md">Medium shadow</div>
<div className="shadow-elevation-lg">Large shadow</div>
<div className="shadow-elevation-xl">Extra large shadow</div>
```

### Glow Effects

```tsx
<div className="shadow-glow-sm">Small glow</div>
<div className="shadow-glow-md">Medium glow</div>
<div className="shadow-glow-lg">Large glow</div>
```

### Glass Effect

```tsx
<div className="glass">Frosted glass</div>
<div className="glass-subtle">Subtle glass</div>
```

---

## Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `rounded-sm` | 4px | Small elements |
| `rounded-md` | 8px | Buttons, inputs |
| `rounded-lg` | 12px | Small cards |
| `rounded-xl` | 16px | Medium cards |
| `rounded-2xl` | 20px | Large cards |
| `rounded-3xl` | 24px | Modals |
| `rounded-full` | 9999px | Pills, avatars |

---

## Animations

### Built-in Animations

```tsx
// Fade animations
<div className="animate-fade-in">Fades in</div>
<div className="animate-fade-in-up">Fades in from below</div>
<div className="animate-fade-in-down">Fades in from above</div>

// Continuous animations
<div className="animate-pulse-slow">Slow pulse</div>
<div className="animate-float">Floating effect</div>
<div className="animate-spin-slow">Slow rotation</div>
<div className="animate-shimmer">Shimmer effect</div>

// Animation delays
<div className="animate-fade-in-up animate-delay-100">Delayed 100ms</div>
<div className="animate-fade-in-up animate-delay-200">Delayed 200ms</div>
<div className="animate-fade-in-up animate-delay-300">Delayed 300ms</div>
```

### Framer Motion Patterns

```tsx
import { motion } from 'framer-motion';

// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>

// Scroll-triggered
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
>

// Staggered children
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Transition Timing

```tsx
// Easing functions
<div className="transition-all ease-smooth">Smooth easing</div>
<div className="transition-all ease-bounce">Bounce easing</div>
<div className="transition-all ease-snappy">Snappy easing</div>

// Durations
<div className="transition-all duration-fast">150ms</div>
<div className="transition-all duration-normal">300ms</div>
<div className="transition-all duration-slow">500ms</div>
<div className="transition-all duration-slower">800ms</div>
```

---

## Utility Classes

### Custom Utilities

```tsx
// Text gradient
<span className="text-gradient">Gradient text</span>

// Glass effect
<div className="glass">Frosted glass background</div>

// Hover effects
<div className="hover-lift">Lifts on hover</div>
<div className="border-glow-hover">Border glows on hover</div>

// Hide scrollbar
<div className="scrollbar-hide overflow-auto">No visible scrollbar</div>
```

### Component Classes

```tsx
// Pre-defined component classes (from globals.css)
<div className="container-base">Centered container</div>
<section className="section-base">Section with overflow-hidden</section>
<div className="card-base">Card styling</div>
<div className="card-interactive">Interactive card</div>
<a className="link-base">Link styling</a>
<input className="input-base">Input styling</input>
```

---

## Page Layout Pattern

```tsx
import { Display, Text, Badge } from '@/components/ui';

export default function PageTemplate() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back link */}
      <div className="container-base pt-32">
        <Link href="/" className="link-base inline-flex items-center gap-2 text-body-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero section */}
      <section className="section-base pt-12 pb-section-md">
        <div className="container-base">
          <Badge variant="pulse" className="mb-6">Services</Badge>
          <Display size="lg" as="h1" className="mb-8">
            Page Title Here
          </Display>
          <Text size="xl" className="max-w-2xl">
            Page description or lead text goes here.
          </Text>
        </div>
      </section>

      {/* Content section */}
      <section className="py-section-md border-t border-border-subtle">
        <div className="container-base">
          {/* Grid, cards, etc. */}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-section-lg border-t border-border-subtle">
        <div className="container-base text-center">
          <Heading size="xl" className="mb-6">Ready to Start?</Heading>
          <Text size="lg" className="mb-10 max-w-xl mx-auto">
            Call to action description.
          </Text>
          <ButtonGroup>
            <Button href="/contact">Get Started</Button>
            <Button href="/projects" variant="outline">View Work</Button>
          </ButtonGroup>
        </div>
      </section>
    </main>
  );
}
```

---

## Migration Guide

### From Legacy Components

```tsx
// OLD: PulseBadge
<PulseBadge text="Available" />

// NEW: Badge with pulse variant
<Badge variant="pulse">Available</Badge>

// OLD: CornerGlowButton
<CornerGlowButton href="/contact">Contact</CornerGlowButton>

// NEW: Button with corner-glow variant
<Button variant="corner-glow" href="/contact">Contact</Button>

// OLD: GlowButton
<GlowButton onClick={handleClick}>Submit</GlowButton>

// NEW: Button with glow variant
<Button variant="glow" onClick={handleClick}>Submit</Button>

// OLD: Hardcoded colors
<div className="bg-[#080808] text-zinc-400 border-white/10">

// NEW: Semantic tokens
<div className="bg-surface text-text-secondary border-border">
```

---

## Checklist

Before committing, verify:

- [ ] Using semantic color tokens (not hardcoded values)
- [ ] Using typography components or tokens
- [ ] Using spacing tokens for consistency
- [ ] Cards have appropriate variants and sizes
- [ ] Buttons have correct variants
- [ ] Animations use standard patterns
- [ ] No horizontal overflow on mobile
- [ ] Interactive elements have hover states
