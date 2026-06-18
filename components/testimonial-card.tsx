import { Quote } from 'lucide-react'

type TestimonialCardProps = {
  quote: string
  name: string
  detail: string
}

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-sm border border-border bg-card p-8">
      <Quote className="size-7 text-primary" />
      <blockquote className="text-pretty font-heading text-xl leading-relaxed text-foreground">
        {quote}
      </blockquote>
      <figcaption className="mt-auto border-t border-border pt-5">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{detail}</div>
      </figcaption>
    </figure>
  )
}
