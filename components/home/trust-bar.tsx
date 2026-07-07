import { Reveal } from '@/components/motion/reveal'

// Edit the values/labels below to update the trust bar shown under the hero.
const trustStats = [
  { value: '50+', label: 'Homes Built' },
  { value: '15', label: 'Years in Business' },
  { value: '98%', label: 'On-Time Delivery' },
]

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14">
        <Reveal className="grid grid-cols-3 items-center justify-items-center gap-x-4 gap-y-4 sm:gap-x-16 lg:gap-x-24">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-heading text-2xl font-medium text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.25em]">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
