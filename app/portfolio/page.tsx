import type { Metadata } from 'next'
import { caseStudies } from '@/lib/case-studies'
import { CaseStudyCard } from '@/components/case-study-card'
import { PageHeader } from '@/components/page-header'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Portfolio — Vance & Co.',
  description:
    'A selection of bespoke custom residences by Vance & Co. across Malibu, Aspen, and Greenwich.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Ten residences, ten singular acts of trust."
        description="A representative selection of our work. Many commissions remain private at our clients’ request — what follows is a glimpse of what is possible."
        image="/images/case-greenwich.png"
        imageAlt="Greenwich Georgian estate exterior"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-20 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every residence begins with a single private conversation. We would be
            honored to hear what you have in mind.
          </p>
          <CtaButton />
        </div>
      </section>
    </>
  )
}
