import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDiagnosesData } from "@/data/diagnoses-complete";
import DiagnosisDetailClient from "./DiagnosisDetailClient";

const baseUrl = "https://askep.build.web.id";

// Generate static params for all diagnoses
export async function generateStaticParams() {
  return allDiagnosesData.map((diagnosis) => ({
    slug: diagnosis.slug,
  }));
}

// Generate metadata for each diagnosis page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const diagnosis = allDiagnosesData.find((d) => d.slug === slug);

  if (!diagnosis) {
    return {
      title: "Diagnosis Tidak Ditemukan",
    };
  }

  const title = `${diagnosis.nama} (${diagnosis.kode}) - Diagnosis Keperawatan SDKI`;
  const description = `${diagnosis.definisi} Diagnosis ${diagnosis.tipe} dengan kategori ${diagnosis.kategori}. Temukan intervensi SIKI dan luaran SLKI untuk ${diagnosis.nama}.`;

  return {
    title,
    description,
    keywords: [
      diagnosis.nama,
      diagnosis.kode,
      `diagnosis ${diagnosis.kategori.toLowerCase()}`,
      "SDKI",
      "diagnosis keperawatan",
      ...diagnosis.keluhan,
    ],
    authors: [{ name: "Sobat ASKEP Team" }],
    alternates: {
      canonical: `${baseUrl}/diagnosis/${diagnosis.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${baseUrl}/diagnosis/${diagnosis.slug}`,
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${diagnosis.nama} - Diagnosis Keperawatan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
    other: {
      "article:section": diagnosis.kategori,
      "article:tag": diagnosis.keluhan.join(", "),
    },
  };
}

// Server Component that passes data to Client Component
export default async function DiagnosisDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const diagnosis = allDiagnosesData.find((d) => d.slug === slug);

  if (!diagnosis) {
    notFound();
  }

  return <DiagnosisDetailClient diagnosis={diagnosis} />;
}