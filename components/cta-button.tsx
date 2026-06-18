import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  className?: string
  label?: string
  variant?: 'solid' | 'outline'
  withIcon?: boolean
}

export function CtaButton({
  className,
  label = 'Schedule Private Consultation',
  variant = 'solid',
  withIcon = true,
}: CtaButtonProps) {
  return (
    <Link
      href="/consultation"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300',
        variant === 'solid'
          ? 'bg-primary text-primary-foreground hover:bg-primary/85'
          : 'border border-current text-foreground hover:bg-foreground hover:text-background',
        className,
      )}
    >
      {label}
      {withIcon && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  )
}
