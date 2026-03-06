'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Eye, MessageCircle, Hand, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import * as Motion from '@/lib/motion';

type EyeResponse = 1 | 2 | 3 | 4;
type VerbalResponse = 1 | 2 | 3 | 4 | 5;
type MotorResponse = 1 | 2 | 3 | 4 | 5 | 6;

interface GCSResult {
  total: number;
  eye: EyeResponse;
  verbal: VerbalResponse;
  motor: MotorResponse;
  category: {
    label: string;
    bgClass: string;
  };
};

const getGCSCategory = (total: number): GCSResult['category'] => {
  if (total <= 8) {
    return { label: 'Koma Berat', bgClass: 'bg-red-500' };
  } else if (total <= 12) {
    return { label: 'Koma Sedang', bgClass: 'bg-amber-500' };
  } else if (total <= 14) {
    return { label: 'Koma Ringan', bgClass: 'bg-sky-500' };
  } else {
    return { label: 'Sadari Penuh', bgClass: 'bg-teal-500' };
  }
};

export default function GCSCalculatorPage() {
  const [eye, setEye] = useState<EyeResponse>(4);
  const [verbal, setVerbal] = useState<VerbalResponse>(5);
  const [motor, setMotor] = useState<MotorResponse>(6);
  const [result, setResult] = useState<GCSResult | null>(null);

  useEffect(() => {
    const total = eye + verbal + motor;
    setResult({
      total,
      eye,
      verbal,
      motor,
      category: getGCSCategory(total),
    });
  }, [eye, verbal, motor]);

  const resetForm = () => {
    setEye(4);
    setVerbal(5);
    setMotor(6);
  };

  const eyeOptions: { value: EyeResponse; label: string }[] = [
    { value: 4, label: 'Spontan membuka mata' },
    { value: 3, label: 'Membuka mata bila dipanggil' },
    { value: 2, label: 'Membuka mata bila diberi rangsang nyeri' },
    { value: 1, label: 'Tidak membuka mata' },
  ];

  const verbalOptions: { value: VerbalResponse; label: string }[] = [
    { value: 5, label: 'Orientasi baik' },
    { value: 4, label: 'Bingung' },
    { value: 3, label: 'Kata-kata tidak jelas' },
    { value: 2, label: 'Suara tidak jelas' },
    { value: 1, label: 'Tidak ada respons verbal' },
  ];

  const motorOptions: { value: MotorResponse; label: string }[] = [
    { value: 6, label: 'Mengikuti perintah' },
    { value: 5, label: 'Melokalisasi nyeri' },
    { value: 4, label: 'Withdraw' },
    { value: 3, label: 'Fleksi abnormal (dekortikasi)' },
    { value: 2, label: 'Ekstensi (deserebrasi)' },
    { value: 1, label: 'Tidak ada respons motorik' },
  ];

  const gcsScale = [
    { range: '3 - 8', label: 'Koma Berat', color: 'bg-red-500' },
    { range: '9 - 12', label: 'Koma Sedang', color: 'bg-amber-500' },
    { range: '13 - 14', label: 'Koma Ringan', color: 'bg-sky-500' },
    { range: '15', label: 'Sadari Penuh', color: 'bg-teal-500' },
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
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg"
          >
            <Brain className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-lg"
            >
              Glasgow Coma Scale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              Penilaian tingkat kesadaran
            </motion.p>
          </div>
        </div>
      </BlurFade>

      {/* Result Preview */}
      <AnimatePresence mode="wait">
        {result && (
          <BlurFade key={result.total} delay={0.1}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className={cn('text-white mb-6 overflow-hidden relative', result.category.bgClass)}>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <CardContent className="p-4 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white/80 text-sm mb-1"
                      >
                        Total GCS
                      </motion.p>
                      <motion.div
                        key={`total-${result.total}`}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-4xl font-bold">{result.total}</span>
                        <span className="text-white/80">/ 15</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-sm mt-2 inline-flex px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm"
                      >
                        {result.category.label}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-right text-sm text-white/80"
                    >
                      <p>E: <span className="font-bold text-base">{result.eye}</span></p>
                      <p>V: <span className="font-bold text-base">{result.verbal}</span></p>
                      <p>M: <span className="font-bold text-base">{result.motor}</span></p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        )}
      </AnimatePresence>

      {/* Eye Response */}
      <BlurFade delay={0.2}>
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-md">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <Label className="text-sm font-medium">Respons Membuka Mata (E)</Label>
            </div>
            <div className="space-y-1.5">
              {eyeOptions.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setEye(option.value)}
                  className={cn(
                    'w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300',
                    eye === option.value
                      ? 'bg-sky-50 dark:bg-sky-950/30 border-2 border-sky-500 text-sky-700 dark:text-sky-400 shadow-md'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted border-2 border-transparent'
                  )}
                >
                  <span className="font-bold mr-2 bg-muted-foreground/20 px-2 py-0.5 rounded">{option.value}</span>
                  {option.label}
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Verbal Response */}
      <BlurFade delay={0.25}>
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <Label className="text-sm font-medium">Respons Verbal (V)</Label>
            </div>
            <div className="space-y-1.5">
              {verbalOptions.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setVerbal(option.value)}
                  className={cn(
                    'w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300',
                    verbal === option.value
                      ? 'bg-teal-50 dark:bg-teal-950/30 border-2 border-teal-500 text-teal-700 dark:text-teal-400 shadow-md'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted border-2 border-transparent'
                  )}
                >
                  <span className="font-bold mr-2 bg-muted-foreground/20 px-2 py-0.5 rounded">{option.value}</span>
                  {option.label}
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Motor Response */}
      <BlurFade delay={0.3}>
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                <Hand className="w-4 h-4 text-white" />
              </div>
              <Label className="text-sm font-medium">Respons Motorik (M)</Label>
            </div>
            <div className="space-y-1.5">
              {motorOptions.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setMotor(option.value)}
                  className={cn(
                    'w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300',
                    motor === option.value
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500 text-amber-700 dark:text-amber-400 shadow-md'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted border-2 border-transparent'
                  )}
                >
                  <span className="font-bold mr-2 bg-muted-foreground/20 px-2 py-0.5 rounded">{option.value}</span>
                  {option.label}
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Reset Button */}
      <BlurFade delay={0.35}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="outline" className="w-full mb-6" onClick={resetForm}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset ke Nilai Normal
          </Button>
        </motion.div>
      </BlurFade>

      {/* GCS Scale Reference */}
      <BlurFade delay={0.4}>
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-3">Interpretasi Total GCS</p>
            <div className="space-y-2">
              {gcsScale.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={cn('w-3 h-3 rounded-full', item.color)}
                  />
                  <span className="text-muted-foreground w-20 font-mono text-xs">{item.range}</span>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  );
}
