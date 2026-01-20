'use client';

import { Palette, Box, Layers, Monitor } from 'lucide-react';
import { Project, Service, Step } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aura Perfume',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-2'
  },
  {
    id: '2',
    title: 'Lumina Tech',
    category: 'Interface Design',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Eon Watch',
    category: 'Product Photography',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Noir Interiors',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-2'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Brand Identity',
    description: 'We create unique voices and visual languages for modern brands.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 's2',
    title: 'Package Design',
    description: 'Tangible experiences that stand out on any physical shelf.',
    icon: <Box className="w-6 h-6" />,
  },
  {
    id: 's3',
    title: 'UI/UX Design',
    description: 'Digital journeys built with precision and user-centric flows.',
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 's4',
    title: 'Motion Graphics',
    description: 'Fluid storytelling through high-end dynamic animations.',
    icon: <Layers className="w-6 h-6" />,
  }
];

export const STEPS: Step[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Define',
    description: 'Strategy first. We dive deep into your brand DNA and market landscape.',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Request',
    description: 'Collaborative feedback loops ensure every pixel aligns with your vision.',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Deliver',
    description: 'High-impact results ready to scale your business to new heights.',
  }
];

export const TAGS = [
  'Brand Graphics', 'Package Design', 'UI Strategy', 'Motion', 'Icons', 'Storytelling', 'Luxury Design', 'Minimalism'
];
