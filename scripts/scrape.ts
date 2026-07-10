import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

// Helper delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function scrapeAll() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // 1. Get index links
  console.log('Navigating to index page...');
  await page.goto('https://perawat.org/149-diagnosis-keperawatan-indonesia/', { waitUntil: 'domcontentloaded' });
  
  const categoryMap = await page.evaluate(() => {
    const categories: Record<string, { text: string; href: string }[]> = {};
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
              categories[catName].push({ text: l.textContent.trim(), href: (l as HTMLAnchorElement).href });
            });
          }
          next = next.nextElementSibling;
        }
      }
    });
    return categories;
  });

  console.log('Found categories and item counts:');
  for (const cat in categoryMap) {
    console.log(`- ${cat}: ${categoryMap[cat].length} items`);
  }

  // 2. Loop and scrape each item
  const scrapedData: Record<string, any> = {};

  // For testing, let's just do a few, or setup a script to scrape all.
  // Actually, we need to do all 149. We can write a Node script that saves results to a JSON cache file so it can resume if interrupted.
  // Let's create the script and run it in the terminal.
}
