'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const dismissedStorage = sessionStorage.getItem('sticky-cta-dismissed')
    if (dismissedStorage) {
      setDismissed(true)
      return
    }

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleDismiss() {
    setDismissed(true)
    sessionStorage.setItem('sticky-cta-dismissed', '1')
  }

  const show = visible && !dismissed

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center gap-3">
            <Link
              href="/consultation"
              className={cn(
                'flex-1 rounded-sm bg-primary px-4 py-3 text-center text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/85',
              )}
            >
              Schedule Consultation
            </Link>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={handleDismiss}
              className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
