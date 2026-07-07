import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { BentoFeatures } from '@/components/home/bento-features'
import { FeaturedWork } from '@/components/home/featured-work'
import { EditorialBreakout } from '@/components/home/editorial-breakout'
import { ProcessOverview } from '@/components/home/process-overview'
import { Testimonials } from '@/components/home/testimonials'
import { Assurance } from '@/components/home/assurance'
import { SocialProof } from '@/components/home/social-proof'
import { ContactSection } from '@/components/home/contact-section'
import { FinalCta } from '@/components/home/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BentoFeatures />
      <FeaturedWork />
      <EditorialBreakout />
      <ProcessOverview />
      <Testimonials />
      <Assurance />
      <SocialProof />
      <ContactSection />
      <FinalCta />
    </>
  )
}
