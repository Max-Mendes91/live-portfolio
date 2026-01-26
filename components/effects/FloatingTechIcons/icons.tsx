/**
 * Real Tech Brand Icons
 *
 * Official SVG logos as white silhouettes.
 * Uses currentColor to inherit text color.
 */

import React from 'react';
import {
  RefreshCw,
  Lock,
  LayoutDashboard,
  CreditCard,
  Bell,
  Settings,
} from 'lucide-react';
import { TechIconId } from './types';

interface IconProps {
  size?: number;
  className?: string;
}

// React - Official atom logo
const ReactIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23 23 20.46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// Next.js - Official logo style with N and diagonal
const NextjsIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer circle */}
    <circle cx="90" cy="90" r="85" stroke="currentColor" strokeWidth="5" fill="none" />
    {/* N letter - left vertical stroke */}
    <path
      d="M55 130V52"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
    {/* N letter - diagonal stroke extending beyond circle */}
    <path
      d="M55 52L135 160"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
    {/* N letter - right vertical stroke */}
    <path
      d="M125 52V110"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
  </svg>
);

// TypeScript - TS in rounded box (consistent with Node.js)
const TypeScriptIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="6" y="6" width="116" height="116" rx="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <text x="64" y="76" textAnchor="middle" fill="currentColor" fontSize="36" fontWeight="bold" fontFamily="system-ui, sans-serif">TS</text>
  </svg>
);

// Tailwind CSS - Wind waves
const TailwindIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 54 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
      fill="currentColor"
    />
  </svg>
);

// Framer Motion - F shape
const FramerIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M0 0H14V7H7L0 0Z" fill="currentColor" />
    <path d="M0 7H7L14 14H7V21L0 14V7Z" fill="currentColor" />
  </svg>
);

// PostgreSQL - Database cylinder
const PostgresqlIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="50" cy="22" rx="38" ry="14" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M12 22V78C12 86 28 92 50 92C72 92 88 86 88 78V22" stroke="currentColor" strokeWidth="4" fill="none" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="3" fill="none" />
    <ellipse cx="50" cy="78" rx="38" ry="14" stroke="currentColor" strokeWidth="3" fill="none" />
  </svg>
);

// GitHub - Octocat
const GithubIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 98 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="currentColor"
    />
  </svg>
);

// Vercel - Triangle
const VercelIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 116 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M57.5 0L115 100H0L57.5 0Z" fill="currentColor" />
  </svg>
);

// Prisma - Crystal
const PrismaIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 159 194"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.39 122L68.78 1.78a9.67 9.67 0 0 1 17.27.11l85.94 171.88a9.67 9.67 0 0 1-7.45 14.01L22.93 193.89a9.67 9.67 0 0 1-10.32-13.26L2.39 122zm77.67 50.89L41.95 86.95a4.84 4.84 0 0 1 4.5-6.6l77.1-1.1a4.84 4.84 0 0 1 4.1 7.33L87.21 173.64a4.84 4.84 0 0 1-7.15-.69z"
      fill="currentColor"
    />
  </svg>
);

// Supabase - Lightning bolt
const SupabaseIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 109 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M63.7 110.3c-2.9 3.6-8.7 1.6-8.7-3l-1-67.3h45.2c8.2 0 12.8 9.5 7.7 15.9l-43.2 54.4Z"
      fill="currentColor"
    />
    <path
      d="M45.3 2.1c2.9-3.6 8.7-1.6 8.7 3l.5 67.2H9.8c-8.2 0-12.8-9.4-7.6-15.8L45.3 2.1Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
  </svg>
);

// Figma - Design tool
const FigmaIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="currentColor" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="currentColor" fillOpacity="0.7" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="currentColor" fillOpacity="0.7" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="currentColor" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// Git - Version control
const GitIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 97 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M92.71 44.408L52.591 4.291a7.31 7.31 0 0 0-10.34 0L33.37 13.17l13.053 13.053a8.68 8.68 0 0 1 10.992 11.066l12.583 12.582a8.68 8.68 0 1 1-5.194 4.903L52.91 42.88v28.286a8.68 8.68 0 1 1-7.139-.241V42.309a8.68 8.68 0 0 1-4.716-11.388L27.996 17.862 4.29 41.568a7.31 7.31 0 0 0 0 10.34l40.117 40.118a7.31 7.31 0 0 0 10.34 0L92.71 54.747a7.31 7.31 0 0 0 0-10.34"
      fill="currentColor"
    />
  </svg>
);

// Docker - Container
const DockerIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V55H70v8H30v8H22v-8H14v8H6v8h6.9c-.1 3.1.3 6.1 1.1 9 3 10.5 11.3 15.1 21 15.1 16.5 0 31.9-7.4 43.3-21 6.8 0 13.8-1.4 18.5-6.8 2.7-3.1 3.3-8.2 2.7-12.3 5.6-1.5 9.2-5.2 10.5-10.4l.4-1.6-1.6-1z"
      fill="currentColor"
    />
    <path d="M28 69h8v8h-8zM40 69h8v8h-8zM52 69h8v8h-8zM64 69h8v8h-8zM40 57h8v8h-8zM52 57h8v8h-8zM64 57h8v8h-8zM52 45h8v8h-8z" fill="currentColor" />
  </svg>
);

// ============================================
// FAQ / Communication Icons
// ============================================

// Document/Paper - Represents contract/understanding
const DocumentIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Workflow/Arrows - Represents process/timeline
const WorkflowIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="5" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="19" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M7.5 7.5L10 15M16.5 7.5L14 15" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Invoice - Document with dollar sign
const InvoiceIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M12 11v6M14 12.5c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Lightbulb - Represents ideas/solutions
const LightbulbIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.5A6 6 0 0 0 12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 3v1M4 12H3M6.3 6.3l-.7-.7M17.7 6.3l.7-.7M21 12h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Checkmark - Represents completion/success
const CheckmarkIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Message Bubble - Communication
const MessageIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Question Mark - Help/FAQ
const QuestionIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Help Circle - Support/assistance
const HelpIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M12 16v-1M12 8a2.5 2.5 0 0 1 2.5 2.5c0 1.5-2.5 2-2.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search/Magnifier - Finding answers
const SearchIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ============================================
// Achievement / Projects Icons
// ============================================

// Rocket - Launched/live products
const RocketIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Users - Active user base
const UsersIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star - Quality/featured
const StarIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Target - Problem solved / Goals achieved
const TargetIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// ============================================
// Service Category Icons
// ============================================

// Building - Business websites/storefronts
const BuildingIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6h4M10 10h4M10 14h4M10 18h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Cart - E-commerce
const CartIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="21" r="1" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="21" r="1" stroke="currentColor" strokeWidth="2" />
    <path
      d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Layers - SaaS platforms
const LayersIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m12.83 2.18 9 4a1 1 0 0 1 0 1.82l-9 4a2 2 0 0 1-1.66 0l-9-4a1 1 0 0 1 0-1.82l9-4a2 2 0 0 1 1.66 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m2 12 9 4a2 2 0 0 0 1.66 0l9-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m2 17 9 4a2 2 0 0 0 1.66 0l9-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sparkles - AI features
const SparklesIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 3v4M19 17v4M3 5h4M17 19h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// CodeWindow - Custom development
const CodeWindowIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 21V9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <circle cx="9" cy="6" r="1" fill="currentColor" />
  </svg>
);

// Globe - Web/global reach
const GlobeIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Send/Paper Plane - Represents sending a message
const SendIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m22 2-7 20-4-9-9-4 20-7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m22 2-11 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================
// Full-Stack Development Icons
// ============================================

// Server - Backend/server infrastructure
const ServerIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <circle cx="6" cy="18" r="1" fill="currentColor" />
    <path d="M16 6h2M16 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// API - Code brackets with connection
const ApiIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m8 3-5 9 5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m16 3 5 9-5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 4 10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ============================================
// SaaS-Specific Icons (Lucide wrappers)
// ============================================

// Cycle - Recurring subscription concept
const CycleIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <RefreshCw size={size} className={className} strokeWidth={1.5} />
);

// Lock - Authentication/security
const LockIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <Lock size={size} className={className} strokeWidth={1.5} />
);

// Dashboard - Admin panel/analytics
const DashboardIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <LayoutDashboard size={size} className={className} strokeWidth={1.5} />
);

// CreditCard - Billing/payments
const CreditCardIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <CreditCard size={size} className={className} strokeWidth={1.5} />
);

// Bell - Notifications
const BellIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <Bell size={size} className={className} strokeWidth={1.5} />
);

// Settings - Configuration/admin
const SettingsIcon: React.FC<IconProps> = ({ size = 80, className }) => (
  <Settings size={size} className={className} strokeWidth={1.5} />
);

// Icon registry
const ICON_COMPONENTS: Record<TechIconId, React.FC<IconProps>> = {
  // Tech icons
  react: ReactIcon,
  nextjs: NextjsIcon,
  typescript: TypeScriptIcon,
  postgresql: PostgresqlIcon,
  tailwind: TailwindIcon,
  framer: FramerIcon,
  github: GithubIcon,
  vercel: VercelIcon,
  prisma: PrismaIcon,
  supabase: SupabaseIcon,
  figma: FigmaIcon,
  git: GitIcon,
  docker: DockerIcon,
  // FAQ/Communication icons
  document: DocumentIcon,
  workflow: WorkflowIcon,
  invoice: InvoiceIcon,
  lightbulb: LightbulbIcon,
  checkmark: CheckmarkIcon,
  message: MessageIcon,
  question: QuestionIcon,
  help: HelpIcon,
  search: SearchIcon,
  // Contact icons
  send: SendIcon,
  // Achievement/Projects icons
  rocket: RocketIcon,
  users: UsersIcon,
  star: StarIcon,
  target: TargetIcon,
  // Service category icons
  building: BuildingIcon,
  cart: CartIcon,
  layers: LayersIcon,
  sparkles: SparklesIcon,
  codeWindow: CodeWindowIcon,
  globe: GlobeIcon,
  // Full-stack development icons
  server: ServerIcon,
  api: ApiIcon,
  // SaaS-specific icons
  cycle: CycleIcon,
  lock: LockIcon,
  dashboard: DashboardIcon,
  creditCard: CreditCardIcon,
  bell: BellIcon,
  settings: SettingsIcon,
};

// Main TechIcon component
interface TechIconProps extends IconProps {
  id: TechIconId;
}

export const TechIcon: React.FC<TechIconProps> = ({ id, size, className }) => {
  const IconComponent = ICON_COMPONENTS[id];

  if (!IconComponent) {
    console.warn(`TechIcon: Unknown icon id "${id}"`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export {
  // Tech icons
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  PostgresqlIcon,
  TailwindIcon,
  FramerIcon,
  GithubIcon,
  VercelIcon,
  PrismaIcon,
  SupabaseIcon,
  FigmaIcon,
  GitIcon,
  DockerIcon,
  // FAQ/Communication icons
  DocumentIcon,
  WorkflowIcon,
  InvoiceIcon,
  LightbulbIcon,
  CheckmarkIcon,
  MessageIcon,
  QuestionIcon,
  HelpIcon,
  SearchIcon,
  // Contact icons
  SendIcon,
  // Achievement/Projects icons
  RocketIcon,
  UsersIcon,
  StarIcon,
  TargetIcon,
  // Service category icons
  BuildingIcon,
  CartIcon,
  LayersIcon,
  SparklesIcon,
  CodeWindowIcon,
  GlobeIcon,
  // Full-stack development icons
  ServerIcon,
  ApiIcon,
  // SaaS-specific icons
  CycleIcon,
  LockIcon,
  DashboardIcon,
  CreditCardIcon,
  BellIcon,
  SettingsIcon,
};
