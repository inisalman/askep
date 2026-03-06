// SDKI Data - Standar Diagnosis Keperawatan Indonesia (149 Diagnosis)

export interface IntervensiTindakan {
  observasi?: string[];
  terapeutik?: string[];
  edukasi?: string[];
  kolaborasi?: string[];
}

export interface Intervensi {
  kode: string;
  nama: string;
  definisi?: string;
  tindakan?: IntervensiTindakan;
}

export interface Luaran {
  kode: string;
  nama: string;
  definisi?: string;
  kriteria: string[];
}

export interface Diagnosis {
  id: string;
  slug: string;
  kode: string;
  nama: string;
  definisi: string;
  kategori: string;
  tipe: 'Aktual' | 'Risiko' | 'Promosi Kesehatan';
  keluhan: string[]; // Keywords untuk pencarian
  tandaGejala?: {
    subjektif: string[];
    objektif: string[];
  };
  faktorRisiko?: string[];
  faktorTerkait?: string[];
  kondisiKlinis?: string[];
  slki: Luaran;
  siki: Intervensi[];
}

// Import data lengkap dari file terpisah
import { allDiagnosesData } from './diagnoses-complete';

export const diagnosisData: Diagnosis[] = allDiagnosesData;

// Function to search diagnoses by complaint keywords
export function searchDiagnoses(query: string): Diagnosis[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  return diagnosisData.filter(diagnosis =>
    diagnosis.keluhan.some(k =>
      k.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(k.toLowerCase())
    ) ||
    diagnosis.nama.toLowerCase().includes(normalizedQuery) ||
    diagnosis.definisi.toLowerCase().includes(normalizedQuery) ||
    diagnosis.kategori.toLowerCase().includes(normalizedQuery)
  );
}

// Get diagnosis by slug
export function getDiagnosisBySlug(slug: string): Diagnosis | undefined {
  return diagnosisData.find(d => d.slug === slug);
}

// Get diagnosis by code
export function getDiagnosisByCode(code: string): Diagnosis | undefined {
  return diagnosisData.find(d => d.kode === code);
}

// Get all diagnoses by category
export function getDiagnosesByCategory(category: string): Diagnosis[] {
  return diagnosisData.filter(d => d.kategori === category);
}

// Get all categories
export function getCategories(): string[] {
  const categories = new Set(diagnosisData.map(d => d.kategori));
  return Array.from(categories).sort();
}

// Get diagnosis statistics
export function getDiagnosisStats() {
  const byCategory = diagnosisData.reduce((acc, diag) => {
    acc[diag.kategori] = (acc[diag.kategori] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: diagnosisData.length,
    byCategory
  };
}
