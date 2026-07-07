'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const HERO_VIDEO_SRC = '/videos/hero-estate.mp4'
const HERO_POSTER = '/images/hero-estate.png'

export function HeroBackground() {
  const reduced = useReducedMotion()
  const [videoReady, setVideoReady] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '12%'])

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        style={{ y }}
        initial={{ scale: reduced ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/40" />
      </motion.div>
    </div>
  )
}
