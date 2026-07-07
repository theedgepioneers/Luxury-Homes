import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import type { CaseStudy } from '@/lib/case-studies'

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.name} — ${study.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary">
            <span className="font-heading text-2xl text-muted-foreground/60">
              {study.name}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
          {study.scope}
        </span>
        <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-foreground/80 py-3 text-sm font-medium tracking-wide text-background transition-transform duration-300 group-hover:translate-y-0">
          View project
          <ArrowRight className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          {study.location}
        </div>
        <h3 className="font-heading text-2xl font-medium leading-tight">
          {study.name}
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {study.narrative}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-border pt-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {study.stat.label}
          </span>
          <span className="font-heading text-lg text-foreground">
            {study.stat.value}
          </span>
        </div>
      </div>
    </Link>
  )
}
