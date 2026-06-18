export type ProcessStep = {
  number: string
  title: string
  summary: string
  detail: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    summary: 'Understanding your life, your site, and your ambitions.',
    detail:
      'We begin with conversation, not blueprints. Over a series of private sessions we explore how you live, what you collect, how you host, and what you want this home to mean a generation from now. We walk the site at different hours to understand its light and its limits.',
  },
  {
    number: '02',
    title: 'Design',
    summary: 'Translating intention into architecture.',
    detail:
      'Working alongside your architect or ours, we develop the design in deliberate stages, with physical models, material studies, and full-scale mockups. Nothing advances until it is right. You see and touch every meaningful decision before it is committed.',
  },
  {
    number: '03',
    title: 'Pre-Construction',
    summary: 'Engineering certainty before the first shovel.',
    detail:
      'We resolve budget, schedule, and detailing to an exacting level of precision. Long-lead materials are secured, trades are committed, and a transparent plan is published. This is where most surprises are eliminated, long before they can reach the field.',
  },
  {
    number: '04',
    title: 'Construction',
    summary: 'Building with discipline and quiet rigor.',
    detail:
      'A single accountable lead oversees a curated roster of master trades. You receive a standing bi-weekly briefing and a private digital portal with live progress, so you remain fully informed wherever you are in the world.',
  },
  {
    number: '05',
    title: 'Handover & Stewardship',
    summary: 'Delivering the home, and caring for it after.',
    detail:
      'We commission every system, document every detail, and walk you through your completed residence. A five-year warranty and an ongoing stewardship program ensure the home is maintained to the standard in which it was delivered.',
  },
]
