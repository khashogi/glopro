import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GloPro - Premium Car Wash in Abu Dhabi',
  description: 'Experience the finest human-led car detailing service in Abu Dhabi. Make your car glow, byPros. Weather-smart scheduling, transparent service, and trusted cleaners.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
