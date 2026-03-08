'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Activity, Calculator, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { allDiagnosesData } from '@/data/diagnoses-complete';

interface SearchResult {
  type: 'diagnosis' | 'kalkulator' | 'sop';
  title: string;
  description?: string;
  href: string;
  category?: string;
}

// Kalkulator data
const kalkulatorData = [
  { slug: 'gcs', nama: 'Glasgow Coma Scale (GCS)', deskripsi: 'Penilaian tingkat kesadaran' },
  { slug: 'news', nama: 'NEWS (News Early Warning Score)', deskripsi: 'Skoring dini peringatan klinik' },
  { slug: 'nrs', nama: 'NRS (Nutritional Risk Screening)', deskripsi: 'Skrening risiko nutrisi' },
  { slug: 'pain-scale', nama: 'Pain Scale', deskripsi: 'Skala nyeri' },
  { slug: 'waterlow', nama: 'Waterlow Score', deskripsi: 'Skrening risiko luka tekan' },
  { slug: 'dikut', nama: 'DIKUT', deskripsi: 'Skrening risiko diabetes' },
  { slug: 'must', nama: 'MUST (Malnutrition Universal Screening Tool)', deskripsi: 'Skrening malnutrisi universal' },
];

// SOP data - placeholder for now
const sopData = [
  { slug: 'infus', nama: 'Pemasangan Infus', kategori: 'Prosedur Invasif' },
  { slug: 'kateter', nama: 'Pemasangan Kateter', kategori: 'Prosedur Invasif' },
  { slug: 'ngt', nama: 'Pemasangan NGT', kategori: 'Prosedur Invasif' },
  { slug: 'wound-dressing', nama: 'Wound Dressing', kategori: 'Perawatan Luka' },
  { slug: 'nebulizer', nama: 'Nebulizer', kategori: 'Terapi' },
  { slug: 'oksigen', nama: 'Pemberian Oksigen', kategori: 'Terapi' },
];

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      // Open search with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Search function
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search diagnosis
    allDiagnosesData.forEach(d => {
      if (
        d.nama.toLowerCase().includes(lowerQuery) ||
        d.keluhan.some(k => k.toLowerCase().includes(lowerQuery)) ||
        d.definisi.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'diagnosis',
          title: d.nama,
          description: d.definisi,
          href: `/diagnosis/${d.slug}`,
          category: d.kategori,
        });
      }
    });

    // Search kalkulator
    kalkulatorData.forEach(k => {
      if (
        k.nama.toLowerCase().includes(lowerQuery) ||
        k.deskripsi.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'kalkulator',
          title: k.nama,
          description: k.deskripsi,
          href: `/kalkulator/${k.slug}`,
        });
      }
    });

    // Search SOP
    sopData.forEach(s => {
      if (
        s.nama.toLowerCase().includes(lowerQuery) ||
        s.kategori.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'sop',
          title: s.nama,
          description: s.kategori,
          href: `/sop/${s.slug}`,
          category: s.kategori,
        });
      }
    });

    // Limit results
    setResults(searchResults.slice(0, 8));
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diagnosis':
        return <Activity className="w-4 h-4 text-violet-500" />;
      case 'kalkulator':
        return <Calculator className="w-4 h-4 text-blue-500" />;
      case 'sop':
        return <FileText className="w-4 h-4 text-green-500" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'diagnosis':
        return 'Diagnosis';
      case 'kalkulator':
        return 'Kalkulator';
      case 'sop':
        return 'SOP';
      default:
        return '';
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground transition-all duration-200 w-48 md:w-56"
      >
        <Search className="w-4 h-4" />
        <span className="truncate">Cari...</span>
        <kbd className="hidden md:inline-flex ml-auto text-xs bg-muted px-1.5 py-0.5 rounded border border-border">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-80 md:w-96 border border-border rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-none search-modal-bg"
          >
            {/* Search Input */}
            <div className="flex items-center gap-2 p-3 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari diagnosis, kalkulator, SOP..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-muted rounded"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <Link
                      key={`${result.type}-${result.href}`}
                      href={result.href}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                      }}
                      className={cn(
                        "flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors",
                        "group"
                      )}
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        {getTypeIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {result.title}
                        </p>
                        {result.description && (
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {result.description}
                          </p>
                        )}
                        <span className="text-xs text-muted-foreground/70 mt-1 inline-block">
                          {getTypeLabel(result.type)}
                          {result.category && ` • ${result.category}`}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-muted-foreground transition-opacity flex-shrink-0 mt-1" />
                    </Link>
                  ))}
                </div>
              ) : query ? (
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Tidak ditemukan hasil untuk "{query}"
                  </p>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-3 px-1">
                    Cari di:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="/diagnosis"
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 transition-colors"
                    >
                      <Activity className="w-5 h-5 text-violet-500" />
                      <span className="text-xs font-medium text-violet-600 dark:text-violet-400">Diagnosis</span>
                    </Link>
                    <Link
                      href="/kalkulator"
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                    >
                      <Calculator className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Kalkulator</span>
                    </Link>
                    <Link
                      href="/sop"
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
                    >
                      <FileText className="w-5 h-5 text-green-500" />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">SOP</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-border bg-muted/30">
              <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                <span>Tekan ESC untuk menutup</span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-background/80 px-1.5 py-0.5 rounded border border-border/50">↵</kbd>
                  <span>pilih</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}