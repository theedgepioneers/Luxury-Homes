import type { Metadata } from 'next'
import { faqs } from '@/lib/faqs'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ — Vance & Co.',
  description:
    'Answers to common questions about commissioning a bespoke custom residence with Vance & Co.',
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Frequently Asked"
        title="The questions our clients ask first."
        description="If you do not find what you are looking for here, a private consultation is the best place to begin."
      />

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <Accordion className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="py-6 font-heading text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-medium">
            Still have questions?
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            We would be glad to answer them in person. Reserve a private,
            no-obligation consultation with one of our principals.
          </p>
          <CtaButton />
        </Reveal>
      </section>
    </>
  )
}
