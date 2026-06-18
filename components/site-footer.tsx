import Link from 'next/link'

const exploreLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'The Process' },
  { href: '/investment', label: 'Investment' },
  { href: '/faq', label: 'FAQ' },
]

const studios = ['Malibu', 'Aspen', 'Greenwich']

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col leading-none">
              <span className="font-heading text-2xl font-semibold tracking-wide">
                VANCE &amp; CO.
              </span>
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Architectural Builders
              </span>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Singular custom residences, conceived and constructed for clients
              who expect the exceptional. By private referral and selective
              commission.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-10 items-center justify-center rounded-sm border border-border px-4 text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-10 items-center justify-center rounded-sm border border-border px-4 text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Explore</span>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/consultation"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Studios</span>
            <ul className="flex flex-col gap-3">
              {studios.map((studio) => (
                <li key={studio} className="text-muted-foreground">
                  {studio}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vance &amp; Co. All rights reserved.</p>
          <p>NDA &amp; Privacy Compliance · Built on referral and discretion</p>
        </div>
      </div>
    </footer>
  )
}
