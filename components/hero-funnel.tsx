import { Globe, CarFront, UserRound, Search, ChevronRight } from 'lucide-react'
import { FacebookIcon, GoogleIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'

function Connector() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-6 w-px bg-ink-foreground/15">
      <span className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-magenta shadow-[0_0_10px_2px] shadow-magenta/60 motion-safe:animate-flow" />
    </div>
  )
}

function Step({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-ink-foreground/[0.06] p-3 ring-1 ring-ink-foreground/10">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-foreground/10 text-ink-foreground">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-foreground/50">{label}</p>
        <div className="truncate text-sm text-ink-foreground">{children}</div>
      </div>
    </div>
  )
}

export function HeroFunnel() {
  return (
    <div
      className="relative mx-auto w-full max-w-md motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000 lg:max-w-none"
      role="img"
      aria-label="Ecossistema digital: Google, Instagram e Facebook levam o comprador ao site da loja, ao veículo, ao WhatsApp e ao vendedor."
    >
      <div className="relative rounded-[28px] bg-ink p-4 shadow-[0_40px_80px_-30px] shadow-primary/50 ring-1 ring-ink/10 md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-ink-foreground/20" />
            <span className="size-2.5 rounded-full bg-ink-foreground/20" />
            <span className="size-2.5 rounded-full bg-ink-foreground/20" />
          </div>
          <p className="text-xs font-medium text-ink-foreground/60">Canal comercial da loja</p>
        </div>

        <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)] gap-2">
          <div className="flex min-w-0 flex-col gap-2 rounded-2xl bg-background p-3 text-foreground">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
              <GoogleIcon className="size-3.5 text-primary" />
              Google
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1.5 text-[11px] text-muted-foreground">
              <Search className="size-3 shrink-0" aria-hidden="true" />
              <span className="truncate">seminovos em São Bernardo</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-ink-foreground/[0.06] p-3 ring-1 ring-ink-foreground/10">
            <InstagramIcon className="size-5 text-magenta-contrast" />
            <span className="truncate text-[10px] font-medium text-ink-foreground/80 sm:text-[11px]">Instagram</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-ink-foreground/[0.06] p-3 ring-1 ring-ink-foreground/10">
            <FacebookIcon className="size-5 text-ink-foreground" />
            <span className="truncate text-[10px] font-medium text-ink-foreground/80 sm:text-[11px]">Facebook</span>
          </div>
        </div>

        <svg viewBox="0 0 300 36" preserveAspectRatio="none" className="h-9 w-full" aria-hidden="true">
          <g fill="none" stroke="var(--magenta)" strokeWidth="1.25" strokeDasharray="3 5" className="motion-safe:animate-dash">
            <path d="M58 0 C58 22, 150 14, 150 36" />
            <path d="M175 0 C175 20, 150 16, 150 36" />
            <path d="M250 0 C250 22, 150 14, 150 36" />
          </g>
        </svg>

        <div className="flex flex-col">
          <Step icon={<Globe className="size-5" />} label="Site da loja">
            Estoque completo, sempre atualizado
          </Step>
          <Connector />
          <div className="flex gap-3 rounded-2xl bg-background p-3">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-border text-primary">
              <CarFront className="size-8" aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Veículo</p>
              <p className="truncate text-sm font-semibold text-ink">SUV · Automático · Revisado</p>
              <span className="inline-flex w-fit items-center gap-1 text-xs font-medium text-primary">
                Ver detalhes <ChevronRight className="size-3" aria-hidden="true" />
              </span>
            </div>
          </div>
          <Connector />
          <Step icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
            {'"Olá, esse carro ainda está disponível?"'}
          </Step>
          <Connector />
          <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-magenta-strong p-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-foreground/20 text-ink-foreground">
              <UserRound className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-foreground/75">Vendedor</p>
              <p className="text-sm font-semibold text-ink-foreground">Atendimento direto da sua equipe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
