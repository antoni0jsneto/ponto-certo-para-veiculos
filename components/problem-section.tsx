import { Check, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const portalOnly = [
  'Você disputa atenção com centenas de lojas',
  'A audiência pertence à plataforma',
  'O cliente compara seu veículo com vários concorrentes',
  'Sua marca fica em segundo plano',
  'Existe dependência constante das plataformas',
]

const ownChannels = [
  'Seu próprio site',
  'Sua marca no Google',
  'Presença profissional nas redes sociais',
  'Anúncios próprios',
  'Contato direto pelo WhatsApp',
  'Construção de audiência e presença digital',
]

export function ProblemSection() {
  return (
    <section aria-labelledby="problema-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:gap-16 md:px-8">
        <Reveal>
          <SectionHeading
            id="problema-title"
            eyebrow="O cenário"
            title="Sua loja não precisa depender somente dos grandes portais."
            description="Webmotors, OLX e outros portais fazem parte do mercado automotivo. Mas eles não precisam ser o único caminho entre sua loja e o comprador."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col gap-6 rounded-3xl bg-background/60 p-6 ring-1 ring-border md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-ink/70">Dependendo apenas dos portais</h3>
                <span className="rounded-full bg-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Hoje
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {portalOnly.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-border">
                      <Minus className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <article className="flex h-full flex-col gap-6 rounded-3xl bg-background p-6 shadow-[0_30px_60px_-30px] shadow-primary/40 ring-2 ring-primary md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-ink">Construindo seus próprios canais</h3>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Com a Ponto Certo
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {ownChannels.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto max-w-3xl text-balance text-center font-display text-xl font-medium leading-snug text-ink md:text-2xl">
            Não queremos simplesmente substituir os portais.{' '}
            <span className="text-primary">
              Queremos fazer sua loja construir um canal próprio de aquisição de clientes.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
