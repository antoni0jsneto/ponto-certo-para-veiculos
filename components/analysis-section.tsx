import { CheckCircle2 } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { TrackedLink } from '@/components/tracked-link'
import { WHATSAPP_ANALYSIS_URL } from '@/lib/contact'

const checklist = [
  'Google',
  'Site',
  'Estoque online',
  'Instagram',
  'Facebook',
  'Anúncios',
  'WhatsApp',
  'Presença dos concorrentes',
]

export function AnalysisSection() {
  return (
    <section
      id="analise"
      aria-labelledby="analise-title"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-plum to-ink py-20 text-primary-foreground md:py-28"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <p className="w-fit rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            Análise gratuita
          </p>
          <h2 id="analise-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Quer descobrir o que sua loja pode melhorar no digital?
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Antes de contratar qualquer serviço, vamos analisar gratuitamente a presença digital da sua loja.
          </p>
          <p className="text-pretty leading-relaxed text-primary-foreground/70">
            Depois mostramos de forma objetiva onde estão as oportunidades e o que faríamos para melhorar a presença
            digital da sua loja.
          </p>
          <div className="flex flex-col items-start gap-3 pt-2">
            <TrackedLink
              href={WHATSAPP_ANALYSIS_URL}
              event="click_whatsapp_analise"
              variant="light"
              size="lg"
              className="h-16 w-full px-8 text-lg focus-visible:ring-offset-primary sm:w-auto"
            >
              <WhatsAppIcon className="size-6" />
              Quero minha análise gratuita
            </TrackedLink>
            <p className="text-sm text-primary-foreground/70">Sem compromisso.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[28px] bg-ink/40 p-6 ring-1 ring-primary-foreground/15 backdrop-blur md:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              O que analisamos
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-primary-foreground/[0.08] px-4 py-3.5 font-medium"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-magenta-contrast" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
