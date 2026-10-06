const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined

if (siteUrl && !['http:', 'https:'].includes(siteUrl.protocol)) {
  throw new Error('NEXT_PUBLIC_SITE_URL must use http:// or https://.')
}

if (siteUrl && (siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash)) {
  throw new Error('NEXT_PUBLIC_SITE_URL must contain only the site origin, without a path, query, or hash.')
}

export function absoluteSiteUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined
}
