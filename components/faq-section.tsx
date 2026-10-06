import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Preciso parar de anunciar na Webmotors ou OLX?',
    a: 'Não. Nossa proposta não é simplesmente substituir os portais. O objetivo é criar canais próprios para que sua loja também possa gerar oportunidades através do Google, redes sociais, site e WhatsApp.',
  },
  {
    q: 'O investimento em anúncios está incluso nos R$ 1.200?',
    a: 'Não. Os R$ 1.200 correspondem à gestão e estrutura digital. O orçamento de Google Ads e Meta Ads é definido junto com a loja e pago diretamente às plataformas.',
  },
  {
    q: 'Vocês criam o site da loja?',
    a: 'Sim. O site e a estrutura de estoque fazem parte da solução.',
  },
  {
    q: 'Minha loja já tem Instagram. Posso usar o mesmo?',
    a: 'Sim. Trabalhamos com os canais existentes sempre que possível.',
  },
  {
    q: 'Vocês trabalham apenas com lojas de São Bernardo?',
    a: 'O atendimento inicialmente é focado em São Bernardo do Campo e região do ABC, mas podemos avaliar projetos de outras regiões.',
  },
  {
    q: 'Como começo?',
    a: 'Entre em contato pelo WhatsApp. Primeiro analisamos a presença digital atual da loja e apresentamos as oportunidades que identificamos.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal>
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Perguntas frequentes" />
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-background ring-1 ring-border transition-shadow open:shadow-[0_20px_40px_-28px] open:shadow-primary/50 open:ring-primary/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-display font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-primary transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
                    <Plus className="size-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="px-5 pb-6 leading-relaxed text-muted-foreground md:px-6">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
