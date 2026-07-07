import { Fragment } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'A private conversation to understand your vision, site, and goals.',
  },
  {
    number: '02',
    title: 'Custom Design',
    description: 'Architecture and details are shaped around exactly how you live.',
  },
  {
    number: '03',
    title: 'Build & Deliver',
    description: 'One accountable lead builds your home on schedule, start to finish.',
  },
]

export function ProcessOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path from first call to final walkthrough."
        />
        <Link
          href="/process"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
        >
          View the full process
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <StaggerGroup className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-6">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <StaggerItem className="flex flex-1 items-start gap-6 sm:flex-col sm:gap-4">
              <span className="font-heading text-4xl font-medium text-primary sm:text-5xl">
                {step.number}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-xl font-medium sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
            {index < steps.length - 1 && (
              <ArrowRight className="mt-3 hidden shrink-0 self-start size-5 text-primary/40 lg:block" />
            )}
          </Fragment>
        ))}
      </StaggerGroup>
    </section>
  )
}
