import { AppWindow, Search, Megaphone, LayoutGrid } from 'lucide-react'
import type { ReactNode } from 'react'
import { WhatsAppIcon, InstagramIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Site + Estoque',
    description:
      'Site profissional da sua loja com estoque atualizado, páginas individuais dos veículos, filtros e integração com WhatsApp.',
    icon: <AppWindow className="size-6" aria-hidden="true" />,
  },
  {
    title: 'Google Ads',
    description: 'Colocamos sua loja na frente de pessoas que já estão pesquisando veículos no Google.',
    icon: <Search className="size-6" aria-hidden="true" />,
  },
  {
    title: 'Meta Ads',
    description: 'Campanhas no Instagram e Facebook para apresentar seus veículos e gerar novas oportunidades.',
    icon: <Megaphone className="size-6" aria-hidden="true" />,
  },
  {
    title: 'Instagram + Facebook',
    description: 'Organização da presença digital da loja e divulgação profissional do estoque.',
    icon: <InstagramIcon className="size-6" />,
  },
  {
    title: 'WhatsApp',
    description: 'Levamos o interessado para conversar diretamente com sua equipe comercial.',
    icon: <WhatsAppIcon className="size-6" />,
  },
  {
    title: 'Gestão',
    description: 'Planejamento, campanhas, otimizações, acompanhamento e suporte centralizados.',
    icon: <LayoutGrid className="size-6" aria-hidden="true" />,
  },
]

export function SolutionSection() {
  return (
    <section id="solucao" aria-labelledby="solucao-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:gap-16 md:px-8">
        <Reveal>
          <SectionHeading
            id="solucao-title"
            eyebrow="A solução"
            title="Uma estrutura digital completa para sua loja."
            description="Em vez de contratar uma pessoa para o site, outra para anúncios e outra para redes sociais, centralizamos toda a operação digital."
          />
        </Reveal>

        <ul id="servicos" className="grid scroll-mt-24 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col gap-5 rounded-3xl bg-background p-6 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px] hover:shadow-primary/50 hover:ring-primary/30 md:p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {service.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
