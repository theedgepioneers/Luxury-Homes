import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'

export function EditorialBreakout() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/images/case-cliffside.png"
        alt="Cliffside Pavilion at golden hour"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-24 lg:px-10">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Cliffside Pavilion · Malibu
          </span>
          <blockquote className="mt-6 font-heading text-4xl font-medium leading-[1.12] text-background sm:text-5xl lg:text-6xl">
            &ldquo;The line between interior and horizon simply disappeared.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-background/80">
            A glass pavilion cantilevered over the Pacific — one of the residences
            we are permitted to show.
          </p>
          <Link
            href="/portfolio/cliffside-pavilion"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-background transition-colors hover:text-primary"
          >
            View this project
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
