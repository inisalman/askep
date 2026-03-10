import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const baseUrl = "https://askep.build.web.id";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14b8a6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d9488" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sobat ASKEP - Asisten Digital Keperawatan Indonesia",
    template: "%s | Sobat ASKEP",
  },
  description:
    "Aplikasi asisten digital keperawatan untuk membantu perawat dan mahasiswa keperawatan Indonesia dalam menentukan diagnosis SDKI, intervensi SIKI, dan luaran SLKI. Dilengkapi kalkulator kesehatan dan perpustakaan SOP.",
  keywords: [
    "keperawatan",
    "nursing",
    "SDKI",
    "SIKI",
    "SLKI",
    "diagnosis keperawatan",
    "ASKEP",
    "asuhan keperawatan",
    "intervensi keperawatan",
    "luaran keperawatan",
    "kalkulator IMT",
    "kalkulator infus",
    "kalkulator GCS",
    "SOP keperawatan",
    "standar prosedur operasional",
    "perawat Indonesia",
    "mahasiswa keperawatan",
    "NANDA Indonesia",
    "PPNI",
  ],
  authors: [{ name: "Sobat ASKEP Team" }],
  creator: "Sobat ASKEP",
  publisher: "Sobat ASKEP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Sobat ASKEP",
    title: "Sobat ASKEP - Asisten Digital Keperawatan Indonesia",
    description:
      "Aplikasi asisten digital keperawatan untuk membantu perawat dan mahasiswa keperawatan Indonesia dalam menentukan diagnosis SDKI, intervensi SIKI, dan luaran SLKI.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sobat ASKEP - Asisten Digital Keperawatan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobat ASKEP - Asisten Digital Keperawatan Indonesia",
    description:
      "Aplikasi asisten digital keperawatan untuk membantu perawat dan mahasiswa keperawatan Indonesia.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@sobataskep",
  },
  verification: {
    google:
      "K0YvkSx_-FZO53xPRgvGpZKGZEq7kZLBT-X4a10GJis",
  },
  category: "Medical",
  classification: "Healthcare Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google AdSense Verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-3904099446158969"
        />

        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Sobat ASKEP",
              description:
                "Aplikasi asisten digital keperawatan untuk membantu perawat dan mahasiswa keperawatan Indonesia dalam menentukan diagnosis SDKI, intervensi SIKI, dan luaran SLKI.",
              url: baseUrl,
              applicationCategory: "HealthApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IDR",
              },
              author: {
                "@type": "Organization",
                name: "Sobat ASKEP Team",
              },
              inLanguage: "id-ID",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3904099446158969"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider defaultTheme="light">
          <Navigation />
          <main className="min-h-screen pt-14">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
