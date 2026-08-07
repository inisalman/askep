/**
 * Script untuk re-kategorisasi tindakan intervensi keperawatan
 * dari hanya "terapeutik" menjadi 4 kategori SIKI:
 * observasi, terapeutik, edukasi, kolaborasi
 * 
 * Berdasarkan keyword patterns dari standar SIKI (PPNI)
 */

const fs = require('fs');
const path = require('path');

const DIAGNOSES_DIR = path.join(__dirname, '../src/data/diagnoses');

// Keyword patterns untuk setiap kategori tindakan SIKI
const categories = {
  observasi: [
    /^identifikasi/i,
    /^monitor/i,
    /^palpasi/i,
    /^auskultasi/i,
    /^periksa/i,
    /^kaji/i,
    /^observasi/i,
    /^deteksi/i,
    /^evaluasi/i,
    /^idenfitikasi/i,
  ],
  edukasi: [
    /^jelaskan/i,
    /^anjurkan/i,
    /^ajarkan/i,
    /^informasikan/i,
    /^fasilitasi.*pembelajaran/i,
    /^beri.*edukasi/i,
    /^beri.*penjelasan/i,
    /^diskusikan/i,
    /^libatkan.*pasien/i,
    /^libatkan.*keluarga/i,
  ],
  kolaborasi: [
    /^kolaborasi/i,
  ],
};

// Terapeutik adalah default jika tidak masuk kategori lain
// Tapi kita juga bisa detect keyword terapeutik untuk memastikan
const terapeutikKeywords = [
  /^berikan/i,
  /^lakukan/i,
  /^atur/i,
  /^posisikan/i,
  /^fasilitasi/i,
  /^pasang/i,
  /^kelola/i,
  /^terapi/i,
  /^kompres/i,
  /^imobilisasi/i,
  /^tinggikan/i,
  /^sediakan/i,
  /^tempatkan/i,
  /^tetapkan/i,
  /^dokumentasikan/i,
  /^pertahankan/i,
  /^cegah/i,
  /^pencegahan/i,
  /^rawat/i,
  /^bersihkan/i,
  /^ganti/i,
  /^aplikasikan/i,
  /^stimulasi/i,
  /^latihan/i,
  /^mobilisasi/i,
  /^posisi/i,
  /^hindari/i,
  /^batasi/i,
  /^optimalkan/i,
  /^rujuk/i,
  /^refer/i,
];

function categorizeAction(action) {
  const trimmed = action.trim();
  
  // Check observasi
  for (const pattern of categories.observasi) {
    if (pattern.test(trimmed)) return 'observasi';
  }
  
  // Check edukasi
  for (const pattern of categories.edukasi) {
    if (pattern.test(trimmed)) return 'edukasi';
  }
  
  // Check kolaborasi
  for (const pattern of categories.kolaborasi) {
    if (pattern.test(trimmed)) return 'kolaborasi';
  }
  
  // Default: terapeutik
  return 'terapeutik';
}

function recategorizeInterventions(interventions) {
  if (!Array.isArray(interventions)) return interventions;
  
  return interventions.map(intervention => {
    // Handle case where tindakan is an object with only "terapeutik" key
    if (intervention.tindakan && typeof intervention.tindakan === 'object' && !Array.isArray(intervention.tindakan)) {
      const allActions = [];
      
      // Collect all actions from existing categories
      for (const [cat, actions] of Object.entries(intervention.tindakan)) {
        if (Array.isArray(actions)) {
          allActions.push(...actions);
        }
      }
      
      // Re-categorize each action
      const newTindakan = {
        observasi: [],
        terapeutik: [],
        edukasi: [],
        kolaborasi: [],
      };
      
      for (const action of allActions) {
        const category = categorizeAction(action);
        newTindakan[category].push(action);
      }
      
      // Remove empty categories
      for (const cat of Object.keys(newTindakan)) {
        if (newTindakan[cat].length === 0) {
          delete newTindakan[cat];
        }
      }
      
      return {
        ...intervention,
        tindakan: newTindakan,
      };
    }
    
    // Handle case where tindakan is a flat array (from interventions-detail.json)
    if (Array.isArray(intervention.tindakan)) {
      const newTindakan = {
        observasi: [],
        terapeutik: [],
        edukasi: [],
        kolaborasi: [],
      };
      
      for (const action of intervention.tindakan) {
        const category = categorizeAction(action);
        newTindakan[category].push(action);
      }
      
      // Remove empty categories
      for (const cat of Object.keys(newTindakan)) {
        if (newTindakan[cat].length === 0) {
          delete newTindakan[cat];
        }
      }
      
      return {
        ...intervention,
        tindakan: newTindakan,
      };
    }
    
    return intervention;
  });
}

// Process all diagnosis JSON files
const files = fs.readdirSync(DIAGNOSES_DIR).filter(f => f.endsWith('.json'));
let totalDiagnoses = 0;
let totalInterventions = 0;

for (const file of files) {
  const filePath = path.join(DIAGNOSES_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  if (!data.diagnoses) continue;
  
  for (const [code, diagnosis] of Object.entries(data.diagnoses)) {
    if (diagnosis.interventions && Array.isArray(diagnosis.interventions)) {
      diagnosis.interventions = recategorizeInterventions(diagnosis.interventions);
      totalInterventions += diagnosis.interventions.length;
    }
    totalDiagnoses++;
  }
  
  // Write back
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ Updated ${file}`);
}

console.log(`\nDone! Re-categorized ${totalInterventions} interventions across ${totalDiagnoses} diagnoses.`);

// Also process interventions-detail.json
const detailPath = path.join(__dirname, '../src/data/interventions-detail.json');
if (fs.existsSync(detailPath)) {
  const detailData = JSON.parse(fs.readFileSync(detailPath, 'utf-8'));
  
  for (const [code, interventions] of Object.entries(detailData)) {
    if (Array.isArray(interventions)) {
      detailData[code] = recategorizeInterventions(interventions);
    }
  }
  
  fs.writeFileSync(detailPath, JSON.stringify(detailData, null, 2), 'utf-8');
  console.log('✓ Updated interventions-detail.json');
}
