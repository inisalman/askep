// SOP Keperawatan - Standar Prosedur Operasional
export interface SOP {
  id: string;
  slug: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  indikasi: string[];
  persiapanAlat: string[];
  langkahLangkah: string[];
  perhatian: string[];
}

export const sopData: SOP[] = [
  {
    id: "1",
    slug: "pemasangan-nasogastric-tube-ngt",
    nama: "Pemasangan Nasogastric Tube (NGT)",
    kategori: "Sistem Pencernaan",
    deskripsi:
      "Prosedur pemasangan selang melalui hidung ke lambung untuk pemberian nutrisi atau pengeluaran isi lambung.",
    indikasi: [
      "Pasien yang tidak mampu menelan",
      "Pemberian nutrisi enteral",
      "Dekompresi lambung",
      "Pengeluaran isi lambung",
    ],
    persiapanAlat: [
      "NGT dengan ukuran sesuai (12-18 Fr)",
      "Pelumas water-based",
      "Spuit 50 cc",
      "Stetoskop",
      "Plester hipoalergenik",
      "Bengkok",
      "Kapas dan air bersih",
      "Sarung tangan steril",
    ],
    langkahLangkah: [
      "Jelaskan prosedur kepada pasien",
      "Atur posisi pasien semi Fowler",
      "Ukur panjang NGT dari ujung hidung ke daun telinga dan prosesus xifoideus",
      "Lumasi ujung NGT dengan pelumas",
      "Masukkan NGT melalui lubang hidung yang lebih besar",
      "Minta pasien menelan saat NGT mencapai faring",
      "Lanjutkan pemasangan hingga mencapai panjang yang diukur",
      "Verifikasi posisi NGT dengan cara: aspirasi isi lambung dan/atau auskultasi epigastrium saat memasukkan 10-20 cc udara",
      "Fiksasi NGT dengan plester di hidung dan pipi",
      "Catat tindakan dalam dokumentasi keperawatan",
    ],
    perhatian: [
      "Jangan memaksakan pemasangan jika ada hambatan",
      "Pastikan NGT tidak di saluran napas",
      "Perhatikan tanda-tanda aspirasi",
      "Ganti fiksasi jika longgar",
    ],
  },
  {
    id: "2",
    slug: "pemasangan-kateter-uretra",
    nama: "Pemasangan Kateter Uretra",
    kategori: "Sistem Perkemihan",
    deskripsi:
      "Prosedur pemasangan selang kateter ke kandung kemih melalui uretra untuk drainase urine.",
    indikasi: [
      "Retensi urine",
      "Monitoring urine output ketat",
      "Persiapan operasi",
      "Inkontinensia berat",
    ],
    persiapanAlat: [
      "Set kateter steril (kateter Foley 14-18 Fr)",
      "Spuit 10 cc dan aquades untuk balon",
      "Larutan antiseptik",
      "Lubrikan jelly",
      "Sarung tangan steril",
      "Handuk steril",
      "Urine bag",
      "Kain kasa steril",
    ],
    langkahLangkah: [
      "Jelaskan prosedur dan jaga privasi pasien",
      "Posisikan pasien dorsal recumbent",
      "Desinfeksi area perineal",
      "Kenakan sarung tangan steril",
      "Lapisi area dengan handuk steril",
      "Lumasi ujung kateter",
      "Pria: Tarik penis 90 derajat, masukkan kateter 15-20 cm",
      "Wanita: Masukkan kateter 5-7.5 cm ke meatus uretra",
      "Inflasi balon dengan aquades sesuai ukuran",
      "Tarik pelan-pelan hingga balon menempel di leher kandung kemih",
      "Hubungkan dengan urine bag",
      "Fiksasi kateter di paha",
      "Catat hasil tindakan",
    ],
    perhatian: [
      "Teknik steril harus dijaga ketat",
      "Jangan memaksakan jika ada hambatan",
      "Perhatikan tanda-tanda infeksi",
      "Monitor urine output",
    ],
  },
  {
    id: "3",
    slug: "pemberian-enema",
    nama: "Pemberian Enema",
    kategori: "Sistem Pencernaan",
    deskripsi:
      "Prosedur pemasukan cairan ke rektum dan kolon untuk merangsang defekasi.",
    indikasi: [
      "Konstipasi",
      "Persiapan pemeriksaan kolon",
      "Persiapan operasi abdomen",
    ],
    persiapanAlat: [
      "Set enema (irigator, selang, kanula)",
      "Cairan enema sesuai advis",
      "Lubrikan jelly",
      "Sarung tangan",
      "Bengkok",
      "Tissue",
      "Baskom berisi air hangat",
    ],
    langkahLangkah: [
      "Jelaskan prosedur dan jaga privasi",
      "Posisikan pasien sims left lateral",
      "Isi irrigator dengan cairan enema",
      "Gantung irrigator 40-60 cm di atas tempat tidur",
      "Keluarkan udara dari selang",
      "Lumasi ujung kanula",
      "Minta pasien napas dalam dan masukkan kanula 7-10 cm",
      "Alirkan cairan pelan-pelan",
      "Tutup klem jika pasien merasa ingin buang air",
      "Setelah selesai, instruksikan pasien menahan 5-10 menit",
      "Bantu pasien ke kamar kecil atau berikan potty",
      "Catat hasil tindakan",
    ],
    perhatian: [
      "Jika ada nyeri, hentikan sementara aliran cairan",
      "Perhatikan kondisi pasien secara umum",
      "Jangan pada pasien dengan kondisi abdominal akut",
    ],
  },
  {
    id: "4",
    slug: "perawatan-luka",
    nama: "Perawatan Luka",
    kategori: "Integumen",
    deskripsi:
      "Prosedur pembersihan dan penutupan luka untuk mencegah infeksi dan mempercepat penyembuhan.",
    indikasi: [
      "Luka post operasi",
      "Luka dekubitus",
      "Luka traumatik",
      "Ulkus diabetik",
    ],
    persiapanAlat: [
      "Set balutan steril",
      "Larutan NaCl 0.9%",
      "Antiseptik (povidone iodine)",
      "Kasa steril",
      "Plester/medipore",
      "Sarung tangan steril",
      "Gunting dan pinset steril",
      "Kantong plastik untuk limbah",
    ],
    langkahLangkah: [
      "Jelaskan prosedur pada pasien",
      "Cuci tangan dan kenakan sarung tangan",
      "Lepas balutan lama dengan hati-hati",
      "Observasi kondisi luka (warna, bau, eksudat)",
      "Bersihkan luka dari dalam ke luar dengan NaCl",
      "Keringkan area sekitar luka",
      "Oleskan antiseptik jika diperlukan",
      "Tutup luka dengan kasa steril",
      "Fiksasi dengan plester",
      "Rapikan pasien dan catat kondisi luka",
    ],
    perhatian: [
      "Jaga teknik steril",
      "Observasi tanda-tanda infeksi",
      "Kaji kebutuhan penggantian balutan",
    ],
  },
  {
    id: "5",
    slug: "pemberian-oksigenasi",
    nama: "Pemberian Oksigenasi",
    kategori: "Sistem Respirasi",
    deskripsi:
      "Prosedur pemberian oksigen tambahan untuk memenuhi kebutuhan oksigen tubuh.",
    indikasi: [
      "Hipoksemia",
      "Dispnea",
      "SpO2 < 94%",
      "Gangguan pertukaran gas",
    ],
    persiapanAlat: [
      "Tabung oksigen dengan regulator",
      "Nasal kanul atau masker oksigen",
      "Flowmeter",
      "Aquadest untuk humidifier",
      "Plester",
    ],
    langkahLangkah: [
      "Jelaskan prosedur pada pasien",
      "Cek kondisi alat dan isi tabung",
      "Isi humidifier dengan aquadest",
      "Atur flow sesuai advis",
      "Pasang nasal kanul atau masker",
      "Fiksasi dengan plester jika perlu",
      "Monitor SpO2 dan respons pasien",
      "Catat tindakan dan hasil observasi",
    ],
    perhatian: [
      "Monitor kelembaban dan kondisi membran mukosa",
      "Hindari penggunaan jangka panjang dengan konsentrasi tinggi",
      "Perhatikan keamanan (bahan bakar, api)",
    ],
  },
  {
    id: "6",
    slug: "suction-endotrakeal",
    nama: "Suction Endotrakeal",
    kategori: "Sistem Respirasi",
    deskripsi:
      "Prosedur pengeluaran sekret dari jalan napas menggunakan kateter suction.",
    indikasi: [
      "Penumpukan sekret di jalan napas",
      "Pasien tidak mampu batuk efektif",
      "Pasien dengan ETT/trakeostomi",
    ],
    persiapanAlat: [
      "Mesin suction",
      "Kateter suction steril (ukuran sesuai)",
      "Sarung tangan steril",
      "Larutan NaCl steril",
      "Oksigen backup",
      "Bengkok",
    ],
    langkahLangkah: [
      "Jelaskan prosedur pada pasien",
      "Hiperoksigenasi pasien sebelum suction",
      "Atur tekanan suction 80-120 mmHg",
      "Kenakan sarung tangan steril",
      "Lumasi kateter dengan NaCl",
      "Masukkan kateter tanpa suction",
      "Aktifkan suction sambil memutar dan menarik kateter",
      "Durasi suction maksimal 10-15 detik",
      "Bilas kateter dengan NaCl",
      "Ulangi jika perlu (maksimal 3 kali)",
      "Berikan oksigenasi kembali",
      "Catat hasil suction (karakteristik sekret)",
    ],
    perhatian: [
      "Hindari suction berlebihan",
      "Perhatikan SpO2 selama prosedur",
      "Jika pasien dengan ETT, gunakan teknik steril ketat",
    ],
  },
  {
    id: "7",
    slug: "pemasangan-infus",
    nama: "Pemasangan Infus",
    kategori: "Sistem Kardiovaskular",
    deskripsi:
      "Prosedur pemasangan akses intravena untuk pemberian cairan dan obat.",
    indikasi: [
      "Dehidrasi",
      "Pemberian obat IV",
      "Kondisi darurat",
      "Nutrisi parenteral",
    ],
    persiapanAlat: [
      "Abbocath/IV catheter (ukuran sesuai)",
      "Set infus lengkap",
      "Cairan infus sesuai advis",
      "Torniquet",
      "Kapas alkohol",
      "Plester",
      "Sarung tangan",
      "Kassa steril",
    ],
    langkahLangkah: [
      "Jelaskan prosedur pada pasien",
      "Pilih vena yang tepat",
      "Pasang torniquet proksimal",
      "Desinfeksi area penusukan",
      "Tegangkan kulit dengan tangan non-dominan",
      "Tusuk vena dengan sudut 15-30 derajat",
      "Lihat flashback darah",
      "Tarik stylet sambil mendorong kateter",
      "Lepaskan torniquet",
      "Hubungkan dengan set infus",
      "Fiksasi dengan plester",
      "Atur kecepatan tetesan sesuai advis",
      "Catat tindakan",
    ],
    perhatian: [
      "Perhatikan aseptik",
      "Pilih vena distal dulu",
      "Hindari area yang bengkak atau infeksi",
      "Monitor tanda-tanda infiltrasi",
    ],
  },
  {
    id: "8",
    slug: "pemeriksaan-gcs-glasgow-coma-scale",
    nama: "Pemeriksaan GCS (Glasgow Coma Scale)",
    kategori: "Sistem Saraf",
    deskripsi: "Pemeriksaan standar untuk menilai tingkat kesadaran pasien.",
    indikasi: [
      "Penilaian tingkat kesadaran",
      "Monitoring kondisi neurologis",
      "Pasien dengan cedera kepala",
      "Pasien stroke",
    ],
    persiapanAlat: [
      "Pulpenlight",
      "Alat untuk rangsang nyeri (jari, benda tumpul)",
    ],
    langkahLangkah: [
      "Kaji respons membuka mata (E): spontan=4, suara=3, nyeri=2, tidak ada=1",
      "Kaji respons verbal (V): orientasi baik=5, bingung=4, kata tidak jelas=3, suara tidak jelas=2, tidak ada=1",
      "Kaji respons motorik (M): mengikuti perintah=6, lokalisasi nyeri=5, withdraw=4, fleksi abnormal=3, ekstensi=2, tidak ada=1",
      "Jumlahkan skor E+V+M (total 3-15)",
      "Catat hasil pemeriksaan",
    ],
    perhatian: [
      "Pastikan pasien dalam kondisi optimal untuk pemeriksaan",
      "Hindari rangsang nyeri berlebihan",
      "Dokumentasi terperinci penting untuk monitoring",
    ],
  },
];

export function searchSOP(query: string): SOP[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return sopData;

  return sopData.filter(
    (sop) =>
      sop.nama.toLowerCase().includes(normalizedQuery) ||
      sop.kategori.toLowerCase().includes(normalizedQuery) ||
      sop.deskripsi.toLowerCase().includes(normalizedQuery),
  );
}

export function getSOPById(id: string): SOP | undefined {
  return sopData.find((s) => s.id === id || s.slug === id);
}

export function getSOPBySlug(slug: string): SOP | undefined {
  return sopData.find((s) => s.slug === slug);
}

export function getSOPCategories(): string[] {
  return [...new Set(sopData.map((s) => s.kategori))];
}
