import { Reveal } from '@/components/motion/reveal'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
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
