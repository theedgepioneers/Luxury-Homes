import { Hero } from '@/components/home/hero'
import { BentoFeatures } from '@/components/home/bento-features'
import { FeaturedWork } from '@/components/home/featured-work'
import { Assurance } from '@/components/home/assurance'
import { SocialProof } from '@/components/home/social-proof'
import { FinalCta } from '@/components/home/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <FeaturedWork />
      <Assurance />
      <SocialProof />
      <FinalCta />
    </>
  )
}
