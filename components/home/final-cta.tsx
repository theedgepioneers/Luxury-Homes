import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="flex flex-col items-center gap-8 rounded-sm border border-primary/30 bg-card px-6 py-20 text-center">
        <span className="eyebrow">Begin the Conversation</span>
        <h2 className="max-w-3xl text-balance font-heading text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
          Your next home deserves a builder without compromise.
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          We accept a limited number of commissions each year. Reserve a private
          consultation to explore whether we are the right stewards for your
          vision.
        </p>
        <p className="text-sm font-medium tracking-wide text-primary">
          Accepting 4 commissions for 2026
        </p>
        <CtaButton />
      </Reveal>
    </section>
  )
}
