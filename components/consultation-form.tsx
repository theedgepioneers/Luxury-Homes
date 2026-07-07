'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Loader2 } from 'lucide-react'
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

type Errors = Partial<Record<'name' | 'email' | 'scope' | 'form', string>>

const scopeOptions = [
  { value: 'new-build', label: 'New Custom Build' },
  { value: 'transformation', label: 'Whole-Home Transformation' },
]

const nextSteps = [
  {
    step: '01',
    title: 'Submit your inquiry',
    detail: 'Share your vision in confidence under mutual NDA.',
  },
  {
    step: '02',
    title: 'Principal review within 48 hours',
    detail: 'A senior principal reviews every submission personally.',
  },
  {
    step: '03',
    title: 'Private consultation call',
    detail: 'We arrange a confidential conversation at your convenience.',
  },
]

export function ConsultationForm() {
  const [scope, setScope] = useState<string | null>(null)
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
    if (!scope) nextErrors.scope = 'Please select a project scope.'

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
          location: String(data.get('location') ?? '').trim() || undefined,
          scope,
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
    <div className="rounded-sm border border-border/50 bg-card p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-5 py-12 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="size-8" />
            </span>
            <h2 className="font-heading text-3xl font-medium">
              Thank you for reaching out.
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Your inquiry has been received. One of our principals will be in
              touch personally and in confidence to arrange your private
              consultation.
            </p>
            <ol className="mt-4 w-full max-w-sm space-y-4 border-t border-border pt-8 text-left">
              {nextSteps.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-heading text-lg text-primary">{item.step}</span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
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
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <span className="text-sm text-destructive">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <span className="text-sm text-destructive">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location">Project location (optional)</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Project scope</Label>
              <Select value={scope} onValueChange={(v) => setScope(v as string)}>
                <SelectTrigger
                  className="h-11 w-full"
                  aria-invalid={Boolean(errors.scope)}
                >
                  <SelectValue placeholder="Select a project scope" />
                </SelectTrigger>
                <SelectContent>
                  {scopeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.scope && (
                <span className="text-sm text-destructive">{errors.scope}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Tell us about your vision (optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share the home you imagine — site, scale, timing, and anything that matters to you."
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
              Request Private Consultation
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Submitted in confidence under mutual NDA. We never share your
              details.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
