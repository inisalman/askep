'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, Calculator, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import * as Motion from '@/lib/motion';

type BMICategory = {
  label: string;
  bgClass: string;
  description: string;
};

const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) {
    return {
      label: 'Kurus',
      bgClass: 'bg-sky-500',
      description: 'Berat badan kurang. Pertimbangkan untuk meningkatkan asupan nutrisi.',
    };
  } else if (bmi < 25) {
    return {
      label: 'Normal',
      bgClass: 'bg-teal-500',
      description: 'Berat badan ideal. Pertahankan pola hidup sehat.',
    };
  } else if (bmi < 30) {
    return {
      label: 'Gemuk',
      bgClass: 'bg-amber-500',
      description: 'Kelebihan berat badan. Pertimbangkan diet dan olahraga teratur.',
    };
  } else {
    return {
      label: 'Obesitas',
      bgClass: 'bg-red-500',
      description: 'Obesitas. Konsultasikan dengan tenaga kesehatan untuk penatalaksanaan.',
    };
  }
};

export default function IMTCalculatorPage() {
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [hasil, setHasil] = useState<{
    bmi: number;
    category: BMICategory;
  } | null>(null);

  const hitungIMT = () => {
    const bb = parseFloat(berat);
    const tb = parseFloat(tinggi) / 100;

    if (!bb || !tb || tb <= 0) {
      setHasil(null);
      return;
    }

    const bmi = bb / (tb * tb);
    const category = getBMICategory(bmi);

    setHasil({
      bmi: Math.round(bmi * 10) / 10,
      category,
    });
  };

  const resetForm = () => {
    setBerat('');
    setTinggi('');
    setHasil(null);
  };

  const bmiScale = [
    { range: '< 18.5', label: 'Kurus', color: 'bg-sky-500' },
    { range: '18.5 - 24.9', label: 'Normal', color: 'bg-teal-500' },
    { range: '25 - 29.9', label: 'Gemuk', color: 'bg-amber-500' },
    { range: '≥ 30', label: 'Obesitas', color: 'bg-red-500' },
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
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg"
          >
            <Scale className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-lg"
            >
              Indeks Massa Tubuh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              Kalkulator IMT/BMI
            </motion.p>
          </div>
        </div>
      </BlurFade>

      {/* Calculator Form */}
      <BlurFade delay={0.2}>
        <Card className="mb-6">
          <CardContent className="p-5 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="berat">Berat Badan (kg)</Label>
              <Input
                id="berat"
                type="number"
                value={berat}
                onChange={(e) => setBerat(e.target.value)}
                placeholder="Contoh: 65"
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tinggi">Tinggi Badan (cm)</Label>
              <Input
                id="tinggi"
                type="number"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                placeholder="Contoh: 170"
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button onClick={hitungIMT} className="w-full gap-2">
                  <Calculator className="w-4 h-4" />
                  Hitung IMT
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
        {hasil && (
          <BlurFade delay={0.1}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className={cn('text-white mb-6 overflow-hidden relative', hasil.category.bgClass)}>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <CardContent className="p-5 relative">
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/80 text-sm mb-1"
                  >
                    Indeks Massa Tubuh
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="flex items-baseline gap-2 mb-3"
                  >
                    <span className="text-5xl font-bold">{hasil.bmi}</span>
                    <span className="text-white/80">kg/m²</span>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-3 backdrop-blur-sm"
                  >
                    {hasil.category.label}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/90 text-sm"
                  >
                    {hasil.category.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        )}
      </AnimatePresence>

      {/* BMI Scale */}
      <BlurFade delay={0.3}>
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-3">Klasifikasi IMT (WHO)</p>
            <div className="space-y-2">
              {bmiScale.map((item, i) => (
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
                  <span className="text-muted-foreground w-24 font-mono text-xs">{item.range}</span>
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
