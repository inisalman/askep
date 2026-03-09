import { Metadata } from "next";
import GCSCalculatorClient from "./GCSCalculatorClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Kalkulator Glasgow Coma Scale (GCS)",
  description:
    "Hitung skor Glasgow Coma Scale (GCS) untuk menilai tingkat kesadaran pasien. Penilaian respons mata (E), verbal (V), dan motorik (M).",
  keywords: [
    "Glasgow Coma Scale",
    "GCS calculator",
    "tingkat kesadaran",
    "penilaian neurologis",
    "coma scale",
    "EVM GCS",
    "respons mata verbal motorik",
    "kalkulator GCS",
  ],
  alternates: {
    canonical: `${baseUrl}/kalkulator/gcs`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/kalkulator/gcs`,
    title: "Kalkulator Glasgow Coma Scale (GCS) | Sobat ASKEP",
    description:
      "Hitung skor GCS untuk menilai tingkat kesadaran pasien berdasarkan respons EVM.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kalkulator GCS - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Glasgow Coma Scale (GCS) | Sobat ASKEP",
    description: "Hitung skor GCS untuk menilai tingkat kesadaran pasien.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function GCSCalculatorPage() {
  return <GCSCalculatorClient />;
}