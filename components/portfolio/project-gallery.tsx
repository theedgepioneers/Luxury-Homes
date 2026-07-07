'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { CaseStudy } from '@/lib/case-studies'
import { getCaseStudyGallery } from '@/lib/case-studies'

export function ProjectGallery({ study }: { study: CaseStudy }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const images = getCaseStudyGallery(study)

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[16/10] w-[85vw] shrink-0 snap-center overflow-hidden rounded-sm sm:w-[70vw] lg:w-[55vw]"
          >
            <Image
              src={src}
              alt={`${study.name} — image ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 85vw, 55vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Scroll to explore · {images.length} images
      </p>
    </div>
  )
}
