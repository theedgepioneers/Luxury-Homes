import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin } from 'lucide-react'
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyGallery,
} from '@/lib/case-studies'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/motion/reveal'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Project — Vance & Co.' }
  return {
    title: `${study.name} — Vance & Co.`,
    description: study.narrative,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const heroImage = getCaseStudyGallery(study)[0]

  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={study.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
          <Reveal>
            <Link
              href="/portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm tracking-wide text-background/80 transition-colors hover:text-background"
            >
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {study.scope}
            </span>
            <h1 className="mt-4 max-w-4xl text-balance font-heading text-4xl font-medium leading-[1.08] text-background sm:text-5xl lg:text-6xl">
              {study.name}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-background/80">
              <MapPin className="size-4 text-primary" />
              {study.location}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
              {study.narrative}
            </p>
            {study.highlights && study.highlights.length > 0 && (
              <ul className="mt-10 flex flex-col gap-4 border-t border-border pt-10">
                {study.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="flex flex-col gap-6 rounded-sm border border-border/50 bg-card p-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {study.stat.label}
                </span>
                <p className="mt-1 font-heading text-3xl font-medium text-primary">
                  {study.stat.value}
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <CtaButton className="w-full" withIcon={false} />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Reveal className="mb-10">
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-3 font-heading text-3xl font-medium">
              Every detail, considered.
            </h2>
          </Reveal>
          <ProjectGallery study={study} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-medium sm:text-4xl">
            Imagine what we could build for you.
          </h2>
          <p className="max-w-lg text-pretty text-muted-foreground">
            Every residence begins with a single private conversation.
          </p>
          <CtaButton />
        </Reveal>
      </section>
    </>
  )
}
