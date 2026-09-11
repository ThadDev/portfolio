import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import JsonLd from '@/components/JsonLd';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' });

const SITE_URL = 'https://thaddev.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Thaddeus Ugwu — Software Developer · ThadDev',
    template: '%s | ThadDev',
  },
  description:
    'I build full-stack web and mobile products and AI-powered workflows that actually ship. Software Developer at ThadDev Studios LLC.',
  keywords: [
    'Thaddeus Ugwu', 'ThadDev', 'ThadDev Studios', 'Software Developer',
    'Full-stack Developer', 'React', 'Next.js', 'TypeScript', 'Supabase',
    'AI Development', 'Agentic Development',
  ],
  authors: [{ name: 'Thaddeus Ugwu', url: SITE_URL }],
  creator: 'Thaddeus Ugwu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'ThadDev — Thaddeus Ugwu',
    title: 'Thaddeus Ugwu — Software Developer · ThadDev',
    description: 'I build full-stack web and mobile products and AI-powered workflows that actually ship.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Thaddeus Ugwu — ThadDev' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thaddeus Ugwu — Software Developer · ThadDev',
    description: 'I build full-stack web and mobile products and AI-powered workflows that actually ship.',
    creator: '@thaddev_',
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE_URL },
  verification: { google: '36gYoNfdW9RwNWaX86OUCSS6unhyjFDtJvAciWmDEW0' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
