'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { CtaButton } from '@/components/cta-button'

const studios = ['Malibu', 'Aspen', 'Greenwich']

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-estate.png"
          alt="A modern waterfront estate at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/40" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          Bespoke Custom Home Builders
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-heading text-5xl font-medium leading-[1.05] text-background sm:text-6xl lg:text-7xl"
        >
          The home you imagine, built without compromise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/80"
        >
          Vance &amp; Co. designs and builds singular residences for clients who
          expect the exceptional — guided by architecture, craftsmanship, and
          quiet, unwavering stewardship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <CtaButton />
          <span className="text-sm text-background/70">
            By private referral &amp; selective commission
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-6 border-t border-background/20 pt-6"
        >
          {studios.map((studio) => (
            <span
              key={studio}
              className="text-sm uppercase tracking-[0.25em] text-background/75"
            >
              {studio}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
