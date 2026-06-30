import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tarekion | Heavy Equipment Rental in Saudi Arabia',
    template: '%s | Tarekion Heavy Equipment Rental',
  },
  description:
    'Tarekion Establishment provides heavy equipment rental in Saudi Arabia — JCB, Bobcat, Excavator, Bulldozer, Wheel Loader, and more. 24/7 support. تأجير معدات ثقيلة.',
  keywords: [
    'heavy equipment rental Saudi Arabia','JCB rental Saudi Arabia','Bobcat rental Saudi Arabia',
    'excavator rental Saudi Arabia','bulldozer rental Saudi Arabia','تأجير معدات ثقيلة',
    'بوبكات للإيجار','جي سي بي للإيجار','حفار للإيجار','شيول للإيجار','بلدوزر للإيجار',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Tarekion Heavy Equipment Rental',
    title: 'Tarekion | Heavy Equipment Rental in Saudi Arabia',
    description: 'Premium heavy equipment rental in Saudi Arabia — JCB, Bobcat, Excavator, Bulldozer.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Tarekion Heavy Equipment Rental' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarekion | Heavy Equipment Rental Saudi Arabia',
    description: 'JCB, Bobcat, Excavator, Bulldozer rental in KSA. تأجير معدات ثقيلة.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#org`,
      name: 'Tarekion Establishment',
      alternateName: 'مؤسسة تركيون',
      url: SITE_URL,
      telephone: '+966-50-000-0000',
      email: 'info@tarekion.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressCountry: 'SA' },
      areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
      openingHours: ['Su-Th 07:00-18:00'],
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      url: SITE_URL,
      name: 'Tarekion Heavy Equipment Rental',
      inLanguage: ['en-US', 'ar-SA'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#F5C518" />
      </head>
      <body className="antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
