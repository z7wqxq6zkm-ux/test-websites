import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KSM Auto Parts - Baterias, Acessórios e Peças de Qualidade',
  description: 'Baterias de qualidade, acessórios premium e peças confiáveis. KSM - Comércio de Baterias, Tapetes Auto Unip. Lda em Gondomar.',
  keywords: 'baterias, acessórios auto, peças carro, Gondomar, Portugal',
  openGraph: {
    title: 'KSM Auto Parts - Baterias e Acessórios',
    description: 'Sua loja de confiança para baterias, acessórios e peças de qualidade.',
    url: 'https://ksmautoparts.com',
    type: 'website',
    locale: 'pt_PT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
