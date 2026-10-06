'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { TrackedLink } from '@/components/tracked-link'
import { WHATSAPP_ANALYSIS_URL } from '@/lib/contact'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Cases', href: '#cases' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-background/90 shadow-[0_1px_0_0] shadow-border backdrop-blur-lg'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a
          href="#topo"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
        >
          <Image
            src="/brand/wordmark.png"
            alt="Ponto Certo — Agência de Marketing"
            width={740}
            height={168}
            priority
            className="h-8 w-auto md:h-10"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <TrackedLink
            href={WHATSAPP_ANALYSIS_URL}
            event="click_whatsapp_header"
            className="h-10 px-4 md:h-11 md:px-5"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </TrackedLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink ring-1 ring-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          'overflow-hidden border-border transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-[420px] border-t' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
