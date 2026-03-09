import { Metadata } from "next";
import IMTCalculatorClient from "./IMTCalculatorClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Kalkulator Indeks Massa Tubuh (IMT/BMI)",
  description:
    "Hitung Indeks Massa Tubuh (IMT/BMI) berdasarkan berat badan dan tinggi badan. Tentukan status gizi: kurus, normal, gemuk, atau obesitas.",
  keywords: [
    "kalkulator IMT",
    "kalkulator BMI",
    "indeks massa tubuh",
    "body mass index",
    "status gizi",
    "berat badan ideal",
    "obesitas",
    "kalkulator kesehatan",
  ],
  alternates: {
    canonical: `${baseUrl}/kalkulator/imt`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/kalkulator/imt`,
    title: "Kalkulator Indeks Massa Tubuh (IMT/BMI) | Sobat ASKEP",
    description:
      "Hitung IMT/BMI untuk menentukan status gizi berdasarkan berat dan tinggi badan.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kalkulator IMT/BMI - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Indeks Massa Tubuh (IMT/BMI) | Sobat ASKEP",
    description: "Hitung IMT untuk menentukan status gizi Anda.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function IMTCalculatorPage() {
  return <IMTCalculatorClient />;
}