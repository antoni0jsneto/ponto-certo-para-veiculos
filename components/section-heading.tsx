import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({ eyebrow, title, description, tone = 'light', align = 'left', id }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center')}>
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em]',
            dark ? 'text-magenta-contrast' : 'text-primary',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl',
          dark ? 'text-ink-foreground' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-base leading-relaxed md:text-lg',
            dark ? 'text-ink-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
