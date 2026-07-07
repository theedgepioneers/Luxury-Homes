'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import { PublicationLogos } from '@/components/publication-logos'
import { AnimatedCounter, Reveal } from '@/components/motion/reveal'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const stats = [
  { value: '$180M+', label: 'Delivered' },
  { value: '47', label: 'Residences' },
  { value: '98%', label: 'On-schedule' },
]

const testimonials = [
  {
    quote:
      'They understood the house we wanted before we could fully describe it. The result is the most personal space we have ever lived in.',
    name: 'Private Client',
    detail: 'New Custom Build · Malibu',
    project: 'Cliffside Pavilion',
  },
  {
    quote:
      'Three years, on schedule, without a single uncomfortable surprise. The discipline behind the elegance is what truly impressed us.',
    name: 'Private Client',
    detail: 'Whole-Home Transformation · Greenwich',
    project: 'Greenwich Georgian',
  },
  {
    quote:
      'We were abroad for most of the build. The bi-weekly briefings made us feel present for every decision that mattered.',
    name: 'Private Client',
    detail: 'New Custom Build · Aspen',
    project: 'Aspen Timber House',
  },
]

export function SocialProof() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [reduced])

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="mb-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-b border-border/60 pb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                className="block font-heading text-4xl font-medium text-primary sm:text-5xl"
              />
              <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        <SectionHeading
          eyebrow="In Their Words"
          title="Trusted by clients who rarely speak publicly."
          align="center"
          className="mb-14"
        />

        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.detail} {...t} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: reduced ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard {...testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              className="flex size-10 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`size-2 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-border'}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex size-10 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-8">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            As featured in
          </span>
          <PublicationLogos />
        </Reveal>
      </div>
    </section>
  )
}
