import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KSM Auto Parts - Baterias, Acessórios e Peças de Qualidade',
  description:
    'Loja online de autopeças em Gondomar. Baterias, tapetes, placas de matrícula e muito mais. Entrega rápida em 24-48h. Contacte-nos!',
  keywords:
    'baterias carro, acessórios auto, peças carro, tapete carro, placa matrícula, Gondomar, Porto',
  authors: [{ name: 'KSM Auto Parts' }],
  creator: 'Edgar Design Studios',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://ksmautoparts.com',
    siteName: 'KSM Auto Parts',
    title: 'KSM Auto Parts - Baterias, Acessórios e Peças',
    description: 'Compre online baterias, acessórios e peças de qualidade com entrega rápida.',
    images: [
      {
        url: 'https://ksmautoparts.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://ksmautoparts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'KSM Auto Parts',
              description: 'Loja de autopeças e acessórios',
              url: 'https://ksmautoparts.com',
              telephone: '+351919658113',
              email: 'ksmlda@hotmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua São Pedro 510 RC',
                addressLocality: 'Gondomar',
                postalCode: '4510-431',
                addressCountry: 'PT',
              },
              image: 'https://ksmautoparts.com/logo.png',
              priceRange: '€€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '14:00',
                },
              ],
              sameAs: 'https://www.facebook.com/people/KSM-Comércio-de-Baterias-Tapetes-Auto-Unip-Lda/100063710131083/',
            }),
          }}
        />
      </head>
      <body className="bg-white text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
