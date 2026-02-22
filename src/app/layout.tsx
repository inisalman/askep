import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NurseBuddy - Asisten Digital Keperawatan',
  description: 'Aplikasi untuk membantu perawat dan mahasiswa keperawatan dalam menentukan diagnosis, intervensi, dan luaran keperawatan.',
  keywords: ['keperawatan', 'nursing', 'SDKI', 'SIKI', 'SLKI', 'diagnosis keperawatan', 'ASKEP'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-mesh">
        <div className="relative">
          {/* Decorative background blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/30 blob animate-float" />
            <div className="absolute top-1/3 -left-20 w-72 h-72 bg-warm-200/20 blob-2 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-teal-100/40 blob animate-float" style={{ animationDelay: '4s' }} />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
