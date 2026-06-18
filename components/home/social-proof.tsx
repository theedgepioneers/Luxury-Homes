import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import { StaggerGroup, StaggerItem, Reveal } from '@/components/motion/reveal'

const testimonials = [
  {
    quote:
      'They understood the house we wanted before we could fully describe it. The result is the most personal space we have ever lived in.',
    name: 'Private Client',
    detail: 'New Custom Build · Malibu',
  },
  {
    quote:
      'Three years, on schedule, without a single uncomfortable surprise. The discipline behind the elegance is what truly impressed us.',
    name: 'Private Client',
    detail: 'Whole-Home Transformation · Greenwich',
  },
  {
    quote:
      'We were abroad for most of the build. The bi-weekly briefings made us feel present for every decision that mattered.',
    name: 'Private Client',
    detail: 'New Custom Build · Aspen',
  },
]

const publications = ['Architectural Digest', 'Robb Report', 'Luxe Magazine']

export function SocialProof() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="In Their Words"
          title="Trusted by clients who rarely speak publicly."
          align="center"
          className="mb-14"
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.detail} className="h-full">
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16 flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            As featured in
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {publications.map((pub) => (
              <span
                key={pub}
                className="font-heading text-xl text-foreground/70 sm:text-2xl"
              >
                {pub}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
