export type TrackingEvent =
  | 'click_whatsapp_hero'
  | 'click_whatsapp_header'
  | 'click_whatsapp_investimento'
  | 'click_whatsapp_analise'
  | 'click_whatsapp_final'
  | 'click_whatsapp_floating'
  | 'click_whatsapp_case'
  | 'click_instagram'
  | 'view_investimento'
  | 'view_cases'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function trackEvent(eventName: TrackingEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  try {
    window.dataLayer?.push({ event: eventName, ...params })
  } catch {
    // Tracking must never break the page.
  }
}
