'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Activity, Calculator, BookOpen, Heart, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Spotlight } from '@/components/magicui/spotlight';
import { BentoGrid, FeatureCard, StepCard } from '@/components/magicui/bento-grid';
import { BlurFade, StaggerContainer } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import * as Motion from '@/lib/motion';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/diagnosis?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const features = [
    {
      title: 'Modul Diagnosis Pintar',
      description: 'Cari diagnosis SDKI, intervensi SIKI, dan luaran SLKI berdasarkan keluhan pasien.',
      href: '/diagnosis',
      icon: <Activity className="w-6 h-6" />,
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'Kalkulator Kesehatan',
      description: 'Hitung IMT, tetesan infus, dan GCS dengan cepat dan akurat.',
      href: '/kalkulator',
      icon: <Calculator className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Perpustakaan SOP',
      description: 'Kumpulan prosedur standar keperawatan seperti pemasangan NGT, kateter, dll.',
      href: '/sop',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-sky-500 to-blue-500',
    },
  ];

  const popularSearches = ['sesak napas', 'nyeri', 'luka', 'demam', 'batuk', 'bengkak'];

  const howItWorks = [
    {
      step: '01',
      title: 'Masukkan Keluhan',
      description: 'Ketik keluhan utama pasien di kolom pencarian',
    },
    {
      step: '02',
      title: 'Pilih Diagnosis',
      description: 'Sistem menampilkan diagnosis SDKI yang relevan',
    },
    {
      step: '03',
      title: 'Lihat Rencana',
      description: 'Dapatkan SIKI dan SLKI lengkap dengan tindakan',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Spotlight Effect */}
        <Spotlight
          className="-top-24 left-0 md:left-1/2 md:-top-32"
          fill="hsl(var(--primary))"
        />


        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 -z-10" />

        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center relative z-10">
          {/* Badge */}
          <BlurFade delay={0.1}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: Motion.easeOutBack }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Asisten Digital Keperawatan Indonesia</span>
            </motion.div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.2}>
            <h1 className="heading-display mb-4">
              Tentukan Diagnosis
              <br />
              <span className="heading-highlight">Lebih Cepat & Tepat</span>
            </h1>
          </BlurFade>

          {/* Subheadline */}
          <BlurFade delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Aplikasi pembantu untuk perawat dan mahasiswa keperawatan dalam menentukan
              SDKI, SIKI, dan SLKI berdasarkan keluhan pasien.
            </p>
          </BlurFade>

          {/* Search Bar */}
          <BlurFade delay={0.4}>
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <motion.div
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.4, ease: Motion.easeOut }}
                className="relative flex gap-2"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Apa keluhan pasien saat ini?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base bg-background border-2 focus:border-primary transition-colors"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button type="submit" size="lg" className="h-12 px-6">
                    Cari
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </BlurFade>

          {/* Popular searches */}
          <BlurFade delay={0.5}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              <span className="text-sm text-muted-foreground">Populer:</span>
              {popularSearches.slice(0, 4).map((term) => (
                <motion.button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-primary/10"
                >
                  {term}
                </motion.button>
              ))}
            </motion.div>
          </BlurFade>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[10%] w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-[10%] w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"
        />
      </section>

      {/* Features Grid - Bento Layout */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <BlurFade>
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Fitur Utama
              </motion.div>
              <h2 className="heading-lg mb-3">Alat Bantu Profesional</h2>
              <p className="text-muted-foreground">Berbagai fitur untuk mempermudah pekerjaan perawat</p>
            </div>
          </BlurFade>

          <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={feature.href} delay={0.1 * index}>
                <Link href={feature.href}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    gradient={feature.gradient}
                    className="h-full"
                  />
                </Link>
              </BlurFade>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <BlurFade>
            <div className="text-center mb-14">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Mudah & Cepat
              </motion.div>
              <h2 className="heading-lg mb-3">Cara Kerja</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Tiga langkah sederhana untuk mendapatkan rencana keperawatan yang tepat
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <BlurFade key={item.step} delay={0.1 * index}>
                <StepCard
                  number={item.step}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-gradient-to-b from-background to-muted/20">
        <BlurFade>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold">Sobat ASKEP</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground text-center sm:text-right"
            >
              Dibuat untuk membantu perawat dan mahasiswa keperawatan Indonesia
            </motion.p>
          </div>
        </BlurFade>
      </footer>
    </div>
  );
}
