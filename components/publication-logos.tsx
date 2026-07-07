import type { ReactNode } from 'react'

type PublicationLogoProps = {
  name: string
  className?: string
}

export function PublicationLogo({ name, className }: PublicationLogoProps) {
  const logos: Record<string, ReactNode> = {
    'Architectural Digest': (
      <svg viewBox="0 0 200 40" className={className} aria-label="Architectural Digest">
        <text
          x="0"
          y="28"
          fill="currentColor"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          AD
        </text>
        <text
          x="38"
          y="28"
          fill="currentColor"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="400"
          letterSpacing="0.08em"
        >
          ARCHITECTURAL DIGEST
        </text>
      </svg>
    ),
    'Robb Report': (
      <svg viewBox="0 0 180 40" className={className} aria-label="Robb Report">
        <text
          x="0"
          y="30"
          fill="currentColor"
          fontFamily="Georgia, serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0.12em"
        >
          ROBB REPORT
        </text>
      </svg>
    ),
    'Luxe Magazine': (
      <svg viewBox="0 0 160 40" className={className} aria-label="Luxe Magazine">
        <text
          x="0"
          y="30"
          fill="currentColor"
          fontFamily="Georgia, serif"
          fontSize="28"
          fontWeight="400"
          letterSpacing="0.2em"
        >
          LUXE
        </text>
      </svg>
    ),
  }

  return logos[name] ?? (
    <span className={className}>{name}</span>
  )
}

export function PublicationLogos() {
  const publications = ['Architectural Digest', 'Robb Report', 'Luxe Magazine']

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {publications.map((pub) => (
        <PublicationLogo
          key={pub}
          name={pub}
          className="h-8 w-auto text-foreground/50 transition-colors hover:text-foreground/70 sm:h-10"
        />
      ))}
    </div>
  )
}
