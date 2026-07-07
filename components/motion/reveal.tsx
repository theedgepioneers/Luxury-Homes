'use client'

import { motion, useInView, type Variants } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const ease = [0.22, 1, 0.36, 1] as const

function getVariants(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    }
  }
  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  }
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion()
  const variants = getVariants(reduced)
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: { duration: reduced ? 0.4 : 0.7, ease, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

function getItemVariants(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    }
  }
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease },
    },
  }
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div className={className} variants={getItemVariants(reduced)}>
      {children}
    </motion.div>
  )
}

type CounterProps = {
  value: string
  className?: string
}

function parseCounterValue(value: string): {
  prefix: string
  number: number
  suffix: string
  decimals: number
} | null {
  const match = value.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const numStr = match[2].replace(/,/g, '')
  const number = parseFloat(numStr)
  if (Number.isNaN(number)) return null
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { prefix: match[1], number, suffix: match[3], decimals }
}

export function AnimatedCounter({ value, className }: CounterProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const parsed = parseCounterValue(value)
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value)

  useEffect(() => {
    if (!parsed || !inView) return
    if (reduced) {
      setDisplay(value)
      return
    }

    const duration = 1400
    const start = performance.now()
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parsed.number * eased
      const formatted =
        parsed.decimals > 0
          ? current.toFixed(parsed.decimals)
          : Math.round(current).toLocaleString()
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, parsed, reduced, value])

  if (!parsed) {
    return <span className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
