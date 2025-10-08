import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmergencyDock from '@/components/EmergencyDock'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Trust Vet - Cabinet Veterinar Premium București',
    template: '%s | Trust Vet'
  },
  description: 'Cabinet veterinar premium în București. Servicii complete pentru animalele de companie: consultații, vaccinări, chirurgie, urgențe 24/7. Echipa empatică și aparatură modernă.',
  keywords: 'cabinet veterinar, București, animale de companie, vaccinări, chirurgie veterinară, urgențe veterinare',
  authors: [{ name: 'Trust Vet' }],
  creator: 'Trust Vet',
  publisher: 'Trust Vet',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trustvet.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://trustvet.ro',
    siteName: 'Trust Vet',
    title: 'Trust Vet - Cabinet Veterinar Premium București',
    description: 'Cabinet veterinar premium în București. Servicii complete pentru animalele de companie: consultații, vaccinări, chirurgie, urgențe 24/7.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trust Vet - Cabinet Veterinar Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Vet - Cabinet Veterinar Premium București',
    description: 'Cabinet veterinar premium în București. Servicii complete pentru animalele de companie.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: 'Trust Vet',
  description: 'Cabinet veterinar premium în București',
  url: 'https://trustvet.ro',
  telephone: '+40742878788',
  email: 'cabinet@trustvet.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Jiului, nr. 145',
    addressLocality: 'Bucharest',
    addressRegion: 'Sector 1',
    postalCode: '010101',
    addressCountry: 'RO'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '44.48521489822259',
    longitude: '26.0529821766633'
  },
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-18:00',
    'Su 10:00-16:00'
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Card',
  currenciesAccepted: 'RON, EUR'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7e1e99" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <EmergencyDock />
        <CookieConsent />
      </body>
    </html>
  )
}
