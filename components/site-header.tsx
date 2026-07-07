'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'The Process' },
  { href: '/investment', label: 'Investment' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const onHero = pathname === '/' && !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className={cn(
            'flex flex-col leading-none transition-colors',
            onHero ? 'text-background' : 'text-foreground',
          )}
        >
          <span className="font-heading text-xl font-semibold tracking-wide">
            VANCE &amp; CO.
          </span>
          <span
            className={cn(
              'mt-0.5 text-[0.6rem] uppercase tracking-[0.3em]',
              onHero ? 'text-background/70' : 'text-muted-foreground',
            )}
          >
            Architectural Builders
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'group relative text-sm tracking-wide transition-colors',
                onHero
                  ? 'text-background/85 hover:text-background'
                  : 'text-foreground/75 hover:text-foreground',
                pathname === link.href && 'text-primary',
              )}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton label="Schedule Consultation" className="px-5 py-2.5" withIcon={false} />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={cn(
            'lg:hidden',
            onHero ? 'text-background' : 'text-foreground',
          )}
        >
          <Menu className="size-6" />
        </button>
      </div>

      <div
        className="h-0.5 origin-left bg-primary transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-semibold tracking-wide">
                  VANCE &amp; CO.
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-6" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-border py-4 font-heading text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <CtaButton className="w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
