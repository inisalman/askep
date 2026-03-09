import { Metadata } from "next";
import { notFound } from "next/navigation";
import { sopData, getSOPBySlug } from "@/data/sop";
import SOPDetailClient from "./SOPDetailClient";

const baseUrl = "https://askep.build.web.id";

// Generate static params for all SOPs
export async function generateStaticParams() {
  return sopData.map((sop) => ({
    id: sop.slug,
  }));
}

// Generate metadata for each SOP page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sop = getSOPBySlug(id);

  if (!sop) {
    return {
      title: "SOP Tidak Ditemukan",
    };
  }

  const title = `${sop.nama} - SOP Keperawatan`;
  const description = `${sop.deskripsi} Prosedur standar untuk ${sop.kategori}. Pelajari langkah-langkah, indikasi, dan hal-hal penting dalam ${sop.nama}.`;

  return {
    title,
    description,
    keywords: [
      sop.nama,
      `SOP ${sop.kategori}`,
      "standar prosedur operasional",
      "prosedur keperawatan",
      sop.kategori,
      ...sop.indikasi.slice(0, 5),
    ],
    authors: [{ name: "Sobat ASKEP Team" }],
    alternates: {
      canonical: `${baseUrl}/sop/${sop.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${baseUrl}/sop/${sop.slug}`,
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${sop.nama} - SOP Keperawatan`,
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
      "article:section": "SOP Keperawatan",
      "article:tag": `${sop.kategori}, ${sop.nama}`,
    },
  };
}

// Server Component
export default async function SOPDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sop = getSOPBySlug(id);

  if (!sop) {
    notFound();
  }

  return <SOPDetailClient sop={sop} />;
}