"use client";

import Link from "next/link";
import { Droplets, Scale, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BentoGrid, FeatureCard } from "@/components/magicui/bento-grid";

export default function KalkulatorPage() {
  const calculators = [
    {
      title: "Tetesan Infus",
      description:
        "Hitung kecepatan tetesan infus (TPM) berdasarkan volume dan waktu pemberian.",
      href: "/kalkulator/infus",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-teal-500",
      gradient: "from-teal-500/10 to-teal-600/5",
    },
    {
      title: "Indeks Massa Tubuh (IMT)",
      description:
        "Kalkulator BMI/IMT untuk menentukan status gizi berdasarkan berat dan tinggi badan.",
      href: "/kalkulator/imt",
      icon: <Scale className="w-6 h-6" />,
      color: "bg-amber-500",
      gradient: "from-amber-500/10 to-orange-600/5",
    },
    {
      title: "Glasgow Coma Scale (GCS)",
      description:
        "Penilaian tingkat kesadaran pasien berdasarkan respons mata, verbal, dan motorik.",
      href: "/kalkulator/gcs",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-sky-500",
      gradient: "from-sky-500/10 to-blue-600/5",
    },
  ];

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
            <Brain className="w-3.5 h-3.5" />
            <span>Alat Klinis</span>
          </motion.div>
          <h1 className="heading-xl mb-2">Kalkulator Kesehatan</h1>
          <p className="text-muted-foreground text-sm">
            Alat hitung otomatis untuk mengurangi risiko human error dalam
            perhitungan klinis.
          </p>
        </div>
      </BlurFade>

      {/* Calculator Grid - Bento Layout */}
      <BlurFade delay={0.1}>
        <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {calculators.map((calc, index) => (
            <BlurFade key={calc.href} delay={0.05 * index}>
              <Link href={calc.href}>
                <FeatureCard
                  icon={calc.icon}
                  title={calc.title}
                  description={calc.description}
                  gradient={calc.gradient}
                  className="h-full"
                />
              </Link>
            </BlurFade>
          ))}
        </BentoGrid>
      </BlurFade>

      {/* Info Section */}
      <BlurFade delay={0.2}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/30 border-0 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <CardContent className="p-5 relative">
              <h3 className="font-semibold mb-3">Tips Penggunaan</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>
                    Selalu verifikasi hasil perhitungan dengan standar yang
                    berlaku di fasilitas Anda.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>
                    Untuk kalkulator tetesan infus, perhatikan faktor tetes yang
                    digunakan (makro/mikro).
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>
                    Hasil GCS harus tetap dikonfirmasi dengan pemeriksaan klinis
                    langsung.
                  </span>
                </motion.li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </BlurFade>
    </div>
  );
}
