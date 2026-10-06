'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent, type TrackingEvent } from '@/lib/tracking'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'light' | 'ghost-light'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_10px_30px_-12px] shadow-primary/60 hover:bg-plum hover:-translate-y-0.5',
  secondary: 'bg-background text-ink ring-1 ring-border hover:ring-primary/40 hover:text-primary',
  light: 'bg-background text-primary hover:-translate-y-0.5 shadow-[0_10px_30px_-12px] shadow-ink/60',
  'ghost-light': 'text-ink-foreground ring-1 ring-ink-foreground/25 hover:bg-ink-foreground/10',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
}

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md') {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    variants[variant],
    sizes[size],
  )
}

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  event?: TrackingEvent
  eventParams?: Record<string, unknown>
  variant?: Variant
  size?: Size
  unstyled?: boolean
  children: ReactNode
}

export function TrackedLink({
  href,
  event,
  eventParams,
  variant = 'primary',
  size = 'md',
  unstyled = false,
  className,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={(e) => {
        if (event) trackEvent(event, eventParams)
        onClick?.(e)
      }}
      className={unstyled ? className : cn(buttonClasses(variant, size), className)}
      {...rest}
    >
      {children}
      {isExternal && <span className="sr-only"> (abre em uma nova aba)</span>}
    </a>
  )
}
