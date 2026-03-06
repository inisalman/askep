/**
 * Type definitions untuk Diagnosis Keperawatan SDKI
 * Standar Diagnosis Keperawatan Indonesia - PPNI
 */

export interface DiagnosisIntervention {
  code: string;
  name: string;
}

export interface DiagnosisOutcome {
  code: string;
  name: string;
  criteria?: string[];
}

export interface DiagnosisSignsSymptoms {
  subjective: string[];
  objective: string[];
}

export interface DiagnosisDetail {
  code: string;
  name: string;
  definition: string;
  type: 'Aktual' | 'Risiko' | 'Promosi Kesehatan';
  signs_and_symptoms?: DiagnosisSignsSymptoms;
  risk_factors?: string[] | Record<string, string[]>;
  related_factors?: string[] | Record<string, string[]>;
  expected_outcomes?: DiagnosisOutcome | DiagnosisOutcome[];
  interventions?: DiagnosisIntervention[];
}

export interface DiagnosisCategoryData {
  category: string;
  description: string;
  diagnoses_count?: number;
  diagnoses: Record<string, DiagnosisDetail>;
}

export interface DiagnosisIndex {
  code: string;
  name: string;
  category: string;
}

export interface DiagnosesIndex {
  metadata: {
    source: string;
    standard: string;
    total_diagnosis: number;
    last_updated: string;
    description: string;
  };
  diagnoses: DiagnosisIndex[];
  categories: Record<string, {
    count: number;
    codes: string[];
  }>;
}

export type DiagnosisCategory =
  | 'Respirasi'
  | 'Sirkulasi'
  | 'Nutrisi dan Cairan'
  | 'Eliminasi'
  | 'Aktivitas dan Istirahat'
  | 'Neurosensori'
  | 'Reproduksi dan Seksualitas'
  | 'Nyeri dan Kenyamanan'
  | 'Integritas Ego'
  | 'Pertumbuhan dan Perkembangan'
  | 'Kebersihan Diri'
  | 'Penyuluhan dan Pembelajaran'
  | 'Interaksi Sosial'
  | 'Keamanan dan Proteksi';

export type DiagnosisType = 'Aktual' | 'Risiko' | 'Promosi Kesehatan';
