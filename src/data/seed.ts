/**
 * Seed Data - 149 Diagnosis Keperawatan SDKI
 * Import data dari file JSON ke dalam array yang bisa digunakan langsung
 */

import indexData from './diagnoses-index.json';

export type DiagnosisSeed = {
  code: string;
  name: string;
  category: string;
  definition?: string;
  type?: 'Aktual' | 'Risiko' | 'Promosi Kesehatan';
  signsSymptoms?: {
    subjective: string[];
    objective: string[];
  };
  riskFactors?: string[];
  relatedFactors?: string[];
  slki?: {
    code: string;
    name: string;
    criteria: string[];
  };
  siki?: {
    code: string;
    name: string;
  }[];
};

// Helper untuk load data detail dari file JSON per kategori
export async function loadDiagnosesByCategory(category: string): Promise<DiagnosisSeed[]> {
  const categoryFileMap: Record<string, string> = {
    'Respirasi': '/data/diagnoses/respirasi.json',
    'Sirkulasi': '/data/diagnoses/sirkulasi.json',
    'Nutrisi dan Cairan': '/data/diagnoses/nutrisi-cairan.json',
    'Eliminasi': '/data/diagnoses/eliminasi.json',
    'Aktivitas dan Istirahat': '/data/diagnoses/aktivitas-istirahat.json',
    'Neurosensori': '/data/diagnoses/neurosensori.json',
    'Reproduksi dan Seksualitas': '/data/diagnoses/reproduksi-seksualitas.json',
    'Nyeri dan Kenyamanan': '/data/diagnoses/nyeri-kenyamanan.json',
    'Integritas Ego': '/data/diagnoses/integritas-ego.json',
    'Pertumbuhan dan Perkembangan': '/data/diagnoses/pertumbuhan-perkembangan.json',
    'Kebersihan Diri': '/data/diagnoses/kebersihan-diri.json',
    'Penyuluhan dan Pembelajaran': '/data/diagnoses/penyuluhan-pembelajaran.json',
    'Interaksi Sosial': '/data/diagnoses/interaksi-sosial.json',
    'Keamanan dan Proteksi': '/data/diagnoses/keamanan-proteksi.json'
  };

  try {
    const response = await fetch(categoryFileMap[category]);
    const data = await response.json();
    return Object.values(data.diagnoses || {}) as DiagnosisSeed[];
  } catch {
    return [];
  }
}

// Semua diagnosis dalam format flat array
export const allDiagnoses: DiagnosisSeed[] = indexData.diagnoses.map(d => ({
  code: d.code,
  name: d.name,
  category: d.category
}));

// Export per kategori untuk mudah diakses
export const diagnosesByCategory = {
  respirasi: indexData.diagnoses.filter(d => d.category === 'Respirasi'),
  sirkulasi: indexData.diagnoses.filter(d => d.category === 'Sirkulasi'),
  nutrisiCairan: indexData.diagnoses.filter(d => d.category === 'Nutrisi dan Cairan'),
  eliminasi: indexData.diagnoses.filter(d => d.category === 'Eliminasi'),
  aktivitasIstirahat: indexData.diagnoses.filter(d => d.category === 'Aktivitas dan Istirahat'),
  neurosensori: indexData.diagnoses.filter(d => d.category === 'Neurosensori'),
  reproduksiSeksualitas: indexData.diagnoses.filter(d => d.category === 'Reproduksi dan Seksualitas'),
  nyeriKenyamanan: indexData.diagnoses.filter(d => d.category === 'Nyeri dan Kenyamanan'),
  integritasEgo: indexData.diagnoses.filter(d => d.category === 'Integritas Ego'),
  pertumbuhanPerkembangan: indexData.diagnoses.filter(d => d.category === 'Pertumbuhan dan Perkembangan'),
  kebersihanDiri: indexData.diagnoses.filter(d => d.category === 'Kebersihan Diri'),
  penyuluhanPembelajaran: indexData.diagnoses.filter(d => d.category === 'Penyuluhan dan Pembelajaran'),
  interaksiSosial: indexData.diagnoses.filter(d => d.category === 'Interaksi Sosial'),
  keamananProteksi: indexData.diagnoses.filter(d => d.category === 'Keamanan dan Proteksi')
};

// Stats
export const diagnosisStats = {
  total: indexData.metadata.total_diagnosis,
  byCategory: indexData.categories
};

export default allDiagnoses;
