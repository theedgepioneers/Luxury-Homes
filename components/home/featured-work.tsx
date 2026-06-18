import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredCaseStudies } from '@/lib/case-studies'
import { CaseStudyCard } from '@/components/case-study-card'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="A few residences we are permitted to show."
          description="Most of our finest projects are never published. These are the exceptions."
        />
        <Link
          href="/portfolio"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
        >
          View full portfolio
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featuredCaseStudies.map((study) => (
          <StaggerItem key={study.slug} className="h-full">
            <CaseStudyCard study={study} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
