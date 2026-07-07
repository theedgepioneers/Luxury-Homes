'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { HeroBackground } from '@/components/home/hero-background'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const studios = [
  { name: 'Malibu', href: '/portfolio?location=malibu' },
  { name: 'Aspen', href: '/portfolio?location=aspen' },
  { name: 'Greenwich', href: '/portfolio?location=greenwich' },
]

const headline =
  'Custom estates from $2.5M — built on schedule, without compromise.'

export function Hero() {
  const reduced = useReducedMotion()
  const words = headline.split(' ')

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          Bespoke Custom Home Builders
        </motion.span>

        <h1 className="mt-6 max-w-4xl text-balance font-heading text-5xl font-medium leading-[1.05] text-background sm:text-6xl lg:text-7xl">
          {reduced ? (
            headline
          ) : (
            words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
                {i < words.length - 1 ? '\u00A0' : ''}
              </motion.span>
            ))
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduced ? 0.5 : 1.1 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/80"
        >
          Vance &amp; Co. designs and builds singular residences for clients who
          expect the exceptional — guided by architecture, craftsmanship, and
          quiet, unwavering stewardship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduced ? 0.6 : 1.25 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <CtaButton label="Schedule a Consultation" />
          <CtaButton
            label="View Selected Work"
            href="/portfolio"
            variant="outline"
            className="border-background/60 text-background hover:bg-background hover:text-foreground"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: reduced ? 0.7 : 1.35 }}
          className="mt-4 text-sm text-background/70"
        >
          By private referral &amp; selective commission
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: reduced ? 0.8 : 1.5 }}
          className="mt-16 flex flex-wrap items-center gap-4 border-t border-background/20 pt-6 sm:gap-6"
        >
          {studios.map((studio) => (
            <Link
              key={studio.name}
              href={studio.href}
              className="rounded-sm border border-background/20 px-4 py-2 text-sm uppercase tracking-[0.25em] text-background/75 transition-colors hover:border-primary/60 hover:text-background"
            >
              {studio.name}
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#bento-features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: reduced ? 0.5 : 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-background/70 transition-colors hover:text-background"
        aria-label="Scroll to explore"
      >
        <span className="text-xs uppercase tracking-[0.25em]">Explore</span>
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
