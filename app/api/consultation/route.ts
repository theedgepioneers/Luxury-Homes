import { NextResponse } from 'next/server'

type ConsultationPayload = {
  name: string
  email: string
  phone?: string
  location?: string
  scope: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: ConsultationPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const scope = body.scope?.trim()

  if (!name) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
  }
  if (!scope) {
    return NextResponse.json({ error: 'Project scope is required.' }, { status: 400 })
  }

  const payload = {
    name,
    email,
    phone: body.phone?.trim() || null,
    location: body.location?.trim() || null,
    scope,
    message: body.message?.trim() || null,
    submittedAt: new Date().toISOString(),
  }

  if (process.env.RESEND_API_KEY && process.env.CONSULTATION_TO_EMAIL) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONSULTATION_FROM_EMAIL ?? 'Vance & Co. <onboarding@resend.dev>',
          to: [process.env.CONSULTATION_TO_EMAIL],
          subject: `New consultation inquiry — ${name}`,
          text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Phone: ${payload.phone ?? '—'}`,
            `Location: ${payload.location ?? '—'}`,
            `Scope: ${payload.scope}`,
            `Message: ${payload.message ?? '—'}`,
            `Submitted: ${payload.submittedAt}`,
          ].join('\n'),
        }),
      })

      if (!res.ok) {
        console.error('Resend error:', await res.text())
      }
    } catch (error) {
      console.error('Failed to send consultation email:', error)
    }
  } else {
    console.info('Consultation inquiry received:', payload)
  }

  return NextResponse.json({ success: true })
}
