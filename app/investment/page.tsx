import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Investment — Vance & Co.',
  description:
    'Transparent investment framework for bespoke custom builds and whole-home transformations by Vance & Co.',
}

const tiers = [
  {
    name: 'New Custom Build',
    from: '$2.5M',
    description:
      'A ground-up residence designed and constructed entirely around you — site, architecture, and every interior detail.',
    includes: [
      'Architecture-led design development',
      'Full pre-construction engineering & budgeting',
      'Curated roster of master trades',
      'Dedicated principal & project lead',
      'Five-year structural & systems warranty',
    ],
  },
  {
    name: 'Whole-Home Transformation',
    from: '$6.0M',
    description:
      'A comprehensive reimagining of an existing residence — preserving what matters, elevating everything else.',
    includes: [
      'Structural assessment & feasibility study',
      'Heritage-sensitive design integration',
      'Systems modernization & re-engineering',
      'Phased construction with minimal disruption',
      'Five-year structural & systems warranty',
    ],
    featured: true,
  },
]

export default function InvestmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="Clarity from the very first conversation."
        description="We believe transparency is a form of respect. Here is how we frame the investment behind a Vance & Co. residence."
        image="/images/investment-interior.png"
        imageAlt="A refined custom home interior with bespoke finishes"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <article
                className={`flex h-full flex-col gap-6 rounded-sm border p-8 lg:p-10 ${
                  tier.featured
                    ? 'border-primary bg-card'
                    : 'border-border bg-card'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-3xl font-medium">
                    {tier.name}
                  </h2>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      From
                    </span>
                    <span className="font-heading text-4xl font-medium text-primary">
                      {tier.from}
                    </span>
                  </div>
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="flex flex-col gap-3 border-t border-border pt-6">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <CtaButton className="w-full" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex flex-col gap-5">
              <span className="eyebrow">How We Frame Value</span>
              <h2 className="text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl">
                Investment is shaped by site, scale, and the level of finish you
                envision.
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Rather than a fixed price list, we provide a transparent framework
                during your private consultation. Every figure is tied to specific
                decisions you control — so you always understand exactly what your
                investment is buying.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/investment-interior.png"
                alt="A refined custom home interior with bespoke finishes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
