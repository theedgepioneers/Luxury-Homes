import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vance & Co. — Bespoke Custom Home Builders',
  description:
    'Vance & Co. designs and builds singular custom residences for discerning clients in Malibu, Aspen, and Greenwich. Architecture, craftsmanship, and white-glove project stewardship.',
  generator: 'v0.app',
  openGraph: {
    title: 'Vance & Co. — Bespoke Custom Home Builders',
    description:
      'Singular custom residences for discerning clients. Malibu · Aspen · Greenwich.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F9F6F0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
