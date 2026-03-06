'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getSOPById } from '@/data/sop';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  FileText,
  Package,
  ListOrdered,
  AlertTriangle,
  Stethoscope,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import * as Motion from '@/lib/motion';

export default function SOPDetailPage() {
  const params = useParams();
  const [sop, setSop] = useState<ReturnType<typeof getSOPById>>(undefined);

  useEffect(() => {
    const id = params.id as string;
    const found = getSOPById(id);
    setSop(found);
  }, [params.id]);

  if (!sop) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-8 w-64 bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back button */}
      <BlurFade>
        <Link href="/sop">
          <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Perpustakaan
            </Button>
          </motion.div>
        </Link>
      </BlurFade>

      {/* Header */}
      <BlurFade delay={0.1}>
        <Card className="mb-6 overflow-hidden border-sky-500/20">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-lg"
              >
                <FileText className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge variant="secondary" className="mb-2">
                    {sop.kategori}
                  </Badge>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="heading-lg mb-2"
                >
                  {sop.nama}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-muted-foreground"
                >
                  {sop.deskripsi}
                </motion.p>
              </div>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Indikasi & Persiapan */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Indikasi */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-base">Indikasi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {sop.indikasi.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-4 h-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-teal-600" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </BlurFade>

        {/* Persiapan Alat */}
        <BlurFade delay={0.25}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-base">Persiapan Alat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {sop.persiapanAlat.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Package className="w-2.5 h-2.5 text-amber-600" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </BlurFade>
      </div>

      {/* Langkah-langkah */}
      <BlurFade delay={0.3}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="mb-6 overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-md">
                  <ListOrdered className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-base">Langkah-langkah Prosedur</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sop.langkahLangkah.map((langkah, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        {i + 1}
                      </motion.div>
                      {i < sop.langkahLangkah.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          className="w-px bg-border mt-1 flex-1 min-h-[12px]"
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-3 pt-0.5">
                      <p className="text-sm leading-relaxed">
                        {langkah}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </BlurFade>

      {/* Hal-hal yang Perlu Diperhatikan */}
      <BlurFade delay={0.4}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md"
                >
                  <AlertTriangle className="w-4 h-4 text-white" />
                </motion.div>
                <CardTitle className="text-base text-amber-900 dark:text-amber-100">
                  Hal-hal yang Perlu Diperhatikan
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sop.perhatian.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200"
                  >
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </BlurFade>
    </div>
  );
}
