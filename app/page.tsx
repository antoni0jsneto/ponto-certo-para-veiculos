import { AnalysisSection } from '@/components/analysis-section'
import { CasesSection } from '@/components/cases-section'
import { DifferentialsSection } from '@/components/differentials-section'
import { EcosystemSection } from '@/components/ecosystem-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Hero } from '@/components/hero'
import { JourneySection } from '@/components/journey-section'
import { PricingSection } from '@/components/pricing-section'
import { ProblemSection } from '@/components/problem-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SolutionSection } from '@/components/solution-section'

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-magenta"
      >
        Pular para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <JourneySection />
        <CasesSection />
        <EcosystemSection />
        <DifferentialsSection />
        <PricingSection />
        <AnalysisSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
