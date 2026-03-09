import { Metadata } from "next";
import SOPPageClient from "./SOPPageClient";

const baseUrl = "https://askep.build.web.id";

export const metadata: Metadata = {
  title: "Perpustakaan SOP Keperawatan",
  description:
    "Kumpulan Standar Prosedur Operasional (SOP) Keperawatan lengkap. Pelajari prosedur pemasangan NGT, kateter, infus, perawatan luka, dan lainnya.",
  keywords: [
    "SOP keperawatan",
    "standar prosedur operasional",
    "prosedur keperawatan",
    "pemasangan NGT",
    "pemasangan kateter",
    "perawatan luka",
    "pemberian infus",
    "suction endotrakeal",
    "GCS",
    "enema",
    "oksigenasi",
  ],
  alternates: {
    canonical: `${baseUrl}/sop`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/sop`,
    title: "Perpustakaan SOP Keperawatan | Sobat ASKEP",
    description:
      "Kumpulan Standar Prosedur Operasional (SOP) Keperawatan lengkap untuk referensi praktik klinis.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SOP Keperawatan - Sobat ASKEP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perpustakaan SOP Keperawatan | Sobat ASKEP",
    description:
      "Kumpulan Standar Prosedur Operasional (SOP) Keperawatan lengkap.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function SOPPage() {
  return <SOPPageClient />;
}