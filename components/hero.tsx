import { ArrowRight, MapPin, Car } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { HeroFunnel } from '@/components/hero-funnel'
import { TrackedLink } from '@/components/tracked-link'
import { WHATSAPP_ANALYSIS_URL } from '@/lib/contact'

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <div className="flex min-w-0 flex-col items-start gap-7 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-semibold text-primary ring-1 ring-primary/15 md:text-sm">
            <Car className="size-4" aria-hidden="true" />
            Marketing especializado em lojas de veículos
          </p>

          <h1
            id="hero-title"
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Transforme a internet em{' '}
            <span className="relative text-primary sm:whitespace-nowrap">
              mais um vendedor
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-gradient-to-r from-primary to-magenta opacity-30"
              />
            </span>{' '}
            da sua loja.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Criamos toda a estrutura digital da sua loja para atrair compradores no Google, Instagram e Facebook e
            levar essas oportunidades diretamente para o seu WhatsApp.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <TrackedLink href={WHATSAPP_ANALYSIS_URL} event="click_whatsapp_hero" size="lg">
              <WhatsAppIcon className="size-5" />
              Quero uma análise gratuita
            </TrackedLink>
            <TrackedLink href="#solucao" variant="secondary" size="lg">
              Conhecer a solução
              <ArrowRight className="size-4" aria-hidden="true" />
            </TrackedLink>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Especializado em lojas de veículos de São Bernardo do Campo e região do ABC.
          </p>
        </div>

        <HeroFunnel />
      </div>
    </section>
  )
}
