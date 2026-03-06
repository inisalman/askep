'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchDiagnoses, Diagnosis } from '@/data/diagnosis';
import { AlertCircle, Search, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerCardSkeleton } from '@/components/magicui/shimmer';
import { ResultCard } from '@/components/magicui/bento-grid';
import * as Motion from '@/lib/motion';

function DiagnosisSearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Diagnosis[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        const found = searchDiagnoses(searchQuery);
        setResults(found);
      } else {
        setResults([]);
      }
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('q', searchQuery);
    window.history.pushState({}, '', url);
  };

  const suggestedTerms = ['sesak napas', 'nyeri', 'luka', 'demam', 'lemah', 'batuk'];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <BlurFade>
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>SDKI Diagnosis</span>
          </motion.div>
          <h1 className="heading-xl mb-2">Pencarian Diagnosis</h1>
          <p className="text-muted-foreground text-sm">
            Masukkan keluhan pasien untuk menemukan diagnosis SDKI, intervensi SIKI, dan luaran SLKI yang relevan.
          </p>
        </div>
      </BlurFade>

      {/* Search Bar */}
      <BlurFade delay={0.1}>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSearch}
          className="flex gap-2 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ketik keluhan pasien..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-2 focus:border-primary transition-colors"
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="h-12 px-6">Cari</Button>
          </motion.div>
        </motion.form>
      </BlurFade>

      {/* Results Section */}
      {searchQuery.trim() && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Results count */}
          <BlurFade>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {!isLoading && (
                  <>
                    Ditemukan <span className="font-medium text-foreground">{results.length}</span> diagnosis
                    untuk &quot;<span className="text-primary">{searchQuery}</span>&quot;
                  </>
                )}
              </p>
            </div>
          </BlurFade>

          {/* Results list */}
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <ShimmerCardSkeleton key={i} />
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              {results.map((diagnosis, index) => (
                <BlurFade key={diagnosis.id} delay={index * 0.05}>
                  <ResultCard
                    href={`/diagnosis/${diagnosis.slug}`}
                    icon={<Activity className="w-4 h-4" />}
                    badge={diagnosis.kode}
                    title={diagnosis.nama}
                    description={diagnosis.definisi}
                    gradient="from-teal-500 to-emerald-500"
                  />
                </BlurFade>
              ))}
            </div>
          ) : (
            <BlurFade>
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4"
                >
                  <AlertCircle className="w-6 h-6 text-muted-foreground" />
                </motion.div>
                <h3 className="font-semibold mb-2">Tidak Ada Hasil</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tidak ditemukan diagnosis untuk &quot;{searchQuery}&quot;
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestedTerms.map((term) => (
                    <motion.div
                      key={term}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchQuery(term)}
                      >
                        {term}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}
        </motion.div>
      )}

      {/* Empty state */}
      {!searchQuery.trim() && (
        <BlurFade>
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <Search className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="font-semibold mb-2">Cari Diagnosis</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Masukkan keluhan pasien untuk mulai mencari
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedTerms.map((term, index) => (
                <motion.div
                  key={term}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      )}
    </div>
  );
}

export default function DiagnosisPage() {
  return (
    <Suspense fallback={
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <DiagnosisSearchContent />
    </Suspense>
  );
}
