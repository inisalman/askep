import { Metadata } from "next";
import KalkulatorPageClient from "./KalkulatorPageClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Kalkulator Kesehatan Keperawatan",
  description:
    "Kalkulator kesehatan untuk perawat: hitung tetesan infus (TPM), Indeks Massa Tubuh (IMT/BMI), dan Glasgow Coma Scale (GCS) dengan cepat dan akurat.",
  keywords: [
    "kalkulator keperawatan",
    "kalkulator infus",
    "TPM tetesan infus",
    "kalkulator IMT",
    "kalkulator BMI",
    "Glasgow Coma Scale",
    "GCS calculator",
    "alat hitung medis",
    "perhitungan klinis",
  ],
  alternates: {
    canonical: `${baseUrl}/kalkulator`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/kalkulator`,
    title: "Kalkulator Kesehatan Keperawatan | Sobat ASKEP",
    description:
      "Kalkulator kesehatan untuk perawat: hitung tetesan infus, IMT, dan GCS dengan cepat dan akurat.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kalkulator Kesehatan - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Kesehatan Keperawatan | Sobat ASKEP",
    description:
      "Kalkulator kesehatan untuk perawat: hitung tetesan infus, IMT, dan GCS.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function KalkulatorPage() {
  return <KalkulatorPageClient />;
}