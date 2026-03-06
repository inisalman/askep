/**
 * Helper functions untuk working dengan diagnosis data
 */

import type { DiagnosisIndex, DiagnosisCategory, DiagnosesIndex } from '@/types/diagnosis';

const CATEGORY_MAP: Record<string, string> = {
  'respirasi': 'Respirasi',
  'sirkulasi': 'Sirkulasi',
  'nutrisi-cairan': 'Nutrisi dan Cairan',
  'eliminasi': 'Eliminasi',
  'aktivitas-istirahat': 'Aktivitas dan Istirahat',
  'neurosensori': 'Neurosensori',
  'reproduksi-seksualitas': 'Reproduksi dan Seksualitas',
  'nyeri-kenyamanan': 'Nyeri dan Kenyamanan',
  'integritas-ego': 'Integritas Ego',
  'pertumbuhan-perkembangan': 'Pertumbuhan dan Perkembangan',
  'kebersihan-diri': 'Kebersihan Diri',
  'penyuluhan-pembelajaran': 'Penyuluhan dan Pembelajaran',
  'interaksi-sosial': 'Interaksi Sosial',
  'keamanan-proteksi': 'Keamanan dan Proteksi'
};

const CATEGORY_FILES: Record<string, string> = {
  'Respirasi': '/diagnoses/respirasi.json',
  'Sirkulasi': '/diagnoses/sirkulasi.json',
  'Nutrisi dan Cairan': '/diagnoses/nutrisi-cairan.json',
  'Eliminasi': '/diagnoses/eliminasi.json',
  'Aktivitas dan Istirahat': '/diagnoses/aktivitas-istirahat.json',
  'Neurosensori': '/diagnoses/neurosensori.json',
  'Reproduksi dan Seksualitas': '/diagnoses/reproduksi-seksualitas.json',
  'Nyeri dan Kenyamanan': '/diagnoses/nyeri-kenyamanan.json',
  'Integritas Ego': '/diagnoses/integritas-ego.json',
  'Pertumbuhan dan Perkembangan': '/diagnoses/pertumbuhan-perkembangan.json',
  'Kebersihan Diri': '/diagnoses/kebersihan-diri.json',
  'Penyuluhan dan Pembelajaran': '/diagnoses/penyuluhan-pembelajaran.json',
  'Interaksi Sosial': '/diagnoses/interaksi-sosial.json',
  'Keamanan dan Proteksi': '/diagnoses/keamanan-proteksi.json'
};

/**
 * Mendapatkan daftar semua kategori diagnosis
 */
export function getCategories(): DiagnosisCategory[] {
  return Object.keys(CATEGORY_MAP) as DiagnosisCategory[];
}

/**
 * Mendapatkan nama kategori dari slug
 */
export function getCategoryName(slug: string): string {
  return CATEGORY_MAP[slug] || slug;
}

/**
 * Mendapatkan file path untuk kategori tertentu
 */
export function getCategoryFile(category: string): string {
  return CATEGORY_FILES[category] || '';
}

/**
 * Mencari diagnosis berdasarkan kode
 */
export async function findDiagnosisByCode(code: string): Promise<DiagnosisIndex | null> {
  try {
    const indexResponse = await fetch('/data/diagnoses-index.json');
    const index: DiagnosesIndex = await indexResponse.json();
    return index.diagnoses.find(d => d.code === code) || null;
  } catch {
    return null;
  }
}

/**
 * Mendapatkan semua diagnosis untuk kategori tertentu
 */
export async function getDiagnosesByCategory(category: string): Promise<DiagnosisIndex[]> {
  try {
    const indexResponse = await fetch('/data/diagnoses-index.json');
    const index: DiagnosesIndex = await indexResponse.json();
    return index.diagnoses.filter(d => d.category === category);
  } catch {
    return [];
  }
}

/**
 * Mencari diagnosis berdasarkan nama atau kode
 */
export async function searchDiagnoses(query: string): Promise<DiagnosisIndex[]> {
  try {
    const indexResponse = await fetch('/data/diagnoses-index.json');
    const index: DiagnosesIndex = await indexResponse.json();
    const searchQuery = query.toLowerCase();

    return index.diagnoses.filter(d =>
      d.name.toLowerCase().includes(searchQuery) ||
      d.code.toLowerCase().includes(searchQuery) ||
      d.category.toLowerCase().includes(searchQuery)
    );
  } catch {
    return [];
  }
}

/**
 * Mendapatkan jumlah total diagnosis
 */
export async function getTotalDiagnoses(): Promise<number> {
  try {
    const indexResponse = await fetch('/data/diagnoses-index.json');
    const index: DiagnosesIndex = await indexResponse.json();
    return index.metadata.total_diagnosis;
  } catch {
    return 0;
  }
}

/**
 * Mendapatkan statistik diagnosis per kategori
 */
export async function getCategoryStats(): Promise<Record<string, number>> {
  try {
    const indexResponse = await fetch('/data/diagnoses-index.json');
    const index: DiagnosesIndex = await indexResponse.json();

    const stats: Record<string, number> = {};
    Object.entries(index.categories).forEach(([category, data]) => {
      stats[category] = data.count;
    });

    return stats;
  } catch {
    return {};
  }
}

/**
 * Format kode diagnosis dengan leading zeros
 */
export function formatDiagnosisCode(code: number): string {
  return `D.${code.toString().padStart(4, '0')}`;
}

/**
 * Parse kode diagnosis menjadi number
 */
export function parseDiagnosisCode(code: string): number {
  const match = code.match(/D\.0*(\d+)/);
  return match ? parseInt(match[1]) : 0;
}
