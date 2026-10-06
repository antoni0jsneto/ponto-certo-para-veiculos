import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { GoogleTagManager } from '@/components/google-tag-manager'
import { StructuredData } from '@/components/structured-data'
import { absoluteSiteUrl, siteUrl } from '@/lib/site-url'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin', 'latin-ext'], variable: '--font-sora' })

const title = 'Marketing para Lojas de Veículos no ABC | Ponto Certo'
const description =
  'Atraia compradores para sua loja de veículos com site, estoque online, Google Ads, Meta Ads e WhatsApp. Marketing especializado em São Bernardo do Campo e região do ABC.'
const socialImage = absoluteSiteUrl('/brand/og.png')

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Ponto Certo',
  ...(siteUrl && {
    metadataBase: siteUrl,
    alternates: { canonical: siteUrl.origin },
  }),
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ponto Certo — Agência de Marketing',
    ...(siteUrl && {
      url: siteUrl.origin,
    }),
    ...(socialImage && {
      images: [
        {
          url: socialImage,
          width: 1563,
          height: 1563,
          alt: 'Ponto Certo — agência de marketing para lojas de veículos',
        },
      ],
    }),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    ...(socialImage && { images: [socialImage] }),
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1F0937',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="antialiased">
        <GoogleTagManager />
        <StructuredData />
        {children}
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
