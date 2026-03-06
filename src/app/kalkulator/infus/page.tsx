'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Droplets, Calculator, RotateCcw, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import * as Motion from '@/lib/motion';

export default function InfusCalculatorPage() {
  const [volume, setVolume] = useState('');
  const [waktu, setWaktu] = useState('');
  const [faktor, setFaktor] = useState('20');
  const [hasil, setHasil] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const hitungTPM = () => {
    const v = parseFloat(volume);
    const w = parseFloat(waktu);
    const f = parseFloat(faktor);

    if (!v || !w || !f || w <= 0) {
      setHasil(null);
      return;
    }

    const tpm = (v * f) / (w * 60);
    setHasil(Math.round(tpm * 10) / 10);
  };

  const resetForm = () => {
    setVolume('');
    setWaktu('');
    setFaktor('20');
    setHasil(null);
  };

  const faktorOptions = [
    { value: '10', label: 'Mikro (10)' },
    { value: '15', label: 'Standar (15)' },
    { value: '20', label: 'Makro (20)' },
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      {/* Back button */}
      <BlurFade>
        <Link href="/kalkulator">
          <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Button>
          </motion.div>
        </Link>
      </BlurFade>

      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg"
          >
            <Droplets className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-lg"
            >
              Tetesan Infus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              Hitung Tetes Per Menit (TPM)
            </motion.p>
          </div>
        </div>
      </BlurFade>

      {/* Calculator Form */}
      <BlurFade delay={0.2}>
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-5 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="volume">Volume Cairan (mL)</Label>
              <Input
                id="volume"
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="Contoh: 500"
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waktu">Lama Pemberian (jam)</Label>
              <Input
                id="waktu"
                type="number"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
                placeholder="Contoh: 8"
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label>Faktor Tetes (gtt/mL)</Label>
              <div className="grid grid-cols-3 gap-2">
                {faktorOptions.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="button"
                      variant={faktor === option.value ? 'default' : 'outline'}
                      onClick={() => setFaktor(option.value)}
                      className={cn(
                        "w-full text-xs sm:text-sm transition-all duration-300",
                        faktor === option.value
                          ? "shadow-md hover:shadow-lg"
                          : ""
                      )}
                    >
                      {option.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button onClick={hitungTPM} className="w-full gap-2">
                  <Calculator className="w-4 h-4" />
                  Hitung
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="icon" onClick={resetForm}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Result */}
      <AnimatePresence>
        {hasil !== null && (
          <BlurFade delay={0.1}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white mb-6 overflow-hidden relative">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <CardContent className="p-5 relative">
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-teal-100 text-sm mb-1"
                  >
                    Tetesan Per Menit (TPM)
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="flex items-baseline gap-2 mb-3"
                  >
                    <span className="text-5xl font-bold">{hasil}</span>
                    <span className="text-teal-100">gtt/menit</span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-teal-100 text-sm"
                  >
                    Atur kecepatan tetesan infus menjadi sekitar {Math.round(hasil)} tetes per menit.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <BlurFade delay={0.3}>
        <div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
              className="text-muted-foreground gap-2"
            >
              <Info className="w-4 h-4" />
              Informasi Rumus
            </Button>
          </motion.div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <Card className="mt-3">
                  <CardContent className="p-4 text-sm">
                    <p className="font-medium mb-2">Rumus:</p>
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-3 font-mono text-center mb-3">
                      TPM = (Volume × Faktor) / (Waktu × 60)
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><strong>TPM:</strong> Tetes Per Menit</li>
                      <li><strong>Volume:</strong> Jumlah cairan dalam mL</li>
                      <li><strong>Faktor:</strong> Jumlah tetes per mL</li>
                      <li><strong>Waktu:</strong> Durasi pemberian dalam jam</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BlurFade>
    </div>
  );
}
