import Image from 'next/image'
import { AppWindow, Megaphone } from 'lucide-react'
import type { ReactNode } from 'react'
import { FacebookIcon, GoogleIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const nodes: { label: string; icon: ReactNode }[] = [
  { label: 'Site', icon: <AppWindow className="size-5" aria-hidden="true" /> },
  { label: 'Google', icon: <GoogleIcon className="size-5" /> },
  { label: 'Instagram', icon: <InstagramIcon className="size-5" /> },
  { label: 'WhatsApp', icon: <WhatsAppIcon className="size-5" /> },
  { label: 'Meta Ads', icon: <Megaphone className="size-5" aria-hidden="true" /> },
  { label: 'Facebook', icon: <FacebookIcon className="size-5" /> },
]

const RADIUS = 40

const positioned = nodes.map((node, i) => {
  const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
  return {
    ...node,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
})

export function EcosystemSection() {
  return (
    <section aria-labelledby="ecossistema-title" className="overflow-hidden bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <SectionHeading
            id="ecossistema-title"
            eyebrow="Ecossistema"
            title="Tudo conectado."
            description="Não trabalhamos cada ferramenta isoladamente. Site, campanhas, redes sociais e WhatsApp fazem parte da mesma estratégia."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
              <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="0.3" />
              <circle cx="50" cy="50" r={RADIUS * 0.55} fill="none" stroke="var(--border)" strokeWidth="0.3" />
              {positioned.map((node) => (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke="var(--primary)"
                  strokeOpacity="0.45"
                  strokeWidth="0.35"
                  strokeDasharray="1.2 1.6"
                  className="motion-safe:animate-dash"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 flex size-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full bg-ink p-4 text-center shadow-[0_0_0_10px] shadow-primary/10 ring-1 ring-primary/40">
              <Image
                src="/brand/symbol-dark.png"
                alt=""
                width={120}
                height={120}
                className="size-1/2 rounded-full object-cover"
              />
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-foreground sm:text-xs">
                Ponto Certo
              </span>
            </div>

            <ul className="contents">
              {positioned.map((node) => (
                <li
                  key={node.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-primary shadow-[0_12px_30px_-12px] shadow-primary/40 ring-1 ring-border transition-transform duration-300 hover:scale-110 md:size-14">
                    {node.icon}
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-background px-2.5 py-0.5 text-xs font-semibold text-ink ring-1 ring-border">
                    {node.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
