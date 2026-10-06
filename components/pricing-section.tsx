import { Check, Wallet } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { TrackedLink } from '@/components/tracked-link'
import { whatsappUrl } from '@/lib/contact'

const included = [
  'Site profissional',
  'Estoque online',
  'Google Ads',
  'Meta Ads',
  'Instagram e Facebook',
  'Integração com WhatsApp',
  'Gestão das campanhas',
  'Otimizações',
  'Suporte',
  'Acompanhamento',
]

const PRICING_URL = whatsappUrl(
  'Olá, vi a Ponto Certo e quero conversar sobre a Gestão Digital Completa para minha loja.',
)

export function PricingSection() {
  return (
    <section id="investimento" aria-labelledby="investimento-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal viewEvent="view_investimento">
          <article className="relative overflow-hidden rounded-[32px] bg-ink text-ink-foreground shadow-[0_50px_100px_-40px] shadow-primary/60">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-plum via-magenta to-primary"
            />
            <div className="grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div className="flex flex-col gap-6">
                <p className="w-fit rounded-full bg-ink-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-magenta-contrast">
                  Plano para lojas de veículos
                </p>
                <h2 id="investimento-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Gestão Digital Completa
                </h2>
                <p className="flex items-baseline gap-2">
                  <span className="font-display text-6xl font-semibold tracking-tight md:text-7xl">R$ 1.200</span>
                  <span className="text-lg text-ink-foreground/60">/ mês</span>
                </p>

                <div className="mt-auto flex flex-col gap-3 rounded-2xl bg-ink-foreground/[0.06] p-5 ring-1 ring-ink-foreground/10">
                  <p className="flex items-center gap-2 font-semibold">
                    <Wallet className="size-5 text-magenta-contrast" aria-hidden="true" />
                    Investimento em mídia
                  </p>
                  <p className="text-sm leading-relaxed text-ink-foreground/70">
                    O orçamento utilizado no Google e Meta é definido junto com a loja e pago diretamente às plataformas.
                  </p>
                  <p className="text-sm font-semibold text-ink-foreground">
                    Sem esconder verba de anúncio dentro da mensalidade.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 border-t border-ink-foreground/10 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">O que está incluso</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-magenta-strong">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href={PRICING_URL}
                  event="click_whatsapp_investimento"
                  variant="light"
                  size="lg"
                  className="mt-auto w-full focus-visible:ring-offset-ink"
                >
                  <WhatsAppIcon className="size-5" />
                  Quero conversar sobre minha loja
                </TrackedLink>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
