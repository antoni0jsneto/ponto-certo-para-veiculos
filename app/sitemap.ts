import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return []

  return [
    {
      url: siteUrl.origin,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
