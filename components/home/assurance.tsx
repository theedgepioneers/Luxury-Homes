'use client'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const commitments = [
  {
    value: '5-Year',
    label: 'Structural & systems warranty',
    detail: 'Comprehensive coverage backed by an ongoing stewardship program.',
    animate: false,
  },
  {
    value: 'Bi-Weekly',
    label: 'Private client briefing',
    detail: 'A standing 15-minute update so you are never left wondering.',
    animate: false,
  },
  {
    value: 'Single',
    label: 'Accountable project lead',
    detail: 'One principal owns your residence from first sketch to handover.',
    animate: false,
  },
  {
    value: '24/7',
    label: 'Live progress portal',
    detail: 'See your home take shape from anywhere in the world.',
    animate: false,
  },
]

export function Assurance() {
  return (
    <section className="section-dark border-t border-primary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Sovereign Assurance</span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            The confidence to commission, and the peace to enjoy it.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            A custom home is a profound act of trust. We honor it with
            commitments that are written, measurable, and upheld — long after the
            last detail is set.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <StaggerItem key={item.label} className="bg-card">
              <div className="flex h-full flex-col gap-3 p-8">
                <span className="font-heading text-4xl font-medium text-primary">
                  {item.value}
                </span>
                <span className="font-medium">{item.label}</span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
