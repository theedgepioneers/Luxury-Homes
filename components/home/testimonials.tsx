import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'

// Placeholder quotes — replace with real client testimonials.
const testimonials = [
  {
    quote:
      'From the first meeting, it was clear they understood not just how we wanted our home to look, but how we wanted to live in it.',
    name: 'Client Name',
    detail: 'Custom Build Client',
  },
  {
    quote:
      'Every deadline was met without a single compromise on quality. Rare to find that combination in a builder.',
    name: 'Client Name',
    detail: 'Whole-Home Renovation Client',
  },
  {
    quote:
      'Communication was constant and honest, even when the news was hard. We always knew exactly where things stood.',
    name: 'Client Name',
    detail: 'Custom Build Client',
  },
]

export function Testimonials() {
  return (
    <section className="section-dark">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Client Voices"
          title="What it's like to build with us."
          align="center"
          className="mb-14"
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index} className="h-full">
              <TestimonialCard {...testimonial} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
