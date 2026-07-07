import Image from 'next/image'
import { Reveal } from '@/components/motion/reveal'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeaderProps) {
  if (image) {
    return (
      <section className="relative min-h-[45vh] overflow-hidden border-b border-border">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/30" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </span>
            <h1 className="text-balance font-heading text-4xl font-medium leading-[1.08] text-background sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="text-pretty leading-relaxed text-background/80 md:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-balance font-heading text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
