'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { trackEvent, type TrackingEvent } from '@/lib/tracking'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
  viewEvent?: TrackingEvent
}

export function Reveal({ children, className, delay = 0, as: Tag = 'div', viewEvent }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (viewEvent) trackEvent(viewEvent)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [viewEvent])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-6 motion-safe:opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
