"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { allDiagnosesData } from "@/data/diagnoses-complete";
import {
  ArrowLeft,
  Activity,
  ClipboardList,
  Target,
  BookOpen,
  Eye,
  MessageSquare,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  GraduationCap,
  Users,
} from "lucide-react";
import { useState } from "react";

// Component untuk menampilkan detail intervensi
function IntervensiDetail({
  intervensi,
  isExpanded,
  onToggle,
}: {
  intervensi: {
    kode: string;
    nama: string;
    definisi?: string;
    tindakan?: {
      observasi?: string[];
      terapeutik?: string[];
      edukasi?: string[];
      kolaborasi?: string[];
    };
  };
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasTindakan =
    intervensi.tindakan &&
    ((intervensi.tindakan.observasi &&
      intervensi.tindakan.observasi.length > 0) ||
      (intervensi.tindakan.terapeutik &&
        intervensi.tindakan.terapeutik.length > 0) ||
      (intervensi.tindakan.edukasi && intervensi.tindakan.edukasi.length > 0) ||
      (intervensi.tindakan.kolaborasi &&
        intervensi.tindakan.kolaborasi.length > 0));

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
          <span className="text-sm font-medium text-card-foreground">
            {intervensi.nama}
          </span>
          <span className="text-xs text-muted-foreground">
            ({intervensi.kode})
          </span>
        </div>
        {hasTindakan &&
          (isExpanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          ))}
      </button>

      {isExpanded && hasTindakan && (
        <div className="border-t border-border bg-muted/30 p-4 space-y-4">
          {intervensi.definisi && (
            <p className="text-sm text-muted-foreground italic">
              {intervensi.definisi}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {intervensi.tindakan?.observasi &&
              intervensi.tindakan.observasi.length > 0 && (
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Observasi
                  </h5>
                  <ul className="space-y-1.5">
                    {intervensi.tindakan.observasi.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-card-foreground pl-2 border-l-2 border-blue-500/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {intervensi.tindakan?.terapeutik &&
              intervensi.tindakan.terapeutik.length > 0 && (
                <div className="bg-green-500/10 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4" /> Terapeutik
                  </h5>
                  <ul className="space-y-1.5">
                    {intervensi.tindakan.terapeutik.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-card-foreground pl-2 border-l-2 border-green-500/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {intervensi.tindakan?.edukasi &&
              intervensi.tindakan.edukasi.length > 0 && (
                <div className="bg-purple-500/10 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Edukasi
                  </h5>
                  <ul className="space-y-1.5">
                    {intervensi.tindakan.edukasi.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-card-foreground pl-2 border-l-2 border-purple-500/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {intervensi.tindakan?.kolaborasi &&
              intervensi.tindakan.kolaborasi.length > 0 && (
                <div className="bg-amber-500/10 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Kolaborasi
                  </h5>
                  <ul className="space-y-1.5">
                    {intervensi.tindakan.kolaborasi.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-card-foreground pl-2 border-l-2 border-amber-500/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DiagnosisDetailPage() {
  const params = useParams();
  const slugParam = params.slug as string;
  const [expandedIntervensi, setExpandedIntervensi] = useState<number | null>(
    null,
  );

  // Find diagnosis by slug
  const diagnosis = allDiagnosesData.find((d) => d.slug === slugParam);

  if (!diagnosis) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            Diagnosis tidak ditemukan
          </h1>
          <Link
            href="/diagnosis"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Kembali ke daftar diagnosis
          </Link>
        </div>
      </div>
    );
  }

  // Check if data exists for each section
  const hasDataSubjektif =
    diagnosis.tandaGejala?.subjektif &&
    diagnosis.tandaGejala.subjektif.length > 0;
  const hasDataObjektif =
    diagnosis.tandaGejala?.objektif &&
    diagnosis.tandaGejala.objektif.length > 0;
  const hasEtiologi =
    (diagnosis.faktorRisiko && diagnosis.faktorRisiko.length > 0) ||
    (diagnosis.faktorTerkait && diagnosis.faktorTerkait.length > 0);
  const hasLuaran =
    diagnosis.slki?.kriteria && diagnosis.slki.kriteria.length > 0;
  const hasIntervensi = diagnosis.siki && diagnosis.siki.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/diagnosis"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Card */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {diagnosis.kode}
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                  {diagnosis.kategori}
                </span>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    diagnosis.tipe === "Aktual"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : diagnosis.tipe === "Risiko"
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        : "bg-green-500/10 text-green-600 dark:text-green-400"
                  }`}
                >
                  {diagnosis.tipe}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {diagnosis.nama}
              </h1>
              <p className="text-muted-foreground">
                {diagnosis.definisi}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Activity className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Subjektif */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-violet-500" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Subjektif
              </h2>
            </div>
            {hasDataSubjektif ? (
              <ul className="space-y-2">
                {diagnosis.tandaGejala?.subjektif?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-card-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Data subjektif belum tersedia
              </p>
            )}
          </div>

          {/* Data Objektif */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-cyan-500" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Objektif
              </h2>
            </div>
            {hasDataObjektif ? (
              <ul className="space-y-2">
                {diagnosis.tandaGejala?.objektif?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-card-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Data objektif belum tersedia
              </p>
            )}
          </div>

          {/* Etiologi */}
          <div className="bg-card border border-border rounded-xl p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Etiologi
              </h2>
            </div>
            {hasEtiologi ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {diagnosis.faktorRisiko &&
                  diagnosis.faktorRisiko.length > 0 && (
                    <div className="bg-amber-500/10 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3">
                        Faktor Risiko
                      </h3>
                      <ul className="space-y-2">
                        {diagnosis.faktorRisiko.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm text-card-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                {diagnosis.faktorTerkait &&
                  diagnosis.faktorTerkait.length > 0 && (
                    <div className="bg-orange-500/10 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3">
                        Faktor Terkait
                      </h3>
                      <ul className="space-y-2">
                        {diagnosis.faktorTerkait.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm text-card-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Data etiologi belum tersedia
              </p>
            )}
          </div>

          {/* SLKI - Luaran */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Luaran (SLKI)
                </h2>
                {diagnosis.slki?.kode && (
                  <span className="text-xs text-muted-foreground">
                    {diagnosis.slki.kode}
                  </span>
                )}
              </div>
            </div>
            {hasLuaran ? (
              <div className="space-y-3">
                <p className="text-sm font-medium text-card-foreground">
                  {diagnosis.slki.nama}
                </p>
                {diagnosis.slki.definisi && (
                  <p className="text-xs text-muted-foreground italic">
                    {diagnosis.slki.definisi}
                  </p>
                )}
                <ul className="space-y-2">
                  {diagnosis.slki.kriteria.map((kriteria, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-card-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      {kriteria}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Data luaran belum tersedia
              </p>
            )}
          </div>

          {/* SIKI - Intervensi */}
          <div className="bg-card border border-border rounded-xl p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Intervensi (SIKI)
              </h2>
            </div>
            {hasIntervensi ? (
              <div className="space-y-3">
                {diagnosis.siki.map((intervensi, index) => (
                  <IntervensiDetail
                    key={index}
                    intervensi={intervensi}
                    isExpanded={expandedIntervensi === index}
                    onToggle={() =>
                      setExpandedIntervensi(
                        expandedIntervensi === index ? null : index,
                      )
                    }
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Data intervensi belum tersedia
              </p>
            )}
          </div>
        </div>

        {/* Keywords */}
        {diagnosis.keluhan.length > 0 && (
          <div className="bg-card border border-border rounded-xl p-6 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Kata Kunci Pencarian
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {diagnosis.keluhan.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm rounded-full border border-purple-500/20"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}