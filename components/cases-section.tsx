import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TrackedLink } from '@/components/tracked-link'
import { whatsappUrl } from '@/lib/contact'

interface CaseMetric {
  label: string
  value: string
}

interface CaseStudy {
  name: string
  description: string
  image: string
  imageAlt: string
  imageKind?: 'browser' | 'photo'
  items: string[]
  href?: string
  metrics?: CaseMetric[]
}

const cases: CaseStudy[] = [
  {
    name: 'Destak Veículos',
    description:
      'Loja tradicional de São Bernardo do Campo com décadas de atuação no mercado automotivo.',
    image: '/cases/destak.jpeg',
    imageAlt: 'Proprietário da Destak Veículos em frente à fachada da loja, com carros do estoque ao redor',
    imageKind: 'photo',
    items: [
      'Site próprio',
      'Estoque digital',
      'Google Ads',
      'Meta Ads',
      'Instagram e Facebook',
      'Integração com WhatsApp',
      'Gestão da presença digital',
    ],
    metrics: [],
  },
  {
    name: 'Líder Multimarcas',
    description:
      'Estrutura digital criada para transformar Google, redes sociais e site em novos canais de aquisição.',
    image: '/cases/lider-fachada.png',
    imageAlt: 'Fachada vermelha da Líder Multimarcas com letreiro "Garantia e Procedência" e carros na rua em frente',
    imageKind: 'photo',
    items: [
      'Site próprio',
      'Estoque online',
      'Google Ads',
      'Meta Ads',
      'Instagram e Facebook',
      'WhatsApp',
      'Automações de atendimento',
    ],
    metrics: [],
  },
]

function BrowserMockup({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink shadow-[0_30px_60px_-30px] shadow-ink/60 ring-1 ring-ink/10">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-ink-foreground/25" />
          <span className="size-2.5 rounded-full bg-ink-foreground/25" />
          <span className="size-2.5 rounded-full bg-ink-foreground/25" />
        </div>
        <div className="flex-1 truncate rounded-full bg-ink-foreground/10 px-3 py-1 text-center text-xs text-ink-foreground/60">
          {label}
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-muted">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
      </div>
    </div>
  )
}

function StorePhoto({ src, alt, name }: { src: string; alt: string; name: string }) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink shadow-[0_30px_60px_-30px] shadow-ink/60 ring-1 ring-ink/10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      <figcaption className="text-sm text-muted-foreground">{`Fachada da ${name} — cliente Ponto Certo`}</figcaption>
    </figure>
  )
}

function CaseCard({ study, reverse }: { study: CaseStudy; reverse: boolean }) {
  const href =
    study.href ?? whatsappUrl(`Olá, vi a Ponto Certo e quero conhecer o projeto da ${study.name}.`)
  return (
    <article className="grid items-center gap-8 rounded-[32px] bg-muted p-5 md:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
      <div className={reverse ? 'lg:order-2' : undefined}>
        {study.imageKind === 'photo' ? (
          <StorePhoto src={study.image} alt={study.imageAlt} name={study.name} />
        ) : (
          <BrowserMockup src={study.image} alt={study.imageAlt} label={`Site — ${study.name}`} />
        )}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case · São Bernardo do Campo</p>
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">{study.name}</h3>
          <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">{study.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {study.items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-border"
            >
              <Check className="size-3.5 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {study.metrics && study.metrics.length > 0 && (
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl bg-background p-4 ring-1 ring-border">
                <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <TrackedLink
          href={href}
          event="click_whatsapp_case"
          eventParams={{ case: study.name }}
          variant="secondary"
          className="w-fit"
        >
          Conhecer o projeto
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </TrackedLink>
      </div>
    </article>
  )
}

export function CasesSection() {
  return (
    <section id="cases" aria-labelledby="cases-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:gap-16 md:px-8">
        <Reveal viewEvent="view_cases">
          <SectionHeading id="cases-title" eyebrow="Cases" title="Experiência real com lojas de São Bernardo." />
        </Reveal>
        <div className="flex flex-col gap-6">
          {cases.map((study, i) => (
            <Reveal key={study.name}>
              <CaseCard study={study} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
