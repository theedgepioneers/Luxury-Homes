import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-pretty text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
