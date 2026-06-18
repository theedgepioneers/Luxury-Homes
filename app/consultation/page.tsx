import type { Metadata } from 'next'
import { MapPin, Clock, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ConsultationForm } from '@/components/consultation-form'
import { Reveal } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Schedule a Private Consultation — Vance & Co.',
  description:
    'Reserve a private, confidential consultation with a Vance & Co. principal to explore your bespoke custom home.',
}

const assurances = [
  {
    icon: MapPin,
    title: 'Studios',
    detail: 'Malibu · Aspen · Greenwich',
  },
  {
    icon: Clock,
    title: 'Response',
    detail: 'A principal responds personally, in confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Discretion',
    detail: 'Every inquiry is held under mutual NDA.',
  },
]

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Consultation"
        title="Begin a quiet conversation about an extraordinary home."
        description="Tell us a little about your vision. One of our principals will reach out personally to arrange a confidential consultation."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-medium leading-tight">
                A limited number of commissions each year.
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                We accept only the projects we can fully commit to. Your inquiry
                is the first step in determining whether we are the right stewards
                for your vision — with no obligation on either side.
              </p>
            </div>
            <ul className="flex flex-col gap-6 border-t border-border pt-8">
              {assurances.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
