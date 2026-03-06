import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Sobat ASKEP - Asisten Digital Keperawatan',
  description: 'Aplikasi untuk membantu perawat dan mahasiswa keperawatan dalam menentukan diagnosis, intervensi, dan luaran keperawatan.',
  keywords: ['keperawatan', 'nursing', 'SDKI', 'SIKI', 'SLKI', 'diagnosis keperawatan', 'ASKEP'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light">
          <Navigation />
          <main className="min-h-screen pt-14">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
