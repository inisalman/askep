// Data lengkap 149 Diagnosis Keperawatan SDKI
import type { Diagnosis } from './diagnosis';

export const allDiagnosesData: Diagnosis[] = [
{
  "id": "0001",
  "slug": "bersihan-jalan-napas-tidak-efektif",
  "kode": "D.0001",
  "nama": "Bersihan Jalan Napas Tidak Efektif",
  "definisi": "Bersihan jalan napas tidak efektif adalah ketidakmampuan membersihkan sekret atau obstruksi jalan nafas untuk mempertahankan jalan nafas",
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
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Batuk tidak efektif",
      "Tidak mampu batuk",
      "Sputum berlebih",
      "Mengi, wheezing, dan/atau ronchi kering",
      "Mekonium di jalan napas (pada neonatus)"
    ]
  },
  "faktorTerkait": [
    "Spasme jalan napas",
    "Hipersekresi jalan napas",
    "Disfungsi neuromuskuler",
    "Benda asing dalam jalan napas",
    "Adanya jalan napas buatan",
    "Sekresi yang tertahan",
    "Hyperplasia dinding jalan napas",
    "Proses infeksi",
    "Respon alergi",
    "Efek agen farmakologis (mis. Anestesi)",
    "Merokok aktif",
    "Merokok pasif",
    "Terpajan polutan",
    "Merokok",
    "Infeksi",
    "Faktor patogen (penyakit)",
    "Stres oksidatif",
    "Anafilaksis yang dimediasi IgE",
    "Mekanisme non-alergi yang dipicu oleh faktor mekanis (yaitu, intubasi orotrakeal),",
    "Diinduksi oleh obat (yaitu, atracurium, morfin dan meperidine)",
    "Bronkospasme pada pasien dengan jalan napas hiper-reaktif"
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
      "nama": "Latihan Batuk Efektif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan batuk",
          "Monitor adanya retensi sputum",
          "Monitor tanda dan gejala infeksi saluran napas",
          "Monitor input dan output cairan (misal: jumlah dan karakteristik)",
          "Atur posisi semi-fowler dan fowler",
          "Pasang perlak dan bengkok di pangkuan pasien",
          "Buang sekret pada tempat sputum",
          "Jelaskan tujuan dan prosedur batuk efektif",
          "Anjurkan Tarik napas dalam melalui hidung selama 4 detik, ditahan selama 2 detik, kemudian keluarkan dari mulut dengan bibir mencucu (dibulatkan) selama 8 detik",
          "Anjurkan mengulangi Tarik napas dalam hingga 3 kali",
          "Anjutkan batuk dengan kuat langsung setelah Tarik napas dalam yang ke-3",
          "Kolaborasi pemberian mukolitik atau ekspektoran, jika perlu."
        ]
      }
    },
    {
      "kode": "I.01011",
      "nama": "Manajemen Jalan Napas",
      "tindakan": {
        "terapeutik": [
          "Monitor pola napas (frekuensi, kedalaman, usaha napas)",
          "Monitor bunyi napas tambahan (misalnya: gurgling, mengi, wheezing, ronchi kering)",
          "Monitor sputum (jumlah, warna, aroma)",
          "Pertahankan kepatenan jalan napas dengan head-tilt dan chin-lift (jaw thrust jika curiga trauma fraktur servikal)",
          "Posisikan semi-fowler atau fowler",
          "Berikan minum hangat",
          "Lakukan fisioterapi dada, jika perlu",
          "Lakukan penghisapan lendir kurang dari 15 detik",
          "Lakukan hiperoksigenasi sebelum penghisapan endotrakeal",
          "Keluarkan sumbatan benda padat dengan forsep McGill",
          "Berikan oksigen, jika perlu",
          "Anjurkan asupan cairan 2000 ml/hari, jika tidak ada kontraindikasi",
          "Ajarkan Teknik batuk efektif",
          "Kolaborasi pemberian bronkodilator, ekspektoran, mukolitik, jika perlu."
        ]
      }
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi, irama, kedalaman dan upaya napas",
          "Monitor pola napas (seperti bradypnea, takipnea, hiperventilasi, kussmaul, Cheyne-stokes, biot, ataksik)",
          "Monitor kemampuan batuk efektif",
          "Monitor adanya produksi sputum",
          "Monitor adanya sumbatan jalan napas",
          "Palpasi kesimetrisan ekspansi paru",
          "Auskultasi bunyi napas",
          "Monitor saturasi oksigen",
          "Monitor nilai analisa gas darah",
          "Monitor hasil x-ray thoraks",
          "Atur interval pemantauan respirasi sesuai kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu."
        ]
      }
    }
  ]
},
{
  "id": "0002",
  "slug": "gangguan-penyapihan-ventilator",
  "kode": "D.0002",
  "nama": "Gangguan Penyapihan Ventilator",
  "definisi": "Gangguan penyapihan ventilator adalah ketidakmampuan beradaptasi dengan pengurangan bantuan ventilator mekanik yang menghambat penyapihan.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "ventilator",
    "weaning",
    "sesak",
    "nafas cepat"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Frekuensi napas meningkat",
      "Penggunaan otot bantu napas",
      "Napas megap-megap",
      "Upaya napas dan bantuan ventilator tidak sinkron",
      "Napas dangkal",
      "Agitasi",
      "Nilai gas darah arteri tidak normal"
    ]
  },
  "faktorTerkait": [
    "Hipersekresi jalan napas",
    "Ketidakcukupan energi",
    "Hambatan upaya nafas ( misalnya nyeri saat bernapas, kelemahan otot pernapasan, efek sedasi)",
    "Kecemasan",
    "Perasaan tidak berdaya",
    "Kurang terpapar informasi tentang proses penyapihan",
    "Penurunan motivasi",
    "Ketidakdekuatan dukungan sosial",
    "Ketidaktepatan kecepatan proses penyapihan",
    "Riwayat kegagalan berulang dalam upaya penyapihan",
    "Riwayat ketergantungan ventilator > 4 hari"
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
      "nama": "Penyapihan Ventilasi Mekanik",
      "tindakan": {
        "terapeutik": [
          "Periksa kemampuan untuk disapih (meliputi: hemodinamik stabil, kondisi optimal, bebas infeksi)",
          "Monitor predictor kemampuan untuk mentolerir penyapihan (mis. Tingkat kemampuan bernapas, kapasitas vital, Vd/Vt, MVV, kekuatan inspirasi, FEV1, tekanan inspirasi negatif)",
          "Monitor tanda-tanda kelelahan otot pernapasan (misal: kenaikan PaCO2 mendadak, napas cepat dan dangkal, Gerakan dinding abdomen paradoks), hipoksemia, dan hipoksia jaringan saat penyapihan)",
          "Monitor status cairan dan elektrolit",
          "Posisikan semi-fowler (30 – 45 derajat)",
          "Lakukan pengisapan jalan napas, jika perlu",
          "Berikan fisioterapi dada, jika perlu",
          "Lakukan ujicoba penyapihan (30 – 120 menit dengan napas spontan yang dibantu ventilator)",
          "Gunakan Teknik relaksasi, jika perlu",
          "Hindari pemberian sedasi farmakologis selama percobaan penyapihan",
          "Berikan dukungan psikologis",
          "Ajarkan cara pengontrolan napas saat penyapihan",
          "Kolaborasi pemberian obat yang meningkatkan kepatenan jalan napas dan pertukaran gas."
        ]
      }
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi",
      "tindakan": {
        "terapeutik": []
      }
    }
  ]
},
{
  "id": "0003",
  "slug": "gangguan-pertukaran-gas",
  "kode": "D.0003",
  "nama": "Gangguan Pertukaran Gas",
  "definisi": "Gangguan pertukaran gas adalah kelebihan atau kekurangan oksigenasi dan/atau eliminasi karbondioksida pada membran alveolus-kapiler.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "sianosis",
    "biru",
    "hipoksia",
    "spO2"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "PCO2 meningkat/menurun",
      "PO2 menurun",
      "pH arteri meningkat/menurun",
      "Takikardia",
      "Adanya bunyi napas tambahan (mis. wheezing, rales)"
    ]
  },
  "faktorTerkait": [
    "Ketidakseimbangan ventilasi-perfusi",
    "Perubahan membran alveolus-kapiler"
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
      "nama": "Pemantauan Respirasi",
      "tindakan": {
        "terapeutik": []
      }
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Oksigen",
      "tindakan": {
        "terapeutik": []
      }
    }
  ]
},
{
  "id": "0004",
  "slug": "gangguan-ventilasi-spontan",
  "kode": "D.0004",
  "nama": "Gangguan Ventilasi Spontan",
  "definisi": "Gangguan ventilasi spontan adalah penurunan cadangan energi yang mengakibatkan individu tidak mampu bernapas secara adekuat.",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "lemah",
    "ventilasi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Penggunaan otot bantu napas meningkat",
      "Volume tidak menurun",
      "PCO2 meningkat",
      "PO2 menurun",
      "SaO2 menurun"
    ]
  },
  "faktorTerkait": [
    "Gangguan metabolisme",
    "Kelelahan otot pernapasan"
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
      "nama": "Dukungan Ventilasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi adanya kelelahan otot bantu napas",
          "Identifikasi efek perubahan posisi terhadap status pernapasan",
          "Monitor status respirasi dan oksigenasi (misal: frekuensi dan kedalaman napas, penggunaan otot bantu napas, bunyi napas tambahan, saturasi oksigen)",
          "Pertahankan kepatenan jalan napas",
          "Berikan posisi semi-fowler dan fowler",
          "Fasilitasi mengubah posisi senyaman mungkin",
          "Berikan oksigenasi sesuai kebutuhan (misal: nasal kanul, masker wajah, masker rebreathing atau non-rebreathing)",
          "Gunakan bag-valve mask, jika perlu",
          "Ajarkan melakukan Teknik relaksasi napas dalam",
          "Ajarkan mengubah posisi secara mandiri",
          "Ajarkan Teknik batuk efektif",
          "Kolaborasi pemberian bronkodilator, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi, irama, kedalaman dan upaya napas",
          "Monitor pola napas (seperti bradypnea, takipnea, hiperventilasi, kussmaul, Cheyne-stokes, biot, ataksik)",
          "Monitor kemampuan batuk efektif",
          "Monitor adanya produksi sputum",
          "Monitor adanya sumbatan jalan napas",
          "Palpasi kesimetrisan ekspansi paru",
          "Auskultasi bunyi napas",
          "Monitor saturasi oksigen",
          "Monitor nilai analisa gas darah",
          "Monitor hasil x-ray thoraks",
          "Atur interval pemantauan respirasi sesuai kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu."
        ]
      }
    }
  ]
},
{
  "id": "0005",
  "slug": "pola-napas-tidak-efektif",
  "kode": "D.0005",
  "nama": "Pola Napas Tidak Efektif",
  "definisi": "Pola napas tidak efektif adalah inspirasi dan/atau ekspirasi yang tidak memberikan ventilasi adekuat. Pola napas tidak efektif dapat terjadi",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "sesak",
    "dyspnea",
    "nafas",
    "pernapasan"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Penggunaan otot bantu pernapasan",
      "Fase ekspirasi memanjang",
      "Pola napas abnormal (mis. takipnea, bradipnea, hiperventilasi, kussmaul, cheyne-stokes)",
      "Adanya bunyi napas tambahan (mis. wheezing, rales)"
    ]
  },
  "faktorTerkait": [
    "Depresi pusat pernapasan",
    "Hambatan upaya napas (mis. nyeri saat bernapas, kelemahan otot pernapasan)",
    "Deformitas dinding dada",
    "Deformitas tulang dada",
    "Gangguan neuromuskular",
    "Gangguan neurologis (mis. elektroensefalogram [EEG] positif, cidera kepala, gangguan kejang)",
    "Imaturitas neurologis",
    "Penurunan energi",
    "Obesitas",
    "Posisi tubuh yang menghambat ekspansi paru",
    "Sindrom hipoventilasi",
    "Kerusakan inervasi diafragma (kerusakan saraf C5 keatas)",
    "Cidera pada medula spinalis",
    "Efek agen farmakologis",
    "Kecemasan"
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
      "nama": "Manajemen Jalan Napas",
      "tindakan": {
        "terapeutik": []
      }
    },
    {
      "kode": "I.01014",
      "nama": "Pemantauan Respirasi",
      "tindakan": {
        "terapeutik": []
      }
    }
  ]
},
{
  "id": "0006",
  "slug": "risiko-aspirasi",
  "kode": "D.0006",
  "nama": "Risiko Aspirasi",
  "definisi": "Risiko aspirasi didefinisikan sebagai risiko mengalami masuknya benda cair atau padat ke dalam saluran trakeobronkhial akibat",
  "kategori": "Respirasi",
  "tipe": "Aktual",
  "keluhan": [
    "aspirasi",
    "tersedak",
    "menelan"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Penurunan tingkat kesadaran",
    "Penurunan refleks muntah dan/atau batuk",
    "Gangguan menelan",
    "Disfagia",
    "Kerusakan mobilitas fisik",
    "Peningkatan residu lambung",
    "Peningkatan tekanan intragastrik",
    "Penurunan motilitas gastrointestinal",
    "Sfingter esofagus bawah inkompeten",
    "Perlambatan pengosongan lambung",
    "Terpasang selang nasogastrik",
    "Terpasang trakeostomi atau ETT",
    "Trauma/pembedahan leher, mulut, dan/atau wajah",
    "Efek agen farmakologis",
    "Ketidakmatangan koordinasi menghisap, menelan, dan bernapas"
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
      "nama": "Manajemen Jalan Napas",
      "tindakan": {
        "terapeutik": []
      }
    },
    {
      "kode": "I.01018",
      "nama": "Pencegahan Aspirasi",
      "tindakan": {
        "terapeutik": []
      }
    }
  ]
},
{
  "id": "0007",
  "slug": "gangguan-sirkulasi-spontan",
  "kode": "D.0007",
  "nama": "Gangguan Sirkulasi Spontan",
  "definisi": "Diagnosis gangguan sirkulasi spontan adalah ketidakmampuan untuk mempertahankan sirkulasi yang adekuat untuk menunjang kehidupan.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "sirkulasi",
    "jantung",
    "nadi",
    "tekanan darah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Frekuensi nadi < 50 kali/menit atau > 150 kali/menit",
      "Tekanan darah sistolik < 60 mmHg atau > 200 mmHg",
      "Frekuensi napas < 6 kali/menit atau > 30 kali/menit",
      "Kesadaran menurun atau tidak sadar"
    ]
  },
  "faktorTerkait": [
    "Abnormalitas kelistrikan jantung",
    "Abnormalitas struktur jantung",
    "Penurunan fungsi ventrikel"
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
      "nama": "Manajemen Defibrilasi",
      "tindakan": {
        "terapeutik": [
          "Periksa irama pada monitor setelah RJP 2 menit",
          "Lakukan resusitasi jantung paru (RJP) hingga mesin defibrillator siap",
          "Siapkan dan hidupkan mesin defibrillator",
          "Pasang monitor EKG",
          "Pastikan irama EKG henti jantung (VF atau VT tanpa nadi)",
          "Atur jumlah energi dengan metode asynchronized (360 joule untuk monofasik dan 120-200 joule untuk bifasik)",
          "Angkat paddle dari mesin dan oleskan jeli pada paddle",
          "Tempelkan paddle sternum (kanan) pada sisi kanan sternum di bawah klavikula dan paddle apeks (kiri) pada garis midaksilaris setinggi elektroda V6",
          "Isi energi dengan menekan tombol charge pada paddle atau tombol charge pada mesin defibrillator dan menunggu hingga energi yang diinginkan tercapai",
          "Hentikan RJP saat defibrillator siap",
          "Teriak bahwa defibrillator telah siap (misal: “I’m clear, you’re clear, everybody’s clear”)",
          "Berikan syok dengan menekan tombol pada kedua paddle bersamaan",
          "Angkat paddle dan langsung lanjutkan RJP tanpa menunggu hasil irama yang muncul pada monitor setelah pemberian defibrilasi",
          "Lanjutkan RJP sampai 2 menit"
        ]
      }
    },
    {
      "kode": "I.03139",
      "nama": "Resusitasi Cairan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kelas syok untuk estimasi kehilangan darah",
          "Monitor status hemodinamik",
          "Monitor status oksigen",
          "Monitor kelebihan cairan",
          "Monitor output cairan tubuh (mis. Urin, cairan nasogastric, cairan selang dada)",
          "Monitor nilai BUN, kreatinin, protein total, dan albumin, jika perlu",
          "Monitor tanda dan gejala edema paru",
          "Pasang jalur IV berukuran besar (mis. nomor 14 atau 16)",
          "Berikan infus cairan kristaloid 1-2 L pada dewasa",
          "Berikan infus cairan kristaloid 20 mL/KgBB pada anak",
          "Lakukan cross matching produk darah",
          "Kolaborasi penentuan jenis dan jumlah cairan (mis: kristaloid, koloid)",
          "Kolaborasi pemberian produk darah"
        ]
      }
    },
    {
      "kode": "I.02083",
      "nama": "Resusitasi Jantung Paru",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keamanan penolong, lingkungan dan pasien",
          "Identifikasi respon pasien (mis: memanggil pasien, menepuk bahu pasien)",
          "Monitor nadi karotis dan napas setiap 2 menit atau 5 siklus RJP",
          "Pakai alat pelindung diri",
          "Aktifkan emergency medical system atau berteriak minta tolong",
          "Posisikan pasien telentang di tempat datar dan keras",
          "Atur posisi penolong berlutut disamping pasien",
          "Raba nadi karotis dalam waktu < 10 detik",
          "Berikan rescue breathing jika ditemukan ada nadi tetapi tidak ada napas",
          "Kompresi dada 30 kali dikombinasikan dengan bantuan napas (ventilasi) 2 kali jika ditemukan tidak ada nadi dan tidak ada napas.",
          "Kompresi dengan tumit telapak tangan menumpuk di atas telapak tangan yang lain tegak lurus pada pertengahan dada (seperdua bawah sternum)",
          "Kompresi dengan kedalaman kompresi 5-6 cm dengan kecepatan 100-120 kali per menit",
          "Bersihkan dan buka jalan napas dengan head-tilt chin-lift atau jaw thrust (jika curiga cedera servikal)",
          "Berikan bantuan napas dengan menggunakan bag valve mask dengan Teknik EC-Clamp",
          "Kombinasikan kompresi dan ventilasi selama 2 menit atau sebanyak 5 siklus",
          "Hentikan RJP jika ditemukan ada tanda-tanda kehidupan, penolong yang lebih mahir datang, ditemukan adanya tanda-tanda kematian biologis, do not resuscitation (DNR).",
          "Jelaskan tujuan dan prosedur Tindakan kepada keluarga atau pengantar pasien",
          "Kolaborasi tim medis untuk bantuan hidup lanjut."
        ]
      }
    }
  ]
},
{
  "id": "0008",
  "slug": "penurunan-curah-jantung",
  "kode": "D.0008",
  "nama": "Penurunan Curah Jantung",
  "definisi": "Penurunan curah jantung adalah ketidakadekuatan jantung memompa darah untuk memenuhi kebutuhan metabolisme tubuh. Berikut adalah askep",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "jantung",
    "curah jantung",
    "gagal jantung",
    "palpitasi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Bradikardia/takikardia",
      "Gambaran EKG Aritmia atau gangguan konduksi",
      "Edema",
      "Distensi vena jugularis",
      "Central venous pressure (CVP) meningkat/menurun",
      "Hepatomegali",
      "Tekanan darah meningkat/menurun",
      "Nadi perifer teraba lemah",
      "Capillary refill time (CRT) > 3 detik",
      "Oliguria",
      "Warna kulit pucat dan/atau sianosis",
      "Paroxysmal nocturnal dyspnea (PND)",
      "Ortopnea",
      "Batuk",
      "Terdengar suara jantung S3 dan/atau S4",
      "Ejection fraction (EF) menurun"
    ]
  },
  "faktorTerkait": [
    "Perubahan irama jantung",
    "Perubahan preload",
    "Perubahan afterload",
    "Perubahan kontraktilitas"
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
      "nama": "Perawatan Jantung",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda/gejala primer penurunan curah jantung (meliputi: dispnea, kelelahan, edema, ortopnea, PND, peningkatan CVP).",
          "Identifikasi tanda/gejala sekunder penurunan curah jantung (meliputi: peningkatan berat badan, hepatomegaly, distensi vena jugularis, palpitasi, ronkhi basah, oliguria, batuk, kulit pucat)",
          "Monitor tekanan darah (termasuk tekanan darah ortostatik, jika perlu)",
          "Monitor intake dan output cairan",
          "Monitor berat badan setiap hari pada waktu yang sama",
          "Monitor saturasi oksigen",
          "Monitor keluhan nyeri dada (mis: intensitas, lokasi, radiasi, durasi, presipitasi yang mengurangi nyeri)",
          "Monitor EKG 12 sadapan",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor nilai laboratorium jantung (mis: elektrolit, enzim jantung, BNP, NTpro-BNP)",
          "Monitor fungsi alat pacu jantung",
          "Periksa tekanan darah dan frekuensi nadi sebelum dan sesudah aktivitas",
          "Periksa tekanan darah dan frekuensi nadi sebelum pemberian obat (mis: beta blocker, ACE Inhibitor, calcium channel blocker, digoksin)",
          "Posisikan pasien semi-fowler atau fowler dengan kaki ke bawah atau posisi nyaman",
          "Berikan diet jantung yang sesuai (mis: batasi asupan kafein, natrium, kolesterol, dan makanan tinggi lemak)",
          "Gunakan stocking elastis atau pneumatik intermitten, sesuai indikasi",
          "Fasilitasi pasien dan keluarga untuk modifikasi gaya hidup sehat",
          "Berikan terapi relaksasi untuk mengurangi stress, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Anjurkan beraktivitas fisik sesuai toleransi",
          "Anjurkan beraktivitas fisik secara bertahap",
          "Anjurkan berhenti merokok",
          "Ajarkan pasien dan keluarga mengukur berat badan harian",
          "Ajarkan pasien dan keluarga mengukur intake dan output cairan harian",
          "Kolaborasi pemberian antiaritmia, jika perlu",
          "Rujuk ke program rehabilitasi jantung"
        ]
      }
    },
    {
      "kode": "I.02076",
      "nama": "Perawatan Jantung Akut",
      "tindakan": {
        "terapeutik": [
          "Identifikasi karakteristik nyeri dada (meliputi faktor pemicu dan Pereda, kualitas, lokasi, radiasi, skala, durasi, dan frekuensi)",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor EKG 12 sadapan untuk perubahan ST dan T",
          "Monitor elektrolit yang dapat meningkatkan risiko aritmia (mis: kalium, magnesium serum)",
          "Monitor enzim jantung (mis: CK, CK-MB, Troponin T, Troponin I)",
          "Monitor saturasi oksigen",
          "Identifikasi stratifikasi pada sindrom koroner akut (mis: skor TIMI, Killip, Crusade)",
          "Pertahankan tirah baring minimal 12 jam",
          "Pasang akses intravena",
          "Puasakan hingga bebas nyeri",
          "Berikan terapi relaksasi untuk mengurangi ansietas dan stress",
          "Sediakan lingkungan yang kondusif untuk beristirahat dan pemulihan",
          "Siapkan menjalani intervensi koroner perkutan, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Anjurkan segera melaporkan nyeri dada",
          "Anjurkan menghindari manuver Valsava (mis: mengedan saat BAB atau batuk)",
          "Jelaskan Tindakan yang dijalani pasien",
          "Ajarkan Teknik menurunkan kecemasan dan ketakutan",
          "Kolaborasi pemberian antiplatelet, jika perlu",
          "Kolaborasi pemberian antianginal (mis: nitrogliserin, beta blocker, calcium channel blocker)",
          "Kolaborasi pemberian morfin, jika perlu",
          "Kolaborasi pemberian inotropic, jika perlu",
          "Kolaborasi pemberian obat untuk mencegah manuver Valsava (mis: pelunak tinja, antiemetik)",
          "Kolaborasi pencegahan trombus dengan antikoagulan, jika perlu",
          "Kolaborasi pemeriksaan x-ray dada, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0009",
  "slug": "perfusi-perifer-tidak-efektif",
  "kode": "D.0009",
  "nama": "Perfusi Perifer Tidak Efektif",
  "definisi": "Perfusi perifer tidak efektif adalah penurunan sirkulasi darah pada level kapiler yang dapat mengganggu metabolisme tubuh.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Pengisian kapiler (cappilary refill) >3 detik",
      "Nadi perifer menurun atau tidak teraba",
      "Akral teraba dingin",
      "Warna kulit pucat",
      "Turgor kulit menurun"
    ]
  },
  "faktorTerkait": [
    "Hiperglikemia",
    "Penurunan konsentrasi hemoglobin",
    "Peningkatan tekanan darah",
    "Kekurangan volume cairan",
    "Penurunan aliran arteri dan/atau vena",
    "Kurang terpapar informasi tentang faktor pemberat (mis. merokok, gaya hidup monoton, trauma, obesitas, asupan garam, imobilitas)",
    "Kurang terpapar informasi tentang proses penyakit (mis. diabetes melitus, hiperlipidemia)",
    "Kurang aktivitas fisik"
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
      "nama": "Perawatan Sirkulasi",
      "tindakan": {
        "terapeutik": [
          "Periksa sirkulasi perifer (mis: nadi perifer, edema, pengisian kapiler, warna, suhu, ankle-brachial index)",
          "Identifikasi faktor risiko gangguan sirkulasi (mis: diabetes, perokok, orang tua, hipertensi, dan kadar kolesterol tinggi)",
          "Monitor panas, kemerahan, nyeri, atau bengkak pada ekstremitas",
          "Hindari pemasangan infus, atau pengambilan darah di area keterbatasan perfusi",
          "Hindari pengukuran tekanan darah pada ekstremitas dengan keterbatasan perfusi",
          "Hindari penekanan dan pemasangan tourniquet pada area yang cidera",
          "Lakukan pencegahan infeksi",
          "Lakukan perawatan kaki dan kuku",
          "Lakukan hidrasi",
          "Anjurkan berhenti merokok",
          "Anjurkan berolahraga rutin",
          "Anjurkan mengecek air mandi untuk menghindari kulit terbakar",
          "Anjurkan menggunakan obat penurun tekanan darah, antikoagulan, dan penurun kolesterol, jika perlu",
          "Anjurkan minum obat pengontrol tekanan darah secara teratur",
          "Anjurkan menghindari penggunaan obat penyekat beta",
          "Anjurkan melakukan perawatan kulit yang tepat (mis: melembabkan kulit kering pada kaki)",
          "Anjurkan program rehabilitasi vaskular",
          "Ajarkan program diet untuk memperbaiki sirkulasi (mis: rendah lemak jenuh, minyak ikan omega 3)",
          "Informasikan tanda dan gejala darurat yang harus dilaporkan (mis: rasa sakit yang tidak hilang saat istirahat, luka tidak sembuh, hilangnya rasa)."
        ]
      }
    },
    {
      "kode": "I.06195",
      "nama": "Manajemen Sensasi Perifer",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab perubahan sensasi",
          "Identifikasi penggunaan alat pengikat, prosthesis, sepatu, dan pakaian",
          "Periksa perbedaan sensasi tajam atau tumpul",
          "Periksa perbedaan sensasi panas atau dingin",
          "Periksa kemampuan mengidentifikasi lokasi dan tekstur benda",
          "Monitor terjadinya parestesia, jika perlu",
          "Monitor perubahan kulit",
          "Monitor adanya tromboplebitis dan tromboemboli vena",
          "Hindai pemakaian benda-benda yang berlebihan suhunya (terlalu panas atau dingin)",
          "Anjurkan penggunaan thermometer untuk menguji suhu air",
          "Anjurkan penggunaan sarung tangan termal saat memasak",
          "Anjurkan memakai sepatu lembut dan bertumit rendah",
          "Kolaborasi pemberian analgesik, jika perlu",
          "Kolaborasi pemberian kortikosteroid, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0010",
  "slug": "risiko-gangguan-sirkulasi-spontan",
  "kode": "D.0010",
  "nama": "Risiko Gangguan Sirkulasi Spontan",
  "definisi": "Risiko gangguan sirkulasi spontan didefinisikan sebagai risiko mengalami ketidakmampuan untuk mempertahankan sirkulasi yang adekuat",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "sirkulasi",
    "jantung",
    "nadi",
    "tekanan darah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kekurangan volume cairan",
    "Hipoksia",
    "Hipotermia",
    "Hipokalemia/Hiperkalemia",
    "Hipoglikemia / Hiperglikemia",
    "Asidosis",
    "Toksin (mis. keracunan, overdosis obat)",
    "Tamponade Jantung",
    "Tension Pneumothorax",
    "Trombosis Jantung",
    "Trombosis Paru (Emboli Paru)"
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
      "nama": "Perawatan Jantung Akut",
      "tindakan": {
        "terapeutik": [
          "Identifikasi karakteristik nyeri dada (meliputi faktor pemicu dan Pereda, kualitas, lokasi, radiasi, skala, durasi, dan frekuensi)",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor EKG 12 sadapan untuk perubahan ST dan T",
          "Monitor elektrolit yang dapat meningkatkan risiko aritmia (mis: kalium, magnesium serum)",
          "Monitor enzim jantung (mis: CK, CK-MB, Troponin T, Troponin I)",
          "Monitor saturasi oksigen",
          "Identifikasi stratifikasi pada sindrom koroner akut (mis: skor TIMI, Killip, Crusade)",
          "Pertahankan tirah baring minimal 12 jam",
          "Pasang akses intravena",
          "Puasakan hingga bebas nyeri",
          "Berikan terapi relaksasi untuk mengurangi ansietas dan stress",
          "Sediakan lingkungan yang kondusif untuk beristirahat dan pemulihan",
          "Siapkan menjalani intervensi koroner perkutan, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Anjurkan segera melaporkan nyeri dada",
          "Anjurkan menghindari manuver Valsava (mis: mengedan saat BAB atau batuk)",
          "Jelaskan Tindakan yang dijalani pasien",
          "Ajarkan Teknik menurunkan kecemasan dan ketakutan",
          "Kolaborasi pemberian antiplatelet, jika perlu",
          "Kolaborasi pemberian antianginal (mis: nitrogliserin, beta blocker, calcium channel blocker)",
          "Kolaborasi pemberian morfin, jika perlu",
          "Kolaborasi pemberian inotropic, jika perlu",
          "Kolaborasi pemberian  obat untuk mencegah manuver Valsava (mis: pelunak tinja, antiemetik)",
          "Kolaborasi pencegahan trombus dengan antikoagulan, jika perlu",
          "Kolaborasi pemeriksaan x-ray dada, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02080",
      "nama": "Pertolongan Pertama",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keamanan penolong, pasien dan lingkungan",
          "Identifikasi respon pasien dengan AVPU (alert, verbal, pain, unresponsive)",
          "Monitor tanda-tanda vital",
          "Monitor karakteristik luka (mis: drainase, warna, ukuran, bau)",
          "Meminta pertolongan, jika perlu",
          "Lakukan RICE (rest, ice, compression, elevation) pada cidera otot ekstremitas",
          "Lakukan penghentian perdarahan (mis: penekanan, balut tekan, pengaturan posisi)",
          "Bersihkan kulit dari racun atau bahan kimia yang menempel dengan sabun dan air mengalir",
          "Lepaskan sengatan dari kulit",
          "Lepaskan gigitan serangga dari kulit menggunakan pinset atau alat yang sesuai",
          "Ajarkan Teknik perawatan luka",
          "Kolaborasi pemberian obat-obatan (mis: antibiotik profilaksis, vaksin, antihistamin, antiinflamasi, dan analgetic), jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0011",
  "slug": "risiko-penurunan-curah-jantung",
  "kode": "D.0011",
  "nama": "Risiko Penurunan Curah Jantung",
  "definisi": "Risiko penurunan curah jantung didefinisikan sebagai risiko mengalami pemompaan jantung yang tidak adekuat untuk memenuhi kebutuhan...",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "jantung",
    "curah jantung",
    "gagal jantung",
    "palpitasi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Perubahan afterload",
    "Perubahan frekuensi jantung",
    "Perubahan irama jantung",
    "Perubahan kontraktilitas",
    "Perubahan preload"
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
      "nama": "Perawatan Jantung",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda/gejala primer penurunan curah jantung (meliputi: dispnea, kelelahan, edema, ortopnea, PND, peningkatan CVP).",
          "Identifikasi tanda/gejala sekunder penurunan curah jantung (meliputi: peningkatan berat badan, hepatomegaly, distensi vena jugularis, palpitasi, ronkhi basah, oliguria, batuk, kulit pucat)",
          "Monitor tekanan darah (termasuk tekanan darah ortostatik, jika perlu)",
          "Monitor intake dan output cairan",
          "Monitor berat badan setiap hari pada waktu yang sama",
          "Monitor saturasi oksigen",
          "Monitor keluhan nyeri dada (mis: intensitas, lokasi, radiasi, durasi, presipitasi yang mengurangi nyeri)",
          "Monitor EKG 12 sadapan",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor nilai laboratorium jantung (mis: elektrolit, enzim jantung, BNP, NTpro-BNP)",
          "Monitor fungsi alat pacu jantung",
          "Periksa tekanan darah dan frekuensi nadi sebelum dan sesudah aktivitas",
          "Periksa tekanan darah dan frekuensi nadi sebelum pemberian obat (mis: beta blocker, ACE Inhibitor, calcium channel blocker, digoksin)",
          "Posisikan pasien semi-fowler atau fowler dengan kaki ke bawah atau posisi nyaman",
          "Berikan diet jantung yang sesuai (mis: batasi asupan kafein, natrium, kolesterol, dan makanan tinggi lemak)",
          "Gunakan stocking elastis atau pneumatik intermitten, sesuai indikasi",
          "Fasilitasi pasien dan keluarga untuk modifikasi gaya hidup sehat",
          "Berikan terapi relaksasi untuk mengurangi stress, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Anjurkan beraktivitas fisik sesuai toleransi",
          "Anjurkan beraktivitas fisik secara bertahap",
          "Anjurkan berhenti merokok",
          "Ajarkan pasien dan keluarga mengukur berat badan harian",
          "Ajarkan pasien dan keluarga mengukur intake dan output cairan harian",
          "Kolaborasi pemberian antiaritmia, jika perlu",
          "Rujuk ke program rehabilitasi jantung"
        ]
      }
    },
    {
      "kode": "I.02076",
      "nama": "Perawatan Jantung Akut",
      "tindakan": {
        "terapeutik": [
          "Identifikasi karakteristik nyeri dada (meliputi faktor pemicu dan Pereda, kualitas, lokasi, radiasi, skala, durasi, dan frekuensi)",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor EKG 12 sadapan untuk perubahan ST dan T",
          "Monitor elektrolit yang dapat meningkatkan risiko aritmia (mis: kalium, magnesium serum)",
          "Monitor enzim jantung (mis: CK, CK-MB, Troponin T, Troponin I)",
          "Monitor saturasi oksigen",
          "Identifikasi stratifikasi pada sindrom koroner akut (mis: skor TIMI, Killip, Crusade)",
          "Pertahankan tirah baring minimal 12 jam",
          "Pasang akses intravena",
          "Puasakan hingga bebas nyeri",
          "Berikan terapi relaksasi untuk mengurangi ansietas dan stress",
          "Sediakan lingkungan yang kondusif untuk beristirahat dan pemulihan",
          "Siapkan menjalani intervensi koroner perkutan, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Anjurkan segera melaporkan nyeri dada",
          "Anjurkan menghindari manuver Valsava (mis: mengedan saat BAB atau batuk)",
          "Jelaskan Tindakan yang dijalani pasien",
          "Ajarkan Teknik menurunkan kecemasan dan ketakutan",
          "Kolaborasi pemberian antiplatelet, jika perlu",
          "Kolaborasi pemberian antianginal (mis: nitrogliserin, beta blocker, calcium channel blocker)",
          "Kolaborasi pemberian morfin, jika perlu",
          "Kolaborasi pemberian inotropic, jika perlu",
          "Kolaborasi pemberian obat untuk mencegah manuver Valsava (mis: pelunak tinja, antiemetik)",
          "Kolaborasi pencegahan trombus dengan antikoagulan, jika perlu",
          "Kolaborasi pemeriksaan x-ray dada, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0012",
  "slug": "risiko-perdarahan",
  "kode": "D.0012",
  "nama": "Risiko Perdarahan",
  "definisi": "Risiko perdarahan adalah diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kehilangan darah baik internal maupun eksternal",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perdarahan",
    "darah",
    "hemoragi",
    "Hb"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Aneurisma",
    "Gangguan gastrointestinal (misalnya ulkus lambung, polip, varises)",
    "Gangguan fungsi hati (misalnya sirosis hepatis)",
    "Komplikasi kehamilan (misalnya ketuban pecah sebelum waktunya)",
    "Komplikasi pasca partum (misalnya atoni uterus, retensi plasenta)",
    "Gangguan koagulasi (misalnya trombositopenia)",
    "Efek agen farmakologis",
    "Tindakan pembedahan",
    "Trauma",
    "Kurang terpapar informasi tentang pencegahan perdarahan",
    "Proses keganasan"
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
      "nama": "Pencegahan Perdarahan",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda dan gejala perdarahan",
          "Monitor nilai hematokrit/hemoglobin sebelum dan setelah kehilangan darah",
          "Monitor tanda-tanda vital ortostatik",
          "Monitor koagulasi (mis: prothrombin time (PT), partial thromboplastin time (PTT), fibrinogen, degradasi fibrin dan/atau platelet)",
          "Pertahankan bed rest selama perdarahan",
          "Batasi tindakan invasive, jika perlu",
          "Gunakan kasur pencegah decubitus",
          "Hindari pengukuran suhu rektal",
          "Jelaskan tanda dan gejala perdarahan",
          "Anjurkan menggunakan kaus kaki saat ambulasi",
          "Anjurkan meningkatkan asupan cairan untuk menghindari konstipasi",
          "Anjurkan menghindari aspirin atau antikoagulan",
          "Anjurkan meningkatkan asupan makanan dan vitamin K",
          "Anjurkan segera melapor jika terjadi perdarahan",
          "Kolaborasi pemberian obat pengontrol perdarahan, jika perlu",
          "Kolaborasi pemberian produk darah, jika perlu",
          "Kolaborasi pemberian pelunak tinja, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0013",
  "slug": "risiko-perfusi-gastrointestinal-tidak-efektif",
  "kode": "D.0013",
  "nama": "Risiko Perfusi Gastrointestinal Tidak Efektif",
  "definisi": "Risiko perfusi gastrointestinal tidak efektif adalah didefinisikan sebagai berisiko mengalami penurunan sirkulasi gastrointestinal.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Varises gastroesofagus",
    "Aneurisma aorta abdomen",
    "Diabetes melitus",
    "Sirosis hepatis",
    "Perdarahan gastrointestinal akut",
    "Gagal jantung kongestif",
    "Koagulasi intravaskuler diseminata",
    "Ulkus duodenum atau ulkus lambung",
    "Kolitis iskemik",
    "Pankreatitis iskemik",
    "Ginjal polikistik",
    "Stenosis arteri ginjal",
    "Gagal ginjal",
    "Sindroma kompartemen abdomen",
    "Trauma abdomen",
    "Anemia"
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
      "nama": "Manajemen Perdarahan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab perdarahan",
          "Periksa adanya darah pada muntah, sputum, feses, urin, pengeluaran NGT, dan drainase luka, jika perlu",
          "Periksa ukuran dan karakteristik hematoma, jika ada",
          "Monitor terjadinya perdarahan (sifat dan jumlah)",
          "Monitor nilai hemoglobin dan hematokrit sebelum dan setelah kehilangan darah",
          "Monitor tekanan darah dan parameter hemodinamik (tekanan vena sentral dan tekanan baji kapiler atau arteri pulmonal), jika ada",
          "Monitor intake dan output cairan",
          "Monitor koagulasi darah (prothrombin time (PT), partial tromboplastin time (PTT), fibrinogen, degradasi fibrin, dan jumlah trombosit), jika ada",
          "Monitor deliveri oksigen jaringan (mis: PaO2, SaO2, hemoglobin, dan curah jantung)",
          "Monitor tanda dan gejala perdarahan masif",
          "Istirahatkan area yang mengalami perdarahan",
          "Berikan kompres dingin, jika perlu",
          "Lakukan penekanan atau balut tekan, jika perlu",
          "Tinggikan ekstremitas yang mengalami perdarahan",
          "Pertahankan akses IV",
          "Jelaskan tanda-tanda perdarahan",
          "Anjurkan melapor jika menemukan tanda-tanda perdarahan",
          "Anjurkan membatasi aktivitas",
          "Kolaborasi pemberian cairan, jika perlu",
          "Kolaborasi pemberian transfusi darah, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan makan dan perilaku makan yang akan diubah",
          "Identifikasi kemajuan modifikasi diet secara regular",
          "Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan",
          "Bina hubungan terapeutik",
          "Sepakati lama waktu pemberian konseling",
          "Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis",
          "Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan",
          "Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan  gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)",
          "Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol",
          "Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan",
          "Rujuk pada ahli gizi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0014",
  "slug": "risiko-perfusi-miokard-tidak-efektif",
  "kode": "D.0014",
  "nama": "Risiko Perfusi Miokard Tidak Efektif",
  "definisi": "Risiko perfusi miokard tidak efektif didefinisikan sebagai berisiko mengalami penurunan sirkulasi arteri koroner yang dapat mengganggu...",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Hipertensi",
    "Hiperlipidemia",
    "Hiperglikemia",
    "Hipoksemia",
    "Hipoksia",
    "Kekurangan volume cairan",
    "Pembedahan jantung",
    "Penyalahgunaan zat",
    "Spasme arteri koroner",
    "Peningkatan protein C-reaktif",
    "Tamponade jantung",
    "Efek agen farmakologis",
    "Riwayat penyakit kardiovaskuler pada keluarga",
    "Kurang terpapar informasi tentang faktor risiko yang dapat diubah (misalnya merokok, gaya hidup kurang gerak, obesitas)"
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
      "nama": "Manajemen Aritmia",
      "tindakan": {
        "terapeutik": [
          "Periksa onset dan pemicu aritmia",
          "Identifikasi jenis aritmia",
          "Monitor frekuensi dan durasi aritmia",
          "Monitor keluhan nyeri dada (intensitas, lokasi, faktor pencetus, dan faktor Pereda)",
          "Monitor respon hemodinamik akibat aritmia",
          "Monitor saturasi oksigen",
          "Monitor kadar elektrolit",
          "Berikan lingkungan yang tenang",
          "Pasang jalan napas buatan (mis. OPA, NPA, LMA, ETT), jika perlu",
          "Pasang akses intravena",
          "Pasang monitor jantung",
          "Rekam EKG 12 sadapan",
          "Periksa interval QT sebelum dan sesudah pemberian obat yang dapat memperpanjang interval QT",
          "Lakukan maneuver valsava",
          "Lakukan masase karotis unilateral",
          "Berikan oksigen, sesuai indikasi",
          "Siapkan pemasangan ICD (implantable cardioverter defibrillator)",
          "Kolaborasi pemberian antiaritmia, jika perlu",
          "Kolaborasi pemberian kardioversi, jika perlu",
          "Kolaborasi pemberian defibrilasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02051",
      "nama": "Manajemen Syok Kardiogenik",
      "tindakan": {
        "terapeutik": [
          "Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuensi napas, TD, MAP)",
          "Monitor status oksigenasi (oksimetri nadi, AGD)",
          "Monitor status cairan (masukan dan haluaran, turgor kulit, CRT)",
          "Monitor tingkat kesadaran dan respon pupil",
          "Periksa seluruh permukaan tubuh terhadap adanya DOTS (deformity/deformitas, open wound/luka terbuka, tenderness/nyeri tekan, swelling/bengkak)",
          "Monitor EKG 12 lead",
          "Monitor rontgen dada (mis: kongesti paru, edema paru, pembesaran jantung)",
          "Monitor enzim jantung (mis: CK, CKMB, Troponin)",
          "Identifikasi penyebab masalah utama (mis: volume, pompa atau irama)",
          "Pertahankan jalan napas paten",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Persiapkan intubasi dan ventilasi mekanis, jika perlu",
          "Pasang jalur IV",
          "Pasang kateter urin untuk menilai produksi urin",
          "Pasang selang nasogastrik untuk dekompresi lambung, jika perlu",
          "Kolaborasi pemberian inotropik (mis: dobutamine), jika TDS 70 – 100 mmHg tanpa disertai tanda/gejala syok",
          "Kolaborasi pemberian vasopressor (mis: dopamine), jika TDS 70 – 100 mmHg disertai tanda/gejala syok",
          "Kolaborasi pemberian vasopressor (mis: norefinefrin), jika TDS < 70 mmHg",
          "Kolaborasi pemberian antiaritmia, jika perlu",
          "Kolaborasi pompa intra-aorta, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02066",
      "nama": "Pencegahan Emboli",
      "tindakan": {
        "terapeutik": [
          "Periksa Riwayat penyakit secara rinci untuk melihat faktor risiko (mis: pascaoperasi, fraktur, kemoterapi, kehamilan, pasca persalinan, imobilisasi, kelumpuhan, edema ekstremitas, PPOK, stroke, Riwayat DVT sebelumnya)",
          "Periksa trias Virchow (stasis vena, hiperkoagulabilitas, dan trauma yang mengakibatkan kerusakan intima pembuluh darah)",
          "Monitor adanya gejala baru dari mengi (hemoptisis, nyeri saat inspirasi, nyeri pleuritik)",
          "Monitor sirkulasi perifer (mis: nadi perifer, edema, CRT, warna, suhu, dan adanya rasa sakit pada ekstremitas)",
          "Posisikan anggota tubuh yang beresiko emboli 20 derajat diatas posisi jantung",
          "Pasangkan stoking atau alat kompresi pneumatic intermitten",
          "Lepaskan stoking atau alat kompresi pneumatic intermiten selama 15-20 menit setiap 8 jam",
          "Lakukan Latihan rentang gejak aktif dan pasif",
          "Lakukan perubahan posisi setiap 2 jam",
          "Hindari memijat atau menekan otot ekstremitas",
          "Anjurkan melakukan fleksi dan ekstensi kaki paling sedikit 10 kali setiap jam",
          "Anjurkan melaporkan perdarahan yang berlebihan (mis: mimisan yang tidak biasa, muntah darah, urin berdarah, gusi berdarah, perdarahan pervaginam, perdarahan menstruasi yang berat, feses berdarah), nyeri atau bengkak yang tidak biasa, warna biru atau ungu pada jari kaki, nyeri di jari kaki, bisul atau bitnik putih di mulut atau tenggorokan.",
          "Anjurkan berhenti merokok",
          "Anjurkan minum obat antikoagulan sesuai dengan waktu dan dosis",
          "Anjurkan asupan makanan yang tinggi vitamik K",
          "Ajarkan menghindari duduk dengan kaki menyilang atau duduk lama dengan kaki tergantung",
          "Ajarkan melakukan tindakan pencegahan (mis: berjalan, banyak minum, hindari alkohol, hindari imobilitas jangka Panjang)",
          "Kolaborasi pemberian trombolitik, jika perlu",
          "Kolaborasi pemberian antikoagulan dosis rendah atau antiplatelet dosis tinggi (mis: heparin, clopidogrel, warfarin, aspirin, dipyridamole, dekstran), jika perlu",
          "Kolaborasi pemberian prometazin intravena dalam larutan NaCl 0,9% 25 cc – 50cc dengan aliran lambat"
        ]
      }
    },
    {
      "kode": "I.02075",
      "nama": "Perawatan Jantung",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda/gejala primer penurunan curah jantung (meliputi: dispnea, kelelahan, edema, ortopnea, PND, peningkatan CVP).",
          "Identifikasi tanda/gejala sekunder penurunan curah jantung (meliputi: peningkatan berat badan, hepatomegaly, distensi vena jugularis, palpitasi, ronkhi basah, oliguria, batuk, kulit pucat)",
          "Monitor tekanan darah (termasuk tekanan darah ortostatik, jika perlu)",
          "Monitor intake dan output cairan",
          "Monitor berat badan setiap hari pada waktu yang sama",
          "Monitor saturasi oksigen",
          "Monitor keluhan nyeri dada (mis: intensitas, lokasi, radiasi, durasi, presipitasi yang mengurangi nyeri)",
          "Monitor EKG 12 sadapan",
          "Monitor aritmia (kelainan irama dan frekuensi)",
          "Monitor nilai laboratorium jantung (mis: elektrolit, enzim jantung, BNP, NTpro-BNP)",
          "Monitor fungsi alat pacu jantung",
          "Periksa tekanan darah dan frekuensi nadi sebelum dan sesudah aktivitas",
          "Periksa tekanan darah dan frekuensi nadi sebelum pemberian obat (mis: beta blocker, ACE Inhibitor, calcium channel blocker, digoksin)",
          "Posisikan pasien semi-fowler atau fowler dengan kaki ke bawah atau posisi nyaman",
          "Berikan diet jantung yang sesuai (mis: batasi asupan kafein, natrium, kolesterol, dan makanan tinggi lemak)",
          "Gunakan stocking elastis atau pneumatik intermitten, sesuai indikasi",
          "Fasilitasi pasien dan keluarga untuk modifikasi gaya hidup sehat",
          "Berikan terapi relaksasi untuk mengurangi stress, jika perlu",
          "Berikan dukungan emosional dan spiritual",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Anjurkan beraktivitas fisik sesuai toleransi",
          "Anjurkan beraktivitas fisik secara bertahap",
          "Anjurkan berhenti merokok",
          "Ajarkan pasien dan keluarga mengukur berat badan harian",
          "Ajarkan pasien dan keluarga mengukur intake dan output cairan harian",
          "Kolaborasi pemberian antiaritmia, jika perlu",
          "Rujuk ke program rehabilitasi jantung"
        ]
      }
    }
  ]
},
{
  "id": "0015",
  "slug": "risiko-perfusi-perifer-tidak-efektif",
  "kode": "D.0015",
  "nama": "Risiko Perfusi Perifer Tidak Efektif",
  "definisi": "Risiko perfusi perifer tidak efektif didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah pada level kapiler yang dapat...",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Hiperglikemia",
    "Gaya hidup kurang gerak",
    "Hipertensi",
    "Merokok",
    "Prosedur endovaskuler",
    "Trauma",
    "Kurang terpapat informasi tentang faktor pemberat (misalnya merokok, gaya hidup kurang gerak, obesitas, imobilitas)"
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
      "nama": "Pencegahan Syok",
      "tindakan": {
        "terapeutik": [
          "Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuensi napas, TD, MAP)",
          "Monitor status oksigenasi (oksimetri nadi, AGD)",
          "Monitor status cairan (masukan dan haluaran, turgor kulit, CRT)",
          "Monitor tingkat kesadaran dan respon pupil",
          "Periksa Riwayat alergi",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Persiapkan intubasi dan ventilasi mekanis, jika perlu",
          "Pasang jalur IV, jika perlu",
          "Pasang kateter urin untuk menilai produksi urin, jika perlu",
          "Lakukan skin test untuk mencegah reaksi alergi",
          "Jelaskan penyebab/faktor risiko syok",
          "Jelaskan tanda dan gejala awal syok",
          "Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok",
          "Anjurkan memperbanyak asupan cairan oral",
          "Anjurkan menghindari alergen",
          "Kolaborasi pemberian IV, jika perlu",
          "Kolaborasi pemberian transfusi darah, jika perlu",
          "Kolaborasi pemberian antiinflamasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02079",
      "nama": "Perawatan Sirkulasi",
      "tindakan": {
        "terapeutik": [
          "Periksa sirkulasi perifer (mis: nadi perifer, edema, pengisian kapiler, warna, suhu, ankle-brachial index)",
          "Identifikasi faktor risiko gangguan sirkulasi (mis: diabetes, perokok, orang tua, hipertensi, dan kadar kolesterol tinggi)",
          "Monitor panas, kemerahan, nyeri, atau bengkak pada ekstremitas",
          "Hindari pemasangan infus, atau pengambilan darah di area keterbatasan perfusi",
          "Hindari pengukuran tekanan darah pada ekstremitas dengan keterbatasan perfusi",
          "Hindari penekanan dan pemasangan tourniquet pada area yang cidera",
          "Lakukan pencegahan infeksi",
          "Lakukan perawatan kaki dan kuku",
          "Lakukan hidrasi",
          "Anjurkan berhenti merokok",
          "Anjurkan berolahraga rutin",
          "Anjurkan mengecek air mandi untuk menghindari kulit terbakar",
          "Anjurkan menggunakan obat penurun tekanan darah, antikoagulan, dan penurun kolesterol, jika perlu",
          "Anjurkan minum obat pengontrol tekanan darah secara teratur",
          "Anjurkan menghindari penggunaan obat penyekat beta",
          "Anjurkan melakukan perawatan kulit yang tepat (mis: melembabkan kulit kering pada kaki)",
          "Anjurkan program rehabilitasi vaskular",
          "Ajarkan program diet untuk memperbaiki sirkulasi (mis: rendah lemak jenuh, minyak ikan omega 3)",
          "Informasikan tanda dan gejala darurat yang harus dilaporkan (mis: rasa sakit yang tidak hilang saat istirahat, luka tidak sembuh, hilangnya rasa)."
        ]
      }
    }
  ]
},
{
  "id": "0016",
  "slug": "risiko-perfusi-renal-tidak-efektif",
  "kode": "D.0016",
  "nama": "Risiko Perfusi Renal Tidak Efektif",
  "definisi": "Risiko perfusi renal tidak efektif didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah ke ginjal.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kekurangan volume cairan",
    "Embolisme vaskuler",
    "Vaskulitis",
    "Hipertensi",
    "Disfungsi ginjal",
    "Hiperglikemia",
    "Keganasan",
    "Pembedahan jantung",
    "Bypass kardiopulmonal",
    "Hipoksemia",
    "Hipoksia",
    "Asidosis metabolik",
    "Trauma",
    "Sindrom kompartemen abdomen",
    "Luka bakar",
    "Sepsis",
    "Sindrom respon inflamasi sistemik",
    "Lanjut usia",
    "Merokok",
    "Penyalahgunaan zat"
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
      "nama": "Pencegahan Syok",
      "tindakan": {
        "terapeutik": [
          "Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuensi napas, TD, MAP)",
          "Monitor status oksigenasi (oksimetri nadi, AGD)",
          "Monitor status cairan (masukan dan haluaran, turgor kulit, CRT)",
          "Monitor tingkat kesadaran dan respon pupil",
          "Periksa Riwayat alergi",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Persiapkan intubasi dan ventilasi mekanis, jika perlu",
          "Pasang jalur IV, jika perlu",
          "Pasang kateter urin untuk menilai produksi urin, jika perlu",
          "Lakukan skin test untuk mencegah reaksi alergi",
          "Jelaskan penyebab/faktor risiko syok",
          "Jelaskan tanda dan gejala awal syok",
          "Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok",
          "Anjurkan memperbanyak asupan cairan oral",
          "Anjurkan menghindari alergen",
          "Kolaborasi pemberian IV, jika perlu",
          "Kolaborasi pemberian transfusi darah, jika perlu",
          "Kolaborasi pemberian antiinflamasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02040",
      "nama": "Manajemen Perdarahan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab perdarahan",
          "Periksa adanya darah pada muntah, sputum, feses, urin, pengeluaran NGT, dan drainase luka, jika perlu",
          "Periksa ukuran dan karakteristik hematoma, jika ada",
          "Monitor terjadinya perdarahan (sifat dan jumlah)",
          "Monitor nilai hemoglobin dan hematokrit sebelum dan setelah kehilangan darah",
          "Monitor tekanan darah dan parameter hemodinamik (tekanan vena sentral dan tekanan baji kapiler atau arteri pulmonal), jika ada",
          "Monitor intake dan output cairan",
          "Monitor koagulasi darah (prothrombin time (PT), partial tromboplastin time (PTT), fibrinogen, degradasi fibrin, dan jumlah trombosit), jika ada",
          "Monitor deliveri oksigen jaringan (mis: PaO2, SaO2, hemoglobin, dan curah jantung)",
          "Monitor tanda dan gejala perdarahan masif",
          "Istirahatkan area yang mengalami perdarahan",
          "Berikan kompres dingin, jika perlu",
          "Lakukan penekanan atau balut tekan, jika perlu",
          "Tinggikan ekstremitas yang mengalami perdarahan",
          "Pertahankan akses IV",
          "Jelaskan tanda-tanda perdarahan",
          "Anjurkan melapor jika menemukan tanda-tanda perdarahan",
          "Anjurkan membatasi aktivitas",
          "Kolaborasi pemberian cairan, jika perlu",
          "Kolaborasi pemberian transfusi darah, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0017",
  "slug": "risiko-perfusi-serebral-tidak-efektif",
  "kode": "D.0017",
  "nama": "Risiko Perfusi Serebral Tidak Efektif",
  "definisi": "Risiko perfusi serebral tidak efektif didefinisikan sebagai berisiko mengalami penurunan sirkulasi darah ke otak.",
  "kategori": "Sirkulasi",
  "tipe": "Aktual",
  "keluhan": [
    "perfusi",
    "pucat",
    "dingin",
    "nadi lemah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Keabnormalan masa protrombin dan/atau masa protrombin parsial",
    "Penurunan kinerja ventrikel kiri",
    "Aterosklerosis aorta",
    "Diseksi arteri",
    "Fibrilasi atrium",
    "Tumor otak",
    "Stenosis karotis",
    "Miksoma atrium",
    "Aneurisma serebri",
    "Koagulopati (misalnya anemia sel sabit)",
    "Dilatasi kardiomiopati",
    "Koagulasi intravaskuler diseminata",
    "Embolisme",
    "Cidera kepala",
    "Hiperkolesteronemia",
    "Hipertensi",
    "Endokarditis infektif",
    "Katup prostetik mekanis",
    "Stenosis mitral",
    "Neoplasma otak",
    "Infark miokard akut",
    "Sindrom sick sinus",
    "Penyalahgunaan zat",
    "Terapi trombolitik",
    "Penyalahgunaan zat"
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
      "nama": "Manajemen Peningkatan Tekanan Intrakranial",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab peningkatan TIK (misalnya: lesi, gangguan metabolism, edema serebral)",
          "Monitor tanda/gejala peningkatan TIK (misalnya: tekanan darah meningkat, tekanan nadi melebar, bradikardia, pola napas ireguler, kesadaran menurun)",
          "Monitor MAP (mean arterial pressure) (LIHAT: Kalkulator MAP)",
          "Monitor CVP (central venous pressure)",
          "Monitor PAWP, jika perlu",
          "Monitor PAP, jika perlu",
          "Monitor ICP (intra cranial pressure)",
          "Monitor gelombang ICP",
          "Monitor status pernapasan",
          "Monitor intake dan output cairan",
          "Monitor cairan serebro-spinalis (mis. Warna, konsistensi)",
          "Minimalkan stimulus dengan menyediakan lingkungan yang tenang",
          "Berikan posisi semi fowler",
          "Hindari manuver valsava",
          "Cegah terjadinya kejang",
          "Hindari penggunaan PEEP",
          "Hindari pemberian cairan IV hipotonik",
          "Atur ventilator agar PaCO2 optimal",
          "Pertahankan suhu tubuh normal",
          "Kolaborasi pemberian sedasi dan antikonvulsan, jika perlu",
          "Kolaborasi pemberian diuretik osmosis, jika perlu",
          "Kolaborasi pemberian pelunak tinja, jika perlu"
        ]
      }
    },
    {
      "kode": "I.06198",
      "nama": "Pemantauan Tekanan Intrakranial",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab peningkatan TIK (mis: lesi menempati ruang, gangguan metabolisme, edema serebral, peningkatan tekanan vena, obstruksi cairan serebrospinal, hipertensi intracranial idiopatik)",
          "Monitor peningkatan TS",
          "Monitor pelebaran tekanan nadi (selisih TDS dan TDD)",
          "Monitor penurunan frekuensi jantung",
          "Monitor ireguleritas irama napas",
          "Monitor penurunan tingkat kesadaran",
          "Monitor perlambatan atau ketidaksimetrisan respon pupil",
          "Monitor kadar CO2 dan pertahankan dalam rentang yang diindikasikan",
          "Monitor tekanan perfusi serebral",
          "Monitor jumlah, kecepatan, dan karakteristik drainase cairan serebrospinal",
          "Monitor efek stimulus lingkungan terhadap TIK",
          "Ambil sampel drainase cairan serebrospinal",
          "Kalibrasi transduser",
          "Pertahankan sterilitas sistem pemantauan",
          "Pertahankan posisi kepala dan leher netral",
          "Bilas sistem pemantauan, jika perlu",
          "Atur interval pemantauan sesuai kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0018",
  "slug": "berat-badan-lebih",
  "kode": "D.0018",
  "nama": "Berat Badan Lebih",
  "definisi": "Berat badan lebih adalah diagnosis keperawatan yang didefinisikan sebagai akumulasi lemak berlebih atau abnormal yang tidak sesuai dengan...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "IMT > 25 kg/m² (pada dewasa)",
      "Berat dan panjang badan lebih dari presentil 95 (pada anak < 2 tahun)",
      "IMT pada presentil ke 85 – 95 (pada anak 2 – 18 tahun)"
    ]
  },
  "faktorTerkait": [
    "Kurang aktivitas fisik harian",
    "Kelebihan konsumsi gula",
    "Gangguan kebiasaan makan",
    "Gangguan persepsi makan",
    "Kelebihan konsumsi alkohol",
    "Penggunaan energi kurang dari asupan",
    "Sering mengemil",
    "Sering memakan makanan berminyak/berlemak",
    "Faktor keturunan (mis. distribusi jaringan adiposa, pengeluaran energi, aktivitas lipase lipoprotein, sintesis lipid, lipolisis)",
    "Penggunaan makanan formula atau makanan campuran (pada bayi)",
    "Asupan kalsium rendah (pada anak-anak)",
    "Berat badan bertambah cepat (selama masa anak-anak, selama masa bayi, termasuk minggu pertama, 4 bulan pertama, dan tahun pertama)",
    "Makanan padat sebagai sumber makanan utama pada usia < 5 bulan"
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
      "kode": "I.03094",
      "nama": "Konseling Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan makan dan perilaku makan yang akan diubah",
          "Identifikasi kemajuan modifikasi diet secara regular",
          "Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan",
          "Bina hubungan terapeutik",
          "Sepakati lama waktu pemberian konseling",
          "Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis",
          "Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan",
          "Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan  gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)",
          "Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol",
          "Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan",
          "Rujuk pada ahli gizi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03097",
      "nama": "Manajemen berat badan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kondisi Kesehatan pasien yang dapat mempengaruhi berat badan",
          "Hitung berat badan ideal pasien (LIHAT: kalkulator berat badan ideal)",
          "Hitung persentase lemak dan otot pasien",
          "Fasilitasi menentukan target berat badan yang realistis",
          "Jelaskan hubungan asupan makanan, Latihan, peningkatan, dan penurunan berat badan",
          "Jelaskan faktor risiko berat badan lebih dan berat badan kurang",
          "Anjurkan mencatat berat badan setiap minggu, jika perlu",
          "Anjurkan melakukan pencatatan asupan makan, aktivitas fisik dan perubahan berat badan"
        ]
      }
    },
    {
      "kode": "I.05183",
      "nama": "Promosi Latihan fisik",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keyakinan Kesehatan tentang Latihan fisik",
          "Identifikasi pengalaman olahraga sebelumnya",
          "Identifikasi motivasi individu untuk memulai atau melanjutkan program olahraga",
          "Identifikasi hambatan untuk berolahraga",
          "Monitor kepatuhan menjalankan program Latihan",
          "Monitor respons terhadap program latihan",
          "Motivasi mengungkapkan perasaan tentang olahraga/kebutuhan berolahraga",
          "Motivasi memulai atau melanjutkan olahraga",
          "Fasilitasi dalam mengidentifikasi model peran positif untuk mempertahankan program Latihan",
          "Fasilitasi dalam mengembangkan program Latihan yang sesuai untuk memenuhi kebutuhan",
          "Fasilitasi dalam menetapkan tujuan jangka pendek dan Panjang program Latihan",
          "Fasilitasi dalam menjadwalkan periode regular Latihan rutin mingguan",
          "Fasilitasi dalam mempertahankan kemajuan program Latihan",
          "Lakukan aktivitas olahraga Bersama pasien, jika perlu",
          "Libatkan keluarga dalam merencanakan dan memelihara program Latihan",
          "Berikan umpan balik positif terhadap segala upaya yang dijalankan pasien",
          "Jelaskan manfaat Kesehatan dan efek fisiologis olahraga",
          "Jelaskan jenis Latihan yang sesuai dengan kondisi Kesehatan",
          "Jelaskan frekuensi, durasi, dan intensitas program Latihan yang diinginkan",
          "Ajarkan Latihan pemanasan dan pendinginan yang tepat",
          "Ajarkan Teknik menghindari cidera saat berolahraga",
          "Ajarkan Teknik pernapasan yang tepat untuk memaksimalkan penyerapan oksigen selama Latihan fisik",
          "Kolaborasi dengan rehabilitasi medis atau ahli fisiologi olahraga, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0019",
  "slug": "defisit-nutrisi",
  "kode": "D.0019",
  "nama": "Defisit Nutrisi",
  "definisi": "Defisit nutrisi merupakan diagnosis keperawatan yang didefinisikan sebagai asupan nutrisi tidak cukup untuk memenuhi kebutuhan metabolisme. ",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Berat badan menurun minimal 10% dibawah rentang ideal."
    ]
  },
  "faktorTerkait": [
    "Ketidakmampuan menelan makanan",
    "Ketidakmampuan mencerna makanan",
    "Ketidakmampuan mengabsorbsi nutrien",
    "Peningkatan kebutuhan metabolisme",
    "Faktor ekonomi (mis: finansial tidak mencukupi)",
    "Faktor psikologis (mis:  stres, keengganan untuk makan)"
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
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida  makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi",
          "Ajarkan posisi duduk, jika mampu",
          "Ajarkan diet yang diprogramkan",
          "Kolaborasi pemberian medikasi sebelum makan (mis: Pereda nyeri, antiemetik), jika perlu",
          "Kolaborasi dengan ahli  gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03136",
      "nama": "Promosi Berat Badan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemungkinan penyebab BB kurang",
          "Monitor adanya mual dan muntah",
          "Monitor jumlah kalori yang di konsumsi sehari-hari",
          "Monitor berat badan",
          "Monitor albumin, limfosit, dan elektrolit serum",
          "Berikan perawatan mulut sebelum pemberian makan, jika perlu",
          "Sediakan makanan yang tepat sesuai kondisi pasien (mis: makanan dengan tekstur halus, makanan yang diblender, makanan cair yang diberikan melalui NGT atau gastrostomy, total parenteral nutrition sesuai indikasi)",
          "Hidangkan makanan secara menarik",
          "Berikan suplemen, jika perlu",
          "Berikan pujian pada pasien/keluarga untuk peningkatan yang dicapai",
          "Jelaskan jenis makanan yang bergizi tinggi, namun tetap terjangkau",
          "Jelaskan peningkatan asupan kalori yang dibutuhkan"
        ]
      }
    }
  ]
},
{
  "id": "0020",
  "slug": "diare",
  "kode": "D.0020",
  "nama": "Diare",
  "definisi": "Diare adalah diagnosis keperawatan yang didefinisikan sebagai pengeluaran feses yang sering, lunak, dan tidak berbentuk.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "diare",
    "mencret",
    "BAB"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Defekasi lebih dari tiga kali dalam 24 jam",
      "Feses lembek atau cair"
    ]
  },
  "faktorTerkait": [
    "Inflamasi gastrointestinal",
    "Iritasi gastrointestinal",
    "Proses infeksi",
    "Malabsorpsi",
    "Kecemasan",
    "Tingkat stres tinggi",
    "Terpapar kontaminan",
    "Terpapar toksin",
    "Penyalahgunaan laksatif",
    "Penyalahgunaan zat",
    "Program pengobatan (agen tiroid, analgesik, pelunak feses, ferosulfat, antasida, cimetidine, dan antibiotik)",
    "Perubahan air dan makanan",
    "Bakteri pada air"
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
      "nama": "Manajemen Diare",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab diare (mis: inflamasi gastrointestinal, iritasi gastrointestinal, proses infeksi, malabsorpsi, ansietas, stres, obat-obatan, pemberian botol susu)",
          "Identifikasi Riwayat pemberian makanan",
          "Identifikasi gejala invaginasi (mis: tangisan keras, kepucatan pada bayi)",
          "Monitor warna, volume, frekuensi, dan konsistensi feses",
          "Monitor tanda dan gejala hypovolemia (mis: takikardia, nadi teraba lemah, tekanan darah turun, turgor kulit turun, mukosa kulit kering, CRT melambat, BB menurun)",
          "Monitor iritasi dan ulserasi kulit di daerah perianal",
          "Monitor jumlah dan pengeluaran diare",
          "Monitor keamanan penyiapan makanan",
          "Berikan asupan cairan oral (mis: larutan garam gula, oralit, Pedialyte, renalyte)",
          "Pasang jalur intravena",
          "Berikan cairan intravena (mis: ringer asetat, ringer laktat), jika perlu",
          "Ambil sampel darah untuk pemeriksaan darah lengkap dan elektrolit",
          "Ambil sampel feses untuk kultur, jika perlu",
          "Anjurkan makanan porsi kecil dan sering secara bertahap",
          "Anjurkan menghindari makanan pembentuk gas, pedas, dan mengandung laktosa",
          "Anjurkan melanjutkan pemberian ASI",
          "Kolaborasi pemberian obat antimotilitas (mis: loperamide, difenoksilat)",
          "Kolaborasi pemberian antispasmodik/spasmolitik (mis: papaverine, ekstrak belladonna, mebeverine)",
          "Kolaborasi pemberian obat pengeras feses (mis: atapugit, smektit, kaolin-pektin)"
        ]
      }
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0021",
  "slug": "disfungsi-motilitas-gastrointestinal",
  "kode": "D.0021",
  "nama": "Disfungsi Motilitas Gastrointestinal",
  "definisi": "Disfungsi motilitas gastrointestinal adalah peningkatan, penurunan, tidak efektif atau kurangnya aktivitas peristaltik gastrointestinal.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "gastrointestinal",
    "mual",
    "muntah",
    "bising usus"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan flatus tidak ada",
      "Nyeri/kram abdomen"
    ],
    "objektif": [
      "Suara peristaltik berubah (tidak ada, hipoaktif, atau hiperaktif)"
    ]
  },
  "faktorTerkait": [
    "Asupan enteral",
    "Intoleransi makanan",
    "Imobilisasi",
    "Makanan kontaminan",
    "Malnutrisi",
    "Pembedahan",
    "Efek agen farmakologis (mis. narkotik/opiat, antibiotik, laksatif, anestesia)",
    "Proses penuaan",
    "Kecemasan"
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
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi",
          "Ajarkan posisi duduk, jika mampu",
          "Ajarkan diet yang diprogramkan",
          "Kolaborasi pemberian medikasi sebelum makan (mis: Pereda nyeri, antiemetik), jika perlu",
          "Kolaborasi dengan ahli  gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pasien-pasien yang mengalami penyakit infeksi menular",
          "Terapkan kewaspadaan universal (mis: cuci tangan aseptic, gunakan alat pelindung diri seperti masker, sarung tangan, pelindung wajah, pelindung mata, apron, sepatu bot sesuai model transmisi mikroorganisme)",
          "Tempatkan pada ruang isolasi bertekanan positif untuk pasien yang mengalami penurunan imunitas",
          "Tempatkan pada ruang isolasi bertekanan negatif untuk pasien dengan resiko penyebaran infeksi via droplet atau udara",
          "Sterilisasi dan desinfeksi alat-alat, furniture, lantai, sesuai kebutuhan",
          "Gunakan hepafilter pada area khusus (mis: kamar operasi)",
          "Berikan tanda khusus untuk pasien-pasien dengan penyakit menular",
          "Ajarkan cara mencuci tangan dengan benar",
          "Ajarkan etika batuk dan/atau bersin"
        ]
      }
    }
  ]
},
{
  "id": "0022",
  "slug": "hipervolemia",
  "kode": "D.0022",
  "nama": "Hipervolemia",
  "definisi": "Hipervolemia merupakan diagnosis keperawatan yang didefinisikan sebagai peningkatan volume cairan intravaskular, interstitial, dan/atau...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipervolemia",
    "cairan berlebih",
    "edema"
  ],
  "tandaGejala": {
    "subjektif": [
      "Ortopnea",
      "Dispnea",
      "Paroxysmal nocturnal dyspnea (PND)"
    ],
    "objektif": [
      "Edema anasarca dan/atau edema perifer",
      "Berat badan meningkat dalam waktu singkat",
      "Jugular venous pressure (JVP) dan/atau central venous pressure (CVP) meningkat",
      "Refleks hepatojugular positif"
    ]
  },
  "faktorTerkait": [
    "Gangguan mekanisme regulasi",
    "Kelebihan asupan cairan",
    "Kelebihan asupan natrium",
    "Gangguan aliran balik vena",
    "Efek agen farmakologis (mis: kortikosteroid, chlorpropamide, tolbutamide, vincristine, tryptilinescarbamazepine)"
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
      "nama": "Manajemen Hipervolemia",
      "tindakan": {
        "terapeutik": [
          "Periksa tanda dan gejala hypervolemia (mis: ortopnea, dispnea, edema, JVP/CVP meningkat, refleks hepatojugular positif, suara napas tambahan)",
          "Identifikasi penyebab hypervolemia",
          "Monitor status hemodinamik (mis: frekuensi jantung, tekanan darah, MAP, CVP, PAP, PCWP, CO, CI) jika tersedia",
          "Monitor intake dan output cairan",
          "Monitor tanda hemokonsentrasi (mis: kadar natrium, BUN, hematokrit, berat jenis urine)",
          "Monitor tanda peningkatan tekanan onkotik plasma (mis: kadar protein dan albumin meningkat)",
          "Monitor kecepatan infus secara ketat",
          "Monitor efek samping diuretic (mis: hipotensi ortostatik, hypovolemia, hipokalemia, hiponatremia)",
          "Timbang berat badan setiap hari pada waktu yang sama",
          "Batasi asupan cairan dan garam",
          "Tinggikan kepala tempat tidur 30 – 40 derajat",
          "Anjurkan melapor jika haluaran urin < 0,5 mL/kg/jam dalam 6 jam",
          "Anjurkan melapor jika BB bertambah > 1 kg dalam sehari",
          "Ajarkan cara membatasi cairan",
          "Kolaborasi pemberian diuretic",
          "Kolaborasi penggantian kehilangan kalium akibat diuretic",
          "Kolaborasi pemberian continuous renal replacement therapy (CRRT) jika perlu"
        ]
      }
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0023",
  "slug": "hipovolemia",
  "kode": "D.0023",
  "nama": "Hipovolemia",
  "definisi": "Hipovolemia merupakan diagnosis keperawatan yang didefinisikan sebagai penurunan volume cairan intravaskular, interstitial, dan/atau...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipovolemia",
    "dehidrasi",
    "cairan kurang"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Frekuensi nadi meningkat",
      "Nadi teraba lemah",
      "Tekanan darah menurun",
      "Tekanan nadi menyempit",
      "Turgor kulit menurun",
      "Membran mukosa kering",
      "Volume urin menurun",
      "Hematokrit meningkat"
    ]
  },
  "faktorTerkait": [
    "Kehilangan cairan aktif",
    "Kegagalan mekanisme regulasi",
    "Peningkatan permeabilitas kapiler",
    "Kekurangan intake cairan",
    "Evaporasi"
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
      "nama": "Manajemen Hipovolemia",
      "tindakan": {
        "terapeutik": [
          "Periksa tanda dan gejala hipovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, haus, lemah)",
          "Monitor intake dan output cairan",
          "Hitung kebutuhan cairan",
          "Berikan posisi modified Trendelenburg",
          "Berikan asupan cairan oral",
          "Anjurkan memperbanyak asupan cairan oral",
          "Anjurkan menghindari perubahan posisi mendadak",
          "Kolaborasi pemberian cairan IV isotonis (mis: NaCL, RL)",
          "Kolaborasi pemberian cairan IV hipotonis (mis: glukosa 2,5%, NaCl 0,4%)",
          "Kolaborasi pemberian cairan koloid (albumin, plasmanate)",
          "Kolaborasi pemberian produk darah"
        ]
      }
    },
    {
      "kode": "I.03116",
      "nama": "Manajemen Syok Hipovolemik",
      "tindakan": {
        "terapeutik": [
          "Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuensi napas, TD, MAP)",
          "Monitor status oksigenasi (oksimetri nadi, AGD)",
          "Monitor status cairan (masukan dan haluaran, turgor kulit, CRT)",
          "Periksa tingkat kesadaran dan respon pupil",
          "Periksa seluruh permukaan tubuh terhadap adanya DOTS (deformity/deformitas, open wound/luka terbuka, tenderness/nyeri tekan, swelling/bengkak)",
          "Pertahankan jalan napas paten",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Persiapkan intubasi dan ventilasi mekanis, jika perlu",
          "Lakukan penekanan langsung (direct pressure) pada perdarahan eksternal",
          "Berikan posisi syok (modified trendelenberg)",
          "Pasang jalur IV berukuran besar (mis: nomor 14 atau 16)",
          "Pasang kateter urin untuk menilai produksi urin",
          "Pasang selang nasogastrik untuk dekompresi lambung",
          "Ambil sampel darah untuk pemeriksaan darah lengkap dan elektrolit",
          "Kolaborasi pemberian infus cairan kristaloid 1 – 2 L pada dewasa",
          "Kolaborasi pemberian infus cairan kristaloid 20 mL/kgBB pada anak",
          "Kolaborasi pemberian transfusi darah, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0024",
  "slug": "ikterik-neonatus",
  "kode": "D.0024",
  "nama": "Ikterik Neonatus",
  "definisi": "Ikterik neonatus merupakan diagnosis keperawatan yang didefinisikan sebagai kulit dan membran mukosa neonatus menguning setelah 24...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "ikterik",
    "kuning",
    "bilirubin"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Profil darah abnormal (hemolisis, bilirubin serum total > 2 mg/dL, bilirubin serum total pada rentang risiko tinggi menurut usia pada normogram spesifik waktu)",
      "Membran mukosa kuning",
      "Kulit kuning",
      "Sklera kuning"
    ]
  },
  "faktorTerkait": [
    "Penurunan berat badan abnormal ( > 7 – 8% pada bayi baru lahir yang menyusu ASI, > 15% pada bayi cukup bulan)",
    "Pola makan tidak ditetapkan dengan baik",
    "Kesulitan transisi ke kehidupan ekstra uterin",
    "Usia kurang dari 7 hari",
    "Keterlambatan pengeluaran feses (mekonium)"
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
      "nama": "Fototerapi Neonatus",
      "tindakan": {
        "terapeutik": [
          "Monitor ikterik pada sklera dan kulit  bayi",
          "Identifikasi kebutuhan cairan sesuai dengan usia gestasi dan berat badan",
          "Monitor suhu dan tanda vital setiap 4 jam sekali",
          "Monitor efek samping fototerapi (mis: hipertermi, diare, rush pada kulit, penurunan berat badan lebih dari  8 – 10%",
          "Siapkan lampu fototerapi dan incubator atau kotak bayi",
          "Lepaskan pakaian bayi kecuali popok",
          "Berikan penutup mata (eye protector/biliband) pada bayi",
          "Ukur jarak antara lampu dan permukaan kulit bayi (30 cm atau tergantung spesifikasi lampu fototerapi)",
          "Biarkan tubuh bayi terpapar sinar fototerapi secara berkelanjutan",
          "Ganti segera alas dan popok bayi jika BAB/BAK",
          "Gunakan linen berwarna putih agar memantulkan cahaya sebanyak mungkin",
          "Anjurkan ibu menyusui sekitar 20 – 30 menit",
          "Anjurkan ibu menyusui sesering mungkin",
          "Kolaborasi pemberian darah vena bilirubin direk dan indirek"
        ]
      }
    },
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda-tanda vital bayi (terutama suhu 36°C – 37°C)",
          "Mandikan bayi dengan suhu ruangan 21 – 24°C",
          "Mandikan bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari",
          "Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)",
          "Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang",
          "Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas",
          "Lakukan pemijatan bayi",
          "Ganti popok bayi jika basah",
          "Kenakan pakaian bayi dari bahan katun",
          "Anjurkan ibu menyusui sesuai kebutuhan bayi",
          "Ajarkan ibu cara merawat bayi di rumah",
          "Ajarkan cara pemberian makanan pendamping ASI pada bayi > 6 bulan"
        ]
      }
    }
  ]
},
{
  "id": "0025",
  "slug": "kesiapan-peningkatan-keseimbangan-cairan",
  "kode": "D.0025",
  "nama": "Kesiapan Peningkatan Keseimbangan Cairan",
  "definisi": "Kesiapan peningkatan keseimbangan cairan adalah pola ekuilibrium antara volume cairan dan komposisi kimia cairan tubuh yang cukup untuk",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "cairan",
    "hidrasi",
    "dehidrasi",
    "edema"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Membran mukosa lembab",
      "Asupan makanan dan cairan adekuat untuk kebutuhan harian",
      "Turgor jaringan baik",
      "Tidak ada tanda edema atau dehidrasi"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Manajemen Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor status hidrasi (mis: frekuensi nadi, kekuatan nadi, akral, pengisian kapiler, kelembaban mukosa, turgor kulit, tekanan darah)",
          "Monitor berat badan harian",
          "Monitor berat badan sebelum dan sesudah dialisis",
          "Monitor hasil pemeriksaan laboratorium (mis: hematokrit, Na, K, Cl, berat jenis urin, BUN)",
          "Monitor status hemodinamik (mis: MAP, CVP, PAP, PCWP, jika tersedia)",
          "Catat intake-output dan hitung balans cairan 24 jam",
          "Berikan asupan cairan, sesuai kebutuhan",
          "Berikan cairan intravena, jika perlu",
          "Kolaborasi pemberian diuretik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03101",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0026",
  "slug": "kesiapan-peningkatan-nutrisi",
  "kode": "D.0026",
  "nama": "Kesiapan Peningkatan Nutrisi",
  "definisi": "Kesiapan peningkatan nutrisi adalah pola asupan nutrisi yang cukup untuk memenuhi kebutuhan metabolisme dan dapat ditingkatkan.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [],
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
      "nama": "Edukasi Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Periksa status gizi, status alergi, program diet, kebutuhan dan kemampuan pemenuhan kebutuhan gizi",
          "Identifikasi kemampuan dan waktu yang tepat menerima informasi",
          "Persiapkan materi dan media seperti jenis-jenis nutrisi, tabel makanan penukar, cara mengelola, cara menakar makanan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan kepada pasien dan keluarga alergi makanan, makanan yang harus di hindari, kebutuhan jumlah kalori, jenis makanan yang dibutuhkan pasien",
          "Ajarkan cara melaksanakan diet sesuai program (mis: makanan tinggi protein, rendah garam, rendah kalori)",
          "Jelaskan hal-hal yang dilakukan sebelum memberikan makan (mis: perawatan mulut, penggunaan gigi palsu, obat-obat yang harus diberikan sebelum makan)",
          "Demonstrasikan cara membersihkan mulut",
          "Demonstrasikan cara mengatur posisi saat makan",
          "Ajarkan pasien/keluarga memonitor asupan kalori dan  makanan (mis: menggunakan buku harian)",
          "Ajarkan pasien dan keluarga memantau kondisi kekurangan  nutrisi",
          "Anjurkan mendemonstrasikan cara memberi makan, menghitung kalori, menyiapkan makanan sesuai program diet"
        ]
      }
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan makan dan perilaku makan yang akan diubah",
          "Identifikasi kemajuan modifikasi diet secara regular",
          "Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan",
          "Bina hubungan terapeutik",
          "Sepakati lama waktu pemberian konseling",
          "Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis",
          "Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan",
          "Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)",
          "Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol",
          "Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan",
          "Rujuk pada ahli gizi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0027",
  "slug": "ketidakstabilan-kadar-glukosa-darah",
  "kode": "D.0027",
  "nama": "Ketidakstabilan Kadar Glukosa Darah",
  "definisi": "Ketidakstabilan kadar glukosa darah adalah variasi kadar glukosa darah naik atau turun dari rentang normal.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "glukosa",
    "gula darah",
    "diabetes"
  ],
  "tandaGejala": {
    "subjektif": [
      "Lelah atau lesu"
    ],
    "objektif": [
      "Kadar glukosa dalam darah/urin tinggi",
      "Mengantuk",
      "Pusing",
      "Gangguan koordinasi",
      "Kadar glukosa dalam darah/urin rendah"
    ]
  },
  "faktorTerkait": [
    "Disfungsi pankreas",
    "Resistensi insulin",
    "Gangguan toleransi glukosa darah",
    "Gangguan glukosa darah puasa",
    "Penggunaan insulin atau obat glikemik oral",
    "Hiperinsulinemia (mis. insulinoma)",
    "Endokrinopati (mis. kerusakan adrenal atau pituitari)",
    "Disfungsi hati",
    "Disfungsi ginjal kronis",
    "Efek agen farmakologis",
    "TIndakan pembedahan neoplasma",
    "Gangguan metabolik bawaan (mis. gangguan penyimpanan lisosomal, galaktosemia, gangguan penyimpanan glikogen)"
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
      "nama": "Manajemen Hiperglikemia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemungkinan penyebab hiperglikemia",
          "Identifikasi situasi yang menyebabkan kebutuhan insulin meningkat (mis: penyakit kambuhan)",
          "Monitor kadar glukosa darah, jika perlu",
          "Monitor tanda dan gejala hiperglikemia (mis: polyuria, polydipsia, polifagia, kelemahan, malaise, pandangan kabur, sakit kepala)",
          "Monitor intake dan output cairan",
          "Monitor keton urin, kadar Analisa gas darah, elektrolit, tekanan darah ortostatik dan frekuensi nadi",
          "Berikan asupan cairan oral",
          "Konsultasi dengan medis jika tanda dan gejala hiperglikemia tetap ada atau memburuk",
          "Fasilitasi ambulasi jika ada hipotensi ortostatik",
          "Anjurkan menghindari olahraga saat kadar glukosa darah lebih dari 250 mg/dL",
          "Anjurkan monitor kadar glukosa darah secara mandiri",
          "Anjurkan kepatuhan terhadap diet dan olahraga",
          "Ajarkan indikasi dan pentingnya pengujian keton urin, jika perlu",
          "Ajarkan pengelolaan diabetes (mis: penggunaan insulin, obat oral, monitor asupan cairan, penggantian karbohidrat, dan bantuan professional kesehatan",
          "Kolaborasi pemberian insulin, jika perlu",
          "Kolaborasi pemberian cairan IV, jika perlu",
          "Kolaborasi pemberian kalium, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03115",
      "nama": "Manajemen Hipoglikemia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda dan gejala hipoglikemia",
          "Identifikasi kemungkinan penyebab hipoglikemia",
          "Berikan karbohidrat sederhana, jika perlu",
          "Berikan glucagon, jika perlu",
          "Berikan karbohidrat kompleks dan protein sesuai diet",
          "Pertahankan kepatenan jalan napas",
          "Pertahankan akses IV, jika perlu",
          "Hubungi layanan medis darurat, jika perlu",
          "Anjurkan membawa karbohidrat sederhana setiap saat",
          "Anjurkan memakai identitas darurat yang tepat",
          "Anjurkan monitor kadar glukosa darah",
          "Anjurkan berdiskusi dengan tim perawatan diabetes tentang penyesuaian program pengobatan",
          "Jelaskan interaksi antara diet, insulin/agen oral, dan olahraga",
          "Ajarkan pengelolaan hipoglikemia (mis: tanda dan gejala, faktor risiko, dan pengobatan hipoglikemia)",
          "Ajarkan perawatan mandiri untuk mencegah hipoglikemia (mis: mengurangi insulin/agen oral dan/atau meningkatkan asupan makanan untuk berolahraga)",
          "Kolaborasi pemberian dekstrose, jika perlu",
          "Kolaborasi pemberian glukagon, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0028",
  "slug": "menyusui-efektif",
  "kode": "D.0028",
  "nama": "Menyusui Efektif",
  "definisi": "Menyusui efektif merupakan diagnosis keperawatan yang didefinisikan sebagai pemberian ASI secara langsung dari payudara kepada bayi...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "menyusui",
    "ASI",
    "laktasi",
    "bayi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Bayi melekat pada payudara ibu dengan benar",
      "Ibu mampu memposisikan bayi dengan benar",
      "Miksi bayi lebih dari 8 kali dalam 24 jam",
      "Berat badan bayi meningkat",
      "ASI menetes/memancar",
      "Suplai ASI adekuat",
      "Puting tidak lecet setelah minggu kedua"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Konseling Laktasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional ibu saat akan dilakukan konseling menyusui",
          "Identifikasi keinginan dan tujuan menyusui",
          "Identifikasi permasalahan yang ibu alami selama proses menyusui",
          "Gunakan Teknik mendengarkan aktif (mis: duduk sama tinggi, dengarkan permasalahan ibu)",
          "Berikan pujian terhadap perilaku ibu yang benar",
          "Ajarkan Teknik menyusui yang tepat sesuai kebutuhan ibu."
        ]
      }
    },
    {
      "kode": "I.03135",
      "nama": "Promosi ASI Eksklusif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan laktasi bagi ibu pada antenatal, intranatal, dan postnatal",
          "Fasilitasi ibu melakukan IMD (inisiasi menyusu dini)",
          "Fasilitasi ibu untuk rawat gabung atau rooming in",
          "Gunakan sendok dan cangkir jika bayi belum bisa menyusu",
          "Dukung ibu menyusui dengan mendampingi ibu selama kegiatan menyusui berlangsung",
          "Diskusikan dengan keluarga tentang ASI eksklusif",
          "Siapkan kelas menyusui pada masa prenatal minimal 2 kali dan periode pascapartum minimal 3 kali",
          "Jelaskan manfaat menyusui bagi ibu dan bayi",
          "Jelaskan pentingnya menyusui di malam hari untuk mempertahankan dan meningkatkan produksi ASI",
          "Jelaskan tanda-tanda bayi cukup ASI (mis: berat badan meningkat, BAK lebih dari 10 kali/hari, warna urine tidak pekat)",
          "Jelaskan manfaat rawat gabung (rooming in)",
          "Anjurkan ibu menyusui sesegera mungkin setelah melahirkan",
          "Anjurkan ibu memberikan nutrisi kepada bayi hanya dengan ASI",
          "Anjurkan ibu menyusui sesering mungkin setelah lahir sesuai kebutuhan bayi",
          "Anjurkan ibu menjaga produksi ASI dengan memerah, walaupun kondisi ibu atau bayi terpisah"
        ]
      }
    },
    {
      "kode": "I.03138",
      "nama": "Promosi Laktasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan laktasi bagi ibu, dan bayi",
          "Fasilitasi ibu saat melakukan IMD (inisiasi menyusu dini)",
          "Fasilitasi ibu untuk rawat gabung atau rooming in",
          "Gunakan sendok dan cangkir jika bayi belum bisa menyusu",
          "Damping ibu selama kegiatan menyusui berlangsung",
          "Jelaskan pentingnya menyusui sampai 2 tahun",
          "Jelaskan manfaat rawat gabung (rooming in)",
          "Anjurkan ibu menyusui minimal 2 kali selama hamil, dan setelah melahirkan 3-4 kali",
          "Adakan kelas edukasi tentang manfaat dan posisi menyusui pada masa prenatal dan periode post partum",
          "Anjurkan ibu menjaga produksi ASI dengan memerah ASI",
          "Anjurkan ibu untuk memberikan nutrisi kepada bayi hanya dengan ASI eksklusif selama 6 bulan dan dilanjurkan sampai 2 tahun",
          "Anjurkan ibu memberikan makanan pendamping ASI setelah 6 bulan",
          "Anjurkan ibu menyusui sesering mungkin segera setelah lahir sesuai kebutuhan bayi"
        ]
      }
    }
  ]
},
{
  "id": "0029",
  "slug": "menyusui-tidak-efektif",
  "kode": "D.0029",
  "nama": "Menyusui Tidak Efektif",
  "definisi": "Menyusui tidak efektif merupakan kondisi dimana ibu dan bayi mengalami ketidakpuasan atau kesukaran pada proses menyusui.",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "menyusui",
    "ASI",
    "laktasi",
    "bayi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Kelelahan maternal",
      "Kecemasan maternal"
    ],
    "objektif": [
      "Bayi tidak mampu melekat pada payudara ibu dengan benar",
      "ASI tidak menetes/memancar",
      "BAK bayi kurang dari 8 kali dalam 24 jam",
      "Nyeri dan/atau lecet terus menerus setelah minggu kedua"
    ]
  },
  "faktorTerkait": [
    "Ketidakadekuatan suplai ASI",
    "Hambatan pada neonatus (mis: prematuritas, sumbing)",
    "Anomali payudara ibu (misL puting yang masuk ke dalam)",
    "Ketidakadekuatan refleks oksitosin",
    "Ketidakadekuatan refleks menghisap bayi",
    "Payudara bengkak",
    "Riwayat operasi payudara",
    "Kelahiran kembar",
    "Tidak rawat gabung",
    "Kurang terpapar informasi tentang pentingnya menyusui dan/atau metode menyusui",
    "Kurangnya dukungan keluarga",
    "Faktor budaya"
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
      "nama": "Edukasi Menyusui",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi tujuan atau keinginan menyusui",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Dukung ibu meningkatkan kepercayaan diri dalam menyusui",
          "Libatkan sistem pendukung: suami, keluarga, tenaga Kesehatan, dan masyarakat",
          "Berikan konseling menyusui",
          "Jelaskan manfaat menyusui bagi ibu dan bayi",
          "Ajarkan 4 posisi menyusui dan perlekatan (latch on) dengan benar",
          "Ajarkan perawatan payudara antepartum dengan mengkompres dengan kapas yang telah diberikan minyak kelapa",
          "Ajarkan perawatan payudara post partum (mis: memerah ASI, pijat payudara, pijat oksitosin)"
        ]
      }
    },
    {
      "kode": "I.03093",
      "nama": "Konseling Laktasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional ibu saat akan dilakukan konseling menyusui",
          "Identifikasi keinginan dan tujuan menyusui",
          "Identifikasi permasalahan yang ibu alami selama proses menyusui",
          "Gunakan Teknik mendengarkan aktif (mis: duduk sama tinggi, dengarkan permasalahan ibu)",
          "Berikan pujian terhadap perilaku ibu yang benar",
          "Ajarkan Teknik menyusui yang tepat sesuai kebutuhan ibu."
        ]
      }
    }
  ]
},
{
  "id": "0030",
  "slug": "obesitas",
  "kode": "D.0030",
  "nama": "Obesitas",
  "definisi": "Obesitas merupakan diagnosis keperawatan yang didefinisikan sebagai akumulasi lemak berlebih yang tidak sesuai dengan usia dan jenis kelamin",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "obesitas",
    "gemuk",
    "berat badan"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "IMT > 27 kg/m² (pada dewasa)",
      "IMT lebih dari presentil 95 untuk usia dan jenis kelamin (pada anak)"
    ]
  },
  "faktorTerkait": [
    "Kurang aktivitas fisik harian",
    "Kelebihan konsumsi gula",
    "Gangguan kebiasaan makan",
    "Gangguan persepsi makan",
    "Kelebihan konsumsi alkohol",
    "Penggunaan energi kurang dari asupan",
    "Sering mengemil",
    "Sering memakan makanan berminyak/berlemak",
    "Faktor keturunan (mis. distribusi jaringan adiposa, pengeluaran energi, aktivitas lipase lipoprotein, sintesis lipid, lipolisis)",
    "Penggunaan makanan formula atau makanan campuran (pada bayi)",
    "Asupan kalsium rendah (pada anak-anak)",
    "Berat badan bertambah cepat (selama masa anak-anak, selama masa bayi, termasuk minggu pertama, 4 bulan pertama, dan tahun pertama)",
    "Makanan padat sebagai sumber makanan utama pada usia < 5 bulan"
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
      "nama": "Edukasi berat badan efektif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media edukasi",
          "Jadwalkan Pendidikan  Kesehatan sesuai kesepakatan",
          "Beri kesempatan pada keluarga untuk bertanya",
          "Jelaskan hubungan asupan makanan, Latihan, peningkatan, dan penurunan berat badan",
          "Jelaskan kondisi medis yang dapat mempengaruhi berat badan",
          "Jelaskan risiko kondisi kegemukan (overweight) dan kurus (underweight)",
          "Jelaskan kebiasaan, tradisi dan budaya, serta faktor genetic yang mempengaruhi berat badan",
          "Ajarkan cara mengelola berat badan secara efektif"
        ]
      }
    },
    {
      "kode": "I.03097",
      "nama": "Manajemen berat badan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kondisi Kesehatan pasien yang dapat mempengaruhi berat badan",
          "Hitung berat badan ideal pasien (lihat kalkulator berat badan ideal)",
          "Hitung persentase lemak dan otot pasien",
          "Fasilitasi menentukan target berat badan yang realistis",
          "Jelaskan hubungan asupan makanan, Latihan, peningkatan, dan penurunan berat badan",
          "Jelaskan faktor risiko berat badan lebih dan berat badan kurang",
          "Anjurkan mencatat berat badan setiap minggu, jika perlu",
          "Anjurkan melakukan pencatatan asupan makan, aktivitas fisik dan perubahan berat badan"
        ]
      }
    }
  ]
},
{
  "id": "0031",
  "slug": "risiko-berat-badan-lebih",
  "kode": "D.0031",
  "nama": "Risiko Berat Badan Lebih",
  "definisi": "Risiko Berat badan lebih adalah diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami akumulasi lemak berlebih atau abnormal",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kurang aktivitas fisik harian",
    "Kelebihan konsumsi gula",
    "Gangguan kebiasaan makan",
    "Gangguan persepsi makan",
    "Kelebihan konsumsi alkohol",
    "Penggunaan energi kurang dari asupan",
    "Sering mengemil",
    "Sering memakan makanan berminyak/berlemak",
    "Faktor keturunan (mis. distribusi jaringan adiposa, pengeluaran energi, aktivitas lipase lipoprotein, sintesis lipid, lipolisis)",
    "Penggunaan makanan formula atau makanan campuran (pada bayi)",
    "Asupan kalsium rendah (pada anak-anak)",
    "Berat badan bertambah cepat (selama masa anak-anak, selama masa bayi, termasuk minggu pertama, 4 bulan pertama, dan tahun pertama)",
    "Makanan padat sebagai sumber makanan utama pada usia < 5 bulan"
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
      "kode": "I.12369",
      "nama": "Edukasi Diet",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan pasien dan keluarga menerima informasi",
          "Identifikasi tingkat pengetahuan saat ini",
          "Identifikasi kebiasaan pola makan saat ini dan masa lalu",
          "Identifikasi persepsi pasien dan keluarga tentang diet yang diprogramkan",
          "Identifikasi keterbatasan finansial untuk menyediakan makanan",
          "Persiapkan materi dan media dan alat peraga",
          "Jadwalkan waktu yang tepat untuk memberikan Pendidikan Kesehatan",
          "Berikan kesempatan pasien dan keluarga bertanya",
          "Sediakan rencana makan tertulis, jika perlu",
          "Jelaskan tujuan kepatuhan diet terhadap Kesehatan",
          "Informasikan makanan yang diperbolehkan dan dilarang",
          "Informasikan kemungkinan interaksi obat dan makanan, jika perlu",
          "Anjurkan pertahankan posisi semi fowler (30 – 45 derajat) 20 – 30 menit setelah makan",
          "Anjurkan mengganti bahan makanan sesuai dengan diet yang diprogramkan",
          "Anjurkan melakukan olahraga sesuai toleransi",
          "Ajarkan cara membaca label dan memilih makanan yang sesuai",
          "Ajarkan cara merencanakan makanan yang sesuai program",
          "Rekomendasikan resep makanan yang sesuai dengan diet, jika perlu",
          "Rujuk ke ahli  gizi dan sertakan keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03094",
      "nama": "Konseling Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan makan dan perilaku makan yang akan diubah",
          "Identifikasi kemajuan modifikasi diet secara regular",
          "Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan",
          "Bina hubungan terapeutik",
          "Sepakati lama waktu pemberian konseling",
          "Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis",
          "Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan",
          "Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)",
          "Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol",
          "Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan",
          "Rujuk pada ahli gizi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0032",
  "slug": "risiko-defisit-nutrisi",
  "kode": "D.0032",
  "nama": "Risiko Defisit Nutrisi",
  "definisi": "Risiko defisit nutrisi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami asupan nutrisi tidak cukup untuk...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "nutrisi",
    "makan",
    "makanan",
    "gizi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Ketidakmampuan menelan makanan",
    "Ketidakmampuan mencerna makanan",
    "Ketidakmampuan mengabsorbsi nutrien",
    "Peningkatan kebutuhan metabolisme",
    "Faktor ekonomi (mis: finansial tidak mencukupi)",
    "Faktor psikologis (mis:  stres, keengganan untuk makan)"
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
      "nama": "Manajemen Gangguan Makan",
      "tindakan": {
        "terapeutik": [
          "Monitor asupan dan keluarnya makanan dan cairan serta kebutuhan kalori",
          "Timbang berat badan secara rutin",
          "Diskusikan perilaku makan dan jumlah aktivitas fisik (termasuk olahraga) yang sesuai",
          "Lakukan kontrak perilaku (mis: target berat badan, tanggungjawab perilaku)",
          "Damping ke kamar mandi untuk pengamatan perilaku memuntahkan Kembali makanan",
          "Berikan penguatan positif terhadap keberhasilan target dan perubahan perilaku",
          "Berikan konsekuensi jika tidak mencapai target sesuai kontrak",
          "Rencanakan program pengobatan untuk perawatan di rumah (mis: medis, konseling)",
          "Anjurkan membuat catatan harian tentang perasaan dan situasi pemicu pengeluaran makanan (mis: pengeluaran yang disengaja, muntah, aktivitas berlebihan)",
          "Ajarkan pengaturan diet yang tepat",
          "Ajarkan keterampilan koping untuk penyelesaian masalah perilaku  makan",
          "Kolaborasi dengan ahli  gizi tentang target berat badan, kebutuhan kalori dan pilihan makanan"
        ]
      }
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi",
          "Ajarkan posisi duduk, jika mampu",
          "Ajarkan diet yang diprogramkan",
          "Kolaborasi pemberian medikasi sebelum makan (mis: Pereda nyeri, antiemetik), jika perlu",
          "Kolaborasi dengan ahli gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0033",
  "slug": "risiko-disfungsi-motilitas-gastrointestinal",
  "kode": "D.0033",
  "nama": "Risiko Disfungsi Motilitas Gastrointestinal",
  "definisi": "Risiko disfungsi motilitas gastrointestinal merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami peningkatan....",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "gastrointestinal",
    "mual",
    "muntah",
    "bising usus"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Pembedahan abdomen",
    "Penurunan sirkulasi gastrointestinal",
    "Intoleransi makanan",
    "Refluks gastrointestinal",
    "Hiperglikemia",
    "Imobilitas",
    "Proses penuaan",
    "Infeksi gastrointestinal",
    "Efek agen farmakologis (mis: antibiotik, laksatif, narkotika/opiat)",
    "Prematuritas",
    "Kecemasan",
    "Stress",
    "Kurangnya sanitasi pada persiapan makanan"
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
      "nama": "Edukasi Diet",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan pasien dan keluarga menerima informasi",
          "Identifikasi tingkat pengetahuan saat ini",
          "Identifikasi kebiasaan pola makan saat ini dan masa lalu",
          "Identifikasi persepsi pasien dan keluarga tentang diet yang diprogramkan",
          "Identifikasi keterbatasan finansial untuk menyediakan makanan",
          "Persiapkan materi dan media dan alat peraga",
          "Jadwalkan waktu yang tepat untuk memberikan Pendidikan Kesehatan",
          "Berikan kesempatan pasien dan keluarga bertanya",
          "Sediakan rencana makan tertulis, jika perlu",
          "Jelaskan tujuan kepatuhan diet terhadap Kesehatan",
          "Informasikan makanan yang diperbolehkan dan dilarang",
          "Informasikan kemungkinan interaksi obat dan makanan, jika perlu",
          "Anjurkan pertahankan posisi semi fowler (30 – 45 derajat) 20 – 30 menit setelah makan",
          "Anjurkan mengganti bahan makanan sesuai dengan diet yang diprogramkan",
          "Anjurkan melakukan olahraga sesuai toleransi",
          "Ajarkan cara membaca label dan memilih makanan yang sesuai",
          "Ajarkan cara merencanakan makanan yang sesuai program",
          "Rekomendasikan resep makanan yang sesuai dengan diet, jika perlu",
          "Rujuk ke ahli  gizi dan sertakan keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pasien-pasien yang mengalami penyakit infeksi menular",
          "Terapkan kewaspadaan universal (mis: cuci tangan aseptic, gunakan alat pelindung diri seperti masker, sarung tangan, pelindung wajah, pelindung mata, apron, sepatu bot sesuai model transmisi mikroorganisme)",
          "Tempatkan pada ruang isolasi bertekanan positif untuk pasien yang mengalami penurunan imunitas",
          "Tempatkan pada ruang isolasi bertekanan negatif untuk pasien dengan resiko penyebaran infeksi via droplet atau udara",
          "Sterilisasi dan desinfeksi alat-alat, furniture, lantai, sesuai kebutuhan",
          "Gunakan hepafilter pada area khusus (mis: kamar operasi)",
          "Berikan tanda khusus untuk pasien-pasien dengan penyakit menular",
          "Ajarkan cara mencuci tangan dengan benar",
          "Ajarkan etika batuk dan/atau bersin"
        ]
      }
    }
  ]
},
{
  "id": "0034",
  "slug": "risiko-hipovolemia",
  "kode": "D.0034",
  "nama": "Risiko Hipovolemia",
  "definisi": "Risiko hipovolemia merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan volume cairan intravaskular...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "hipovolemia",
    "dehidrasi",
    "cairan kurang"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kehilangan cairan secara aktif",
    "Gangguan absorpsi cairan",
    "Usia lanjut",
    "Kelebihan berat badan",
    "Status hipermetabolik",
    "Kegagalan mekanisme regulasi",
    "Evaporasi",
    "Kekurangan intake cairan",
    "Efek agen farmakologis"
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
      "nama": "Manajemen hipovolemia",
      "tindakan": {
        "terapeutik": [
          "Periksa tanda dan gejala hipovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, haus, lemah)",
          "Monitor intake dan output cairan",
          "Hitung kebutuhan cairan",
          "Berikan posisi modified Trendelenburg",
          "Berikan asupan cairan oral",
          "Anjurkan memperbanyak asupan cairan oral",
          "Anjurkan menghindari perubahan posisi mendadak",
          "Kolaborasi pemberian cairan IV isotonis (mis: NaCL, RL)",
          "Kolaborasi pemberian cairan IV hipotonis (mis: glukosa 2,5%, NaCl 0,4%)",
          "Kolaborasi pemberian cairan koloid (albumin, plasmanate)",
          "Kolaborasi pemberian produk darah"
        ]
      }
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0035",
  "slug": "risiko-ikterik-neonatus",
  "kode": "D.0035",
  "nama": "Risiko Ikterik Neonatus",
  "definisi": "Risiko ikterik neonatus merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kulit dan membran mukosa neonatus...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "ikterik",
    "kuning",
    "bilirubin"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Penurunan berat badan abnormal ( > 7 – 8% pada bayi baru lahir yang menyusu ASI, > 15% pada bayi cukup bulan)",
    "Pola makan tidak ditetapkan dengan baik",
    "Kesulitan transisi ke kehidupan ekstra uterin",
    "Usia kurang dari 7 hari",
    "Keterlambatan pengeluaran feses (mekonium)",
    "Prematuritas (< 37 minggu)"
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
      "nama": "Perawatan Bayi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda-tanda vital bayi (terutama suhu 36°C – 37°C)",
          "Mandikan bayi dengan suhu ruangan 21 – 24°C",
          "Mandikan bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari",
          "Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)",
          "Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang",
          "Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas",
          "Lakukan pemijatan bayi",
          "Ganti popok bayi jika basah",
          "Kenakan pakaian bayi dari bahan katun",
          "Anjurkan ibu menyusui sesuai kebutuhan bayi",
          "Ajarkan ibu cara merawat bayi di rumah",
          "Ajarkan cara pemberian makanan pendamping ASI pada bayi > 6 bulan"
        ]
      }
    },
    {
      "kode": "I.03132",
      "nama": "Perawatan Neonatus",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kondisi awal bayi setelah lahir (mis: kecukupan bulan, air ketuban jernih atau bercampur meconium, menangis spontan, tonus otot)",
          "Monitor tanda vital bayi (terutama suhu)",
          "Lakukan inisiasi menyusui dini (IMD) segera setelah bayi lahir",
          "Berikan vitamin K 1 mg intramuskuler untuk mencegah perdarahan",
          "Mandikan selama 5 – 10 menit, minimal sekali sehari",
          "Mandikan dengan air hangat (36 – 37 C)",
          "Gunakan sabun yang mengandung provitamin B5",
          "Oleskan baby oil untuk mempertahankan kelembaban kulit",
          "Rawat tali pusat secara terbuka (tidak dibungkus)",
          "Bersihkan tali pusat dengan air steril atau air matang",
          "Kenakan pakaian dari bahan katun",
          "Selimuti untuk mempertahankan kehangatan dan mencegah hipotermia",
          "Ganti popok segera setelah basah",
          "Anjurkan tidak membubuhi apapun pada tali pusat",
          "Anjurkan ibu menyusui bayi setiap 2 jam",
          "Anjurkan menyendawakan bayi setelah disusui",
          "Anjurkan ibu mencuci tangan sebelum menyentuh bayi"
        ]
      }
    }
  ]
},
{
  "id": "0036",
  "slug": "risiko-ketidakseimbangan-cairan",
  "kode": "D.0036",
  "nama": "Risiko Ketidakseimbangan Cairan",
  "definisi": "Risiko ketidakseimbangan cairan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan, peningkatan...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "cairan",
    "hidrasi",
    "dehidrasi",
    "edema"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Prosedur pembedahan mayor",
    "Trauma/perdarahan",
    "Luka bakar",
    "Aferesis",
    "Asites",
    "Obstruksi intestinal",
    "Peradangan pancreas",
    "Penyakit ginjal dan kelenjar",
    "Disfungsi intestinal"
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
      "nama": "Manajemen Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor status hidrasi (mis: frekuensi nadi, kekuatan nadi, akral, pengisian kapiler, kelembaban mukosa, turgor kulit, tekanan darah)",
          "Monitor berat badan harian",
          "Monitor berat badan sebelum dan sesudah dialisis",
          "Monitor hasil pemeriksaan laboratorium (mis: hematokrit, Na, K, Cl, berat jenis urin, BUN)",
          "Monitor status hemodinamik (mis: MAP, CVP, PAP, PCWP, jika tersedia)",
          "Catat intake-output dan hitung balans cairan 24 jam",
          "Berikan asupan cairan, sesuai kebutuhan",
          "Berikan cairan intravena, jika perlu",
          "Kolaborasi pemberian diuretik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0037",
  "slug": "risiko-ketidakseimbangan-elektrolit",
  "kode": "D.0037",
  "nama": "Risiko Ketidakseimbangan Elektrolit",
  "definisi": "Risiko ketidakseimbangan elektrolit merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami perubahan kadar serum...",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Ketidakseimbangan cairan (mis: dehidrasi dan intoksikasi air)",
    "Kelebihan volume cairan",
    "Gangguan mekanisme regulasi (mis: diabetes)",
    "Efek samping prosedur (mis: pembedahan)",
    "Diare",
    "Muntah",
    "Disfungsi ginjal",
    "Disfungsi regulasi endokrin"
  ],
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
      "nama": "Pemantauan Elektrolit",
      "tindakan": {
        "terapeutik": [
          "Monitor kemungkinan penyebab ketidakseimbangan elektrolit",
          "Monitor kadar elektrolit serum",
          "Monitor mual, muntah, diare",
          "Monitor kehilangan cairan, jika perlu",
          "Monitor tanda dan gejala hipokalemia (mis: kelemahan otot, interval QT memanjang, gelombang T datar atau terbalik, depresi segmen ST, gelombang U, kelelahan, parestesia, penurunan refleks, anoreksia, konstipasi, motilitas usus menurun, pusing, depresi pernapasan)",
          "Monitor tanda dan gejala hiperkalemia (mis: peka rangsang, gelisah, mual, muntah, takikardia mengarah ke bradikardia, fibrilasi/takikardia ventrikel, gelombang T tinggi, gelombang P datar, kompleks QRS tumpul, blok jantung mengarah asistol)",
          "Monitor tanda dan gejala hiponatremia (mis: disorientasi, otot berkedut, sakit kepala, membrane mukosa kering, hipotensi postural, kejang, letargi, penurunan kesadaran)",
          "Monitor tanda dan gejala hipernatremia (mis: haus, demam, mual, muntah, gelisah, peka rangsang, membrane mukosa kering, takikardia, hipotensi, letargi, konfusi, kejang)",
          "Monitor tanda dan gejala hipokalsemia (mis: peka rangsang, tanda Chvostek [spasme otot wajah] dan tanda Trousseau [spasme karpal], kram otot, interval QT memanjang)",
          "Monitor tanda dan gejala hiperkalsemia (mis: nyeri tulang, haus, anoreksia, letargi, kelemahan otot, segmen QT memendek, gelombang T lebar, komplek QRS lebar, interval PR memanjang)",
          "Monitor tanda dan gejala hypomagnesemia (mis: depresi pernapasan, apatis, tanda Chvostek, tanda Trousseau, konfusi, disritmia)",
          "Monitor tanda gan gejala hypermagnesemia (mis: kelemahan otot, hiporefleks, bradikardia, depresi SSP, letargi, koma, depresi)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0038",
  "slug": "risiko-ketidakstabilan-kadar-glukosa-darah",
  "kode": "D.0038",
  "nama": "Risiko Ketidakstabilan Kadar Glukosa Darah",
  "definisi": "Risiko ketidakstabilan kadar glukosa darah merupakan diagnosis keperawatan yang didefinisikan sebagai risiko terhadap variasi kadar glukosa",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [
    "glukosa",
    "gula darah",
    "diabetes"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kurang terpapar informasi tentang manajemen diabetes",
    "Ketidaktepatan pemantauan glukosa darah",
    "Kurang patuh pada rencana manajemen diabetes",
    "Manajemen medikasi tidak terkontrol",
    "Kehamilan",
    "Periode pertumbuhan cepat",
    "Stress berlebihan",
    "Penambahan berat badan",
    "Kurang dapat menerima diagnosis"
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
      "nama": "Manajemen Hiperglikemia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemungkinan penyebab hiperglikemia",
          "Identifikasi situasi yang menyebabkan kebutuhan insulin meningkat (mis: penyakit kambuhan)",
          "Monitor kadar glukosa darah, jika perlu",
          "Monitor tanda dan gejala hiperglikemia (mis: polyuria, polydipsia, polifagia, kelemahan, malaise, pandangan kabur, sakit kepala)",
          "Monitor intake dan output cairan",
          "Monitor keton urin, kadar Analisa gas darah, elektrolit, tekanan darah ortostatik dan frekuensi nadi",
          "Berikan asupan cairan oral",
          "Konsultasi dengan medis jika tanda dan gejala hiperglikemia tetap ada atau memburuk",
          "Fasilitasi ambulasi jika ada hipotensi ortostatik",
          "Anjurkan menghindari olahraga saat kadar glukosa darah lebih dari 250 mg/dL",
          "Anjurkan monitor kadar glukosa darah secara mandiri",
          "Anjurkan kepatuhan terhadap diet dan olahraga",
          "Ajarkan indikasi dan pentingnya pengujian keton urin, jika perlu",
          "Ajarkan pengelolaan diabetes (mis: penggunaan insulin, obat oral, monitor asupan cairan, penggantian karbohidrat, dan bantuan professional  kesehatan",
          "Kolaborasi pemberian insulin, jika perlu",
          "Kolaborasi pemberian cairan IV, jika perlu",
          "Kolaborasi pemberian kalium, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03115",
      "nama": "Manajemen Hipoglikemia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda dan gejala hipoglikemia",
          "Identifikasi kemungkinan penyebab hipoglikemia",
          "Berikan karbohidrat sederhana, jika perlu",
          "Berikan glucagon, jika perlu",
          "Berikan karbohidrat kompleks dan protein sesuai diet",
          "Pertahankan kepatenan jalan napas",
          "Pertahankan akses IV, jika perlu",
          "Hubungi layanan medis darurat, jika perlu",
          "Anjurkan membawa karbohidrat sederhana setiap saat",
          "Anjurkan memakai identitas darurat yang tepat",
          "Anjurkan monitor kadar glukosa darah",
          "Anjurkan berdiskusi dengan tim perawatan diabetes tentang penyesuaian program pengobatan",
          "Jelaskan interaksi antara diet, insulin/agen oral, dan olahraga",
          "Ajarkan pengelolaan hipoglikemia (mis: tanda dan gejala, faktor risiko, dan pengobatan hipoglikemia)",
          "Ajarkan perawatan mandiri untuk mencegah hipoglikemia (mis: mengurangi insulin/agen oral dan/atau meningkatkan asupan makanan untuk berolahraga)",
          "Kolaborasi pemberian dekstrose, jika perlu",
          "Kolaborasi pemberian glukagon, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0039",
  "slug": "risiko-syok",
  "kode": "D.0039",
  "nama": "Risiko Syok",
  "definisi": "Risiko syok merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami ketidakcukupan aliran darah ke jaringan tubuh",
  "kategori": "Nutrisi/Cairan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Hipoksemia",
    "Hipoksia",
    "Hipotensi",
    "Kekurangan volume cairan",
    "Sepsis",
    "Sindrom respons inflamasi sistemik (systemic inflammatory response syndrome/SIRS)"
  ],
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
      "nama": "Pencegahan Syok",
      "tindakan": {
        "terapeutik": [
          "Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuensi napas, TD, MAP)",
          "Monitor status oksigenasi (oksimetri nadi, AGD)",
          "Monitor status cairan (masukan dan haluaran, turgor kulit, CRT)",
          "Monitor tingkat kesadaran dan respon pupil",
          "Periksa Riwayat alergi",
          "Berikan oksigen untuk mempertahankan saturasi oksigen > 94%",
          "Persiapkan intubasi dan ventilasi mekanis, jika perlu",
          "Pasang jalur IV, jika perlu",
          "Pasang kateter urin untuk menilai produksi urin, jika perlu",
          "Lakukan skin test untuk mencegah reaksi alergi",
          "Jelaskan penyebab/faktor risiko syok",
          "Jelaskan tanda dan gejala awal syok",
          "Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok",
          "Anjurkan memperbanyak asupan cairan oral",
          "Anjurkan menghindari alergen",
          "Kolaborasi pemberian IV, jika perlu",
          "Kolaborasi pemberian transfusi darah, jika perlu",
          "Kolaborasi pemberian antiinflamasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03121",
      "nama": "Pemantauan Cairan",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan kekuatan nadi",
          "Monitor frekuensi napas",
          "Monitor tekanan darah",
          "Monitor berat badan",
          "Monitor waktu pengisian kapiler",
          "Monitor elastisitas atau turgor kulit",
          "Monitor jumlah, warna, dan berat jenis urin",
          "Monitor kadar albumin dan protein total",
          "Monitor hasil pemeriksaan serum (mis: osmolaritas serum, hematokrit, natrium, kalium, dan BUN)",
          "Monitor intake dan output cairan",
          "Identifikasi tanda-tanda hypovolemia (mis: frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit, turgor kulit menurun, membran mukosa kering, volume urin menurun, hematokrit meningkat, hasil, lemah, konsentrasi urin meningkat, berat badan menurun dalam waktu singkat)",
          "Identifikasi tanda-tanda hypervolemia (mis: dispnea, edema perifer, edema anasarca, JVP meningkat, CVP meningkat, refleks hepatojugular positif, berat badan menurun dalam waktu singkat)",
          "Identifikasi faktor risiko ketidakseimbagnan cairan (mis: prosedur pembedahan mayor, trauma/perdarahan, luka bakar, apheresis, obstruksi intestinal, peradangan pancreas, penyakit ginjal dan kelenjar, disfungsi intestinal)",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Dokumentasikan hasil pemantauan"
        ]
      }
    }
  ]
},
{
  "id": "0040",
  "slug": "gangguan-eliminasi-urin",
  "kode": "D.0040",
  "nama": "Gangguan Eliminasi Urin",
  "definisi": "Gangguan eliminasi urin merupakan diagnosis keperawatan yang didefinisikan sebagai disfungsi eliminasi urin.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "eliminasi",
    "BAK",
    "BAB"
  ],
  "tandaGejala": {
    "subjektif": [
      "Desakan berkemih (urgensi)",
      "Urin menetes (dribbling)",
      "Sering buang air kecil",
      "Nocturia (buang air kecil pada malam hari)",
      "Mengompol",
      "Enuresis (tidak dapat menahan kencing)"
    ],
    "objektif": [
      "Distensi kandung kemih",
      "Berkemih tidak tuntas (hesistancy)",
      "Volume residu urin meningkat"
    ]
  },
  "faktorTerkait": [
    "Penurunan kapasitas kandung kemih",
    "Iritasi kandung kemih",
    "Penurunan kemampuan menyadari tanda-tanda gangguan kandung kemih",
    "Efek tindakan medis dan diagnostik (mis. operasi ginjal, operasi saluran kemih, anestesi, dan obat-obatan)",
    "Kelemahan otot pelvis",
    "Ketidakmampuan mengakses toilet (mis. imobilisasi)",
    "Hambatan lingkungan",
    "Ketidakmampuan mengkomunikasikan kebutuhan eliminasi",
    "Outlet kandung kemih tidak lengkap (mis. anomali saluran kemih kongenital)",
    "Imaturitas (pada anak usia < 3 tahun)"
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
      "nama": "Dukungan Perawatan Diri: BAB/BAK",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan BAB/BAK sesuai usia",
          "Monitor integritas kulit pasien",
          "Buka pakaian yang diperlukan untuk memudahkan eliminasi",
          "Dukung penggunaan toilet/commode/pispot/urinal secara konsisten",
          "Jaga privasi selama eliminasi",
          "Ganti pakaian pasien setelah eliminasi, jika perlu",
          "Bersihkan alat bantu BAK/BAB setelah digunakan",
          "Latih BAK/BAB sesuai jadwal, jika perlu",
          "Sediakan alat bantu (mis. kateter eksternal, urinal), jika perlu",
          "Anjurkan BAK/BAB secara rutin",
          "Anjurkan ke kamar mandi/toilet, jika perlu"
        ]
      }
    },
    {
      "kode": "I.04152",
      "nama": "Manajemen Eliminasi Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda dan gejala retensi atau inkontinensia urin",
          "Identifikasi faktor yang menyebabkan retensi atau inkontinensia urin",
          "Monitor eliminasi urin (mis. frekuensi, konsistensi, aroma, volume, dan warna)",
          "Catat waktu-waktu dan haluaran berkemih",
          "Batasi asupan cairan, jika perlu",
          "Ambil sampel urin tengah (midstream) atau kultur",
          "Ajarkan tanda dan gejala infeksi saluran berkemih",
          "Ajarkan mengukur asupan cairan dan haluaran urin",
          "Ajarkan mengambil spesimen urin midstream",
          "Ajarkan mengenali tanda berkemih dan waktu yang tepat untuk berkemih",
          "Ajarkan terapi modalitas penguatan otot-otot panggul/berkemihan",
          "Anjurkan minum yang cukup, jika tidak ada kontraindikasi",
          "Anjurkan mengurangi minum menjelang tidur",
          "Kolaborasi pemberian obat supositoria uretra, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01018",
      "nama": "Pengontrolan Infeksi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pasien-pasien yang mengalami penyakit infeksi menular",
          "Terapkan kewaspadaan universal (mis: cuci tangan aseptic, gunakan alat pelindung diri seperti masker, sarung tangan, pelindung wajah, pelindung mata, apron, sepatu bot sesuai model transmisi mikroorganisme)",
          "Tempatkan pada ruang isolasi bertekanan positif untuk pasien yang mengalami penurunan imunitas",
          "Tempatkan pada ruang isolasi bertekanan negatif untuk pasien dengan resiko penyebaran infeksi via droplet atau udara",
          "Sterilisasi dan desinfeksi alat-alat, furniture, lantai, sesuai kebutuhan",
          "Gunakan hepafilter pada area khusus (mis: kamar operasi)",
          "Berikan tanda khusus untuk pasien-pasien dengan penyakit menular",
          "Ajarkan cara mencuci tangan dengan benar",
          "Ajarkan etika batuk dan/atau bersin"
        ]
      }
    }
  ]
},
{
  "id": "0041",
  "slug": "inkontinensia-fekal",
  "kode": "D.0041",
  "nama": "Inkontinensia Fekal",
  "definisi": "Inkontinensia fekal merupakan diagnosis keperawatan yang didefinisikan sebagai perubahan kebiasaan buang air besar dari pola normal yang...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak mampu mengontrol pengeluaran feses",
      "Tidak mampu menunda defekasi"
    ],
    "objektif": [
      "Feses keluar sedikit-sedikit dan sering"
    ]
  },
  "faktorTerkait": [
    "Kerusakan susunan saraf motorik bawah",
    "Penurunan tonus otot",
    "Gangguan kognitif",
    "Penyalahgunaan laksatif",
    "Kehilangan fungsi pengendalian sfingter rectum",
    "Pascaoperasi pullthrough dan penutupan kolostomi",
    "Ketidakmampuan mencapai kamar kecil",
    "Diare kronis",
    "Stres berlebihan"
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
      "nama": "Latihan eliminasi fekal",
      "tindakan": {
        "terapeutik": [
          "Monitor peristaltik usus secara teratur",
          "Anjurkan waktu yang konsisten untuk buang air besar",
          "Berikan privasi, kenyamanan, dan posisi yang meningkatkan proses defekasi",
          "Gunakan enema rendah, jika perlu",
          "Anjurkan dilatasi rektal digital, jika perlu",
          "Ubah program Latihan eliminasi fekal, jika perlu",
          "Anjurkan mengkonsumsi makanan tertentu, sesuai program, atau hasil konsultasi",
          "Anjurkan asupan cairan yang adekuat sesuai kebutuhan",
          "Anjurkan olahraga sesuai toleransi",
          "Kolaborasi penggunaan supositoria, jika perlu"
        ]
      }
    },
    {
      "kode": "I.04162",
      "nama": "Perawatan Inkontinensia Fekal",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia fekal baik fisik maupun psikologis (mis: gangguan saraf motoric bawah, penurunan tonus otot, gangguan sfingter rectum, diare kronis, gangguan kognitif, stress berlebihan)",
          "Identifikasi perubahan frekuensi defekasi dan konsistensi feses",
          "Monitor kondisi kulit perianal",
          "Monitor keadekuatan evakuasi feses",
          "Monitor diet dan kebutuhan cairan",
          "Monitor efek samping pemberian obat",
          "Bersihkan daerah perianal dengan sabun dan air",
          "Jaga kebersihan tempat tidur dan pakaian",
          "Laksanakan program Latihan usus (bowel training), jika perlu",
          "Jadwalkan BAB di tempat tidur, jika perlu",
          "Berikan celana pelindung/pembalut/popok, sesuai kebutuhan",
          "Hindari makanan yang menyebabkan diare",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia fekal",
          "Anjurkan mencatat karakteristik feses",
          "Kolaborasi pemberian obat diare (mis: Ioperamide, atropine)"
        ]
      }
    }
  ]
},
{
  "id": "0042",
  "slug": "inkontinensia-urin-berlanjut",
  "kode": "D.0042",
  "nama": "Inkontinensia Urin Berlanjut",
  "definisi": "Inkontinensia urin berlanjut merupakan diagnosis keperawatan yang didefinisikan sebagai pengeluaran urin tidak terkendali",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Keluarnya urin konstan tanpa distensi",
      "Nokturia (kencing malam hari) lebih dari 2 kali sepanjang tidur"
    ],
    "objektif": []
  },
  "faktorTerkait": [
    "Neuropati arkus refleks",
    "Disfungsi neurologis",
    "Kerusakan refleks kontraksi detrusor",
    "Trauma",
    "Kerusakan medulla spinalis",
    "Kelainan anatomis (mis: fistula)"
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
      "nama": "Kateterisasi Urin",
      "tindakan": {
        "terapeutik": [
          "Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)",
          "Siapkan peralatan, bahan-bahan, dan ruangan Tindakan",
          "Siapkan pasien: bebaskan pakaian bawah dan posisikan dorsal rekumben (untuk Wanita) dan supine (untuk laki-laki)",
          "Pasang sarung tangan",
          "Bersihkan daerah perineal atau preposium dengan cairan NaCl atau aquades",
          "Lakukan insersi kateter urin dengan menerapkan prinsip aseptic",
          "Sambungkan kateter urin dengan urin bag",
          "Isi balon dengan NaCl 0,9% sesuai anjuran pabrik",
          "Fiksasi selang kateter diatas simpisis atau di paha",
          "Pastikan urin bag ditempatkan lebih rendah dari kandung kemih",
          "Berikan label waktu pemasangan",
          "Jelaskan tujuan dan prosedur pemasangan kateter urin",
          "Anjurkan menarik napas saat insersi selang kateter"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0043",
  "slug": "inkontinensia-urin-berlebih",
  "kode": "D.0043",
  "nama": "Inkontinensia Urin Berlebih",
  "definisi": "Inkontinensia urin berlebih merupakan diagnosis keperawatan yang didefinisikan sebagai kehilangan urin yang tidak terkendali akibat ...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Residu volume urin setelah berkemih atau keluhan kebocoran sedikit urin",
      "Nokturia"
    ],
    "objektif": [
      "Kandung kemih distensi (bukan berhubungan dengan penyebab reversible akut) atau kandung kemih distensi dengan sering, sedikit berkemih, atau dribbling."
    ]
  },
  "faktorTerkait": [
    "Blok sfingter",
    "Kerusakan atau ketidakadekuatan jalur aferen",
    "Obstruksi jalan keluar urin (mis: impaksi fekal, efek agen farmakologis)",
    "Ketidakadekuatan detrusor (mis: pada konsisi stress atau tidak nyaman, deconditioned voiding)"
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
      "nama": "Kateterisasi Urin",
      "tindakan": {
        "terapeutik": [
          "Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)",
          "Siapkan peralatan, bahan-bahan, dan ruangan Tindakan",
          "Siapkan pasien: bebaskan pakaian bawah dan posisikan dorsal rekumben (untuk Wanita) dan supine (untuk laki-laki)",
          "Pasang sarung tangan",
          "Bersihkan daerah perineal atau preposium dengan cairan NaCl atau aquades",
          "Lakukan insersi kateter urin dengan menerapkan prinsip aseptic",
          "Sambungkan kateter urin dengan urin bag",
          "Isi balon dengan NaCl 0,9% sesuai anjuran pabrik",
          "Fiksasi selang kateter diatas simpisis atau di paha",
          "Pastikan urin bag ditempatkan lebih rendah dari kandung kemih",
          "Berikan label waktu pemasangan",
          "Jelaskan tujuan dan prosedur pemasangan kateter urin",
          "Anjurkan menarik napas saat insersi selang kateter"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0044",
  "slug": "inkontinensia-urin-fungsional",
  "kode": "D.0044",
  "nama": "Inkontinensia Urin Fungsional",
  "definisi": "Inkontinensia urin fungsional merupakan diagnosis keperawatan yang didefinisikan sebagai pengeluaran urin tidak terkendali karena...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengompol sebelum mencapai atau selama usaha mencapai toilet"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Ketidakmampuan atau penurunan mengenali tanda-tanda berkemih",
    "Penurunan tonus kandung kemih",
    "Hambatan mobilisasi",
    "Faktor psikologis, mis: penurunan perhatian pada tanda-tanda keinginan berkemih (depresi, bingung, delirium)",
    "Hambatan lingkungan (toilet jauh, tempat tidur terlalu tinggi, lingkungan baru)",
    "Kehilangan sensorik dan motorik (pada geriatri)",
    "Gangguan penglihatan"
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
      "nama": "Latihan Berkemih",
      "tindakan": {
        "terapeutik": [
          "Periksa kembali penyebab gangguan berkemih (mis: kognitif, kehilangan ekstremitas/fungsi ekstremitas, kehilangan penglihatan)",
          "Monitor pola dan kemampuan berkemih",
          "Hindari penggunaan kateter indwelling",
          "Siapkan area toilet yang aman",
          "Sediakan peralatan yang dibutuhkan dekat dan mudah dijangkau (mis: kursi komode, pispot, urinal)",
          "Jelaskan arah-arah menuju kamar mandi/toilet pada pasien dengan gangguan penglihatan",
          "Anjurkan intake cairan adekuat untuk mendukung output urin",
          "Anjurkan aliminasi normal dengan beraktivitas dan olahraga sesuai kemampuan"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0045",
  "slug": "inkontinensia-urin-refleks",
  "kode": "D.0045",
  "nama": "Inkontinensia Urin Refleks",
  "definisi": "Inkontinensia urin refleks merupakan diagnosis keperawatan yang didefinisikan sebagai pengeluaran urin yang tidak terkendali pada saat ...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak mengalami sensasi berkemih",
      "Dribbling",
      "Sering buang air kecil",
      "Hesitancy",
      "Nokturia",
      "Enuresis"
    ],
    "objektif": [
      "Volume residu urin meningkat"
    ]
  },
  "faktorTerkait": [
    "Kerusakan konduksi impuls di atas arkus refleks",
    "Kerusakan jaringan (mis: terapi radiasi)"
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
      "nama": "Kateterisasi Urin",
      "tindakan": {
        "terapeutik": [
          "Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)",
          "Siapkan peralatan, bahan-bahan, dan ruangan Tindakan",
          "Siapkan pasien: bebaskan pakaian bawah dan posisikan dorsal rekumben (untuk Wanita) dan supine (untuk laki-laki)",
          "Pasang sarung tangan",
          "Bersihkan daerah perineal atau preposium dengan cairan NaCl atau aquades",
          "Lakukan insersi  kateter urin dengan menerapkan prinsip aseptic",
          "Sambungkan kateter urin dengan urin bag",
          "Isi balon dengan NaCl 0,9% sesuai anjuran pabrik",
          "Fiksasi selang kateter diatas simpisis atau di paha",
          "Pastikan urin bag ditempatkan lebih rendah dari kandung kemih",
          "Berikan label waktu pemasangan",
          "Jelaskan tujuan dan prosedur pemasangan kateter urin",
          "Anjurkan menarik napas saat insersi selang kateter"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0046",
  "slug": "inkontinensia-urin-stres",
  "kode": "D.0046",
  "nama": "Inkontinensia Urin Stres",
  "definisi": "Inkontinensia urin stres merupakan diagnosis keperawatan yang didefinisikan sebagai kebocoran urin mendadak dan tidak dapat...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh keluar urin < 50 ml saat tekanan abdominal meningkat (mis: saat berdiri, bersin, tertawa, berlari, atau mengangkat benda berat)"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Kelemahan intrinsik sfingter uretra",
    "Perubahan degenerasi/non degenerasi otot pelvis",
    "Kekurangan estrogen",
    "Peningkatan tekanan intraabdomen",
    "Kelemahan otot pelvis"
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
      "nama": "Latihan Otot Panggul",
      "tindakan": {
        "terapeutik": [
          "Monitor pengeluaran urin",
          "Berikan reinforcement positif selama melakukan Latihan dengan benar",
          "Anjurkan berbaring",
          "Anjurkan tidak mengkontraksikan perut, kaki, dan bokong saat melakukan Latihan otot panggul",
          "Anjurkan menambah durasi kontraksi-relaksasi 10 detik dengan siklus 10-20 kali, dilakukan 3-4 kali sehari",
          "Ajarkan mengkontraksikan sekitar otot uretra dan anus seperti menahan BAB/BAK selama 5 detik kemudian dikendurkan dan direlaksasikan dengan siklus 10 kali",
          "Ajarkan mengevaluasi Latihan yang dilakukan dengan cara menghentikan urin sesaat saat BAK, seminggu sekali.",
          "Anjurkan Latihan selama 6-12 minggu",
          "Kolaborasi rehabilitasi medik untuk mengukur kekuatan kontraksi otot dasar panggul, jika perlu"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0047",
  "slug": "inkontinensia-urin-urgensi",
  "kode": "D.0047",
  "nama": "Inkontinensia Urin Urgensi",
  "definisi": "Inkontinensia urin urgensi merupakan diagnosis keperawatan yang didefinisikan sebagai keluarnya urin tidak terkendali sesaat setelah...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Keinginan berkemih yang kuat disertai dengan inkontinensia"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Iritasi reseptor kontraksi kandung kemih",
    "Penurunan kapasitas kandung kemih",
    "Hiperaktivitas detrusor dengan kerusakan kontraktilitas kandung kemih",
    "Efek agen farmakologis (mis: diuretik)"
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
      "nama": "Latihan Berkemih",
      "tindakan": {
        "terapeutik": [
          "Periksa kembali penyebab gangguan berkemih (mis: kognitif, kehilangan ekstremitas/fungsi ekstremitas, kehilangan penglihatan)",
          "Monitor pola dan kemampuan berkemih",
          "Hindari penggunaan kateter indwelling",
          "Siapkan area toilet yang aman",
          "Sediakan peralatan yang dibutuhkan dekat dan mudah dijangkau (mis: kursi komode, pispot, urinal)",
          "Jelaskan arah-arah menuju kamar mandi/toilet pada pasien dengan gangguan penglihatan",
          "Anjurkan intake cairan adekuat untuk mendukung output urin",
          "Anjurkan aliminasi normal dengan beraktivitas dan olahraga sesuai kemampuan"
        ]
      }
    },
    {
      "kode": "I.04163",
      "nama": "Perawatan Inkontinensia Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)",
          "Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya",
          "Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih",
          "Bersihkan daerah genital dan kulit sekitar secara rutin",
          "Berikan pujian atas keberhasilan mencegah inkontinensia",
          "Buat jadwal konsumsi obat-obat diuretik",
          "Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur",
          "Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin",
          "Jelaskan program penanganan inkontinensia urin",
          "Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih",
          "Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur",
          "Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin",
          "Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi",
          "Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat",
          "Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi",
          "Rujuk ke ahli inkontinensia, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0048",
  "slug": "kesiapan-peningkatan-eliminasi-urin",
  "kode": "D.0048",
  "nama": "Kesiapan Peningkatan Eliminasi Urin",
  "definisi": "Kesiapan peningkatan eliminasi urin merupakan diagnosis keperawatan yang didefinisikan sebagai pola fungsi sistem perkemihan yang...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "eliminasi",
    "BAK",
    "BAB"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Jumlah urin normal",
      "Karakteristik urin normal"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Manajemen Eliminasi Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda dan gejala retensi atau inkontinensia urin",
          "Identifikasi faktor yang menyebabkan retensi atau inkontinensia urin",
          "Monitor eliminasi urin (mis. frekuensi, konsistensi, aroma, volume, dan warna)",
          "Catat waktu-waktu dan haluaran berkemih",
          "Batasi asupan cairan, jika perlu",
          "Ambil sampel urin tengah (midstream) atau kultur",
          "Ajarkan tanda dan gejala infeksi saluran berkemih",
          "Ajarkan mengukur asupan cairan dan haluaran urin",
          "Ajarkan mengambil spesimen urin midstream",
          "Ajarkan mengenali tanda berkemih dan waktu yang tepat untuk berkemih",
          "Ajarkan terapi modalitas penguatan otot-otot panggul/berkemihan",
          "Anjurkan minum yang cukup, jika tidak ada kontraindikasi",
          "Anjurkan mengurangi minum menjelang tidur",
          "Kolaborasi pemberian obat supositoria uretra, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0049",
  "slug": "konstipasi",
  "kode": "D.0049",
  "nama": "Konstipasi",
  "definisi": "Konstipasi merupakan diagnosis keperawatan yang didefinisikan sebagai penurunan defekasi normal yang disertai pengeluaran feses sulit dan...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "konstipasi",
    "sembelit",
    "sulit BAB"
  ],
  "tandaGejala": {
    "subjektif": [
      "Defekasi kurang dari 2 kali seminggu",
      "Pengeluaran feses lama dan sulit"
    ],
    "objektif": [
      "Feses keras",
      "Peristaltik usus menurun"
    ]
  },
  "faktorTerkait": [
    "Penurunan motilitas gastrointestinal",
    "Ketidakadekuatan pertumbuhan gigi",
    "Ketidakcukupan diet",
    "Ketidakcukupan asupan serat",
    "Ketidakcukupan asupan cairan",
    "Aganglionik (mis: penyakit hircsprung)",
    "Kelemahan otot abdomen",
    "Konfusi",
    "Depresi",
    "Gangguan emosional",
    "Perubahan kebiasaan makan (mis: jenis makanan, jadwal makan)",
    "Ketidakadekuatan toileting",
    "Aktivitas fisik harian kurang dari yang dianjurkan",
    "Penyalahgunaan laksatif",
    "Efek agen farmakologis",
    "Ketidakteraturan kebiasaan defekasi",
    "Kebiasaan menahan dorongan defekasi",
    "Perubahan lingkungan"
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
      "nama": "Manajemen Eliminasi Fekal",
      "tindakan": {
        "terapeutik": [
          "Identifikasi masalah usus dan penggunaan  obat pencahar",
          "Identifikasi pengobatan yang berefek pada kondisi gastrointestinal",
          "Monitor buang air besar (mis: warna, frekuensi, konsistensi, volume)",
          "Monitor tanda dan gejala diare, konstipasi, atau impaksi",
          "Berikan air hangat setelah makan",
          "Jadwalkan waktu defekasi Bersama pasien",
          "Sediakan makanan tinggi serat",
          "Jelaskan jenis makanan yang membantu meningkatkan keteraturan peristaltik usus",
          "Anjurkan mencatat warna, frekuensi, konsistensi, volume feses",
          "Anjurkan meningkatkan aktivitas fisik, sesuai toleransi",
          "Anjurkan pengurangan asupan makanan yang meningkatkan pembentukan gas",
          "Anjurkan mengkonsumsi makanan yang mengandung tinggi serat",
          "Anjurkan meningkatkan asupan cairan, jika tidak ada kontraindikasi",
          "Kolaborasi pemberian obat supositoria anal, jika perlu"
        ]
      }
    },
    {
      "kode": "I.04155",
      "nama": "Manajemen Konstipasi",
      "tindakan": {
        "terapeutik": [
          "Periksa tanda dan gejala konstipasi",
          "Periksa pergerakan usus, karakteristik feses (konsistensi, bentuk, volume,  dan warna)",
          "Identifikasi faktor risiko konstipasi (mis: obat-obatan, tirah baring, dan diet rendah serat",
          "Monitor tanda dan gejala rupture usus dan/atau peritonitis",
          "Anjurkan diet tinggi serat",
          "Lakukan masase abdomen, jika perlu",
          "Lakukan evaluasi feses secara manual, jika perlu",
          "Berikan enema atau irigasi, jika perlu",
          "Jelaskan etiologi masalah dan alasan Tindakan",
          "Anjurkan peningkatan asupan cairan, jika tidak ada kontraindikasi",
          "Latih buang air besar secara teratur",
          "Ajarkan cara mengatasi konstipasi/impaksi",
          "Konsultasi dengan tim medis tentang penurunan/peningkatan frekuensi suara usus",
          "Kolaborasi penggunaan obat pencahar, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0050",
  "slug": "retensi-urin",
  "kode": "D.0050",
  "nama": "Retensi Urin",
  "definisi": "Retensi urin merupakan diagnosis keperawatan yang didefinisikan sebagai pengosongan kandung kemih yang tidak lengkap.",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "retensi",
    "tahan",
    "tidak bisa BAK"
  ],
  "tandaGejala": {
    "subjektif": [
      "Sensasi penuh pada kandung kemih"
    ],
    "objektif": [
      "Disuria/anuria",
      "Distensi kandung kemih"
    ]
  },
  "faktorTerkait": [
    "Peningkatan tekanan uretra",
    "Kerusakan arkus refleks",
    "Blok sfingter",
    "Disfungsi neurologis (mis: trauma, penyakit saraf)",
    "Efek agen farmakologis (mis: atropine, belladonna, psikotropik, antihistamin, opiate)"
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
      "nama": "Kateterisasi Urin",
      "tindakan": {
        "terapeutik": [
          "Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)",
          "Siapkan peralatan, bahan-bahan, dan ruangan Tindakan",
          "Siapkan pasien: bebaskan pakaian bawah dan posisikan dorsal rekumben (untuk Wanita) dan supine (untuk laki-laki)",
          "Pasang sarung tangan",
          "Bersihkan daerah perineal atau preposium dengan cairan NaCl atau aquades",
          "Lakukan insersi  kateter urin dengan menerapkan prinsip aseptic",
          "Sambungkan kateter urin dengan urin bag",
          "Isi balon dengan NaCl 0,9% sesuai anjuran pabrik",
          "Fiksasi selang kateter diatas simpisis atau di paha",
          "Pastikan urin bag ditempatkan lebih rendah dari kandung kemih",
          "Berikan label waktu pemasangan",
          "Jelaskan tujuan dan prosedur pemasangan kateter urin",
          "Anjurkan menarik napas saat insersi selang kateter"
        ]
      }
    }
  ]
},
{
  "id": "0051",
  "slug": "risiko-inkontinensia-urin-urgensi",
  "kode": "D.0051",
  "nama": "Risiko Inkontinensia Urin Urgensi",
  "definisi": "Risiko inkontinensia urin urgensi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami pengeluaran urin yang...",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "inkontinensia",
    "beser",
    "tidak tahan"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Efek samping obat, kopi, dan alkohol",
    "Hiperrefleks destrussor",
    "Gangguan sistem saraf pusat",
    "Kerusakan kontraksi kandung kemih: relaksasi sfingter tidak terkendali",
    "Ketidakefektifan kebiasaan berkemih",
    "Kapasitas kandung kemih kecil"
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
      "nama": "Manajemen Eliminasi Urin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tanda dan gejala retensi atau inkontinensia urin",
          "Identifikasi faktor yang menyebabkan retensi atau inkontinensia urin",
          "Monitor eliminasi urin (mis. frekuensi, konsistensi, aroma, volume, dan warna)",
          "Catat waktu-waktu dan haluaran berkemih",
          "Batasi asupan cairan, jika perlu",
          "Ambil sampel urin tengah (midstream) atau kultur",
          "Ajarkan tanda dan gejala infeksi saluran berkemih",
          "Ajarkan mengukur asupan cairan dan haluaran urin",
          "Ajarkan mengambil spesimen urin midstream",
          "Ajarkan mengenali tanda berkemih dan waktu yang tepat untuk berkemih",
          "Ajarkan terapi modalitas penguatan otot-otot panggul/berkemihan",
          "Anjurkan minum yang cukup, jika tidak ada kontraindikasi",
          "Anjurkan mengurangi minum menjelang tidur",
          "Kolaborasi pemberian obat supositoria uretra, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0052",
  "slug": "risiko-konstipasi",
  "kode": "D.0052",
  "nama": "Risiko Konstipasi",
  "definisi": "Risiko konstipasi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan frekuensi normal defekasi disertai",
  "kategori": "Eliminasi",
  "tipe": "Aktual",
  "keluhan": [
    "konstipasi",
    "sembelit",
    "sulit BAB"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Penurunan motilitas gastrointestinal",
    "Ketidakadekuatan pertumbuhan gigi",
    "Ketidakcukupan diet",
    "Ketidakcukupan asupan serat",
    "Ketidakcukupan asupan cairan",
    "Aganglionik (mis: penyakit hircsprung)",
    "Kelemahan otot abdomen",
    "Konfusi",
    "Depresi",
    "Gangguan emosional",
    "Perubahan kebiasaan makan (mis: jenis makanan, jadwal makan)",
    "Ketidakadekuatan toileting",
    "Aktivitas fisik harian kurang dari yang dianjurkan",
    "Penyalahgunaan laksatif",
    "Efek agen farmakologis",
    "Ketidakteraturan kebiasaan defekasi",
    "Kebiasaan menahan dorongan defekasi",
    "Perubahan lingkungan"
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
      "nama": "Pencegahan Konstipasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi faktor risiko konstipasi (mis: asupan serat tidak adekuat, asupan cairan tidak adekuat, aganglionik, kelemahan otot abdomen, aktivitas fisik kurang).",
          "Monitor tanda dan gejala konstipasi (mis: defekasi kurang 2 kali seminggu, defekasi lama/sulit, feses keras, peristaltik menurun)",
          "Identifikasi status kognitif untuk mengkomunikasikan kebutuhan",
          "Identifikasi penggunaan obat-obatan yang menyebabkan konstipasi",
          "Batasi minuman yang mengandung kafein dan alkohol",
          "Jadwalkan rutinitas BAK",
          "Lakukan masase abdomen",
          "Berikan terapi akupresur",
          "Jelaskan penyebab dan faktor risiko konstipasi",
          "Anjurkan minum air putih sesuai kebutuhan (1500 – 2000 ml/hari)",
          "Anjurkan mengkonsumsi makanan berserat (25 – 30 gram/hari)",
          "Anjurkan meningkatkan aktivitas fisik sesuai kebutuhan",
          "Anjurkan berjalan 15 – 20 menit 1 – 2 kali/hari",
          "Anjurkan berjongkok untuk memfasilitasi proses BAB",
          "Kolaborasi dengan ahli gizi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0053",
  "slug": "disorganisasi-perilaku-bayi",
  "kode": "D.0053",
  "nama": "Disorganisasi Perilaku Bayi",
  "definisi": "Disorganisasi perilaku bayi merupakan diagnosis keperawatan yang didefinisikan sebagai disintegrasi respon fisiologis dan neurobehaviour...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "bayi",
    "disorganisasi",
    "perilaku"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Hiperekstensi ekstremitas",
      "Jari-jari meregang atau tangan menggenggam",
      "Respon abnormal terhadap stimulus sensorik",
      "Gerakan tidak terkoordinasi"
    ]
  },
  "faktorTerkait": [
    "Keterbatasan lingkungan fisik",
    "Ketidaktepatan sensori",
    "Kelebihan stimulasi sensorik",
    "Imaturitas sistem sensoris",
    "Prematuritas",
    "Prosedur invasif",
    "Malnutrisi",
    "Gangguan motorik",
    "Kelainan kongenital",
    "Kelainan genetik",
    "Terpatar teratogenik"
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
      "nama": "Perawatan Bayi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda-tanda vital bayi (terutama suhu 36°C – 37°C)",
          "Mandikan bayi dengan suhu ruangan 21 – 24°C",
          "Mandikan  bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari",
          "Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)",
          "Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang",
          "Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas",
          "Lakukan pemijatan bayi",
          "Ganti popok bayi jika basah",
          "Kenakan pakaian bayi dari bahan katun",
          "Anjurkan ibu menyusui sesuai kebutuhan bayi",
          "Ajarkan ibu cara merawat bayi di rumah",
          "Ajarkan cara pemberian makanan pendamping ASI pada bayi > 6 bulan"
        ]
      }
    }
  ]
},
{
  "id": "0054",
  "slug": "gangguan-mobilitas-fisik",
  "kode": "D.0054",
  "nama": "Gangguan Mobilitas Fisik",
  "definisi": "Gangguan mobilitas fisik merupakan diagnosis keperawatan yang didefinisikan sebagai keterbatasan dalam gerakan fisik dari satu atau...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "mobilitas",
    "gerak",
    "jalan",
    "lumpuh"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh sulit menggerakkan ekstremitas"
    ],
    "objektif": [
      "Kekuatan otot menurun",
      "Rentang gerak (ROM) menurun"
    ]
  },
  "faktorTerkait": [
    "Kerusakan integritas struktur tulang",
    "Perubahan metabolisme",
    "Ketidakbugaran fisik",
    "Penurunan kendali otot",
    "Penurunan massa otot",
    "Penurunan kekuatan otot",
    "Keterlambatan perkembangan",
    "Kekakuan sendi",
    "Kontraktur",
    "Malnutrisi",
    "Gangguan musculoskeletal",
    "Gangguan neuromuscular",
    "Indeks masa tubuh diatas persentil ke-75 sesuai usia",
    "Efek agen farmakologis",
    "Program pembatasan gerak",
    "Nyeri",
    "Kurang terpapar informasi tentang aktivitas fisik",
    "Kecemasan",
    "Gangguan kognitif",
    "Keengganan melakukan pergerakan",
    "Gangguan sensori-persepsi"
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
      "nama": "Dukungan Ambulasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi adanya nyeri atau keluhan fisik lainnya",
          "Identifikasi toleransi fisik melakukan ambulasi",
          "Monitor frekuensi jantung dan tekanan darah sebelum memulai ambulasi",
          "Monitor kondisi umum selama melakukan ambulasi",
          "Fasilitasi aktivitas ambulasi dengan alat bantu (mis: tongkat, kruk)",
          "Fasilitasi melakukan mobilisasi  fisik, jika perlu",
          "Libatkan keluarga untuk membantu pasien dalam meningkatkan ambulasi",
          "Jelaskan tujuan dan prosedur ambulasi",
          "Anjurkan melakukan ambulasi dini",
          "Ajarkan ambulasi sederhana yang harus dilakukan (mis: berjalan dari tempat tidur ke kursi roda, berjalan dari tempat tidur ke kamar mandi, berjalan sesuai toleransi)"
        ]
      }
    },
    {
      "kode": "I.05173",
      "nama": "Dukungan Mobilisasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi adanya nyeri atau keluhan fisik lainnya",
          "Identifikasi toleransi fisik melakukan pergerakan",
          "Monitor frekuensi jantung dan tekanan darah sebelum memulai mobilisasi",
          "Monitor kondisi umum selama melakukan mobilisasi",
          "Fasilitasi aktivitas mobilisasi dengan alat bantu (mis: pagar tempat tidur)",
          "Fasilitasi melakukan pergerakan, jika perlu",
          "Libatkan keluarga untuk membantu pasien dalam meningkatkan pergerakan",
          "Jelaskan tujuan dan prosedur mobilisasi",
          "Anjurkan melakukan mobilisasi dini",
          "Ajarkan mobilisasi sederhana yang harus dilakukan (mis: duduk di tempat tidur, duduk di sisi tempat tidur, pindah dari tempat tidur ke kursi)"
        ]
      }
    }
  ]
},
{
  "id": "0055",
  "slug": "gangguan-pola-tidur",
  "kode": "D.0055",
  "nama": "Gangguan Pola Tidur",
  "definisi": "Gangguan pola tidur merupakan diagnosis keperawatan yang didefinisikan sebagai gangguan kualitas dan kuantitas waktu tidur akibat...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "tidur",
    "insomnia",
    "terjaga"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh sulit tidur",
      "Mengeluh sering terjaga",
      "Mengeluh tidak puas tidur",
      "Mengeluh pola tidur berubah",
      "Mengeluh istirahat tidak cukup"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Hambatan lingkungan (mis: kelembaban lingkungan sekitar, suhu lingkungan, pencahayaan, kebisingan, bau tidak sedap, jadwal pemantauan/pemeriksaan/Tindakan)",
    "Kurang control tidur",
    "Kurang privasi",
    "Restraint fisik",
    "Ketiadaan teman tidur",
    "Tidak familiar dengan peralatan tidur"
  ],
  "slki": {
    "kode": "",
    "nama": "",
    "kriteria": []
  },
  "siki": [
    {
      "kode": "I.05174",
      "nama": "Dukungan Tidur",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pola aktivitas dan tidur",
          "Identifikasi faktor pengganggu tidur (fisik dan/atau psikologis)",
          "Identifikasi makanan dan minuman yang mengganggu tidur (mis: kopi, teh, alcohol, makan mendekati waktu tidur, minum banyak air sebelum tidur)",
          "Identifikasi obat tidur yang dikonsumsi",
          "Modifikasi lingkungan (mis: pencahayaan, kebisingan, suhu, matras, dan tempat tidur)",
          "Batasi waktu tidur siang, jika perlu",
          "Fasilitasi menghilangkan stress sebelum tidur",
          "Tetapkan jadwal tidur rutin",
          "Lakukan prosedur untuk meningkatkan kenyamanan (mis: pijat, pengaturan posisi, terapi akupresur)",
          "Sesuaikan jadwal pemberian obat dan/atau Tindakan untuk menunjang siklus tidur-terjaga",
          "Jelaskan pentingnya tidur cukup selama sakit",
          "Anjurkan menepati kebiasaan waktu tidur",
          "Anjurkan menghindari makanan/minuman yang mengganggu tidur",
          "Anjurkan penggunaan obat tidur yang tidak mengandung supresor terhadap tidur REM",
          "Ajarkan faktor-faktor yang berkontribusi terhadap gangguan pola tidur (mis: psikologis, gaya hidup, sering berubah shift bekerja)",
          "Ajarkan relaksasi otot autogenic atau cara nonfarmakologi lainnya"
        ]
      }
    },
    {
      "kode": "I.12362",
      "nama": "Edukasi Aktivitas dan Istirahat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media pengaturan aktivitas dan istirahat",
          "Jadwalkan pemberian Pendidikan  Kesehatan sesuai kesepakatan",
          "Berikan kesempatan kepada pasien dan keluarga untuk bertanya",
          "Jelaskan pentingnya melakukan aktivitas fisik/olahraga secara rutin",
          "Anjurkan terlibat dalam aktivitas kelompok, aktivitas bermain atau aktivitas lainnya",
          "Anjurkan menyusun jadwal aktivitas dan istirahat",
          "Ajarkan cara mengidentifikasi kebutuhan istirahat (mis: kelelahan, sesak napas saat aktivitas)",
          "Ajarkan cara mengidentifikasi target dan jenis aktivitas sesuai kemampuan"
        ]
      }
    }
  ]
},
{
  "id": "0056",
  "slug": "intoleransi-aktivitas",
  "kode": "D.0056",
  "nama": "Intoleransi Aktivitas",
  "definisi": "Intoleransi aktivitas merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakcukupan energi untuk melakukan aktivitas sehari-hari.",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "aktivitas",
    "aktif",
    "gerak"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh lelah"
    ],
    "objektif": [
      "Frekuensi jantung meningkat > 20% dari kondisi istirahat"
    ]
  },
  "faktorTerkait": [
    "Ketidakseimbangan antara suplai dan kebutuhan oksigen",
    "Tirah baring",
    "Kelemahan",
    "Imobilitas",
    "Gaya hidup monoton"
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
      "nama": "Manajemen Energi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan",
          "Monitor kelelahan fisik dan emosional",
          "Monitor pola dan jam tidur",
          "Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas",
          "Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)",
          "Lakukan latihan rentang gerak pasif dan/atau aktif",
          "Berikan aktivitas distraksi yang menenangkan",
          "Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan",
          "Anjurkan tirah baring",
          "Anjurkan melakukan aktivitas secara bertahap",
          "Anjurkan menghubungi perawat jika tanda dan gejala kelelahan tidak berkurang",
          "Ajarkan strategi koping untuk mengurangi kelelahan",
          "Kolaborasi dengan ahli gizi tentang cara meningkatkan asupan makanan"
        ]
      }
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Aktivitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi defisit tingkat aktivitas",
          "Identifikasi kemampuan berpartisipasi dalam aktivitas tertentu",
          "Identifikasi sumber daya untuk aktivitas yang diinginkan",
          "Identifikasi strategi meningkatkan partisipasi dalam aktivitas",
          "Identifikasi makna aktivitas rutin (mis: bekerja) dan waktu luang",
          "Monitor respons emosional, fisik, sosial, dan spiritual terhadap aktivitas",
          "Fasilitasi fokus pada kemampuan, bukan defisit yang dialami",
          "Sepakati komitmen untuk meningkatkan frekuensi dan rentang aktivitas",
          "Fasilitasi memilih aktivitas dan tetapkan tujuan aktivitas yang konsisten sesuai kemampuan fisik, psikologis, dan sosial",
          "Koordinasikan pemilhan aktivitas sesuai usia",
          "Fasilitasi makna aktivitas yang dipilih",
          "Fasilitasi transportasi untuk menghadiri aktivitas, jika sesuai",
          "Fasilitasi pasien dan keluarga dalam menyesuaikan lingkungan untuk mengakomodasi aktivitas yang dipilih",
          "Fasilitasi aktivitas rutin (mis: ambulasi, mobilisasi, dan perawatan diri), sesuai kebutuhan",
          "Fasilitasi aktivitas pengganti saat mengalami keterbatasan waktu,  energi, atau gerak",
          "Fasilitasi aktivitas motorik kasar untuk pasien hiperaktif",
          "Tingkatkan aktivitas fisik untuk memelihara berat badan, jika sesuai",
          "Fasilitasi aktivitas motorik untuk merelaksasi otot",
          "Fasilitasi aktivitas aktivitas dengan komponen memori implisit dan emosional (mis: kegiatan keagamaan khusus) untuk pasien demensia, jika sesuai",
          "Libatkan dalam permainan kelompok yang tidak kompetitif, terstruktur, dan aktif",
          "Tingkatkan keterlibatan dalam aktivitas rekreasi dan diversifikasi untuk menurunkan kecemasan (mis: vocal group, bola voli, tenis meja, jogging, berenang, tugas sederhana, permainan sederhana, tugas rutin, tugas rumah tangga, perawatan diri, dan teka-teki dan kartu)",
          "Libatkan keluarga dalam aktivitas, jika perlu",
          "Fasilitasi mengembangkan motivasi dan penguatan diri",
          "Fasilitasi pasien dan keluarga memantau kemajuannya sendiri untuk mencapai tujuan",
          "Jadwalkan aktivitas dalam rutinitas sehari-hari",
          "Berikan penguatan positif atas partisipasi dalam aktivitas",
          "Jelaskan metode aktivitas fisik sehari-hari, jika perlu",
          "Ajarkan cara melakukan aktivitas yang dipilih",
          "Anjurkan melakukan aktivitas fisik, sosial, spiritual, dan kognitif dalam menjaga fungsi dan Kesehatan",
          "Anjurkan terlibat dalam aktivitas kelompok atau terapi, jika sesuai",
          "Anjurkan keluarga untuk memberi penguatan positif atas partisipasi dalam aktivitas",
          "Kolaborasi dengan terapis okupasi dalam merencanakan dan memonitor program aktivitas, jika sesuai",
          "Rujuk pada pusat atau program aktivitas komunitas, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0057",
  "slug": "keletihan",
  "kode": "D.0057",
  "nama": "Keletihan",
  "definisi": "Keletihan merupakan diagnosis keperawatan yang didefinisikan sebagai penurunan kapasitas kerja fisik dan mental yang...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "keletihan",
    "lelah",
    "capek",
    "fatigue"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa energi tidak pulih walaupun telah tidur",
      "Merasa kurang tenaga",
      "Mengeluh lelah"
    ],
    "objektif": [
      "Tidak mampu mempertahankan aktivitas rutin",
      "Tampak lesu"
    ]
  },
  "faktorTerkait": [
    "Gangguan tidur",
    "Gaya hidup monoton",
    "Kondisi fisiologis (mis: penyakit kronis, penyakit terminal, anemia, malnutrisi, kehamilan)",
    "Program perawatan/pengobatan jangka Panjang",
    "Peristiwa hidup negatif",
    "Stres berlebihan",
    "Depresi"
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
      "nama": "Edukasi Aktivitas dan Istirahat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media pengaturan aktivitas dan istirahat",
          "Jadwalkan pemberian Pendidikan  Kesehatan sesuai kesepakatan",
          "Berikan kesempatan kepada pasien dan keluarga untuk bertanya",
          "Jelaskan pentingnya melakukan aktivitas fisik/olahraga secara rutin",
          "Anjurkan terlibat dalam aktivitas kelompok, aktivitas bermain atau aktivitas lainnya",
          "Anjurkan menyusun jadwal aktivitas dan istirahat",
          "Ajarkan cara mengidentifikasi kebutuhan istirahat (mis:  kelelahan, sesak napas saat aktivitas)",
          "Ajarkan cara mengidentifikasi target dan jenis aktivitas sesuai kemampuan"
        ]
      }
    },
    {
      "kode": "I.05178",
      "nama": "Manajemen Energi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan",
          "Monitor kelelahan fisik dan emosional",
          "Monitor pola dan jam tidur",
          "Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas",
          "Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)",
          "Lakukan latihan rentang gerak pasif dan/atau aktif",
          "Berikan aktivitas distraksi yang menenangkan",
          "Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan",
          "Anjurkan tirah baring",
          "Anjurkan melakukan aktivitas secara bertahap",
          "Anjurkan menghubungi perawat jika tanda dan gejala kelelahan tidak berkurang",
          "Ajarkan strategi koping untuk mengurangi kelelahan",
          "Kolaborasi dengan ahli gizi tentang cara meningkatkan asupan makanan"
        ]
      }
    }
  ]
},
{
  "id": "0058",
  "slug": "kesiapan-peningkatan-tidur",
  "kode": "D.0058",
  "nama": "Kesiapan Peningkatan Tidur",
  "definisi": "Kesiapan peningkatan tidur merupakan diagnosis keperawatan yang didefinisikan sebagai pola penurunan kesadaran alamiah dan periodik yang...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "tidur",
    "insomnia",
    "terjaga"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengekspresikan keinginan untuk meningkatkan tidur",
      "Mengekspresikan perasaan cukup istirahat setelah tidur"
    ],
    "objektif": [
      "Jumlah waktu tidur sesuai dengan pertumbuhan perkembangan"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Dukungan Tidur",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pola aktivitas dan tidur",
          "Identifikasi faktor pengganggu tidur (fisik dan/atau psikologis)",
          "Identifikasi makanan dan minuman yang mengganggu tidur (mis: kopi, teh, alcohol, makan mendekati waktu tidur, minum banyak air sebelum tidur)",
          "Identifikasi obat tidur yang dikonsumsi",
          "Modifikasi lingkungan (mis: pencahayaan, kebisingan, suhu, matras, dan tempat tidur)",
          "Batasi waktu tidur siang, jika perlu",
          "Fasilitasi menghilangkan stress sebelum tidur",
          "Tetapkan jadwal tidur rutin",
          "Lakukan prosedur untuk meningkatkan kenyamanan (mis: pijat, pengaturan posisi, terapi akupresur)",
          "Sesuaikan jadwal pemberian obat dan/atau Tindakan untuk menunjang siklus tidur-terjaga",
          "Jelaskan pentingnya tidur cukup selama sakit",
          "Anjurkan menepati kebiasaan waktu tidur",
          "Anjurkan menghindari makanan/minuman yang mengganggu tidur",
          "Anjurkan penggunaan obat tidur yang tidak mengandung supresor terhadap tidur REM",
          "Ajarkan faktor-faktor yang berkontribusi terhadap gangguan pola tidur (mis: psikologis, gaya hidup, sering berubah shift bekerja)",
          "Ajarkan relaksasi otot autogenic atau cara nonfarmakologi lainnya"
        ]
      }
    },
    {
      "kode": "I.12362",
      "nama": "Edukasi Aktivitas dan Istirahat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media pengaturan aktivitas dan istirahat",
          "Jadwalkan pemberian Pendidikan  Kesehatan sesuai kesepakatan",
          "Berikan kesempatan kepada pasien dan keluarga untuk bertanya",
          "Jelaskan pentingnya melakukan aktivitas fisik/olahraga secara rutin",
          "Anjurkan terlibat dalam aktivitas kelompok, aktivitas bermain atau aktivitas lainnya",
          "Anjurkan menyusun jadwal aktivitas dan istirahat",
          "Ajarkan cara mengidentifikasi kebutuhan istirahat (mis: kelelahan, sesak napas saat aktivitas)",
          "Ajarkan cara mengidentifikasi target dan jenis aktivitas sesuai kemampuan"
        ]
      }
    }
  ]
},
{
  "id": "0059",
  "slug": "risiko-disorganisasi-perilaku-bayi",
  "kode": "D.0059",
  "nama": "Risiko Disorganisasi Perilaku Bayi",
  "definisi": "Risiko disorganisasi perilaku bayi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami disintegrasi respon...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "bayi",
    "disorganisasi",
    "perilaku"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kelebihan stimulasi sensorik",
    "Prematuritas",
    "Prosedur invasif",
    "Gangguan motorik",
    "Kelainan kongenital",
    "Kelainan genetik"
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
      "nama": "Edukasi Keamanan Bayi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Anjurkan selalu mengawasi bayi",
          "Anjurkan tidak meninggalkan bayinya sendirian",
          "Anjurkan menjauhkan benda yang berisiko membahayakan bayi (mis: kantung plastic, karet, tali, kain, benda-benda kecil, benda tajam, pembersih lantai)",
          "Anjurkan memasang penghalang pada sisi tempat tidur",
          "Anjurkan menutup sumber listrik yang terjangkau oleh bayi",
          "Anjurkan mengatur perabotan rumah tangga di rumah",
          "Anjurkan memberikan pembatas pada area berisiko (mis: dapur, kamar mandi, kolam)",
          "Anjurkan menggunakan kursi dan sabuk pengaman khusus bayi saat berkendara",
          "Anjurkan penggunaan sabuk pengaman pada stroller (kursi dorong bayi), kursi khusus denga naman",
          "Anjurkan tidak meletakkan bayi pada tempat tidur yang tinggi"
        ]
      }
    },
    {
      "kode": "I.10338",
      "nama": "Perawatan Bayi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda-tanda vital bayi (terutama suhu 36°C – 37°C)",
          "Mandikan bayi dengan suhu ruangan 21 – 24°C",
          "Mandikan bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari",
          "Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)",
          "Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang",
          "Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas",
          "Lakukan pemijatan bayi",
          "Ganti popok bayi jika basah",
          "Kenakan pakaian bayi dari bahan katun",
          "Anjurkan ibu menyusui sesuai kebutuhan bayi",
          "Ajarkan ibu cara merawat bayi di rumah",
          "Ajarkan cara pemberian makanan pendamping ASI pada bayi > 6 bulan"
        ]
      }
    }
  ]
},
{
  "id": "0060",
  "slug": "risiko-intoleransi-aktivitas",
  "kode": "D.0060",
  "nama": "Risiko Intoleransi Aktivitas",
  "definisi": "Risiko intoleransi aktivitas merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami ketidakcukupan energi untuk...",
  "kategori": "Aktivitas dan Istirahat",
  "tipe": "Aktual",
  "keluhan": [
    "aktivitas",
    "aktif",
    "gerak"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Gangguan sirkulasi",
    "Ketidakbugaran status fisik",
    "Riwayat intoleransi aktivitas sebelumnya",
    "Tidak berpengalaman dengan suatu aktivitas",
    "Gangguan pernapasan"
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
      "nama": "Manajemen Energi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan",
          "Monitor kelelahan fisik dan emosional",
          "Monitor pola dan jam tidur",
          "Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas",
          "Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)",
          "Lakukan latihan rentang gerak pasif dan/atau aktif",
          "Berikan aktivitas distraksi yang menenangkan",
          "Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan",
          "Anjurkan tirah baring",
          "Anjurkan melakukan aktivitas secara bertahap",
          "Anjurkan menghubungi perawat jika tanda dan gejala kelelahan tidak berkurang",
          "Ajarkan strategi koping untuk mengurangi kelelahan",
          "Kolaborasi dengan ahli gizi tentang cara meningkatkan asupan makanan"
        ]
      }
    },
    {
      "kode": "I.05183",
      "nama": "Promosi Latihan fisik",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keyakinan  Kesehatan tentang Latihan fisik",
          "Identifikasi pengalaman olahraga sebelumnya",
          "Identifikasi motivasi individu untuk memulai atau melanjutkan program olahraga",
          "Identifikasi hambatan untuk berolahraga",
          "Monitor kepatuhan menjalankan program Latihan",
          "Monitor respons terhadap program latihan",
          "Motivasi mengungkapkan perasaan tentang olahraga/kebutuhan berolahraga",
          "Motivasi memulai atau melanjutkan olahraga",
          "Fasilitasi dalam mengidentifikasi model peran positif untuk mempertahankan program Latihan",
          "Fasilitasi dalam mengembangkan program Latihan yang sesuai untuk memenuhi kebutuhan",
          "Fasilitasi dalam menetapkan tujuan jangka pendek dan Panjang program Latihan",
          "Fasilitasi dalam menjadwalkan periode regular Latihan rutin mingguan",
          "Fasilitasi dalam mempertahankan kemajuan program Latihan",
          "Lakukan aktivitas olahraga Bersama pasien, jika perlu",
          "Libatkan keluarga dalam merencanakan dan memelihara program Latihan",
          "Berikan umpan balik positif terhadap segala upaya yang dijalankan pasien",
          "Jelaskan manfaat Kesehatan dan efek fisiologis olahraga",
          "Jelaskan jenis Latihan yang sesuai dengan kondisi Kesehatan",
          "Jelaskan frekuensi, durasi, dan intensitas program Latihan yang diinginkan",
          "Ajarkan Latihan pemanasan dan pendinginan yang tepat",
          "Ajarkan Teknik menghindari cidera saat berolahraga",
          "Ajarkan Teknik pernapasan yang tepat untuk memaksimalkan penyerapan oksigen selama Latihan fisik",
          "Kolaborasi dengan rehabilitasi medis atau ahli fisiologi olahraga, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0061",
  "slug": "disrefleksia-otonom",
  "kode": "D.0061",
  "nama": "Disrefleksia Otonom",
  "definisi": "Disrefleksia otonom merupakan diagnosis keperawatan yang didefinisikan sebagai respon sistem saraf simpatis yang terjadi secara spontan dan...",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Sakit kepala"
    ],
    "objektif": [
      "Tekanan darah sistolik meningkat > 20%",
      "Bercak merah pada kulit di atas lokasi cidera",
      "Diaforesis diatas lokasi cidera",
      "Pucat di bawah lokasi cidera",
      "Bradikardia dan/atau takikardia"
    ]
  },
  "faktorTerkait": [
    "Cidera pada medulla spinalis",
    "Pembedahan medulla spinalis pada T7 keatas",
    "Proses keganasan pada medulla spinalis"
  ],
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
      "nama": "Manajemen Disrefleksia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi rangsangan yang dapat memicu disrefleksia (mis: distensi kandung kemih, kalkuli ginjal, infeksi, impaksi feses, pemeriksaan rektal, supositoria, kerusakan kulit)",
          "Identifikasi penyebab pemicu disrefleksia (mis: distensi kandung kemih, impaksi feses, lesi kulit, stoking suportif, dan pengikat perut)",
          "Monitor tanda dan gejala disleksia otonom (mis: hipertensi paroksismal, bradikardia, takikardia, diaphoresis diatas tingkat cidera, pucat dibawah tingkat cidera, sakit kepala, mengigil tanpa demam, ereksi pilomotor, dan nyeri dada)",
          "Monitor kepatenan kateter urin, jika terpasang",
          "Monitor terjadinya hiperrefleksia",
          "Monitor tanda-tanda vital",
          "Minimalkan rangsangan yang dapat memicu disrefleksia",
          "Berikan posisi fowler, jika perlu",
          "Pasang kateter urin, jika perlu",
          "Jelaskan penyebab dan gejala disrefleksia",
          "Jelaskan penanganan dan pencegahan disrefleksia",
          "Anjurkan pasien dan/atau keluarga jika mengalami tanda dan gejala disrefleksia",
          "Kolaborasi pemberian agen antihipertensi intravena, sesuai indikasi"
        ]
      }
    }
  ]
},
{
  "id": "0062",
  "slug": "gangguan-memori",
  "kode": "D.0062",
  "nama": "Gangguan Memori",
  "definisi": "Gangguan memori merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan mengingat beberapa informasi atau perilaku.",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "memori",
    "ingatan",
    "lupa",
    "pikun"
  ],
  "tandaGejala": {
    "subjektif": [
      "Melaporkan pernah mengalami pengalaman lupa",
      "Tidak mampu mempelajari keterampilan baru",
      "Tidak mampu mengingat informasi faktual",
      "Tidak mampu mengingat perilaku tertentu yang pernah dilakukan",
      "Tidak mampu mengingat peristiwa"
    ],
    "objektif": [
      "Tidak mampu melakukan kemampuan yang dipelajari sebelumnya"
    ]
  },
  "faktorTerkait": [
    "Ketidakadekuatan stimulasi intelektual",
    "Gangguan sirkulasi ke otak",
    "Gangguan volume cairan dan/atau elektrolit",
    "Proses penuaan",
    "Hipoksia",
    "Gangguan neurologis (mis: EEG positif, cidera kepala, gangguan kejang)",
    "Efek agen farmakologis",
    "Penyalahgunaan zat",
    "Faktor psikologis (mis: kecemasan, depresi, stress berlebihan, berduka, gangguan tidur)",
    "Distraksi lingkungan"
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
      "nama": "Latihan Memori",
      "tindakan": {
        "terapeutik": [
          "Identifikasi masalah memori yang dialami",
          "Identifikasi kesalahan terhadap orientasi",
          "Monitor perilaku dan perubahan memori selama terapi",
          "Rencanakan metode mengajar sesuai kemampuan pasien",
          "Stimulasi memori dengan mengulang pikiran yang terakhir kali diucapkan, jika perlu",
          "Koreksi kesalahan orientasi",
          "Fasilitasi mengingat Kembali pengalaman masa lalu, jika perlu",
          "Fasilitasi tugas pembelajaran (mis: mengingat informasi verbal dan gambar)",
          "Fasilitasi kemampuan konsentrasi (mis: bermain kartu pasangan), jika perlu",
          "Stimulasi menggunakan memori pada peristiwa yang baru terjadi (mis: bertanya ke mana saja ia pergi akhir-akhir ini), jika perlu",
          "Jelaskan tujuan dan prosedur Latihan",
          "Ajarkan Teknik memori yang tepat (mis: imajinasi visual, perangkat mnemonic, permainan memori, isyarat memori, Teknik asosiasi, membuat daftar, computer, papan nama)",
          "Rujuk pada terapi okupasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09297",
      "nama": "Orientasi Realita",
      "tindakan": {
        "terapeutik": [
          "Monitor perubahan orientasi",
          "Monitor perubahan kognitif dan perilaku",
          "Perkenalkan nama saat memulai interaksi",
          "Orientasikan orang, tempat, dan waktu",
          "Hadirkan realita (mis: beri penjelasan alternatif, hindari perdebatan)",
          "Sediakan lingkungan dan rutinitas secara konsisten",
          "Atur stimulus sensorik dan lingkungan (mis: kunjungan, pemandangan, suara, pencahayaan, bau, dan sentuhan)",
          "Gunakan simbol dalam mengorientasikan lingkungan (mis: tanda, gambar, warna)",
          "Libatkan dalam terapi kelompok orientasi",
          "Berikan waktu istirahat dan tidur yang cukup, sesuai kebutuhan",
          "Fasilitasi akses informasi (mis: televisi, surat kabad, radio), jika perlu",
          "Anjurkan perawatan diri secara mandiri",
          "Anjurkan penggunaan alat bantu (mis: kacamata, alat bantu dengar, gigi palsu)",
          "Ajarkan keluarga dalam perawatan orientasi lansia"
        ]
      }
    }
  ]
},
{
  "id": "0063",
  "slug": "gangguan-menelan",
  "kode": "D.0063",
  "nama": "Gangguan Menelan",
  "definisi": "Gangguan menelan merupakan diagnosis keperawatan yang didefinisikan sebagai fungsi menelan abnormal akibat defisit struktur atau...",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "menelan",
    "sulit makan",
    "tersedak"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh sulit menelan"
    ],
    "objektif": [
      "Batuk sebelum menelan",
      "Batuk setelah makan atau minum",
      "Tersedak",
      "Makanan tertinggal di rongga mulut"
    ]
  },
  "faktorTerkait": [
    "Gangguan serebrovaskular",
    "Gangguan saraf kranialis",
    "Paralisis serebral",
    "Akalasia",
    "Abnormalitas laring",
    "Abnormalitas orofaring",
    "Anomali jalan napas atas",
    "Defek anatomik kongenital",
    "Defek laring",
    "Defek nasal",
    "Defek rongga nasofaring",
    "Defek trakea",
    "Refluk gastroesofagus",
    "Obstruksi mekanis",
    "Prematuritas"
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
      "nama": "Dukungan Perawatan Diri: Makan/Minum",
      "tindakan": {
        "terapeutik": [
          "Identifikasi diet yang dianjurkan",
          "Monitor kemampuan menelan",
          "Monitor status hidrasi pasien, jika perlu",
          "Ciptakan lingkungan yang menyenangkan selama makan",
          "Atur posisi yang nyaman untuk makan/minum",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Letakkan makanan di sisi mata yang sehat",
          "Sediakan sedotan untuk  minum, sesuai kebutuhan",
          "Siapkan makanan dengan suhu yang meningkatkan nafsu makan",
          "Sediakan makanan dan minuman yang disukai",
          "Berikan bantuan saat makan/minum sesuai tingkat kemandirian, jika perlu",
          "Motivasi untuk makan di ruang makan, jika tersedia",
          "Jelaskan posisi makanan pada pasien yang mengalami gangguan penglihatan dengan menggunakan arah jarum jam (mis: sayur di jam 12, rendang di jam 3)",
          "Kolaborasi pemberian obat (mis: analgesik, antiemetik), sesuai indikasi"
        ]
      }
    },
    {
      "kode": "I.01018",
      "nama": "Pencegahan Aspirasi",
      "tindakan": {
        "terapeutik": [
          "Monitor tingkat kesadaran, batuk, muntah, dan kemampuan menelan",
          "Monitor status pernapasan",
          "Monitor bunyi napas, terutama setelah makan/minum",
          "Periksa residu gaster sebelum memberi asupan oral",
          "Periksa kepatenan selang nasogastric sebelum memberi asupan oral",
          "Posisikan semi fowler (30 – 45 derajat) 30 menit sebelum memberi asupan oral",
          "Pertahankan posisi semi fowler (30 – 45 derajat) pada pasien tidak sadar",
          "Pertahankan kepatenan jalan napas (mis. Teknik head-tilt chin-lift, jaw thrust, in line)",
          "Pertahankan pengembangan balon endotracheal tube (ETT)",
          "Lakukan penghisapan jalan napas, jika produksi sekret meningkat",
          "Sediakan suction di ruangan",
          "Hindari memberi makan melalui selang gastrointestinal, jika residu banyak",
          "Berikan makanan dengan ukuran kecil dan lunak",
          "Berikan obat oral dalam bentuk cair",
          "Ajarkan makan secara perlahan",
          "Ajarkan strategi mencegah aspirasi",
          "Ajarkan Teknik mengunyah atau menelan, jika perlu",
          "Kolaborasi pemberian bronkodilator, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0064",
  "slug": "konfusi-akut",
  "kode": "D.0064",
  "nama": "Konfusi Akut",
  "definisi": "Konfusi akut merupakan diagnosis keperawatan yang didefinisikan sebagai gangguan kesadaran, perhatian, kognitif, dan persepsi yang...",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "tandaGejala": {
    "subjektif": [
      "Kurang motivasi untuk memulai/menyelesaikan perilaku berorientasi tujuan",
      "Kurang motivasi untuk memulai/menyelesaikan perilaku terarah"
    ],
    "objektif": [
      "Fluktuasi fungsi kognitif",
      "Fluktuasi tingkat kesadaran",
      "Fluktuasi aktivitas psikomotorik"
    ]
  },
  "faktorTerkait": [
    "Delirium",
    "Demensia",
    "Fluktuasi siklus tidur-bangun",
    "Usia lebih dari 60 tahun",
    "Penyalahgunaan zat"
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
      "nama": "Manajemen Delirium",
      "tindakan": {
        "terapeutik": [
          "Identifikasi faktor risiko delirium (mis: usia >75 tahun, disfungsi kognitif, gangguan penglihatan/pendengaran, penurunan kemampuan fungsional, infeksi, hipo/hipertemia, hipoksia, malnutrisi, efek obat, toksin, gangguan tidur, stres)",
          "Identifikasi tipe delirium (mis: hipoaktif, hiperaktif, campuran)",
          "Monitor status neurologis dan tingkat delirium",
          "Berikan pencahayaan yang baik",
          "Sediakan jam dan kalender yang mudah dibaca",
          "Hindari stimulus sensorik berlebihan (mis: televisi, pengumuman interkom)",
          "Lakukan pengekangan fisik, sesuai indikasi",
          "Sediakan informasi tentang apa yang terjadi dan apa yang dapat terjadi selanjutnya",
          "Batasi pembuatan keputusan",
          "Hindari memvalidasi mispersepsi atau interpretasi realita yang tidak akurat (mis: halusinasi, waham)",
          "Nyatakan persepsi dengan cara yang tenang, meyakinkan, dan tidak argumentative",
          "Fokus pada apa yang dikenali dan bermakna saat interaksi interpersonal",
          "Lakukan reorientasi",
          "Sediakan lingkungan fisik dan rutinitas harian yang konsisten",
          "Gunakan isyarat lingkungan untuk stimulasi memori, reorientasi, dan meningkatkan perilaku yang sesuai (mis: tanda, gambar, jam, kalender, dan kode warna pada lingkungan)",
          "Berikan informasi baru secara perlahan, sedikit demi sedikit, diulang-ulang",
          "Anjurkan kunjungan keluarga, jika perlu",
          "Anjurkan penggunaan alat bantu sensorik (mis: kacamata, alat bantu dengar, dan gigi palsu)",
          "Kolaborasi pemberian obat ansietas atau agitasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09288",
      "nama": "Manajemen Halusinasi",
      "tindakan": {
        "terapeutik": [
          "Monitor perilaku yang mengindikasikan halusinasi",
          "Monitor dan sesuaikan tingkat aktivitas dan stimulasi lingkungan",
          "Monitor isi halusinasi (mis: kekerasan atau membahayakan diri)",
          "Pertahankan lingkungan yang aman",
          "Lakukan Tindakan keselamatan Ketika tidak dapat mengontrol perilaku (mis: limit setting, pembatasan wilayah, pengekangan fisik, seklusi)",
          "Diskusikan perasaan dan respons terhadap halusinasi",
          "Hindari perdebatan tentang validitas halusinasi",
          "Anjurkan memonitor sendiri situasi terjadinya halusinasi",
          "Anjurkan bicara pada orang yang dipercaya untuk memberi dukungan dan umpan balik korektif terhadap halusinasi",
          "Anjurkan melakukan distraksi (mis: mendengarkan music, melakukan aktivitas dan Teknik relaksasi)",
          "Ajarkan pasien dan keluarga cara mengontrol halusinasi",
          "Kolaborasi pemberian obat antipsikotik dan antiansietas, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09291",
      "nama": "Manajemen Penyalahgunaan Zat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab ketergantungan atau penyalahgunaan zat",
          "Identifikasi perilaku denial tidak efektif",
          "Periksa tanda dan gejala intoksikasi",
          "Periksa pasien dan abrang bawaannya secara acak",
          "Penuhi kebutuhan dasar seperti keamanan, kebersihaan diri, kenyamanan, lingkungan tenang",
          "Perbaiki kesalahan konsepsi, tidak menyalahkan orang lain",
          "Pertahankan disiplin diri dengan pengawasan ketat",
          "Berikan Batasan pada perilaku manipulative",
          "Batasi akses penggunaan zat",
          "Hadapi secara konsisten, tidak menghakimi dan menghukum",
          "Anjurkan berfokus pada saat ini dan masa depan, bukan masa lalu",
          "Anjurkan pasien dan keluarga mengikuti peraturan ketat rumah sakit secara efektif (mis: tidak menyelundupkan obat)",
          "Anjurkan mengikuti program kelompok",
          "Anjurkan untuk berobat jalan secara teratur dan mematuhi pengobatan saat pulang",
          "Ajarkan keterampilan pencegahan kekambuhan, keterampilan suportif dan tugas perkembangan",
          "Jelaskan bahaya menggunakan alat invasive untuk memasukan zat dalam tubuh (mis: abses, HIV)",
          "Kolaborasi pemberian substitusi, sesuai indikasi"
        ]
      }
    }
  ]
},
{
  "id": "0065",
  "slug": "konfusi-kronis",
  "kode": "D.0065",
  "nama": "Konfusi Kronis",
  "definisi": "Konfusi kronis merupakan diagnosis keperawatan yang didefinisikan sebagai gangguan kesadaran, perhatian, kognitif, dan persepsi yang...",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "tandaGejala": {
    "subjektif": [
      "Kurang motivasi untuk memulai/menyelesaikan perilaku berorientasi tujuan",
      "Kurang motivasi untuk memulai/menyelesaikan perilaku terarah"
    ],
    "objektif": [
      "Fungsi kognitif berubah progresif",
      "Memori jangka pendek dan/atau Panjang berubah",
      "Interpretasi berubah",
      "Fungsi sosial terganggu",
      "Respon terhadap stimulus berubah"
    ]
  },
  "faktorTerkait": [
    "Cidera otak (mis: kerusakan kardiovaskular, penyakit neurologis, trauma, tumor)",
    "Psikosis Korsakoff",
    "Demensia multi infark"
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
      "nama": "Manajemen Delirium",
      "tindakan": {
        "terapeutik": [
          "Identifikasi faktor risiko delirium (mis: usia >75 tahun, disfungsi kognitif, gangguan penglihatan/pendengaran, penurunan kemampuan fungsional, infeksi, hipo/hipertemia, hipoksia, malnutrisi, efek obat, toksin, gangguan tidur, stres)",
          "Identifikasi tipe delirium (mis: hipoaktif, hiperaktif, campuran)",
          "Monitor status neurologis dan tingkat delirium",
          "Berikan pencahayaan yang baik",
          "Sediakan jam dan kalender yang mudah dibaca",
          "Hindari stimulus sensorik berlebihan (mis: televisi, pengumuman interkom)",
          "Lakukan pengekangan fisik, sesuai indikasi",
          "Sediakan informasi tentang apa yang terjadi dan apa yang dapat terjadi selanjutnya",
          "Batasi pembuatan keputusan",
          "Hindari memvalidasi mispersepsi atau interpretasi realita yang tidak akurat (mis: halusinasi, waham)",
          "Nyatakan persepsi dengan cara yang tenang, meyakinkan, dan tidak argumentative",
          "Fokus pada apa yang dikenali dan bermakna saat interaksi interpersonal",
          "Lakukan reorientasi",
          "Sediakan lingkungan fisik dan rutinitas harian yang konsisten",
          "Gunakan isyarat lingkungan untuk stimulasi memori, reorientasi, dan meningkatkan perilaku yang sesuai (mis: tanda, gambar, jam, kalender, dan kode warna pada lingkungan)",
          "Berikan informasi baru secara perlahan, sedikit demi sedikit, diulang-ulang",
          "Anjurkan kunjungan keluarga, jika perlu",
          "Anjurkan penggunaan alat bantu sensorik (mis: kacamata, alat bantu dengar, dan gigi palsu)",
          "Kolaborasi pemberian obat ansietas atau agitasi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09286",
      "nama": "Manajemen Demensia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi Riwayat fisik, sosial, psikologis, dan kebiasaan",
          "Identifikasi pola aktivitas (mis: tidur, minum obat, eliminasi, asupan oral, perawatan diri)",
          "Sediakan lingkungan aman, nyaman, konsisten, dan rendah stimulus (mis: music tenang, dekorasi sederhana, pencahayaan memadai, makan Bersama pasien lain)",
          "Orientasikan waktu, tempat, dan orang",
          "Gunakan distraksi untuk mengatasi masalah perilaku",
          "Libatkan keluarga dalam merencanakan, menyediakan, dan mengevaluasi perawatan",
          "Fasilitasi orientasi dengan simbol-simbol (mis: dekorasi, papan petunjuk, foto diberi nama, huruf besar)",
          "Libatkan kegiatan individua tau kelompok sesuai kemampuan kognitif dan minat",
          "Anjurkan memperbanyak istirahat",
          "Ajarkan keluarga cara perawatan demensia"
        ]
      }
    },
    {
      "kode": "I.09332",
      "nama": "Terapi Validasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tahap gangguan kognitif (mis: malorientasi, bingung waktu, repetitif, atau vegetasi)",
          "Monitor dan refleksikan gestur",
          "Hindari menggunakan strategi validasi jika bingung disebabkan oleh penyebab akut, reversible, atau tahap vegetasi",
          "Dengarkan dengan empati",
          "Tahan diri untuk mengkoreksi atau menentang persepsi dan pengalaman pasien",
          "Ajukan pertanyaan faktual yang tidak mengancam (mis: siapa? Apa? Kapan? Bagaimana?)",
          "Hindari bertanya “kenapa?”",
          "Ulangi pernyataan, ulangi kata-kata kunci, sesuaikan dengan nada bicara",
          "Pertahankan kontak mata",
          "Gunakan sentuhan suportif (mis: sentuhan lembut ke pipi, bahu, lengan, atau tangan)",
          "Gunakan Bahasa dan gaya komunikasi pasien (mis: pendengaran, visual, kinestetik)",
          "Libatkan dalam kegiatan sesuai kebutuhan",
          "Anjurkan mengekspresikan emosi sesuai pengalaman (mis: cinta, takut, sedih)",
          "Anjurkan melakukan kegiatan bernyanyi dan bermain musik yang familiar",
          "Anjurkan mengenang peristiwa sebelumnya untuk mengidentifikasi metode koping yang pernah digunakan sebelumnya"
        ]
      }
    }
  ]
},
{
  "id": "0066",
  "slug": "penurunan-kapasitas-adaptif-intrakranial",
  "kode": "D.0066",
  "nama": "Penurunan Kapasitas Adaptif Intrakranial",
  "definisi": "Penurunan kapasitas adaptif intrakranial merupakan diagnosis keperawatan yang didefinisikan sebagai gangguan mekanisme dinamika intrakranial..",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "intrakranial",
    "tekanan otak"
  ],
  "tandaGejala": {
    "subjektif": [
      "Sakit kepala"
    ],
    "objektif": [
      "Tekanan darah meningkat dengan tekanan nadi (pulse pressure) melebar",
      "Bradikardia",
      "Pola napas ireguler",
      "Tingkat kesadaran menurun",
      "Respon pupil melambat atau tidak sama",
      "Refleks neurologis terganggu"
    ]
  },
  "faktorTerkait": [
    "Lesi menempati ruang (mis: space-occupaying lesion – akibat tumor, abses)",
    "Gangguan metabolisme (mis: akibat hiponatremia, ensefalofati uremikum, ensefalopati hepatikum, ketoasidosis diabetic, septikemia)",
    "Edema serebral (mis: akibat cidera kepala [hematoma epidural, hematoma subdural, hematoma subarachnoid, hematoma intraserebral], stroke iskemik, stroke hemoragik, hipoksia, ensefalopati iskemik, pasca operasi)",
    "Peningkatan tekanan vena (mis: akibat thrombosis sinus vena serebral, gagal jantung, thrombosis/obstruksi vena jugularis atau vena kava superior)",
    "Obstruksi aliran cairan serebrospinalis",
    "Hipertensi intrakranial idiopatik"
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
      "nama": "Manajemen Peningkatan Tekanan Intrakranial",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab peningkatan TIK (misalnya: lesi, gangguan metabolism, edema serebral)",
          "Monitor tanda/gejala peningkatan TIK (misalnya: tekanan darah meningkat, tekanan nadi melebar, bradikardia, pola napas ireguler, kesadaran menurun)",
          "Monitor MAP (mean arterial pressure) (LIHAT: Kalkulator MAP)",
          "Monitor CVP (central venous pressure)",
          "Monitor PAWP, jika perlu",
          "Monitor PAP, jika perlu",
          "Monitor ICP (intra cranial pressure)",
          "Monitor gelombang ICP",
          "Monitor status pernapasan",
          "Monitor intake dan output cairan",
          "Monitor cairan serebro-spinalis (mis. Warna, konsistensi)",
          "Minimalkan stimulus dengan menyediakan lingkungan yang tenang",
          "Berikan posisi semi fowler",
          "Hindari manuver valsava",
          "Cegah terjadinya kejang",
          "Hindari penggunaan PEEP",
          "Hindari pemberian cairan IV hipotonik",
          "Atur ventilator agar PaCO2 optimal",
          "Pertahankan suhu tubuh normal",
          "Kolaborasi pemberian sedasi dan antikonvulsan, jika perlu",
          "Kolaborasi pemberian diuretik osmosis, jika perlu",
          "Kolaborasi pemberian pelunak tinja, jika perlu"
        ]
      }
    },
    {
      "kode": "I.06198",
      "nama": "Pemantauan Tekanan Intrakranial",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab peningkatan TIK (mis: lesi menempati ruang, gangguan metabolisme, edema serebral, peningkatan tekanan vena, obstruksi cairan serebrospinal, hipertensi intracranial idiopatik)",
          "Monitor peningkatan TS",
          "Monitor pelebaran tekanan nadi (selisih TDS dan TDD)",
          "Monitor penurunan frekuensi jantung",
          "Monitor ireguleritas irama napas",
          "Monitor penurunan tingkat kesadaran",
          "Monitor perlambatan atau ketidaksimetrisan respon pupil",
          "Monitor kadar CO2 dan pertahankan dalam rentang yang diindikasikan",
          "Monitor tekanan perfusi serebral",
          "Monitor jumlah, kecepatan, dan karakteristik drainase cairan serebrospinal",
          "Monitor efek stimulus lingkungan terhadap TIK",
          "Ambil sampel drainase cairan serebrospinal",
          "Kalibrasi transduser",
          "Pertahankan sterilitas sistem pemantauan",
          "Pertahankan posisi kepala dan leher netral",
          "Bilas sistem pemantauan, jika perlu",
          "Atur interval pemantauan sesuai kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0067",
  "slug": "risiko-disfungsi-neurovaskuler-perifer",
  "kode": "D.0067",
  "nama": "Risiko Disfungsi Neurovaskuler Perifer",
  "definisi": "Risiko disfungsi neurovaskuler perifer merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan...",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Hiperglikemia",
    "Obstruksi vaskuler",
    "Fraktur",
    "Imobilisasi",
    "Penekanan mekanis (mis: torniket, gips, balutan, restraint)",
    "Pembedahan ortopedi",
    "Trauma",
    "Luka bakar"
  ],
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
      "nama": "Manajemen Sensasi Perifer",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab perubahan sensasi",
          "Identifikasi penggunaan alat pengikat, prosthesis, sepatu, dan pakaian",
          "Periksa perbedaan sensasi tajam atau tumpul",
          "Periksa perbedaan sensasi panas atau dingin",
          "Periksa kemampuan mengidentifikasi lokasi dan tekstur benda",
          "Monitor terjadinya parestesia, jika perlu",
          "Monitor perubahan kulit",
          "Monitor adanya tromboplebitis dan tromboemboli vena",
          "Hindai pemakaian benda-benda yang berlebihan suhunya (terlalu panas atau dingin)",
          "Anjurkan penggunaan thermometer untuk menguji suhu air",
          "Anjurkan penggunaan sarung tangan termal saat memasak",
          "Anjurkan memakai sepatu lembut dan bertumit rendah",
          "Kolaborasi pemberian analgesik, jika perlu",
          "Kolaborasi pemberian kortikosteroid, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi",
      "tindakan": {
        "terapeutik": [
          "Monitor status oksigenasi sebelum dan sesudah mengubah posisi",
          "Monitor alat traksi agar selalu tepat",
          "Tempatkan pada matras/tempat tidur terapeutik yang tepat",
          "Tempatkan pada posisi terapeutik",
          "Tempatkan objek yang sering digunakan dalam jangkauan",
          "Tempatkan bel atau lampu panggilan dalam jangkauan",
          "Sediakan matras yang kokoh/padat",
          "Atur posisi tidur yang disukai, jika tidak kontraindikasi",
          "Atur posisi untuk mengurangi sesak (mis: semi-fowler)",
          "Atur posisi yang meningkatkan drainage",
          "Posisikan pada kesejajaran tubuh yang tepat",
          "Imobilisasi dan topang bagian tubuh yang cidera dengan tepat",
          "Tinggikan bagian tubuh yang sakit dengan tepat",
          "Tinggikan anggota gerak 20° atau lebih diatas level jantung",
          "Tinggikan tempat tidur bagian kepala",
          "Berikan bantal yang tepat pada leher",
          "Berikan topangan pada area edema (mis: bantal dibawah lengan atau skrotum)",
          "Posisikan untuk mempermudah ventilasi/perfusi (mis: tengkurap/good lung down)",
          "Motivasi melakukan ROM aktif atau ROM pasif",
          "Motivasi terlibat dalam perubahan posisi, sesuai kebutuhan",
          "Hindari menempatkan pada posisi yang dapat meningkatkan nyeri",
          "Hindari menempatkan stump amputasi pada posisi fleksi",
          "Hindari posisi yang menimbulkan ketegangan pada luka",
          "Minimalkan gesekan dan tarikan saat mengubah posisi",
          "Ubah posisi setiap 2 jam",
          "Ubah posisi dengan Teknik log roll",
          "Pertahankan posisi dan integritas traksi",
          "Informasikan saat akan dilakukan perubahan posisi",
          "Ajarkan cara menggunakan postur yang baik dan mekanika tubuh yang baik selama melakukan perubahan posisi",
          "Kolaborasi pemberian premedikasi sebelum mengubah posisi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0068",
  "slug": "risiko-konfusi-akut",
  "kode": "D.0068",
  "nama": "Risiko Konfusi Akut",
  "definisi": "Risiko konfusi akut merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan kesadaran, perhatian, kognisi....",
  "kategori": "Neurosensori",
  "tipe": "Aktual",
  "keluhan": [
    "konfusi",
    "bingung",
    "delirium"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Usia di atas 60 tahun",
    "Perubahan fungsi kognitif",
    "Perubahan siklus tidur – bangun",
    "Dehidrasi",
    "Demensia",
    "Riwayat stroke",
    "Gangguan fungsi metabolik (mis: azotemia, penurunan hemoglobin, ketidakseimbangan elektrolit, peningkatan nitrogen urea darah [BUN]/kreatinin)",
    "Gangguan mobilitas",
    "Penggunaan restraint yang tidak tepat",
    "Infeksi",
    "Malnutrisi",
    "Nyeri",
    "Efek agen farmakologis",
    "Deprivasi sensori",
    "Penyalahgunaan zat"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09286",
      "nama": "Manajemen Demensia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi Riwayat fisik, sosial, psikologis, dan kebiasaan",
          "Identifikasi pola aktivitas (mis: tidur, minum obat, eliminasi, asupan oral, perawatan diri)",
          "Sediakan lingkungan aman, nyaman, konsisten, dan rendah stimulus (mis: music tenang, dekorasi sederhana, pencahayaan memadai, makan Bersama pasien lain)",
          "Orientasikan waktu, tempat, dan orang",
          "Gunakan distraksi untuk mengatasi masalah perilaku",
          "Libatkan keluarga dalam merencanakan, menyediakan, dan mengevaluasi perawatan",
          "Fasilitasi orientasi dengan simbol-simbol (mis: dekorasi, papan petunjuk, foto diberi nama, huruf besar)",
          "Libatkan kegiatan individua tau kelompok sesuai kemampuan kognitif dan minat",
          "Anjurkan memperbanyak istirahat",
          "Ajarkan keluarga cara perawatan demensia"
        ]
      }
    },
    {
      "kode": "I.14539",
      "nama": "Pencegahan Infeksi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda dan gejala infeksi lokal dan sistemik",
          "Batasi jumlah pengunjung",
          "Berikan perawatan kulit pada area edema",
          "Cuci tangan sebelum dan sesudah kontak dengan pasien dan lingkungan pasien",
          "Pertahankan teknik aseptic pada pasien berisiko tinggi",
          "Jelaskan tanda dan gejala infeksi",
          "Ajarkan cara mencuci tangan dengan benar",
          "Ajarkan etika batuk",
          "Ajarkan cara memeriksa kondisi luka atau luka operasi",
          "Anjurkan meningkatkan asupan nutrisi",
          "Anjurkan meningkatkan asupan cairan",
          "Kolaborasi pemberian imunisasi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0069",
  "slug": "disfungsi-seksual",
  "kode": "D.0069",
  "nama": "Disfungsi Seksual",
  "definisi": "Disfungsi seksual merupakan diagnosis keperawatan yang didefinisikan sebagai perubahan fungsi seksual selama fase respon seksual berupa...",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan aktivitas seksual berubah",
      "Mengungkapkan eksitasi seksual berubah",
      "Merasa hubungan seksual tidak memuaskan",
      "Mengungkapkan peran seksual berubah",
      "Mengeluhkan hasrat seksual menurun",
      "Mengungkapkan fungsi seksual berubah",
      "Mengeluh nyeri saat berhubungan seksual (dispareunia)"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Perubahan fungsi/struktur tubuh (mis: kehamilan, baru melahirkan, obat-obatan, pembedahan, anomali, proses penyakit, trauma, radiasi)",
    "Perubahan biopsikososial seksualitas",
    "Ketiadaan model peran",
    "Model peran tidak dapat mempengaruhi",
    "Kurang privasi",
    "Ketiadaan pasangan",
    "Kesalahan informasi",
    "Kelainan seksual (mis: hubungan penuh kekerasan)",
    "Konflik nilai",
    "Penganiayaan fisik (mis: kekerasan dalam rumah tangga)",
    "Kurang terpapar informasi"
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
      "nama": "Edukasi Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Fasilitasi kesadaran keluarga terhadap anak dan remaja serta pengaruh media",
          "Jelaskan anatomi dan fisiologi sistem reproduksi laki-laki dan perempuan",
          "Jelaskan perkembangan seksualitas sepanjang siklus kehidupan",
          "Jelaskan perkembangan emosi masa anak dan remaja",
          "Jelaskan pengaruh tekanan kelompok dan sosial terhadap aktivitas seksual",
          "Jelaskan konsekuensi negatif mengasuh anak pada usia dini (mis: kemiskinan, kehilangan karir dan Pendidikan)",
          "Jelaskan risiko tertular penyakit menular seksual dan AIDS akibat seks bebas",
          "Anjurkan orang tua menjadi educator seksualitas bagi anak-anaknya",
          "Anjurkan anak/remaja tidak melakukan aktivitas seksual di luar nikah",
          "Ajarkan keterampilan komunikasi asertif untuk menolak tekanan teman sebaya dan sosial dalam aktivitas seksual"
        ]
      }
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tingkat pengetahuan, masalah sistem reproduksi, masalah seksualitas, dan penyakit menular seksual",
          "Identifikasi waktu disfungsi seksual dan kemungkinan penyebab",
          "Monitor stres, kecemasan, depresi, dan penyebab disfungsi seksual",
          "Fasilitasi komunikasi antara pasien dan pasangan",
          "Berikan kesempatan kepada pasangan untuk menceritakan permasalahan seksual",
          "Berikan pujian terhadap perilaku yang benar",
          "Berikan saran yang sesuai kebutuhan pasangan dengan menggunakan Bahasa yang mudah diterima, dipahami, dan tidak menghakimi",
          "Jelaskan efek pengobatan,  Kesehatan dan penyakit terhadap disfungsi seksual",
          "Informasikan pentingnya modifikasi pada aktivitas seksual",
          "Kolaborasi dengan spesialis seksologi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0070",
  "slug": "kesiapan-persalinan",
  "kode": "D.0070",
  "nama": "Kesiapan Persalinan",
  "definisi": "Kesiapan persalinan merupakan diagnosis keperawatan yang didefinisikan sebagai pola mempersiapkan, mempertahankan, dan memperkuat proses...",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "persalinan",
    "melahirkan",
    "hamil"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menyatakan keinginan untuk menerapkan gaya hidup yang tepat untuk persalinan",
      "Menyatakan keinginan untuk menerapkan penatalaksanaan gejala ketidaknyamanan selama persalinan",
      "Menyatakan rasa percaya diri menjalani persalinan"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Edukasi Persalinan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tingkat pengetahuan ibu",
          "Identifikasi pemahaman ibu tentang persalinan",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Berikan reinforcement positif terhadap perubahan perilaku ibu",
          "Jelaskan metode persalinan yang ibu inginkan",
          "Jelaskan persiapan dan tempat persalinan",
          "Anjurkan ibu mengikuti kelas ibu hamil pada usia  kehamilan lebih dari 36 minggu",
          "Anjurkan ibu menggunakan Teknik manajemen nyeri persalinan tiap kala",
          "Anjurkan ibu cukup nutrisi",
          "Ajarkan Teknik relaksasi untuk meredakan kecemasan dan ketidaknyamanan persalinan",
          "Ajarkan ibu cara mengenali tanda-tanda persalinan"
        ]
      }
    }
  ]
},
{
  "id": "0071",
  "slug": "pola-seksual-tidak-efektif",
  "kode": "D.0071",
  "nama": "Pola Seksual Tidak Efektif",
  "definisi": "Pola seksual tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai kekhawatiran individu melakukan hubungan seksual yang..",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh sulit melakukan aktivitas seksual",
      "Mengungkapkan aktivitas seksual berubah",
      "Mengungkapkan perilaku seksual berubah",
      "Orientasi seksual berubah"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Kurang privasi",
    "Ketiadaan pasangan",
    "Konflik orientasi seksual",
    "Takut hamil",
    "Ketakutan terindeksi penyakit menular seksual",
    "Hambatan hubungan dengan pasangan",
    "Kurang terpapar informasi tentang seksualitas",
    "Masalah = Pola seksual tidak efektif",
    "Tanda/gejala = mengeluh sulit melakukan aktivitas seksual, dst",
    "d.d = dibuktikan dengan"
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
      "nama": "Edukasi Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan  Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Fasilitasi kesadaran keluarga terhadap anak dan remaja serta pengaruh media",
          "Jelaskan anatomi dan fisiologi sistem reproduksi laki-laki dan perempuan",
          "Jelaskan perkembangan seksualitas sepanjang siklus kehidupan",
          "Jelaskan perkembangan emosi masa anak dan remaja",
          "Jelaskan pengaruh tekanan kelompok dan sosial terhadap aktivitas seksual",
          "Jelaskan konsekuensi negatif mengasuh anak pada usia dini (mis: kemiskinan, kehilangan karir dan Pendidikan)",
          "Jelaskan risiko tertular penyakit menular seksual dan AIDS akibat seks bebas",
          "Anjurkan orang tua menjadi educator seksualitas bagi anak-anaknya",
          "Anjurkan anak/remaja tidak melakukan aktivitas seksual di luar nikah",
          "Ajarkan keterampilan komunikasi asertif untuk menolak tekanan teman sebaya dan sosial dalam aktivitas seksual"
        ]
      }
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tingkat pengetahuan, masalah sistem reproduksi, masalah seksualitas, dan penyakit menular seksual",
          "Identifikasi waktu disfungsi seksual dan kemungkinan penyebab",
          "Monitor stres, kecemasan, depresi, dan penyebab disfungsi seksual",
          "Fasilitasi komunikasi antara pasien dan pasangan",
          "Berikan kesempatan kepada pasangan untuk menceritakan permasalahan seksual",
          "Berikan pujian terhadap perilaku yang benar",
          "Berikan saran yang sesuai kebutuhan pasangan dengan menggunakan Bahasa yang mudah diterima, dipahami, dan tidak menghakimi",
          "Jelaskan efek pengobatan, Kesehatan dan penyakit terhadap disfungsi seksual",
          "Informasikan pentingnya modifikasi pada aktivitas seksual",
          "Kolaborasi dengan spesialis seksologi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0072",
  "slug": "risiko-disfungsi-seksual",
  "kode": "D.0072",
  "nama": "Risiko Disfungsi Seksual",
  "definisi": "Risiko disfungsi seksual merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami perubahan fungsi seksual selama fase..",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [
    "seksual",
    "seks",
    "hubungan"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Gangguan neurologi",
    "Gangguan urologi",
    "Gangguan endokrin",
    "Keganasan",
    "Faktor ginekologi (mis: kehamilan, pasca persalinan)",
    "Efek agen farmakologis",
    "Depresi",
    "Kecemasan",
    "Penganiayaan psikologis/seksual",
    "Penyalahgunaan obat/zat",
    "Konflik hubungan",
    "Kurangnya privasi",
    "Pola seksual pasangan menyimpang",
    "Ketiadaan pasangan",
    "Ketidakadekuatan edukasi",
    "Konflik nilai personal dalam keluarga, budaya, dan agama"
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
      "nama": "Edukasi Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Fasilitasi kesadaran keluarga terhadap anak dan remaja serta pengaruh media",
          "Jelaskan anatomi dan fisiologi sistem reproduksi laki-laki dan perempuan",
          "Jelaskan perkembangan seksualitas sepanjang siklus kehidupan",
          "Jelaskan perkembangan emosi masa anak dan remaja",
          "Jelaskan pengaruh tekanan kelompok dan sosial terhadap aktivitas seksual",
          "Jelaskan konsekuensi negatif mengasuh anak pada usia dini (mis: kemiskinan, kehilangan karir dan Pendidikan)",
          "Jelaskan risiko tertular penyakit menular seksual dan AIDS akibat seks bebas",
          "Anjurkan orang tua menjadi educator seksualitas bagi anak-anaknya",
          "Anjurkan anak/remaja tidak melakukan aktivitas seksual di luar nikah",
          "Ajarkan keterampilan komunikasi asertif untuk menolak tekanan teman sebaya dan sosial dalam aktivitas seksual"
        ]
      }
    },
    {
      "kode": "I.07214",
      "nama": "Konseling Seksualitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tingkat pengetahuan, masalah sistem reproduksi, masalah seksualitas, dan penyakit menular seksual",
          "Identifikasi waktu disfungsi seksual dan kemungkinan penyebab",
          "Monitor stres, kecemasan, depresi, dan penyebab disfungsi seksual",
          "Fasilitasi komunikasi antara pasien dan pasangan",
          "Berikan kesempatan kepada pasangan untuk menceritakan permasalahan seksual",
          "Berikan pujian terhadap perilaku yang benar",
          "Berikan saran yang sesuai kebutuhan pasangan dengan menggunakan Bahasa yang mudah diterima, dipahami, dan tidak menghakimi",
          "Jelaskan efek pengobatan,  Kesehatan dan penyakit terhadap disfungsi seksual",
          "Informasikan pentingnya modifikasi pada aktivitas seksual",
          "Kolaborasi dengan spesialis seksologi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0073",
  "slug": "risiko-kehamilan-tidak-dikehendaki",
  "kode": "D.0073",
  "nama": "Risiko Kehamilan Tidak Dikehendaki",
  "definisi": "Risiko kehamilan tidak dikehendaki merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kehamilan yang tidak...",
  "kategori": "Reproduksi dan Seksualitas",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Pemerkosaan",
    "Hubungan seksual sedarah (incest)",
    "Gangguan jiwa",
    "Kegagalan penggunaan alat kontrasepsi",
    "Kekerasan dalam rumah tangga (KDRT)",
    "Tidak menggunakan alat kontrasepsi",
    "Faktor sosial-ekonomi"
  ],
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
      "nama": "Edukasi Keluarga Berencana",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi pengetahuan tentang alat kontrasepsi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Lakukan penapisan pada ibu dan pasangan untuk penggunaan alat kontrasepsi",
          "Lakukan pemeriksaan fisik",
          "Fasilitasi ibu dan pasangan dalam mengambil keputusan menggunakan alat kontrasepsi",
          "Diskusikan pertimbangan agama, budaya, perkembangan, sosial ekonomi terhadap pemilihan alat kontrasepsi",
          "Jelaskan tentang sistem reproduksi",
          "Jelaskan metode-metode alat kontrasepsi",
          "Jelaskan aktivitas seksual setelah mengikuti program KB"
        ]
      }
    },
    {
      "kode": "I.07216",
      "nama": "Manajemen Kehamilan Tidak Dikehendaki",
      "tindakan": {
        "terapeutik": [
          "Identifikasi nilai-nilai dan keyakinan terhadap kehamilan",
          "Identifikasi pilihan terhadap  kehamilannya",
          "Fasilitasi mengungkapkan perasaan",
          "Diskusikan nilai-nilai dan keyakinan yang keliru terhadap kehamilan",
          "Diskusikan konflik yang terjadi dengan adanya kehamilan",
          "Fasilitasi mengembangkan Teknik penyelesaian masalah",
          "Berikan konseling kehamilan",
          "Fasilitasi mengidentifikasi sistem pendukung",
          "Informasikan pentingnya meningkatkan status nutrisi selama kehamilan",
          "Informasikan perubahan yang terjadi selama kehamilan",
          "Rujuk jika mengalami komplikasi kehamilan"
        ]
      }
    }
  ]
},
{
  "id": "0074",
  "slug": "gangguan-rasa-nyaman",
  "kode": "D.0074",
  "nama": "Gangguan Rasa Nyaman",
  "definisi": "Gangguan rasa nyaman merupakan diagnosis keperawatan yang didefinisikan sebagai perasaan kurang senang, lega, dan sempurna dalam...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyaman",
    "tidak nyaman",
    "comfort"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh tidak nyaman"
    ],
    "objektif": [
      "Gelisah"
    ]
  },
  "faktorTerkait": [
    "Gejala penyakit",
    "Kurang pengendalian situasional/lingkungan",
    "Ketidakadekuatan sumber daya (mis: dukungan finansial, sosial, dan pengetahuan)",
    "Kurangnya privasi",
    "Gangguan stimulus lingkungan",
    "Efek samping terapi (mis: medikasi, radiasi, kemoterapi)",
    "Gangguan adaptasi kehamilan"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi",
      "tindakan": {
        "terapeutik": [
          "Monitor status oksigenasi sebelum dan sesudah mengubah posisi",
          "Monitor alat traksi agar selalu tepat",
          "Tempatkan pada matras/tempat tidur terapeutik yang tepat",
          "Tempatkan pada posisi terapeutik",
          "Tempatkan objek yang sering digunakan dalam jangkauan",
          "Tempatkan bel atau lampu panggilan dalam jangkauan",
          "Sediakan matras yang kokoh/padat",
          "Atur posisi tidur yang disukai, jika tidak kontraindikasi",
          "Atur posisi untuk mengurangi sesak (mis: semi-fowler)",
          "Atur posisi yang meningkatkan drainage",
          "Posisikan pada kesejajaran tubuh yang tepat",
          "Imobilisasi dan topang bagian tubuh yang cidera dengan tepat",
          "Tinggikan bagian tubuh yang sakit dengan tepat",
          "Tinggikan anggota gerak 20° atau lebih diatas level jantung",
          "Tinggikan tempat tidur bagian kepala",
          "Berikan bantal yang tepat pada leher",
          "Berikan topangan pada area edema (mis: bantal dibawah lengan atau skrotum)",
          "Posisikan untuk mempermudah ventilasi/perfusi (mis: tengkurap/good lung down)",
          "Motivasi melakukan ROM aktif atau ROM pasif",
          "Motivasi terlibat dalam perubahan posisi, sesuai kebutuhan",
          "Hindari menempatkan pada posisi yang dapat meningkatkan nyeri",
          "Hindari menempatkan stump amputasi pada posisi fleksi",
          "Hindari posisi yang menimbulkan ketegangan pada luka",
          "Minimalkan gesekan dan tarikan saat mengubah posisi",
          "Ubah posisi setiap 2 jam",
          "Ubah posisi dengan Teknik log roll",
          "Pertahankan posisi dan integritas traksi",
          "Informasikan saat akan dilakukan perubahan posisi",
          "Ajarkan cara menggunakan postur yang baik dan mekanika tubuh yang baik selama melakukan perubahan posisi",
          "Kolaborasi pemberian premedikasi sebelum mengubah posisi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penurunan tingkat energi, ketidakmampuan berkonsentrasi, atau gejala lain yang mengganggu kemampuan kognitif",
          "Identifikasi Teknik relaksasi yang pernah efektif digunakan",
          "Identifikasi kesediaan, kemampuan, dan penggunaan Teknik sebelumnya",
          "Periksa ketegangan otot, frekuensi nadi, tekanan darah, dan suhu sebelum dan sesudah Latihan",
          "Monitor respons terhadap terapi relaksasi",
          "Ciptakan lingkungan tenang dan tanpa gangguan dengan pencahayaan dan suhu ruang nyaman, jika memungkinkan",
          "Berikan informasi tertulis tentang persiapan dan prosedur teknik relaksasi",
          "Gunakan pakaian longgar",
          "Gunakan nada suara lembut dengan irama lambat dan berirama",
          "Gunakan relaksasi sebagai strategi penunjang dengan analgetik atau Tindakan medis lain, jika sesuai",
          "Jelaskan tujuan, manfaat, Batasan, dan jenis relaksasi yang tersedia (mis: musik, meditasi, napas dalam, relaksasi otot progresif)",
          "Jelaskan secara rinci intervensi relaksasi yang dipilih",
          "Anjurkan mengambil posisi nyaman",
          "Anjurkan rileks dan merasakan sensasi relaksasi",
          "Anjurkan sering mengulangi atau melatih Teknik yang dipilih",
          "Demonstrasikan dan latih Teknik relaksasi (mis: napas dalam, peregangan, atau imajinasi terbimbing)"
        ]
      }
    }
  ]
},
{
  "id": "0075",
  "slug": "ketidaknyamanan-pasca-partum",
  "kode": "D.0075",
  "nama": "Ketidaknyamanan Pasca Partum",
  "definisi": "Ketidaknyamanan pasca partum merupakan diagnosis keperawatan yang didefinisikan sebagai perasaan tidak nyaman yang berhubungan dengan...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyaman",
    "tidak nyaman",
    "comfort"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh tidak nyaman"
    ],
    "objektif": [
      "Tampak meringis",
      "Terdapat kontraksi uterus",
      "Luka episiotomi",
      "Payudara bengkak"
    ]
  },
  "faktorTerkait": [
    "Trauma perineum selama persalinan dan kelahiran",
    "Involusi uterus, proses pengembalian ukuran Rahim ke ukuran semula",
    "Pembengkakan payudara dimana alveoli mulai terisi ASI",
    "Kekurangan dukungan dari keluarga dan tenaga Kesehatan",
    "Ketidaktepatan posisi duduk",
    "Faktor budaya"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penurunan tingkat energi, ketidakmampuan berkonsentrasi, atau gejala lain yang mengganggu kemampuan kognitif",
          "Identifikasi Teknik relaksasi yang pernah efektif digunakan",
          "Identifikasi kesediaan, kemampuan, dan penggunaan Teknik sebelumnya",
          "Periksa ketegangan otot, frekuensi nadi, tekanan darah, dan suhu sebelum dan sesudah Latihan",
          "Monitor respons terhadap terapi relaksasi",
          "Ciptakan lingkungan tenang dan tanpa gangguan dengan pencahayaan dan suhu ruang nyaman, jika memungkinkan",
          "Berikan informasi tertulis tentang persiapan dan prosedur teknik relaksasi",
          "Gunakan pakaian longgar",
          "Gunakan nada suara lembut dengan irama lambat dan berirama",
          "Gunakan relaksasi sebagai strategi penunjang dengan analgetik atau Tindakan medis lain, jika sesuai",
          "Jelaskan tujuan, manfaat, Batasan, dan jenis relaksasi yang tersedia (mis: musik, meditasi, napas dalam, relaksasi otot progresif)",
          "Jelaskan secara rinci intervensi relaksasi yang dipilih",
          "Anjurkan mengambil posisi nyaman",
          "Anjurkan rileks dan merasakan sensasi relaksasi",
          "Anjurkan sering mengulangi atau melatih Teknik yang dipilih",
          "Demonstrasikan dan latih Teknik relaksasi (mis: napas dalam, peregangan, atau imajinasi terbimbing)"
        ]
      }
    }
  ]
},
{
  "id": "0076",
  "slug": "nausea",
  "kode": "D.0076",
  "nama": "Nausea",
  "definisi": "Nausea merupakan diagnosis keperawatan yang didefinisikan sebagai perasaan tidak nyaman pada bagian belakang tenggorok atau lambung yang...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nausea",
    "mual",
    "muntah"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh mual",
      "Merasa ingin muntah",
      "Tidak berminat makan"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [
    "Gangguan biokimiawi (mis: uremia, ketoasidosis diabetic)",
    "Gangguan pada esofagus",
    "Distensi lambung",
    "Iritasi lambung",
    "Gangguan pankreas",
    "Peregangan kapsul limpa",
    "Tumor terlokalisasi (mis: neuroma akustik, tumor otak primer atau sekunder, metastasis tulang di dasar tengkorak)",
    "Peningkatan tekanan intraabdominal (mis: keganasan intraabdomen)",
    "Peningkatan tekanan intrakranial",
    "Peningkatan tekanan intraorbital (mis: glaukoma)",
    "Mabuk perjalanan",
    "Kehamilan",
    "Aroma tidak sedap",
    "Rasa makanan/minuman yang tidak enak",
    "Stimulus penglihatan tidak menyenangkan",
    "Faktor psikologis (mis: kecemasan, ketakutan, stres)",
    "Efek agen farmakologis",
    "Efek toksin"
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
      "nama": "Manajemen Mual",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pengalaman mual",
          "Identifikasi isyarat nonverbal ketidaknyamanan (mis: bayi, anak-anak, dan mereka yang tidak dapat berkomunikasi secara efektif)",
          "Identifikasi dampak mual terhadap kualitas hidup (mis: nafsu makan, aktivitas, kinerja, tanggung jawab peran, dan tidur)",
          "Identifikasi faktor penyebab mual (mis: pengobatan dan prosedur)",
          "Identifikasi antiemetik untuk mencegah mual (kecuali mual pada kehamilan)",
          "Monitor mual (mis: frekuensi, durasi, dan tingkat keparahan)",
          "Kendalikan faktor lingkungan penyebab mual (mis: bau tidak sedap, suara, dan rangsangan visual yang tidak menyenangkan)",
          "Kurangi atau hilangkan keadaan penyebab mual (mis: kecemasan, ketakutan, kelelahan)",
          "Berikan makanan dalam jumlah kecil dan menarik",
          "Berikan makanan dingin, cairan bening, tidak berbau, dan tidak berwarna, jika perlu",
          "Anjurkan istirahat dan tidur yang cukup",
          "Anjurkan sering membersihkan mulut, kecuali jika merangsang mual",
          "Anjurkan makanan tinggi karbohidrat, dan rendah lemak",
          "Ajarkan penggunaan teknik non farmakologis untuk mengatasi mual (mis: biofeedback, hipnosis, relaksasi, terapi musik, akupresur)",
          "Kolaborasi pemberian obat antiemetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.03118",
      "nama": "Manajemen Muntah",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pengalaman muntah",
          "Identifikasi isyarat nonverbal ketidaknyamanan (mis: bayi, anak-anak, dan mereka yang tidak dapat berkomunikasi secara efektif)",
          "Identifikasi dampak muntah terhadap kualitas hidup (mis: nafsu makan, aktivitas, kinerja, tanggung jawab peran, dan tidur)",
          "Identifikasi faktor penyebab muntah (mis: pengobatan dan prosedur)",
          "Identifikasi antiemetik untuk mencegah muntah (kecuali muntah pada kehamilan)",
          "Monitor muntah (mis: frekuensi, durasi, dan tingkat keparahan)",
          "Kontrol lingkungan penyebab muntah (mis: bau tidak sedap, suara, dan stimulasi visual yang tidak menyenangkan)",
          "Kurangi atau hilangkan keadaan penyebab muntah (mis: kecemasan, ketakutan)",
          "Atur posisi untuk mencegah aspirasi",
          "Pertahankan kepatenan jalan napas",
          "Bersihkan mulut dan hidung",
          "Berikan dukungan fisik saat muntah (mis: membantu membungkuk atau menundukkan kepala)",
          "Berikan kenyamanan selama muntah (mis: kompres dingin di dahi, atau sediakan pakaian kering dan bersih)",
          "Berikan cairan yang tidak mengandung karbonasi minimal 30 menit setelah muntah",
          "Anjurkan membawa kantong plastik untuk menampung muntah",
          "Anjurkan memperbanyak istirahat",
          "Ajarkan penggunaan Teknik non farmakologis untuk mengelola muntah (mis: biofeedback, hipnosis, relaksasi, terapi musik, akupresur)",
          "Kolaborasi pemberian obat antiemetik, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0077",
  "slug": "nyeri-akut",
  "kode": "D.0077",
  "nama": "Nyeri Akut",
  "definisi": "Nyeri akut merupakan diagnosis keperawatan yang didefinisikan sebagai pengalaman sensorik atau emosional yang berkaitan dengan kerusakan...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh nyeri"
    ],
    "objektif": [
      "Tampak meringis",
      "Bersikap protektif (mis: waspada, posisi menghindari nyeri)",
      "Gelisah",
      "Frekuensi nadi meningkat",
      "Sulit tidur"
    ]
  },
  "faktorTerkait": [
    "Agen pencedera fisiologis (mis: inflamasi, iskemia, neoplasma)",
    "Agen pencedera kimiawi (mis: terbakar, bahan kimia iritan)",
    "Agen pencedera fisik (mis: abses, amputasi, terbakar, terpotong, mengangkat berat, prosedur operasi, trauma, Latihan fisik berlebihan)"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.08243",
      "nama": "Pemberian Analgesik",
      "tindakan": {
        "terapeutik": [
          "Identifikasi karakteristik nyeri (mis: pencetus, pereda, kualitas, lokasi, intensitas, frekuensi, durasi)",
          "Identifikasi Riwayat alergi  obat",
          "Identifikasi kesesuaian jenis analgesik (mis: narkotika, non-narkotik, atau NSAID) dengan tingkat keparahan nyeri",
          "Monitor tanda-tanda vital sebelum dan sesudah pemberian analgesik",
          "Monitor efektifitas analgesik",
          "Diskusikan jenis analgesik yang disukai untuk mencapai analgesia optimal, jika perlu",
          "Pertimbangkan penggunaan infus kontinu, atau bolus opioid untuk mempertahankan kadar dalam serum",
          "Tetapkan target efektifitas analgesik untuk mengoptimalkan respons pasien",
          "Dokumentasikan respons terhadap efek analgesik dan efek yang tidak diinginkan",
          "Jelaskan efek terapi dan efek samping obat",
          "Kolaborasi pemberian dosis dan jenis analgesik, sesuai indikasi"
        ]
      }
    }
  ]
},
{
  "id": "0078",
  "slug": "nyeri-kronis",
  "kode": "D.0078",
  "nama": "Nyeri Kronis",
  "definisi": "Nyeri kronis merupakan diagnosis keperawatan yang didefinisikan sebagai pengalaman sensorik atau emosional yang berkaitan dengan...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh nyeri",
      "Merasa depresi (tertekan)"
    ],
    "objektif": [
      "Tampak meringis",
      "Gelisah",
      "Tidak mampu menuntaskan aktivitas"
    ]
  },
  "faktorTerkait": [
    "Kondisi muskuloskeletal kronis",
    "Kerusakan sistem saraf",
    "Penekanan saraf",
    "Infiltrasi tumor",
    "Ketidakseimbangan neurotransmiter, neuromodulator, dan reseptor",
    "Gangguan imunitas (mis: neuropati terkait HIV, virus varicella-zoster)",
    "Gangguan fungsi metabolik",
    "Riwayat posisi kerja statis",
    "Peningkatan indeks massa tubuh",
    "Kondisi pasca trauma",
    "Tekanan emosional",
    "Riwayat penganiayaan (mis: fisik, psikologis, seksual)",
    "Riwayat penyalahgunaan obat/zat"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.08245",
      "nama": "Perawatan kenyamanan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gejala yang tidak menyenangkan (mis: mual, nyeri, gatal, sesak)",
          "Identifikasi pemahaman tentang kondisi, situasi dan perasaannya",
          "Identifikasi masalah emosional dan spiritual",
          "Berikan posisi yang nyaman",
          "Berikan kompres dingin atau hangat",
          "Ciptakan lingkungan yang nyaman",
          "Berikan pemijatan",
          "Berikan terapi akupresur",
          "Berikan terapi hipnosis",
          "Dukung keluarga dan pengasuh terlibat dalam terapi/pengobatan",
          "Diskusikan mengenai situasi dan pilihan terapi/pengobatan yang diinginkan",
          "Jelaskan mengenai kondisi dan pilihan terapi/pengobatan",
          "Ajarkan terapi relaksasi",
          "Ajarkan Latihan pernapasan",
          "Ajarkan Teknik distraksi dan imajinasi terbimbing",
          "Kolaborasi pemberian analgesik, antipruritus, antihistamin, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penurunan tingkat energi, ketidakmampuan berkonsentrasi, atau gejala lain yang mengganggu kemampuan kognitif",
          "Identifikasi Teknik relaksasi yang pernah efektif digunakan",
          "Identifikasi kesediaan, kemampuan, dan penggunaan Teknik sebelumnya",
          "Periksa ketegangan otot, frekuensi nadi, tekanan darah, dan suhu sebelum dan sesudah Latihan",
          "Monitor respons terhadap terapi relaksasi",
          "Ciptakan lingkungan tenang dan tanpa gangguan dengan pencahayaan dan suhu ruang nyaman, jika memungkinkan",
          "Berikan informasi tertulis tentang persiapan dan prosedur teknik relaksasi",
          "Gunakan pakaian longgar",
          "Gunakan nada suara lembut dengan irama lambat dan berirama",
          "Gunakan relaksasi sebagai strategi penunjang dengan analgetik atau Tindakan medis lain, jika sesuai",
          "Jelaskan tujuan, manfaat, Batasan, dan jenis relaksasi yang tersedia (mis: musik, meditasi, napas dalam, relaksasi otot progresif)",
          "Jelaskan secara rinci intervensi relaksasi yang dipilih",
          "Anjurkan mengambil posisi nyaman",
          "Anjurkan rileks dan merasakan sensasi relaksasi",
          "Anjurkan sering mengulangi atau melatih Teknik yang dipilih",
          "Demonstrasikan dan latih Teknik relaksasi (mis: napas dalam, peregangan, atau imajinasi terbimbing)"
        ]
      }
    }
  ]
},
{
  "id": "0079",
  "slug": "nyeri-melahirkan",
  "kode": "D.0079",
  "nama": "Nyeri Melahirkan",
  "definisi": "Nyeri melahirkan merupakan diagnosis keperawatan yang didefinisikan sebagai pengalaman sensorik atau emosional yang bervariasi dari...",
  "kategori": "Nyeri dan Kenyamanan",
  "tipe": "Aktual",
  "keluhan": [
    "nyeri",
    "sakit",
    "perih",
    "sakit"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh nyeri",
      "Perineum terasa tertekan"
    ],
    "objektif": [
      "Ekspresi wajah meringis",
      "Berposisi meringankan nyeri",
      "Uterus teraba membulat"
    ]
  },
  "faktorTerkait": [
    "Dilatasi serviks",
    "Pengeluaran janin"
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
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.01019",
      "nama": "Pengaturan Posisi",
      "tindakan": {
        "terapeutik": [
          "Monitor status oksigenasi sebelum dan sesudah mengubah posisi",
          "Monitor alat traksi agar selalu tepat",
          "Tempatkan pada matras/tempat tidur terapeutik yang tepat",
          "Tempatkan pada posisi terapeutik",
          "Tempatkan objek yang sering digunakan dalam jangkauan",
          "Tempatkan bel atau lampu panggilan dalam jangkauan",
          "Sediakan matras yang kokoh/padat",
          "Atur posisi tidur yang disukai, jika tidak kontraindikasi",
          "Atur posisi untuk mengurangi sesak (mis: semi-fowler)",
          "Atur posisi yang meningkatkan drainage",
          "Posisikan pada kesejajaran tubuh yang tepat",
          "Imobilisasi dan topang bagian tubuh yang cidera dengan tepat",
          "Tinggikan bagian tubuh yang sakit dengan tepat",
          "Tinggikan anggota gerak 20° atau lebih diatas level jantung",
          "Tinggikan tempat tidur bagian kepala",
          "Berikan bantal yang tepat pada leher",
          "Berikan topangan pada area edema (mis: bantal dibawah lengan atau skrotum)",
          "Posisikan untuk mempermudah ventilasi/perfusi (mis: tengkurap/good lung down)",
          "Motivasi melakukan ROM aktif atau ROM pasif",
          "Motivasi terlibat dalam perubahan posisi, sesuai kebutuhan",
          "Hindari menempatkan pada posisi yang dapat meningkatkan nyeri",
          "Hindari menempatkan stump amputasi pada posisi fleksi",
          "Hindari posisi yang menimbulkan ketegangan pada luka",
          "Minimalkan gesekan dan tarikan saat mengubah posisi",
          "Ubah posisi setiap 2 jam",
          "Ubah posisi dengan Teknik log roll",
          "Pertahankan posisi dan integritas traksi",
          "Informasikan saat akan dilakukan perubahan posisi",
          "Ajarkan cara menggunakan postur yang baik dan mekanika tubuh yang baik selama melakukan perubahan posisi",
          "Kolaborasi pemberian premedikasi sebelum mengubah posisi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penurunan tingkat energi, ketidakmampuan berkonsentrasi, atau gejala lain yang mengganggu kemampuan kognitif",
          "Identifikasi Teknik relaksasi yang pernah efektif digunakan",
          "Identifikasi kesediaan, kemampuan, dan penggunaan Teknik sebelumnya",
          "Periksa ketegangan otot, frekuensi nadi, tekanan darah, dan suhu sebelum dan sesudah Latihan",
          "Monitor respons terhadap terapi relaksasi",
          "Ciptakan lingkungan tenang dan tanpa gangguan dengan pencahayaan dan suhu ruang nyaman, jika memungkinkan",
          "Berikan informasi tertulis tentang persiapan dan prosedur teknik relaksasi",
          "Gunakan pakaian longgar",
          "Gunakan nada suara lembut dengan irama lambat dan berirama",
          "Gunakan relaksasi sebagai strategi penunjang dengan analgetik atau Tindakan medis lain, jika sesuai",
          "Jelaskan tujuan, manfaat, Batasan, dan jenis relaksasi yang tersedia (mis: musik, meditasi, napas dalam, relaksasi otot progresif)",
          "Jelaskan secara rinci intervensi relaksasi yang dipilih",
          "Anjurkan mengambil posisi nyaman",
          "Anjurkan rileks dan merasakan sensasi relaksasi",
          "Anjurkan sering mengulangi atau melatih Teknik yang dipilih",
          "Demonstrasikan dan latih Teknik relaksasi (mis: napas dalam, peregangan, atau imajinasi terbimbing)"
        ]
      }
    }
  ]
},
{
  "id": "0080",
  "slug": "ansietas",
  "kode": "D.0080",
  "nama": "Ansietas",
  "definisi": "Ansietas merupakan diagnosis keperawatan yang didefinisikan sebagai kondisi emosi dan pengalaman subyektif individu terhadap objek yang...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ansietas",
    "cemas",
    "cemas",
    "khawatir"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa bingung",
      "Merasa khawatir dengan akibat dari kondisi yang dihadapi",
      "Sulit berkonsentasi"
    ],
    "objektif": [
      "Tampak gelisah",
      "Tampak tegang",
      "Sulit tidur"
    ]
  },
  "faktorTerkait": [
    "Krisis situasional",
    "Kebutuhan tidak terpenuhi",
    "Krisis maturasional",
    "Ancaman terhadap konsep diri",
    "Ancaman terhadap kematian",
    "Kekhawatiran mengalami kegagalan",
    "Disfungsi sistem keluarga",
    "Hubungan orang tua-anak tidak memuaskan",
    "Faktor keturunan (temperamen mudah teragitasi sejak lahir)",
    "Penyalahgunaan zat",
    "Terpapar bahaya lingkungan (mis: toksin, polutan, dan lain-lain)",
    "Kurang terpapar informasi"
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
      "nama": "Reduksi Ansietas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi saat tingkat ansietas berubah (mis: kondisi, waktu, stresor)",
          "Identifikasi kemampuan mengambil keputusan",
          "Monitor tanda-tanda ansietas (verbal dan nonverbal)",
          "Ciptakan suasana terapeutik untuk menumbuhkan kepercayaan",
          "Temani pasien untuk mengurangi kecemasan, jika memungkinkan",
          "Pahami situasi yang membuat ansietas",
          "Dengarkan dengan penuh perhatian",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Tempatkan barang pribadi yang memberikan kenyamanan",
          "Motivasi mengidentifikasi situasi yang memicu kecemasan",
          "Diskusikan perencanaan realistis tentang peristiwa yang akan datang",
          "Jelaskan prosedur, termasuk sensasi yang mungkin dialami",
          "Informasikan secara faktual mengenai diagnosis, pengobatan, dan prognosis",
          "Anjurkan keluarga untuk tetap Bersama pasien, jika perlu",
          "Anjurkan melakukan kegiatan yang tidak kompetitif, sesuai kebutuhan",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Latih kegiatan pengalihan untuk mengurangi ketegangan",
          "Latih penggunaan mekanisme pertahanan diri yang tepat",
          "Latih Teknik relaksasi",
          "Kolaborasi pemberian obat antiansietas, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09326",
      "nama": "Terapi relaksasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penurunan tingkat energi, ketidakmampuan berkonsentrasi, atau gejala lain yang mengganggu kemampuan kognitif",
          "Identifikasi Teknik relaksasi yang pernah efektif digunakan",
          "Identifikasi kesediaan, kemampuan, dan penggunaan Teknik sebelumnya",
          "Periksa ketegangan otot, frekuensi nadi, tekanan darah, dan suhu sebelum dan sesudah Latihan",
          "Monitor respons terhadap terapi relaksasi",
          "Ciptakan lingkungan tenang dan tanpa gangguan dengan pencahayaan dan suhu ruang nyaman, jika memungkinkan",
          "Berikan informasi tertulis tentang persiapan dan prosedur teknik relaksasi",
          "Gunakan pakaian longgar",
          "Gunakan nada suara lembut dengan irama lambat dan berirama",
          "Gunakan relaksasi sebagai strategi penunjang dengan analgetik atau Tindakan medis lain, jika sesuai",
          "Jelaskan tujuan, manfaat, Batasan, dan jenis relaksasi yang tersedia (mis: musik, meditasi, napas dalam, relaksasi otot progresif)",
          "Jelaskan secara rinci intervensi relaksasi yang dipilih",
          "Anjurkan mengambil posisi nyaman",
          "Anjurkan rileks dan merasakan sensasi relaksasi",
          "Anjurkan sering mengulangi atau melatih Teknik yang dipilih",
          "Demonstrasikan dan latih Teknik relaksasi (mis: napas dalam, peregangan, atau imajinasi terbimbing)"
        ]
      }
    }
  ]
},
{
  "id": "0081",
  "slug": "berduka",
  "kode": "D.0081",
  "nama": "Berduka",
  "definisi": "Berduka merupakan diagnosis keperawatan yang didefinisikan sebagai respon psikososial yang ditunjukkan oleh klien akibat kehilangan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "berduka",
    "kematian",
    "kehilangan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa sedih",
      "Merasa bersalah atau menyalahkan orang lain",
      "Tidak menerima kehilangan",
      "Merasa tidak ada harapan"
    ],
    "objektif": [
      "Menangis",
      "Pola tidur berubah",
      "Tidak mampu berkonsentrasi"
    ]
  },
  "faktorTerkait": [
    "Kematian keluarga atau orang yang berarti",
    "Antisipasi kematian keluarga atau orang yang berarti",
    "Kehilangan (objek, pekerjaan, fungsi, status, bagian tubuh, hubungan sosial)",
    "Antisipasi kehilangan (objek, pekerjaan, fungsi, status, bagian tubuh, hubungan sosial)"
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
      "nama": "Dukungan Proses Berduka",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kehilangan yang dihadapi",
          "Identifikasi proses berduka yang dialami",
          "Identifikasi sifat keterikatan pada benda yang hilang atau orang yang meninggal",
          "Identifikasi reaksi awal terhadap kehilangan",
          "Tunjukan sikap menerima dan empati",
          "Motivasi agar mau mengungkapkan perasaan kehilangan",
          "Motivasi untuk menguatkan dukungan  keluarga atau orang terdekat",
          "Fasilitasi melakukan kebiasaan sesuai dengan budaya, agama, dan norma sosial",
          "Fasilitasi mengekspresikan perasaan dengan cara yang nyaman (mis: membaca buku, menulis, menggambar, atau bermain)",
          "Diskusikan strategi koping yang dapat digunakan",
          "Jelaskan kepada pasien dan keluarga bahwa sikap mengingkari, marah, tawar menawar, depresi, dan menerima adalah wajar dalam menghadapi kehilangan",
          "Anjurkan mengidentifikasi ketakutan terbesar pada kehilangan",
          "Anjurkan mengekspresikan perasaan tentang kehilangan",
          "Ajarkan melewati proses berduka secara bertahap"
        ]
      }
    },
    {
      "kode": "I.09256",
      "nama": "Dukungan Emosional",
      "tindakan": {
        "terapeutik": [
          "Identifikasi fungsi marah, frustrasi, dan amuk bagi pasien",
          "Identifikasi hal yang telah memicu emosi",
          "Fasilitasi mengungkapkan perasaan cemas, marah, atau sedih",
          "Buat pernyataan suportif atau empati selama fase berduka",
          "Lakukan sentuhan untuk memberikan dukungan (mis: merangkul, menepuk-nepuk)",
          "Tetap Bersama pasien dan pastikan keamanan selama ansietas, jika perlu",
          "Kurangi tuntutan berpikir saat sakit atau lelah",
          "Jelaskan konsekuensi tidak menghadapi rasa bersalah dan malu",
          "Anjurkan mengungkapkan perasaan yang dialami (mis: ansietas, marah, sedih)",
          "Anjurkan mengungkapkan pengalaman emosional sebelumnya dan pola respons yang biasa digunakan",
          "Ajarkan penggunaan mekanisme pertahanan yang tepat",
          "Rujuk untuk konseling, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0082",
  "slug": "distres-spiritual",
  "kode": "D.0082",
  "nama": "Distres Spiritual",
  "definisi": "Distres spiritual merupakan diagnosis keperawatan yang didefinisikan sebagai gangguan pada keyakinan atau sistem nilai berupa kesulitan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "spiritual",
    "agama",
    "ibadah"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mempertanyakan makna/tujuan hidupnya",
      "Menyatakan hidupnya terasa tidak/kurang bermakna",
      "Merasa menderita/tidak berdaya"
    ],
    "objektif": [
      "Tidak mampu beribadah",
      "Marah pada Tuhan"
    ]
  },
  "faktorTerkait": [
    "Menjelang ajal",
    "Kondisi penyakit kronis",
    "Kematian orang terdekat",
    "Perubahan pola hidup",
    "Kesepian",
    "Pengasingan diri",
    "Pengasingan sosial",
    "Gangguan sosio-kultural",
    "Peningkatan ketergantungan dengan orang lain",
    "Kejadian hidup yang tidak diharapkan"
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
      "nama": "Dukungan Spiritual",
      "tindakan": {
        "terapeutik": [
          "Identifikasi perasaan khawatir, kesepian, dan ketidakberdayaan",
          "Identifikasi pandangan tentang hubungan antara spiritual dan  Kesehatan",
          "Identifikasi harapan dan kekuatan pasien",
          "Identifikasi ketaatan dalam beragama",
          "Berikan kesempatan mengekspresikan perasaan tentang penyakit dan kematian",
          "Berikan kesempatan mengekspresikan dan meredakan marah secara tepat",
          "Yakinkan bahwa  perawat bersedia mendukung selama masa ketidakberdayaan",
          "Sediakan privasi dan waktu tentang untuk aktivitas spiritual",
          "Diskusikan keyakinan tentang makna dan tujuan hidup, jika perlu",
          "Fasilitasi melakukan kegiatan ibadah",
          "Anjurkan berinteraksi dengan keluarga, teman, dan/atau orang lain",
          "Anjurkan berpartisipasi dalam kelompok pendukung",
          "Ajarkan metode relaksasi, meditasi, dan imajinasi terbimbing",
          "Atur kunjungan dengan rohaniawan (mis: uztadz, pendeta, romo, biksu)"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0083",
  "slug": "gangguan-citra-tubuh",
  "kode": "D.0083",
  "nama": "Gangguan Citra Tubuh",
  "definisi": "Gangguan citra tubuh merupakan diagnosis keperawatan yang didefinisikan sebagai perubahan persepsi tentang penampilan, struktur, dan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "citra tubuh",
    "body image",
    "penampilan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan kecacatan/kehilangan bagian tubuh"
    ],
    "objektif": [
      "Kehilangan bagian tubuh",
      "Fungsi/struktur tubuh berubah/hilang"
    ]
  },
  "faktorTerkait": [
    "Perubahan struktur/bentuk tubuh (mis: amputasi, trauma, luka bakar, obesitas, jerawat)",
    "Perubahan fungsi tubuh (mis: proses penyakit, kehamilan, kelumpuhan)",
    "Perubahan fungsi kognitif",
    "Ketidaksesuaian budaya, keyakinan, atau sistem nilai",
    "Transisi perkembangan",
    "Gangguan psikososial",
    "Efek Tindakan/pengobatan (mis: pembedahan, kemoterapi, terapi radiasi)"
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
      "nama": "Promosi Citra Tubuh",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan citra tubuh berdasarkan tahap perkembangan",
          "Identifikasi budaya, agama, jenis kelamin, dan umur terkait citra tubuh",
          "Identifikasi perubahan citra tubuh yang mengakibatkan isolasi sosial",
          "Monitor frekuensi pernyataan kritik terhadap diri sendiri",
          "Monitor apakah pasien bisa melihat bagian tubuh yang berubah",
          "Diskusikan perubahan tubuh dan fungsinya",
          "Diskusikan perbedaan penampilan fisik terhadap harga diri",
          "Diskusikan perubahan akibat pubertas, kehamilan, dan penuaan",
          "Diskusikan kondisi stress yang mempengaruhi citra tubuh (mis: luka, penyakit, pembedahan)",
          "Diskusikan cara mengembangkan harapan citra tubuh secara realistis",
          "Diskusikan persepsi pasien dan keluarga tentang perubahan citra tubuh",
          "Jelaskan kepada keluarga tentang perawatan perubahan citra tubuh",
          "Anjurkan mengungkapkan gambaran diri sendiri terhadap citra tubuh",
          "Anjurkan menggunakan alat bantu (mis: pakaian, wig, kosmetik)",
          "Anjurkan mengikuti kelompok pendukung (mis: kelompok sebaya)",
          "Latih fungsi tubuh yang dimiliki",
          "Latih peningkatan penampilan diri (mis: berdandan)",
          "Latih pengungkapan kemampuan diri kepada orang lain maupun kelompok"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0084",
  "slug": "gangguan-identitas-diri",
  "kode": "D.0084",
  "nama": "Gangguan Identitas Diri",
  "definisi": "Gangguan identitas diri merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan mempertahankan keutuhan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "identitas",
    "diri",
    "kepribadian"
  ],
  "tandaGejala": {
    "subjektif": [
      "Persepsi terhadap diri berubah",
      "Bingung dengan nilai-nilai budaya, tujuan hidup, jenis kelamin, dan/atau nilai-nilai ideal",
      "Perasaan yang fluktuatif terhadap diri"
    ],
    "objektif": [
      "Perilaku tidak konsisten",
      "Hubungan yang tidak efektif",
      "Strategi koping tidak efektif",
      "Penampilan peran tidak efektif"
    ]
  },
  "faktorTerkait": [
    "Gangguan peran sosial",
    "Tidak terpenuhinya tugas perkembangan",
    "Gangguan neurologis",
    "Ketidakadekuatan stimulasi sensori"
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
      "nama": "Orientasi Realita",
      "tindakan": {
        "terapeutik": [
          "Monitor perubahan orientasi",
          "Monitor perubahan kognitif dan perilaku",
          "Perkenalkan nama saat memulai interaksi",
          "Orientasikan orang, tempat, dan waktu",
          "Hadirkan realita (mis: beri penjelasan alternatif, hindari perdebatan)",
          "Sediakan lingkungan dan rutinitas secara konsisten",
          "Atur stimulus sensorik dan lingkungan (mis: kunjungan, pemandangan, suara, pencahayaan, bau, dan sentuhan)",
          "Gunakan simbol dalam mengorientasikan lingkungan (mis: tanda, gambar, warna)",
          "Libatkan dalam terapi kelompok orientasi",
          "Berikan waktu istirahat dan tidur yang cukup, sesuai kebutuhan",
          "Fasilitasi akses informasi (mis: televisi, surat kabad, radio), jika perlu",
          "Anjurkan perawatan diri secara mandiri",
          "Anjurkan penggunaan alat bantu (mis: kacamata, alat bantu dengar, gigi palsu)",
          "Ajarkan keluarga dalam perawatan orientasi lansia"
        ]
      }
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0085",
  "slug": "gangguan-persepsi-sensori",
  "kode": "D.0085",
  "nama": "Gangguan Persepsi Sensori",
  "definisi": "Gangguan persepsi sensori merupakan diagnosis keperawatan yang didefinisikan sebagai perubahan persepsi terhadap stimulus baik internal...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "persepsi",
    "sensori",
    "indra"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mendengar suara bisikan atau melihat bayangan",
      "Merasakan sesuatu melalui indera penciuman, perabaan, atau pengecapan"
    ],
    "objektif": [
      "Distorsi sensori",
      "Respons tidak sesuai",
      "Bersikap seolah melihat, mendengar, mengecap, meraba, atau mencium sesuatu"
    ]
  },
  "faktorTerkait": [
    "Gangguan penglihatan",
    "Gangguan pendengaran",
    "Gangguan penghiduan",
    "Gangguan perabaan",
    "Hipoksia serebral",
    "Penyalahgunaan zat",
    "Usia lanjut",
    "Pemajanan toksin lingkungan"
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
      "nama": "Manajemen Halusinasi",
      "tindakan": {
        "terapeutik": [
          "Monitor perilaku yang mengindikasikan halusinasi",
          "Monitor dan sesuaikan tingkat aktivitas dan stimulasi lingkungan",
          "Monitor isi halusinasi (mis: kekerasan atau membahayakan diri)",
          "Pertahankan lingkungan yang aman",
          "Lakukan Tindakan keselamatan Ketika tidak dapat mengontrol perilaku (mis: limit setting, pembatasan wilayah, pengekangan fisik, seklusi)",
          "Diskusikan perasaan dan respons terhadap halusinasi",
          "Hindari perdebatan tentang validitas halusinasi",
          "Anjurkan memonitor sendiri situasi terjadinya halusinasi",
          "Anjurkan bicara pada orang yang dipercaya untuk memberi dukungan dan umpan balik korektif terhadap halusinasi",
          "Anjurkan melakukan distraksi (mis: mendengarkan music, melakukan aktivitas dan Teknik relaksasi)",
          "Ajarkan pasien dan keluarga cara mengontrol halusinasi",
          "Kolaborasi pemberian obat antipsikotik dan antiansietas, jika perlu"
        ]
      }
    },
    {
      "kode": "I.08241",
      "nama": "Minimalisasi Rangsangan",
      "tindakan": {
        "terapeutik": [
          "Periksa status mental, status sensori, dan tingkat kenyamanan (mis: nyeri, kelelahan)",
          "Diskusikan tingkat toleransi terhadap beban sensori (mis: bising, terlalu terang)",
          "Batasi stimulus lingkungan (mis: cahaya, suara, aktivitas)",
          "Jadwalkan aktivitas harian dan waktu istirahat",
          "Kombinasikan prosedur/Tindakan dalam satu waktu, sesuai kebutuhan",
          "Ajarkan cara meminimalisasi stimulus (mis: mengatur pencahayaan ruangan, mengurangi kebisingan, membatasi kunjungan)",
          "Kolaborasi dalam meminimalkan prosedur/tindakan",
          "Kolaborasi pemberian obat yang mempengaruhi persepsi stimulus"
        ]
      }
    },
    {
      "kode": "I.09301",
      "nama": "Pengekangan Kimiawi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan untuk dilakukan pengekangan (mis: agitasi, kekerasan)",
          "Monitor Riwayat pengobatan dan alergi",
          "Monitor respon sebelum dan sesudah pengekangan",
          "Monitor tingkat kesadaran, tanda-tanda vital, warna kulit, suhu, sensasi dan kondisi secara berkala",
          "Monitor kebutuhan nutrisi, cairan, dan eliminasi",
          "Lakukan supervisi dan survelensi dalam memonitor Tindakan",
          "Beri posisi nyaman untuk mencegah aspirasi dan kerusakan kulit",
          "Ubah posisi tubuh secara periodik",
          "Libatkan pasien dan/atau keluarga dalam membuat keputusan",
          "Jelaskan tujuan dan prosedur pengekangan",
          "Latih rentang gerak sendi sesuai kondisi pasien",
          "Kolaborasi pemberian agen psikotropika untuk pengekangan kimiawi"
        ]
      }
    }
  ]
},
{
  "id": "0086",
  "slug": "harga-diri-rendah-kronis",
  "kode": "D.0086",
  "nama": "Harga Diri Rendah Kronis",
  "definisi": "Harga diri rendah kronis merupakan diagnosis keperawatan yang didefinisikan sebagai evaluasi atau perasaan negatif terhadap...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menilai diri negatif (mis: tidak berguna, tidak tertolong)",
      "Merasa malu/bersalah",
      "Merasa tidak mampu melakukan apapun",
      "Meremehkan kemampuan mengatasi masalah kehilangan",
      "Merasa tidak memiliki kelebihan atau kemampuan positif",
      "Melebih-lebihkan penilaian negatif tentang diri sendiri",
      "Menolak menilaian positif tentang diri sendiri"
    ],
    "objektif": [
      "Enggan mencoba hal baru",
      "Berjalan menunduk",
      "Postur tubuh menunduk"
    ]
  },
  "faktorTerkait": [
    "Terpapar situasi traumatis",
    "Kegagalan berulang",
    "Kurangnya pengakuan dari orang lain",
    "Ketidakefektifan mengatasi masalah kehilangan",
    "Gangguan psikiatri",
    "Penguatan negatif berulang",
    "Ketidaksesuaian budaya"
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
      "nama": "Manajemen Perilaku",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan untuk mengendalikan perilaku",
          "Diskusikan tanggung jawab terhadap perilaku",
          "Jadwalkan kegiatan terstruktur",
          "Ciptakan dan pertahankan lingkungan dan kegiatan perawatan konsisten setiap dinas",
          "Tingkatkan aktivitas fisik sesuai kemampuan",
          "Batasi jumlah pengunjung",
          "Bicara dengan nada rendah dan tenang",
          "Lakukan kegiatan pengalihan terhadap sumber agitasi",
          "Cegah perilaku pasif dan agresif",
          "Beri penguatan positif terhadap keberhasilan mengendalikan perilaku",
          "Lakukan pengekangan fisik sesuai indikasi",
          "Hindari bersikap menyudutkan dan menghentikan pembicaraan",
          "Hindari sikap mengancam atau berdebat",
          "Hindari berdebat atau menawar batas perilaku yang telah ditetapkan",
          "Informasikan keluarga bahwa keluarga sebagai dasar pembentukan kognitif"
        ]
      }
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0087",
  "slug": "harga-diri-rendah-situasional",
  "kode": "D.0087",
  "nama": "Harga Diri Rendah Situasional",
  "definisi": "Harga diri rendah situasional merupakan diagnosis keperawatan yang didefinisikan sebagai evaluasi atau perasaan negatif terhadap...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menilai diri negatif (mis: tidak berguna, tidak tertolong)",
      "Merasa malu/bersalah",
      "Melebih-lebihkan penilaian negatif tentang diri sendiri",
      "Menolak menilaian positif tentang diri sendiri"
    ],
    "objektif": [
      "Berbicara pelan dan lirih",
      "Menolak berinteraksi dengan orang lain",
      "Berjalan menunduk",
      "Postur tubuh menunduk"
    ]
  },
  "faktorTerkait": [
    "Perubahan pada citra tubuh",
    "Perubahan peran sosial",
    "Ketidakadekuatan pemahaman",
    "Perilaku tidak konsisten dengan nilai",
    "Kegagalan hidup berulang",
    "Riwayat kehilangan",
    "Riwayat penolakan",
    "Transisi perkembangan"
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
      "nama": "Manajemen Perilaku",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan untuk mengendalikan perilaku",
          "Diskusikan tanggung jawab terhadap perilaku",
          "Jadwalkan kegiatan terstruktur",
          "Ciptakan dan pertahankan lingkungan dan kegiatan perawatan konsisten setiap dinas",
          "Tingkatkan aktivitas fisik sesuai kemampuan",
          "Batasi jumlah pengunjung",
          "Bicara dengan nada rendah dan tenang",
          "Lakukan kegiatan pengalihan terhadap sumber agitasi",
          "Cegah perilaku pasif dan agresif",
          "Beri penguatan positif terhadap keberhasilan mengendalikan perilaku",
          "Lakukan pengekangan fisik sesuai indikasi",
          "Hindari bersikap menyudutkan dan menghentikan pembicaraan",
          "Hindari sikap mengancam atau berdebat",
          "Hindari berdebat atau menawar batas perilaku yang telah ditetapkan",
          "Informasikan keluarga bahwa keluarga sebagai dasar pembentukan kognitif"
        ]
      }
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0088",
  "slug": "keputusasaan",
  "kode": "D.0088",
  "nama": "Keputusasaan",
  "definisi": "Keputusasaan merupakan diagnosis keperawatan yang didefinisikan sebagai kondisi individu yang memandang adanya keterbatasan atau...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "keputusasaan",
    "putus asa",
    "hopeless"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan keputusasaan"
    ],
    "objektif": [
      "Berperilaku pasif"
    ]
  },
  "faktorTerkait": [
    "Stres jangka Panjang",
    "Penurunan kondisi fisiologis",
    "Kehilangan kepercayaan pada kekuatan spiritual",
    "Kehilangan kepercayaan pada nilai-nilai penting",
    "Pembatasan aktivitas jangka Panjang",
    "Pengasingan"
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
      "nama": "Dukungan Emosional",
      "tindakan": {
        "terapeutik": [
          "Identifikasi fungsi marah, frustrasi, dan amuk bagi pasien",
          "Identifikasi hal yang telah memicu emosi",
          "Fasilitasi mengungkapkan perasaan cemas, marah, atau sedih",
          "Buat pernyataan suportif atau empati selama fase berduka",
          "Lakukan sentuhan untuk memberikan dukungan (mis: merangkul, menepuk-nepuk)",
          "Tetap Bersama pasien dan pastikan keamanan selama ansietas, jika perlu",
          "Kurangi tuntutan berpikir saat sakit atau lelah",
          "Jelaskan konsekuensi tidak menghadapi rasa bersalah dan malu",
          "Anjurkan mengungkapkan perasaan yang dialami (mis: ansietas, marah, sedih)",
          "Anjurkan mengungkapkan pengalaman emosional sebelumnya dan pola respons yang biasa digunakan",
          "Ajarkan penggunaan mekanisme pertahanan yang tepat",
          "Rujuk untuk konseling, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09307",
      "nama": "Promosi Harapan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan pasien dan keluarga dalam pencapaian hidup",
          "Sadarkan bahwa kondisi yang dialami memiliki nilai penting",
          "Pandu mengingat Kembali kenangan yang menyenangkan",
          "Libatkan pasien secara aktif dalam perawatan",
          "Kembangkan rencana perawatan yang melibatkan tingkat pencapaian tujuan sederhana sampai dengan kompleks",
          "Berikan kesempatan kepada pasien dan keluarga terlibat dengan dukungan kelompok",
          "Ciptakan lingkungan yang memudahkan mempraktikkan kebutuhan spiritual",
          "Anjurkan mengungkapkan perasaan terhdap kondisi dengan realistis",
          "Anjurkan mempertahankan hubungan (mis: menyebutkan nama orang yang dicintai)",
          "Anjurkan mempertahankan hubungan terapeutik dengan orang lain",
          "Latih menyusun tujuan yang sesuai dengan harapan",
          "Latih cara mengembangkan spiritual diri",
          "Latih cara mengenang dan menikmati masa lalu (mis: prestasi, pengalaman)"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0089",
  "slug": "kesiapan-peningkatan-konsep-diri",
  "kode": "D.0089",
  "nama": "Kesiapan Peningkatan Konsep Diri",
  "definisi": "Kesiapan peningkatan konsep diri merupakan diagnosis keperawatan yang didefinisikan sebagai pola persepsi diri yang cukup untuk merasa...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Mengekspresikan keinginan untuk meningkatkan konsep diri",
      "Mengekspresikan kepuasan dengan diri, harga diri, penampulan peran, citra tubuh, dan identitas pribadi"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0090",
  "slug": "kesiapan-peningkatan-koping-keluarga",
  "kode": "D.0090",
  "nama": "Kesiapan Peningkatan Koping Keluarga",
  "definisi": "Kesiapan peningkatan koping keluarga merupakan diagnosis keperawatan yang didefinisikan sebagai pola adaptasi anggota keluarga dalam...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Anggota keluarga menetapkan tujuan untuk meningkatkan gaya hidup sehat",
      "Anggota keluarga menetapkan sasaran untuk meningkatkan kesehatan"
    ],
    "objektif": [
      "Tidak tersedia"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Dukungan Koping Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respons emosional terhadap kondisi saat ini",
          "Identifikasi beban prognosis secara psikologis",
          "Identifikasi pemahaman tentang keputusan perawatan setelah pulang",
          "Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga kesehatan",
          "Dengarkan masalah, perasaan, dan pertanyaan keluarga",
          "Terima nilai-nilai keluarga dengan cara yang tidak menghakimi",
          "Diskusikan rencana medis dan perawatan",
          "Fasilitasi pengungkapan perasaan antara pasien dan  keluarga atau antar anggota keluarga",
          "Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu",
          "Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai",
          "Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)",
          "Fasilitasi anggota keluarga melalui proses kematian dan berduka, jika perlu",
          "Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien",
          "Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan",
          "Hargai dan dukung mekanisme koping adaptif yang digunakan",
          "Berikan kesempatan berkunjung bagi anggota keluarga",
          "Informasikan kemajuan pasien secara berkala",
          "Informasikan fasilitas perawatan  Kesehatan yang tersedia",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.14525",
      "nama": "Pelibatan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan keluarga untuk terlibat dalam perawatan",
          "Ciptakan hubungan terapeutik pasien dengan keluarga dalam perawatan",
          "Diskusikan cara perawatan di rumah (mis: kelompok, perawatan di rumah, atau rumah singgah)",
          "Motivasi keluarga mengembangkan aspek positif rencana perawatan",
          "Fasilitasi keluarga membuat keputusan perawatan",
          "Jelaskan kondisi pasien kepada keluarga",
          "Informasikan tingkat ketergantungan pasien kepada keluarga",
          "Informasikan harapan pasien kepada keluarga",
          "Anjurkan keluarga bersikap asertif dalam perawatan",
          "Anjurkan keluarga terlibat dalam perawatan"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0091",
  "slug": "kesiapan-peningkatan-koping-komunitas",
  "kode": "D.0091",
  "nama": "Kesiapan Peningkatan Koping Komunitas",
  "definisi": "Kesiapan peningkatan koping komunitas merupakan diagnosis keperawatan yang didefinisikan sebagai pola adaptasi dan penyelesaian masalah...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Perencanaan aktif oleh komunitas mengenai prediksi stresor",
      "Pemecahan masalah aktif oleh komunitas saat menghadapi masalah"
    ],
    "objektif": [
      "Terdapat sumber-sumber daya yang adekuat untuk mengatasi stresor"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Dukungan Kelompok",
      "tindakan": {
        "terapeutik": [
          "Identifikasi masalah yang sebenarnya dialami kelompok",
          "Identifikasi kelompok memiliki masalah yang sama",
          "Identifikasi hambatan menghadiri sesi kelompok (mis: stigma, cemas, tidak aman)",
          "Identifikasi aturan dan norma yang perlu di modifikasi pada sesi selanjutnya, jika perlu",
          "Siapkan lingkungan terapeutik dan rileks",
          "Bentuk kelompok dengan pengalaman dan masalah yang sama",
          "Mulai sesi kelompok dengan mengenalkan semua anggota kelompok dan terapis",
          "Mulai dengan percakapan ringan, berbagi informasi tentang diri masing-masing dan alasan terlibat dalam kelompok",
          "Buat aturan dan norma dalam kelompok, terutama kerahasiaan dalam kelompok",
          "Sepakati jumlah sesi yang diperlukan dalam kelompok",
          "Bangun rasa tanggung jawab dalam kelompok",
          "Diskusikan penyelesaian masalah dalam kelompok",
          "Berikan kesempatan individu untuk berhenti sejenak saat merasa distres akibat topik tertentu sampai mampu berpartisipasi Kembali",
          "Berikan kesempatan istirahat di setiap sesi untuk memfasilitasi percakapan individual dalam kelompok",
          "Berikan kesempatan saling mendukung dalam kelompok terkait masalah dan penyelesaian masalah",
          "Berikan kesempatan kelompok menyimpulkan masalah, penyelesaian masalah dan dukungan yang diperlukan untuk setiap anggota kelompok",
          "Hindari percakapan ofensif, tidak sensitive, seksual atau humor yang tidak perlu/tidak pada tempatnya",
          "Sediakan media untuk kebutuhan berkomunikasi di luar kelompok (mis: email, telepon, SMS, WA)",
          "Lakukan refleksi manfaat dukungan kelompok pada setiap awal dan akhir pertemuan",
          "Akhiri kegiatan sesuai sesi yang disepakati",
          "Anjurkan anggota kelompok mendengarkan dan memberi dukungan saat mendiskusikan masalah dan perasaan",
          "Anjurkan bersikap jujur dalam menceritakan perasaan dan masalah",
          "Anjurkan setiap anggota kelompok mengemukakan ketidakpuasan, keluhan, kritik dalam kelompok dengan cara santun",
          "Anjurkan kelompok untuk menuntaskan ketidakpuasan, keluhan, dan kritik",
          "Ajarkan relaksasi pada setiap sesi, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09313",
      "nama": "Promosi Sistem Pendukung",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respon psikologis terhadap situasi dan ketersedian sistem pendukung",
          "Identifikasi sumber daya untuk ketersediaan pengasuh",
          "Monitor situasi keluarga saat ini dan sistem pendukung",
          "Berikan dukungan dan caring dalam pelayanan",
          "Motivasi berpartisipasi dalam kegiatan sosial dan masyarakat",
          "Motivasi membina hubungan dengan pihak yang memiliki kebutuhan yang sama",
          "Libatkan keluarga, orang penting, dan teman dalam perawatan",
          "Jelaskan hambatan pada sistem pendukung",
          "Informasikan jaringan sosial yang tersedia",
          "Informasikan tingkat sistem pendukung (mis: keluarga, teman, dan masyarakat)",
          "Anjurkan keluarga terlibat dalam perawatan",
          "Rujuk ke kelompok swadaya",
          "Kolaborasi dengan program pencegahan atau pengobatan berbasis masyarakat, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0092",
  "slug": "ketidakberdayaan",
  "kode": "D.0092",
  "nama": "Ketidakberdayaan",
  "definisi": "Ketidakberdayaan merupakan diagnosis keperawatan yang didefinisikan sebagai persepsi bahwa tindakan seseorang tidak akan mempengaruhi...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ketidakberdayaan",
    "daya",
    "kontrol"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menyatakan frustasi atau tidak mampu melaksanakan aktivitas sebelumnya"
    ],
    "objektif": [
      "Bergantung pada orang lain"
    ]
  },
  "faktorTerkait": [
    "Program perawatan/pengobatan yang kompleks atau jangka Panjang",
    "Lingkungan tidak mendukung perawatan/pengobatan",
    "Interaksi interpersonal tidak memuaskan"
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
      "nama": "Promosi Harapan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan pasien dan keluarga dalam pencapaian hidup",
          "Sadarkan bahwa kondisi yang dialami memiliki nilai penting",
          "Pandu mengingat Kembali kenangan yang menyenangkan",
          "Libatkan pasien secara aktif dalam perawatan",
          "Kembangkan rencana perawatan yang melibatkan tingkat pencapaian tujuan sederhana sampai dengan kompleks",
          "Berikan kesempatan kepada pasien dan keluarga terlibat dengan dukungan kelompok",
          "Ciptakan lingkungan yang memudahkan mempraktikkan kebutuhan spiritual",
          "Anjurkan mengungkapkan perasaan terhdap kondisi dengan realistis",
          "Anjurkan mempertahankan hubungan (mis: menyebutkan nama orang yang dicintai)",
          "Anjurkan mempertahankan hubungan terapeutik dengan orang lain",
          "Latih menyusun tujuan yang sesuai dengan harapan",
          "Latih cara mengembangkan spiritual diri",
          "Latih cara mengenang dan menikmati masa lalu (mis: prestasi, pengalaman)"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0093",
  "slug": "ketidakmampuan-koping-keluarga",
  "kode": "D.0093",
  "nama": "Ketidakmampuan Koping Keluarga",
  "definisi": "Ketidakmampuan koping keluarga merupakan diagnosis keperawatan yang didefinisikan sebagai perilaku orang terdekat (anggota keluarga atau...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa diabaikan"
    ],
    "objektif": [
      "Tidak memenuhi kebutuhan anggota keluarga",
      "Tidak toleran",
      "Mengabaikan anggota keluarga"
    ]
  },
  "faktorTerkait": [
    "Hubungan keluarga ambivalen",
    "Pola koping yang berbeda diantara klien dan orang terdekat",
    "Resistensi keluarga terhadap perawatan/pengobatan yang kompleks",
    "Ketidakmampuan orang terdekat mengungkapkan perasaan"
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
      "nama": "Dukungan Koping Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respons emosional terhadap kondisi saat ini",
          "Identifikasi beban prognosis secara psikologis",
          "Identifikasi pemahaman tentang keputusan perawatan setelah pulang",
          "Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga  kesehatan",
          "Dengarkan masalah, perasaan, dan pertanyaan keluarga",
          "Terima nilai-nilai keluarga dengan cara yang tidak menghakimi",
          "Diskusikan rencana medis dan perawatan",
          "Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga",
          "Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu",
          "Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai",
          "Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)",
          "Fasilitasi anggota keluarga melalui proses kematian dan berduka, jika perlu",
          "Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien",
          "Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan",
          "Hargai dan dukung mekanisme koping adaptif yang digunakan",
          "Berikan kesempatan berkunjung bagi anggota keluarga",
          "Informasikan kemajuan pasien secara berkala",
          "Informasikan fasilitas perawatan Kesehatan yang tersedia",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0094",
  "slug": "koping-defensif",
  "kode": "D.0094",
  "nama": "Koping Defensif",
  "definisi": "Koping defensif merupakan diagnosis keperawatan yang didefinisikan sebagai proyeksi evaluasi diri untuk melindungi diri dari....",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menyalahkan orang lain",
      "Menyangkal adanya masalah",
      "Menyangkal kelemahan diri",
      "Merasionalisasi kegagalan"
    ],
    "objektif": [
      "Hipersensitif terhadap kritik"
    ]
  },
  "faktorTerkait": [
    "Konflik antara persepsi diri dan sistem nilai",
    "Takut mengalami kegagalan",
    "Takut mengalami penghinaan",
    "Takut terhadap dampak situasi yang dihadapi",
    "Kurangnya rasa percaya kepada orang lain",
    "Kurangnya kepercayaan diri",
    "Kurangnya dukungan sistem pendukung (support system)",
    "Harapan yang tidak realistis"
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
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0095",
  "slug": "koping-komunitas-tidak-efektif",
  "kode": "D.0095",
  "nama": "Koping Komunitas Tidak Efektif",
  "definisi": "Koping komunitas tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai pola adaptasi komunitas dan penyelesaian...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan ketidakberdayaan komunitas"
    ],
    "objektif": [
      "Komunitas tidak memenuhi harapan anggotanya",
      "Konflik masyarakat meningkat",
      "Insiden masalah masyarakat tinggi (mis: pembunuhan, pengrusakan, terorisme, perampokan, pelecehan, pengangguran, kemiskinan, penyakit mental)"
    ]
  },
  "faktorTerkait": [
    "Paparan bencana (alam atau buatan manusia)",
    "Riwayat bencana (alam atau buatan manusia)",
    "Ketidakadekuatan sumber daya untuk memecahkan masalah",
    "Ketidakcukupan sumber daya masyarakat (mis: istirahat, rekreasi, dukungan sosial)",
    "Tidak adanya sistem masyarakat"
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
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan  Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    },
    {
      "kode": "I.14515",
      "nama": "Manajemen Lingkungan Komunitas",
      "tindakan": {
        "terapeutik": [
          "Lakukan skrining risiko gangguan Kesehatan lingkungan",
          "Identifikasi faktor risiko Kesehatan yang diketahui",
          "Libatkan partisipasi masyarakat dalam memelihara keamanan lingkungan",
          "Promosikan kebijakan pemerintah untuk mengurangi risiko penyakit",
          "Berikan Pendidikan Kesehatan untuk kelompok risiko",
          "Informasikan layanan Kesehatan ke individu, keluarga, kelompok berisiko dan masyarakat",
          "Kolaborasi dalam tim multidisiplin untuk mengidentifikasi ancaman keamanan di masyarakat",
          "Kolaborasi dengan tim Kesehatan lain dalam program Kesehatan komunitas untuk menghadapi risiko yang diketahui",
          "Kolaborasi dalam pegnembangan program aksi masyarakat",
          "Kolaborasi dengan kelompok masyarakat dalam menjalankan peraturan pemerintah"
        ]
      }
    },
    {
      "kode": "I.14548",
      "nama": "Pengembangan Kesehatan Masyarakat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi masalah atau isu Kesehatan dan prioritasnya",
          "Identifikasi potensi atau aset dalam masyarakat terkait isu yang dihadapi",
          "Identifikasi kekuatan dan partner dalam pengembangan Kesehatan",
          "Identifikasi pemimpin/tokoh dalam masyarakat",
          "Berikan kesempatan kepada setiap anggota masyarakat untuk berpartisipasi sesuai aset yang dimiliki",
          "Libatkan anggota masyarakat untuk meningkatkan kesadaran terhadap isu dan masalah Kesehatan yang dihadapi",
          "Libatkan masyarakat dalam musyawarah untuk mendefinisikan isu Kesehatan dan mengembangkan rencana kerja",
          "Libatkan masyarakat dalam proses perencanaan dan implementasi serta revisinya",
          "Libatkan anggota masyarakat dalam mengembangkan jaringan Kesehatan",
          "Pertahankan komunikasi yang terbuka dengan anggota masyarakat dan pihak-pihak yang terlibat",
          "Perkuat komunikasi antara individu dan kelompok untuk bermusyawarah terkait daya Tarik yang sama",
          "Fasilitasi struktur organisasi untuk meningkatkan kemampuan berkomunikasi dan bernegosiasi",
          "Kembangkan strategi dalam manajemen konflik",
          "Persatukan anggota masyarakat dengan cita-cita komunitas yang sama",
          "Bangun komitmen antar anggota masyarakat",
          "Kembangkan mekanisme keterlibatan tatanan lokal, regional bahkan nasional terkait isu Kesehatan komunitas"
        ]
      }
    }
  ]
},
{
  "id": "0096",
  "slug": "koping-tidak-efektif",
  "kode": "D.0096",
  "nama": "Koping Tidak Efektif",
  "definisi": "Koping tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan menilai dan merespons stresor dan/atau...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan tidak mampu mengatasi masalah"
    ],
    "objektif": [
      "Tidak mampu memenuhi peran yang diharapkan (sesuai usia)",
      "Menggunakan mekanisme koping yang tidak sesuai"
    ]
  },
  "faktorTerkait": [
    "Ketidakpercayaan terhadap kemampuan diri mengatasi masalah",
    "Ketidakadekuatan sistem pendukung",
    "Ketidakadekuatan strategi koping",
    "Ketidakteraturan atau kekacauan lingkungan",
    "Ketidakcukupan persiapan untuk menghadapi stresor",
    "Disfungsi sistem keluarga",
    "Krisis situasional",
    "Krisis maturasional",
    "Kerentanan personalitas",
    "Ketidakpastian"
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
      "nama": "Dukungan Pengambilan Keputusan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi persepsi mengenai masalah dan informasi yang memicu konflik",
          "Fasilitasi mengklarifikasi nilai dan harapan yang membantu membuat pilihan",
          "Diskusikan kelebihan dan kekurangan dari setiap solusi",
          "Fasilitasi melihat situasi secara realistic",
          "Motivasi mengungkapkan tujuan perawatan yang diharapkan",
          "Fasilitasi pengambilan keputusan secara kolaboratif",
          "Hormati hak pasien untuk menerima atau menolak informasi",
          "Fasilitasi menjelaskan keputusan kepada orang lain, jika perlu",
          "Fasilitasi hubungan antara pasien, keluarga, dan tenaga Kesehatan lainnya",
          "Jelaskan alternatif solusi secara jelas",
          "Berikan informasi yang diminta pasien",
          "Kolaborasi dengan tenaga Kesehatan lain dalam memfasilitasi pengambilan keputusan"
        ]
      }
    },
    {
      "kode": "I.13478",
      "nama": "Dukungan Penampilan Peran",
      "tindakan": {
        "terapeutik": [
          "Identifikasi berbagai peran dan periode transisi sesuai tingkat perkembangan",
          "Identifikasi peran yang ada dalam keluarga",
          "Identifikasi adanya peran yang tidak terpenuhi",
          "Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan",
          "Fasilitasi bermain peran dalam mengantisipasi reaksi orang lain terhadap perilaku",
          "Fasilitasi diskusi perubahan peran anak terhadap bayi baru lahir, jika perlu",
          "Fasilitasi diskusi tentang peran orang tua, jika perlu",
          "Fasilitasi diskusi tentang adaptasi peran saat anak meninggalkan rumah, jika perlu",
          "Fasilitasi diskusi harapan dengan keluarga dan peran timbal balik",
          "Diskusikan perilaku yang dibutuhkan untuk pengembangan peran",
          "Diskusikan perubahan peran yang diperlukan akibat penyakit atau ketidakmampuan",
          "Diskusikan perubahan peran dalam menerima ketergantungan orang tua",
          "Diskusikan strategi positif untuk mengelola perubahan peran",
          "Ajarkan perilaku baru yang dibutuhkan oleh pasien/orang tua untuk memenuhi peran",
          "Rujuk dalam kelompok untuk mempelajari peran baru"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0097",
  "slug": "penurunan-koping-keluarga",
  "kode": "D.0097",
  "nama": "Penurunan Koping Keluarga",
  "definisi": "Penurunan koping keluarga merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakadekuatan atau ketidakefektifan dukungan, rasa...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "koping",
    "cope",
    "adaptasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Klien mengeluh/khawatir tentang respon orang terdekat pada masalah kesehatan"
    ],
    "objektif": [
      "Orang terdekat menarik diri dari klien",
      "Terbatasnya komunikasi orang terdekat dengan klien"
    ]
  },
  "faktorTerkait": [
    "Situasi penyerta yang mempengaruhi orang terdekat",
    "Krisis perkembangan yang dihadapi orang terdekat",
    "Kelelahan orang terdekat dalam memberikan dukungan",
    "Disorganisasi keluarga",
    "Perubahan peran keluarga",
    "Tidak tersedianya informasi bagi orang terdekat",
    "Kurangnya saling mendukung",
    "Tidak cukupnya dukungan yang diberikan  klien pada orang terdekat",
    "Orang terdekat kurang terpapar informasi",
    "Salahnya/tidak pahamnya informasi yang didapatkan orang terdekat",
    "Orang terdekat terlalu focus pada kondisi di luar keluarga",
    "Penyakit kronis yang menghabiskan kemampuan dukungan orang terdekat",
    "Krisis situasional yang dialami orang terdekat"
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
      "nama": "Dukungan Koping Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respons emosional terhadap kondisi saat ini",
          "Identifikasi beban prognosis secara psikologis",
          "Identifikasi pemahaman tentang keputusan perawatan setelah pulang",
          "Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga kesehatan",
          "Dengarkan masalah, perasaan, dan pertanyaan keluarga",
          "Terima nilai-nilai keluarga dengan cara yang tidak menghakimi",
          "Diskusikan rencana medis dan perawatan",
          "Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga",
          "Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu",
          "Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai",
          "Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)",
          "Fasilitasi anggota keluarga melalui proses kematian dan berduka, jika perlu",
          "Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien",
          "Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan",
          "Hargai dan dukung mekanisme koping adaptif yang digunakan",
          "Berikan kesempatan berkunjung bagi anggota keluarga",
          "Informasikan kemajuan pasien secara berkala",
          "Informasikan fasilitas perawatan Kesehatan yang tersedia",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0098",
  "slug": "penyangkalan-tidak-efektif",
  "kode": "D.0098",
  "nama": "Penyangkalan Tidak Efektif",
  "definisi": "Penyangkalan tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai upaya mengingkari pemahaman atau makna suatu...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "penyangkalan",
    "denial",
    "menyangkal"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak mengakui dirinya mengalami gejala atau bahaya (walaupun kenyataan sebaliknya)"
    ],
    "objektif": [
      "Menunda mencari pertolongan pelayanan kesehatan"
    ]
  },
  "faktorTerkait": [
    "Kecemasan",
    "Ketakutan terhadap kematian",
    "Ketakutan mengalami kehilangan kemandirian",
    "Ketakutan terhadap perpisahan",
    "Ketidakefektifan strategi koping",
    "Ketidakpercayaan terhadap kemampuan mengatasi masalah",
    "Ancaman terhadap realitas yang tidak menyenangkan"
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
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0099",
  "slug": "perilaku-kesehatan-cenderung-berisiko",
  "kode": "D.0099",
  "nama": "Perilaku Kesehatan Cenderung Berisiko",
  "definisi": "Perilaku Kesehatan cenderung berisiko merupakan diagnosis keperawatan yang didefinisikan sebagai hambatan kemampuan dalam...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Menunjukkan penolakan terhadap perubahan status Kesehatan",
      "Gagal melakukan Tindakan pencegahan masalah Kesehatan",
      "Menunjukkan upaya peningkatan status Kesehatan yang minimal"
    ]
  },
  "faktorTerkait": [
    "Kurang terpapar informasi",
    "Ketidakadekuatan dukungan sosial",
    "Self efficacy yang rendah",
    "Status sosio ekonomi rendah",
    "Stresor berlebihan",
    "Sikap negatif terhadap pelayanan Kesehatan",
    "Pemilihan gaya hidup yang tidak sehat (mis: merokok, konsumsi alkohol berlebihan)"
  ],
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
      "nama": "Promosi Perilaku Upaya Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi perilaku upaya Kesehatan yang dapat ditingkatkan",
          "Berikan lingkungan yang mendukung Kesehatan",
          "Orientasi pelayanan Kesehatan yang dapat dimanfaatkan",
          "Anjurkan persalinan ditolong oleh tenaga kesehatan",
          "Anjurkan memberi bayi ASI eksklusif",
          "Anjurkan menimbang balita setiap bulan",
          "Anjurkan menggunakan air bersih",
          "Anjurkan mencuci tangan dengan air bersih dan sabun",
          "Anjurkan menggunakan jamban sehat",
          "Anjurkan memberantas jentik di rumah seminggu sekali",
          "Anjurkan makan sayur dan buah setiap hari",
          "Anjurkan melakukan aktivitas fisik setiap hari",
          "Anjurkan tidak merokok di dalam rumah"
        ]
      }
    }
  ]
},
{
  "id": "0100",
  "slug": "risko-distres-spiritual",
  "kode": "D.0100",
  "nama": "Risko Distres Spiritual",
  "definisi": "Risiko distres spiritual merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan keyakinan atau sistem...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "spiritual",
    "agama",
    "ibadah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Perubahan hidup",
    "Perubahan lingkungan",
    "Bencana alam",
    "Sakit kronis",
    "Sakit fisik",
    "Penyalahgunaan zat",
    "Kecemasan",
    "Perubahan dalam ritual agama",
    "Perubahan dalam praktik spiritual",
    "Konflik spiritual",
    "Depresi",
    "Ketidakmampuan memaafkan",
    "Kehilangan",
    "Harga diri rendah",
    "Hubungan buruk",
    "Konflik rasial",
    "Berpisah dengan sistem pendukung",
    "Stres"
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
      "nama": "Dukungan Perkembangan Spiritual",
      "tindakan": {
        "terapeutik": [
          "Sediakan lingkungan yang tenang untuk refleksi diri",
          "Fasilitasi mengidentifikasi masalah spiritual",
          "Fasilitasi mengidentifikasi hambatan dalam pengenalan diri",
          "Fasilitasi mengeksplorasi keyakinan terkait pemulihan tubuh, pikiran, dan jiwa",
          "Fasilitasi hubungan persahabatan dengan orang lain dan pelayanan keagamaan",
          "Anjurkan membuat komitmen spiritual berdasarkan keyakinan dan nilai",
          "Anjurkan berpartisipasi dalam kegiatan ibadah (hari raya, ritual) dan meditasi",
          "Rujuk pada pemuka agama/kelompok agama, jika perlu",
          "Rujuk kepada kelompok pendukung, swabantu, atau program  spiritual, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09306",
      "nama": "Promosi Dukungan Spiritual",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keyakinan tentang makna dan tujuan hidup, sesuai kebutuhan",
          "Identifikasi perspektif spiritual, sesuai kebutuhan",
          "Perlakukan pasien dengan bermartabat dan terhormat",
          "Tunjukkan keterbukaan, empati, dan kesediaan mendengarkan perasaan pasien",
          "Yakinkan bahwa perawat selalu ada dan mendukung",
          "Gunakan Teknik klarifikasi untuk membantu menilai keyakinan, jika perlu",
          "Fasilitasi mengekspresikan dan meredakan amarah secara tepat",
          "Motivasi meninjau kehidupan masa lalu dan fokus pada hal yang memberikan kekuatan spiritual",
          "Motivasi berinteraksi dengan anggota keluarga, teman, dan lainnya",
          "Dorong privasi dan waktu tenang untuk aktivitas spiritual",
          "Motivasi berpartisipasi dalam kelompok pendukung",
          "Motivasi mengekspresikan perasaan (mis: kesepian, tidak berdaya, ansietas)",
          "Motivasi penggunaan sumber spiritual, jika perlu",
          "Jadwalkan kunjungan pembimbing spiritual, jika perlu",
          "Anjurkan mengingat kenangan hidup",
          "Anjurkan untuk berdoa",
          "Anjurkan penggunaan media spiritual (mis: televisi, buku)",
          "Ajarkan metode relaksasi (mis: Teknik napas dalam, imajinasi terbimbing, meditasi)"
        ]
      }
    }
  ]
},
{
  "id": "0101",
  "slug": "risiko-harga-diri-rendah-kronis",
  "kode": "D.0101",
  "nama": "Risiko Harga Diri Rendah Kronis",
  "definisi": "Risiko harga diri rendah kronis merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami evaluasi atau perasaan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Gangguan psikiatrik",
    "Kegagalan berulang",
    "Ketidaksesuaian budaya",
    "Ketidaksesuaian spiritual",
    "Ketidakefektifan koping terhadap kehilangan",
    "Kurang mendapat kasih saying",
    "Kurang keterlibatan dalam kelompok/masyarakat",
    "Kurang penghargaan dari orang lain",
    "Ketidakmampuan menunjukkan perasaan",
    "Perasaan kurang didukung orang lain",
    "Pengalaman traumatik"
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
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    },
    {
      "kode": "I.13498",
      "nama": "Promosi Sosialisasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan melakukan interaksi dengan orang lain",
          "Identifikasi hambatan melakukan interaksi dengan orang lain",
          "Motivasi meningkatkan keterlibatan dalam suatu hubungan",
          "Motivasi kesabaran dalam mengembangkan suatu hubungan",
          "Motivasi berpartisipasi dalam aktivitas baru dan kegiatan kelompok",
          "Motivasi berinteraksi di luar lingkungan (mis: jalan-jalan, ke toko buku)",
          "Diskusikan kekuatan dan keterbatasan dalam berkomunikasi dengan orang lain",
          "Diskusikan perencanaan kegiatan di masa depan",
          "Berikan umpan balik positif dalam perawatan diri",
          "Berikan umpan balik positif pada setiap peningkatan kemampuan",
          "Anjurkan berinteraksi dengan orang lain secara bertahap",
          "Anjurkan ikut serta kegiatan sosial dan kemasyarakatan",
          "Anjurkan berbagi pengalaman dengan orang lain",
          "Anjurkan meningkatkan kejujuran diri dan menghormati hak orang lain",
          "Anjurkan penggunaan alat bantu (mis: kacamata dan alat bantu dengar)",
          "Anjurkan membuat perencanaan kelompok kecil untuk kegiatan khusus",
          "Latih bermain peran untuk meningkatkan keterampilan komunikasi",
          "Latih mengekspresikan marah dengan tepat"
        ]
      }
    }
  ]
},
{
  "id": "0102",
  "slug": "risiko-harga-diri-rendah-situasional",
  "kode": "D.0102",
  "nama": "Risiko Harga Diri Rendah Situasional",
  "definisi": "Risiko harga diri rendah situasional merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami evaluasi atau perasaan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "harga diri",
    "self esteem",
    "percaya diri"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Gangguan gambaran diri",
    "Gangguan fungsi",
    "Gangguan peran sosial",
    "Harapan tidak realistis",
    "Kurang pemahaman terhadap situasi",
    "Penurunan control terhadap lingkungan",
    "Penyakit fisik",
    "Perilaku tidak sesuai dengan nilai setempat",
    "Kegagalan",
    "Perasaan tidak berdaya",
    "Riwayat kehilangan",
    "Riwayat pengabaian",
    "Riwayat penolakan",
    "Riwayat penganiayaan (mis: fisik, psikologis, seksual)",
    "Transisi perkembangan"
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
      "nama": "Dukungan Penampilan Peran",
      "tindakan": {
        "terapeutik": [
          "Identifikasi berbagai peran dan periode transisi sesuai tingkat perkembangan",
          "Identifikasi peran yang ada dalam keluarga",
          "Identifikasi adanya peran yang tidak terpenuhi",
          "Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan",
          "Fasilitasi bermain peran dalam mengantisipasi reaksi orang lain terhadap perilaku",
          "Fasilitasi diskusi perubahan peran anak terhadap bayi baru lahir, jika perlu",
          "Fasilitasi diskusi tentang peran orang tua, jika perlu",
          "Fasilitasi diskusi tentang adaptasi peran saat anak meninggalkan rumah, jika perlu",
          "Fasilitasi diskusi harapan dengan keluarga dan peran timbal balik",
          "Diskusikan perilaku yang dibutuhkan untuk pengembangan peran",
          "Diskusikan perubahan peran yang diperlukan akibat penyakit atau ketidakmampuan",
          "Diskusikan perubahan peran dalam menerima ketergantungan orang tua",
          "Diskusikan strategi positif untuk mengelola perubahan peran",
          "Ajarkan perilaku baru yang dibutuhkan oleh pasien/orang tua untuk memenuhi peran",
          "Rujuk dalam kelompok untuk mempelajari peran baru"
        ]
      }
    },
    {
      "kode": "I.09308",
      "nama": "Promosi Harga Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi budaya, agama, ras, jenis kelamin, dan usia terhadap harga diri",
          "Monitor verbalisasi yang merendahkan diri sendiri",
          "Monitor tingkat harga diri setiap waktu, sesuai kebutuhan",
          "Motivasi terlibat dalam verbalisasi positif untuk diri sendiri",
          "Motivasi menerima tantangan atau hal baru",
          "Diskusikan pernyataan tentang harga diri",
          "Diskusikan kepercayaan terhadap penilaian diri",
          "Diskusikan pengalaman yang meningkatkan harga diri",
          "Diskusikan persepsi negatif diri",
          "Diskusikan alasan mengkritik diri atau rasa bersalah",
          "Diskusikan penetapan tujuan realistis untuk mencapai harga diri yang lebih tinggi",
          "Diskusikan Bersama keluarga untuk menetapkan harapan dan Batasan yang jelas",
          "Berikan umpan balik positif atas peningkatan mencapai tujuan",
          "Fasilitasi lingkungan dan aktivitas yang meningkatkan diri",
          "Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien",
          "Anjurkan mengidentifikasi kekuatan yang dimiliki",
          "Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain",
          "Anjurkan membuka diri terhadap kritik negatif",
          "Anjurkan mengevaluasi perilaku",
          "Ajarkan cara mengatasi bullying",
          "Latih peningkatan tanggung jawab untuk diri sendiri",
          "Latih pernyataan/kemampuan positif diri",
          "Latih cara berfikir dan berperilaku positif",
          "Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi"
        ]
      }
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    }
  ]
},
{
  "id": "0103",
  "slug": "risiko-ketidakberdayaan",
  "kode": "D.0103",
  "nama": "Risiko Ketidakberdayaan",
  "definisi": "Risiko ketidakberdayaan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami persepsi bahwa tindakan...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [
    "ketidakberdayaan",
    "daya",
    "kontrol"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Perjalanan penyakit yang berlangsung lama atau tidak dapat diprediksi",
    "Harga diri rendah yang berlangsung lama",
    "Status ekonomi rendah",
    "Ketidakmampuan mengatasi masalah",
    "Kurang dukungan sosial",
    "Penyakit yang melemahkan secara progresif",
    "Marginalisasi sosial",
    "Kondisi terstigma",
    "Penyakit terstigma",
    "Kurang terpapar informasi",
    "Kecemasan"
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
      "nama": "Promosi Harapan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan pasien dan keluarga dalam pencapaian hidup",
          "Sadarkan bahwa kondisi yang dialami memiliki nilai penting",
          "Pandu mengingat Kembali kenangan yang menyenangkan",
          "Libatkan pasien secara aktif dalam perawatan",
          "Kembangkan rencana perawatan yang melibatkan tingkat pencapaian tujuan sederhana sampai dengan kompleks",
          "Berikan kesempatan kepada pasien dan keluarga terlibat dengan dukungan kelompok",
          "Ciptakan lingkungan yang memudahkan mempraktikkan kebutuhan spiritual",
          "Anjurkan mengungkapkan perasaan terhdap kondisi dengan realistis",
          "Anjurkan mempertahankan hubungan (mis: menyebutkan nama orang yang dicintai)",
          "Anjurkan mempertahankan hubungan terapeutik dengan orang lain",
          "Latih menyusun tujuan yang sesuai dengan harapan",
          "Latih cara mengembangkan spiritual diri",
          "Latih cara mengenang dan menikmati masa lalu (mis: prestasi, pengalaman)"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0104",
  "slug": "sindrom-pasca-trauma",
  "kode": "D.0104",
  "nama": "Sindrom Pasca Trauma",
  "definisi": "Sindrom pasca trauma merupakan diagnosis keperawatan yang didefinisikan sebagai respon maladaptif yang berkelanjutan terhadap...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan secara berlebihan atau menghindari pembicaraan kejadian trauma",
      "Merasa cemas",
      "Teringat Kembali kejadian traumatis"
    ],
    "objektif": [
      "Memori masa lalu terganggu",
      "Mimpi buruk berulang",
      "Ketakutan berulang",
      "Menghindari aktivitas, tempat, atau orang yang membangkitkan kejadian trauma"
    ]
  },
  "faktorTerkait": [
    "Bencana",
    "Peperangan",
    "Riwayat korban perilaku kekerasan",
    "Kecelakaan",
    "Saksi pembunuhan"
  ],
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
      "nama": "Dukungan Proses Berduka",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kehilangan yang dihadapi",
          "Identifikasi proses berduka yang dialami",
          "Identifikasi sifat keterikatan pada benda yang hilang atau orang yang meninggal",
          "Identifikasi reaksi awal terhadap kehilangan",
          "Tunjukan sikap menerima dan empati",
          "Motivasi agar mau mengungkapkan perasaan kehilangan",
          "Motivasi untuk menguatkan dukungan keluarga atau orang terdekat",
          "Fasilitasi melakukan kebiasaan sesuai dengan budaya, agama, dan norma sosial",
          "Fasilitasi mengekspresikan perasaan dengan cara yang nyaman (mis: membaca buku, menulis, menggambar, atau bermain)",
          "Diskusikan strategi koping yang dapat digunakan",
          "Jelaskan kepada pasien dan keluarga bahwa sikap mengingkari, marah, tawar menawar, depresi, dan menerima adalah wajar dalam menghadapi kehilangan",
          "Anjurkan mengidentifikasi ketakutan terbesar pada kehilangan",
          "Anjurkan mengekspresikan perasaan tentang kehilangan",
          "Ajarkan melewati proses berduka secara bertahap"
        ]
      }
    },
    {
      "kode": "I.09314",
      "nama": "Reduksi Ansietas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi saat tingkat ansietas berubah (mis: kondisi, waktu, stresor)",
          "Identifikasi kemampuan mengambil keputusan",
          "Monitor tanda-tanda ansietas (verbal dan nonverbal)",
          "Ciptakan suasana terapeutik untuk menumbuhkan kepercayaan",
          "Temani pasien untuk mengurangi kecemasan, jika memungkinkan",
          "Pahami situasi yang membuat ansietas",
          "Dengarkan dengan penuh perhatian",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Tempatkan barang pribadi yang memberikan kenyamanan",
          "Motivasi mengidentifikasi situasi yang memicu kecemasan",
          "Diskusikan perencanaan realistis tentang peristiwa yang akan datang",
          "Jelaskan prosedur, termasuk sensasi yang mungkin dialami",
          "Informasikan secara faktual mengenai diagnosis, pengobatan, dan prognosis",
          "Anjurkan keluarga untuk tetap Bersama pasien, jika perlu",
          "Anjurkan melakukan kegiatan yang tidak kompetitif, sesuai kebutuhan",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Latih kegiatan pengalihan untuk mengurangi ketegangan",
          "Latih penggunaan mekanisme pertahanan diri yang tepat",
          "Latih Teknik relaksasi",
          "Kolaborasi pemberian obat antiansietas, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0105",
  "slug": "waham",
  "kode": "D.0105",
  "nama": "Waham",
  "definisi": "Waham merupakan diagnosis keperawatan yang didefinisikan sebagai keyakinan yang keliru tentang isi pikiran yang dipertahankan secara...",
  "kategori": "Integritas ego",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan isi waham"
    ],
    "objektif": [
      "Menunjukkan perilaku sesuai isi waham",
      "Isi pikir tidak sesuai realitas",
      "Isi pembicaraan sulit dimengerti"
    ]
  },
  "faktorTerkait": [
    "Faktor biologis: kelainan genetik/keturunan, kelainan neurologis (mis: gangguan sistem limbik, gangguan ganglia basalis, tumor otak)",
    "Faktor psikodinamik (mis: isolasi sosial, hipersensitif)",
    "Maladaptasi",
    "Stres berlebihan"
  ],
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
      "nama": "Manajemen Waham",
      "tindakan": {
        "terapeutik": [
          "Monitor waham yang isinya membahayakan diri sendiri, orang lain, dan lingkungan",
          "Monitor efek terapeutik dan efek samping obat",
          "Bina hubungan interpersonal saling percaya",
          "Tunjukkan sikap tidak menghakimi secara konsisten",
          "Diskusikan waham dengan berfokus pada perasaan yang mendasari waham (“Anda terlihat seperti sedang merasa ketakutan”)",
          "Hindari perdebatan tentang keyakinan yang keliru, nyatakan keraguan sesuai fakta",
          "Hindari memperkuat gagasan waham",
          "Sediakan lingkungan aman dan nyaman",
          "Berikan aktivitas rekreasi dan pengalihan sesuai kebutuhan",
          "Lakukan intervensi pengontrolan perilaku waham (Mis: limit setting, pembatasan wilayah, pengekangan fisik, atau seklusi)",
          "Anjurkan mengungkapkan dan memvalidasi waham (uji realitas) dengan orang yang dipercaya (pemberi asuhan/keluarga)",
          "Anjurkan melakukan rutinitas harian secara konsisten",
          "Latih manajemen stres",
          "Jelaskan tentang waham serta penyakit terkait (mis: delirium, skizofrenia, atau depresi), cara mengatasi dan obat yang diberikan",
          "Kolaborasi pemberian obat, sesuai indikasi"
        ]
      }
    },
    {
      "kode": "I.09297",
      "nama": "Orientasi Realita",
      "tindakan": {
        "terapeutik": [
          "Monitor perubahan orientasi",
          "Monitor perubahan kognitif dan perilaku",
          "Perkenalkan nama saat memulai interaksi",
          "Orientasikan orang, tempat, dan waktu",
          "Hadirkan realita (mis: beri penjelasan alternatif, hindari perdebatan)",
          "Sediakan lingkungan dan rutinitas secara konsisten",
          "Atur stimulus sensorik dan lingkungan (mis: kunjungan, pemandangan, suara, pencahayaan, bau, dan sentuhan)",
          "Gunakan simbol dalam mengorientasikan lingkungan (mis: tanda, gambar, warna)",
          "Libatkan dalam terapi kelompok orientasi",
          "Berikan waktu istirahat dan tidur yang cukup, sesuai kebutuhan",
          "Fasilitasi akses informasi (mis: televisi, surat kabad, radio), jika perlu",
          "Anjurkan perawatan diri secara mandiri",
          "Anjurkan penggunaan alat bantu (mis: kacamata, alat bantu dengar, gigi palsu)",
          "Ajarkan keluarga dalam perawatan orientasi lansia"
        ]
      }
    }
  ]
},
{
  "id": "0106",
  "slug": "gangguan-tumbuh-kembang",
  "kode": "D.0106",
  "nama": "Gangguan Tumbuh Kembang",
  "definisi": "Gangguan tumbuh kembang merupakan diagnosis keperawatan yang didefinisikan sebagai kondisi individu mengalami gangguan kemampuan...",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [
    "tumbuh kembang",
    "perkembangan",
    "pertumbuhan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Tidak mampu melakukan keterampilan atau perilaku khas sesuai usia (fisik, bahasa, motorik, psikososial)",
      "Pertumbuhan fisik terganggu"
    ]
  },
  "faktorTerkait": [
    "Efek ketidakmampuan fisik",
    "Keterbatasan lingkungan",
    "Inkonsistensi respon",
    "Pengabaian",
    "Terpisah dari orang tua dan/atau orang terdekat",
    "Defisiensi stimulus"
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
      "nama": "Perawatan perkembangan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pencapaian tugas perkembangan anak",
          "Identifikasi isyarat perilaku dan fisiologis yang ditunjukkan bayi (mis: lapar, tidak nyaman)",
          "Pertahankan sentuhan seminimal mungkin pada bayi premature",
          "Berikan sentuhan yang bersifat gentle dan tidak ragu-ragu",
          "Minimalkan nyeri",
          "Minimalkan kebisingan ruangan",
          "Pertahankan lingkungan yang mendukung perkembangan optimal",
          "Motivasi anak berinteraksi dengan anak lain",
          "Sediakan aktivitas yang memotivasi anak berinteraksi dengan anak lainnya",
          "Fasilitasi anak berbagi dan bergantian/bergilir",
          "Dukung anak mengekspresikan diri melalui penghargaan positif atau umpan balik atas usahanya",
          "Pertahankan kenyamanan anak",
          "Fasilitasi anak melatih keterampilan pemenuhan kebutuhan secara mandiri (mis: makan, sikat gigi, cuci tangan, memakai baju)",
          "Bernyanyi Bersama anak lagu-lagu yang disukai",
          "Bacakan cerita atau dongeng",
          "Dukung partisipasi anak di sekolah, ekstrakulikuler dan aktivitas komunitas",
          "Jelaskan orang tua dan/atau pengasuh tentang milestone perkembangan anak dan perilaku anak",
          "Anjurkan orang tua menyentuh dan menggendong bayinya",
          "Anjurkan orang tua berinteraksi dengan anaknya",
          "Ajarkan anak keterampilan berinteraksi",
          "Ajarkan anak teknik asertif",
          "Rujuk untuk konseling, jika perlu"
        ]
      }
    },
    {
      "kode": "I.10340",
      "nama": "Promosi perkembangan anak",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan khusus anak dan kemampuan adaptasi anak",
          "Fasilitasi hubungan anak dengan teman sebaya",
          "Dukung anak berinteraksi dengan anak lain",
          "Dukung anak mengekpresikan perasaannya secara positif",
          "Dukung anak dalam bermimpi atau berfantasi sewajarnya",
          "Dukung partisipasi anak di sekolah, ekstrakulikuler dan aktivitas komunitas",
          "Berikan mainan yang sesuai dengan usia anak",
          "Bernyanyi Bersama anak lagu-lagu yang disukai anak",
          "Bacakan cerita/dongeng untuk anak",
          "Diskusikan bersama remaja tujuan dan harapannya",
          "Sediakan kesempatan dan alat-alat untuk menggambar, melukis, dan mewarnai",
          "Sediakan mainan berupa puzzle dan maze",
          "Jelaskan nama-nama benda obyek yang ada di lingkungan sekitar",
          "Ajarkan pengasuh milestones perkembangan dan perilaku yang dibentuk",
          "Ajarkan sikap kooperatif, bukan kompetisi diantara anak",
          "Ajarkan anak cara meminta bantuan dari anak lain, jika perlu",
          "Ajarkan teknik asertif pada anak dan remaja",
          "Demonstrasikan kegiatan yang meningkatkan perkembangan pada pengasuh",
          "Rujuk untuk konseling, jika perlu"
        ]
      }
    },
    {
      "kode": "I.10341",
      "nama": "Promosi perkembangan remaja",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tahap perkembangan remaja",
          "Sediakan bimbingan dan konseling  Kesehatan remaja pada remaja dan keluarga/orang tua/pengasuh",
          "Tingkatkan personal hygiene dan penampilan diri",
          "Dukung partisipasi dalam olahraga yang aman secara teratur",
          "Fasilitasi kemampuan pembuatan keputusan",
          "Dukung keterampilan komunikasi",
          "Dukung keterampilan sikap asertif",
          "Fasilitasi rasa tanggung jawab pada diri dan orang lain",
          "Dukung respons anti-kekerasan dalam menyelesaikan konflik",
          "Dukung perkembangan dan pertahankan hubungan sosial",
          "Dukung aktivitas ekstrakulikuler",
          "Jelaskan perkembangan normal remaja",
          "Ajarkan untuk mengenali masalah Kesehatan dan penyimpangan pada masa remaja (mis: anemia, masalah Kesehatan gigi, kematangan seksual abnormal, alkohol, rokok, penyalahgunaan obat-obatan, gangguan citra tubuh, harga diri rendah)",
          "Ajarkan strategi pencegahan penyalahgunaan obat, alkohol, dan rokok.",
          "Rujuk untuk konseling atau hipnoterapi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0107",
  "slug": "risiko-gangguan-perkembangan",
  "kode": "D.0107",
  "nama": "Risiko Gangguan Perkembangan",
  "definisi": "Risiko gangguan perkembangan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan untuk berkembang sesuai...",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Ketidakadekuatan nutrisi",
    "Ketidakadekuatan perawatan prenatal",
    "Keterlambatan perawatan prenatal",
    "Usia hamil di bawah 15 tahun",
    "Usia hamil di atas 35 tahun",
    "Kehamilan tidak terencana",
    "Kehamilan tidak diinginkan",
    "Gangguan endokrin",
    "Prematuritas",
    "Kelainan genetik/kongenital",
    "Kerusakan otak (mis: perdarahan selama periode pascanatal, penganiayaan, kecelakaan)",
    "Penyakit kronis",
    "Infeksi",
    "Efek samping terapi (mis: kemoterapi, terapi radiasi, agen farmakologis)",
    "Penganiayaan (mis: fisik, psikologis, seksual)",
    "Gangguan pendengaran",
    "Gangguan penglihatan",
    "Penyalahgunaan zat",
    "Ketidakmampuan belajar",
    "Anak adopsi",
    "Kejadian bencana",
    "Ekonomi lemah"
  ],
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
      "nama": "Promosi perkembangan anak",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan khusus anak dan kemampuan adaptasi anak",
          "Fasilitasi hubungan anak dengan teman sebaya",
          "Dukung anak berinteraksi dengan anak lain",
          "Dukung anak mengekpresikan perasaannya secara positif",
          "Dukung anak dalam bermimpi atau berfantasi sewajarnya",
          "Dukung partisipasi anak di sekolah, ekstrakulikuler dan aktivitas komunitas",
          "Berikan mainan yang sesuai dengan usia anak",
          "Bernyanyi Bersama anak lagu-lagu yang disukai anak",
          "Bacakan cerita/dongeng untuk anak",
          "Diskusikan bersama remaja tujuan dan harapannya",
          "Sediakan kesempatan dan alat-alat untuk menggambar, melukis, dan mewarnai",
          "Sediakan mainan berupa puzzle dan maze",
          "Jelaskan nama-nama benda obyek yang ada di lingkungan sekitar",
          "Ajarkan pengasuh milestones perkembangan dan perilaku yang dibentuk",
          "Ajarkan sikap kooperatif, bukan kompetisi diantara anak",
          "Ajarkan anak cara meminta bantuan dari anak lain, jika perlu",
          "Ajarkan teknik asertif pada anak dan remaja",
          "Demonstrasikan kegiatan yang meningkatkan perkembangan pada pengasuh",
          "Rujuk untuk konseling, jika perlu"
        ]
      }
    },
    {
      "kode": "I.10341",
      "nama": "Promosi perkembangan remaja",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tahap perkembangan remaja",
          "Sediakan bimbingan dan konseling  Kesehatan remaja pada remaja dan keluarga/orang tua/pengasuh",
          "Tingkatkan personal hygiene dan penampilan diri",
          "Dukung partisipasi dalam olahraga yang aman secara teratur",
          "Fasilitasi kemampuan pembuatan keputusan",
          "Dukung keterampilan komunikasi",
          "Dukung keterampilan sikap asertif",
          "Fasilitasi rasa tanggung jawab pada diri dan orang lain",
          "Dukung respons anti-kekerasan dalam menyelesaikan konflik",
          "Dukung perkembangan dan pertahankan hubungan sosial",
          "Dukung aktivitas ekstrakulikuler",
          "Jelaskan perkembangan normal remaja",
          "Ajarkan untuk mengenali masalah Kesehatan dan penyimpangan pada masa remaja (mis: anemia, masalah Kesehatan gigi, kematangan seksual abnormal, alkohol, rokok, penyalahgunaan obat-obatan, gangguan citra tubuh, harga diri rendah)",
          "Ajarkan strategi pencegahan penyalahgunaan obat, alkohol, dan rokok.",
          "Rujuk untuk konseling atau hipnoterapi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0108",
  "slug": "risiko-gangguan-pertumbuhan",
  "kode": "D.0108",
  "nama": "Risiko Gangguan Pertumbuhan",
  "definisi": "Risiko gangguan pertumbuhan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan untuk bertumbuh sesuai...",
  "kategori": "Pertumbuhan dan Perkembangan",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Ketidakadekuatan nutrisi",
    "Penyakit kronis",
    "Nafsu makan tidak terkontrol",
    "Prematuritas",
    "Terpapar teratogen",
    "Ketidakadekuatan nutrisi maternal",
    "Proses infeksi",
    "Proses infeksi maternal",
    "Perilaku maladaptif",
    "Penyalahgunaan zat",
    "Kelainan genetik/kongenital",
    "Penganiayaan (mis: fisik, psikologis, seksual)",
    "Ekonomi lemah"
  ],
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
      "nama": "Skrining kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi target populasi skrining kesehatan",
          "Lakukan informed consent skrining Kesehatan",
          "Sediakan akses layanan skrining (mis: waktu dan tempat)",
          "Jadwalkan waktu skrining Kesehatan",
          "Gunakan instrument skrining yang valid dan akurat",
          "Sediakan lingkungan yang nyaman selama prosedur skrining Kesehatan",
          "Lakukan anamnesia, Riwayat Kesehatan, faktor risiko, dan pengobatan, jika perlu",
          "Lakukan pemeriksaan fisik, sesuai indikasi",
          "Jelaskan tujuan dan prosedur skrining Kesehatan",
          "Informasikan hasil skrining Kesehatan",
          "Rujuk untuk pemeriksaan diagnostik lanjut (mis: pap smear, mamografi, prostat, EKG), jika perlu."
        ]
      }
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi",
          "Ajarkan posisi duduk, jika mampu",
          "Ajarkan diet yang diprogramkan",
          "Kolaborasi pemberian medikasi sebelum makan (mis: Pereda nyeri, antiemetik), jika perlu",
          "Kolaborasi dengan ahli  gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0109",
  "slug": "defisit-perawatan-diri",
  "kode": "D.0109",
  "nama": "Defisit Perawatan Diri",
  "definisi": "Defisit perawatan diri merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan melakukan atau menyelesaikan...",
  "kategori": "Kebersihan Diri",
  "tipe": "Aktual",
  "keluhan": [
    "perawatan diri",
    "ADL",
    "mandi",
    "makan",
    "berpakaian"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menolak melakukan perawatan diri"
    ],
    "objektif": [
      "Tidak mampu mandi/mengenakan pakaian/makan/ke toilet/berhias secara mandiri",
      "Minat melakukan perawatan diri kurang"
    ]
  },
  "faktorTerkait": [
    "Gangguan musculoskeletal",
    "Gangguan neuromuskuler",
    "Kelemahan",
    "Gangguan psikologis dan/atau psikotik",
    "Penurunan motivasi/minat"
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
      "nama": "Dukungan Perawatan Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan aktivitas perawatan diri sesuai usia",
          "Monitor tingkat kemandirian",
          "Identifikasi kebutuhan alat bantu kebersihan diri, berpakaian, berhias, dan makan",
          "Sediakan lingkungan yang terapeutik (mis: suasana hangat, rileks, privasi)",
          "Siapkan keperluan pribadi (mis: parfum sikat gigi, dan sabun mandi)",
          "Dampingi dalam melakukan perawatan diri sampai mandiri",
          "Fasilitasi untuk menerima keadaan ketergantungan",
          "Fasilitasi kemandirian, bantu jika tidak mampu melakukan perawatan diri",
          "Jadwalkan rutinitas perawatan diri",
          "Anjurkan melakukan perawatan diri secara konsisten sesuai kemampuan"
        ]
      }
    },
    {
      "kode": "I.11349",
      "nama": "Dukungan Perawatan Diri: BAB/BAK",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan BAB/BAK sesuai usia",
          "Monitor integritas kulit pasien",
          "Buka pakaian yang diperlukan untuk memudahkan eliminasi",
          "Dukung penggunaan toilet/commode/pispot/urinal secara konsisten",
          "Jaga privasi selama eliminasi",
          "Ganti pakaian pasien setelah eliminasi, jika perlu",
          "Bersihkan alat bantu BAK/BAB setelah digunakan",
          "Latih BAK/BAB sesuai jadwal, jika perlu",
          "Sediakan alat bantu (mis. kateter eksternal, urinal), jika perlu",
          "Anjurkan BAK/BAB secara rutin",
          "Anjurkan ke kamar mandi/toilet, jika perlu"
        ]
      }
    },
    {
      "kode": "I.11350",
      "nama": "Dukungan Perawatan Diri: Berpakaian",
      "tindakan": {
        "terapeutik": [
          "Identifikasi usia dan budaya dalam membantu berpakaian/berhias",
          "Sediakan pakaian pada tempat yang mudah dijangkau",
          "Sediakan pakaian pribadi, sesuai kebutuhan",
          "Fasilitasi mengenakan pakaian, jika perlu",
          "Fasilitasi berhias (mis: menyisir rambut, merapikan kumis/jenggot)",
          "Jaga privasi selama berpakaian",
          "Tawarkan untuk laundry, jika perlu",
          "Berikan pujian terhadap kemampuan berpakaian secara mandiri",
          "Informasikan pakaian yang tersedia untuk dipilih, jika perlu",
          "Ajarkan menggunakan pakaian, jika perlu"
        ]
      }
    },
    {
      "kode": "I.11351",
      "nama": "Dukungan Perawatan Diri: Makan/Minum",
      "tindakan": {
        "terapeutik": [
          "Identifikasi diet yang dianjurkan",
          "Monitor kemampuan menelan",
          "Monitor status hidrasi pasien, jika perlu",
          "Ciptakan lingkungan yang menyenangkan selama makan",
          "Atur posisi yang nyaman untuk makan/minum",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Letakkan makanan di sisi mata yang sehat",
          "Sediakan sedotan untuk minum, sesuai kebutuhan",
          "Siapkan makanan dengan suhu yang meningkatkan nafsu makan",
          "Sediakan makanan dan minuman yang disukai",
          "Berikan bantuan saat makan/minum sesuai tingkat kemandirian, jika perlu",
          "Motivasi untuk makan di ruang makan, jika tersedia",
          "Jelaskan posisi makanan pada pasien yang mengalami gangguan penglihatan dengan menggunakan arah jarum jam (mis: sayur di jam 12, rendang di jam 3)",
          "Kolaborasi pemberian obat (mis: analgesik, antiemetik), sesuai indikasi"
        ]
      }
    },
    {
      "kode": "I.11352",
      "nama": "Dukungan Perawatan Diri: Mandi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi usia dan budaya dalam membantu kebersihan diri",
          "Identifikasi jenis bantuan yang dibutuhkan",
          "Monitor kebersihan tubuh (mis: rambut, mulut, kulit, kuku)",
          "Monitor integritas kulit",
          "Sediakan peralatan mandi (mis: sabun, sikat gigi, shampoo, pelembab kulit)",
          "Sediakan lingkungan yang aman dan nyaman",
          "Fasilitasi menggosok gigi, sesuai kebutuhan",
          "Fasilitasi mandi, sesuai kebutuhan",
          "Pertahankan kebiasaan kebersihan diri",
          "Berikan bantuan sesuai tingkat kemandirian",
          "Jelaskan manfaat mandi dan dampak tidak mandi terhadap  Kesehatan",
          "Ajarkan kepada keluarga cara memandikan pasien, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0110",
  "slug": "defisit-kesehatan-komunitas",
  "kode": "D.0110",
  "nama": "Defisit Kesehatan komunitas",
  "definisi": "Defisit kesehatan komunitas merupakan diagnosis keperawatan yang didefinisikan sebagai terdapatnya masalah Kesehatan atau faktor...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Terjadi masalah Kesehatan yang dialami komunitas",
      "Terdapat faktor risiko fisiologis dan/atau psikologis yang menyebabkan anggota komunitas menjalani perawatan"
    ]
  },
  "faktorTerkait": [
    "Hambatan akses ke pemberi pelayanan Kesehatan",
    "Keterbatasan sumber daya",
    "Program tidak memiliki anggaran yang cukup",
    "Proram tidak atau kurang didukung komunitas",
    "Komunitas kurang puas dengan program yang dijalankan",
    "Program tidak memiliki rencana evaluasi yang optimal",
    "Program tidak memiliki data hasil yang memadai",
    "Program tidak mengatasi seluruh masalah kesehatan komunitas"
  ],
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
      "nama": "Pengembangan Kesehatan Masyarakat",
      "tindakan": {
        "terapeutik": [
          "Identifikasi masalah atau isu Kesehatan dan prioritasnya",
          "Identifikasi potensi atau aset dalam masyarakat terkait isu yang dihadapi",
          "Identifikasi kekuatan dan partner dalam pengembangan Kesehatan",
          "Identifikasi pemimpin/tokoh dalam masyarakat",
          "Berikan kesempatan kepada setiap anggota masyarakat untuk berpartisipasi sesuai aset yang dimiliki",
          "Libatkan anggota masyarakat untuk meningkatkan kesadaran terhadap isu dan masalah Kesehatan yang dihadapi",
          "Libatkan masyarakat dalam musyawarah untuk mendefinisikan isu Kesehatan dan mengembangkan rencana kerja",
          "Libatkan masyarakat dalam proses perencanaan dan implementasi serta revisinya",
          "Libatkan anggota masyarakat dalam mengembangkan jaringan Kesehatan",
          "Pertahankan komunikasi yang terbuka dengan anggota masyarakat dan pihak-pihak yang terlibat",
          "Perkuat komunikasi antara individu dan kelompok untuk bermusyawarah terkait daya Tarik yang sama",
          "Fasilitasi struktur organisasi untuk meningkatkan kemampuan berkomunikasi dan bernegosiasi",
          "Kembangkan strategi dalam manajemen konflik",
          "Persatukan anggota masyarakat dengan cita-cita komunitas yang sama",
          "Bangun komitmen antar anggota masyarakat",
          "Kembangkan mekanisme keterlibatan tatanan lokal, regional bahkan nasional terkait isu Kesehatan komunitas"
        ]
      }
    },
    {
      "kode": "I.12472",
      "nama": "Promosi Perilaku Upaya Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi perilaku upaya Kesehatan yang dapat ditingkatkan",
          "Berikan lingkungan yang mendukung Kesehatan",
          "Orientasi pelayanan Kesehatan yang dapat dimanfaatkan",
          "Anjurkan persalinan ditolong oleh tenaga kesehatan",
          "Anjurkan memberi bayi ASI eksklusif",
          "Anjurkan menimbang balita setiap bulan",
          "Anjurkan menggunakan air bersih",
          "Anjurkan mencuci tangan dengan air bersih dan sabun",
          "Anjurkan menggunakan jamban sehat",
          "Anjurkan memberantas jentik di rumah seminggu sekali",
          "Anjurkan makan sayur dan buah setiap hari",
          "Anjurkan melakukan aktivitas fisik setiap hari",
          "Anjurkan tidak merokok di dalam rumah"
        ]
      }
    }
  ]
},
{
  "id": "0111",
  "slug": "defisit-pengetahuan",
  "kode": "D.0111",
  "nama": "Defisit Pengetahuan",
  "definisi": "Defisit pengetahuan merupakan diagnosis keperawatan yang didefinisikan sebagai ketiadaan atau kurangnya informasi kognitif yang berkaitan...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "pengetahuan",
    "info",
    "edukasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Menanyakan masalah yang dihadapi"
    ],
    "objektif": [
      "Menunjukkan perilaku tidak sesuai anjuran",
      "Menunjukkan persepsi yang keliru terhadap masalah"
    ]
  },
  "faktorTerkait": [
    "Keterbatasan kognitif",
    "Gangguan fungsi kognitif",
    "Kekeliruan mengikuti anjuran",
    "Kurang terpapar informasi",
    "Kurang minat dalam belajar",
    "Kurang mampu mengingat",
    "Ketidaktahuan menemukan sumber informasi"
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
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    }
  ]
},
{
  "id": "0112",
  "slug": "kesiapan-peningkatan-manajemen-kesehatan",
  "kode": "D.0112",
  "nama": "Kesiapan Peningkatan Manajemen Kesehatan",
  "definisi": "Kesiapan peningkatan manajemen kesehatan merupakan diagnosis keperawatan yang didefinisikan sebagai pola pengaturan dan pengintegrasian...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengekspresikan keinginan untuk mengelola masalah Kesehatan dan pencegahannya"
    ],
    "objektif": [
      "Pilihan hidup sehari-hari tepat untuk memenuhi tujuan program kesehatan"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Bimbingan Antisipatif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi metode penyelesaian masalah yang biasa digunakan",
          "Identifikasi kemungkinan perkembangan atau krisis situasional yang akan terjadi serta dampaknya pada individu dan keluarga",
          "Fasilitasi memutuskan bagaimana masalah akan diselesaikan",
          "Fasilitasi memutuskan siapa yang akan dilibatkan dalam  menyelesaikan masalah",
          "Gunakan contoh kasus untuk meningkatkan keterampilan menyelesaikan masalah",
          "Fasilitasi mengidentifikasi sumber daya yang tersedia",
          "Fasilitasi menyesuaikan diri dengan perubahan peran",
          "Jadwalkan kunjungan pada setiap tahap perkembangan atau sesuai kebutuhan",
          "Jadwalkan tindak lanjut untuk memantau atau memberi dukungan",
          "Berikan nomor kontak yang dapat dihubungi, jika perlu",
          "Libatkan keluarga dan pihak terkait, jika perlu",
          "Berikan referensi baik cetak ataupun elektronik (mis: materi pendidikan, pamflet)",
          "Jelaskan perkembangan dan perilaku normal",
          "Informasikan harapan yang realistis terkait perilaku pasien",
          "Latih Teknik koping yang dibutuhkan untuk mengatasi perkembangan atau krisis situasional",
          "Rujuk ke Lembaga pelayanan masyarakat, jika perlu"
        ]
      }
    },
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    },
    {
      "kode": "I.14502",
      "nama": "Identifikasi Risiko",
      "tindakan": {
        "terapeutik": [
          "Identifikasi risiko biologis, lingkungan, dan perilaku",
          "Identifikasi risiko secara berkala di masing-masing unit",
          "Identifikasi risiko baru sesuai perencanaan yang telah ditetapkan",
          "Tentukan metode pengelolaan risiko yang baik dan ekonomis",
          "Lakukan pengelolaan risiko secara efektif",
          "Lakukan update perencanaan secara regular (mis: bulanan, triwulan, tahunan)",
          "Buat perencanaan Tindakan yang memiliki timeline dan penanggungjawab yang jelas",
          "Dokumentasikan risiko secara akurat"
        ]
      }
    },
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan untuk mengendalikan perilaku",
          "Diskusikan tanggung jawab terhadap perilaku",
          "Jadwalkan kegiatan terstruktur",
          "Ciptakan dan pertahankan lingkungan dan kegiatan perawatan konsisten setiap dinas",
          "Tingkatkan aktivitas fisik sesuai kemampuan",
          "Batasi jumlah pengunjung",
          "Bicara dengan nada rendah dan tenang",
          "Lakukan kegiatan pengalihan terhadap sumber agitasi",
          "Cegah perilaku pasif dan agresif",
          "Beri penguatan positif terhadap keberhasilan mengendalikan perilaku",
          "Lakukan pengekangan fisik sesuai indikasi",
          "Hindari bersikap menyudutkan dan menghentikan pembicaraan",
          "Hindari sikap mengancam atau berdebat",
          "Hindari berdebat atau menawar batas perilaku yang telah ditetapkan",
          "Informasikan keluarga bahwa keluarga sebagai dasar pembentukan kognitif"
        ]
      }
    },
    {
      "kode": "I.12464",
      "nama": "Penentuan Tujuan Bersama",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tujuan-tujuan yang akan dicapai",
          "Identifikasi cara mencapai tujuan secara konstruktif",
          "Nyatakan tujuan dengan kalimat positif dan jelas",
          "Tetapkan skala pencapaian tujuan, jika perlu",
          "Fasilitasi memecah tujuan kompleks menjadi langkah kecil yang mudah dilakukan",
          "Berikan batasan pada peran perawat dan pasien secara jelas",
          "Diskusikan sumber daya yang ada untuk memenuhi tujuan",
          "Diskusikan pengembangan rencana untuk memenuhi tujuan",
          "Prioritaskan aktivitas yang dapat membantu pencapaian tujuan",
          "fasilitasi dalam mengidentifikasi hasil yang diharapkan untuk setiap tujuan",
          "Tetapkan batas waktu yang realistis",
          "Diskusikan indikator pengukuran untuk setiap tujuan (mis: perilaku)",
          "Tetapkan evaluasi secara periodik untuk menilai kemajuan sesuai tujuan",
          "HItung skor pencapaian tujuan",
          "Modifikasi rencana jika tujuan tidak tercapai",
          "Anjurkan mengenal masalah yang dialami",
          "Anjurkan mengembangkan harapan realistis",
          "Anjurkan mengidentifikasi kekuatan dan kemampuan sendiri",
          "Anjurkan mengidentifikasi nilai dan sistem kepercayaan saat menetapkan tujuan",
          "Anjurkan mengidentifikasi tujuan realistis dan dapat dicapai"
        ]
      }
    }
  ]
},
{
  "id": "0113",
  "slug": "kesiapan-peningkatan-pengetahuan",
  "kode": "D.0113",
  "nama": "Kesiapan Peningkatan Pengetahuan",
  "definisi": "Kesiapan peningkatan pengetahuan merupakan diagnosis keperawatan yang didefinisikan sebagai perkembangan informasi kognitif yang...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "pengetahuan",
    "info",
    "edukasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan minat dalam belajar",
      "Menjelaskan pengetahuan tentang suatu topik",
      "Menggambarkan pengalaman sebelumnya yang sesuai dengan topik"
    ],
    "objektif": [
      "Perilaku sesuai dengan pengetahuan"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    },
    {
      "kode": "I.12470",
      "nama": "Promosi Kesiapan Penerimaan Informasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi informasi yang akan disampaikan",
          "Identifikasi pemahaman tentang kondisi kesehatan saat ini",
          "Identifikasi kesiapan menerima informasi",
          "Lakukan penguatan potensi pasien dan keluarga untuk menerima informasi",
          "Libatkan pengambil keputusan dalam keluarga untuk menerima informasi",
          "Fasilitasi mengenali kondisi tubuh yang membutuhkan layanan keperawatan",
          "Dahulukan menyampaikan informasi baik (positif) sebelum menyampaikan informasi kurang baik (negatif) terkait kondisi pasien",
          "Berikan nomor kontak yang dapat dihubungi jika pasien membutuhkan bantuan",
          "Catat identitas dan nomor kontak pasien untuk mengingatkan atau follow up kondisi pasien",
          "Fasilitasi akses pelayanan pada saat dibutuhkan",
          "Berikan informasi berupa alur, leaflet, atau gambar untuk memudahkan pasien mendapatkan informasi Kesehatan",
          "Anjurkan keluarga mendampingi pasien selama fase akut, progresif, atau terminal, jika memungkinkan"
        ]
      }
    }
  ]
},
{
  "id": "0114",
  "slug": "ketidakpatuhan",
  "kode": "D.0114",
  "nama": "Ketidakpatuhan",
  "definisi": "Ketidakpatuhan merupakan diagnosis keperawatan yang didefinisikan sebagai perilaku individu dan/atau pemberi asuhan tidak mengikuti rencana",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Menolak menjalani perawatan/pengobatan",
      "Menolak mengikuti anjuran"
    ],
    "objektif": [
      "Perilaku tidak mengikuti program perawatan/pengobatan",
      "Perilaku tidak menjalankan anjuran"
    ]
  },
  "faktorTerkait": [
    "Disabilitas (mis: penurunan daya ingat, defisit sensorik/motorik)",
    "Efek samping program perawatan/pengobatan",
    "Beban pembiayaan program perawatan/pengobatan",
    "Lingkungan tidak terapeutik",
    "Program terapi kompleks dan/atau lama",
    "Hambatan mengakses pelayanan Kesehatan (mis: gangguan mobilisasi, masalah transportasi, ketiadaan orang merawat anak di rumah, cuaca tidak menentu)",
    "Program terapi tidak ditanggung asuransi",
    "Ketidakadekuatan pemahaman (sekunder akibat defisit kognitif, kecemasan, gangguan penglihatan/pendengaran, kelelahan, kurang motivasi)"
  ],
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
      "nama": "Dukungan Kepatuhan Program Pengobatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kepatuhan menjalani program pengobatan",
          "Buat komitmen menjalani program pengobatan dengan baik",
          "Buat jadwal pendampingan keluarga untuk bergantian menemani pasien selama menjalani program pengobatan, jika perlu",
          "Dokumentasikan aktivitas selama menjalani program pengobatan",
          "Diskusikan hal-hal yang dapat mendukung atau menghambat berjalannya program pengobatan",
          "Libatkan keluarga untuk mendukung program pengobatan yang dijalani",
          "Informasikan program pengobatan yang harus dijalani",
          "Informasikan manfaat yang akan diperoleh jika teratur menjalani program pengobatan",
          "Anjurkan keluarga untuk mendampingi dan merawat pasien selama menjalani program pengobatan",
          "Anjurkan pasien dan keluarga melakukan konsultasi ke pelayanan  Kesehatan terdekat, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09277",
      "nama": "Dukungan tanggung jawab pada diri sendiri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi persepsi tentang masalah Kesehatan",
          "Monitor pelaksanaan tanggung jawab",
          "Berikan kesempatan merasakan memiliki tanggung jawab",
          "Tingkatkan rasa tanggung jawab atas perilaku sendiri",
          "Hindari berdebat atau tawar menawar tentang perannya di ruang perawatan",
          "Berikan penguatan dan umpan balik positif jika melaksanakan tanggung jawab atau mengubah perilaku",
          "Diskusikan tanggung jawab terhadap profesi pemberi asuhan",
          "Diskusikan konsekuensi tidak melaksanakan tanggung jawab"
        ]
      }
    },
    {
      "kode": "I.09311",
      "nama": "Promosi Kesadaran Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keadaan emosional saat ini",
          "Identifikasi respons yang ditunjukkan berbagai situasi",
          "Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri",
          "Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi",
          "Diskusikan dampak penyakit pada konsep diri",
          "Ungkapkan penyangkalan tentang kenyataan",
          "Motivasi dalam meningkatkan kemampuan belajar",
          "Anjurkan mengenali pikiran dan perasaan tentang diri",
          "Anjurkan menyadari bahwa setiap orang unik",
          "Anjurkan mengungkapkan perasaan (mis: marah atau depresi)",
          "Anjurkan meminta bantuan orang lain, sesuai kebutuhan",
          "Anjurkan mengubah pandangan diri sebagai korban",
          "Anjurkan mengidentifikasi perasaan bersalah",
          "Anjurkan mengidentifikasi situasi yang memicu kecemasan",
          "Anjurkan mengevaluasi Kembali persepsi negatif tentang diri",
          "Anjurkan dalam mengekspresikan diri dengan kelompok sebaya",
          "Ajarkan cara membuat prioritas hidup",
          "Latih kemampuan positif diri yang dimiliki"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik"
        ]
      }
    }
  ]
},
{
  "id": "0115",
  "slug": "manajemen-kesehatan-keluarga-tidak-efektif",
  "kode": "D.0115",
  "nama": "Manajemen Kesehatan Keluarga Tidak Efektif",
  "definisi": "Manajemen kesehatan keluarga tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai pola penanganan masalah Kesehatan...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan tidak memahami masalah Kesehatan yang diderita",
      "Mengungkapkan kesulitan menjalankan perawatan yang ditetapkan"
    ],
    "objektif": [
      "Gejala penyakit anggota keluarga semakin memberat",
      "Aktivitas keluarga untuk mengatasi masalah Kesehatan tidak tepat"
    ]
  },
  "faktorTerkait": [
    "Kompleksitas sistem pelayanan Kesehatan",
    "Kompleksitas program perawatan/pengobatan",
    "Konflik pengambilan keputusan",
    "Kesulitan ekonomi",
    "Banyak tuntutan",
    "Konflik keluarga"
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
      "nama": "Dukungan Koping Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respons emosional terhadap kondisi saat ini",
          "Identifikasi beban prognosis secara psikologis",
          "Identifikasi pemahaman tentang keputusan perawatan setelah pulang",
          "Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga kesehatan",
          "Dengarkan masalah, perasaan, dan pertanyaan keluarga",
          "Terima nilai-nilai keluarga dengan cara yang tidak menghakimi",
          "Diskusikan rencana medis dan perawatan",
          "Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga",
          "Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu",
          "Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai",
          "Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)",
          "Fasilitasi anggota keluarga melalui proses kematian dan berduka, jika perlu",
          "Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien",
          "Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan",
          "Hargai dan dukung mekanisme koping adaptif yang digunakan",
          "Berikan kesempatan berkunjung bagi anggota keluarga",
          "Informasikan kemajuan pasien secara berkala",
          "Informasikan fasilitas perawatan Kesehatan yang tersedia",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.13477",
      "nama": "Dukungan Keluarga Merencanakan Perawatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan dan harapan keluarga tentang Kesehatan",
          "Identifikasi konsekuensi tidak melakukan Tindakan Bersama keluarga",
          "Identifikasi sumber-sumber yang dimiliki keluarga",
          "Identifikasi Tindakan yang dapat dilakukan keluarga",
          "Motivasi pengembangan sikap dan emosi yang mendukung upaya Kesehatan",
          "Gunakan sarana dan fasilitas yang ada dalam keluarga",
          "Ciptakan perubahan lingkungan rumah secara optimal",
          "Informasikan fasilitas Kesehatan yang ada di lingkungan keluarga",
          "Anjurkan menggunakan fasilitas Kesehatan yang ada",
          "Ajarkan cara perawatan yang bisa dilakukan keluarga"
        ]
      }
    },
    {
      "kode": "I.12482",
      "nama": "Koordinasi Diskusi Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gangguan Kesehatan setiap anggota keluarga",
          "Ciptakan suasana rumah yang sehat dan mendukung perkembangan kepribadian anggota keluarga",
          "Fasilitasi keluarga mendiskusikan masalah Kesehatan yang sedang dialami",
          "Pertahankan hubungan timbal balik antara keluarga dan fasilitas Kesehatan",
          "Libatkan keluarga dalam mengambil keputusan untuk melakukan Tindakan yang tepat",
          "Berikan perawatan kepada anggota keluarga yang sakit",
          "Anjurkan anggota keluarga dalam memanfaatkan sumber-sumber yang ada dalam masyarakat"
        ]
      }
    },
    {
      "kode": "I.13486",
      "nama": "Pendampingan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan keluarga terkait masalah Kesehatan keluarga",
          "Identifikasi tugas Kesehatan keluarga yang terhambat",
          "Identifikasi dukungan spiritual yang mungkin untuk keluarga",
          "Yakinkan keluarga bahwa anggota keluarganya akan diberikan pelayanan terbaik",
          "Berikan harapan yang realistis",
          "Bina hubungan saling percaya dengan keluarga",
          "Dengarkan keinginan dan perasaan keluarga",
          "Dukung mekanisme koping adaptif yang digunakan keluarga",
          "Advokasi keluarga, jika perlu",
          "Ajarkan mekanisme koping yang dapat dijalankan keluarga"
        ]
      }
    }
  ]
},
{
  "id": "0116",
  "slug": "manajemen-kesehatan-tidak-efektif",
  "kode": "D.0116",
  "nama": "Manajemen Kesehatan Tidak Efektif",
  "definisi": "Manajemen kesehatan tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai pola pengaturan dan pengintegrasian penanganan..",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [
    "manajemen",
    "pengelolaan",
    "kesehatan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengungkapkan kesulitan dalam menjalani program perawatan"
    ],
    "objektif": [
      "Gagal melakukan tindakan untuk mengurangi faktor risiko",
      "Gagal menerapkan program perawatan/pengobatan dalam kehidupan sehari-hari",
      "Aktivitas hidup sehari-hari tidak efektif untuk memenuhi tujuan kesehatan"
    ]
  },
  "faktorTerkait": [
    "Kompleksitas sistem pelayanan Kesehatan",
    "Kompleksitas program perawatan/pengobatan",
    "Konflik pengambilan keputusan",
    "Kurang terpapar informasi",
    "Kesulitan ekonomi",
    "Tuntutan berlebih",
    "Konflik keluarga",
    "Ketidakefektifan pola perawatan Kesehatan keluarga",
    "Ketidakcukupan petunjuk untuk bertindak",
    "Kekurangan dukungan sosial"
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
      "nama": "Dukungan Pengambilan Keputusan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi persepsi mengenai masalah dan informasi yang memicu konflik",
          "Fasilitasi mengklarifikasi nilai dan harapan yang membantu membuat pilihan",
          "Diskusikan kelebihan dan kekurangan dari setiap solusi",
          "Fasilitasi melihat situasi secara realistic",
          "Motivasi mengungkapkan tujuan perawatan yang diharapkan",
          "Fasilitasi pengambilan keputusan secara kolaboratif",
          "Hormati hak pasien untuk menerima atau menolak informasi",
          "Fasilitasi menjelaskan keputusan kepada orang lain, jika perlu",
          "Fasilitasi hubungan antara pasien, keluarga, dan tenaga Kesehatan lainnya",
          "Jelaskan alternatif solusi secara jelas",
          "Berikan informasi yang diminta pasien",
          "Kolaborasi dengan tenaga Kesehatan lain dalam memfasilitasi pengambilan keputusan"
        ]
      }
    },
    {
      "kode": "I.09277",
      "nama": "Dukungan tanggung jawab pada diri sendiri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi persepsi tentang masalah Kesehatan",
          "Monitor pelaksanaan tanggung jawab",
          "Berikan kesempatan merasakan memiliki tanggung jawab",
          "Tingkatkan rasa tanggung jawab atas perilaku sendiri",
          "Hindari berdebat atau tawar menawar tentang perannya di ruang perawatan",
          "Berikan penguatan dan umpan balik positif jika melaksanakan tanggung jawab atau mengubah perilaku",
          "Diskusikan tanggung jawab terhadap profesi pemberi asuhan",
          "Diskusikan konsekuensi tidak melaksanakan tanggung jawab"
        ]
      }
    },
    {
      "kode": "I.12383",
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    },
    {
      "kode": "I.14525",
      "nama": "Pelibatan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan keluarga untuk terlibat dalam perawatan",
          "Ciptakan hubungan terapeutik pasien dengan keluarga dalam perawatan",
          "Diskusikan cara perawatan di rumah (mis: kelompok, perawatan di rumah, atau rumah singgah)",
          "Motivasi keluarga mengembangkan aspek positif rencana perawatan",
          "Fasilitasi keluarga membuat keputusan perawatan",
          "Jelaskan kondisi pasien kepada keluarga",
          "Informasikan tingkat ketergantungan pasien kepada keluarga",
          "Informasikan harapan pasien kepada keluarga",
          "Anjurkan keluarga bersikap asertif dalam perawatan",
          "Anjurkan keluarga terlibat dalam perawatan"
        ]
      }
    }
  ]
},
{
  "id": "0117",
  "slug": "pemeliharaan-kesehatan-tidak-efektif",
  "kode": "D.0117",
  "nama": "Pemeliharaan Kesehatan Tidak Efektif",
  "definisi": "Pemeliharaan kesehatan tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan mengidentifikasi...",
  "kategori": "Penyuluhan dan Pembelajaran",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Kurang menunjukkan perilaku adaptif terhadap perubahan lingkungan",
      "Kurang menunjukkan pemahaman tentang perilaku sehat",
      "Tidak mampu menjalankan perilaku sehat"
    ]
  },
  "faktorTerkait": [
    "Hambatan kognitif",
    "Ketidaktuntasan proses berduka",
    "Ketidakadekuatan keterampilan berkomunikasi",
    "Kurangnya keterampilan motoric halus/kasar",
    "Ketidakmampuan membuat penilaian yang tepat",
    "Ketidakmampuan mengatasi masalah (individu atau keluarga)",
    "Ketidakcukupan sumber daya (mis: keuangan, fasilitas)",
    "Gangguan persepsi",
    "Tidak terpenuhinya tugas perkembangan"
  ],
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
      "nama": "Edukasi Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat",
          "Sediakan materi dan media Pendidikan  Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan faktor risiko yang dapat mempengaruhi Kesehatan",
          "Ajarkan perilaku hidup bersih dan sehat",
          "Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat"
        ]
      }
    },
    {
      "kode": "I.09282",
      "nama": "Kontrak Perilaku Positif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan mental dan kognitif untuk membuat kontrak",
          "Identifikasi cara dan sumber daya terbaik untuk mencapai tujuan",
          "Identifikasi hambatan dalam menerapkan perilaku positif",
          "Monitor pelaksanaan perilaku ketidaksesuaian dan kurang komitmen untuk memenuhi kontrak",
          "Ciptakan lingkungan yang terbuka untuk membuat kontrak perilaku",
          "Fasilitasi pembuatan kontrak tertulis",
          "Diskusikan perilaku Kesehatan yang ingin diubah",
          "Diskusikan tujuan positif jangka pendek dan jangka Panjang yang realistis dan dapat dicapai",
          "Diskusikan pengembangan rencana perilaku positif",
          "Diskusikan cara mengamati perilaku (mis: tabel kemajuan perilaku)",
          "Diskusikan penghargaan yang diinginkan Ketika tujuan tercapai, jika perlu",
          "Diskusikan konsekuensi atau sanksi tidak memenuhi kontrak",
          "Tetapkan batas waktu yang dibutuhkan untuk pelaksanaan Tindakan yang realistis",
          "Fasilitasi meninjau ulang kontrak dan tujuan, jika perlu",
          "Pastikan kontrak ditandatangani oleh semua pihak yang terlibat, jika perlu",
          "Libatkan keluarga dalam proses kontrak, jika perlu",
          "Anjurkan menuliskan tujuan sendiri, jika perlu"
        ]
      }
    },
    {
      "kode": "I.12464",
      "nama": "Penentuan Tujuan Bersama",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tujuan-tujuan yang akan dicapai",
          "Identifikasi cara mencapai tujuan secara konstruktif",
          "Nyatakan tujuan dengan kalimat positif dan jelas",
          "Tetapkan skala pencapaian tujuan, jika perlu",
          "Fasilitasi memecah tujuan kompleks menjadi langkah kecil yang mudah dilakukan",
          "Berikan batasan pada peran perawat dan pasien secara jelas",
          "Diskusikan sumber daya yang ada untuk memenuhi tujuan",
          "Diskusikan pengembangan rencana untuk memenuhi tujuan",
          "Prioritaskan aktivitas yang dapat membantu pencapaian tujuan",
          "fasilitasi dalam mengidentifikasi hasil yang diharapkan untuk setiap tujuan",
          "Tetapkan batas waktu yang realistis",
          "Diskusikan indikator pengukuran untuk setiap tujuan (mis: perilaku)",
          "Tetapkan evaluasi secara periodik untuk menilai kemajuan sesuai tujuan",
          "HItung skor pencapaian tujuan",
          "Modifikasi rencana jika tujuan tidak tercapai",
          "Anjurkan mengenal masalah yang dialami",
          "Anjurkan mengembangkan harapan realistis",
          "Anjurkan mengidentifikasi kekuatan dan kemampuan sendiri",
          "Anjurkan mengidentifikasi nilai dan sistem kepercayaan saat menetapkan tujuan",
          "Anjurkan mengidentifikasi tujuan realistis dan dapat dicapai"
        ]
      }
    },
    {
      "kode": "I.12472",
      "nama": "Promosi Perilaku Upaya Kesehatan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi perilaku upaya Kesehatan yang dapat ditingkatkan",
          "Berikan lingkungan yang mendukung Kesehatan",
          "Orientasi pelayanan Kesehatan yang dapat dimanfaatkan",
          "Anjurkan persalinan ditolong oleh tenaga kesehatan",
          "Anjurkan memberi bayi ASI eksklusif",
          "Anjurkan menimbang balita setiap bulan",
          "Anjurkan menggunakan air bersih",
          "Anjurkan mencuci tangan dengan air bersih dan sabun",
          "Anjurkan menggunakan jamban sehat",
          "Anjurkan memberantas jentik di rumah seminggu sekali",
          "Anjurkan makan sayur dan buah setiap hari",
          "Anjurkan melakukan aktivitas fisik setiap hari",
          "Anjurkan tidak merokok di dalam rumah"
        ]
      }
    }
  ]
},
{
  "id": "0118",
  "slug": "gangguan-interaksi-sosial",
  "kode": "D.0118",
  "nama": "Gangguan Interaksi Sosial",
  "definisi": "Gangguan interaksi sosial merupakan diagnosis keperawatan yang didefinisikan sebagai kuantitas dan/atau kualitas sosial yang kurang atau...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "interaksi",
    "sosial",
    "berinteraksi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa tidak nyaman dengan situasi sosial",
      "Merasa sulit menerima atau mengkomunikasikan perasaan"
    ],
    "objektif": [
      "Kurang responsive atau tertarik pada orang lain",
      "Tidak berminat melakukan kontak emosi dan fisik"
    ]
  },
  "faktorTerkait": [
    "Defisiensi bicara",
    "Hambatan perkembangan/maturase",
    "Ketiadaan orang terdekat",
    "Perubahan neurologis (mis: kelahiran prematur, distres fetal, persalinan cepat, atau persalinan lama)",
    "Disfungsi sistem keluarga",
    "Ketidakteraturan atau kekacauan lingkungan",
    "Penganiayaan atau pengabaian anak",
    "Hubungan orang tua-anak tidak memuaskan",
    "Model peran negatif",
    "Impulsif",
    "Perilaku menentang",
    "Perilaku agresif",
    "Keengganan berpisah dengan orang terdekat"
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
      "nama": "Modifikasi Perilaku Keterampilan Sosial",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab kurangnya keterampilan sosial",
          "Identifikasi focus pelatihan keterampilan sosial",
          "Motivasi untuk berlatih keterampilan sosial",
          "Beri umpan balik positif (mis: pujian atau penghargaan) terhadap kemampuan sosialisasi",
          "Libatkan keluarga selama Latihan keterampilan sosial, jika perlu",
          "Jelaskan tujuan melatih keterampilan sosial",
          "Jelaskan respons dan konsekuensi keterampilan sosial",
          "Anjurkan mengungkapkan perasaan akibat masalah yang dialami",
          "Anjurkan mengevaluasi pencapaian setiap interaksi",
          "Edukasi keluarga untuk dukungan keterampilan sosial",
          "Latih keterampilan sosial secara bertahap"
        ]
      }
    },
    {
      "kode": "I.13498",
      "nama": "Promosi Sosialisasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan melakukan interaksi dengan orang lain",
          "Identifikasi hambatan melakukan interaksi dengan orang lain",
          "Motivasi meningkatkan keterlibatan dalam suatu hubungan",
          "Motivasi kesabaran dalam mengembangkan suatu hubungan",
          "Motivasi berpartisipasi dalam aktivitas baru dan kegiatan kelompok",
          "Motivasi berinteraksi di luar lingkungan (mis: jalan-jalan, ke toko buku)",
          "Diskusikan kekuatan dan keterbatasan dalam berkomunikasi dengan orang lain",
          "Diskusikan perencanaan kegiatan di masa depan",
          "Berikan umpan balik positif dalam perawatan diri",
          "Berikan umpan balik positif pada setiap peningkatan kemampuan",
          "Anjurkan berinteraksi dengan orang lain secara bertahap",
          "Anjurkan ikut serta kegiatan sosial dan kemasyarakatan",
          "Anjurkan berbagi pengalaman dengan orang lain",
          "Anjurkan meningkatkan kejujuran diri dan menghormati hak orang lain",
          "Anjurkan penggunaan alat bantu (mis: kacamata dan alat bantu dengar)",
          "Anjurkan membuat perencanaan kelompok kecil untuk kegiatan khusus",
          "Latih bermain peran untuk meningkatkan keterampilan komunikasi",
          "Latih mengekspresikan marah dengan tepat"
        ]
      }
    }
  ]
},
{
  "id": "0119",
  "slug": "gangguan-komunikasi-verbal",
  "kode": "D.0119",
  "nama": "Gangguan Komunikasi Verbal",
  "definisi": "Gangguan komunikasi verbal merupakan diagnosis keperawatan yang didefinisikan sebagai penurunan, perlambatan, atau ketiadaan kemampuan...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "komunikasi",
    "bicara",
    "berbicara"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Tidak mampu berbicara atau mendengar",
      "Menunjukkan respon tidak sesuai"
    ]
  },
  "faktorTerkait": [
    "Penurunan sirkulasi serebral",
    "Gangguan neuromuskuler",
    "Gangguan pendengaran",
    "Gangguan muskuloskeletal",
    "Kelainan palatum",
    "Hambatan fisik (misal: terpasang trakeostomi, intubasi, krikotiroidektomi)",
    "Hambatan individu (misal: ketakutan, kecemasan, merasa malu, emosional, kurang privasi)",
    "Hambatan psikologis (misal: gangguan psikotik, gangguan konsep diri, harga diri rendah, gangguan emosi)",
    "Hambatan lingkungan (misal: ketidakcukupan informasi,ketiadaan orang terdekat, ketidaksesuaian budaya, Bahasa asing)"
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
      "nama": "Promosi Komunikasi: Defisit Bicara",
      "tindakan": {
        "terapeutik": [
          "Monitor kecepatan, tekanan, kuantitias, volume, dan diksi bicara",
          "Monitor progress kognitif, anatomis, dan fisiologis yang berkaitan dengan bicara (mis: memori, pendengaran, dan Bahasa)",
          "Monitor frustasi, marah, depresi, atau hal lain yang mengganggu bicara",
          "Identifikasi perilaku emosional dan fisik sebagai bentuk komunikasi",
          "Gunakan metode komunikasi alternatif (mis: menulis, mata berkedip, papan komunikasi dengan gambar dan huruf, isyarat tangan, dan komputer)",
          "Sesuaikan gaya komunikasi dengan kebutuhan (mis: berdiri di depan pasien, dengarkan dengan seksama, tunjukkan satu gagasan atau pemikiran sekaligus,  bicaralah dengan perlahan sambal menghindari teriakan, gunakan komunikasi tertulis, atau meminta bantuan keluarga untuk memahami ucapan pasien)",
          "Modifikasi lingkungan untuk meminimalkan bantuan",
          "Ulangi apa yang disampaikan pasien",
          "Berikan dukungan psikologis",
          "Gunakan juru bicara, jika perlu",
          "Anjurkan berbicara perlahan",
          "Ajarkan pasien dan keluarga proses kognitif, anatomis, dan fisiologis yang berhubungan dengan kemampuan bicara",
          "Rujuk ke ahli patologi bicara atau terapis"
        ]
      }
    },
    {
      "kode": "I.13493",
      "nama": "Promosi Komunikasi: Defisit Pendengaran",
      "tindakan": {
        "terapeutik": [
          "Periksa kemampuan pendengaran",
          "Monitor akumulasi serumen berlebihan",
          "Identifikasi metode komunikasi yang disukai pasien (mis: lisan, tulisan, Gerakan bibir, Bahasa isyarat)",
          "Gunakan Bahasa sederhana",
          "Gunakan Bahasa Isyarat, jika perlu",
          "Verifikasi apa yang dikatakan atau ditulis pasien",
          "Fasilitasi penggunaan alat bantu dengar",
          "Berhadapan dengan pasien secara langsung selama berkomunikasi",
          "Pertahankan kontak mata selama berkomunikasi",
          "Hindari merokok, mengunyah makanan atau permen karet, dan menutup mulut saat berbicara",
          "Hindari kebisingan saat berkomunikasi",
          "Hindari berkomunikasi lebih dari 1 meter dari pasien",
          "Lakukan irigasi telinga, jika perlu",
          "Pertahankan kebersihan telinga",
          "Anjurkan menyampaikan pesan dengan isyarat",
          "Ajarkan cara membersihkan serumen dengan tepat"
        ]
      }
    },
    {
      "kode": "I.13494",
      "nama": "Promosi Komunikasi: Defisit Visual",
      "tindakan": {
        "terapeutik": [
          "Periksa kemampuan penglihatan",
          "Monitor dampak gangguan penglihatan (mis: risiko cidera, depresi, kegelisahan, kemampuan melakukan aktivitas sehari-hari",
          "Fasilitasi peningkatan stimulasi indra lainnya (mis: aroma, rasa, tekstur makanan)",
          "Pastikan kaca mata atau lensa kontak berfungsi dengan baik",
          "Sediakan pencahayaan cukup",
          "Berikan bacaan dengan huruf besar",
          "Hindari penataan letak lingkungan tanpa memberitahu",
          "Sediakan alat bantu (mis: jam, telepon)",
          "Fasilitasi membaca surat, surat kabar, atau media informasi lainnya",
          "Gunakan warna terang dan kontras di lingkungan",
          "Sediakan kaca pembesar, jika perlu",
          "Jelaskan lingkungan pada pasien",
          "Ajarkan keluarga cara membantu pasien berkomunikasi",
          "Rujuk pasien pada terapis, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0120",
  "slug": "gangguan-proses-keluarga",
  "kode": "D.0120",
  "nama": "Gangguan Proses Keluarga",
  "definisi": "Gangguan proses keluarga merupakan diagnosis keperawatan yang didefinisikan sebagai perubahan dalam hubungan atau fungsi keluarga.",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "keluarga",
    "family",
    "proses keluarga"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": [
      "Keluarga tidak mampu beradaptasi terhadap situasi",
      "Tidak mampu berkomunikasi secara terbuka diantara anggota keluarga"
    ]
  },
  "faktorTerkait": [
    "Perubahan status Kesehatan anggota keluarga",
    "Perubahan finansial keluarga",
    "Perubahan status sosial keluarga",
    "Perubahan interaksi dengan masyarakat",
    "Krisis perkembangan",
    "Transisi perkembangan",
    "Peralihan pengambil keputusan dalam keluarga",
    "Perubahan peran keluarga",
    "Krisis situasional",
    "Transisi situasional"
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
      "nama": "Dukungan Koping Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi respons emosional terhadap kondisi saat ini",
          "Identifikasi beban prognosis secara psikologis",
          "Identifikasi pemahaman tentang keputusan perawatan setelah pulang",
          "Identifikasi kesesuaian antara harapan pasien,  keluarga, dan tenaga  kesehatan",
          "Dengarkan masalah, perasaan, dan pertanyaan keluarga",
          "Terima nilai-nilai keluarga dengan cara yang tidak menghakimi",
          "Diskusikan rencana medis dan perawatan",
          "Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga",
          "Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu",
          "Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai",
          "Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)",
          "Fasilitasi anggota keluarga melalui  proses kematian dan berduka, jika perlu",
          "Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien",
          "Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan",
          "Hargai dan dukung mekanisme koping adaptif yang digunakan",
          "Berikan kesempatan berkunjung bagi anggota keluarga",
          "Informasikan kemajuan pasien secara berkala",
          "Informasikan fasilitas perawatan Kesehatan yang tersedia",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.13496",
      "nama": "Promosi Proses Efektif Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tipe proses keluarga",
          "Identifikasi masalah atau gangguan dalam proses keluarga",
          "Identifikasi kebutuhan perawatan mandiri di rumah untuk klien dan tetap beradaptasi dengan pola hidup keluarga",
          "Pertahankan interaksi yang berkelanjutan dengan anggota keluarga",
          "Motivasi anggota keluarga untuk melakukan aktivitas bersama seperti makan bersama, diskusi bersama keluarga",
          "Fasilitasi anggota keluarga melakukan kunjungan rumah sakit",
          "Susun jadwal aktivitas perawatan mandiri di rumah untuk mengurangi gangguan rutinitas keluarga",
          "Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepada anggota keluarga",
          "Diskusikan dukungan sosial dari sekitar keluarga",
          "Latih keluarga manajemen waktu jika perawatan di rumah dibutuhkan"
        ]
      }
    },
    {
      "kode": "I.09322",
      "nama": "Terapi Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi Riwayat Kesehatan keluarga",
          "Identifikasi pola komunikasi keluarga",
          "Identifikasi cara keluarga memecahkan masalah",
          "Identifikasi pembuatan keputusan dalam keluarga",
          "Identifikasi terjadinya pelecehan dalam keluarga",
          "Identifikasi kekuatan/sumber daya keluarga",
          "Identifikasi peran setiap anggota keluarga dalam sistem keluarga",
          "Identifikasi gangguan spesifik terkait harapan peran",
          "Identifikasi penyalahgunaan zat pada anggota keluarga",
          "Identifikasi penengah dalam keluarga",
          "Identifikasi ketidakpuasan dan/atau konflik yang terjadi",
          "Identifikasi kejadian saat ini atau akan terjadi yang mengancam keluarga",
          "Identifikasi kebutuhan dan harapan dalam keluarga",
          "Identifikasi hubungan hierarkis anggota keluarga",
          "Monitor respons merugikan terhadap terapi",
          "Fasilitasi diskusi keluarga",
          "Fasilitasi strategi menurunkan stres",
          "Fasilitasi restrukturisasi sistem keluarga, jika sesuai",
          "Diskusikan cara terbaik dalam menangani disfungsi perilaku dalam keluarga",
          "Diskusikan Batasan keluarga",
          "Diskusikan strategi penyelesaian masalah yang konstruktif",
          "Diskusikan rencana terapi dengan keluarga",
          "Diskusikan cara membudayakan perilaku baru",
          "Rencanakan strategi menghentikan terapi",
          "Anjurkan berkomunikasi lebih efektif",
          "Anjurkan anggota memprioritaskan dan memilih masalah keluarga",
          "Anjurkan semua anggota keluarga berpartisipasi dalam pekerjaan rumah tangga Bersama-sama (mis: makan Bersama)",
          "Anjurkan mengubah cara berhubungan dengan anggota keluarga lain"
        ]
      }
    }
  ]
},
{
  "id": "0121",
  "slug": "isolasi-sosial",
  "kode": "D.0121",
  "nama": "Isolasi Sosial",
  "definisi": "Isolasi sosial merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan untuk membina hubungan yang...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "isolasi",
    "menyendiri",
    "terisolasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Merasa ingin sendirian",
      "Merasa tidak aman di tempat umum"
    ],
    "objektif": [
      "Menarik diri",
      "Tidak berminat/menolak berinteraksi dengan orang lain atau lingkungan"
    ]
  },
  "faktorTerkait": [
    "Keterlambatan perkembangan",
    "Ketidakmampuan menjalin hubungan yang memuaskan",
    "Ketidaksesuaian minat dengan tahap perkembangan",
    "Ketidaksesuaian nilai-nilai dengan norma",
    "Ketidaksesuaian perilaku sosial dengan norma",
    "Perubahan penampilan fisik",
    "Perubahan status mental",
    "Ketidakadekuatan sumber daya personal (mis: disfungsi berduka, pengendalian diri buruk)"
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
      "nama": "Promosi Sosialisasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan melakukan interaksi dengan orang lain",
          "Identifikasi hambatan melakukan interaksi dengan orang lain",
          "Motivasi meningkatkan keterlibatan dalam suatu hubungan",
          "Motivasi kesabaran dalam mengembangkan suatu hubungan",
          "Motivasi berpartisipasi dalam aktivitas baru dan kegiatan kelompok",
          "Motivasi berinteraksi di luar lingkungan (mis: jalan-jalan, ke toko buku)",
          "Diskusikan kekuatan dan keterbatasan dalam berkomunikasi dengan orang lain",
          "Diskusikan perencanaan kegiatan di masa depan",
          "Berikan umpan balik positif dalam perawatan diri",
          "Berikan umpan balik positif pada setiap peningkatan kemampuan",
          "Anjurkan berinteraksi dengan orang lain secara bertahap",
          "Anjurkan ikut serta kegiatan sosial dan kemasyarakatan",
          "Anjurkan berbagi pengalaman dengan orang lain",
          "Anjurkan meningkatkan kejujuran diri dan menghormati hak orang lain",
          "Anjurkan penggunaan alat bantu (mis: kacamata dan alat bantu dengar)",
          "Anjurkan membuat perencanaan kelompok kecil untuk kegiatan khusus",
          "Latih bermain peran untuk meningkatkan keterampilan komunikasi",
          "Latih mengekspresikan marah dengan tepat"
        ]
      }
    },
    {
      "kode": "I.01026",
      "nama": "Terapi Aktivitas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi defisit tingkat aktivitas",
          "Identifikasi kemampuan berpartisipasi dalam aktivitas tertentu",
          "Identifikasi sumber daya untuk aktivitas yang diinginkan",
          "Identifikasi strategi meningkatkan partisipasi dalam aktivitas",
          "Identifikasi makna aktivitas rutin (mis: bekerja) dan waktu luang",
          "Monitor respons emosional, fisik, sosial, dan spiritual terhadap aktivitas",
          "Fasilitasi fokus pada kemampuan, bukan defisit yang dialami",
          "Sepakati komitmen untuk meningkatkan frekuensi dan rentang aktivitas",
          "Fasilitasi memilih aktivitas dan tetapkan tujuan aktivitas yang konsisten sesuai kemampuan fisik, psikologis, dan sosial",
          "Koordinasikan pemilhan aktivitas sesuai usia",
          "Fasilitasi makna aktivitas yang dipilih",
          "Fasilitasi transportasi untuk menghadiri aktivitas, jika sesuai",
          "Fasilitasi pasien dan keluarga dalam menyesuaikan lingkungan untuk mengakomodasi aktivitas yang dipilih",
          "Fasilitasi aktivitas rutin (mis: ambulasi, mobilisasi, dan perawatan diri), sesuai kebutuhan",
          "Fasilitasi aktivitas pengganti saat mengalami keterbatasan waktu, energi, atau gerak",
          "Fasilitasi aktivitas motorik kasar untuk pasien hiperaktif",
          "Tingkatkan aktivitas fisik untuk memelihara berat badan, jika sesuai",
          "Fasilitasi aktivitas motorik untuk merelaksasi otot",
          "Fasilitasi aktivitas aktivitas dengan komponen memori implisit dan emosional (mis: kegiatan keagamaan khusus) untuk pasien demensia, jika sesuai",
          "Libatkan dalam permainan kelompok yang tidak kompetitif, terstruktur, dan aktif",
          "Tingkatkan keterlibatan dalam aktivitas rekreasi dan diversifikasi untuk menurunkan kecemasan (mis: vocal group, bola voli, tenis meja, jogging, berenang, tugas sederhana, permainan sederhana, tugas rutin, tugas rumah tangga, perawatan diri, dan teka-teki dan kartu)",
          "Libatkan keluarga dalam aktivitas, jika perlu",
          "Fasilitasi mengembangkan motivasi dan penguatan diri",
          "Fasilitasi pasien dan keluarga memantau kemajuannya sendiri untuk mencapai tujuan",
          "Jadwalkan aktivitas dalam rutinitas sehari-hari",
          "Berikan penguatan positif atas partisipasi dalam aktivitas",
          "Jelaskan metode aktivitas fisik sehari-hari, jika perlu",
          "Ajarkan cara melakukan aktivitas yang dipilih",
          "Anjurkan melakukan aktivitas fisik, sosial, spiritual, dan kognitif dalam menjaga fungsi dan  Kesehatan",
          "Anjurkan terlibat dalam aktivitas kelompok atau terapi, jika sesuai",
          "Anjurkan keluarga untuk memberi penguatan positif atas partisipasi dalam aktivitas",
          "Kolaborasi dengan terapis okupasi dalam merencanakan dan memonitor program aktivitas, jika sesuai",
          "Rujuk pada pusat atau program aktivitas komunitas, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0122",
  "slug": "kesiapan-peningkatan-menjadi-orang-tua",
  "kode": "D.0122",
  "nama": "Kesiapan Peningkatan Menjadi Orang Tua",
  "definisi": "Kesiapan peningkatan menjadi orang tua merupakan diagnosis keperawatan yang didefinisikan sebagai pola pemberian lingkungan bagi...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "orang tua",
    "parenting",
    "pengasuhan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengekspresikan keinginan untuk meningkatkan peran menjadi orang tua"
    ],
    "objektif": [
      "Tampak adanya dukungan emosi dan pengertian pada anak atau anggota keluarga"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Promosi Antisipasi Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemungkinan krisis situasi atau masalah perkembangan serta dampaknya pada kehidupan pasien dan keluarga",
          "Identifikasi metode pemecahan masalah yang sering digunakan keluarga",
          "Fasilitasi dalam memutus strategi pemecahan masalah yang dihadapi keluarga",
          "Libatkan seluruh anggota keluarga dalam upaya antisipasi masalah Kesehatan, jika memungkinkan",
          "Buat jadwal aktivitas bersama keluarga terkait masalah  Kesehatan yang dihadapi",
          "Jelaskan perkembangan dan perilaku yang normal pada  keluarga",
          "Kerjasama dengan tenaga Kesehatan terkait lainnya, jika perlu"
        ]
      }
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keluarga risiko tinggi dalam program tindak lanjut",
          "Monitor status Kesehatan anak dan status imunisasi anak",
          "Dukung ibu menerima dan melakukan perawatan pre natal secara teratur dan sedini mungkin",
          "Lakukan kunjungan rumah sesuai dengan tingkat risiko",
          "Fasilitasi orang tua dalam memiliki harapan yang realistis sesuai tingkat kemampuan dan perkembangan anak",
          "Fasilitasi orang tua dalam menerima transisi peran",
          "Berikan bimbingan antisipasi yang diperlukan sesuai dengan tahapan usia perkembangan anak",
          "Fasilitasi orang tua dalam mendapatkan dukungan, dan berpartisipasi dalam parent group programs",
          "Fasilitasi orang tua dalam mengembangkan dan memelihara sistam dukungan sosial",
          "Sediakan media untuk mengembangkan keterampilan sosial dan koping",
          "Fasilitasi mengatur penitipan anak, jika perlu",
          "Fasilitasi penggunaan kontrasepsi",
          "Ajarkan orang tua untuk menanggapi isyarat bayi"
        ]
      }
    }
  ]
},
{
  "id": "0123",
  "slug": "kesiapan-peningkatan-proses-keluarga",
  "kode": "D.0123",
  "nama": "Kesiapan Peningkatan Proses Keluarga",
  "definisi": "Kesiapan peningkatan proses keluarga merupakan diagnosis keperawatan yang didefinisikan sebagai pola fungsi keluarga yang cukup untuk...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "keluarga",
    "family",
    "proses keluarga"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengekspresikan keinginan untuk meningkatkan dinamika keluarga"
    ],
    "objektif": [
      "Menunjukkan fungsi keluarga dalam memenuhi kebutuhan fisik, sosial, dan psikologis anggota keluarga",
      "Menunjukkan aktivitas untuk mendukung keselamatan dan pertumbuhan anggota keluarga",
      "Peran keluarga fleksibel dan tepat dengan tahap perkembangan",
      "Terlihat adanya respek dengan anggota keluarga"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Promosi Keutuhan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pemahaman keluarga terhadap masalah",
          "Identifikasi adanya konflik prioritas antar anggota keluarga",
          "Identifikasi mekanisme koping keluarga",
          "Monitor hubungan antara anggota keluarga",
          "Hargai privasi keluarga",
          "Fasilitasi kunjungan keluarga",
          "Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah",
          "Fasilitasi komunikasi terbuka antara setiap anggota keluarga",
          "Informasikan kondisi pasien secara berkala kepada keluarga",
          "Anjurkan anggota keluarga mempertahankan keharmonisan keluarga",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.13496",
      "nama": "Promosi Proses Efektif Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi tipe proses keluarga",
          "Identifikasi masalah atau gangguan dalam proses keluarga",
          "Identifikasi kebutuhan perawatan mandiri di rumah untuk klien dan tetap beradaptasi dengan pola hidup keluarga",
          "Pertahankan interaksi yang berkelanjutan dengan anggota keluarga",
          "Motivasi anggota keluarga untuk melakukan aktivitas bersama seperti makan bersama, diskusi bersama keluarga",
          "Fasilitasi anggota keluarga melakukan kunjungan rumah sakit",
          "Susun jadwal aktivitas perawatan mandiri di rumah untuk mengurangi gangguan rutinitas keluarga",
          "Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepada anggota keluarga",
          "Diskusikan dukungan sosial dari sekitar keluarga",
          "Latih keluarga manajemen waktu jika perawatan di rumah dibutuhkan"
        ]
      }
    }
  ]
},
{
  "id": "0124",
  "slug": "ketegangan-peran-pemberi-asuhan",
  "kode": "D.0124",
  "nama": "Ketegangan Peran Pemberi Asuhan",
  "definisi": "Ketegangan peran pemberi asuhan merupakan diagnosis keperawatan yang didefinisikan sebagai ketidakmampuan untuk membina hubungan yang...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Khawatir klien akan Kembali dirawat di rumah sakit",
      "Khawatir tentang kelanjutan perawatan klien",
      "Khawatir tentang ketidakmampuan pemberi asuhan"
    ],
    "objektif": []
  },
  "faktorTerkait": [
    "Beratnya penyakit penerima asuhan",
    "Kronisnya penyakit penerima asuhan",
    "Pemberi asuhan kurang mendapatkan waktu istirahat dan rekreasi",
    "Persaingan komitmen peran pemberi asuhan",
    "Ketidakadekuatan lingkungan fisik dalam pemberian asuhan",
    "Keluarga atau pemberi asuhan jauh dari kerabat lain",
    "Kompleksitas dan jumlah aktivitas pemberi asuhan"
  ],
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
      "nama": "Edukasi Pada Pengasuh",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pemahaman dan kesiapan peran pengasuh",
          "Identifikasi sumber dukungan dan kebutuhan istirahat pengasuh",
          "Berikan dukungan pada pengasuh selama pasien mengalami kemunduran",
          "Dukung keterbatasan pengasuh dan diskusikan dengan pasien",
          "Fasilitasi pengasuh untuk bertanya",
          "Jelaskan dampak ketergantungan anak pada pengasuh",
          "Ajarkan pengasuh mengeksplorasi kekuatan dan kelemahannya",
          "Ajarkan pengasuh cara memberikan dukungan perawatan diri (mis: mandi, BAB/BAK, berpakaian/berhias, makan/minum)"
        ]
      }
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keluarga risiko tinggi dalam program tindak lanjut",
          "Monitor status Kesehatan anak dan status imunisasi anak",
          "Dukung ibu menerima dan melakukan perawatan pre natal secara teratur dan sedini mungkin",
          "Lakukan kunjungan rumah sesuai dengan tingkat risiko",
          "Fasilitasi orang tua dalam memiliki harapan yang realistis sesuai tingkat kemampuan dan perkembangan anak",
          "Fasilitasi orang tua dalam menerima transisi peran",
          "Berikan bimbingan antisipasi yang diperlukan sesuai dengan tahapan usia perkembangan anak",
          "Fasilitasi orang tua dalam mendapatkan dukungan, dan berpartisipasi dalam parent group programs",
          "Fasilitasi orang tua dalam mengembangkan dan memelihara sistam dukungan sosial",
          "Sediakan media untuk mengembangkan keterampilan sosial dan koping",
          "Fasilitasi mengatur penitipan anak, jika perlu",
          "Fasilitasi penggunaan kontrasepsi",
          "Ajarkan orang tua untuk menanggapi isyarat bayi"
        ]
      }
    }
  ]
},
{
  "id": "0125",
  "slug": "penampilan-peran-tidak-efektif",
  "kode": "D.0125",
  "nama": "Penampilan Peran Tidak Efektif",
  "definisi": "Penampilan peran tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai pola perilaku yang berubah atau...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Merasa bingung menjalankan peran",
      "Merasa harapan tidak terpenuhi",
      "Merasa tidak puas dalam menjalankan peran"
    ],
    "objektif": [
      "Konflik peran",
      "Adaptasi tidak adekuat",
      "Strategi koping tidak efektif"
    ]
  },
  "faktorTerkait": [
    "Harapan peran tidak realistis",
    "Hambatan fisik",
    "Harga diri rendah",
    "Perubahan citra tubuh",
    "Ketidakadekuatan sistem pendukung (support system)",
    "Stres",
    "Perubahan peran",
    "Faktor ekonomi"
  ],
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
      "nama": "Dukungan Penampilan Peran",
      "tindakan": {
        "terapeutik": [
          "Identifikasi berbagai peran dan periode transisi sesuai tingkat perkembangan",
          "Identifikasi peran yang ada dalam keluarga",
          "Identifikasi adanya peran yang tidak terpenuhi",
          "Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan",
          "Fasilitasi bermain peran dalam mengantisipasi reaksi orang lain terhadap perilaku",
          "Fasilitasi diskusi perubahan peran anak terhadap bayi baru lahir, jika perlu",
          "Fasilitasi diskusi tentang peran orang tua, jika perlu",
          "Fasilitasi diskusi tentang adaptasi peran saat anak meninggalkan rumah, jika perlu",
          "Fasilitasi diskusi harapan dengan keluarga dan peran timbal balik",
          "Diskusikan perilaku yang dibutuhkan untuk pengembangan peran",
          "Diskusikan perubahan peran yang diperlukan akibat penyakit atau ketidakmampuan",
          "Diskusikan perubahan peran dalam menerima ketergantungan orang tua",
          "Diskusikan strategi positif untuk mengelola perubahan peran",
          "Ajarkan perilaku baru yang dibutuhkan oleh pasien/orang tua untuk memenuhi peran",
          "Rujuk dalam kelompok untuk mempelajari peran baru"
        ]
      }
    }
  ]
},
{
  "id": "0126",
  "slug": "pencapaian-peran-menjadi-orang-tua",
  "kode": "D.0126",
  "nama": "Pencapaian Peran Menjadi Orang Tua",
  "definisi": "Pencapaian peran menjadi orang tua merupakan diagnosis keperawatan yang didefinisikan sebagai terjadinya proses interaktif antar...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "orang tua",
    "parenting",
    "pengasuhan"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Bounding attachment optimal",
      "Perilaku positif menjadi orang tua",
      "Saling berinteraksi dalam merawat bayi"
    ]
  },
  "faktorTerkait": [],
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
      "nama": "Promosi Antisipasi Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemungkinan krisis situasi atau masalah perkembangan serta dampaknya pada kehidupan pasien dan keluarga",
          "Identifikasi metode pemecahan masalah yang sering digunakan keluarga",
          "Fasilitasi dalam memutus strategi pemecahan masalah yang dihadapi keluarga",
          "Libatkan seluruh anggota keluarga dalam upaya antisipasi masalah Kesehatan, jika memungkinkan",
          "Buat jadwal aktivitas bersama keluarga terkait masalah Kesehatan yang dihadapi",
          "Jelaskan perkembangan dan perilaku yang normal pada keluarga",
          "Kerjasama dengan tenaga Kesehatan terkait lainnya, jika perlu"
        ]
      }
    },
    {
      "kode": "I.13495",
      "nama": "Promosi Pengasuhan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi keluarga risiko tinggi dalam program tindak lanjut",
          "Monitor status Kesehatan anak dan status imunisasi anak",
          "Dukung ibu menerima dan melakukan perawatan pre natal secara teratur dan sedini mungkin",
          "Lakukan kunjungan rumah sesuai dengan tingkat risiko",
          "Fasilitasi orang tua dalam memiliki harapan yang realistis sesuai tingkat kemampuan dan perkembangan anak",
          "Fasilitasi orang tua dalam menerima transisi peran",
          "Berikan bimbingan antisipasi yang diperlukan sesuai dengan tahapan usia perkembangan anak",
          "Fasilitasi orang tua dalam mendapatkan dukungan, dan berpartisipasi dalam parent group programs",
          "Fasilitasi orang tua dalam mengembangkan dan memelihara sistam dukungan sosial",
          "Sediakan media untuk mengembangkan keterampilan sosial dan koping",
          "Fasilitasi mengatur penitipan anak, jika perlu",
          "Fasilitasi penggunaan kontrasepsi"
        ]
      }
    }
  ]
},
{
  "id": "0127",
  "slug": "risiko-gangguan-perlekatan",
  "kode": "D.0127",
  "nama": "Risiko Gangguan Perlekatan",
  "definisi": "Risiko gangguan perlekatan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami gangguan interaksi antara...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [
    "perlekatan",
    "bonding",
    "attachment"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kekhawatiran menjalankan peran sebagai orang tua",
    "Perpisahan antara ibu dan bayi/anak akibat hospitalisasi",
    "Penghalang fisik (mis: incubator, baby warmer)",
    "Ketidakmampuan orang tua memenuhi kebutuhan bayi/anak",
    "Perawatan dalam ruang isolasi",
    "Prematuritas",
    "Penyalahgunaan zat",
    "Konflik hubungan antara orang tua dan anak",
    "Perilaku bayi tidak terkoordinasi"
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
      "nama": "Promosi Perlekatan",
      "tindakan": {
        "terapeutik": [
          "Monitor kegiatan menyusui",
          "Identifikasi kemampuan bayi menghisap dan menelan ASI",
          "Identifikasi payudara ibu (mis: bengkak, puting lecet, mastitis, nyeri pada payudara)",
          "Monitor perlekatan saat menyusui (mis: areola bagian bawah lebih kecil daripada areola bagian atas, mulut  bayi terbuka lebar, bibir bayi berputar keluar dan dagu bayi menempel pada payudara ibu)",
          "Hindari memegang kepala bayi",
          "Diskusikan dengan ibu masalah selama proses menyusui",
          "Ajarkan ibu menopang seluruh tubuh bayi",
          "Anjurkan ibu melepas pakaian bagian atas agar bayi dapat menyentuh payudara ibu",
          "Anjurkan bayi yang mendekati kearah payudara ibu dari bagian bawah",
          "Anjurkan ibu untuk memegang payudara menggunakan jarinya seperti huruf “C” pada posisi jam 12-6 atau 3-9 saat mengarahkan ke mulut bayi",
          "Anjurkan ibu untuk menyusui menunggu mulut bayi terbuka lebar sehingga areola bagian bawah dapat masuk sempurna",
          "Ajarkan ibu mengenali tanda bayi siap menyusu"
        ]
      }
    },
    {
      "kode": "I.13490",
      "nama": "Promosi Keutuhan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pemahaman keluarga terhadap masalah",
          "Identifikasi adanya konflik prioritas antar anggota keluarga",
          "Identifikasi mekanisme koping keluarga",
          "Monitor hubungan antara anggota keluarga",
          "Hargai privasi keluarga",
          "Fasilitasi kunjungan keluarga",
          "Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah",
          "Fasilitasi komunikasi terbuka antara setiap anggota keluarga",
          "Informasikan kondisi pasien secara berkala kepada keluarga",
          "Anjurkan anggota keluarga mempertahankan keharmonisan keluarga",
          "Rujuk untuk terapi keluarga, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0128",
  "slug": "risiko-proses-pengasuhan-tidak-efektif",
  "kode": "D.0128",
  "nama": "Risiko Proses Pengasuhan Tidak Efektif",
  "definisi": "Risiko proses pengasuhan tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami proses...",
  "kategori": "Interaksi Sosial",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Kekerasan dalam rumah tangga",
    "Kehamilan tidak diinginkan/direncanakan",
    "Kurang terpapar informasi tentang proses persalinan/pengasuhan",
    "Ketidakberdayaan maternal",
    "Distres psikologis",
    "Penyalahgunaan obat",
    "Ketidakadekuatan manajemen ketidaknyamanan selama persalinan",
    "Akses pelayanan Kesehatan sulit dijangkau",
    "Kurangnya minat/proaktif dalam proses persalinan",
    "Ketidaksesuaian kondisi bayi dengan harapan",
    "Ketidakamanan lingkungan untuk bayi"
  ],
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
      "nama": "Promosi Keutuhan Keluarga",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pemahaman keluarga terhadap masalah",
          "Identifikasi adanya konflik prioritas antar anggota keluarga",
          "Identifikasi mekanisme koping keluarga",
          "Monitor hubungan antara anggota keluarga",
          "Hargai privasi keluarga",
          "Fasilitasi kunjungan keluarga",
          "Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah",
          "Fasilitasi komunikasi terbuka antara setiap anggota keluarga",
          "Informasikan kondisi pasien secara berkala kepada keluarga",
          "Anjurkan anggota keluarga mempertahankan keharmonisan keluarga",
          "Rujuk untuk terapi  keluarga, jika perlu"
        ]
      }
    },
    {
      "kode": "I.10342",
      "nama": "Promosi Perlekatan",
      "tindakan": {
        "terapeutik": [
          "Monitor kegiatan menyusui",
          "Identifikasi kemampuan  bayi menghisap dan menelan ASI",
          "Identifikasi payudara ibu (mis: bengkak, puting lecet, mastitis, nyeri pada payudara)",
          "Monitor perlekatan saat menyusui (mis: areola bagian bawah lebih kecil daripada areola bagian atas, mulut bayi terbuka lebar, bibir bayi berputar keluar dan dagu bayi menempel pada payudara ibu)",
          "Hindari memegang kepala bayi",
          "Diskusikan dengan ibu masalah selama proses menyusui",
          "Ajarkan ibu menopang seluruh tubuh bayi",
          "Anjurkan ibu melepas pakaian bagian atas agar bayi dapat menyentuh payudara ibu",
          "Anjurkan bayi yang mendekati kearah payudara ibu dari bagian bawah",
          "Anjurkan ibu untuk memegang payudara menggunakan jarinya seperti huruf “C” pada posisi jam 12-6 atau 3-9 saat mengarahkan ke mulut bayi",
          "Anjurkan ibu untuk menyusui menunggu mulut bayi terbuka lebar sehingga areola bagian bawah dapat masuk sempurna",
          "Ajarkan ibu mengenali tanda bayi siap menyusu"
        ]
      }
    }
  ]
},
{
  "id": "0129",
  "slug": "gangguan-integritas-kulitjaringan",
  "kode": "D.0129",
  "nama": "Gangguan Integritas Kulit/Jaringan",
  "definisi": "Gangguan integritas kulit/jaringan merupakan diagnosis keperawatan yang didefinisikan sebagai kerusakan kulit atau jaringan (membran mukosa...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kulit",
    "luka",
    "integritas"
  ],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Kerusakan jaringan dan/atau lapisan kulit"
    ]
  },
  "faktorTerkait": [
    "Perubahan sirkulasi",
    "Perubahan status nutrisi (kelebihan atau kekurangan)",
    "Kekurangan/kelebihan volume cairan",
    "Penurunan mobilitas",
    "Bahan kimia iritatif",
    "Suhu lingkungan yang ekstrim",
    "Faktor mekanis (mis: penekanan pada tonjolan tulang, gesekan) atau faktor elektris (elektrodiatermi, energi listrik bertegangan tinggi)",
    "Efek samping terapi radiasi",
    "Kelembaban",
    "Proses penuaan",
    "Neuropati perifer",
    "Perubahan pigmentasi",
    "Perubahan hormonal",
    "Kurang terpapar informasi tentang upaya mempertahankan/melindungi integritas jaringan"
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
      "nama": "Perawatan Integritas Kulit",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab gangguan integritas kulit (mis: perubahan sirkulasi, perubahan status nutrisi, penurunan kelembaban, suhu lingkungan ekstrim, penurunan mobilitas)",
          "Ubah posisi setiap 2 jam jika tirah baring",
          "Lakukan pemijatan pada area penonjolan tulang, jika perlu",
          "Bersihkan perineal dengan air hangat, terutama selama periode diare",
          "Gunakan produk berbahan petroleum atau minyak pada kulit kering",
          "Gunakan produk berbahan ringan/alami dan hipoalergik pada kulit sensitive",
          "Hindari produk berbahan dasar alkohol pada kulit kering",
          "Anjurkan menggunakan pelembab (mis: lotion, serum)",
          "Anjurkan minum air yang cukup",
          "Anjurkan meningkatkan asupan nutrisi",
          "Anjurkan meningkatkan asupan buah dan sayur",
          "Anjurkan menghindari terpapar suhu ekstrim",
          "Anjurkan menggunakan tabir surya SPF minimal 30 saat berada diluar rumah",
          "Anjurkan mandi dan menggunakan sabun secukupnya"
        ]
      }
    },
    {
      "kode": "I.14564",
      "nama": "Perawatan Luka",
      "tindakan": {
        "terapeutik": [
          "Monitor karakteristik luka (mis: drainase, warna, ukuran , bau)",
          "Monitor tanda-tanda infeksi",
          "Lepaskan balutan dan plester secara perlahan",
          "Cukur rambut di sekitar daerah luka, jika perlu",
          "Bersihkan dengan cairan NaCl atau pembersih nontoksik, sesuai kebutuhan",
          "Bersihkan jaringan nekrotik",
          "Berikan salep yang sesuai ke kulit/lesi, jika perlu",
          "Pasang balutan sesuai jenis luka",
          "Pertahankan Teknik steril saat melakukan perawatan luka",
          "Ganti balutan sesuai jumlah eksudat dan drainase",
          "Jadwalkan perubahan posisi setiap 2 jam atau sesuai kondisi pasien",
          "Berikan diet dengan kalori 30 – 35 kkal/kgBB/hari dan protein 1,25 – 1,5 g/kgBB/hari",
          "Berikan suplemen vitamin dan mineral (mis: vitamin A, vitamin C, Zinc, asam amino), sesuai indikasi",
          "Berikan terapi TENS (stimulasi saraf transcutaneous), jika perlu",
          "Jelaskan tanda dan gejala infeksi",
          "Anjurkan mengkonsumsi makanan tinggi kalori dan protein",
          "Ajarkan prosedur perawatan luka secara mandiri",
          "Kolaborasi prosedur debridement (mis: enzimatik, biologis, mekanis, autolitik), jika perlu",
          "Kolaborasi pemberian antibiotik, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0130",
  "slug": "hipertermia",
  "kode": "D.0130",
  "nama": "Hipertermia",
  "definisi": "Hipertermia merupakan diagnosis keperawatan yang didefinisikan sebagai suhu tubuh meningkat diatas rentang normal tubuh.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Suhu tubuh diatas nilai normal"
    ]
  },
  "faktorTerkait": [
    "Dehidrasi",
    "Terpapar lingkungan panas",
    "Proses penyakit (mis: infeksi, kanker)",
    "Ketidaksesuaian pakaian dengan suhu lingkungan",
    "Peningkatan laju metabolisme",
    "Respon trauma",
    "Aktivitas berlebihan",
    "Penggunaan inkubator"
  ],
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
      "nama": "Manajemen Hipertermia",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab hipertermia (mis: dehidrasi, terpapar lingkungan panas, penggunaan inkubator)",
          "Monitor suhu tubuh",
          "Monitor kadar elektrolit",
          "Monitor haluaran urin",
          "Monitor komplikasi akibat hipertermia",
          "Sediakan lingkungan yang dingin",
          "Longgarkan atau lepaskan pakaian",
          "Basahi dan kipasi permukaan tubuh",
          "Berikan cairan oral",
          "Ganti linen setiap hari atau lebih sering jika mengalami hyperhidrosis (keringat berlebih)",
          "Lakukan pendinginan eksternal (mis: selimut hipotermia atau kompres dingin pada dahi, leher, dada, abdomen, aksila)",
          "Hindari pemberian antipiretik atau aspirin",
          "Berikan oksigen, jika perlu",
          "Anjurkan tirah baring",
          "Kolaborasi pemberian cairan dan elektrolit intravena, jika perlu"
        ]
      }
    },
    {
      "kode": "I.14578",
      "nama": "Regulasi Temperatur",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh bayi sampai stabil (36,5 – 37,5°C)",
          "Monitor suhu tubuh anak tiap 2 jam, jika perlu",
          "Monitor tekanan darah, frekuensi pernapasan dan nadi",
          "Monitor warna dan suhu kulit",
          "Monitor dan catat tanda dan gejala hipotermia atau hipertermia",
          "Pasang alat pemantau suhu kontinu, jika perlu",
          "Tingkatkan asupan cairan dan nutrisi yang adekuat",
          "Bedong bayi segera setelah lahir untuk mencegah kehilangan panas",
          "Masukkan bayi BBLR ke dalam plastic segera setelah lahir (mis: bahan polyethylene, polyurethane)",
          "Gunakan topi bayi untuk mencegah kehilangan panas pada bayi baru lahir",
          "Tempatkan bayi baru lahir di bawah radiant warmer",
          "Pertahankan kelembaban incubator 50% atau lebih untuk mengurangi kehilangan panas karena proses evaporasi",
          "Atur suhu incubator sesuai kebutuhan",
          "Hangatkan terlebih dahulu bahan-bahan yang akan kontak dengan bayi (mis: selimut, kain bedongan, stetoskop)",
          "Hindari meletakkan bayi di dekat jendela terbuka atau di area aliran pendingin ruangan atau kipas angin",
          "Gunakan matras penghangat, selimut hangat, dan penghangat ruangan untuk menaikkan suhu tubuh, jika perlu",
          "Gunakan Kasur pendingin, water circulating blankets, ice pack, atau gel pad dan intravascular cooling cathetherization untuk menurunkan suhu tubuh",
          "Sesuaikan suhu lingkungan dengan kebutuhan pasien",
          "Jelaskan cara pencegahan heat exhaustion dan heat stroke",
          "Jelaskan cara pencegahan hipotermi karena terpapar udara dingin",
          "Demonstrasikan Teknik perawatan metode kanguru (PMK) untuk bayi BBLR",
          "Kolaborasi pemberian antipiretik, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0131",
  "slug": "hipotermia",
  "kode": "D.0131",
  "nama": "Hipotermia",
  "definisi": "Hipotermia merupakan diagnosis keperawatan yang didefinisikan sebagai suhu tubuh berada dibawah rentang normal tubuh",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Kulit teraba dingin",
      "Menggigil",
      "Suhu tubuh dibawah nilai normal"
    ]
  },
  "faktorTerkait": [
    "Kerusakan hipotalamus",
    "Konsumsi alkohol",
    "Berat badan ekstrim",
    "Kekurangan lemak subkutan",
    "Terpapar suhu lingkungan rendah",
    "Malnutrisi",
    "Pemakaian pakaian tipis",
    "Penurunan laju metabolisme",
    "Tidak beraktivitas",
    "Transfer panas (mis: konduksi, konveksi, evaporasi, radiasi)",
    "Trauma",
    "Proses penuaan",
    "Efek agen farmakologis",
    "Kurang terpapar informasi tentang pencegahan hipotermia"
  ],
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
      "nama": "Manajemen Hipotermia",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh",
          "Identifikasi penyebab hipotermia (mis: terpapar suhu lingkungan rendah, pakaian tipis, kerusakan hipotalamus, penurunan laju metabolisme, kekurangan lemak subkutan)",
          "Monitor tanda dan gejala akibat hipotermia (mis: hipotermia ringan: takipnea, disartria, menggigil, hipertensi, diuresis; hipotermia sedang: aritmia, hipotensi, apatis, koagulopati, refleks menurun; hipotermia berat: oliguria, refleks menghilang, edema paru, asam-basa abnormal)",
          "Sediakan lingkungan yang hangat (mis: atur suhu ruangan, inkubator)",
          "Ganti pakaian dan/atau linen yang basah",
          "Lakukan penghangatan pasif (mis: selimut, menutup kepala, pakaian tebal)",
          "Lakukan penghangatan aktif eksternal (mis: kompres hangat, botol hangat, selimut hangat, perawatan metode kangguru)",
          "Lakukan penghangatan aktif internal (mis: infus cairan hangat, oksigen hangat, lavase peritoneal dengan cairan hangat)",
          "Anjurkan makan/minum hangat"
        ]
      }
    },
    {
      "kode": "I.14586",
      "nama": "Terapi Paparan Panas",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kontraindikasi penggunaan terapi (mis: penurunan atau tidak adanya sensasi, penurunan sirkulasi)",
          "Monitor suhu alat terapi",
          "Monitor kondisi kulit selama terapi",
          "Monitor kondisi umum, kenyamanan, dan keamanan selama terapi",
          "Monitor respon pasien terhadap terapi",
          "Pilih metode stimulasi yang nyaman dan mudah didapatkan (mis: botol air panas, bantal panas listrik, lilin paraffin, lampu)",
          "Pilih lokasi stimulus yang sesuai",
          "Bungkus alat terapi dengan menggunakan kain",
          "Gunakan kain lembab di sekitar area terapi",
          "Tentukan durasi terapi sesuai dengan respon pasien",
          "Hindari melakukan terapi pada daerah yang mendapatkan terapi radiasi",
          "Ajarkan cara mencegah kerusakan jaringan",
          "Ajarkan cara menyesuaikan suhu secara mandiri"
        ]
      }
    }
  ]
},
{
  "id": "0132",
  "slug": "perilaku-kekerasan",
  "kode": "D.0132",
  "nama": "Perilaku Kekerasan",
  "definisi": "Perilaku kekerasan merupakan diagnosis keperawatan yang didefinisikan sebagai kemarahan yang diekspresikan secara berlebihan dan tidak...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kekerasan",
    "agresif",
    "amarah"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengancam",
      "Mengumpat dengan kata-kata kasar",
      "Suara keras",
      "Bicara"
    ],
    "objektif": [
      "Menyerang orang lain",
      "Melukai diri sendiri/orang lain",
      "Merusak lingkungan",
      "Perilaku agresif/amuk"
    ]
  },
  "faktorTerkait": [
    "Ketidakmampuan mengendalikan dorongan marah",
    "Stimulus lingkungan",
    "Konflik interpersonal",
    "Perubahan status mental",
    "Putus obat",
    "Penyalahgunaan zat/alkohol"
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
      "nama": "Manajemen Keselamatan Lingkungan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan  keselamatan (mis: kondisi fisik, fungsi kognitif, dan Riwayat perilaku)",
          "Monitor perubahan status keselamatan lingkungan",
          "Hilangkan bahaya keselamatan lingkungan (mis: fisik, biologi, kimia), jika memungkinkan",
          "Modifikasi lingkungan untuk meminimalkan bahaya dan risiko",
          "Sediakan alat bantu keamanan lingkungan (mis: commode chair dan pegangan tangan)",
          "Gunakan perangkat pelindung (mis: pengekangan fisik, rel samping, pintu terkunci, pagar)",
          "Hubungi pihak berwenang sesuai masalah komunitas (mis: puskesmas, polisi, damkar)",
          "Fasilitasi relokasi ke lingkungan yang aman",
          "Lakukan program skrining bahaya lingkungan (mis: timbal)",
          "Ajarkan individu, keluarga, dan kelompok risiko tinggi bahaya lingkungan"
        ]
      }
    },
    {
      "kode": "I.09289",
      "nama": "Manajemen Mood",
      "tindakan": {
        "terapeutik": [
          "Identifikasi mood (mis: tanda, gejala, Riwayat penyakit)",
          "Identifikasi risiko keselamatan diri atau orang lain",
          "Monitor fungsi kognitif (mis: konsentrasi, memori, kemampuan membuat keputusan)",
          "Monitor aktivitas dan tingkat stimulasi lingkungan",
          "Fasilitasi pengisian kuesioner self-report (mis: beck depression inventory, skala status fungsional), jika perlu",
          "Berikan kesempatan untuk menyampaikan perasaan dengan cara yang tepat (mis: sandsack, terapi seni, aktivitas fisik)",
          "Jelaskan tentang gangguan mood dan penanganannya",
          "Anjurkan berperan aktif dalam pengobatan dan rehabilitasi, jika perlu",
          "Anjurkan rawat inap sesuai indikasi (mis: risiko keselamatan, deficit perawatan diri, sosial)",
          "Ajarkan mengenali pemicu gangguan mood (mis: situasi stres, masalah fisik)",
          "Ajarkan memonitor mood secara mandiri (mis: skala tingkat 1 – 10, membuat jurnal)",
          "Ajarkan keterampilan koping dan penyelesaian masalah baru",
          "Kolaborasi pemberian obat, jika perlu",
          "Rujuk untuk psikoterapi (mis: perilaku, hubungan interpersonal, keluarga, kelompok), jika perlu"
        ]
      }
    },
    {
      "kode": "I.09290",
      "nama": "Manajemen Pengendalian Marah",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab/pemicu kemarahan",
          "Identifikasi harapan perilaku terhadap ekspresi kemaharan",
          "Monitor potensi agresi tidak konstruktif dan lakukan Tindakan sebelum agresif",
          "Monitor kemajuan dengna membuat grafik, jika perlu",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Fasilitasi mengekpresikan marah secara adaptif",
          "Cegah kerusakan fisik akibat ekspresi marah (mis: menggunakan senjata)",
          "Cegah aktivitas pemicu agresi (mis: meninju tas, mondar-mandir, berolahraga berlebihan)",
          "Lakukan kontrol eksternal (mis: pengekangan, time-out, dan seklusi), jika perlu",
          "Dukung menerapkan strategi pengendalian marah dan ekspresi amarah adaptif",
          "Berikan penguatan atas keberhasilan penerapan strategi pengendalian marah",
          "Jelaskan makna, fungsi marah, frustasi, dan respons marah",
          "Anjurkan meminta bantuan perawat atau keluarga selama ketegangan meningkat",
          "Ajarkan strategi untuk mencegah ekspresi marah maladaptif",
          "Ajarkan metode untuk memodulasi pengalaman emosi yang kuat (mis: latihan asertif, Teknik relaksasi, jurnal, aktivitas penyaluran energi",
          "Kolaborasi pemberian obat, jika perlu"
        ]
      }
    },
    {
      "kode": "I.12463",
      "nama": "Manajemen Perilaku",
      "tindakan": {
        "terapeutik": [
          "Identifikasi harapan untuk mengendalikan perilaku",
          "Diskusikan tanggung jawab terhadap perilaku",
          "Jadwalkan kegiatan terstruktur",
          "Ciptakan dan pertahankan lingkungan dan kegiatan perawatan konsisten setiap dinas",
          "Tingkatkan aktivitas fisik sesuai kemampuan",
          "Batasi jumlah pengunjung",
          "Bicara dengan nada rendah dan tenang",
          "Lakukan kegiatan pengalihan terhadap sumber agitasi",
          "Cegah perilaku pasif dan agresif",
          "Beri penguatan positif terhadap keberhasilan mengendalikan perilaku",
          "Lakukan pengekangan fisik sesuai indikasi",
          "Hindari bersikap menyudutkan dan menghentikan pembicaraan",
          "Hindari sikap mengancam atau berdebat",
          "Hindari berdebat atau menawar batas perilaku yang telah ditetapkan",
          "Informasikan keluarga bahwa keluarga sebagai dasar pembentukan kognitif"
        ]
      }
    }
  ]
},
{
  "id": "0133",
  "slug": "perlambatan-pemulihan-pascabedah",
  "kode": "D.0133",
  "nama": "Perlambatan Pemulihan Pascabedah",
  "definisi": "Perlambatan pemulihan pascabedah merupakan diagnosis keperawatan yang didefinisikan sebagai pemanjangan jumlah...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "pemulihan",
    "penyembuhan",
    "post operasi"
  ],
  "tandaGejala": {
    "subjektif": [
      "Mengeluh tidak nyaman"
    ],
    "objektif": [
      "Area luka operasi terbuka",
      "Waktu penyembuhan yang memanjang"
    ]
  },
  "faktorTerkait": [
    "Skor klasifikasi status fisik American Society of Anesthesiologists (ASA) ≥ 3",
    "Hiperglikemia",
    "Edema pada lokasi pembedahan",
    "Prosedur pembedahan ekstensif (luas)",
    "Usia ekstrem",
    "Riwayat perlambatan penyembuhan luka",
    "Gangguan mobilitas",
    "Malnutrisi",
    "Obesitas",
    "Infeksi luka perioperatif",
    "Mual/muntah persisten",
    "Respon emosional pascaoperasi",
    "Pemanjangan proses operasi",
    "Gangguan psikologis pascaoperasi",
    "Kontaminasi bedah",
    "Trauma pada luka operasi",
    "Efek agen farmakologis"
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
      "nama": "Dukungan Perawatan Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebiasaan aktivitas perawatan diri sesuai usia",
          "Monitor tingkat kemandirian",
          "Identifikasi kebutuhan alat bantu kebersihan diri, berpakaian, berhias, dan makan",
          "Sediakan lingkungan yang terapeutik (mis: suasana hangat, rileks, privasi)",
          "Siapkan keperluan pribadi (mis: parfum sikat gigi, dan sabun mandi)",
          "Dampingi dalam melakukan perawatan diri sampai mandiri",
          "Fasilitasi untuk menerima keadaan ketergantungan",
          "Fasilitasi kemandirian, bantu jika tidak mampu melakukan perawatan diri",
          "Jadwalkan rutinitas perawatan diri",
          "Anjurkan melakukan perawatan diri secara konsisten sesuai kemampuan"
        ]
      }
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi"
        ]
      }
    },
    {
      "kode": "I.08238",
      "nama": "Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri",
          "Identifikasi skala nyeri",
          "Idenfitikasi respon nyeri non verbal",
          "Identifikasi faktor yang memperberat dan memperingan nyeri",
          "Identifikasi pengetahuan dan keyakinan tentang nyeri",
          "Identifikasi pengaruh budaya terhadap respon nyeri",
          "Identifikasi pengaruh nyeri pada kualitas hidup",
          "Monitor keberhasilan terapi komplementer yang sudah diberikan",
          "Monitor efek samping penggunaan analgetik",
          "Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)",
          "Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)",
          "Fasilitasi istirahat dan tidur",
          "Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri",
          "Jelaskan penyebab, periode, dan pemicu nyeri",
          "Jelaskan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgesik secara tepat",
          "Ajarkan Teknik farmakologis untuk mengurangi nyeri",
          "Kolaborasi pemberian analgetik, jika perlu"
        ]
      }
    },
    {
      "kode": "I.14564",
      "nama": "Perawatan Luka",
      "tindakan": {
        "terapeutik": [
          "Monitor karakteristik luka (mis: drainase, warna, ukuran , bau)",
          "Monitor tanda-tanda infeksi",
          "Lepaskan balutan dan plester secara perlahan",
          "Cukur rambut di sekitar daerah luka, jika perlu",
          "Bersihkan dengan cairan NaCl atau pembersih nontoksik, sesuai kebutuhan",
          "Bersihkan jaringan nekrotik",
          "Berikan salep yang sesuai ke kulit/lesi, jika perlu",
          "Pasang balutan sesuai jenis luka",
          "Pertahankan Teknik steril saat melakukan perawatan luka",
          "Ganti balutan sesuai jumlah eksudat dan drainase",
          "Jadwalkan perubahan posisi setiap 2 jam atau sesuai kondisi pasien",
          "Berikan diet dengan kalori 30 – 35 kkal/kgBB/hari dan protein 1,25 – 1,5 g/kgBB/hari",
          "Berikan suplemen vitamin dan mineral (mis: vitamin A, vitamin C, Zinc, asam amino), sesuai indikasi",
          "Berikan terapi TENS (stimulasi saraf transcutaneous), jika perlu",
          "Jelaskan tanda dan gejala infeksi",
          "Anjurkan mengkonsumsi makanan tinggi kalori dan protein",
          "Ajarkan prosedur perawatan luka secara mandiri",
          "Kolaborasi prosedur debridement (mis: enzimatik, biologis, mekanis, autolitik), jika perlu",
          "Kolaborasi pemberian antibiotik, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0134",
  "slug": "risiko-alergi",
  "kode": "D.0134",
  "nama": "Risiko Alergi",
  "definisi": "Risiko alergi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami stimulasi respon imunitas yang berlebihan akibat..",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "alergi",
    "reaksi",
    "hipersensitif"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Makanan (mis: alpukat, pisang, kiwi, kacang, makanan olahan laut, buah tropis, jamur)",
    "Terpapar zat alergen (mis: zat kimia, agen farmakologis)",
    "Terpapar alergen lingkungan (mis: debu, serbuk sari)",
    "Sengatan serangga"
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
      "nama": "Edukasi Reaksi Alergi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Monitor pemahaman pasien dan keluarga tentang alergi",
          "Sediakan materi dan media Pendidikan  Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Fasilitasi mengenali penyebab alergi",
          "Berikan kesempatan pasien dan keluarga bertanya",
          "Jelaskan definisi, penyebab, gejala, dan tanda alergi",
          "Jelaskan cara menghindari allergen (mis: tidak menggunakan karpet, menggunakan masker)",
          "Anjurkan pasien dan keluarga menyediakan obat alergi"
        ]
      }
    },
    {
      "kode": "I.14535",
      "nama": "Pencegahan Alergi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi Riwayat alergi (obat, makanan, debu, udara)",
          "Monitor terhadap reaksi obat, makanan, lateks, transfusi darah atau produk darah atau allergen lainnya",
          "Berikan tanda alergi pada rekam medis",
          "Pasang gelang tanda alergi pada lengan",
          "Hentikan paparan allergen",
          "Lakukan tes alergi sebelum pemberian obat",
          "Ajarkan menghindari dan mencegah paparan alergen",
          "Kolaborasi dengan tenaga Kesehatan dalam pencegahan alergi (mis: dokter, ahli gizi)"
        ]
      }
    }
  ]
},
{
  "id": "0135",
  "slug": "risiko-bunuh-diri",
  "kode": "D.0135",
  "nama": "Risiko Bunuh Diri",
  "definisi": "Risiko bunuh diri merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko melakukan upaya menyakiti diri sendiri untuk...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "bunuh diri",
    "suicide",
    "mengakhiri hidup"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Gangguan perilaku (mis: euphoria mendadak setelah depresi, perilaku mencari senjata berbahaya, membeli obat dalam jumlah banyak, membuat surat warisan)",
    "Demografi (mis: lansia, status perceraian, janda/duda, ekonomi rendah, pengangguran)",
    "Gangguan fisik (mis: nyeri kronis, penyakit terminal)",
    "Masalah sosial (mis: berduka, tidak berdaya, putus asa, kesepian, kehilangan hubungan yang penting, isolasi sosial)",
    "Gangguan psikologis (mis: penganiayaan masa kanak-kanak, riwayat bunuh diri sebelumnya, remaja homoseksual, gangguan psikiatrik, penyakit psikiatrik, penyalahgunaan zat)"
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
      "nama": "Manajemen Mood",
      "tindakan": {
        "terapeutik": [
          "Identifikasi mood (mis: tanda, gejala, Riwayat penyakit)",
          "Identifikasi risiko keselamatan diri atau orang lain",
          "Monitor fungsi kognitif (mis: konsentrasi, memori, kemampuan membuat keputusan)",
          "Monitor aktivitas dan tingkat stimulasi lingkungan",
          "Fasilitasi pengisian kuesioner self-report (mis: beck depression inventory, skala status fungsional), jika perlu",
          "Berikan kesempatan untuk menyampaikan perasaan dengan cara yang tepat (mis: sandsack, terapi seni, aktivitas fisik)",
          "Jelaskan tentang gangguan mood dan penanganannya",
          "Anjurkan berperan aktif dalam pengobatan dan rehabilitasi, jika perlu",
          "Anjurkan rawat inap sesuai indikasi (mis: risiko  keselamatan, deficit perawatan diri, sosial)",
          "Ajarkan mengenali pemicu gangguan mood (mis: situasi stres, masalah fisik)",
          "Ajarkan memonitor mood secara mandiri (mis: skala tingkat 1 – 10, membuat jurnal)",
          "Ajarkan keterampilan koping dan penyelesaian masalah baru",
          "Kolaborasi pemberian obat, jika perlu",
          "Rujuk untuk psikoterapi (mis: perilaku, hubungan interpersonal, keluarga, kelompok), jika perlu"
        ]
      }
    },
    {
      "kode": "I.14538",
      "nama": "Pencegahan Bunuh Diri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi gejala risiko bunuh diri (mis: gangguan mood, halusinasi, delusi, panik, penyalahgunaan zat, kesedihan, gangguan kepribadian)",
          "Identifikasi keinginan dan pikiran rencana bunuh diri",
          "Monitor lingkungan bebas bahaya secara rutin (mis: barang pribadi, pisau cukur, jendela)",
          "Monitor adanya perubahan mood atau perilaku",
          "Libatkan dalam perencanaan perawatan mandiri",
          "Libatkan keluarga dalam perencanaan perawatan",
          "Lakukan pendekatan langsung dan tidak menghakimi saat membahas bunuh diri",
          "Berikan lingkungan dengan pengamanan ketat dan mudah dipantau (mis: tempat tidur dekat ruang  perawat)",
          "Tingkatkan pengawasan pada kondisi tertentu (mis: rapat staf, pergantian shift)",
          "Lakukan intervensi perlindungan (mis: pembatasan area, pengekangan fisik), jika diperlukan",
          "Hindari diskusi berulang tentang bunuh diri sebelumnya, diskusi berorientasi pada masa sekarang dan masa depan",
          "Diskusikan rencana menghadapi ide bunuh diri di masa depan (mis: orang yang dihubungi, ke mana mencari bantuan)",
          "Pastikan obat ditelan",
          "Anjurkan mendiskusikan perasaan yang dialami kepada orang lain",
          "Anjurkan menggunakan sumber pendukung (mis: layanan spiritual, penyedia layanan)",
          "Jelaskan tindakan pencegahan bunuh diri kepada keluarga atau orang terdekat",
          "Informasikan sumber daya masyarakat dan program yang tersedia",
          "Latih pencegahan risiko bunuh diri (mis: latihan asertif, relaksasi otot progresif)",
          "Kolaborasi pemberian obat antiansietas, atau antipsikotik, sesuai indikasi",
          "Kolaborasi tindakan keselamatan kepada PPA",
          "Rujuk ke pelayanan kesehatan mental, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0136",
  "slug": "risiko-cedera",
  "kode": "D.0136",
  "nama": "Risiko Cedera",
  "definisi": "Risiko cedera merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami bahaya atau kerusakan fisik yang...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Terpapar patogen",
    "Terpapar zat kimia toksik",
    "Terpapar agen nosokomial",
    "Ketidakamanan transportasi",
    "Ketidaknormalan profil darah",
    "Perubahan orientasi afektif",
    "Perubahan sensasi",
    "Disfungsi autoimun",
    "Disfungsi biokimia",
    "Hipoksia jaringan",
    "Kegagalan mekanisme pertahanan tubuh",
    "Malnutrisi",
    "Perubahan fungsi psikomotor",
    "Perubahan fungsi kognitif"
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
      "nama": "Manajemen Keselamatan Lingkungan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan keselamatan (mis: kondisi fisik, fungsi kognitif, dan Riwayat perilaku)",
          "Monitor perubahan status keselamatan lingkungan",
          "Hilangkan bahaya keselamatan lingkungan (mis: fisik, biologi, kimia), jika memungkinkan",
          "Modifikasi lingkungan untuk meminimalkan bahaya dan risiko",
          "Sediakan alat bantu keamanan lingkungan (mis: commode chair dan pegangan tangan)",
          "Gunakan perangkat pelindung (mis: pengekangan fisik, rel samping, pintu terkunci, pagar)",
          "Hubungi pihak berwenang sesuai masalah komunitas (mis: puskesmas, polisi, damkar)",
          "Fasilitasi relokasi ke lingkungan yang aman",
          "Lakukan program skrining bahaya lingkungan (mis: timbal)",
          "Ajarkan individu, keluarga, dan kelompok risiko tinggi bahaya lingkungan"
        ]
      }
    },
    {
      "kode": "I.14537",
      "nama": "Pencegahan Cedera",
      "tindakan": {
        "terapeutik": [
          "Identifikasi area lingkungan yang berpotensi menyebabkan cedera",
          "Identifikasi obat yang berpotensi menyebabkan cedera",
          "Identifikasi kesesuaian alas kaki atau stoking elastis pada ekstremitas bawah",
          "Sediakan pencahayaan yang memadai",
          "Gunakan lampu tidur selama jam tidur",
          "Sosialisasikan pasien dan keluarga dengan lingkungan ruang rawat (mis: penggunaan telepon, tempat tidur, penerangan ruangan, dan lokasi kamar mandi)",
          "Gunakan alas kaki jika berisiko mengalami cedera serius",
          "Sediakan alas kaki antislip",
          "Sediakan pispot dan urinal untuk eliminasi di tempat tidur, jika perlu",
          "Pastikan bel panggilan atau telepon mudah terjangkau",
          "Pastikan barang-barang pribadi mudah dijangkau",
          "Pertahankan posisi tempat tidur di posisi terendah saat digunakan",
          "Pastikan roda tempat tidur atau kursi roda dalam kondisi terkunci",
          "Gunakan pengaman tempat tidur sesuai dengan kebijakan fasilitas pelayanan  Kesehatan",
          "Pertimbangkan penggunaan alarm elektronik pribadi atau alarm sensor pada tempat tidur atau kursi",
          "Diskusikan mengenai latihan dan terapi fisik yang diperlukan",
          "Diskusikan mengenai alat bantu mobilitas yang sesuai (mis: tongkat atau alat bantu jalan)",
          "Diskusikan Bersama anggota keluarga yang dapat mendampingi pasien",
          "Tingkatkan frekuensi observasi dan pengawasan pasien, sesuai kebutuhan",
          "Jelaskan alasan intervensi pencegahan jatuh ke pasien dan keluarga",
          "Anjurkan berganti posisi secara perlahan dan duduk selama beberapa menit sebelum berdiri"
        ]
      }
    }
  ]
},
{
  "id": "0137",
  "slug": "risiko-cedera-pada-ibu",
  "kode": "D.0137",
  "nama": "Risiko Cedera Pada Ibu",
  "definisi": "Risiko cedera pada ibu merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami bahaya atau kerusakan...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Besarnya ukuran janin",
    "Malposisi janin (posisi posterior)",
    "Induksi persalinan",
    "Persalinan lama kala I, II, dan III",
    "Disfungsi uterus",
    "Efek metode/intervensi bedah selama persalinan",
    "Kurangnya dukungan keluarga dan orang tua",
    "Kurang adekuatnya observasi dan antisipasi",
    "Keterlambatan pengambilan keputusan dan manajemen",
    "Skrining dan perawatan prenatal yang tidak adekuat",
    "Kecemasan berlebihan pada proses persalinan",
    "Riwayat cedera pada persalinan sebelumnya",
    "Usia ibu (< 15 tahun atau > 35 tahun)",
    "Paritas banyak",
    "Perubahan hormonal",
    "Perubahan postur tubuh",
    "Ketuban pecah",
    "Proses infeksi",
    "Penyakit penyerta",
    "Masalah kontraksi"
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
      "nama": "Pencegahan Cedera",
      "tindakan": {
        "terapeutik": [
          "Identifikasi area lingkungan yang berpotensi menyebabkan cedera",
          "Identifikasi obat yang berpotensi menyebabkan cedera",
          "Identifikasi kesesuaian alas kaki atau stoking elastis pada ekstremitas bawah",
          "Sediakan pencahayaan yang memadai",
          "Gunakan lampu tidur selama jam tidur",
          "Sosialisasikan pasien dan keluarga dengan lingkungan ruang rawat (mis: penggunaan telepon, tempat tidur, penerangan ruangan, dan lokasi kamar mandi)",
          "Gunakan alas kaki jika berisiko mengalami cedera serius",
          "Sediakan alas kaki antislip",
          "Sediakan pispot dan urinal untuk eliminasi di tempat tidur, jika perlu",
          "Pastikan bel panggilan atau telepon mudah terjangkau",
          "Pastikan barang-barang pribadi mudah dijangkau",
          "Pertahankan posisi tempat tidur di posisi terendah saat digunakan",
          "Pastikan roda tempat tidur atau kursi roda dalam kondisi terkunci",
          "Gunakan pengaman tempat tidur sesuai dengan kebijakan fasilitas pelayanan  Kesehatan",
          "Pertimbangkan penggunaan alarm elektronik pribadi atau alarm sensor pada tempat tidur atau kursi",
          "Diskusikan mengenai latihan dan terapi fisik yang diperlukan",
          "Diskusikan mengenai alat bantu mobilitas yang sesuai (mis: tongkat atau alat bantu jalan)",
          "Diskusikan Bersama anggota keluarga yang dapat mendampingi pasien",
          "Tingkatkan frekuensi observasi dan pengawasan pasien, sesuai kebutuhan",
          "Jelaskan alasan intervensi pencegahan jatuh ke pasien dan keluarga",
          "Anjurkan berganti posisi secara perlahan dan duduk selama beberapa menit sebelum berdiri"
        ]
      }
    },
    {
      "kode": "I.07228",
      "nama": "Perawatan Persalinan Risiko Tinggi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kondisi umum pasien",
          "Monitor tanda-tanda vital",
          "Monitor kelainan tanda vital pada ibu dan janin",
          "Monitor tanda-tanda persalinan",
          "Monitor denyut jantung janin",
          "Identifikasi posisi janin dengan USG",
          "Identifikasi perdarahan pasca persalinan",
          "Sediakan peralatan yang sesuai, termasuk monitor janin, ultrasound, mesin anestesi, persediaan resusitasi neonatal, forceps, dan penghangat bayi ekstra",
          "Dukung orang terdekat mendampingi pasien",
          "Gunakan Tindakan pencegahan universal",
          "Lakukan perineal scrub",
          "Fasilitasi rotasi manual kepala janin dari oksiput posterior ke posisi anterior",
          "Lakukan amniotomy selaput ketuban",
          "Fasilitasi Tindakan forceps atau ekstraksi vakum, jika perlu",
          "Lakukan resusitasi neonatal, jika perlu",
          "Fasilitasi ibu pulih dari anestesi, jika perlu",
          "Motivasi interaksi orang tua dengan bayi baru lahir segera setelah persalinan",
          "Dokumentasikan prosedur (mis: anestesi, forsep, ekstraksi vakum, tekanan suprapubic, manuver McRobert, resusitasi neonatal)",
          "Jelaskan prosedur Tindakan yang akan dilakukan",
          "Jelaskan karakteristik bayi baru lahir yang terkait dengan kelahiran berisiko tinggi (mis: memar dan tanda forceps)",
          "Koordinasi dengan tim untuk standby (mis: neonatologis, perawat intensif neonatal, anetesiologis)",
          "Kolaborasi pemberian anestesi maternal, sesuai kebutuhan"
        ]
      }
    },
    {
      "kode": "I.14560",
      "nama": "Perawatan Kehamilan Risiko Tinggi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi faktor risiko kehamilan (mis: diabetes, hipertensi, lupus eritmatosus, herpes, hepatisis, HIV, epilepsi)",
          "Identifikasi riwayat obtetris (mis: prematuritas, postmaturitas, preeklamsia, kehamilan multifetal, retardasi pertumbuhan intrauterine, abrupsi, plasenta previa, sensitisasi Rh, ketuban pecah dini, dan Riwayat kelainan genetic keluarga)",
          "Identifikasi sosial dan demografi (mis: usia ibu, ras, kemiskinan, terlambat atau tidak ada perawatan prenatal, penganiayaan fisik, dan penyalahgunaan zat)",
          "Monitor status fisik dan psikososial selama kehamilan",
          "Damping ibu saat merasa cemas",
          "Diskusikan seksualitas aman selama hamil",
          "Diskusikan ketidaknyamanan selama hamil",
          "Diskusikan persiapan persalinan dan kelahiran",
          "Jelaskan risiko janin mengalami kelahiran prematur",
          "Informasikan kemungkinan intervensi selama proses kelahiran (mis: pemantauan janin elektronik intrapartum, induksi, perawatan SC)",
          "Anjurkan melakukan perawatan diri untuk meningkatkan Kesehatan",
          "Anjurkan ibu untuk beraktivitas dan beristirahat yang cukup",
          "Ajarkan cara menghitung Gerakan janin",
          "Ajarkan akvititas yang aman selama hamil",
          "Ajarkan mengenali tanda bahaya (mis: perdarahan vagina merah terang, perubahan cairan ketuban, penurunan Gerakan janin, kontraksi sebelum 37 minggu, sakit kepala, gangguan penglihatan, nyeri epigastric, dan penambahan berat badan yang cepat dengan edema wajah)",
          "Kolaborasi dengan spesialis jika ditemukan tanda dan bahaya kehamilan"
        ]
      }
    }
  ]
},
{
  "id": "0138",
  "slug": "risiko-cedera-pada-janin",
  "kode": "D.0138",
  "nama": "Risiko Cedera Pada Janin",
  "definisi": "Risiko cedera pada janin merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami bahaya atau kerusakan fisik pada...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "cedera",
    "luka",
    "trauma"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Besarnya ukuran janin",
    "Malposisi janin (posisi posterior)",
    "Induksi persalinan",
    "Persalinan lama kala I, II, dan III",
    "Disfungsi uterus",
    "Kecemasan yang berlebihan tentang proses persalinan",
    "Riwayat persalinan sebelumnya",
    "Usia ibu (< 15 tahun atau > 35 tahun)",
    "Paritas banyak",
    "Efek metode/intervensi bedah selama persalinan",
    "Nyeri pada abdomen",
    "Nyeri pada jalan lahir",
    "Penggunaan alat bantu persalinan",
    "Kelelahan",
    "Merokok",
    "Efek agen farmakologis",
    "Pengaruh budaya",
    "Pola makan yang tidak sehat",
    "Faktor ekonomi",
    "Konsumsi alkohol",
    "Terpapar zat teratogen"
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
      "nama": "Pemantauan denyut jantung janin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status obstetrik",
          "Identifikasi Riwayat obstetrik",
          "Identifikasi adanya penggunaan obat, diet, dan merokok",
          "Identifikasi pemeriksaan kehamilan sebelumnya",
          "Periksa denyut jantung janin selama 1 menit",
          "Monitor denyut jantung ibu",
          "Monitor tanda vital ibu",
          "Atur posisi pasien",
          "Lakukan manuver leopold untuk menentukan posisi janin",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu"
        ]
      }
    },
    {
      "kode": "I.14537",
      "nama": "Pencegahan Cedera",
      "tindakan": {
        "terapeutik": [
          "Identifikasi area lingkungan yang berpotensi menyebabkan cedera",
          "Identifikasi obat yang berpotensi menyebabkan cedera",
          "Identifikasi kesesuaian alas kaki atau stoking elastis pada ekstremitas bawah",
          "Sediakan pencahayaan yang memadai",
          "Gunakan lampu tidur selama jam tidur",
          "Sosialisasikan pasien dan keluarga dengan lingkungan ruang rawat (mis: penggunaan telepon, tempat tidur, penerangan ruangan, dan lokasi kamar mandi)",
          "Gunakan alas kaki jika berisiko mengalami cedera serius",
          "Sediakan alas kaki antislip",
          "Sediakan pispot dan urinal untuk eliminasi di tempat tidur, jika perlu",
          "Pastikan bel panggilan atau telepon mudah terjangkau",
          "Pastikan barang-barang pribadi mudah dijangkau",
          "Pertahankan posisi tempat tidur di posisi terendah saat digunakan",
          "Pastikan roda tempat tidur atau kursi roda dalam kondisi terkunci",
          "Gunakan pengaman tempat tidur sesuai dengan kebijakan fasilitas pelayanan  Kesehatan",
          "Pertimbangkan penggunaan alarm elektronik pribadi atau alarm sensor pada tempat tidur atau kursi",
          "Diskusikan mengenai latihan dan terapi fisik yang diperlukan",
          "Diskusikan mengenai alat bantu mobilitas yang sesuai (mis: tongkat atau alat bantu jalan)",
          "Diskusikan Bersama anggota keluarga yang dapat mendampingi pasien",
          "Tingkatkan frekuensi observasi dan pengawasan pasien, sesuai kebutuhan",
          "Jelaskan alasan intervensi pencegahan jatuh ke pasien dan keluarga",
          "Anjurkan berganti posisi secara perlahan dan duduk selama beberapa menit sebelum berdiri"
        ]
      }
    },
    {
      "kode": "I.14554",
      "nama": "Pengukuran Gerakan Janin",
      "tindakan": {
        "terapeutik": [
          "Identifikasi pengetahuan dan kemampuan ibu menghitung gerakan janin",
          "Monitor gerakan janin",
          "Hitung dan catat Gerakan janin (minimal 10 kali Gerakan dalam 12 jam)",
          "Lakukan pemeriksaan CTG (cardiotocography) untuk mengetahui frekuensi dan keteraturan denyut jantung janin dan kontraksi rahim ibu",
          "Catat jumlah Gerakan janin dalam 12 jam perhari",
          "Berikan oksigen 2-3 liter per menit jika gerakan janin belum mencapai 10 kali dalam 12 jam",
          "Jelaskan manfaat menghitung gerakan janin dapat meningkatkan hubungan ibu dan janin",
          "Anjurkan ibu memenuhi kebutuhan nutrisi sebelum menghitung gerakan janin",
          "Anjurkan posisi miring kiri saat menghitung gerakan janin, agar janin dapat memperoleh oksigen dengan optimal dengan meningkatkan sirkulasi fetomaternal",
          "Anjurkan ibu segera memberitahu perawat jika gerakan janin tidak mencapai 10 kali dalam 12 jam",
          "Ajarkan ibu cara menghitung gerakan janin",
          "Kolaborasi dengan tim medis jika ditemukan gawat janin"
        ]
      }
    }
  ]
},
{
  "id": "0139",
  "slug": "risiko-gangguan-integritas-kulitjaringan",
  "kode": "D.0139",
  "nama": "Risiko Gangguan Integritas Kulit/Jaringan",
  "definisi": "Risiko gangguan integritas kulit/jaringan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kulit",
    "luka",
    "integritas"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Perubahan sirkulasi",
    "Perubahan status nutrisi (kelebihan atau kekurangan)",
    "Kekurangan/kelebihan volume cairan",
    "Penurunan mobilitas",
    "Bahan kimia iritatif",
    "Suhu lingkungan yang ekstrem",
    "Faktor mekanis (mis: penekanan, gesekan) atau faktor elektris (elektrodiatermi, energi listrik bertegangan tinggi)",
    "Terapi radiasi",
    "Kelembaban",
    "Proses penuaan",
    "Neuropati perifer",
    "Perubahan pigmentasi",
    "Perubahan hormonal",
    "Penekanan pada tonjolan tulang",
    "Kurang terpapar informasi tentang upaya mempertahankan/melindungi integritas jaringan"
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
      "nama": "Perawatan Integritas Kulit",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab gangguan integritas kulit (mis: perubahan sirkulasi, perubahan status nutrisi, penurunan kelembaban, suhu lingkungan ekstrim, penurunan mobilitas)",
          "Ubah posisi setiap 2 jam jika tirah baring",
          "Lakukan pemijatan pada area penonjolan tulang, jika perlu",
          "Bersihkan perineal dengan air hangat, terutama selama periode diare",
          "Gunakan produk berbahan petroleum atau minyak pada kulit kering",
          "Gunakan produk berbahan ringan/alami dan hipoalergik pada kulit sensitive",
          "Hindari produk berbahan dasar alkohol pada kulit kering",
          "Anjurkan menggunakan pelembab (mis: lotion, serum)",
          "Anjurkan minum air yang cukup",
          "Anjurkan meningkatkan asupan nutrisi",
          "Anjurkan meningkatkan asupan buah dan sayur",
          "Anjurkan menghindari terpapar suhu ekstrim",
          "Anjurkan menggunakan tabir surya SPF minimal 30 saat berada diluar rumah",
          "Anjurkan mandi dan menggunakan sabun secukupnya"
        ]
      }
    }
  ]
},
{
  "id": "0140",
  "slug": "risiko-hipotermia",
  "kode": "D.0140",
  "nama": "Risiko Hipotermia",
  "definisi": "Risiko hipotermia merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kegagalan termoregulasi yang dapat....",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Berat badan ekstrem",
    "Kerusakan hipotalamus",
    "Konsumsi alkohol",
    "Kurangnya lapisan lemak subkutan",
    "Suhu lingkungan rendah",
    "Malnutrisi",
    "Pemakaian pakaian yang tipis",
    "Penurunan laju metabolisme",
    "Terapi radiasi",
    "Tidak beraktivitas",
    "Transfer panas (mis: konduksi, konveksi, evaporasi, radiasi)",
    "Trauma",
    "Prematuritas",
    "Penuaan",
    "Bayi baru lahir",
    "Berat badan lahir rendah",
    "Kurang terpapar informasi tentang pencegahan hipotermia",
    "Efek agen farmakologis"
  ],
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
      "nama": "Manajemen Hipotermia",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh",
          "Identifikasi penyebab hipotermia (mis: terpapar suhu lingkungan rendah, pakaian tipis, kerusakan hipotalamus, penurunan laju metabolisme, kekurangan lemak subkutan)",
          "Monitor tanda dan gejala akibat hipotermia (mis: hipotermia ringan: takipnea, disartria, menggigil, hipertensi, diuresis; hipotermia sedang: aritmia, hipotensi, apatis, koagulopati, refleks menurun; hipotermia berat: oliguria, refleks menghilang, edema paru, asam-basa abnormal)",
          "Sediakan lingkungan yang hangat (mis: atur suhu ruangan, inkubator)",
          "Ganti pakaian dan/atau linen yang basah",
          "Lakukan penghangatan pasif (mis: selimut, menutup kepala, pakaian tebal)",
          "Lakukan penghangatan aktif eksternal (mis: kompres hangat, botol hangat, selimut hangat, perawatan metode kangguru)",
          "Lakukan penghangatan aktif internal (mis: infus cairan hangat, oksigen hangat, lavase peritoneal dengan cairan hangat)",
          "Anjurkan makan/minum hangat"
        ]
      }
    },
    {
      "kode": "I.14578",
      "nama": "Regulasi Temperatur",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh  bayi sampai stabil (36,5 – 37,5°C)",
          "Monitor suhu tubuh anak tiap 2 jam, jika perlu",
          "Monitor tekanan darah, frekuensi pernapasan dan nadi",
          "Monitor warna dan suhu kulit",
          "Monitor dan catat tanda dan gejala hipotermia atau hipertermia",
          "Pasang alat pemantau suhu kontinu, jika perlu",
          "Tingkatkan asupan cairan dan nutrisi yang adekuat",
          "Bedong bayi segera setelah lahir untuk mencegah kehilangan panas",
          "Masukkan bayi BBLR ke dalam plastic segera setelah lahir (mis: bahan polyethylene, polyurethane)",
          "Gunakan topi bayi untuk mencegah kehilangan panas pada bayi baru lahir",
          "Tempatkan bayi baru lahir di bawah radiant warmer",
          "Pertahankan kelembaban incubator 50% atau lebih untuk mengurangi kehilangan panas karena proses evaporasi",
          "Atur suhu incubator sesuai kebutuhan",
          "Hangatkan terlebih dahulu bahan-bahan yang akan kontak dengan bayi (mis: selimut, kain bedongan, stetoskop)",
          "Hindari meletakkan bayi di dekat jendela terbuka atau di area aliran pendingin ruangan atau kipas angin",
          "Gunakan matras penghangat, selimut hangat, dan penghangat ruangan untuk menaikkan suhu tubuh, jika perlu",
          "Gunakan Kasur pendingin, water circulating blankets, ice pack, atau gel pad dan intravascular cooling cathetherization untuk menurunkan suhu tubuh",
          "Sesuaikan suhu lingkungan dengan kebutuhan pasien",
          "Jelaskan cara pencegahan heat exhaustion dan heat stroke",
          "Jelaskan cara pencegahan hipotermi karena terpapar udara dingin",
          "Demonstrasikan Teknik perawatan metode kanguru (PMK) untuk bayi BBLR",
          "Kolaborasi pemberian antipiretik, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0141",
  "slug": "risiko-hipotermia-perioperatif",
  "kode": "D.0141",
  "nama": "Risiko Hipotermia Perioperatif",
  "definisi": "Risiko hipotermia perioperatif merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami penurunan suhu tubuh di bawah...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Prosedur pembedahan",
    "Kombinasi anestesi regional dan umum",
    "Skor American Society of Anestesiologist (ASA) > 1",
    "Suhu pra-operasi rendah (< 36°C)",
    "Berat badan naik",
    "Neuropati diabetik",
    "Komplikasi kardiovaskuler",
    "Suhu lingkungan rendah",
    "Transfer panas (mis: volume tinggi infus yang tidak dihangatkan, irigasi > 2 liter yang tidak dihangatkan)"
  ],
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
      "nama": "Manajemen Hipotermia",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh",
          "Identifikasi penyebab hipotermia (mis: terpapar suhu lingkungan rendah, pakaian tipis, kerusakan hipotalamus, penurunan laju metabolisme, kekurangan lemak subkutan)",
          "Monitor tanda dan gejala akibat hipotermia (mis: hipotermia ringan: takipnea, disartria, menggigil, hipertensi, diuresis; hipotermia sedang: aritmia, hipotensi, apatis, koagulopati, refleks menurun; hipotermia berat: oliguria, refleks menghilang, edema paru, asam-basa abnormal)",
          "Sediakan lingkungan yang hangat (mis: atur suhu ruangan, inkubator)",
          "Ganti pakaian dan/atau linen yang basah",
          "Lakukan penghangatan pasif (mis: selimut, menutup kepala, pakaian tebal)",
          "Lakukan penghangatan aktif eksternal (mis: kompres hangat, botol hangat, selimut hangat, perawatan metode kangguru)",
          "Lakukan penghangatan aktif internal (mis: infus cairan hangat, oksigen hangat, lavase peritoneal dengan cairan hangat)",
          "Anjurkan makan/minum hangat"
        ]
      }
    },
    {
      "kode": "I.02058",
      "nama": "Pemantauan hemodinamik invasif",
      "tindakan": {
        "terapeutik": [
          "Monitor frekuensi dan irama jantung",
          "Monitor TDS, TDD, MAP, tekanan vena sentral, tekanan arteri pulmonal, tekanan baji arteri paru",
          "Monitor curah jantung dan indeks jantung",
          "Monitor bentuk gelombang hemodinamik",
          "Monitor perfusi perifer distal pada sisi inserti setiap 4 jam",
          "Monitor tanda-tanda infeksi dan perdarahan pada sisi insersi",
          "Monitor tanda-tanda komplikasi akibat pemasangan selang (mis: pneumothoraks, selang tertekuk, embolisme udara)",
          "Damping pasien saat pemasangan dan pelepasan kateter jalur hemodinamik",
          "Lakukan tes allen untuk menilai kolateral ulnaris sebelum kanulasi pada arteri radialis",
          "Pastikan set selang terangkai dan terpasang dengan tepat",
          "Konfirmasi ketepatan posisi selang dengan pemeriksaan x-ray, jika perlu",
          "Posisikan transduser pada atrium kanan (aksis flebostatik) setiap 4 – 12 jam untuk mengkalibrasi dan mentitiknolkan perangkat",
          "Pastikan balon deflasi dan Kembali ke posisi normal setelah pengukuran tekanan baji arteri paru (PAWP)",
          "Ganti selang dan cairan infus setiap 24 – 72 jam, sesuai protocol",
          "Ganti balutan pada area insersi dengan Teknik steril",
          "Atur interval waktu pemantauan sesuai dengan kondisi pasien",
          "Dokumentasikan hasil pemantauan",
          "Jelaskan tujuan dan prosedur pemantauan",
          "Informasikan hasil pemantauan, jika perlu",
          "Anjurkan membatasi gerak/aktivitas selama kateter terpasang"
        ]
      }
    }
  ]
},
{
  "id": "0142",
  "slug": "risiko-infeksi",
  "kode": "D.0142",
  "nama": "Risiko Infeksi",
  "definisi": "Risiko infeksi merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami peningkatan terserang organisme patogenik.",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "integrasi",
    "kuman",
    "bakteri",
    "virus"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Penyakit kronis (mis: diabetes melitus)",
    "Efek prosedur invasif",
    "Malnutrisi",
    "Peningkatan paparan organisme patogen lingkungan",
    "Ketidakadekuatan pertahanan tubuh primer (gangguan peristaltik; kerusakan integritas kulit; perubahan sekresi pH; penurunan kerja siliaris; ketuban pecah lama; ketuban pecah sebelum waktunya; merokok; statis cairan tubuh)",
    "Ketidakadekuatan pertahanan tubuh sekunder (penurunan hemoglobin; imunosupresi; leukopenia; supresi respon inflamasi; vaksinasi tidak adekuat)"
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
      "nama": "Manajemen Imunisasi/Vaksinasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi Riwayat Kesehatan dan Riwayat alergi",
          "Identifikasi kontraindikasi pemberian imunisasi (mis: reaksi anafilaksis terhadap vaksin sebelumnya dan/atau sakit parah dengan atau tanpa demam)",
          "Identifikasi status imunisasi setiap kunjungan ke pelayanan kesehatan",
          "Berikan suntikan pada bayi di bagian paha anterolateral",
          "Dokumentasikan informasi vaksinasi (mis: nama produsen, tanggal kadaluarsa)",
          "Jadwalkan imunisasi pada interval waktu yang tepat",
          "Jelaskan tujuan, manfaat, reaksi yang terjadi, jadwal, dan efek samping",
          "Informasikan imunisasi yang diwajibkan pemerintah (mis: hepatitis B, BCG, difteri, tetanus, pertussis, H. influenza, polio, campak, measles, rubela)",
          "Infromasikan imunisasi yang melindungi terhadap penyakit namun saat ini tidak diwajibkan pemerintah (mis: influenza, pneumokokus)",
          "Informasikan vaksinasi untuk kejadian khusus (mis: rabies, tetanus)",
          "Informasikan penundaan pemberian imunisasi tidak berarti mengulang jadwal imunisasi Kembali",
          "Informasikan penyedia layanan Pekan Imunisasi Nasional yang menyediakan vaksin gratis"
        ]
      }
    },
    {
      "kode": "I.14539",
      "nama": "Pencegahan Infeksi",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda dan gejala infeksi lokal dan sistemik",
          "Batasi jumlah pengunjung",
          "Berikan perawatan kulit pada area edema",
          "Cuci tangan sebelum dan sesudah kontak dengan pasien dan lingkungan pasien",
          "Pertahankan teknik aseptic pada pasien berisiko tinggi",
          "Jelaskan tanda dan gejala infeksi",
          "Ajarkan cara mencuci tangan dengan benar",
          "Ajarkan etika batuk",
          "Ajarkan cara memeriksa kondisi luka atau luka operasi",
          "Anjurkan meningkatkan asupan nutrisi",
          "Anjurkan meningkatkan asupan cairan",
          "Kolaborasi pemberian imunisasi, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0143",
  "slug": "risiko-jatuh",
  "kode": "D.0143",
  "nama": "Risiko Jatuh",
  "definisi": "Risiko jatuh merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kerusakan fisik dan gangguan kesehatan akibat...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "jatuh",
    "fall",
    "tergelincir"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Usia ≥  65 tahun (pada dewasa) atau ≤ 2 tahun (pada anak)",
    "Riwayat jatuh",
    "Anggota gerak bawah prosthesis (buatan)",
    "Penggunaan alat bantu berjalan",
    "Penurunan tingkat kesadaran",
    "Perubahan fungsi kognitif",
    "Lingkungan tidak aman (mis: licin, gelap, lingkungan asing)",
    "Kondisi pasca operasi",
    "Hipotensi ortostatik",
    "Perubahan kadar glukosa darah",
    "Anemia",
    "Kekuatan otot menurun",
    "Gangguan pendengaran",
    "Gangguan keseimbangan",
    "Gangguan penglihatan (mis: glaucoma, katarak, ablasio retina, neuritis optikus)",
    "Neuropati",
    "Efek agen farmakologis (mis: sedasi, alkohol, anestesi umum)"
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
      "nama": "Pencegahan Jatuh",
      "tindakan": {
        "terapeutik": [
          "Identifikasi faktor jatuh (mis: usia > 65 tahun, penurunan tingkat kesadaran, defisit kognitif, hipotensi ortostatik, gangguan keseimbangan, gangguan penglihatan, neuropati)",
          "Identifikasi risiko jatuh setidaknya sekali setiap shift atau sesuai dengan kebijakan institusi",
          "Identifikasi faktor lingkungan yang meningkatkan risiko jatuh (mis: lantai licin, penerangan kurang)",
          "Hitung risiko jatuh dengan menggunakan skala (mis: fall morse scale, humpty dumpty scale), jika perlu",
          "Monitor kemampuan berpindah dari tempat tidur ke kursi roda dan sebaliknya",
          "Orientasikan ruangan pada pasien dan keluarga",
          "Pastikan roda tempat tidur dan kursi roda selalu dalam kondisi terkunci",
          "Pasang handrail tempat tidur",
          "Atur tempat tidur mekanis pada posisi terendah",
          "Tempatkan pasien berisiko tinggi jatuh dekat dengan pantauan  perawat dari nurse station",
          "Gunakan alat bantu berjalan (mis: kursi roda, walker)",
          "Dekatkan bel pemanggil dalam jangkauan pasien",
          "Anjurkan memanggil perawat jika membutuhkan bantuan untuk berpindah",
          "Anjurkan menggunakan alas kaki yang tidak licin",
          "Anjurkan berkonsentrasi untuk menjaga keseimbangan tubuh",
          "Anjurkan melebarkan jarak kedua kaki untuk meningkatkan keseimbangan saat berdiri",
          "Ajarkan cara menggunakan bel pemanggil untuk memanggil perawat"
        ]
      }
    },
    {
      "kode": "I.14513",
      "nama": "Manajemen Keselamatan Lingkungan",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kebutuhan keselamatan (mis: kondisi fisik, fungsi kognitif, dan Riwayat perilaku)",
          "Monitor perubahan status keselamatan lingkungan",
          "Hilangkan bahaya keselamatan lingkungan (mis: fisik, biologi, kimia), jika memungkinkan",
          "Modifikasi lingkungan untuk meminimalkan bahaya dan risiko",
          "Sediakan alat bantu keamanan lingkungan (mis: commode chair dan pegangan tangan)",
          "Gunakan perangkat pelindung (mis: pengekangan fisik, rel samping, pintu terkunci, pagar)",
          "Hubungi pihak berwenang sesuai masalah komunitas (mis: puskesmas, polisi, damkar)",
          "Fasilitasi relokasi ke lingkungan yang aman",
          "Lakukan program skrining bahaya lingkungan (mis: timbal)",
          "Ajarkan individu, keluarga, dan kelompok risiko tinggi bahaya lingkungan"
        ]
      }
    }
  ]
},
{
  "id": "0144",
  "slug": "risiko-luka-tekan",
  "kode": "D.0144",
  "nama": "Risiko Luka Tekan",
  "definisi": "Risiko luka tekan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami cedera lokal pada...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "luka tekan",
    "decubitus",
    "dekubitus"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Skor skala Braden Q ≤ 16 (anak) atau skor skala Braden < 18 (dewasa)",
    "Perubahan fungsi kognitif",
    "Perubahan sensasi",
    "Skor ASA (American in Sensation Anesthesiologist) ≥ 2",
    "Anemia",
    "Penurunan mobilisasi",
    "Penurunan kadar albumin",
    "Penurunan oksigenasi jaringan",
    "Penurunan perfusi jaringan",
    "Dehidrasi",
    "Kulit kering",
    "Edema",
    "Peningkatan suhu kulit 1 – 2°C",
    "Periode imobilisasi yang lama diatas permukaan yang keras (mis: prosedur operasi ≥ 2 jam)",
    "Usia ≥ 65 tahun",
    "Beran badan lebih",
    "Fraktur tungkai",
    "Riwayat stroke",
    "Riwayat luka tekan",
    "Riwayat trauma",
    "Hipertermi",
    "Inkontinensia",
    "Ketidakadekuatan nutrisi",
    "Skor RAPS (Risk Assesment Pressure Score) rendah",
    "Klasifikasi fungsional NYHA (New York Heart Association) ≥ 2",
    "Efek agen farmakologis (mis: anestesi umum, vasopressor, antidepressant, norepinefrin)",
    "Imobilisasi fisik",
    "Penekanan di atas tonjolan tulang",
    "Penurunan tebal lipatan kulit trisep",
    "Kulit bersisik",
    "Gesekan permukaan kulit"
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
      "nama": "Manajemen Sensasi Perifer",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab perubahan sensasi",
          "Identifikasi penggunaan alat pengikat, prosthesis, sepatu, dan pakaian",
          "Periksa perbedaan sensasi tajam atau tumpul",
          "Periksa perbedaan sensasi panas atau dingin",
          "Periksa kemampuan mengidentifikasi lokasi dan tekstur benda",
          "Monitor terjadinya parestesia, jika perlu",
          "Monitor perubahan kulit",
          "Monitor adanya tromboplebitis dan tromboemboli vena",
          "Hindai pemakaian benda-benda yang berlebihan suhunya (terlalu panas atau dingin)",
          "Anjurkan penggunaan thermometer untuk menguji suhu air",
          "Anjurkan penggunaan sarung tangan termal saat memasak",
          "Anjurkan memakai sepatu lembut dan bertumit rendah",
          "Kolaborasi pemberian analgesik, jika perlu",
          "Kolaborasi pemberian kortikosteroid, jika perlu"
        ]
      }
    },
    {
      "kode": "I.14543",
      "nama": "Pencegahan Luka Tekan",
      "tindakan": {
        "terapeutik": [
          "Periksa luka tekan dengan menggunakan skala (mis: skala Noton, skala Braden)",
          "Periksa adanya luka tekan sebelumnya",
          "Monitor suhu kulit yang tertekan",
          "Monitor berat badan dan perubahannya",
          "Monitor status kulit harian",
          "Monitor ketat area yang memerah",
          "Monitor kulit di atas tonjolan tulang atau titik tekan saat mengubah posisi",
          "Monitor sumber tekanan atau gesekan",
          "Monitor mobilitas dan aktivitas individu",
          "Keringkan daerah kulit yang lembab akibat keringat, cairan luka, dan inkontinensia fekal atau urin",
          "Gunakan barier seperti lotion atau bantalan penyerap air",
          "Ubah posisi dengan hati-hati setiap 1 – 2 jam",
          "Buat jadwal perubahan posisi",
          "Berikan bantalan pada titik tekan atau tonjolan tulang",
          "Jaga sprai tetap kering, bersih dan tidak ada kerutan/lipatan",
          "Gunakan Kasur khusus, jika perlu",
          "Hindari pemijatan di atas tonjolan tulang",
          "Hindari pemberian lotion pada daerah yang luka atau kemerahan",
          "Hindari mengunakan air hangat dan sabun keras saat mandi",
          "Pastikan asupan makanan yang cukup terutama protein, vitamin B dan C, zat besi, dan kalori",
          "Jelaskan tanda-tanda kerusakan kulit",
          "Anjurkan melapor jika menemukan tanda-tanda kerusakan kulit",
          "Ajarkan cara merawat kulit"
        ]
      }
    }
  ]
},
{
  "id": "0145",
  "slug": "risiko-mutilasi-diri",
  "kode": "D.0145",
  "nama": "Risiko Mutilasi Diri",
  "definisi": "Risiko mutilasi diri merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko sengaja mencederai diri yang menyebabkan kerusakan...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "mutilasi",
    "self harm",
    "menyakiti diri"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Perkembangan remaja",
    "Individu autistik",
    "Gangguan kepribadian",
    "Penyakit keturunan",
    "Penganiayaan (mis: fisik, psikologis, seksual)",
    "Gangguan hubungan interpersonal",
    "Perceraian keluarga",
    "Keterlambatan perkembangan",
    "Riwayat perilaku mencederai diri",
    "Ancaman kehilangan hubungan yang bermakna",
    "Ketidakmampuan mengungkapkan ketegangan secara verbal",
    "Ketidakmampuan mengatasi masalah",
    "Harga diri rendah",
    "Peningkatan ketegangan yang tidak dapat ditoleransi"
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
      "nama": "Edukasi Manajemen Stres",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Ajarkan Teknik relaksasi",
          "Ajarkan latihan asertif",
          "Ajarkan membuat jadwal olahraga teratur",
          "Anjurkan tetap menulis jurnal untuk meningkatkan optimism dan melepaskan beban",
          "Anjurkan aktivitas untuk menyenangkan diri sendiri (mis: hobi, bermain musik, mengecat kuku)",
          "Anjurkan bersosialisasi",
          "Anjurkan tidur dengan baik setiap malam (7-9 jam)",
          "Anjurkan tertawa untuk melepas stres dengan membaca atau klip video lucu",
          "Anjurkan menjalin komunikasi dengan keluarga dan profesi pemberi asuhan",
          "Anjurkan menyusun jadwal terstruktur"
        ]
      }
    },
    {
      "kode": "I.09282",
      "nama": "Kontrak Perilaku Positif",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kemampuan mental dan kognitif untuk membuat kontrak",
          "Identifikasi cara dan sumber daya terbaik untuk mencapai tujuan",
          "Identifikasi hambatan dalam menerapkan perilaku positif",
          "Monitor pelaksanaan perilaku ketidaksesuaian dan kurang komitmen untuk memenuhi kontrak",
          "Ciptakan lingkungan yang terbuka untuk membuat kontrak perilaku",
          "Fasilitasi pembuatan kontrak tertulis",
          "Diskusikan perilaku  Kesehatan yang ingin diubah",
          "Diskusikan tujuan positif jangka pendek dan jangka Panjang yang realistis dan dapat dicapai",
          "Diskusikan pengembangan rencana perilaku positif",
          "Diskusikan cara mengamati perilaku (mis: tabel kemajuan perilaku)",
          "Diskusikan penghargaan yang diinginkan Ketika tujuan tercapai, jika perlu",
          "Diskusikan konsekuensi atau sanksi tidak memenuhi kontrak",
          "Tetapkan batas waktu yang dibutuhkan untuk pelaksanaan Tindakan yang realistis",
          "Fasilitasi meninjau ulang kontrak dan tujuan, jika perlu",
          "Pastikan kontrak ditandatangani oleh semua pihak yang terlibat, jika perlu",
          "Libatkan keluarga dalam proses kontrak, jika perlu",
          "Anjurkan menuliskan tujuan sendiri, jika perlu"
        ]
      }
    },
    {
      "kode": "I.09290",
      "nama": "Manajemen Pengendalian Marah",
      "tindakan": {
        "terapeutik": [
          "Identifikasi penyebab/pemicu kemarahan",
          "Identifikasi harapan perilaku terhadap ekspresi kemaharan",
          "Monitor potensi agresi tidak konstruktif dan lakukan Tindakan sebelum agresif",
          "Monitor kemajuan dengna membuat grafik, jika perlu",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Fasilitasi mengekpresikan marah secara adaptif",
          "Cegah kerusakan fisik akibat ekspresi marah (mis: menggunakan senjata)",
          "Cegah aktivitas pemicu agresi (mis: meninju tas, mondar-mandir, berolahraga berlebihan)",
          "Lakukan kontrol eksternal (mis: pengekangan, time-out, dan seklusi), jika perlu",
          "Dukung menerapkan strategi pengendalian marah dan ekspresi amarah adaptif",
          "Berikan penguatan atas keberhasilan penerapan strategi pengendalian marah",
          "Jelaskan makna, fungsi marah, frustasi, dan respons marah",
          "Anjurkan meminta bantuan perawat atau keluarga selama ketegangan meningkat",
          "Ajarkan strategi untuk mencegah ekspresi marah maladaptif",
          "Ajarkan metode untuk memodulasi pengalaman emosi yang kuat (mis: latihan asertif, Teknik relaksasi, jurnal, aktivitas penyaluran energi",
          "Kolaborasi pemberian obat, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0146",
  "slug": "risiko-perilaku-kekerasan",
  "kode": "D.0146",
  "nama": "Risiko Perilaku Kekerasan",
  "definisi": "Risiko perilaku kekerasan merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko membahayakan secara fisik, emosi, dan/atau...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "kekerasan",
    "agresif",
    "amarah"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Pemikiran waham/delusi",
    "Curiga pada orang lain",
    "Halusinasi",
    "Berencana bunuh diri",
    "Disfungsi sistem keluarga",
    "Kerusakan kognitif",
    "Disorientasi atau konfusi",
    "Kerusakan kontrol impuls",
    "Persepsi pada lingkungan tidak akurat",
    "Alam perasaan depresi",
    "Riwayat kekerasan pada hewan",
    "Kelainan neurologis",
    "Lingkungan tidak teratur",
    "Penganiayaan atau pengabaian anak",
    "Riwayat atau ancaman kekerasan terhadap diri sendiri atau orang lain atau destruksi properti orang lain",
    "Impulsif",
    "Ilusi"
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
      "nama": "Pencegahan Perilaku Kekerasan",
      "tindakan": {
        "terapeutik": [
          "Monitor adanya benda yang berpotensi membahayakan (mis: benda tajam, tali)",
          "Monitor keamanan barang yang dibawa oleh pengunjung",
          "Monitor selama penggunaan barang yang dapat membahayakan (mis: pisau cukur)",
          "Pertahankan lingkungan bebas dari bahaya secara rutin",
          "Libatkan keluarga dalam perawatan",
          "Anjurkan pengunjung dan keluarga untuk mendukung keselamatan pasien",
          "Latih cara mengungkapkan perasaan secara asertif",
          "Latih mengurangi kemarahan secara verbal dan nonverbal (mis: relaksasi, bercerita)"
        ]
      }
    },
    {
      "kode": "I.09312",
      "nama": "Promosi Koping",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kegiatan jangka pendek dan Panjang sesuai tujuan",
          "Identifikasi kemampuan yang dimiliki",
          "Identifikasi  sumber daya yang tersedia untuk memenuhi tujuan",
          "Identifikasi pemahaman proses penyakit",
          "Identifikasi dampak situasi terhadap peran dan hubungan",
          "Identifikasi metode penyelesaian masalah",
          "Identifikasi kebutuhan dan keinginan terhadap dukungan sosial",
          "Diskusikan perubahan peran yang dialami",
          "Gunakan pendekatan yang tenang dan meyakinkan",
          "Diskusikan alasan mengkritik diri sendiri",
          "Diskusikan untuk mengklarifikasi kesalahpahaman dan mengevaluasi perilaku sendiri",
          "Diskusikan konsekuensi tidak menggunakan rasa bersalah dan rasa malu",
          "Diskusikan risiko yang menimbulkan bahaya pada diri sendiri",
          "Fasilitasi dalam memperoleh informasi yang dibutuhkan",
          "Berikan pilihan realistis mengenai aspek-aspek tertentu dalam perawatan",
          "Motivasi untuk menentukan harapan yang realistis",
          "Tinjau Kembali kemampuan dalam pengambilan keputusan",
          "Hindari mengambil keputusan saat pasien berada dibawah tekanan",
          "Motivasi terlibat dalam kegiatan sosial",
          "Motivasi mengidentifikasi sistem pendukung yang tersedia",
          "Damping saat berduka (mis: penyakit kronis, kecacatan)",
          "Perkenalkan dengan orang atau kelompok yang berhasil mengalami pengalaman sama",
          "Dukung penggunaan mekanisme pertahanan yang tepat",
          "Kurangi rangsangan lingkungan yang mengancam",
          "Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama",
          "Anjurkan penggunaan sumber spiritual, jika perlu",
          "Anjurkan mengungkapkan perasaan dan persepsi",
          "Anjurkan keluarga terlibat",
          "Anjurkan membuat tujuan yang lebih spesifik",
          "Ajarkan cara memecahkan masalah secara konstruktif",
          "Latih penggunaan Teknik relaksasi",
          "Latih keterampilan sosial, sesuai kebutuhan",
          "Latih mengembangkan penilaian obyektif"
        ]
      }
    }
  ]
},
{
  "id": "0147",
  "slug": "risiko-perlambatan-pemulihan-pascabedah",
  "kode": "D.0147",
  "nama": "Risiko Perlambatan Pemulihan Pascabedah",
  "definisi": "Risiko perlambatan pemulihan pascabedah merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami pemanjangan jumlah...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [
    "pemulihan",
    "penyembuhan",
    "post operasi"
  ],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Skor klasifikasi status fisik American Society of Anesthesiologists (ASA) ≥ 3",
    "Hiperglikemia",
    "Edema pada lokasi pembedahan",
    "Prosedur pembedahan ekstensif (luas)",
    "Usia ekstrem",
    "Riwayat perlambatan penyembuhan luka",
    "Gangguan mobilitas",
    "Malnutrisi",
    "Obesitas",
    "Infeksi luka perioperatif",
    "Mual/muntah persisten",
    "Respon emosional pascaoperasi",
    "Pemanjangan proses operasi",
    "Gangguan psikologis pascaoperasi",
    "Kontaminasi bedah",
    "Trauma pada luka operasi",
    "Efek agen farmakologis"
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
      "nama": "Dukungan Mobilisasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi adanya nyeri atau keluhan fisik lainnya",
          "Identifikasi toleransi fisik melakukan pergerakan",
          "Monitor frekuensi jantung dan tekanan darah sebelum memulai mobilisasi",
          "Monitor kondisi umum selama melakukan mobilisasi",
          "Fasilitasi aktivitas mobilisasi dengan alat bantu (mis: pagar tempat tidur)",
          "Fasilitasi melakukan pergerakan, jika perlu",
          "Libatkan keluarga untuk membantu pasien dalam meningkatkan pergerakan",
          "Jelaskan tujuan dan prosedur mobilisasi",
          "Anjurkan melakukan mobilisasi dini",
          "Ajarkan mobilisasi sederhana yang harus dilakukan (mis: duduk di tempat tidur, duduk di sisi tempat tidur, pindah dari tempat tidur ke kursi)"
        ]
      }
    },
    {
      "kode": "I.12391",
      "nama": "Edukasi Manajemen Nyeri",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan penyebab, periode, dan strategi meredakan nyeri",
          "Anjurkan memonitor nyeri secara mandiri",
          "Anjurkan menggunakan analgetic secara tepat",
          "Ajarkan teknik non farmakologis untuk mengurangi rasa nyeri"
        ]
      }
    },
    {
      "kode": "I.12395",
      "nama": "Edukasi Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Periksa status gizi, status alergi, program diet, kebutuhan dan kemampuan pemenuhan kebutuhan gizi",
          "Identifikasi kemampuan dan waktu yang tepat menerima informasi",
          "Persiapkan materi dan media seperti jenis-jenis nutrisi, tabel makanan penukar, cara mengelola, cara menakar makanan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Jelaskan kepada pasien dan keluarga alergi makanan, makanan yang harus di hindari, kebutuhan jumlah kalori, jenis makanan yang dibutuhkan pasien",
          "Ajarkan cara melaksanakan diet sesuai program (mis: makanan tinggi protein, rendah garam, rendah kalori)",
          "Jelaskan hal-hal yang dilakukan sebelum memberikan makan (mis: perawatan mulut, penggunaan gigi palsu, obat-obat yang harus diberikan sebelum makan)",
          "Demonstrasikan cara membersihkan mulut",
          "Demonstrasikan cara mengatur posisi saat makan",
          "Ajarkan pasien/keluarga memonitor asupan kalori dan makanan (mis: menggunakan buku harian)",
          "Ajarkan pasien dan keluarga memantau kondisi kekurangan nutrisi",
          "Anjurkan mendemonstrasikan cara memberi makan, menghitung kalori, menyiapkan makanan sesuai program diet"
        ]
      }
    },
    {
      "kode": "I.03119",
      "nama": "Manajemen Nutrisi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi status nutrisi",
          "Identifikasi alergi dan intoleransi makanan",
          "Identifikasi makanan yang disukai",
          "Identifikasi kebutuhan kalori dan jenis nutrien",
          "Identifikasi perlunya penggunaan selang nasogastrik",
          "Monitor asupan makanan",
          "Monitor berat badan",
          "Monitor hasil pemeriksaan laboratorium",
          "Lakukan oral hygiene sebelum makan, jika perlu",
          "Fasilitasi menentukan pedoman diet (mis: piramida makanan)",
          "Sajikan makanan secara menarik dan suhu yang sesuai",
          "Berikan makanan tinggi serat untuk mencegah konstipasi",
          "Berikan makanan tinggi kalori dan tinggi protein",
          "Berikan suplemen makanan, jika perlu",
          "Hentikan pemberian makan melalui selang nasogastik jika asupan oral dapat ditoleransi",
          "Ajarkan posisi duduk, jika mampu",
          "Ajarkan diet yang diprogramkan",
          "Kolaborasi pemberian medikasi sebelum makan (mis: Pereda nyeri, antiemetik), jika perlu",
          "Kolaborasi dengan ahli gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan, jika perlu"
        ]
      }
    },
    {
      "kode": "I.02067",
      "nama": "Pencegahan Perdarahan",
      "tindakan": {
        "terapeutik": [
          "Monitor tanda dan gejala perdarahan",
          "Monitor nilai hematokrit/hemoglobin sebelum dan setelah kehilangan darah",
          "Monitor tanda-tanda vital ortostatik",
          "Monitor koagulasi (mis: prothrombin time (PT), partial thromboplastin time (PTT), fibrinogen, degradasi fibrin dan/atau platelet)",
          "Pertahankan bed rest selama perdarahan",
          "Batasi tindakan invasive, jika perlu",
          "Gunakan kasur pencegah decubitus",
          "Hindari pengukuran suhu rektal",
          "Jelaskan tanda dan gejala perdarahan",
          "Anjurkan menggunakan kaus kaki saat ambulasi",
          "Anjurkan meningkatkan asupan cairan untuk menghindari konstipasi",
          "Anjurkan menghindari aspirin atau antikoagulan",
          "Anjurkan meningkatkan asupan makanan dan vitamin K",
          "Anjurkan segera melapor jika terjadi perdarahan",
          "Kolaborasi pemberian obat pengontrol perdarahan, jika perlu",
          "Kolaborasi pemberian produk darah, jika perlu",
          "Kolaborasi pemberian pelunak tinja, jika perlu"
        ]
      }
    }
  ]
},
{
  "id": "0148",
  "slug": "risiko-termoregulasi-tidak-efektif",
  "kode": "D.0148",
  "nama": "Risiko Termoregulasi Tidak Efektif",
  "definisi": "Risiko termoregulasi tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai berisiko mengalami kegagalan mempertahankan...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [],
    "objektif": []
  },
  "faktorTerkait": [
    "Cedera otak akut",
    "Dehidrasi",
    "Pakaian yang tidak sesuai untuk suhu lingkungan",
    "Peningkatan area permukaan tubuh terhadap rasio berat badan",
    "Kebutuhan oksigen meningkat",
    "Perubahan laju metabolisme",
    "Proses penyakit (mis: infeksi)",
    "Suhu lingkungan ekstrem",
    "Suplai lemak subkutan tidak memadai",
    "Proses penuaan",
    "Berat badan ekstrem",
    "Efek agen farmakologis (mis: sedasi)"
  ],
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
      "nama": "Edukasi Pengukuran Suhu Tubuh",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Dokumentasikan hasil pengukuran suhu",
          "Jelaskan prosedur pengukuran suhu tubuh",
          "Anjurkan terus memegang bahu dan menahan dada saat pengukuran aksila",
          "Ajarkan memilih lokasi pengukuran suhu oral atau aksila",
          "Ajarkan cara meletakkan ujung thermometer di bawah blidah atau di bagian tengah aksila",
          "Ajarkan cara membaca hasil thermometer raksa dan/atau elektronik"
        ]
      }
    },
    {
      "kode": "I.12457",
      "nama": "Edukasi Termoregulasi",
      "tindakan": {
        "terapeutik": [
          "Identifikasi kesiapan dan kemampuan menerima informasi",
          "Sediakan materi dan media Pendidikan Kesehatan",
          "Jadwalkan Pendidikan Kesehatan sesuai kesepakatan",
          "Berikan kesempatan untuk bertanya",
          "Ajarkan kompres hangat jika demam",
          "Ajarkan cara pengukuran suhu",
          "Anjurkan penggunaan pakaian yang dapat menyerap keringat",
          "Anjurkan tetap memandikan pasien, jika memungkinkan",
          "Anjurkan pemberian antipiretik, sesuai indikasi",
          "Anjurkan menciptakan lingkungan yang nyaman",
          "Anjurkan memperbanyak minum",
          "Anjurkan penggunaan pakaian yang longgar",
          "Anjurkan minum analgesik jika merasa pusing, sesuai indikasi",
          "Anjurkan melakukan pemeriksaan darah jika demam > 3 hari"
        ]
      }
    }
  ]
},
{
  "id": "0149",
  "slug": "termoregulasi-tidak-efektif",
  "kode": "D.0149",
  "nama": "Termoregulasi Tidak Efektif",
  "definisi": "Termoregulasi tidak efektif merupakan diagnosis keperawatan yang didefinisikan sebagai kegagalan mempertahankan...",
  "kategori": "Keamanan dan Proteksi",
  "tipe": "Aktual",
  "keluhan": [],
  "tandaGejala": {
    "subjektif": [
      "Tidak tersedia"
    ],
    "objektif": [
      "Kulit dingin/hangat",
      "Mengigil",
      "Suhu tubuh fluktuatif"
    ]
  },
  "faktorTerkait": [
    "Stimulasi pusat termoregulasi hipotalamus",
    "Fluktuasi suhu lingkungan",
    "Proses penyakit (mis: infeksi)",
    "Proses penuaan",
    "Dehidrasi",
    "Ketidaksesuaian pakaian untuk suhu lingkungan",
    "Peningkatan kebutuhan oksigen",
    "Perubahan laju metabolisme",
    "Suhu lingkungan ekstrem",
    "Ketidakadekuatan suplai lemak subkutan",
    "Berat badan ekstrem",
    "Efek agen farmakologis (mis: sedasi)"
  ],
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
      "nama": "Regulasi Temperatur",
      "tindakan": {
        "terapeutik": [
          "Monitor suhu tubuh bayi sampai stabil (36,5 – 37,5°C)",
          "Monitor suhu tubuh anak tiap 2 jam, jika perlu",
          "Monitor tekanan darah, frekuensi pernapasan dan nadi",
          "Monitor warna dan suhu kulit",
          "Monitor dan catat tanda dan gejala hipotermia atau hipertermia",
          "Pasang alat pemantau suhu kontinu, jika perlu",
          "Tingkatkan asupan cairan dan nutrisi yang adekuat",
          "Bedong bayi segera setelah lahir untuk mencegah kehilangan panas",
          "Masukkan bayi BBLR ke dalam plastic segera setelah lahir (mis: bahan polyethylene, polyurethane)",
          "Gunakan topi bayi untuk mencegah kehilangan panas pada bayi baru lahir",
          "Tempatkan bayi baru lahir di bawah radiant warmer",
          "Pertahankan kelembaban incubator 50% atau lebih untuk mengurangi kehilangan panas karena proses evaporasi",
          "Atur suhu incubator sesuai kebutuhan",
          "Hangatkan terlebih dahulu bahan-bahan yang akan kontak dengan bayi (mis: selimut, kain bedongan, stetoskop)",
          "Hindari meletakkan bayi di dekat jendela terbuka atau di area aliran pendingin ruangan atau kipas angin",
          "Gunakan matras penghangat, selimut hangat, dan penghangat ruangan untuk menaikkan suhu tubuh, jika perlu",
          "Gunakan Kasur pendingin, water circulating blankets, ice pack, atau gel pad dan intravascular cooling cathetherization untuk menurunkan suhu tubuh",
          "Sesuaikan suhu lingkungan dengan kebutuhan pasien",
          "Jelaskan cara pencegahan heat exhaustion dan heat stroke",
          "Jelaskan cara pencegahan hipotermi karena terpapar udara dingin",
          "Demonstrasikan Teknik perawatan metode kanguru (PMK) untuk bayi BBLR",
          "Kolaborasi pemberian antipiretik, jika perlu"
        ]
      }
    }
  ]
}
];
