const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const CACHE_FILE = path.join(__dirname, 'scraped_cache.json');
const OUTPUT_DIR = path.join(__dirname, '../src/data/diagnoses_scraped');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    console.log(`Loaded ${Object.keys(cache).length} items from cache.`);
  } catch (e) {
    console.error('Failed to parse cache file, starting fresh:', e.message);
  }
}

function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

async function scrapeAll() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Navigating to index page...');
  await page.goto('https://perawat.org/149-diagnosis-keperawatan-indonesia/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  const categoryMap = await page.evaluate(() => {
    const categories = {};
    const headings = Array.from(document.querySelectorAll('h2'));
    headings.forEach(h => {
      const catName = h.textContent.trim().replace(/\.$/, '');
      const validCategories = [
        'Respirasi', 'Sirkulasi', 'Nutrisi/Cairan', 'Eliminasi', 'Aktivitas dan Istirahat', 
        'Neurosensori', 'Reproduksi dan Seksualitas', 'Nyeri dan Kenyamanan', 'Integritas ego', 
        'Pertumbuhan dan Perkembangan', 'Kebersihan Diri', 'Penyuluhan dan Pembelajaran', 
        'Interaksi Sosial', 'Keamanan dan Proteksi'
      ];
      if (validCategories.includes(catName)) {
        categories[catName] = [];
        let next = h.nextElementSibling;
        while (next && next.tagName !== 'H2') {
          if (next.tagName === 'OL' || next.tagName === 'UL') {
            const links = Array.from(next.querySelectorAll('li a'));
            links.forEach(l => {
              categories[catName].push({ text: l.textContent.trim(), href: l.href });
            });
          }
          next = next.nextElementSibling;
        }
      }
    });
    return categories;
  });

  const allItems = [];
  for (const [category, items] of Object.entries(categoryMap)) {
    items.forEach(item => {
      allItems.push({ ...item, category });
    });
  }
  console.log(`Found total ${allItems.length} items to scrape.`);

  let successCount = 0;
  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];
    console.log(`[${i+1}/${allItems.length}] Processing: ${item.text} (${item.href})`);

    let retry = 3;
    let success = false;
    while (retry > 0 && !success) {
      try {
        await page.goto(item.href, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        const parsed = await page.evaluate(() => {
          const h1 = document.querySelector('h1');
          if (!h1) return null;
          const h1Text = h1.textContent.trim();
          
          const codeMatch = h1Text.match(/\[SDKI\s+([A-Z]\.\d+)\]/i) || h1Text.match(/([A-Z]\.\d+)/);
          const code = codeMatch ? codeMatch[1].toUpperCase() : '';
          const name = h1Text.replace(/\[SDKI\s+[A-Z]\.\d+\]/i, '').replace(/\[[A-Z]\.\d+\]/, '').trim();

          const getSectionHTML = (id) => {
            const el = document.getElementById(id);
            if (!el) return '';
            let next = el.nextElementSibling;
            let htmls = [];
            while (next && next.tagName !== 'H2' && next.tagName !== 'H1') {
              htmls.push(next.outerHTML);
              next = next.nextElementSibling;
            }
            return htmls.join('\n');
          };

          const parseListFromHTML = (html) => {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const items = Array.from(temp.querySelectorAll('li')).map(li => li.textContent.trim());
            if (items.length > 0) return items;
            return Array.from(temp.querySelectorAll('p')).map(p => p.textContent.trim()).filter(Boolean);
          };

          const parseSignsSymptoms = (html) => {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const subjective = [];
            const objective = [];
            
            const htmlLower = html.toLowerCase();
            const dsIdx = htmlLower.indexOf('ds:');
            const doIdx = htmlLower.indexOf('do:');
            
            if (dsIdx !== -1 && doIdx !== -1) {
              const dsPart = html.substring(dsIdx, doIdx);
              const doPart = html.substring(doIdx);
              
              const dsDiv = document.createElement('div');
              dsDiv.innerHTML = dsPart;
              subjective.push(...Array.from(dsDiv.querySelectorAll('li')).map(li => li.textContent.trim()));
              
              const doDiv = document.createElement('div');
              doDiv.innerHTML = doPart;
              objective.push(...Array.from(doDiv.querySelectorAll('li')).map(li => li.textContent.trim()));
            } else {
              const lists = Array.from(temp.querySelectorAll('ol, ul'));
              if (lists.length > 0) {
                objective.push(...Array.from(temp.querySelectorAll('li')).map(li => li.textContent.trim()));
              } else {
                const paragraphs = Array.from(temp.querySelectorAll('p')).map(p => p.textContent.trim()).filter(Boolean);
                let mode = 'objective';
                paragraphs.forEach(p => {
                  const lower = p.toLowerCase();
                  if (lower.startsWith('ds:') || lower.startsWith('subjective')) {
                    mode = 'subjective';
                  } else if (lower.startsWith('do:') || lower.startsWith('objective')) {
                    mode = 'objective';
                  } else {
                    if (mode === 'subjective') subjective.push(p);
                    else objective.push(p);
                  }
                });
              }
            }

            const cleanList = (list) => list.filter(item => {
              const lower = item.toLowerCase();
              return lower !== 'tidak ada' && lower !== 'none' && !lower.startsWith('ds:') && !lower.startsWith('do:');
            });

            return {
              subjective: cleanList(subjective),
              objective: cleanList(objective)
            };
          };

          const parseInterventions = (html) => {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const links = Array.from(temp.querySelectorAll('h3, li a, p a'));
            const intervs = [];
            const seen = new Set();
            links.forEach(l => {
              const text = l.textContent.trim();
              const match = text.match(/^(.*?)\s*\((I\.\d+)\)$/) || text.match(/^(.*?)\s*\[(I\.\d+)\]/);
              if (match) {
                const name = match[1].trim();
                const code = match[2].trim().toUpperCase();
                const key = `${code}-${name}`;
                if (!seen.has(key)) {
                  seen.add(key);
                  intervs.push({ code, name });
                }
              }
            });
            return intervs;
          };

          // Definition: Let's extract the first sentence/paragraph containing "[Name] adalah ..."
          const ps = Array.from(document.querySelectorAll('p'));
          let definition = '';
          const nameLower = name.toLowerCase();
          for (const p of ps) {
            const txt = p.textContent.trim();
            if (txt.toLowerCase().includes(nameLower) && txt.toLowerCase().includes('adalah')) {
              const lowerTxt = txt.toLowerCase();
              const startIdx = lowerTxt.indexOf('adalah');
              if (startIdx !== -1) {
                const defRaw = txt.substring(startIdx + 6).trim();
                definition = defRaw.split('.')[0] + '.';
                definition = definition.charAt(0).toLowerCase() + definition.slice(1);
                break;
              }
            }
          }

          // Expected outcomes
          const luaranHTML = getSectionHTML('luaran-hyd');
          const luaranTemp = document.createElement('div');
          luaranTemp.innerHTML = luaranHTML;
          const luaranText = luaranTemp.textContent || '';
          const luaranCodeMatch = luaranText.match(/(L\.\d+)/);
          const luaranCode = luaranCodeMatch ? luaranCodeMatch[1].toUpperCase() : '';
          
          let luaranName = '';
          const luaranNameMatch = luaranText.match(/adalah:\s+“?([^”\.\n]+)”?/i) || luaranText.match(/luaran utama[^\n]*adalah\s+“?([^”\.\n]+)”?/i);
          if (luaranNameMatch) {
            luaranName = luaranNameMatch[1].trim();
            luaranName = luaranName.charAt(0).toUpperCase() + luaranName.slice(1);
          }

          // Parse criteria
          const criteria = [];
          const seenCriteria = new Set();
          
          const lists = Array.from(luaranTemp.querySelectorAll('ol, ul'));
          if (lists.length > 0) {
            const firstList = lists[0];
            const items = Array.from(firstList.querySelectorAll('li')).map(li => li.textContent.trim());
            items.forEach(c => {
              const clean = c.trim().replace(/\.$/, '');
              if (clean.length > 1) {
                const capitalized = clean.charAt(0).toUpperCase() + clean.slice(1);
                if (!seenCriteria.has(capitalized.toLowerCase())) {
                  seenCriteria.add(capitalized.toLowerCase());
                  criteria.push(capitalized);
                }
              }
            });
          }

          // Related factors or Risk factors
          const etiologiHTML = getSectionHTML('penyebab-etiologi');
          const risikoHTML = getSectionHTML('faktor-risiko');
          const combinedEtiologi = (etiologiHTML + '\n' + risikoHTML).trim();
          
          const rawFactors = parseListFromHTML(combinedEtiologi);
          const related_factors = rawFactors.filter(x => {
            const lower = x.toLowerCase();
            return !lower.includes('penyebab') && !lower.includes('faktor-faktor') && !lower.includes('berhubungan dengan') && !lower.includes('penjelasan dari') && !lower.includes('salah satu dari');
          }).map(x => x.replace(/\.$/, '').trim());

          return {
            code,
            name,
            definition,
            signs_and_symptoms: parseSignsSymptoms(getSectionHTML('tanda-dan-gejala')),
            related_factors,
            expected_outcomes: {
              code: luaranCode,
              name: luaranName || (criteria.length > 0 ? criteria[0] : ''),
              criteria: criteria
            },
            interventions: parseInterventions(getSectionHTML('intervensi'))
          };
        });

        if (parsed && parsed.code) {
          cache[item.href] = {
            ...parsed,
            category: item.category
          };
          saveCache();
          success = true;
          successCount++;
          console.log(`-> Successfully scraped: ${parsed.code} - ${parsed.name}`);
        } else {
          console.log(`-> Parsing returned empty or invalid code. Retrying...`);
          retry--;
        }
      } catch (err) {
        console.error(`Error scraping ${item.text}:`, err.message);
        retry--;
        if (retry > 0) {
          console.log(`Waiting 5s before retry...`);
          await delay(5000);
        }
      }
    }
    
    await delay(1000 + Math.random() * 1000);
  }

  console.log(`Scraping complete. Successfully scraped ${successCount} new items.`);
  await browser.close();

  distributeData();
}

function distributeData() {
  console.log('Distributing scraped data to JSON category files...');
  const categoryFileMap = {
    'Respirasi': 'respirasi.json',
    'Sirkulasi': 'sirkulasi.json',
    'Nutrisi/Cairan': 'nutrisi-cairan.json',
    'Eliminasi': 'eliminasi.json',
    'Aktivitas dan Istirahat': 'aktivitas-istirahat.json',
    'Neurosensori': 'neurosensori.json',
    'Reproduksi dan Seksualitas': 'reproduksi-seksualitas.json',
    'Nyeri dan Kenyamanan': 'nyeri-kenyamanan.json',
    'Integritas ego': 'integritas-ego.json',
    'Pertumbuhan dan Perkembangan': 'pertumbuhan-perkembangan.json',
    'Kebersihan Diri': 'kebersihan-diri.json',
    'Penyuluhan dan Pembelajaran': 'penyuluhan-pembelajaran.json',
    'Interaksi Sosial': 'interaksi-sosial.json',
    'Keamanan dan Proteksi': 'keamanan-proteksi.json'
  };

  const categories = {};
  for (const cat in categoryFileMap) {
    categories[cat] = {};
  }

  Object.values(cache).forEach(diag => {
    let cat = diag.category;
    if (cat === 'Nutrisi dan Cairan') cat = 'Nutrisi/Cairan';
    if (categories[cat]) {
      categories[cat][diag.code] = diag;
    }
  });

  for (const [cat, diagnoses] of Object.entries(categories)) {
    const filename = categoryFileMap[cat];
    if (!filename) continue;
    
    const filePath = path.join(OUTPUT_DIR, filename);
    const output = {
      category: cat,
      description: `Scraped category data for ${cat}`,
      diagnoses
    };
    fs.writeFileSync(filePath, JSON.stringify(output, null, 2), 'utf8');
    console.log(`Saved ${Object.keys(diagnoses).length} diagnoses to ${filePath}`);
  }
}

scrapeAll().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
