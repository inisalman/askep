import { Metadata } from "next";
import InfusCalculatorClient from "./InfusCalculatorClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Kalkulator Tetesan Infus (TPM)",
  description:
    "Hitung kecepatan tetesan infus (Tetes Per Menit/TPM) berdasarkan volume cairan, waktu pemberian, dan faktor tetes. Kalkulator infus online untuk perawat.",
  keywords: [
    "kalkulator infus",
    "tetesan infus",
    "TPM",
    "tetes per menit",
    "faktor tetes",
    "infus calculator",
    "perhitungan infus",
    "drip rate calculator",
  ],
  alternates: {
    canonical: `${baseUrl}/kalkulator/infus`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/kalkulator/infus`,
    title: "Kalkulator Tetesan Infus (TPM) | Sobat ASKEP",
    description:
      "Hitung kecepatan tetesan infus (TPM) berdasarkan volume, waktu, dan faktor tetes.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kalkulator Tetesan Infus - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Tetesan Infus (TPM) | Sobat ASKEP",
    description: "Hitung kecepatan tetesan infus dengan cepat dan akurat.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function InfusCalculatorPage() {
  return <InfusCalculatorClient />;
}