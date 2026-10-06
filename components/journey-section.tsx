import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  'Cliente procura ou demonstra interesse em um veículo',
  'Encontra sua loja no Google, Instagram ou Facebook',
  'Conhece o veículo e sua empresa',
  'Acessa o site ou anúncio',
  'Clica no WhatsApp',
  'Conversa com seu vendedor',
  'Visita a loja',
]

export function JourneySection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="jornada-title"
      className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-magenta/60 to-transparent"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:gap-20 md:px-8">
        <Reveal>
          <SectionHeading id="jornada-title" eyebrow="Como funciona" title="Do anúncio ao vendedor." tone="dark" />
        </Reveal>

        <ol className="relative grid gap-0 lg:grid-cols-7 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-plum via-magenta to-primary lg:bottom-auto lg:left-6 lg:right-6 lg:top-5 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {steps.map((step, i) => {
            const last = i === steps.length - 1
            return (
              <Reveal as="li" key={step} delay={i * 80} className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:gap-5 lg:pb-0">
                <span
                  className={
                    last
                      ? 'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-magenta-strong font-display text-sm font-semibold text-ink-foreground shadow-[0_0_24px_4px] shadow-magenta/40'
                      : 'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-ink-foreground ring-1 ring-magenta/50'
                  }
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="pt-2 text-pretty leading-relaxed text-ink-foreground/80 lg:pt-0 lg:text-sm">{step}</p>
              </Reveal>
            )
          })}
        </ol>

        <Reveal>
          <div className="flex flex-col gap-3 border-t border-ink-foreground/10 pt-12 md:pt-16">
            <p className="text-lg text-ink-foreground/60">O objetivo não é simplesmente gerar curtidas.</p>
            <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              O objetivo é gerar{' '}
              <span className="bg-gradient-to-r from-magenta-contrast to-ink-foreground bg-clip-text text-transparent">
                oportunidades comerciais.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
