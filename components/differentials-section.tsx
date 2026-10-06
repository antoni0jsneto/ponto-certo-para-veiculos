import { Gauge, Layers, MapPin, MessagesSquare, Landmark } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const items = [
  {
    title: 'Conhecemos o segmento',
    description:
      'Não começamos do zero a cada novo cliente. Já trabalhamos com lojas de veículos e conhecemos a dinâmica de estoque, anúncios e atendimento.',
    icon: Gauge,
    featured: true,
  },
  {
    title: 'Uma única operação',
    description: 'Site, campanhas e redes sociais trabalhando juntos.',
    icon: Layers,
  },
  {
    title: 'Foco local',
    description: 'Estratégias pensadas para São Bernardo do Campo e região do ABC.',
    icon: MapPin,
  },
  {
    title: 'Contato direto',
    description: 'Nosso objetivo é aproximar o interessado da equipe comercial da loja.',
    icon: MessagesSquare,
  },
  {
    title: 'Seu próprio patrimônio digital',
    description: 'Sua empresa passa a construir seus próprios canais digitais.',
    icon: Landmark,
  },
]

export function DifferentialsSection() {
  return (
    <section aria-labelledby="diferencial-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:gap-16 md:px-8">
        <Reveal>
          <SectionHeading id="diferencial-title" eyebrow="Diferencial" title="Marketing pensado para quem vende carros." />
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 70}
                className={cn('h-full', item.featured && 'md:col-span-2 lg:row-span-2')}
              >
                <article
                  className={cn(
                    'flex h-full flex-col gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7',
                    item.featured
                      ? 'justify-between bg-gradient-to-br from-primary to-ink text-primary-foreground lg:p-10'
                      : 'bg-muted text-ink ring-1 ring-transparent hover:ring-primary/25',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center rounded-2xl',
                      item.featured ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-background text-primary',
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className={cn('font-semibold', item.featured ? 'text-2xl md:text-3xl' : 'text-lg')}>
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        'leading-relaxed',
                        item.featured ? 'max-w-md text-primary-foreground/80 md:text-lg' : 'text-muted-foreground',
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
