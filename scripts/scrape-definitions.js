const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Daftar semua diagnosis dari perawat.org
const diagnosisUrls = [
  // Respirasi
  { slug: 'bersihan-jalan-napas-tidak-efektif', code: 'D.0001' },
  { slug: 'gangguan-penyapihan-ventilator', code: 'D.0002' },
  { slug: 'gangguan-pertukaran-gas', code: 'D.0003' },
  { slug: 'gangguan-ventilasi-spontan', code: 'D.0004' },
  { slug: 'pola-napas-tidak-efektif', code: 'D.0005' },
  { slug: 'risiko-aspirasi', code: 'D.0006' },
  // Sirkulasi
  { slug: 'gangguan-sirkulasi-spontan', code: 'D.0007' },
  { slug: 'penurunan-curah-jantung', code: 'D.0008' },
  { slug: 'perfusi-perifer-tidak-efektif', code: 'D.0009' },
  { slug: 'risiko-gangguan-sirkulasi-spontan', code: 'D.0010' },
  { slug: 'risiko-penurunan-curah-jantung', code: 'D.0011' },
  { slug: 'risiko-perdarahan', code: 'D.0012' },
  { slug: 'risiko-perfusi-gastrointestinal-tidak-efektif', code: 'D.0013' },
  { slug: 'risiko-perfusi-miokard-tidak-efektif', code: 'D.0014' },
  { slug: 'risiko-perfusi-perifer-tidak-efektif', code: 'D.0015' },
  { slug: 'risiko-perfusi-renal-tidak-efektif', code: 'D.0016' },
  { slug: 'risiko-perfusi-serebral-tidak-efektif', code: 'D.0017' },
  // Nutrisi/Cairan
  { slug: 'berat-badan-lebih', code: 'D.0018' },
  { slug: 'defisit-nutrisi', code: 'D.0019' },
  { slug: 'diare', code: 'D.0020' },
  { slug: 'disfungsi-motilitas-gastrointestinal', code: 'D.0021' },
  { slug: 'hipervolemia', code: 'D.0022' },
  { slug: 'hipovolemia', code: 'D.0023' },
  { slug: 'ikterik-neonatus', code: 'D.0024' },
  { slug: 'kesiapan-peningkatan-keseimbangan-cairan', code: 'D.0025' },
  { slug: 'kesiapan-peningkatan-nutrisi', code: 'D.0026' },
  { slug: 'ketidakstabilan-kadar-glukosa-darah', code: 'D.0027' },
  { slug: 'menyusui-efektif', code: 'D.0028' },
  { slug: 'menyusui-tidak-efektif', code: 'D.0029' },
  { slug: 'obesitas', code: 'D.0030' },
  { slug: 'risiko-berat-badan-lebih', code: 'D.0031' },
  { slug: 'risiko-defisit-nutrisi', code: 'D.0032' },
  { slug: 'risiko-disfungsi-motilitas-gastrointestinal', code: 'D.0033' },
  { slug: 'risiko-hipovolemia', code: 'D.0034' },
  { slug: 'risiko-ikterik-neonatus', code: 'D.0035' },
  { slug: 'risiko-ketidakseimbangan-cairan', code: 'D.0036' },
  { slug: 'risiko-ketidakseimbangan-elektrolit', code: 'D.0037' },
  { slug: 'risiko-ketidakstabilan-kadar-glukosa-darah', code: 'D.0038' },
  { slug: 'risiko-syok', code: 'D.0039' },
  // Eliminasi
  { slug: 'gangguan-eliminasi-urin', code: 'D.0040' },
  { slug: 'inkontinensia-fekal', code: 'D.0041' },
  { slug: 'inkontinensia-urin-berlanjut', code: 'D.0042' },
  { slug: 'inkontinensia-urin-berlebih', code: 'D.0043' },
  { slug: 'inkontinensia-urin-fungsional', code: 'D.0044' },
  { slug: 'inkontinensia-urin-refleks', code: 'D.0045' },
  { slug: 'inkontinensia-urin-stres', code: 'D.0046' },
  { slug: 'inkontinensia-urin-urgensi', code: 'D.0047' },
  { slug: 'kesiapan-peningkatan-eliminasi-urin', code: 'D.0048' },
  { slug: 'konstipasi', code: 'D.0049' },
  { slug: 'retensi-urin', code: 'D.0050' },
  { slug: 'risiko-inkontinensia-urin-urgensi', code: 'D.0051' },
  { slug: 'risiko-konstipasi', code: 'D.0052' },
  // Aktivitas dan Istirahat
  { slug: 'disorganisasi-perilaku-bayi', code: 'D.0053' },
  { slug: 'gangguan-mobilitas-fisik', code: 'D.0054' },
  { slug: 'gangguan-pola-tidur', code: 'D.0055' },
  { slug: 'intoleransi-aktivitas', code: 'D.0056' },
  { slug: 'keletihan', code: 'D.0057' },
  { slug: 'kesiapan-peningkatan-tidur', code: 'D.0058' },
  { slug: 'risiko-disorganisasi-perilaku-bayi', code: 'D.0059' },
  { slug: 'risiko-intoleransi-aktivitas', code: 'D.0060' },
  // Neurosensori
  { slug: 'disrefleksia-otonom', code: 'D.0061' },
  { slug: 'gangguan-memori', code: 'D.0062' },
  { slug: 'gangguan-menelan', code: 'D.0063' },
  { slug: 'konfusi-akut', code: 'D.0064' },
  { slug: 'konfusi-kronis', code: 'D.0065' },
  { slug: 'penurunan-kapasitas-adaptif-intrakranial', code: 'D.0066' },
  { slug: 'risiko-disfungsi-neurovaskuler-perifer', code: 'D.0067' },
  { slug: 'risiko-konfusi-akut', code: 'D.0068' },
  // Reproduksi dan Seksualitas
  { slug: 'disfungsi-seksual', code: 'D.0069' },
  { slug: 'kesiapan-persalinan', code: 'D.0070' },
  { slug: 'pola-seksual-tidak-efektif', code: 'D.0071' },
  { slug: 'risiko-disfungsi-seksual', code: 'D.0072' },
  { slug: 'risiko-kehamilan-tidak-dikehendaki', code: 'D.0073' },
  // Nyeri dan Kenyamanan
  { slug: 'gangguan-rasa-nyaman', code: 'D.0074' },
  { slug: 'ketidaknyamanan-pasca-partum', code: 'D.0075' },
  { slug: 'nausea', code: 'D.0076' },
  { slug: 'nyeri-akut', code: 'D.0077' },
  { slug: 'nyeri-kronis', code: 'D.0078' },
  { slug: 'nyeri-melahirkan', code: 'D.0079' },
  // Integritas Ego
  { slug: 'ansietas', code: 'D.0080' },
  { slug: 'berduka', code: 'D.0081' },
  { slug: 'distres-spiritual', code: 'D.0082' },
  { slug: 'gangguan-citra-tubuh', code: 'D.0083' },
  { slug: 'gangguan-identitas-diri', code: 'D.0084' },
  { slug: 'gangguan-persepsi-sensori', code: 'D.0085' },
  { slug: 'harga-diri-rendah-kronis', code: 'D.0086' },
  { slug: 'harga-diri-rendah-situasional', code: 'D.0087' },
  { slug: 'keputusasaan', code: 'D.0088' },
  { slug: 'kesiapan-peningkatan-konsep-diri', code: 'D.0089' },
  { slug: 'kesiapan-peningkatan-koping-keluarga', code: 'D.0090' },
  { slug: 'kesiapan-peningkatan-koping-komunitas', code: 'D.0091' },
  { slug: 'ketidakberdayaan', code: 'D.0092' },
  { slug: 'ketidakmampuan-koping-keluarga', code: 'D.0093' },
  { slug: 'koping-defensif', code: 'D.0094' },
  { slug: 'koping-komunitas-tidak-efektif', code: 'D.0095' },
  { slug: 'koping-tidak-efektif', code: 'D.0096' },
  { slug: 'penurunan-koping-keluarga', code: 'D.0097' },
  { slug: 'penyangkalan-tidak-efektif', code: 'D.0098' },
  { slug: 'perilaku-kesehatan-cenderung-berisiko', code: 'D.0099' },
  { slug: 'risiko-distres-spiritual', code: 'D.0100' },
  { slug: 'risiko-harga-diri-rendah-kronis', code: 'D.0101' },
  { slug: 'risiko-harga-diri-rendah-situasional', code: 'D.0102' },
  { slug: 'risiko-ketidakberdayaan', code: 'D.0103' },
  { slug: 'sindrom-pasca-trauma', code: 'D.0104' },
  { slug: 'waham', code: 'D.0105' },
  // Pertumbuhan dan Perkembangan
  { slug: 'gangguan-tumbuh-kembang', code: 'D.0106' },
  { slug: 'risiko-gangguan-perkembangan', code: 'D.0107' },
  { slug: 'risiko-gangguan-pertumbuhan', code: 'D.0108' },
  // Kebersihan Diri
  { slug: 'defisit-perawatan-diri', code: 'D.0109' },
  // Penyuluhan dan Pembelajaran
  { slug: 'defisit-kesehatan-komunitas', code: 'D.0110' },
  { slug: 'defisit-pengetahuan', code: 'D.0111' },
  { slug: 'kesiapan-peningkatan-manajemen-kesehatan', code: 'D.0112' },
  { slug: 'kesiapan-peningkatan-pengetahuan', code: 'D.0113' },
  { slug: 'ketidakpatuhan', code: 'D.0114' },
  { slug: 'manajemen-kesehatan-keluarga-tidak-efektif', code: 'D.0115' },
  { slug: 'manajemen-kesehatan-tidak-efektif', code: 'D.0116' },
  { slug: 'pemeliharaan-kesehatan-tidak-efektif', code: 'D.0117' },
  // Interaksi Sosial
  { slug: 'gangguan-interaksi-sosial', code: 'D.0118' },
  { slug: 'gangguan-komunikasi-verbal', code: 'D.0119' },
  { slug: 'gangguan-proses-keluarga', code: 'D.0120' },
  { slug: 'isolasi-sosial', code: 'D.0121' },
  { slug: 'kesiapan-peningkatan-menjadi-orang-tua', code: 'D.0122' },
  { slug: 'kesiapan-peningkatan-proses-keluarga', code: 'D.0123' },
  { slug: 'ketegangan-peran-pemberi-asuhan', code: 'D.0124' },
  { slug: 'penampilan-peran-tidak-efektif', code: 'D.0125' },
  { slug: 'pencapaian-peran-menjadi-orang-tua', code: 'D.0126' },
  { slug: 'risiko-gangguan-perlekatan', code: 'D.0127' },
  { slug: 'risiko-proses-pengasuhan-tidak-efektif', code: 'D.0128' },
  // Keamanan dan Proteksi
  { slug: 'gangguan-integritas-kulit-jaringan', code: 'D.0129' },
  { slug: 'hipertermia', code: 'D.0130' },
  { slug: 'hipotermia', code: 'D.0131' },
  { slug: 'perilaku-kekerasan', code: 'D.0132' },
  { slug: 'perlambatan-pemulihan-pascabedah', code: 'D.0133' },
  { slug: 'risiko-alergi', code: 'D.0134' },
  { slug: 'risiko-bunuh-diri', code: 'D.0135' },
  { slug: 'risiko-cedera', code: 'D.0136' },
  { slug: 'risiko-cedera-pada-ibu', code: 'D.0137' },
  { slug: 'risiko-cedera-pada-janin', code: 'D.0138' },
  { slug: 'risiko-gangguan-integritas-kulit-jaringan', code: 'D.0139' },
  { slug: 'risiko-hipotermia', code: 'D.0140' },
  { slug: 'risiko-hipotermia-perioperatif', code: 'D.0141' },
  { slug: 'risiko-infeksi', code: 'D.0142' },
  { slug: 'risiko-jatuh', code: 'D.0143' },
  { slug: 'risiko-luka-tekan', code: 'D.0144' },
  { slug: 'risiko-mutilasi-diri', code: 'D.0145' },
  { slug: 'risiko-perilaku-kekerasan', code: 'D.0146' },
  { slug: 'risiko-perlambatan-pemulihan-pascabedah', code: 'D.0147' },
  { slug: 'risiko-termoregulasi-tidak-efektif', code: 'D.0148' },
  { slug: 'termoregulasi-tidak-efektif', code: 'D.0149' },
];

async function scrapeDefinitions() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();
  
  const definitions = {};
  let successCount = 0;
  let failCount = 0;

  for (const diag of diagnosisUrls) {
    try {
      console.log(`Scraping ${diag.code}: ${diag.slug}...`);
      await page.goto(`https://perawat.org/${diag.slug}/`, { 
        waitUntil: 'domcontentloaded',
        timeout: 15000 
      });
      
      // Wait for content
      await page.waitForTimeout(1000);
      
      // Try to get definition from the page
      // The definition is usually in the first paragraph or in a specific section
      const definition = await page.evaluate(() => {
        // Try to find definition in the main content
        const content = document.querySelector('.entry-content');
        if (content) {
          // Look for the first paragraph that contains the definition
          const paragraphs = content.querySelectorAll('p');
          for (const p of paragraphs) {
            const text = p.textContent.trim();
            // Definition usually starts with the diagnosis name or is a descriptive sentence
            if (text.length > 20 && !text.includes('Bagikan') && !text.includes('Tanda dan Gejala')) {
              return text;
            }
          }
        }
        
        // Fallback: try to get from meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          return metaDesc.getAttribute('content');
        }
        
        return null;
      });
      
      if (definition) {
        definitions[diag.code] = definition;
        console.log(`  ✓ Got definition: ${definition.substring(0, 80)}...`);
        successCount++;
      } else {
        definitions[diag.code] = '';
        console.log(`  ✗ No definition found`);
        failCount++;
      }
      
      // Small delay to be polite
      await page.waitForTimeout(500);
      
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
      definitions[diag.code] = '';
      failCount++;
    }
  }

  await browser.close();
  
  // Save definitions to file
  fs.writeFileSync(
    '/root/askep-gh/src/data/definitions.json',
    JSON.stringify(definitions, null, 2)
  );
  
  console.log(`\nDone! Success: ${successCount}, Failed: ${failCount}`);
  console.log('Saved to /root/askep-gh/src/data/definitions.json');
}

scrapeDefinitions().catch(console.error);
