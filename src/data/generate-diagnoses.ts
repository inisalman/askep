/**
 * Generator script untuk membuat file diagnoses-complete.ts
 * Baca dari file JSON per kategori dan gabungkan jadi satu
 * Jalankan: npx tsx src/data/generate-diagnoses.ts
 */

import fs from 'fs';
import path from 'path';

// Kategori dan namafilenya
const categories = [
  'respirasi',
  'sirkulasi',
  'nutrisi-cairan',
  'eliminasi',
  'aktivitas-istirahat',
  'neurosensori',
  'reproduksi-seksualitas',
  'nyeri-kenyamanan',
  'integritas-ego',
  'pertumbuhan-perkembangan',
  'kebersihan-diri',
  'penyuluhan-pembelajaran',
  'interaksi-sosial',
  'keamanan-proteksi'
];

// Keyword mapping berdasarkan nama diagnosis
const keywordMap: Record<string, string[]> = {
  'Bersihan Jalan Napas': ['batuk', 'dahak', 'lendir', 'sesak', 'wheezing', 'rongkohan', 'sekre'],
  'Penyapihan Ventilator': ['ventilator', 'weaning', 'sesak', 'nafas cepat'],
  'Pertukaran Gas': ['sesak', 'sianosis', 'biru', 'hipoksia', 'spO2'],
  'Ventilasi Spontan': ['sesak', 'lemah', 'ventilasi'],
  'Pola Napas': ['sesak', 'dyspnea', 'nafas', 'pernapasan'],
  'Aspirasi': ['aspirasi', 'tersedak', 'menelan'],
  'Sirkulasi': ['sirkulasi', 'jantung', 'nadi', 'tekanan darah'],
  'Curah Jantung': ['jantung', 'curah jantung', 'gagal jantung', 'palpitasi'],
  'Perfusi': ['perfusi', 'pucat', 'dingin', 'nadi lemah'],
  'Perdarahan': ['perdarahan', 'darah', 'hemoragi', 'Hb'],
  'Gastrointestinal': ['gastrointestinal', 'mual', 'muntah', 'bising usus'],
  'Miokard': ['miokard', 'jantung', 'nyeri dada', 'infark'],
  'Renal': ['renal', 'ginjal', 'urin'],
  'Serebral': ['serebral', 'otak', 'kesadaran'],
  'Nutrisi': ['nutrisi', 'makan', 'makanan', 'gizi'],
  'Cairan': ['cairan', 'hidrasi', 'dehidrasi', 'edema'],
  'Diare': ['diare', 'mencret', 'BAB'],
  'Hipervolemia': ['hipervolemia', 'cairan berlebih', 'edema'],
  'Hipovolemia': ['hipovolemia', 'dehidrasi', 'cairan kurang'],
  'Ikterik': ['ikterik', 'kuning', 'bilirubin'],
  'Glukosa': ['glukosa', 'gula darah', 'diabetes'],
  'Menyusui': ['menyusui', 'ASI', 'laktasi', 'bayi'],
  'Obesitas': ['obesitas', 'gemuk', 'berat badan'],
  'Eliminasi': ['eliminasi', 'BAK', 'BAB'],
  'Inkontinensia': ['inkontinensia', 'beser', 'tidak tahan'],
  'Konstipasi': ['konstipasi', 'sembelit', 'sulit BAB'],
  'Retensi': ['retensi', 'tahan', 'tidak bisa BAK'],
  'Perilaku Bayi': ['bayi', 'disorganisasi', 'perilaku'],
  'Mobilitas': ['mobilitas', 'gerak', 'jalan', 'lumpuh'],
  'Tidur': ['tidur', 'insomnia', 'terjaga'],
  'Aktivitas': ['aktivitas', 'aktif', 'gerak'],
  'Keletihan': ['keletihan', 'lelah', 'capek', 'fatigue'],
  'Neurosensori': ['neurosensori', 'saraf', 'neurologis'],
  'Memori': ['memori', 'ingatan', 'lupa', 'pikun'],
  'Menelan': ['menelan', 'sulit makan', 'tersedak'],
  'Konfusi': ['konfusi', 'bingung', 'delirium'],
  'Intrakranial': ['intrakranial', 'tekanan otak'],
  'Seksual': ['seksual', 'seks', 'hubungan'],
  'Persalinan': ['persalinan', 'melahirkan', 'hamil'],
  'Nyaman': ['nyaman', 'tidak nyaman', 'comfort'],
  'Nyeri': ['nyeri', 'sakit', 'perih', 'sakit'],
  'Nausea': ['nausea', 'mual', 'muntah'],
  'Ansietas': ['ansietas', 'cemas', 'cemas', 'khawatir'],
  'Berduka': ['berduka', 'kematian', 'kehilangan'],
  'Spiritual': ['spiritual', 'agama', 'ibadah'],
  'Citra Tubuh': ['citra tubuh', 'body image', 'penampilan'],
  'Identitas': ['identitas', 'diri', 'kepribadian'],
  'Persepsi': ['persepsi', 'sensori', 'indra'],
  'Harga Diri': ['harga diri', 'self esteem', 'percaya diri'],
  'Keputusasaan': ['keputusasaan', 'putus asa', 'hopeless'],
  'Koping': ['koping', 'cope', 'adaptasi'],
  'Ketidakberdayaan': ['ketidakberdayaan', 'daya', 'kontrol'],
  'Penyangkalan': ['penyangkalan', 'denial', 'menyangkal'],
  'Tumbuh Kembang': ['tumbuh kembang', 'perkembangan', 'pertumbuhan'],
  'Perawatan Diri': ['perawatan diri', 'ADL', 'mandi', 'makan', 'berpakaian'],
  'Pengetahuan': ['pengetahuan', 'info', 'edukasi'],
  'Kepatuhan': ['kepatuhan', 'patuh', 'compliance'],
  'Manajemen': ['manajemen', 'pengelolaan', 'kesehatan'],
  'Interaksi': ['interaksi', 'sosial', 'berinteraksi'],
  'Komunikasi': ['komunikasi', 'bicara', 'berbicara'],
  'Keluarga': ['keluarga', 'family', 'proses keluarga'],
  'Isolasi': ['isolasi', 'menyendiri', 'terisolasi'],
  'Orang Tua': ['orang tua', 'parenting', 'pengasuhan'],
  'Perlekatan': ['perlekatan', 'bonding', 'attachment'],
  'Kulit': ['kulit', 'luka', 'integritas'],
  'Suhu': ['suhu', 'demam', 'hipertermia', 'hipotermia'],
  'Kekerasan': ['kekerasan', 'agresif', 'amarah'],
  'Pemulihan': ['pemulihan', 'penyembuhan', 'post operasi'],
  'Alergi': ['alergi', 'reaksi', 'hipersensitif'],
  'Bunuh Diri': ['bunuh diri', 'suicide', 'mengakhiri hidup'],
  'Cedera': ['cedera', 'luka', 'trauma'],
  'Infeksi': ['integrasi', 'kuman', 'bakteri', 'virus'],
  'Jatuh': ['jatuh', 'fall', 'tergelincir'],
  'Luka Tekan': ['luka tekan', 'decubitus', 'dekubitus'],
  'Mutilasi': ['mutilasi', 'self harm', 'menyakiti diri']
};

function getKeywords(name: string): string[] {
  for (const [key, keywords] of Object.entries(keywordMap)) {
    if (name.toLowerCase().includes(key.toLowerCase())) {
      return keywords;
    }
  }
  return [];
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Baca semua data dari folder diagnoses/
const allDiagnoses: any[] = [];

for (const category of categories) {
  const filePath = path.join(process.cwd(), 'src/data/diagnoses', `${category}.json`);

  if (!fs.existsSync(filePath)) {
    console.warn(`File tidak ditemukan: ${filePath}`);
    continue;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  const categoryName = data.category;

  // Proses setiap diagnosis dalam file ini
  for (const [code, diag] of Object.entries(data.diagnoses as Record<string, any>)) {
    const keywords = getKeywords(diag.name);

    const diagnosisObj = {
      id: code.replace('D.', ''),
      slug: createSlug(diag.name),
      kode: diag.code,
      nama: diag.name,
      definisi: diag.definition || '',
      kategori: categoryName,
      tipe: diag.type || 'Aktual',
      keluhan: keywords,
      slki: diag.expected_outcomes ? {
        kode: diag.expected_outcomes.code || '',
        nama: diag.expected_outcomes.name || '',
        kriteria: diag.expected_outcomes.criteria || []
      } : {
        kode: '',
        nama: '',
        kriteria: []
      },
      siki: diag.interventions ? diag.interventions.map((int: any) => ({
        kode: int.code,
        nama: int.name
      })) : []
    };

    allDiagnoses.push(diagnosisObj);
  }
}

// Urutkan berdasarkan kode
allDiagnoses.sort((a, b) => a.kode.localeCompare(b.kode, undefined, { numeric: true }));

// Generate output
const diagnosesJson = allDiagnoses.map(d => JSON.stringify(d, null, 2)).join(',\n');

const output = `// Data lengkap 149 Diagnosis Keperawatan SDKI
import type { Diagnosis } from './diagnosis';

export const allDiagnosesData: Diagnosis[] = [
${diagnosesJson}
];
`;

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/diagnoses-complete.ts'),
  output
);

console.log(`Generated diagnoses-complete.ts dengan ${allDiagnoses.length} diagnosis`);