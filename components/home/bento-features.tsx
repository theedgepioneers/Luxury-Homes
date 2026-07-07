import Image from 'next/image'
import Link from 'next/link'
import { Compass, Gem, ShieldCheck, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

export function BentoFeatures() {
  return (
    <section
      id="bento-features"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <SectionHeading
        eyebrow="Why Vance & Co."
        title="An uncommon standard, held from first sketch to final detail."
        description="Four principles shape every residence we build — and every relationship we keep."
        className="mb-14"
      />

      <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        <Reveal className="md:col-span-2 md:row-span-2">
          <Link
            href="/process"
            className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-sm border border-border/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_64px_-32px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src="/images/feature-craft.png"
              alt="Master craftsman finishing custom walnut joinery"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <span className="absolute left-0 top-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            <div className="relative z-10 max-w-md text-background">
              <Gem className="size-7 text-primary" />
              <h3 className="mt-4 font-heading text-3xl font-medium">
                Craftsmanship without shortcuts
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-background/80">
                We work with a small, fiercely loyal roster of master trades.
                Every joint, finish, and transition is executed by hands that
                have spent a lifetime perfecting it.
              </p>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <Link
            href="/process"
            className="group flex h-full flex-col gap-3 rounded-sm border border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-12" />
            <Compass className="size-7 text-primary" />
            <h3 className="font-heading text-2xl font-medium">
              Architecture-led
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Design integrity drives every decision. We protect the vision from
              concept through construction.
            </p>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="group flex h-full flex-col gap-3 rounded-sm border border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            <span className="h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-12" />
            <Users className="size-7 text-primary" />
            <h3 className="font-heading text-2xl font-medium">
              One accountable lead
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              A single principal owns your project end to end. No diffusion of
              responsibility, ever.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-3">
          <Link
            href="/investment"
            className="group flex h-full flex-col items-start gap-4 rounded-sm border border-border/50 bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:flex-row md:items-center md:justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="size-7 shrink-0 text-primary" />
              <div>
                <h3 className="font-heading text-2xl font-medium">
                  Assurance that outlasts the build
                </h3>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  A five-year warranty, a private progress portal, and a standing
                  bi-weekly briefing — clarity and protection long after handover.
                </p>
              </div>
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View investment →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
