import { WhatsAppIcon } from '@/components/brand-icons'
import { TrackedLink } from '@/components/tracked-link'
import { WHATSAPP_FLOATING_URL } from '@/lib/contact'

export function FloatingWhatsApp() {
  return (
    <TrackedLink
      href={WHATSAPP_FLOATING_URL}
      event="click_whatsapp_floating"
      unstyled
      aria-label="Conversar com a Ponto Certo pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_-10px] shadow-primary/70 ring-4 ring-background transition-all duration-200 hover:scale-105 hover:bg-plum focus-visible:outline-none focus-visible:ring-magenta md:bottom-8 md:right-8 md:size-16"
    >
      <WhatsAppIcon className="size-7 md:size-8" />
    </TrackedLink>
  )
}
