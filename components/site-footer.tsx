import Image from 'next/image'
import { InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'
import { TrackedLink } from '@/components/tracked-link'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_ANALYSIS_URL, WHATSAPP_DISPLAY } from '@/lib/contact'

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-foreground/10 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/brand/wordmark-white.png"
            alt="Ponto Certo — Agência de Marketing"
            width={740}
            height={168}
            className="h-11 w-auto self-start object-contain"
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/60">
            Parceiro digital especializado em lojas de veículos. São Bernardo do Campo e região do ABC.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-ink-foreground/70 sm:flex-row sm:gap-6">
          <TrackedLink
            href={WHATSAPP_ANALYSIS_URL}
            event="click_whatsapp_final"
            unstyled
            className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground"
          >
            <WhatsAppIcon className="size-4" />
            {WHATSAPP_DISPLAY}
          </TrackedLink>
          <TrackedLink
            href={INSTAGRAM_URL}
            event="click_instagram"
            unstyled
            className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground"
          >
            <InstagramIcon className="size-4" />
            {INSTAGRAM_HANDLE}
          </TrackedLink>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 pb-24 text-xs text-ink-foreground/50 md:px-8 md:pb-6">
          {`© ${new Date().getFullYear()} Ponto Certo — Agência de Marketing. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
