PRD: NurseBuddy (Aplikasi Asisten Digital Keperawatan)
1. Ringkasan Proyek
Aplikasi web berbasis Next.js yang dirancang untuk membantu perawat dan mahasiswa keperawatan dalam menentukan diagnosis keperawatan (SDKI), merencanakan intervensi (SIKI), dan menetapkan luaran (SLKI) secara cepat berdasarkan keluhan pasien, serta menyediakan alat bantu hitung klinis.

2. Target Pengguna
- Mahasiswa Keperawatan: Membantu proses belajar dan penyusunan laporan ASKEP.
- Perawat Klinis: Referensi cepat di bangsal rumah sakit untuk menentukan intervensi yang tepat.

3. Fitur Utama (MVP)
A. Modul Diagnosis Pintar (SDKI, SIKI, SLKI)
Ini adalah fitur inti yang Anda minta. Alurnya adalah:
- Search by Complaint: User memasukkan kata kunci keluhan (misal: "sesak napas").
- Diagnosis Match: Sistem menampilkan daftar Diagnosis SDKI yang relevan (misal: Pola Napas Tidak Efektif).
- Detail Diagnosis: Saat diklik, muncul detail diagnosis termasuk:
  - SLKI (Luaran): Apa target yang ingin dicapai.
  - SIKI (Intervensi): Tindakan apa yang harus dilakukan (Observasi, Terapeutik, Edukasi, Kolaborasi).

B. Kalkulator Kesehatan (Nursing Tools)
Alat hitung otomatis untuk mengurangi risiko human error:
- Kalkulator Tetesan Infus: Menghitung tetes per menit (TPM) berdasarkan volume dan waktu.
- Indeks Massa Tubuh (IMT/BMI): Input BB dan TB.
- GCS (Glasgow Coma Scale): Menghitung tingkat kesadaran secara cepat.

C. Perpustakaan SOP Keperawatan
Daftar prosedur standar (seperti pemasangan NGT, Kateter, dsb) dalam format teks atau PDF.

4. Alur Pengguna (User Flow)
- Halaman Utama: Search bar besar dengan teks "Apa keluhan pasien saat ini?".
- Hasil Pencarian: List kartu (cards) yang berisi judul diagnosis SDKI.
- Halaman Rencana Keperawatan: Tampilan split-screen atau tabbed view antara SLKI dan SIKI agar perawat bisa melihat target dan tindakan secara bersamaan.

5. Spesifikasi Teknis (Next.js Stack)
- Framework: Next.js 14+ (App Router) untuk performa dan SEO yang baik.
- Styling: Tailwind CSS (Gunakan warna yang "tenang" seperti medis: Slate, Blue, atau Teal).
- Database: Database-less / Static Data

6. Contoh Formula Kalkulator (Teknis)
Untuk kalkulator tetesan infus, kita akan menggunakan rumus standar:
$$\text{Tetes per Menit (TPM)} = \frac{\text{Kebutuhan Cairan} \times \text{Faktor Tetes}}{\text{Lama Pemberian (Jam)} \times 60}$$

7. Rencana Pengembangan (Roadmap)
- Fase 1: Database dasar SDKI dan fitur pencarian keluhan (fokus utama).
- Fase 2: Implementasi kalkulator kesehatan dan SOP.
- Fase 3: Fitur "Simpan PDF" agar mahasiswa bisa langsung mengunduh hasil ASKEP untuk tugas mereka.
