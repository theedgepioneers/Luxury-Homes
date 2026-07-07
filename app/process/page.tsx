import type { Metadata } from 'next'
import Image from 'next/image'
import { processSteps } from '@/lib/process-steps'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'The Process — Vance & Co.',
  description:
    'How Vance & Co. guides a bespoke residence from first conversation to lifelong stewardship.',
}

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Process"
        title="A deliberate path from imagination to permanence."
        description="Great homes are not rushed. Our process is built to remove uncertainty and protect the vision at every stage."
        image="/images/process-site.png"
        imageAlt="Architects reviewing plans on a custom home construction site"
      />

      <section className="relative mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-16 lg:gap-24">
          {processSteps.map((step, index) => (
            <Reveal key={step.number}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                <div className="flex items-start gap-5 lg:flex-col lg:items-center">
                  <span className="font-heading text-5xl font-medium text-primary lg:text-6xl">
                    {step.number}
                  </span>
                  {index < processSteps.length - 1 && (
                    <span className="hidden h-full w-px flex-1 bg-border lg:block" />
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-heading text-3xl font-medium sm:text-4xl">
                    {step.title}
                  </h2>
                  <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                    {step.summary}
                  </p>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/process-site.png"
                alt="Architects reviewing plans on a custom home construction site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Our Commitment</span>
              <h2 className="text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl">
                One principal, present from first sketch to final walkthrough.
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
                You will never be handed off to a stranger. The principal who
                earns your trust at the outset remains personally accountable for
                your residence until the day you receive the keys — and well
                beyond.
              </p>
              <div className="mt-2">
                <CtaButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
