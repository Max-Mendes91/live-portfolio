import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}
