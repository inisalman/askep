import { Metadata } from "next";
import DiagnosisPageClient from "./DiagnosisPageClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Pencarian Diagnosis Keperawatan SDKI",
  description:
    "Cari diagnosis keperawatan SDKI berdasarkan keluhan pasien. Temukan intervensi SIKI dan luaran SLKI lengkap untuk 149 diagnosis keperawatan Indonesia.",
  keywords: [
    "diagnosis keperawatan",
    "SDKI",
    "pencarian diagnosis",
    "SIKI",
    "SLKI",
    "asuhan keperawatan",
    "diagnosis NANDA Indonesia",
    "keluhan pasien",
  ],
  alternates: {
    canonical: `${baseUrl}/diagnosis`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/diagnosis`,
    title: "Pencarian Diagnosis Keperawatan SDKI | Sobat ASKEP",
    description:
      "Cari diagnosis keperawatan SDKI berdasarkan keluhan pasien. Temukan intervensi SIKI dan luaran SLKI lengkap.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pencarian Diagnosis SDKI - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pencarian Diagnosis Keperawatan SDKI | Sobat ASKEP",
    description:
      "Cari diagnosis keperawatan SDKI berdasarkan keluhan pasien.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function DiagnosisPage() {
  return <DiagnosisPageClient />;
}