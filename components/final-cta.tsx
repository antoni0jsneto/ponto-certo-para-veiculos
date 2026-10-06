import Image from 'next/image'
import { InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { TrackedLink } from '@/components/tracked-link'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_ANALYSIS_URL, WHATSAPP_DISPLAY } from '@/lib/contact'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final-title" className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <Image
        src="/brand/symbol-dark.png"
        alt=""
        width={900}
        height={900}
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 size-[640px] -translate-y-1/2 opacity-15 mix-blend-screen md:-right-24"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center md:px-8">
        <Reveal className="flex flex-col items-center gap-6">
          <h2
            id="cta-final-title"
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
          >
            Seu próximo cliente pode estar procurando um carro agora.
          </h2>
          <p className="text-xl text-ink-foreground/70 md:text-2xl">Vamos fazer sua loja aparecer para ele?</p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-center gap-6">
          <TrackedLink
            href={WHATSAPP_ANALYSIS_URL}
            event="click_whatsapp_final"
            size="lg"
            className="h-16 px-9 text-lg focus-visible:ring-offset-ink"
          >
            <WhatsAppIcon className="size-6" />
            Falar com a Ponto Certo
          </TrackedLink>

          <div className="flex flex-col items-center gap-3 text-sm text-ink-foreground/70 sm:flex-row sm:gap-6">
            <TrackedLink
              href={WHATSAPP_ANALYSIS_URL}
              event="click_whatsapp_final"
              unstyled
              className="inline-flex items-center gap-2 rounded-md transition-colors hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <WhatsAppIcon className="size-4" />
              {WHATSAPP_DISPLAY}
            </TrackedLink>
            <TrackedLink
              href={INSTAGRAM_URL}
              event="click_instagram"
              unstyled
              className="inline-flex items-center gap-2 rounded-md transition-colors hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <InstagramIcon className="size-4" />
              {INSTAGRAM_HANDLE}
            </TrackedLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
