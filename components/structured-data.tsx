import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '@/lib/contact'
import { siteUrl } from '@/lib/site-url'

export function StructuredData() {
  if (!siteUrl) return null

  const origin = siteUrl.origin
  const organizationId = `${origin}/#organization`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Ponto Certo — Agência de Marketing',
        url: origin,
        logo: new URL('/brand/symbol.png', siteUrl).toString(),
        image: new URL('/brand/og.png', siteUrl).toString(),
        telephone: `+${WHATSAPP_NUMBER}`,
        sameAs: [INSTAGRAM_URL],
        areaServed: [
          { '@type': 'City', name: 'São Bernardo do Campo' },
          { '@type': 'AdministrativeArea', name: 'Região do ABC, São Paulo' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${WHATSAPP_NUMBER}`,
          contactType: 'customer service',
          availableLanguage: 'Portuguese',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: 'Ponto Certo — Agência de Marketing',
        inLanguage: 'pt-BR',
        publisher: { '@id': organizationId },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  )
}
