// Data lengkap 149 Diagnosis Keperawatan SDKI
import type { Diagnosis } from './diagnosis';

export const allDiagnosesData: Diagnosis[] = [
{
  "id": "0001",
  "slug": "bersihan-jalan-napas-tidak-efektif",
  "kode": "D.0001",
  "nama": "Bersihan Jalan Napas Tidak Efektif",
  "definisi": "ketidakmampuan membersihkan sekret atau obstruksi jalan nafas untuk mempertahankan jalan nafas tetap paten.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "batuk",
    "dahak",
    "lendir",
    "sesak",
    "wheezing",
    "rongkohan",
    "sekre"
  ],
  "slki": {
    "kode": "L.01002",
    "nama": "Bersihan Jalan Napas Meningkat",
    "kriteria": [
      "Batuk efektif meningkat",
      "Produksi sputum menurun",
      "Mengi menurun",
      "Wheezing menurun",
      "Mekonium (pada neonatus) menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.01006",
      "nama": "Latihan Batuk Efektif"
    },
    {
      "kode": "I.01011",
      "nama": "Manajemen Jalan Napas"
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi"
    }
  ]
},
{
  "id": "0002",
  "slug": "gangguan-penyapihan-ventilator",
  "kode": "D.0002",
  "nama": "Gangguan Penyapihan Ventilator",
  "definisi": "ketidakmampuan beradaptasi dengan pengurangan bantuan ventilator mekanik yang dapat menghambat dan memperlama proses penyapihan.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "ventilator",
    "weaning",
    "sesak",
    "nafas cepat"
  ],
  "slki": {
    "kode": "L.01002",
    "nama": "Penyapihan ventilator meningkat",
    "kriteria": [
      "Frekuensi napas membaik",
      "Penggunaan otot bantu napas menurun",
      "Napas megap-megap menurun",
      "Kesingkronan bantuan ventilator meningkat",
      "Napas dangkal menurun",
      "Agitasi menurun",
      "Nilai gas darah arteri membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.01021",
      "nama": "Penyapihan Ventilasi Mekanik"
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi"
    }
  ]
},
{
  "id": "0003",
  "slug": "gangguan-pertukaran-gas",
  "kode": "D.0003",
  "nama": "Gangguan Pertukaran Gas",
  "definisi": "kelebihan atau kekurangan oksigenasi dan/atau eliminasi karbondioksida pada membran alveolus-kapiler.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "sianosis",
    "biru",
    "hipoksia",
    "spO2"
  ],
  "slki": {
    "kode": "L.01003",
    "nama": "Pertukaran gas meningkat",
    "kriteria": [
      "Dispnea menurun",
      "Bunyi napas tambahan menurun",
      "Takikardia menurun",
      "PCO2 membaik",
      "PO2 membaik",
      "PH arteri membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi"
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Oksigen"
    }
  ]
},
{
  "id": "0004",
  "slug": "gangguan-ventilasi-spontan",
  "kode": "D.0004",
  "nama": "Gangguan Ventilasi Spontan",
  "definisi": "penurunan cadangan energi yang mengakibatkan pasien tidak mampu bernapas secara adekuat.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "lemah",
    "ventilasi"
  ],
  "slki": {
    "kode": "L.01007",
    "nama": "Ventilasi spontan meningkat",
    "kriteria": [
      "Dispnea menurun",
      "Penggunaan otot bantu napas menurun",
      "Volume tidak membaik",
      "PCO2 membaik",
      "PO2 membaik",
      "SaO2 membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.01002",
      "nama": "Dukungan Ventilasi"
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi"
    }
  ]
},
{
  "id": "0005",
  "slug": "pola-napas-tidak-efektif",
  "kode": "D.0005",
  "nama": "Pola Napas Tidak Efektif",
  "definisi": "adalah inspirasi dan/atau ekspirasi yang tidak memberikan ventilasi adekuat.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "dyspnea",
    "nafas",
    "pernapasan"
  ],
  "slki": {
    "kode": "L.01004",
    "nama": "Pola napas membaik",
    "kriteria": [
      "Dispnea menurun",
      "Penggunaan otot bantu napas menurun",
      "Pemanjangan fase ekspirasi menurun",
      "Frekuensi napas membaik",
      "Kedalaman napas membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.01011",
      "nama": "Manajemen Jalan Napas"
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi"
    }
  ]
},
{
  "id": "0006",
  "slug": "risiko-aspirasi",
  "kode": "D.0006",
  "nama": "Risiko Aspirasi",
  "definisi": "adalah risiko mengalami masuknya sekresi gastrointestinal, sekresi orofaring, benda cair atau padat ke dalam saluran trakeobronkhial akibat disfungsi mekanisme protektif saluran napas.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "aspirasi",
    "tersedak",
    "menelan"
  ],
  "slki": {
    "kode": "L.01006",
    "nama": "Tingkat aspirasi menurun",
    "kriteria": [
      "Tingkat kesadaran meningkat",
      "Kemampuan menelan meningkat",
      "Dispnea menurun",
      "Kelemahan otot menurun",
      "Akumulasi sekret menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.01011",
      "nama": "Manajemen Jalan Napas"
    },
    {
      "kode": "I.01018",
      "nama": "Pencegahan Aspirasi"
    }
  ]
},
{
  "id": "0007",
  "slug": "gangguan-sirkulasi-spontan",
  "kode": "D.0007",
  "nama": "Gangguan Sirkulasi Spontan",
  "definisi": "ketidakmampuan untuk mempertahankan sirkulasi yang adekuat untuk menunjang kehidupan.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "sirkulasi",
    "jantung",
    "nadi",
    "tekanan darah"
  ],
  "slki": {
    "kode": "L.02015",
    "nama": "Sirkulasi spontan meningkat",
    "kriteria": [
      "Tingkat kesadaran meningkat",
      "Frekuensi nadi membaik",
      "Tekanan darah membaik",
      "Frekuensi napas membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02038",
      "nama": "Manajemen Defibrilasi"
    },
    {
      "kode": "I.03139",
      "nama": "Resusitasi Cairan"
    },
    {
      "kode": "I.02083",
      "nama": "Resusitasi Jantung Paru"
    }
  ]
},
{
  "id": "0008",
  "slug": "penurunan-curah-jantung",
  "kode": "D.0008",
  "nama": "Penurunan Curah Jantung",
  "definisi": "ketidakmampuan jantung memompa darah untuk memenuhi kebutuhan metabolisme tubuh.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "jantung",
    "curah jantung",
    "gagal jantung",
    "palpitasi"
  ],
  "slki": {
    "kode": "L.02008",
    "nama": "Curah jantung meningkat",
    "kriteria": [
      "Kekuatan nadi perifer meningkat",
      "Ejection fraction (EF) meningkat",
      "Palpitasi menurun",
      "Bradikardia menurun",
      "Takikardia menurun",
      "Gambaran EKG Aritmia menurun",
      "Lelah menurun",
      "Edema menurun",
      "Distensi vena jugularis menurun",
      "Dispnea menurun",
      "Oliguria menurun",
      "Pucat/sianosis menurun",
      "Paroximal nocturnal dyspnea (PND) menurun",
      "Ortopnea menurun",
      "Batuk menurun",
      "Suara jantung S3 menurun",
      "Suara jantung S4 menurun",
      "Tekanan darah membaik",
      "Pengisian kapiler membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02075",
      "nama": "Perawatan Jantung"
    },
    {
      "kode": "I.02076",
      "nama": "Perawatan Jantung Akut"
    }
  ]
},
{
  "id": "0009",
  "slug": "perfusi-perifer-tidak-efektif",
  "kode": "D.0009",
  "nama": "Perfusi Perifer Tidak Efektif",
  "definisi": "penurunan sirkulasi darah pada level kapiler yang dapat mengganggu metabolisme tubuh.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02011",
    "nama": "Perfusi perifer meningkat",
    "kriteria": [
      "Kekuatan nadi perifer meningkat",
      "Warna kulit pucat menurun",
      "Pengisian kapiler membaik",
      "Akral membaik",
      "Turgor kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02079",
      "nama": "Perawatan Sirkulasi"
    },
    {
      "kode": "I.06195",
      "nama": "Manajemen Sensasi Perifer"
    }
  ]
},
{
  "id": "0010",
  "slug": "risiko-gangguan-sirkulasi-spontan",
  "kode": "D.0010",
  "nama": "Risiko Gangguan Sirkulasi Spontan",
  "definisi": ": “sirkulasi spontan meningkat.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "sirkulasi",
    "jantung",
    "nadi",
    "tekanan darah"
  ],
  "slki": {
    "kode": "L.02015",
    "nama": "Sirkulasi spontan meningkat",
    "kriteria": [
      "Tingkat kesadaran meningkat",
      "Saturasi oksigen meningkat",
      "Gambaran EKG aritmia menurun",
      "Frekuensi nadi membaik",
      "Tekanan darah membaik",
      "Frekuensi napas membaik",
      "Suhu tubuh membaik",
      "ETCO2 membaik",
      "Produksi urin membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02076",
      "nama": "Perawatan Jantung Akut"
    },
    {
      "kode": "I.02080",
      "nama": "Pertolongan Pertama"
    }
  ]
},
{
  "id": "0011",
  "slug": "risiko-penurunan-curah-jantung",
  "kode": "D.0011",
  "nama": "Risiko Penurunan Curah Jantung",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai risiko mengalami pemompaan jantung yang tidak adekuat untuk memenuhi kebutuhan metabolisme tubuh.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "jantung",
    "curah jantung",
    "gagal jantung",
    "palpitasi"
  ],
  "slki": {
    "kode": "L.02008",
    "nama": "Curah jantung meningkat",
    "kriteria": [
      "Kekuatan nadi perifer meningkat",
      "Ejection fraction (EF) meningkat",
      "Palpitasi menurun",
      "Bradikardia menurun",
      "Takikardia menurun",
      "Gambaran EKG Aritmia menurun",
      "Lelah menurun",
      "Edema menurun",
      "Distensi vena jugularis menurun",
      "Dispnea menurun",
      "Oliguria menurun",
      "Pucat/sianosis menurun",
      "Paroximal nocturnal dyspnea (PND) menurun",
      "Ortopnea menurun",
      "Batuk menurun",
      "Suara jantung S3 menurun",
      "Suara jantung S4 menurun",
      "Tekanan darah membaik",
      "Pengisian kapiler membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02075",
      "nama": "Perawatan Jantung"
    },
    {
      "kode": "I.02076",
      "nama": "Perawatan Jantung Akut"
    }
  ]
},
{
  "id": "0012",
  "slug": "risiko-perdarahan",
  "kode": "D.0012",
  "nama": "Risiko Perdarahan",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kehilangan darah baik internal (terjadi di dalam tubuh) maupun eksternal (terjadi hingga keluar tubuh).",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perdarahan",
    "darah",
    "hemoragi",
    "Hb"
  ],
  "slki": {
    "kode": "L.02017",
    "nama": "Tingkat perdarahan menurun",
    "kriteria": [
      "Membran mukosa lembab meningkat",
      "Kelembaban kulit meningkat",
      "Hemoptisis menurun",
      "Hematemesis menurun",
      "Hematuria menurun",
      "Hemoglobin membaik",
      "Hematokrit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02067",
      "nama": "Pencegahan Perdarahan"
    }
  ]
},
{
  "id": "0013",
  "slug": "risiko-perfusi-gastrointestinal-tidak-efektif",
  "kode": "D.0013",
  "nama": "Risiko Perfusi Gastrointestinal Tidak Efektif",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan sirkulasi gastrointestinal.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02010",
    "nama": "Perfusi gastrointestinal meningkat",
    "kriteria": [
      "Mual menurun",
      "Muntah menurun",
      "Bising usus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02040",
      "nama": "Manajemen Perdarahan"
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi"
    }
  ]
},
{
  "id": "0014",
  "slug": "risiko-perfusi-miokard-tidak-efektif",
  "kode": "D.0014",
  "nama": "Risiko Perfusi Miokard Tidak Efektif",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan sirkulasi arteri koroner yang dapat mengganggu metabolisme miokard.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02011",
    "nama": "Perfusi miokard meningkat",
    "kriteria": [
      "Gambaran EKG iskemia/injuri/infark menurun",
      "Nyeri dada menurun",
      "Arteri apikal membaik",
      "Tekanan arteri rata-rata (mean arterial pressure/MAP) membaik",
      "Takikardia membaik",
      "Bradikardia membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02035",
      "nama": "Manajemen Aritmia"
    },
    {
      "kode": "I.02051",
      "nama": "Manajemen Syok Kardiogenik"
    },
    {
      "kode": "I.02066",
      "nama": "Pencegahan Emboli"
    },
    {
      "kode": "I.02075",
      "nama": "Perawatan Jantung"
    }
  ]
},
{
  "id": "0015",
  "slug": "risiko-perfusi-perifer-tidak-efektif",
  "kode": "D.0015",
  "nama": "Risiko Perfusi Perifer Tidak Efektif",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah pada level kapiler yang dapat mengganggu metabolisme tubuh.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02011",
    "nama": "Perfusi perifer meningkat",
    "kriteria": [
      "Kekuatan nadi perifer meningkat",
      "Warna kulit pucat menurun",
      "Pengisian kapiler membaik",
      "Akral membaik",
      "Turgor kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02068",
      "nama": "Pencegahan Syok"
    },
    {
      "kode": "I.02079",
      "nama": "Perawatan Sirkulasi"
    }
  ]
},
{
  "id": "0016",
  "slug": "risiko-perfusi-renal-tidak-efektif",
  "kode": "D.0016",
  "nama": "Risiko Perfusi Renal Tidak Efektif",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah ke ginjal.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02012",
    "nama": "Perfusi renal meningkat",
    "kriteria": [
      "Jumlah urin meningkat",
      "Tekanan arteri rata-rata (mean arterial pressure/MAP) membaik",
      "Kadar urea nitrogen darah membaik",
      "Kadar kreatinin plasma membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02068",
      "nama": "Pencegahan Syok"
    },
    {
      "kode": "I.02040",
      "nama": "Manajemen Perdarahan"
    }
  ]
},
{
  "id": "0017",
  "slug": "risiko-perfusi-serebral-tidak-efektif",
  "kode": "D.0017",
  "nama": "Risiko Perfusi Serebral Tidak Efektif",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah ke otak.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "slki": {
    "kode": "L.02014",
    "nama": "Perfusi serebral meningkat",
    "kriteria": [
      "Tingkat kesadaran meningkat",
      "Sakit kepala menurun",
      "Gelisah menurun",
      "Tekanan arteri rata-rata (mean arterial pressure/MAP) membaik",
      "Tekanan intra kranial membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06194",
      "nama": "Manajemen Peningkatan Tekanan Intrakranial"
    },
    {
      "kode": "I.06198",
      "nama": "Pemantauan Tekanan Intrakranial"
    }
  ]
},
{
  "id": "0018",
  "slug": "berat-badan-lebih",
  "kode": "D.0018",
  "nama": "Berat Badan Lebih",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai akumulasi lemak berlebih atau abnormal yang tidak sesuai dengan usia dan jenis kelamin.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.03018",
    "nama": "Berat badan membaik",
    "kriteria": [
      "Berat badan membaik",
      "Tebal lipatan kulit membaik",
      "Indeks massa tubuh membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi"
    },
    {
      "kode": "I.03097",
      "nama": "Manajemen berat badan"
    },
    {
      "kode": "I.05183",
      "nama": "Promosi Latihan fisik"
    }
  ]
},
{
  "id": "0019",
  "slug": "defisit-nutrisi",
  "kode": "D.0019",
  "nama": "Defisit Nutrisi",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "slki": {
    "kode": "L.03030",
    "nama": "Status nutrisi membaik",
    "kriteria": [
      "Porsi makan yang dihabiskan meningkat",
      "Berat badan membaik",
      "Indeks massa tubuh (IMT) membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    },
    {
      "kode": "I.03136",
      "nama": "Promosi Berat Badan"
    }
  ]
},
{
  "id": "0020",
  "slug": "diare",
  "kode": "D.0020",
  "nama": "Diare",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai pengeluaran feses yang sering, lunak, dan tidak berbentuk.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "diare",
    "mencret",
    "BAB"
  ],
  "slki": {
    "kode": "L.04033",
    "nama": "Eliminasi fekal membaik",
    "kriteria": [
      "Kontrol pengeluaran feses meningkat",
      "Keluhan defekasi lama dan sulit  menurun",
      "Mengejan saat defekasi menurun",
      "Konsistensi feses membaik",
      "Frekuensi BAB membaik",
      "Peristaltik usus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03101",
      "nama": "Manajemen Diare"
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0021",
  "slug": "disfungsi-motilitas-gastrointestinal",
  "kode": "D.0021",
  "nama": "Disfungsi Motilitas Gastrointestinal",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "gastrointestinal",
    "mual",
    "muntah",
    "bising usus"
  ],
  "slki": {
    "kode": "L.03023",
    "nama": "Motilitas gastrointestinal membaik",
    "kriteria": [
      "Nyeri menurun",
      "Kram abdomen menurun",
      "Mual menurun",
      "Muntah menurun",
      "Regurgitasi menurun",
      "Distensi abdomen menurun",
      "Diare menurun",
      "Suara peristaltik meningkat (bila hipoperistaltik) / menurun (bila hiperperistaltik)",
      "Pengosongan lambung meningkat",
      "Flatus meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi"
    }
  ]
},
{
  "id": "0022",
  "slug": "hipervolemia",
  "kode": "D.0022",
  "nama": "Hipervolemia",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipervolemia",
    "cairan berlebih",
    "edema"
  ],
  "slki": {
    "kode": "L.03020",
    "nama": "Keseimbangan cairan meningkat",
    "kriteria": [
      "Asupan cairan meningkat",
      "Output urin meningkat",
      "Membrane mukoa lembab meningkat",
      "Edema menurun",
      "Dehidrasi menurun",
      "Tekanan darah membaik",
      "Frekuensi nadi membaik",
      "Kekuatan nadi membaik",
      "Tekanan arteri rata-rata membaik",
      "Mata cekung membaik",
      "Turgor kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03114",
      "nama": "Manajemen Hipervolemia"
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0023",
  "slug": "hipovolemia",
  "kode": "D.0023",
  "nama": "Hipovolemia",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipovolemia",
    "dehidrasi",
    "cairan kurang"
  ],
  "slki": {
    "kode": "L.03028",
    "nama": "Status cairan membaik",
    "kriteria": [
      "Kekuatan nadi meningkat",
      "Output urin meningkat",
      "Membran mukosa lembab meningkat",
      "Ortopnea menurun",
      "Dispnea menurun",
      "Paroxysmal nocturnal dyspnea (PND) menurun",
      "Edema anasarka menurun",
      "Edema perifer menurun",
      "Frekuensi nadi membaik",
      "Tekanan darah membaik",
      "Turgor kulit membaik",
      "Jugular venous pressure membaik",
      "Hemoglobin membaik",
      "Hematokrit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03116",
      "nama": "Manajemen Hipovolemia"
    },
    {
      "kode": "I.03116",
      "nama": "Manajemen Syok Hipovolemik"
    }
  ]
},
{
  "id": "0024",
  "slug": "ikterik-neonatus",
  "kode": "D.0024",
  "nama": "Ikterik Neonatus",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "ikterik",
    "kuning",
    "bilirubin"
  ],
  "slki": {
    "kode": "L.14125",
    "nama": "Integritas kulit dan jaringan meningkat",
    "kriteria": [
      "Kerusakan jaringan menurun",
      "Kerusakan laporan kulit menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.03091",
      "nama": "Fototerapi Neonatus"
    },
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi"
    }
  ]
},
{
  "id": "0025",
  "slug": "kesiapan-peningkatan-keseimbangan-cairan",
  "kode": "D.0025",
  "nama": "Kesiapan Peningkatan Keseimbangan Cairan",
  "definisi": ": “keseimbangan cairan meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "cairan",
    "hidrasi",
    "dehidrasi",
    "edema"
  ],
  "slki": {
    "kode": "L.03020",
    "nama": "Keseimbangan cairan meningkat",
    "kriteria": [
      "Asupan cairan meningkat",
      "Output urin meningkat",
      "Membrane mukosa lembab meningkat",
      "Edema menurun",
      "Dehidrasi menurun",
      "Tekanan darah membaik",
      "Frekuensi nadi membaik",
      "Kekuatan nadi membaik",
      "Tekanan arteri rata-rata membaik",
      "Mata cekung membaik",
      "Turgor kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03098",
      "nama": "Manajemen Cairan"
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0026",
  "slug": "kesiapan-peningkatan-nutrisi",
  "kode": "D.0026",
  "nama": "Kesiapan Peningkatan Nutrisi",
  "definisi": ": “status nutrisi membaik.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "slki": {
    "kode": "L.03030",
    "nama": "Status nutrisi membaik",
    "kriteria": [
      "Porsi makan yang dihabiskan meningkat",
      "Berat badan membaik",
      "Indeks massa tubuh (IMT) membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12395",
      "nama": "Edukasi Nutrisi"
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi"
    }
  ]
},
{
  "id": "0027",
  "slug": "ketidakstabilan-kadar-glukosa-darah",
  "kode": "D.0027",
  "nama": "Ketidakstabilan Kadar Glukosa Darah",
  "definisi": ": “kestabilan kadar glukosa darah meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "glukosa",
    "gula darah",
    "diabetes"
  ],
  "slki": {
    "kode": "L.03022",
    "nama": "Kestabilan kadar glukosa darah meningkat",
    "kriteria": [
      "Koordinasi meningkat",
      "Mengantuk menurun",
      "Pusing menurun",
      "Lelah/lesu menurun",
      "Rasa lapar menurun",
      "Kadar glukosa dalam darah membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03115",
      "nama": "Manajemen Hiperglikemia"
    },
    {
      "kode": "I.03115",
      "nama": "Manajemen Hipoglikemia"
    }
  ]
},
{
  "id": "0028",
  "slug": "menyusui-efektif",
  "kode": "D.0028",
  "nama": "Menyusui Efektif",
  "definisi": ": “status menyusui membaik.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "menyusui",
    "ASI",
    "laktasi",
    "bayi"
  ],
  "slki": {
    "kode": "L.03029",
    "nama": "Status menyusui membaik",
    "kriteria": [
      "Perlekatan bayi pada payudara ibu meningkat",
      "Kemampuan ibu memposisikan bayi dengan benar meningkat",
      "Miksi bayi lebih dari 8 kali/24 jam meningkat",
      "Berat badan bayi meningkat",
      "Tetesan/pancaran ASI meningkat",
      "Suplai ASI adekuat meningkat",
      "Puting tidak lecet setelah 2 minggu melahirkan meningkat",
      "Kepercayaan diri ibu meningkat",
      "Lecet pada puting menurun",
      "Kelelahan maternal menurun",
      "Kecemasan maternal menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.03093",
      "nama": "Konseling Laktasi"
    },
    {
      "kode": "I.03135",
      "nama": "Promosi ASI Eksklusif"
    },
    {
      "kode": "I.03138",
      "nama": "Promosi Laktasi"
    }
  ]
},
{
  "id": "0029",
  "slug": "menyusui-tidak-efektif",
  "kode": "D.0029",
  "nama": "Menyusui Tidak Efektif",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "menyusui",
    "ASI",
    "laktasi",
    "bayi"
  ],
  "slki": {
    "kode": "L.03029",
    "nama": "Status menyusui membaik",
    "kriteria": [
      "Perlekatan bayi pada payudara ibu meningkat",
      "Kemampuan ibu memposisikan bayi dengan benar meningkat",
      "Miksi bayi lebih dari 8 kali/24 jam meningkat",
      "Berat badan bayi meningkat",
      "Tetesan/pancaran ASI meningkat",
      "Suplai ASI adekuat meningkat",
      "Puting tidak lecet setelah 2 minggu melahirkan meningkat",
      "Kepercayaan diri ibu meningkat",
      "Lecet pada puting menurun",
      "Kelelahan maternal menurun",
      "Kecemasan maternal menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12393",
      "nama": "Edukasi Menyusui"
    },
    {
      "kode": "I.03093",
      "nama": "Konseling Laktasi"
    }
  ]
},
{
  "id": "0030",
  "slug": "obesitas",
  "kode": "D.0030",
  "nama": "Obesitas",
  "definisi": ":.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "obesitas",
    "gemuk",
    "berat badan"
  ],
  "slki": {
    "kode": "L.03018",
    "nama": "Berat badan membaik",
    "kriteria": [
      "Berat badan membaik",
      "Tebal lipatan kulit membaik",
      "Indeks massa tubuh membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12365",
      "nama": "Edukasi berat badan efektif"
    },
    {
      "kode": "I.03097",
      "nama": "Manajemen berat badan"
    }
  ]
},
{
  "id": "0031",
  "slug": "risiko-berat-badan-lebih",
  "kode": "D.0031",
  "nama": "Risiko Berat Badan Lebih",
  "definisi": "diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami akumulasi lemak berlebih atau abnormal yang tidak sesuai dengan usia dan jenis kelamin.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.03018",
    "nama": "Berat badan membaik",
    "kriteria": [
      "Berat badan membaik",
      "Tebal lipatan kulit membaik",
      "Indeks massa tubuh membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12369",
      "nama": "Edukasi Diet"
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi"
    }
  ]
},
{
  "id": "0032",
  "slug": "risiko-defisit-nutrisi",
  "kode": "D.0032",
  "nama": "Risiko Defisit Nutrisi",
  "definisi": ": “status nutrisi membaik.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "slki": {
    "kode": "L.03030",
    "nama": "Status nutrisi membaik",
    "kriteria": [
      "Porsi makan yang dihabiskan meningkat",
      "Berat badan membaik",
      "Indeks massa tubuh (IMT) membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03111",
      "nama": "Manajemen Gangguan Makan"
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    }
  ]
},
{
  "id": "0033",
  "slug": "risiko-disfungsi-motilitas-gastrointestinal",
  "kode": "D.0033",
  "nama": "Risiko Disfungsi Motilitas Gastrointestinal",
  "definisi": ": “motilitas gastrointestinal membaik.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "gastrointestinal",
    "mual",
    "muntah",
    "bising usus"
  ],
  "slki": {
    "kode": "L.03023",
    "nama": "Motilitas gastrointestinal membaik",
    "kriteria": [
      "Nyeri menurun",
      "Kram abdomen menurun",
      "Mual menurun",
      "Muntah menurun",
      "Regurgitasi menurun",
      "Distensi abdomen menurun",
      "Diare menurun",
      "Suara peristaltik meningkat (bila hipoperistaltik) / menurun (bila hiperperistaltik)",
      "Pengosongan lambung meningkat",
      "Flatus meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12369",
      "nama": "Edukasi Diet"
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi"
    }
  ]
},
{
  "id": "0034",
  "slug": "risiko-hipovolemia",
  "kode": "D.0034",
  "nama": "Risiko Hipovolemia",
  "definisi": ": “status cairan membaik.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipovolemia",
    "dehidrasi",
    "cairan kurang"
  ],
  "slki": {
    "kode": "L.03028",
    "nama": "Status cairan membaik",
    "kriteria": [
      "Kekuatan nadi meningkat",
      "Output urin meningkat",
      "Membran mukosa lembab meningkat",
      "Ortopnea menurun",
      "Dispnea menurun",
      "Paroxysmal nocturnal dyspnea (PND) menurun",
      "Edema anasarka menurun",
      "Edema perifer menurun",
      "Frekuensi nadi membaik",
      "Tekanan darah membaik",
      "Turgor kulit membaik",
      "Jugular venous pressure membaik",
      "Hemoglobin membaik",
      "Hematokrit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03116",
      "nama": "Manajemen hipovolemia"
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0035",
  "slug": "risiko-ikterik-neonatus",
  "kode": "D.0035",
  "nama": "Risiko Ikterik Neonatus",
  "definisi": ": “integritas kulit dan jaringan meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "ikterik",
    "kuning",
    "bilirubin"
  ],
  "slki": {
    "kode": "L.14125",
    "nama": "Integritas kulit dan jaringan meningkat",
    "kriteria": [
      "Kerusakan jaringan menurun",
      "Kerusakan lapisan kulit menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi"
    },
    {
      "kode": "I.03132",
      "nama": "Perawatan Neonatus"
    }
  ]
},
{
  "id": "0036",
  "slug": "risiko-ketidakseimbangan-cairan",
  "kode": "D.0036",
  "nama": "Risiko Ketidakseimbangan Cairan",
  "definisi": ": “keseimbangan cairan meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "cairan",
    "hidrasi",
    "dehidrasi",
    "edema"
  ],
  "slki": {
    "kode": "L.03020",
    "nama": "Keseimbangan cairan meningkat",
    "kriteria": [
      "Asupan cairan meningkat",
      "Output urin meningkat",
      "Membrane mukosa lembab meningkat",
      "Edema menurun",
      "Dehidrasi menurun",
      "Tekanan darah membaik",
      "Frekuensi nadi membaik",
      "Kekuatan nadi membaik",
      "Tekanan arteri rata-rata membaik",
      "Mata cekung membaik",
      "Turgor kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03098",
      "nama": "Manajemen Cairan"
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0037",
  "slug": "risiko-ketidakseimbangan-elektrolit",
  "kode": "D.0037",
  "nama": "Risiko Ketidakseimbangan Elektrolit",
  "definisi": ": “keseimbangan elektrolit meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.03021",
    "nama": "Keseimbangan elektrolit meningkat",
    "kriteria": [
      "Serum natrium membaik",
      "Serum kalium membaik",
      "Serum klorida membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03122",
      "nama": "Pemantauan Elektrolit"
    }
  ]
},
{
  "id": "0038",
  "slug": "risiko-ketidakstabilan-kadar-glukosa-darah",
  "kode": "D.0038",
  "nama": "Risiko Ketidakstabilan Kadar Glukosa Darah",
  "definisi": ": “kestabilan kadar glukosa darah meningkat.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "glukosa",
    "gula darah",
    "diabetes"
  ],
  "slki": {
    "kode": "L.03022",
    "nama": "Kestabilan kadar glukosa darah meningkat",
    "kriteria": [
      "Koordinasi meningkat",
      "Mengantuk menurun",
      "Pusing menurun",
      "Lelah/lesu menurun",
      "Rasa lapar menurun",
      "Kadar glukosa dalam darah membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.03115",
      "nama": "Manajemen Hiperglikemia"
    },
    {
      "kode": "I.03115",
      "nama": "Manajemen Hipoglikemia"
    }
  ]
},
{
  "id": "0039",
  "slug": "risiko-syok",
  "kode": "D.0039",
  "nama": "Risiko Syok",
  "definisi": ": “tingkat syok menurun.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.03032",
    "nama": "Tingkat syok menurun",
    "kriteria": [
      "Kekuatan nadi meningkat",
      "Output urin meningkat",
      "Tingkat kesadaran meningkat",
      "Akrat dingin menurun",
      "Pucat menurun",
      "Tekanan arteri rata-rata membaik (LIHAT: Kalkulator MAP)",
      "Tekanan darah sistolik membaik",
      "Tekanan darah diastolik membaik",
      "Tekanan dari membaik",
      "Pengisian kapiler membaik",
      "Frekuensi nadi membaik",
      "Frekuensi napas membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.02068",
      "nama": "Pencegahan Syok"
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan"
    }
  ]
},
{
  "id": "0040",
  "slug": "gangguan-eliminasi-urin",
  "kode": "D.0040",
  "nama": "Gangguan Eliminasi Urin",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "eliminasi",
    "BAK",
    "BAB"
  ],
  "slki": {
    "kode": "L.04034",
    "nama": "Eliminasi urin membaik",
    "kriteria": [
      "Sensasi berkemih meningkat",
      "Desakan berkemih (urgensi) menurun",
      "Distensi kandung kemih menurun",
      "Berkemih tidak tuntas (hesistancy) menurun",
      "Volume residu urin menurun",
      "Urin menetes (dribbling) menurun",
      "Nokturia menurun",
      "Mengompol menurun",
      "Enuresis menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.11349",
      "nama": "Dukungan Perawatan Diri: BAB/BAK"
    },
    {
      "kode": "I.04152",
      "nama": "Manajemen Eliminasi Urin"
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi"
    }
  ]
},
{
  "id": "0041",
  "slug": "inkontinensia-fekal",
  "kode": "D.0041",
  "nama": "Inkontinensia Fekal",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04035",
    "nama": "Kontinensia fekal membaik",
    "kriteria": [
      "Kemampuan mengontrol pengeluaran feses meningkat",
      "Kemampuan menunda pengeluaran feses membaik",
      "Frekuensi BAK membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04150",
      "nama": "Latihan eliminasi fekal"
    },
    {
      "kode": "I.04162",
      "nama": "Perawatan Inkontinensia Fekal"
    }
  ]
},
{
  "id": "0042",
  "slug": "inkontinensia-urin-berlanjut",
  "kode": "D.0042",
  "nama": "Inkontinensia Urin Berlanjut",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nocturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04148",
      "nama": "Kateterisasi Urin"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0043",
  "slug": "inkontinensia-urin-berlebih",
  "kode": "D.0043",
  "nama": "Inkontinensia Urin Berlebih",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04148",
      "nama": "Kateterisasi Urin"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0044",
  "slug": "inkontinensia-urin-fungsional",
  "kode": "D.0044",
  "nama": "Inkontinensia Urin Fungsional",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04149",
      "nama": "Latihan Berkemih"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0045",
  "slug": "inkontinensia-urin-refleks",
  "kode": "D.0045",
  "nama": "Inkontinensia Urin Refleks",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04148",
      "nama": "Kateterisasi Urin"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0046",
  "slug": "inkontinensia-urin-stres",
  "kode": "D.0046",
  "nama": "Inkontinensia Urin Stres",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.07215",
      "nama": "Latihan Otot Panggul"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0047",
  "slug": "inkontinensia-urin-urgensi",
  "kode": "D.0047",
  "nama": "Inkontinensia Urin Urgensi",
  "definisi": ":.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04149",
      "nama": "Latihan Berkemih"
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin"
    }
  ]
},
{
  "id": "0048",
  "slug": "kesiapan-peningkatan-eliminasi-urin",
  "kode": "D.0048",
  "nama": "Kesiapan Peningkatan Eliminasi Urin",
  "definisi": ": “eliminasi urin membaik.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "eliminasi",
    "BAK",
    "BAB"
  ],
  "slki": {
    "kode": "L.04034",
    "nama": "Eliminasi urin membaik",
    "kriteria": [
      "Sensasi berkemih meningkat",
      "Desakan berkemih (urgensi) menurun",
      "Distensi kandung kemih menurun",
      "Berkemih tidak tuntas (hesistancy) menurun",
      "Volume residu urin menurun",
      "Urin menetes (dribbling) menurun",
      "Nokturia menurun",
      "Mengompol menurun",
      "Enuresis menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.04152",
      "nama": "Manajemen Eliminasi Urin"
    }
  ]
},
{
  "id": "0049",
  "slug": "konstipasi",
  "kode": "D.0049",
  "nama": "Konstipasi",
  "definisi": ": “eliminasi fekal membaik.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "konstipasi",
    "sembelit",
    "sulit BAB"
  ],
  "slki": {
    "kode": "L.04033",
    "nama": "Eliminasi fekal membaik",
    "kriteria": [
      "Kontrol pengeluaran feses meningkat",
      "Keluhan defekasi lama dan sulit menurun",
      "Mengejan saat defekasi menurun",
      "Konsistensi feses membaik",
      "Frekuensi BAB membaik",
      "Peristaltik usus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04151",
      "nama": "Manajemen Eliminasi Fekal"
    },
    {
      "kode": "I.04155",
      "nama": "Manajemen Konstipasi"
    }
  ]
},
{
  "id": "0050",
  "slug": "retensi-urin",
  "kode": "D.0050",
  "nama": "Retensi Urin",
  "definisi": ": “eliminasi urin membaik.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "retensi",
    "tahan",
    "tidak bisa BAK"
  ],
  "slki": {
    "kode": "L.04034",
    "nama": "Eliminasi urin membaik",
    "kriteria": [
      "Sensasi berkemih meningkat",
      "Desakan berkemih (urgensi) menurun",
      "Distensi kandung kemih menurun",
      "Berkemih tidak tuntas (hesistancy) menurun",
      "Volume residu urin menurun",
      "Urin menetes (dribbling) menurun",
      "Nokturia menurun",
      "Mengompol menurun",
      "Enuresis menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.04148",
      "nama": "Kateterisasi Urin"
    }
  ]
},
{
  "id": "0051",
  "slug": "risiko-inkontinensia-urin-urgensi",
  "kode": "D.0051",
  "nama": "Risiko Inkontinensia Urin Urgensi",
  "definisi": ": “kontinensia urin membaik.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "slki": {
    "kode": "L.04036",
    "nama": "Kontinensia urin membaik",
    "kriteria": [
      "Kemampuan mengontrol urin meningkat",
      "Nokturia menurun",
      "Residu volume urine setelah berkemih menurun",
      "Dribbling menurun",
      "Hesistancy menurun",
      "Enuresis menurun",
      "Kemampuan menunda pengeluaran urin membaik",
      "Frekuensi berkemih membaik",
      "Sensasi berkemih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04152",
      "nama": "Manajemen Eliminasi Urin"
    }
  ]
},
{
  "id": "0052",
  "slug": "risiko-konstipasi",
  "kode": "D.0052",
  "nama": "Risiko Konstipasi",
  "definisi": ": “eliminasi fekal membaik.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "konstipasi",
    "sembelit",
    "sulit BAB"
  ],
  "slki": {
    "kode": "L.04033",
    "nama": "Eliminasi fekal membaik",
    "kriteria": [
      "Kontrol pengeluaran feses meningkat",
      "Keluhan defekasi lama dan sulit menurun",
      "Mengejan saat defekasi menurun",
      "Konsistensi feses membaik",
      "Frekuensi BAB membaik",
      "Peristaltik usus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.04160",
      "nama": "Pencegahan Konstipasi"
    }
  ]
},
{
  "id": "0053",
  "slug": "disorganisasi-perilaku-bayi",
  "kode": "D.0053",
  "nama": "Disorganisasi Perilaku Bayi",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "bayi",
    "disorganisasi",
    "perilaku"
  ],
  "slki": {
    "kode": "L.05043",
    "nama": "Organisasi perilaku bayi meningkat",
    "kriteria": [
      "Gerakan pada ekstremitas meningkat",
      "Kemampuan jari-jari menggenggam meningkat",
      "Gerakan terkoordinasi meningkat",
      "Respon normal terhadap stimulus sensorik meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi"
    }
  ]
},
{
  "id": "0054",
  "slug": "gangguan-mobilitas-fisik",
  "kode": "D.0054",
  "nama": "Gangguan Mobilitas Fisik",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "mobilitas",
    "gerak",
    "jalan",
    "lumpuh"
  ],
  "slki": {
    "kode": "L.05042",
    "nama": "Mobilitas fisik meningkat",
    "kriteria": [
      "Pergerakan ekstremitas meningkat",
      "Kekuatan otot meningkat",
      "Rentang gerak (ROM) meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.06171",
      "nama": "Dukungan Ambulasi"
    },
    {
      "kode": "I.05173",
      "nama": "Dukungan Mobilisasi"
    }
  ]
},
{
  "id": "0055",
  "slug": "gangguan-pola-tidur",
  "kode": "D.0055",
  "nama": "Gangguan Pola Tidur",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "tidur",
    "insomnia",
    "terjaga"
  ],
  "slki": {
    "kode": "",
    "nama": "",
    "kriteria": []
  },
  "siki": [
    {
      "kode": "I.05174",
      "nama": "Dukungan Tidur"
    },
    {
      "kode": "I.12362",
      "nama": "Edukasi Aktivitas dan Istirahat"
    }
  ]
},
{
  "id": "0056",
  "slug": "intoleransi-aktivitas",
  "kode": "D.0056",
  "nama": "Intoleransi Aktivitas",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "aktivitas",
    "aktif",
    "gerak"
  ],
  "slki": {
    "kode": "L.05047",
    "nama": "Toleransi aktivitas meningkat",
    "kriteria": [
      "Keluhan Lelah menurun",
      "Dispnea saat aktivitas menurun",
      "Dispnea setelah aktivitas menurun",
      "Frekuensi nadi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.05178",
      "nama": "Manajemen Energi"
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Aktivitas"
    }
  ]
},
{
  "id": "0057",
  "slug": "keletihan",
  "kode": "D.0057",
  "nama": "Keletihan",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "keletihan",
    "lelah",
    "capek",
    "fatigue"
  ],
  "slki": {
    "kode": "L.05046",
    "nama": "Tingkat keletihan menurun",
    "kriteria": [
      "Verbalisasi kepulihan energi meningkat",
      "Tenaga meningkat",
      "Kemampuan melakukan aktivitas rutin meningkat",
      "Verbalisasi Lelah menurun",
      "Lesu menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12362",
      "nama": "Edukasi Aktivitas dan Istirahat"
    },
    {
      "kode": "I.05178",
      "nama": "Manajemen Energi"
    }
  ]
},
{
  "id": "0058",
  "slug": "kesiapan-peningkatan-tidur",
  "kode": "D.0058",
  "nama": "Kesiapan Peningkatan Tidur",
  "definisi": ": “pola tidur membaik.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "tidur",
    "insomnia",
    "terjaga"
  ],
  "slki": {
    "kode": "L.05045",
    "nama": "Pola tidur membaik",
    "kriteria": [
      "Keluhan sulit tidur menurun",
      "Keluhan sering terjaga menurun",
      "Keluhan tidak puas tidur menurun",
      "Keluhan pola tidur berubah menurun",
      "Keluhan istirahat tidak cukup menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.05174",
      "nama": "Dukungan Tidur"
    },
    {
      "kode": "I.12362",
      "nama": "Edukasi Aktivitas dan Istirahat"
    }
  ]
},
{
  "id": "0059",
  "slug": "risiko-disorganisasi-perilaku-bayi",
  "kode": "D.0059",
  "nama": "Risiko Disorganisasi Perilaku Bayi",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "bayi",
    "disorganisasi",
    "perilaku"
  ],
  "slki": {
    "kode": "L.05043",
    "nama": "Organisasi perilaku bayi meningkat",
    "kriteria": [
      "Gerakan pada ekstremitas meningkat",
      "Kemampuan jari-jari menggenggam meningkat",
      "Gerakan terkoordinasi meningkat",
      "Respon normal terhadap stimulus sensorik meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12379",
      "nama": "Edukasi Keamanan Bayi"
    },
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi"
    }
  ]
},
{
  "id": "0060",
  "slug": "risiko-intoleransi-aktivitas",
  "kode": "D.0060",
  "nama": "Risiko Intoleransi Aktivitas",
  "definisi": ":.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "aktivitas",
    "aktif",
    "gerak"
  ],
  "slki": {
    "kode": "L.05047",
    "nama": "Toleransi aktivitas meningkat",
    "kriteria": [
      "Keluhan Lelah menurun",
      "Dispnea saat aktivitas menurun",
      "Dispnea setelah aktivitas menurun",
      "Frekuensi nadi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.05178",
      "nama": "Manajemen Energi"
    },
    {
      "kode": "I.05183",
      "nama": "Promosi Latihan fisik"
    }
  ]
},
{
  "id": "0061",
  "slug": "disrefleksia-otonom",
  "kode": "D.0061",
  "nama": "Disrefleksia Otonom",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.06053",
    "nama": "Status neurologis membaik",
    "kriteria": [
      "Sakit kepala menurun",
      "Tekanan darah sistolik membaik",
      "Diaforesis menurun",
      "Pucat menurun",
      "Frekuensi nadi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06190",
      "nama": "Manajemen Disrefleksia"
    }
  ]
},
{
  "id": "0062",
  "slug": "gangguan-memori",
  "kode": "D.0062",
  "nama": "Gangguan Memori",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "memori",
    "ingatan",
    "lupa",
    "pikun"
  ],
  "slki": {
    "kode": "L.09079",
    "nama": "Memori meningkat",
    "kriteria": [
      "Verbalisasi kemampuan mempelajari hal baru meningkat",
      "Verbalisasi kemampuan mengingat informasi faktual meningkat",
      "Verbalisasi kemampuan mengingat perilaku tertentu yang pernah dilakukan meningkat",
      "Verbalisasi kemampuan mengingat peristiwa meningkat",
      "Verbalisasi pengalaman lupa menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.06188",
      "nama": "Latihan Memori"
    },
    {
      "kode": "I.09297",
      "nama": "Orientasi Realita"
    }
  ]
},
{
  "id": "0063",
  "slug": "gangguan-menelan",
  "kode": "D.0063",
  "nama": "Gangguan Menelan",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "menelan",
    "sulit makan",
    "tersedak"
  ],
  "slki": {
    "kode": "L.06052",
    "nama": "Status menelan membaik",
    "kriteria": [
      "Mempertahankan makanan di mulut meningkat",
      "Reflek menelan meningkat",
      "Kemampuan mengosongkan mulut meningkat",
      "Frekuensi tersedak menurun",
      "Batuk menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.11351",
      "nama": "Dukungan Perawatan Diri: Makan/Minum"
    },
    {
      "kode": "I.01018",
      "nama": "Pencegahan Aspirasi"
    }
  ]
},
{
  "id": "0064",
  "slug": "konfusi-akut",
  "kode": "D.0064",
  "nama": "Konfusi Akut",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "slki": {
    "kode": "L.06054",
    "nama": "Tingkat konfusi menurun",
    "kriteria": [
      "Fungsi kognitif meningkat",
      "Tingkat kesadaran meningkat",
      "Aktivitas psikomotorik meningkat",
      "Motivasi memulai/menyelesaikan perilaku terarah meningkat",
      "Memori jangka pendek meningkat",
      "Memori jangka Panjang meningkat",
      "Interpretasi membaik",
      "Fungsi sosial membaik",
      "Respons terhadap stimulus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06189",
      "nama": "Manajemen Delirium"
    },
    {
      "kode": "I.09288",
      "nama": "Manajemen Halusinasi"
    },
    {
      "kode": "I.09291",
      "nama": "Manajemen Penyalahgunaan Zat"
    }
  ]
},
{
  "id": "0065",
  "slug": "konfusi-kronis",
  "kode": "D.0065",
  "nama": "Konfusi Kronis",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "slki": {
    "kode": "L.06054",
    "nama": "Tingkat konfusi menurun",
    "kriteria": [
      "Fungsi kognitif meningkat",
      "Tingkat kesadaran meningkat",
      "Aktivitas psikomotorik meningkat",
      "Motivasi memulai/menyelesaikan perilaku terarah meningkat",
      "Memori jangka pendek meningkat",
      "Memori jangka Panjang meningkat",
      "Interpretasi membaik",
      "Fungsi sosial membaik",
      "Respons terhadap stimulus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06189",
      "nama": "Manajemen Delirium"
    },
    {
      "kode": "I.09286",
      "nama": "Manajemen Demensia"
    },
    {
      "kode": "I.09332",
      "nama": "Terapi Validasi"
    }
  ]
},
{
  "id": "0066",
  "slug": "penurunan-kapasitas-adaptif-intrakranial",
  "kode": "D.0066",
  "nama": "Penurunan Kapasitas Adaptif Intrakranial",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "intrakranial",
    "tekanan otak"
  ],
  "slki": {
    "kode": "L.06049",
    "nama": "Kapasitas adaptif intrakranial meningkat",
    "kriteria": [
      "Tingkat kesadaran meningkat",
      "Sakit kepala menurun",
      "Bradikaria menurun",
      "Tekanan darah membaik",
      "Tekanan nadi membaik",
      "Pola napas membaik",
      "Respon pupil membaik",
      "Refleks neurologis membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06194",
      "nama": "Manajemen Peningkatan Tekanan Intrakranial"
    },
    {
      "kode": "I.06198",
      "nama": "Pemantauan Tekanan Intrakranial"
    }
  ]
},
{
  "id": "0067",
  "slug": "risiko-disfungsi-neurovaskuler-perifer",
  "kode": "D.0067",
  "nama": "Risiko Disfungsi Neurovaskuler Perifer",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.06051",
    "nama": "Neurovaskuler perifer meningkat",
    "kriteria": [
      "Sirkulasi arteri meningkat",
      "Sirkulasi vena meningkat",
      "Nyeri menurun",
      "Nadi membaik",
      "Suhu tubuh membaik",
      "Warna kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.06195",
      "nama": "Manajemen Sensasi Perifer"
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi"
    }
  ]
},
{
  "id": "0068",
  "slug": "risiko-konfusi-akut",
  "kode": "D.0068",
  "nama": "Risiko Konfusi Akut",
  "definisi": ":.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "slki": {
    "kode": "L.06054",
    "nama": "Tingkat konfusi menurun",
    "kriteria": [
      "Fungsi kognitif meningkat",
      "Tingkat kesadaran meningkat",
      "Aktivitas psikomotorik meningkat",
      "Motivasi memulai/menyelesaikan perilaku terarah meningkat",
      "Memori jangka pendek meningkat",
      "Memori jangka Panjang meningkat",
      "Interpretasi membaik",
      "Fungsi sosial membaik",
      "Respons terhadap stimulus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.09286",
      "nama": "Manajemen Demensia"
    },
    {
      "kode": "I.14539",
      "nama": "Pencegahan Infeksi"
    }
  ]
},
{
  "id": "0069",
  "slug": "disfungsi-seksual",
  "kode": "D.0069",
  "nama": "Disfungsi Seksual",
  "definisi": ":.",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "slki": {
    "kode": "L.07055",
    "nama": "Fungsi seksual membaik",
    "kriteria": [
      "Kepuasan hubungan seksual meningkat",
      "Verbalisasi aktivitas seksual berubah menurun",
      "Verbalisasi eksitasi seksual berubah menurun",
      "Verbalisasi peran seksual berubah menurun",
      "Verbalisasi fungsi seksual berubah menurun",
      "Keluhan nyeri saat berhubungan seksual (dispareunia) menurun",
      "Hasrat seksual membaik",
      "Orientasi seksual membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12447",
      "nama": "Edukasi Seksualitas"
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas"
    }
  ]
},
{
  "id": "0070",
  "slug": "kesiapan-persalinan",
  "kode": "D.0070",
  "nama": "Kesiapan Persalinan",
  "definisi": ": “status antepartum membaik.",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "persalinan",
    "melahirkan",
    "hamil"
  ],
  "slki": {
    "kode": "L.07059",
    "nama": "Status antepartum membaik",
    "kriteria": [
      "Kelekatan emosional dengan janin meningkat",
      "Koping dengan ketidaknyamanan kehamilan meningkat",
      "Nausea menurun",
      "Muntah menurun",
      "Edema menurun",
      "Nyeri abdomen menurun",
      "Nyeri epigastric menurun",
      "Perdarahan vagina menurun",
      "Konstipasi menurun",
      "Berat badan membaik",
      "Tekanan darah membaik",
      "Hemoglobin membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12437",
      "nama": "Edukasi Persalinan"
    }
  ]
},
{
  "id": "0071",
  "slug": "pola-seksual-tidak-efektif",
  "kode": "D.0071",
  "nama": "Pola Seksual Tidak Efektif",
  "definisi": ":.",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "slki": {
    "kode": "L.07056",
    "nama": "Identitas seksual membaik",
    "kriteria": [
      "Menunjukkan pendirian seksual yang jelas meningkat",
      "Integrasi orientasi seksual ke dalam kehidupan sehari-hari meningkat",
      "Menyusun Batasan-batasan sesuai jenis kelamin"
    ]
  },
  "siki": [
    {
      "kode": "I.12447",
      "nama": "Edukasi Seksualitas"
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas"
    }
  ]
},
{
  "id": "0072",
  "slug": "risiko-disfungsi-seksual",
  "kode": "D.0072",
  "nama": "Risiko Disfungsi Seksual",
  "definisi": ": “fungsi seksual membaik.",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "slki": {
    "kode": "L.07055",
    "nama": "Fungsi seksual membaik",
    "kriteria": [
      "Kepuasan hubungan seksual meningkat",
      "Verbalisasi aktivitas seksual berubah menurun",
      "Verbalisasi eksitasi seksual berubah menurun",
      "Verbalisasi peran seksual berubah menurun",
      "Verbalisasi fungsi seksual berubah menurun",
      "Keluhan nyeri saat berhubungan seksual (dispareunia) menurun",
      "Hasrat seksual membaik",
      "Orientasi seksual membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12447",
      "nama": "Edukasi Seksualitas"
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas"
    }
  ]
},
{
  "id": "0073",
  "slug": "risiko-kehamilan-tidak-dikehendaki",
  "kode": "D.0073",
  "nama": "Risiko Kehamilan Tidak Dikehendaki",
  "definisi": ": “penerimaan kehamilan meningkat.",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.07057",
    "nama": "Penerimaan kehamilan meningkat",
    "kriteria": [
      "Verbalisasi penerimaan kehamilan meningkat",
      "Verbalisasi perasaan yang dialami meningkat",
      "Perilaku mencari perawatan kehamilan meningkat",
      "Menyusun perencanaan kehamilan meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12381",
      "nama": "Edukasi Keluarga Berencana"
    },
    {
      "kode": "I.07216",
      "nama": "Manajemen Kehamilan Tidak Dikehendaki"
    }
  ]
},
{
  "id": "0074",
  "slug": "gangguan-rasa-nyaman",
  "kode": "D.0074",
  "nama": "Gangguan Rasa Nyaman",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyaman",
    "tidak nyaman",
    "comfort"
  ],
  "slki": {
    "kode": "L.08064",
    "nama": "Status kenyamanan meningkat",
    "kriteria": [
      "Keluhan tidak nyaman menurun",
      "Gelisah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi"
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi"
    }
  ]
},
{
  "id": "0075",
  "slug": "ketidaknyamanan-pasca-partum",
  "kode": "D.0075",
  "nama": "Ketidaknyamanan Pasca Partum",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyaman",
    "tidak nyaman",
    "comfort"
  ],
  "slki": {
    "kode": "L.07061",
    "nama": "Status kenyamanan pasca partum meningkat",
    "kriteria": [
      "Keluhan tidak nyaman menurun",
      "Meringis menurun",
      "Luka episiotomi menurun",
      "Kontraksi uterus menurun",
      "Payudara bengkak menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi"
    }
  ]
},
{
  "id": "0076",
  "slug": "nausea",
  "kode": "D.0076",
  "nama": "Nausea",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nausea",
    "mual",
    "muntah"
  ],
  "slki": {
    "kode": "L.08065",
    "nama": "Tingkat nausea menurun",
    "kriteria": [
      "Perasaan ingin muntah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.03117",
      "nama": "Manajemen Mual"
    },
    {
      "kode": "I.03118",
      "nama": "Manajemen Muntah"
    }
  ]
},
{
  "id": "0077",
  "slug": "nyeri-akut",
  "kode": "D.0077",
  "nama": "Nyeri Akut",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "slki": {
    "kode": "L.08066",
    "nama": "Tingkat nyeri menurun",
    "kriteria": [
      "Keluhan nyeri menurun",
      "Meringis menurun",
      "Sikap protektif menurun",
      "Gelisah menurun",
      "Kesulitan tidur menurun",
      "Frekuensi nadi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.08243",
      "nama": "Pemberian Analgesik"
    }
  ]
},
{
  "id": "0078",
  "slug": "nyeri-kronis",
  "kode": "D.0078",
  "nama": "Nyeri Kronis",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "slki": {
    "kode": "L.08066",
    "nama": "Tingkat nyeri menurun",
    "kriteria": [
      "Keluhan nyeri menurun",
      "Perasaan depresi menurun",
      "Meringis menurun",
      "Gelisah menurun",
      "Kemampuan menuntaskan aktivitas meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.08245",
      "nama": "Perawatan kenyamanan"
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi"
    }
  ]
},
{
  "id": "0079",
  "slug": "nyeri-melahirkan",
  "kode": "D.0079",
  "nama": "Nyeri Melahirkan",
  "definisi": ":.",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "slki": {
    "kode": "L.08066",
    "nama": "Tingkat nyeri menurun",
    "kriteria": [
      "Keluhan nyeri menurun",
      "Perineum terasa tertekan menurun",
      "Meringis menurun",
      "Berfokus pada diri sendiri menurun",
      "Uterus teraba membulat menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi"
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi"
    }
  ]
},
{
  "id": "0080",
  "slug": "ansietas",
  "kode": "D.0080",
  "nama": "Ansietas",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ansietas",
    "cemas",
    "cemas",
    "khawatir"
  ],
  "slki": {
    "kode": "L.09093",
    "nama": "Tingkat ansietas menurun",
    "kriteria": [
      "Verbalisasi kebingungan menurun",
      "Verbalisasi khawatir akibat kondisi yang dihadapi menurun",
      "Perilaku gelisah menurun",
      "Perilaku tegang menurun",
      "Konsentrasi membaik",
      "Pola tidur membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09314",
      "nama": "Reduksi Ansietas"
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi"
    }
  ]
},
{
  "id": "0081",
  "slug": "berduka",
  "kode": "D.0081",
  "nama": "Berduka",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "berduka",
    "kematian",
    "kehilangan"
  ],
  "slki": {
    "kode": "L.09094",
    "nama": "Tingkat berduka menurun",
    "kriteria": [
      "Verbalisasi menerima kehilangan meningkat",
      "Verbalisasi harapan meningkat",
      "Verbalisasi perasaan sedih menurun",
      "Verbalisasi perasaan bersalah atau menyalahkan orang lain menurun",
      "Menangis menurun",
      "Pola tidur membaik",
      "Konsentasi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09274",
      "nama": "Dukungan Proses Berduka"
    },
    {
      "kode": "I.09256",
      "nama": "Dukungan Emosional"
    }
  ]
},
{
  "id": "0082",
  "slug": "distres-spiritual",
  "kode": "D.0082",
  "nama": "Distres Spiritual",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "spiritual",
    "agama",
    "ibadah"
  ],
  "slki": {
    "kode": "L.09091",
    "nama": "Status spiritual membaik",
    "kriteria": [
      "Verbalisasi makna dan tujuan hidup meningkat",
      "Verbalisasi kepuasan terhadap makna hidup meningkat",
      "Verbalisasi perasaaan keberdayaan meningkat",
      "Perilaku marah pada Tuhan menurun",
      "Kemampuan beribadah membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09276",
      "nama": "Dukungan Spiritual"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0083",
  "slug": "gangguan-citra-tubuh",
  "kode": "D.0083",
  "nama": "Gangguan Citra Tubuh",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "citra tubuh",
    "body image",
    "penampilan"
  ],
  "slki": {
    "kode": "L.09067",
    "nama": "Citra tubuh meningkat",
    "kriteria": [
      "Melihat bagian tubuh membaik",
      "Menyentuh bagian tubuh membaik",
      "Verbalisasi kecacatan bagian tubuh membaik",
      "Verbalisasi kehilangan bagian tubuh membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09305",
      "nama": "Promosi Citra Tubuh"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0084",
  "slug": "gangguan-identitas-diri",
  "kode": "D.0084",
  "nama": "Gangguan Identitas Diri",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "identitas",
    "diri",
    "kepribadian"
  ],
  "slki": {
    "kode": "L.09070",
    "nama": "Identitas diri membaik",
    "kriteria": [
      "Persepsi terhadap diri membaik",
      "Kebingungan dengan nilai-nilai budaya menurun",
      "Kebingungan dengan tujuan hidup menurun",
      "Kebingungan dengan jenis kelamin menurun",
      "Kebingungan dengan nilai-nilai ideal menurun",
      "Perasaan fluktuatif terhadap diri menurun",
      "Perilaku konsisten meningkat",
      "Hubungan yang efektif meningkat",
      "Strategi koping efektif meningkat",
      "Penampilan peran efektif meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.09297",
      "nama": "Orientasi Realita"
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0085",
  "slug": "gangguan-persepsi-sensori",
  "kode": "D.0085",
  "nama": "Gangguan Persepsi Sensori",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "persepsi",
    "sensori",
    "indra"
  ],
  "slki": {
    "kode": "L.09083",
    "nama": "Persepsi sensori membaik",
    "kriteria": [
      "Verbalisasi mendengar bisikan menurun",
      "Vernalisasi melihat bayangan menurun",
      "Verbalisasi merasakan sesuatu melalui indera perabaan menurun",
      "Verbalisasi merasakan sesuatu melalui indera penciuman menurun",
      "Verbalisasi merasakan sesuatu melalui indera pengecapan menurun",
      "Distorsi sensori menurun",
      "Perilaku halusinasi menurun",
      "Respons sesuai stimulus membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09288",
      "nama": "Manajemen Halusinasi"
    },
    {
      "kode": "I.08241",
      "nama": "Minimalisasi Rangsangan"
    },
    {
      "kode": "I.09301",
      "nama": "Pengekangan Kimiawi"
    }
  ]
},
{
  "id": "0086",
  "slug": "harga-diri-rendah-kronis",
  "kode": "D.0086",
  "nama": "Harga Diri Rendah Kronis",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "slki": {
    "kode": "L.09069",
    "nama": "Harga diri meningkat",
    "kriteria": [
      "Penilaian diri positif meningkat",
      "Perasaan memiliki kelebihan atau kemampuan positif meningkat",
      "Penerimaan penilaian positif terhadap diri sendiri meningkat",
      "Minat mencoba hal baru meningkat",
      "Berjalan menampakkan wajah meningkat",
      "Postur tubuh menampakkan wajah meningkat",
      "Perasaan malu menurun",
      "Perasaan bersalah menurun",
      "Perasaan tidak mampu melakukan apapun menurun",
      "Meremehkan kemampuan mengatasi masalah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku"
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0087",
  "slug": "harga-diri-rendah-situasional",
  "kode": "D.0087",
  "nama": "Harga Diri Rendah Situasional",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "slki": {
    "kode": "L.09069",
    "nama": "Harga diri meningkat",
    "kriteria": [
      "Penilaian diri positif meningkat",
      "Perasaan malu menurun",
      "Penerimaan penilaian positif terhadap diri sendiri meningkat",
      "Percaya diri berbicara meningkat",
      "Kontak mata meningkat",
      "Gairan aktivitas meningkat",
      "Berjalan menampakkan wajah meningkat",
      "Postur tubuh menampakkan wajah meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku"
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0088",
  "slug": "keputusasaan",
  "kode": "D.0088",
  "nama": "Keputusasaan",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "keputusasaan",
    "putus asa",
    "hopeless"
  ],
  "slki": {
    "kode": "L.09068",
    "nama": "Harapan meningkat",
    "kriteria": [
      "Keterlibatan dalam aktivitas perawatan meningkat",
      "Verbalisasi keputusasaan menurun",
      "Perilaku pasif menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09256",
      "nama": "Dukungan Emosional"
    },
    {
      "kode": "I.09307",
      "nama": "Promosi Harapan"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0089",
  "slug": "kesiapan-peningkatan-konsep-diri",
  "kode": "D.0089",
  "nama": "Kesiapan Peningkatan Konsep Diri",
  "definisi": ": “konsep diri membaik.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.09076",
    "nama": "Konsep diri membaik",
    "kriteria": [
      "Verbalisasi kepuasan terhadap diri meningkat",
      "Verbalisasi kepuasan terhadap harga diri meningkat",
      "Verbalisasi kepuasan terhadap penampilan peran meningkat",
      "Verbalisasi kepuasan terhadap citra tubuh meningkat",
      "Verbalisasi kepuasan terhadap identitas diri meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0090",
  "slug": "kesiapan-peningkatan-koping-keluarga",
  "kode": "D.0090",
  "nama": "Kesiapan Peningkatan Koping Keluarga",
  "definisi": ": “status koping keluarga membaik.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09089",
    "nama": "Status koping keluarga membaik",
    "kriteria": [
      "Perilaku bertujuan membaik",
      "Perilaku sehat membaik",
      "Komitmen pada perawatan/pengobatan meningkat",
      "Komunikasi antara anggota keluarga meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.09260",
      "nama": "Dukungan Koping Keluarga"
    },
    {
      "kode": "I.14525",
      "nama": "Pelibatan Keluarga"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0091",
  "slug": "kesiapan-peningkatan-koping-komunitas",
  "kode": "D.0091",
  "nama": "Kesiapan Peningkatan Koping Komunitas",
  "definisi": ": “status koping komunitas membaik.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09089",
    "nama": "Status koping komunitas membaik",
    "kriteria": [
      "Keberdayaan komunitas meningkat",
      "Perencanaan komunitas meningkat",
      "Pemecahan masalah komunitas meningkat",
      "Sumber daya komunitas meningkat",
      "Partisipasi masyarakat meningkat",
      "Insiden masalah Kesehatan dalam komunitas menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09258",
      "nama": "Dukungan Kelompok"
    },
    {
      "kode": "I.09313",
      "nama": "Promosi Sistem Pendukung"
    }
  ]
},
{
  "id": "0092",
  "slug": "ketidakberdayaan",
  "kode": "D.0092",
  "nama": "Ketidakberdayaan",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ketidakberdayaan",
    "daya",
    "kontrol"
  ],
  "slki": {
    "kode": "L.09071",
    "nama": "Keberdayaan meningkat",
    "kriteria": [
      "Verbalisasi mampu melaksanakan aktivitas meningkat",
      "Verbalisasi frustasi menurun",
      "Ketergantungan pada orang lain menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09307",
      "nama": "Promosi Harapan"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0093",
  "slug": "ketidakmampuan-koping-keluarga",
  "kode": "D.0093",
  "nama": "Ketidakmampuan Koping Keluarga",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09088",
    "nama": "Status koping keluarga membaik",
    "kriteria": [
      "Perasaan diabaikan menurun",
      "Kekhawatiran tentang anggota keluarga menurun",
      "Perilaku mengabaikan anggota keluarga menurun",
      "Kemampuan memenuhi kebutuhan anggota keluarga meningkat",
      "Komitmen pada perawatan/pengobatan meningkat",
      "Komunikasi antara anggota keluarga membaik",
      "Toleransi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09260",
      "nama": "Dukungan Koping Keluarga"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0094",
  "slug": "koping-defensif",
  "kode": "D.0094",
  "nama": "Koping Defensif",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09086",
    "nama": "Status koping membaik",
    "kriteria": [
      "Kemampuan memenuhi peran sesuai usia meningkat",
      "Perilaku koping adaptif meningkat",
      "Verbalisasi kemampuan mengatasi masalah meningkat",
      "Verabalisasi pengakuan masalah meningkat",
      "Verbalisasi kelemahan diri meningkat",
      "Perilaku asertif meningkat",
      "Verbalisasi menyalahkan orang lain menurun",
      "Verbalisasi rasionalisasi kegagalan menurun",
      "Hipersensitif terhadap kritik menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0095",
  "slug": "koping-komunitas-tidak-efektif",
  "kode": "D.0095",
  "nama": "Koping Komunitas Tidak Efektif",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09089",
    "nama": "Status koping komunitas membaik",
    "kriteria": [
      "Keberdayaan komunitas meningkat",
      "Perencanaan komunitas meningkat",
      "Pemecahan masalah komunitas meningkat",
      "Sumber daya komunitas meningkat",
      "Partisipasi masyarakat meningkat",
      "Insiden masalah Kesehatan dalam komunitas menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    },
    {
      "kode": "I.14515",
      "nama": "Manajemen Lingkungan Komunitas"
    },
    {
      "kode": "I.14548",
      "nama": "Pengembangan Kesehatan Masyarakat"
    }
  ]
},
{
  "id": "0096",
  "slug": "koping-tidak-efektif",
  "kode": "D.0096",
  "nama": "Koping Tidak Efektif",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09086",
    "nama": "Status koping membaik",
    "kriteria": [
      "Kemampuan memenuhi peran sesuai usia meningkat",
      "Perilaku koping adaptif meningkat",
      "Verbalisasi kemampuan mengatasi masalah meningkat",
      "Verabalisasi pengakuan masalah meningkat",
      "Verbalisasi kelemahan diri meningkat",
      "Perilaku asertif meningkat",
      "Verbalisasi menyalahkan orang lain menurun",
      "Verbalisasi rasionalisasi kegagalan menurun",
      "Hipersensitif terhadap kritik menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09265",
      "nama": "Dukungan Pengambilan Keputusan"
    },
    {
      "kode": "I.13478",
      "nama": "Dukungan Penampilan Peran"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0097",
  "slug": "penurunan-koping-keluarga",
  "kode": "D.0097",
  "nama": "Penurunan Koping Keluarga",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "slki": {
    "kode": "L.09088",
    "nama": "Status koping keluarga membaik",
    "kriteria": [
      "Perasaan diabaikan menurun",
      "Kekhawatiran tentang anggota keluarga menurun",
      "Perilaku mengabaikan anggota keluarga menurun",
      "Kemampuan memenuhi kebutuhan anggota keluarga meningkat",
      "Komitmen pada perawatan/pengobatan meningkat",
      "Komunikasi antara anggota keluarga membaik",
      "Toleransi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09260",
      "nama": "Dukungan Koping Keluarga"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0098",
  "slug": "penyangkalan-tidak-efektif",
  "kode": "D.0098",
  "nama": "Penyangkalan Tidak Efektif",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "penyangkalan",
    "denial",
    "menyangkal"
  ],
  "slki": {
    "kode": "L.09082",
    "nama": "Penerimaan meningkat",
    "kriteria": [
      "Verbalisasi penerimaan meningkat",
      "Verbalisasi perasaan yang dialami meningkat",
      "Perilaku mencari perawatan/pengobatan meningkat",
      "Menyusun perencanaan masa depan"
    ]
  },
  "siki": [
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0099",
  "slug": "perilaku-kesehatan-cenderung-berisiko",
  "kode": "D.0099",
  "nama": "Perilaku Kesehatan Cenderung Berisiko",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.12107",
    "nama": "Perilaku Kesehatan membaik",
    "kriteria": [
      "Penerimaan terhadap perubahan status Kesehatan meningkat",
      "Kemampuan melakukan Tindakan pencegahan masalah Kesehatan meningkat",
      "Kemampuan peningkatan Kesehatan meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12472",
      "nama": "Promosi Perilaku Upaya Kesehatan"
    }
  ]
},
{
  "id": "0100",
  "slug": "risko-distres-spiritual",
  "kode": "D.0100",
  "nama": "Risko Distres Spiritual",
  "definisi": "",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "spiritual",
    "agama",
    "ibadah"
  ],
  "slki": {
    "kode": "L.09091",
    "nama": "Status spiritual membaik",
    "kriteria": [
      "Verbalisasi makna dan tujuan hidup meningkat",
      "Verbalisasi kepuasan terhadap makna hidup meningkat",
      "Verbalisasi perasaaan keberdayaan meningkat",
      "Perilaku marah pada Tuhan menurun",
      "Kemampuan beribadah membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09269",
      "nama": "Dukungan Perkembangan Spiritual"
    },
    {
      "kode": "I.09306",
      "nama": "Promosi Dukungan Spiritual"
    }
  ]
},
{
  "id": "0101",
  "slug": "risiko-harga-diri-rendah-kronis",
  "kode": "D.0101",
  "nama": "Risiko Harga Diri Rendah Kronis",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "slki": {
    "kode": "L.09069",
    "nama": "Harga diri meningkat",
    "kriteria": [
      "Penilaian diri positif meningkat",
      "Perasaan memiliki kelebihan atau kemampuan positif meningkat",
      "Penerimaan penilaian positif terhadap diri sendiri meningkat",
      "Minat mencoba hal baru meningkat",
      "Berjalan menampakkan wajah meningkat",
      "Postur tubuh menampakkan wajah meningkat",
      "Perasaan malu menurun",
      "Perasaan bersalah menurun",
      "Perasaan tidak mampu melakukan apapun menurun",
      "Meremehkan kemampuan mengatasi masalah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    },
    {
      "kode": "I.13498",
      "nama": "Promosi Sosialisasi"
    }
  ]
},
{
  "id": "0102",
  "slug": "risiko-harga-diri-rendah-situasional",
  "kode": "D.0102",
  "nama": "Risiko Harga Diri Rendah Situasional",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "slki": {
    "kode": "L.09069",
    "nama": "Harga diri meningkat",
    "kriteria": [
      "Penilaian diri positif meningkat",
      "Perasaan memiliki kelebihan atau kemampuan positif meningkat",
      "Penerimaan penilaian positif terhadap diri sendiri meningkat",
      "Minat mencoba hal baru meningkat",
      "Berjalan menampakkan wajah meningkat",
      "Postur tubuh menampakkan wajah meningkat",
      "Perasaan malu menurun",
      "Perasaan bersalah menurun",
      "Perasaan tidak mampu melakukan apapun menurun",
      "Meremehkan kemampuan mengatasi masalah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.13478",
      "nama": "Dukungan Penampilan Peran"
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri"
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    }
  ]
},
{
  "id": "0103",
  "slug": "risiko-ketidakberdayaan",
  "kode": "D.0103",
  "nama": "Risiko Ketidakberdayaan",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ketidakberdayaan",
    "daya",
    "kontrol"
  ],
  "slki": {
    "kode": "L.09071",
    "nama": "Keberdayaan meningkat",
    "kriteria": [
      "Verbalisasi mampu melaksanakan aktivitas meningkat",
      "Verbalisasi frustasi menurun",
      "Ketergantungan pada orang lain menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09307",
      "nama": "Promosi Harapan"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0104",
  "slug": "sindrom-pasca-trauma",
  "kode": "D.0104",
  "nama": "Sindrom Pasca Trauma",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.09073",
    "nama": "Ketahanan personal meningkat",
    "kriteria": [
      "Verbalisasi harapan yang positif meningkat",
      "Menggunakan strategi koping yang efektif meningkat",
      "Verbalisasi perasaan meningkat",
      "Menunjukkan harga diri positif meningkat",
      "Mengambil tanggung jawab meningkat",
      "Mencari dukungan emosional meningkat",
      "Menganggap kesulitan sebagai tantangan meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.09274",
      "nama": "Dukungan Proses Berduka"
    },
    {
      "kode": "I.09314",
      "nama": "Reduksi Ansietas"
    }
  ]
},
{
  "id": "0105",
  "slug": "waham",
  "kode": "D.0105",
  "nama": "Waham",
  "definisi": ":.",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.09090",
    "nama": "Status orientasi membaik",
    "kriteria": [
      "Verbalisasi waham menurun",
      "Perilaku waham menurun",
      "Perilaku sesuai realita membaik",
      "Isi pikir sesuai realita membaik",
      "Pembicaraan membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.09295",
      "nama": "Manajemen Waham"
    },
    {
      "kode": "I.09297",
      "nama": "Orientasi Realita"
    }
  ]
},
{
  "id": "0106",
  "slug": "gangguan-tumbuh-kembang",
  "kode": "D.0106",
  "nama": "Gangguan Tumbuh Kembang",
  "definisi": ":.",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [
    "tumbuh kembang",
    "perkembangan",
    "pertumbuhan"
  ],
  "slki": {
    "kode": "",
    "nama": "Status perkembangan membaik",
    "kriteria": [
      "Keterampilan/perilaku sesuai usia meningkat",
      "Kemampuan melakukan perawatan diri meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.10339",
      "nama": "Perawatan perkembangan"
    },
    {
      "kode": "I.10340",
      "nama": "Promosi perkembangan anak"
    },
    {
      "kode": "I.10341",
      "nama": "Promosi perkembangan remaja"
    }
  ]
},
{
  "id": "0107",
  "slug": "risiko-gangguan-perkembangan",
  "kode": "D.0107",
  "nama": "Risiko Gangguan Perkembangan",
  "definisi": ":.",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.10101",
    "nama": "Status perkembangan membaik",
    "kriteria": [
      "Keterampilan/perilaku sesuai usia meningkat",
      "Kemampuan melakukan perawatan diri meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.10340",
      "nama": "Promosi perkembangan anak"
    },
    {
      "kode": "I.10341",
      "nama": "Promosi perkembangan remaja"
    }
  ]
},
{
  "id": "0108",
  "slug": "risiko-gangguan-pertumbuhan",
  "kode": "D.0108",
  "nama": "Risiko Gangguan Pertumbuhan",
  "definisi": ":.",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.10102",
    "nama": "Status pertumbuhan membaik",
    "kriteria": [
      "Berat badan sesuai dengan usia",
      "Panjang/tinggi badan sesuai usia"
    ]
  },
  "siki": [
    {
      "kode": "I.14581",
      "nama": "Skrining kesehatan"
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    }
  ]
},
{
  "id": "0109",
  "slug": "defisit-perawatan-diri",
  "kode": "D.0109",
  "nama": "Defisit Perawatan Diri",
  "definisi": ":.",
  "kategori": "Kebersihan Diri",
  "tipe": "Aktual",
  "keluhan": [
    "perawatan diri",
    "ADL",
    "mandi",
    "makan",
    "berpakaian"
  ],
  "slki": {
    "kode": "L.11103",
    "nama": "Perawatan diri meningkat",
    "kriteria": [
      "Kemampuan mandi meningkat",
      "Kemampuan mengenakan pakaian meningkat",
      "Kemampuan makan meningkat",
      "Kemampuan ke toilet (BAB/BAK) meningkat",
      "Verbalisasi keinginan melakukan perawatan diri meningkat",
      "Minat melakukan perawatan diri meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.11348",
      "nama": "Dukungan Perawatan Diri"
    },
    {
      "kode": "I.11349",
      "nama": "Dukungan Perawatan Diri: BAB/BAK"
    },
    {
      "kode": "I.11350",
      "nama": "Dukungan Perawatan Diri: Berpakaian"
    },
    {
      "kode": "I.11351",
      "nama": "Dukungan Perawatan Diri: Makan/Minum"
    },
    {
      "kode": "I.11352",
      "nama": "Dukungan Perawatan Diri: Mandi"
    }
  ]
},
{
  "id": "0110",
  "slug": "defisit-kesehatan-komunitas",
  "kode": "D.0110",
  "nama": "Defisit Kesehatan komunitas",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.12109",
    "nama": "Status kesehatan komunitas meningkat",
    "kriteria": [
      "Ketersedian program promosi Kesehatan meningkat",
      "Ketersediaan program proteksi Kesehatan meningkat",
      "Partisipasi dalam program Kesehatan komunitas meningkat",
      "Keikutsertaan asuransi/jaminan Kesehatan meningkat",
      "Kepatuhan terhadap standar Kesehatan lingkungan meningkat",
      "Sistem surveilens Kesehatan meningkat",
      "Pemantauan standar Kesehatan komunitas meningkat",
      "Angka mortalitas menurun",
      "Angka morbiditas menurun",
      "Angka gangguan Kesehatan mental menurun",
      "Prevalensi penyakit menurun",
      "Angka penyalahgunaan zat menurun",
      "Angka penyalahgunaan alkohol menurun",
      "Angka kebiasaan merokok menurun",
      "Angka penyakit menular seksual menurun",
      "Angka kelahiran preterm menurun",
      "Angka berat badan lahir rendah menurun",
      "Angka kejadian cidera menurun",
      "Angka kriminalitas menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14548",
      "nama": "Pengembangan Kesehatan Masyarakat"
    },
    {
      "kode": "I.12472",
      "nama": "Promosi Perilaku Upaya Kesehatan"
    }
  ]
},
{
  "id": "0111",
  "slug": "defisit-pengetahuan",
  "kode": "D.0111",
  "nama": "Defisit Pengetahuan",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "pengetahuan",
    "info",
    "edukasi"
  ],
  "slki": {
    "kode": "L.12111",
    "nama": "Tingkat pengetahuan meningkat",
    "kriteria": [
      "Perilaku sesuai anjuran meningkat",
      "Verbalisasi minat dalam belajar meningkat",
      "Kemampuan menjelaskan pengetahuan tentang suatu topik meningkat",
      "Kemampuan menggambarkan pengalaman sebelumnya yang sesuai dengan topik meningkat",
      "Perilaku sesuai dengan pengetahuan meningkat",
      "Pertanyaan tentang masalah yang dihadapi menurun",
      "Persepsi yang keliru terhadap masalah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    }
  ]
},
{
  "id": "0112",
  "slug": "kesiapan-peningkatan-manajemen-kesehatan",
  "kode": "D.0112",
  "nama": "Kesiapan Peningkatan Manajemen Kesehatan",
  "definisi": ": “manajemen Kesehatan meningkat.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "slki": {
    "kode": "L.12104",
    "nama": "Manajemen Kesehatan meningkat",
    "kriteria": [
      "Melakukan Tindakan untuk mengurangi faktor risiko meningkat",
      "Menerapkan program perawatan meningkat",
      "Aktivitas hidup sehari-hari efektif memenuhi tujuan Kesehatan meningkat",
      "Verbalisasi kesulitan dalam menjalani program perawatan/pengobatan menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12359",
      "nama": "Bimbingan Antisipatif"
    },
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    },
    {
      "kode": "I.14502",
      "nama": "Identifikasi Risiko"
    },
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku"
    },
    {
      "kode": "I.12464",
      "nama": "Penentuan Tujuan Bersama"
    }
  ]
},
{
  "id": "0113",
  "slug": "kesiapan-peningkatan-pengetahuan",
  "kode": "D.0113",
  "nama": "Kesiapan Peningkatan Pengetahuan",
  "definisi": ": “tingkat pengetahuan meningkat.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "pengetahuan",
    "info",
    "edukasi"
  ],
  "slki": {
    "kode": "L.12111",
    "nama": "Tingkat pengetahuan meningkat",
    "kriteria": [
      "Perilaku sesuai anjuran meningkat",
      "Verbalisasi minat dalam belajar meningkat",
      "Kemampuan menjelaskan pengetahuan tentang suatu topik meningkat",
      "Kemampuan menggambarkan pengalaman sebelumnya yang sesuai dengan topik meningkat",
      "Perilaku sesuai dengan pengetahuan meningkat",
      "Pertanyaan tentang masalah yang dihadapi menurun",
      "Persepsi yang keliru terhadap masalah menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    },
    {
      "kode": "I.12470",
      "nama": "Promosi Kesiapan Penerimaan Informasi"
    }
  ]
},
{
  "id": "0114",
  "slug": "ketidakpatuhan",
  "kode": "D.0114",
  "nama": "Ketidakpatuhan",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.12110",
    "nama": "Tingkat kepatuhan meningkat",
    "kriteria": [
      "Verbalisasi kemauan mematuhi program perawatan atau pengobatan meningkat",
      "Verbalisasi mengikuti anjuran meningkat",
      "Perilaku mengikuti program perawatan/pengobatan membaik",
      "Perilaku menjalankan anjuran membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12361",
      "nama": "Dukungan Kepatuhan Program Pengobatan"
    },
    {
      "kode": "I.09277",
      "nama": "Dukungan tanggung jawab pada diri sendiri"
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0115",
  "slug": "manajemen-kesehatan-keluarga-tidak-efektif",
  "kode": "D.0115",
  "nama": "Manajemen Kesehatan Keluarga Tidak Efektif",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "slki": {
    "kode": "L.12105",
    "nama": "Manajemen kesehatan keluarga meningkat",
    "kriteria": [
      "Kemampuan menjelaskan masalah kesehatan yang dialami meningkat",
      "Aktivitas keluarga mengatasi masalah kesehatan tepat meningkat",
      "Verbalisasi kesulitan menjalankan perawatan yang ditetapkan menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09260",
      "nama": "Dukungan Koping Keluarga"
    },
    {
      "kode": "I.13477",
      "nama": "Dukungan Keluarga Merencanakan Perawatan"
    },
    {
      "kode": "I.12482",
      "nama": "Koordinasi Diskusi Keluarga"
    },
    {
      "kode": "I.13486",
      "nama": "Pendampingan Keluarga"
    }
  ]
},
{
  "id": "0116",
  "slug": "manajemen-kesehatan-tidak-efektif",
  "kode": "D.0116",
  "nama": "Manajemen Kesehatan Tidak Efektif",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "slki": {
    "kode": "L.12104",
    "nama": "Manajemen kesehatan meningkat",
    "kriteria": [
      "Melakukan tindakan untuk mengurangi faktor risiko meningkat",
      "Menerapkan program perawatan meningkat",
      "Aktivitas hidup sehari-hari efektif memenuhi tujuan kesehatan meningkat",
      "Verbalisasi kesulitan dalam menjalani program perawatan/pengobatan menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09265",
      "nama": "Dukungan Pengambilan Keputusan"
    },
    {
      "kode": "I.09277",
      "nama": "Dukungan tanggung jawab pada diri sendiri"
    },
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    },
    {
      "kode": "I.14525",
      "nama": "Pelibatan Keluarga"
    }
  ]
},
{
  "id": "0117",
  "slug": "pemeliharaan-kesehatan-tidak-efektif",
  "kode": "D.0117",
  "nama": "Pemeliharaan Kesehatan Tidak Efektif",
  "definisi": ":.",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.12106",
    "nama": "Pemeliharaan kesehatan meningkat",
    "kriteria": [
      "Menunjukkan perilaku adaptif meningkat",
      "Menunjukkan pemahaman perilaku sehat meningkat",
      "Kemampuan menjalankan perilaku sehat meeningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan"
    },
    {
      "kode": "I.09282",
      "nama": "Kontrak Perilaku Positif"
    },
    {
      "kode": "I.12464",
      "nama": "Penentuan Tujuan Bersama"
    },
    {
      "kode": "I.12472",
      "nama": "Promosi Perilaku Upaya Kesehatan"
    }
  ]
},
{
  "id": "0118",
  "slug": "gangguan-interaksi-sosial",
  "kode": "D.0118",
  "nama": "Gangguan Interaksi Sosial",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "interaksi",
    "sosial",
    "berinteraksi"
  ],
  "slki": {
    "kode": "L.13115",
    "nama": "Interaksi sosial meningkat",
    "kriteria": [
      "Perasaan nyaman dengan situasi sosial meningkat",
      "Perasaan mudah menerima atau mengkomunikasikan perasaan meningkat",
      "Responsif pada orang lain meningkat",
      "Minat melakukan kontak emosi meningkat",
      "Minat melakukan kontak fisik meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.13484",
      "nama": "Modifikasi Perilaku Keterampilan Sosial"
    },
    {
      "kode": "I.13498",
      "nama": "Promosi Sosialisasi"
    }
  ]
},
{
  "id": "0119",
  "slug": "gangguan-komunikasi-verbal",
  "kode": "D.0119",
  "nama": "Gangguan Komunikasi Verbal",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "komunikasi",
    "bicara",
    "berbicara"
  ],
  "slki": {
    "kode": "L.13118",
    "nama": "Komunikasi verbal meningkat",
    "kriteria": [
      "Kemampuan berbicara meningkat",
      "Kemampuan mendengar meningkat",
      "Kesesuaian ekspresi wajah/tubuh meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.13492",
      "nama": "Promosi Komunikasi: Defisit Bicara"
    },
    {
      "kode": "I.13493",
      "nama": "Promosi Komunikasi: Defisit Pendengaran"
    },
    {
      "kode": "I.13494",
      "nama": "Promosi Komunikasi: Defisit Visual"
    }
  ]
},
{
  "id": "0120",
  "slug": "gangguan-proses-keluarga",
  "kode": "D.0120",
  "nama": "Gangguan Proses Keluarga",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "keluarga",
    "family",
    "proses keluarga"
  ],
  "slki": {
    "kode": "L.13124",
    "nama": "Proses keluarga membaik",
    "kriteria": [
      "Adaptasi keluarga terhadap situasi meningkat",
      "Kemampuan keluarga berkomunikasi secara terbuka diantara anggota keluarga meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.09260",
      "nama": "Dukungan Koping Keluarga"
    },
    {
      "kode": "I.13496",
      "nama": "Promosi Proses Efektif Keluarga"
    },
    {
      "kode": "I.09322",
      "nama": "Terapi Keluarga"
    }
  ]
},
{
  "id": "0121",
  "slug": "isolasi-sosial",
  "kode": "D.0121",
  "nama": "Isolasi Sosial",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "isolasi",
    "menyendiri",
    "terisolasi"
  ],
  "slki": {
    "kode": "L.13116",
    "nama": "Keterlibatan sosial meningkat",
    "kriteria": [
      "Minat interaksi meningkat",
      "Verbalisasi isolasi menurun",
      "Verbalisasi ketidakamanan ditempat umum menurun",
      "Perilaku menarik diri menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.13498",
      "nama": "Promosi Sosialisasi"
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Aktivitas"
    }
  ]
},
{
  "id": "0122",
  "slug": "kesiapan-peningkatan-menjadi-orang-tua",
  "kode": "D.0122",
  "nama": "Kesiapan Peningkatan Menjadi Orang Tua",
  "definisi": ": “peran menjadi orang tua membaik.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "orang tua",
    "parenting",
    "pengasuhan"
  ],
  "slki": {
    "kode": "L.13120",
    "nama": "Peran menjadi orang tua membaik",
    "kriteria": [
      "Bounding attachment meningkat",
      "Perilaku positif menjadi orang tua meningkat",
      "Interaksi perawatan bayi meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12466",
      "nama": "Promosi Antisipasi Keluarga"
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan"
    }
  ]
},
{
  "id": "0123",
  "slug": "kesiapan-peningkatan-proses-keluarga",
  "kode": "D.0123",
  "nama": "Kesiapan Peningkatan Proses Keluarga",
  "definisi": ": “proses keluarga membaik.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "keluarga",
    "family",
    "proses keluarga"
  ],
  "slki": {
    "kode": "L.13123",
    "nama": "Proses keluarga membaik",
    "kriteria": [
      "Adaptasi keluarga terhadap situasi meningkat",
      "Kemampuan keluarga berkomunikasi secara terbuka di antara anggota keluarga meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.13490",
      "nama": "Promosi Keutuhan Keluarga"
    },
    {
      "kode": "I.13496",
      "nama": "Promosi Proses Efektif Keluarga"
    }
  ]
},
{
  "id": "0124",
  "slug": "ketegangan-peran-pemberi-asuhan",
  "kode": "D.0124",
  "nama": "Ketegangan Peran Pemberi Asuhan",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.13121",
    "nama": "Peran pemberi asuhan membaik",
    "kriteria": [
      "Kemampuan memberi asuhan meningkat",
      "Kemampuan merawat pasien meningkat",
      "Kekhawatiran dirawat kembali menurun",
      "Kekhawatiran kelanjutan perawatan menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12402",
      "nama": "Edukasi Pada Pengasuh"
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan"
    }
  ]
},
{
  "id": "0125",
  "slug": "penampilan-peran-tidak-efektif",
  "kode": "D.0125",
  "nama": "Penampilan Peran Tidak Efektif",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.13119",
    "nama": "Penampilan peran membaik",
    "kriteria": [
      "Verbalisasi harapan terpenuhi meningkat",
      "Verbalisasi kepuasan peran meningkat",
      "Verbalisasi keluasan peran meningkat",
      "Adaptasi peran meningkat",
      "Strategi koping yang efektif meningkat",
      "Verbalisasi perasaan bingung menjalankan peran menurun",
      "Konlik peran menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.13478",
      "nama": "Dukungan Penampilan Peran"
    }
  ]
},
{
  "id": "0126",
  "slug": "pencapaian-peran-menjadi-orang-tua",
  "kode": "D.0126",
  "nama": "Pencapaian Peran Menjadi Orang Tua",
  "definisi": ": “peran menjadi orang tua membaik.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "orang tua",
    "parenting",
    "pengasuhan"
  ],
  "slki": {
    "kode": "L.13120",
    "nama": "Peran menjadi orang tua membaik",
    "kriteria": [
      "Bounding attachment meningkat",
      "Perilaku positif menjadi orang tua meningkat",
      "Interaksi perawatan bayi meningkat"
    ]
  },
  "siki": [
    {
      "kode": "I.12466",
      "nama": "Promosi Antisipasi Keluarga"
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan"
    }
  ]
},
{
  "id": "0127",
  "slug": "risiko-gangguan-perlekatan",
  "kode": "D.0127",
  "nama": "Risiko Gangguan Perlekatan",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "perlekatan",
    "bonding",
    "attachment"
  ],
  "slki": {
    "kode": "L.13122",
    "nama": "Perlekatan meningkat",
    "kriteria": [
      "Mempraktikkan perilaku sehat selama hamil meningkat",
      "Menyiapkan perlengkapan bayi sebelum kelahiran meningkat",
      "Verbalisasi perasaan positif terhadap bayi meningkat",
      "Mencium bayi meningkat",
      "Melakukan kontak mata dengan bayi meningkat",
      "Berbicara dengan bayi meningkat",
      "Bermain dengan bayi meningkat",
      "Berespons dengan isyarat bayi meningkat",
      "Kekhawatiran menjalankan peran orang tua menurun",
      "Konflik hubungan orang tua dan bayi/anak menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.10342",
      "nama": "Promosi Perlekatan"
    },
    {
      "kode": "I.13490",
      "nama": "Promosi Keutuhan Keluarga"
    }
  ]
},
{
  "id": "0128",
  "slug": "risiko-proses-pengasuhan-tidak-efektif",
  "kode": "D.0128",
  "nama": "Risiko Proses Pengasuhan Tidak Efektif",
  "definisi": ":.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.13124",
    "nama": "Proses pengasuhan membaik",
    "kriteria": [
      "Terpapar informasi tentang proses persalinan/pengasuhan meningkat",
      "Kekerasan dalam rumah tangga menurun",
      "Stres psikologis menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.13490",
      "nama": "Promosi Keutuhan Keluarga"
    },
    {
      "kode": "I.10342",
      "nama": "Promosi Perlekatan"
    }
  ]
},
{
  "id": "0129",
  "slug": "gangguan-integritas-kulitjaringan",
  "kode": "D.0129",
  "nama": "Gangguan Integritas Kulit/Jaringan",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kulit",
    "luka",
    "integritas"
  ],
  "slki": {
    "kode": "L.14125",
    "nama": "Integritas kulit/jaringan meningkat",
    "kriteria": [
      "Kerusakan jaringan menurun",
      "Kerusakan lapisan kulit menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.11353",
      "nama": "Perawatan Integritas Kulit"
    },
    {
      "kode": "I.14564",
      "nama": "Perawatan Luka"
    }
  ]
},
{
  "id": "0130",
  "slug": "hipertermia",
  "kode": "D.0130",
  "nama": "Hipertermia",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Termoregulasi membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.15506",
      "nama": "Manajemen Hipertermia"
    },
    {
      "kode": "I.14578",
      "nama": "Regulasi Temperatur"
    }
  ]
},
{
  "id": "0131",
  "slug": "hipotermia",
  "kode": "D.0131",
  "nama": "Hipotermia",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Termoregulasi membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.14507",
      "nama": "Manajemen Hipotermia"
    },
    {
      "kode": "I.14586",
      "nama": "Terapi Paparan Panas"
    }
  ]
},
{
  "id": "0132",
  "slug": "perilaku-kekerasan",
  "kode": "D.0132",
  "nama": "Perilaku Kekerasan",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kekerasan",
    "agresif",
    "amarah"
  ],
  "slki": {
    "kode": "L.09076",
    "nama": "Kontrol diri meningkat",
    "kriteria": [
      "Verbalisasi ancaman kepada orang lain menurun",
      "Verbalisasi umpatan menurun",
      "Perilaku menyerang menurun",
      "Perilaku melukai diri sendiri/orang lain menurun",
      "Perilaku merusak lingkungan sekitar menurun",
      "Perilaku agresi/amuk menurun",
      "Suara keras menurun",
      "Bicara ketus menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14513",
      "nama": "Manajemen Keselamatan Lingkungan"
    },
    {
      "kode": "I.09289",
      "nama": "Manajemen Mood"
    },
    {
      "kode": "I.09290",
      "nama": "Manajemen Pengendalian Marah"
    },
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku"
    }
  ]
},
{
  "id": "0133",
  "slug": "perlambatan-pemulihan-pascabedah",
  "kode": "D.0133",
  "nama": "Perlambatan Pemulihan Pascabedah",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "pemulihan",
    "penyembuhan",
    "post operasi"
  ],
  "slki": {
    "kode": "L.14129",
    "nama": "Pemulihan pascabedah meningkat",
    "kriteria": [
      "Kenyamanan meningkat",
      "Waktu penyembuhan menurun",
      "Area luka operasi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.11348",
      "nama": "Dukungan Perawatan Diri"
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    },
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri"
    },
    {
      "kode": "I.14564",
      "nama": "Perawatan Luka"
    }
  ]
},
{
  "id": "0134",
  "slug": "risiko-alergi",
  "kode": "D.0134",
  "nama": "Risiko Alergi",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "alergi",
    "reaksi",
    "hipersensitif"
  ],
  "slki": {
    "kode": "L.14131",
    "nama": "Respon alergi lokal menurunRespon alergi sistemik menurun",
    "kriteria": [
      "Respon alergi lokal menurun",
      "Respon alergi sistemik menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12445",
      "nama": "Edukasi Reaksi Alergi"
    },
    {
      "kode": "I.14535",
      "nama": "Pencegahan Alergi"
    }
  ]
},
{
  "id": "0135",
  "slug": "risiko-bunuh-diri",
  "kode": "D.0135",
  "nama": "Risiko Bunuh Diri",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "bunuh diri",
    "suicide",
    "mengakhiri hidup"
  ],
  "slki": {
    "kode": "L.09076",
    "nama": "Verbalisasi keinginan bunuh diri menurunVerbalisasi isyarat bunuh diri menurunVerbalisasi ancaman bunuh diri menurunVerbalisasi rencana bunuh diri menurun",
    "kriteria": [
      "Verbalisasi keinginan bunuh diri menurun",
      "Verbalisasi isyarat bunuh diri menurun",
      "Verbalisasi ancaman bunuh diri menurun",
      "Verbalisasi rencana bunuh diri menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.09289",
      "nama": "Manajemen Mood"
    },
    {
      "kode": "I.14538",
      "nama": "Pencegahan Bunuh Diri"
    }
  ]
},
{
  "id": "0136",
  "slug": "risiko-cedera",
  "kode": "D.0136",
  "nama": "Risiko Cedera",
  "definisi": "“tingkat cedera menurun”.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "slki": {
    "kode": "L.14136",
    "nama": "Kejadian cedera menurunLuka/lecet menurun",
    "kriteria": [
      "Kejadian cedera menurun",
      "Luka/lecet menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14513",
      "nama": "Manajemen Keselamatan Lingkungan"
    },
    {
      "kode": "I.14537",
      "nama": "Pencegahan Cedera"
    }
  ]
},
{
  "id": "0137",
  "slug": "risiko-cedera-pada-ibu",
  "kode": "D.0137",
  "nama": "Risiko Cedera Pada Ibu",
  "definisi": "“tingkat cedera menurun”.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "slki": {
    "kode": "L.14136",
    "nama": "Kejadian cedera menurunLuka/lecet menurun",
    "kriteria": [
      "Kejadian cedera menurun",
      "Luka/lecet menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14537",
      "nama": "Pencegahan Cedera"
    },
    {
      "kode": "I.07228",
      "nama": "Perawatan Persalinan Risiko Tinggi"
    },
    {
      "kode": "I.14560",
      "nama": "Perawatan Kehamilan Risiko Tinggi"
    }
  ]
},
{
  "id": "0138",
  "slug": "risiko-cedera-pada-janin",
  "kode": "D.0138",
  "nama": "Risiko Cedera Pada Janin",
  "definisi": "“tingkat cedera menurun”.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "slki": {
    "kode": "L.14136",
    "nama": "Kejadian cedera menurunLuka/lecet menurun",
    "kriteria": [
      "Kejadian cedera menurun",
      "Luka/lecet menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.02056",
      "nama": "Pemantauan denyut jantung janin"
    },
    {
      "kode": "I.14537",
      "nama": "Pencegahan Cedera"
    },
    {
      "kode": "I.14554",
      "nama": "Pengukuran Gerakan Janin"
    }
  ]
},
{
  "id": "0139",
  "slug": "risiko-gangguan-integritas-kulitjaringan",
  "kode": "D.0139",
  "nama": "Risiko Gangguan Integritas Kulit/Jaringan",
  "definisi": ": “integritas kulit/jaringan meningkat.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kulit",
    "luka",
    "integritas"
  ],
  "slki": {
    "kode": "L.14125",
    "nama": "Integritas kulit/jaringan meningkat",
    "kriteria": [
      "Kerusakan jaringan menurun",
      "Kerusakan lapisan kulit menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.11353",
      "nama": "Perawatan Integritas Kulit"
    }
  ]
},
{
  "id": "0140",
  "slug": "risiko-hipotermia",
  "kode": "D.0140",
  "nama": "Risiko Hipotermia",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Termoregulasi membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.14507",
      "nama": "Manajemen Hipotermia"
    },
    {
      "kode": "I.14578",
      "nama": "Regulasi Temperatur"
    }
  ]
},
{
  "id": "0141",
  "slug": "risiko-hipotermia-perioperatif",
  "kode": "D.0141",
  "nama": "Risiko Hipotermia Perioperatif",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Termoregulasi membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.14507",
      "nama": "Manajemen Hipotermia"
    },
    {
      "kode": "I.02058",
      "nama": "Pemantauan hemodinamik invasif"
    }
  ]
},
{
  "id": "0142",
  "slug": "risiko-infeksi",
  "kode": "D.0142",
  "nama": "Risiko Infeksi",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "integrasi",
    "kuman",
    "bakteri",
    "virus"
  ],
  "slki": {
    "kode": "L.14137",
    "nama": "Demam menurunKemerahan menurunNyeri menurunBengkak menurunKadar sel darah putih membaik",
    "kriteria": [
      "Demam menurun",
      "Kemerahan menurun",
      "Nyeri menurun",
      "Bengkak menurun",
      "Kadar sel darah putih membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.14508",
      "nama": "Manajemen Imunisasi/Vaksinasi"
    },
    {
      "kode": "I.14539",
      "nama": "Pencegahan Infeksi"
    }
  ]
},
{
  "id": "0143",
  "slug": "risiko-jatuh",
  "kode": "D.0143",
  "nama": "Risiko Jatuh",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "jatuh",
    "fall",
    "tergelincir"
  ],
  "slki": {
    "kode": "L.14138",
    "nama": "Jatuh dari tempat tidur menurunJatuh saat berdiri menurunJatuh saat duduk menurunJatuh saat berjalan menurun",
    "kriteria": [
      "Jatuh dari tempat tidur menurun",
      "Jatuh saat berdiri menurun",
      "Jatuh saat duduk menurun",
      "Jatuh saat berjalan menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14540",
      "nama": "Pencegahan Jatuh"
    },
    {
      "kode": "I.14513",
      "nama": "Manajemen Keselamatan Lingkungan"
    }
  ]
},
{
  "id": "0144",
  "slug": "risiko-luka-tekan",
  "kode": "D.0144",
  "nama": "Risiko Luka Tekan",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "luka tekan",
    "decubitus",
    "dekubitus"
  ],
  "slki": {
    "kode": "L.14125",
    "nama": "Kerusakan jaringan menurunKerusakan lapisan kulit menurun",
    "kriteria": [
      "Kerusakan jaringan menurun",
      "Kerusakan lapisan kulit menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.06195",
      "nama": "Manajemen Sensasi Perifer"
    },
    {
      "kode": "I.14543",
      "nama": "Pencegahan Luka Tekan"
    }
  ]
},
{
  "id": "0145",
  "slug": "risiko-mutilasi-diri",
  "kode": "D.0145",
  "nama": "Risiko Mutilasi Diri",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "mutilasi",
    "self harm",
    "menyakiti diri"
  ],
  "slki": {
    "kode": "L.09076",
    "nama": "Verbalisasi melukai diri sendiri menurun\\Alam perasaan depresi menurunPerilaku agresif menurun",
    "kriteria": [
      "Verbalisasi melukai diri sendiri menurun\\",
      "Alam perasaan depresi menurun",
      "Perilaku agresif menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.12392",
      "nama": "Edukasi Manajemen Stres"
    },
    {
      "kode": "I.09282",
      "nama": "Kontrak Perilaku Positif"
    },
    {
      "kode": "I.09290",
      "nama": "Manajemen Pengendalian Marah"
    }
  ]
},
{
  "id": "0146",
  "slug": "risiko-perilaku-kekerasan",
  "kode": "D.0146",
  "nama": "Risiko Perilaku Kekerasan",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kekerasan",
    "agresif",
    "amarah"
  ],
  "slki": {
    "kode": "L.09076",
    "nama": "Verbalisasi ancaman kepada orang lain menurunVerbalisasi umpatan menurunSuara keras menurunBicara ketus menurun",
    "kriteria": [
      "Verbalisasi ancaman kepada orang lain menurun",
      "Verbalisasi umpatan menurun",
      "Suara keras menurun",
      "Bicara ketus menurun"
    ]
  },
  "siki": [
    {
      "kode": "I.14544",
      "nama": "Pencegahan Perilaku Kekerasan"
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping"
    }
  ]
},
{
  "id": "0147",
  "slug": "risiko-perlambatan-pemulihan-pascabedah",
  "kode": "D.0147",
  "nama": "Risiko Perlambatan Pemulihan Pascabedah",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "pemulihan",
    "penyembuhan",
    "post operasi"
  ],
  "slki": {
    "kode": "L.14129",
    "nama": "Kenyamanan meningkatWaktu penyembuhan menurunArea luka operasi membaik",
    "kriteria": [
      "Kenyamanan meningkat",
      "Waktu penyembuhan menurun",
      "Area luka operasi membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.05173",
      "nama": "Dukungan Mobilisasi"
    },
    {
      "kode": "I.12391",
      "nama": "Edukasi Manajemen Nyeri"
    },
    {
      "kode": "I.12395",
      "nama": "Edukasi Nutrisi"
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi"
    },
    {
      "kode": "I.02067",
      "nama": "Pencegahan Perdarahan"
    }
  ]
},
{
  "id": "0148",
  "slug": "risiko-termoregulasi-tidak-efektif",
  "kode": "D.0148",
  "nama": "Risiko Termoregulasi Tidak Efektif",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Menggigil menurunSuhu tubuh membaikSuhu kulit membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.12414",
      "nama": "Edukasi Pengukuran Suhu Tubuh"
    },
    {
      "kode": "I.12457",
      "nama": "Edukasi Termoregulasi"
    }
  ]
},
{
  "id": "0149",
  "slug": "termoregulasi-tidak-efektif",
  "kode": "D.0149",
  "nama": "Termoregulasi Tidak Efektif",
  "definisi": ":.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "slki": {
    "kode": "L.14134",
    "nama": "Termoregulasi membaik",
    "kriteria": [
      "Menggigil menurun",
      "Suhu tubuh membaik",
      "Suhu kulit membaik"
    ]
  },
  "siki": [
    {
      "kode": "I.14578",
      "nama": "Regulasi Temperatur"
    }
  ]
}
];
