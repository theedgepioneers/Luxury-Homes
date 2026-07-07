import { Quote } from 'lucide-react'

type TestimonialCardProps = {
  quote: string
  name: string
  detail: string
  project?: string
}

export function TestimonialCard({ quote, name, detail, project }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-sm border border-border/50 bg-card p-8">
      <Quote className="size-7 text-primary" />
      <blockquote className="text-pretty font-heading text-xl leading-relaxed text-foreground">
        {quote}
      </blockquote>
      <figcaption className="mt-auto border-t border-border pt-5">
        {project && (
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
            {project}
          </div>
        )}
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{detail}</div>
      </figcaption>
    </figure>
  )
}
