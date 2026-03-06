'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { BookOpen, Search, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { sopData, getSOPCategories, searchSOP } from '@/data/sop';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerCardSkeleton } from '@/components/magicui/shimmer';
import { cn } from '@/lib/utils';
import { ResultCard } from '@/components/magicui/bento-grid';

function SOPLibraryContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['semua', ...getSOPCategories()];

  const filteredSOPs = searchQuery.trim()
    ? searchSOP(searchQuery)
    : selectedCategory === 'semua'
      ? sopData
      : sopData.filter(sop => sop.kategori === selectedCategory);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <BlurFade>
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Referensi Klinis</span>
          </motion.div>
          <h1 className="heading-xl mb-2">Perpustakaan SOP</h1>
          <p className="text-muted-foreground text-sm">
            Kumpulan Standar Prosedur Operasional Keperawatan untuk referensi praktik klinis.
          </p>
        </div>
      </BlurFade>

      {/* Search */}
      <BlurFade delay={0.1}>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onSubmit={handleSearch}
          className="flex gap-2 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari SOP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-2 focus:border-primary transition-colors"
            />
          </div>
        </motion.form>
      </BlurFade>

      {/* Category Filter */}
      <BlurFade delay={0.15}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category && !searchQuery ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery('');
                }}
                className={cn(
                  "transition-all duration-300",
                  selectedCategory === category && !searchQuery
                    ? "shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : ""
                )}
              >
                {category === 'semua' ? 'Semua' : category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </BlurFade>

      {/* SOP Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <ShimmerCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <BlurFade delay={0.2}>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {filteredSOPs.map((sop, index) => (
              <motion.div
                key={sop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <ResultCard
                  href={`/sop/${sop.slug}`}
                  icon={<FileText className="w-4 h-4" />}
                  badge={sop.kategori}
                  title={sop.nama}
                  description={sop.deskripsi}
                  gradient="from-sky-500 to-blue-500"
                />
              </motion.div>
            ))}
          </div>
        </BlurFade>
      )}

      {/* Empty State */}
      {filteredSOPs.length === 0 && !isLoading && (
        <BlurFade>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Tidak Ada SOP</h3>
            <p className="text-sm text-muted-foreground">
              Tidak ditemukan SOP dengan filter yang dipilih.
            </p>
          </motion.div>
        </BlurFade>
      )}

      {/* Stats */}
      <BlurFade delay={0.3}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/30 border-0 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <CardContent className="p-4 relative">
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-2xl font-bold text-primary">{sopData.length}</p>
                  <p className="text-xs text-muted-foreground">Total SOP</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <p className="text-2xl font-bold text-primary">{categories.length - 1}</p>
                  <p className="text-xs text-muted-foreground">Kategori</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-2xl font-bold text-primary">8+</p>
                  <p className="text-xs text-muted-foreground">Langkah/SOP</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </BlurFade>
    </div>
  );
}

export default function SOPPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <SOPLibraryContent />
    </Suspense>
  );
}
