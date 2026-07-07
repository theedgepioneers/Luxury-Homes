'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Loader2, Phone, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Edit this placeholder contact info to update what's shown publicly.
const CONTACT_PHONE_DISPLAY = '+1 (310) 555-0148'
const CONTACT_PHONE_HREF = 'tel:+13105550148'
const CONTACT_EMAIL = 'inquiries@vanceandco.com'

type Errors = Partial<Record<'name' | 'email' | 'projectType' | 'form', string>>

const projectTypeOptions = [
  { value: 'new-build', label: 'New Custom Build' },
  { value: 'renovation', label: 'Renovation' },
  { value: 'addition', label: 'Addition' },
  { value: 'other', label: 'Other' },
]

export function ContactSection() {
  const [projectType, setProjectType] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Please share your name.'
    if (!email) {
      nextErrors.email = 'Please share your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!projectType) nextErrors.projectType = 'Please select a project type.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    setErrors({})

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: String(data.get('phone') ?? '').trim() || undefined,
          scope: projectType,
          message: String(data.get('message') ?? '').trim() || undefined,
        }),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        setErrors({
          form: json.error ?? 'Something went wrong. Please try again.',
        })
        return
      }

      setSubmitted(true)
    } catch {
      setErrors({ form: 'Unable to submit. Please check your connection and try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Start the conversation about your home."
        description="Share a few details and a principal will follow up personally — or reach us directly below."
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <span className="eyebrow">Call Us</span>
            <a
              href={CONTACT_PHONE_HREF}
              className="mt-3 flex items-center gap-3 font-heading text-2xl font-medium text-foreground transition-colors hover:text-primary sm:text-3xl"
            >
              <Phone className="size-6 text-primary" />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <span className="eyebrow">Email Us</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 flex items-center gap-3 text-lg text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5 text-primary" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="rounded-sm border border-border/50 bg-card p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-8" />
                </span>
                <h3 className="font-heading text-2xl font-medium">
                  Thank you for reaching out.
                </h3>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  We&apos;ve received your message and will be in touch personally
                  and in confidence.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <span className="text-sm text-destructive">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <span className="text-sm text-destructive">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-phone">Phone (optional)</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Project Type</Label>
                    <Select value={projectType} onValueChange={(v) => setProjectType(v as string)}>
                      <SelectTrigger
                        className="h-11 w-full"
                        aria-invalid={Boolean(errors.projectType)}
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <span className="text-sm text-destructive">{errors.projectType}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-message">Message (optional)</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about your project."
                  />
                </div>

                {errors.form && (
                  <p className="text-sm text-destructive">{errors.form}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
                >
                  {submitting && <Loader2 className="size-4 animate-spin" />}
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
