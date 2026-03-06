/**
 * Database seed untuk 149 Diagnosis Keperawatan SDKI
 * File ini berisi semua data diagnosis yang siap di-import ke database
 */

export const diagnoses = [
  // RESPIRASI (D.0001 - D.0006)
  {
    code: "D.0001",
    name: "Bersihan Jalan Napas Tidak Efektif",
    category: "Respirasi",
    definition:
      "ketidakmampuan membersihkan sekret atau obstruksi jalan nafas untuk mempertahankan jalan nafas tetap paten",
    type: "Aktual",
    signsSymptoms: {
      subjective: [],
      objective: [
        "Batuk tidak efektif",
        "Tidak mampu batuk",
        "Sputum berlebih",
        "Mengi, wheezing, dan/atau ronchi kering",
        "Mekonium di jalan napas (pada neonatus)",
      ],
    },
    relatedFactors: [
      "Spasme jalan napas",
      "Hipersekresi jalan napas",
      "Disfungsi neuromuskuler",
      "Benda asing dalam jalan napas",
      "Adanya jalan napas buatan",
      "Sekresi yang tertahan",
      "Hiperplasia dinding jalan napas",
      "Proses infeksi",
      "Respon alergi",
      "Efek agen farmakologis",
      "Merokok aktif",
      "Merokok pasif",
      "Terpajan polutan",
    ],
    slki: {
      code: "L.01002",
      name: "Bersihan Jalan Napas Meningkat",
      criteria: [
        "Batuk efektif meningkat",
        "Produksi sputum menurun",
        "Mengi menurun",
        "Wheezing menurun",
        "Mekonium (pada neonatus) menurun",
      ],
    },
    siki: [
      { code: "I.01006", name: "Latihan Batuk Efektif" },
      { code: "I.01011", name: "Manajemen Jalan Napas" },
      { code: "I.01014", name: "Pemantauan Respirasi" },
    ],
  },
  {
    code: "D.0002",
    name: "Gangguan Penyapihan Ventilator",
    category: "Respirasi",
    definition:
      "ketidakmampuan beradaptasi dengan pengurangan bantuan ventilator mekanik yang dapat menghambat dan memperlama proses penyapihan",
    type: "Aktual",
    signsSymptoms: {
      subjective: [],
      objective: [
        "Frekuensi napas meningkat",
        "Penggunaan otot bantu napas",
        "Napas megap-megap",
        "Upaya napas dan bantuan ventilator tidak sinkron",
        "Napas dangkal",
        "Agitasi",
        "Nilai gas darah arteri tidak normal",
      ],
    },
    relatedFactors: [
      "Hipersekresi jalan napas",
      "Ketidakcukupan energi",
      "Kecemasan",
      "Perasaan tidak berdaya",
      "Kurang terpapar informasi tentang proses penyapihan",
    ],
    slki: {
      code: "L.01002",
      name: "Penyapihan ventilator meningkat",
      criteria: [
        "Frekuensi napas membaik",
        "Penggunaan otot bantu napas menurun",
        "Napas megap-megap menurun",
        "Kesingkronan bantuan ventilator meningkat",
      ],
    },
    siki: [
      { code: "I.01021", name: "Penyapihan Ventilasi Mekanik" },
      { code: "I.01014", name: "Pemantauan Respirasi" },
    ],
  },
  {
    code: "D.0003",
    name: "Gangguan Pertukaran Gas",
    category: "Respirasi",
    definition:
      "kelebihan atau kekurangan oksigenasi dan/atau eliminasi karbondioksida pada membran alveolus-kapiler",
    type: "Aktual",
    signsSymptoms: {
      subjective: ["Mengeluh sesak"],
      objective: [
        "PCO2 meningkat/menurun",
        "PO2 menurun",
        "pH arteri meningkat/menurun",
        "Takikardia",
        "Adanya bunyi napas tambahan",
      ],
    },
    relatedFactors: [
      "Ketidakseimbangan ventilasi-perfusi",
      "Perubahan membran alveolus-kapiler",
    ],
    slki: {
      code: "L.01003",
      name: "Pertukaran gas meningkat",
      criteria: [
        "Dispnea menurun",
        "Bunyi napas tambahan menurun",
        "Takikardia menurun",
        "PCO2 membaik",
        "PO2 membaik",
        "pH arteri membaik",
      ],
    },
    siki: [
      { code: "I.01014", name: "Pemantauan Respirasi" },
      { code: "I.01026", name: "Terapi Oksigen" },
    ],
  },
  {
    code: "D.0004",
    name: "Gangguan Ventilasi Spontan",
    category: "Respirasi",
    definition:
      "Penurunan cadangan energi yang mengakibatkan individu tidak mampu bernapas secara adekuat",
    type: "Aktual",
    signsSymptoms: {
      subjective: ["Mengeluh sesak (dispnea)"],
      objective: [
        "Penggunaan otot bantu napas meningkat",
        "Volume tidal tidak menurun",
        "PCO2 meningkat",
        "PO2 menurun",
        "SaO2 menurun",
      ],
    },
    relatedFactors: ["Gangguan metabolisme", "Kelelahan otot pernapasan"],
    slki: {
      code: "L.01007",
      name: "Ventilasi spontan meningkat",
      criteria: [
        "Dispnea menurun",
        "Penggunaan otot bantu napas menurun",
        "Volume tidal membaik",
        "PCO2 membaik",
        "PO2 membaik",
        "SaO2 membaik",
      ],
    },
    siki: [
      { code: "I.01002", name: "Dukungan Ventilasi" },
      { code: "I.01014", name: "Pemantauan Respirasi" },
    ],
  },
  {
    code: "D.0005",
    name: "Pola Napas Tidak Efektif",
    category: "Respirasi",
    definition:
      "Inspirasi dan/atau ekspirasi yang tidak memberikan ventilasi adekuat",
    type: "Aktual",
    signsSymptoms: {
      subjective: ["Mengeluh sesak (dispnea)"],
      objective: [
        "Penggunaan otot bantu pernapasan",
        "Fase ekspirasi memanjang",
        "Pola napas abnormal",
        "Adanya bunyi napas tambahan",
      ],
    },
    relatedFactors: [
      "Depresi pusat pernapasan",
      "Hambatan upaya napas",
      "Deformitas dinding dada",
      "Gangguan neuromuskular",
      "Gangguan neurologis",
      "Obesitas",
      "Efek agen farmakologis",
      "Kecemasan",
    ],
    slki: {
      code: "L.01004",
      name: "Pola napas membaik",
      criteria: [
        "Dispnea menurun",
        "Penggunaan otot bantu napas menurun",
        "Pemanjangan fase ekspirasi menurun",
        "Frekuensi napas membaik",
        "Kedalaman napas membaik",
      ],
    },
    siki: [
      { code: "I.01011", name: "Manajemen Jalan Napas" },
      { code: "I.01014", name: "Pemantauan Respirasi" },
      { code: "I.01019", name: "Pengaturan Posisi" },
    ],
  },
  {
    code: "D.0006",
    name: "Risiko Aspirasi",
    category: "Respirasi",
    definition:
      "Risiko mengalami masuknya sekresi gastrointestinal, sekresi orofaring, benda cair atau padat ke dalam saluran trakeobronkhial akibat disfungsi mekanisme protektif saluran napas",
    type: "Risiko",
    riskFactors: [
      "Penurunan tingkat kesadaran",
      "Penurunan refleks muntah dan/atau batuk",
      "Gangguan menelan",
      "Disfagia",
      "Kerusakan mobilitas fisik",
      "Peningkatan residu lambung",
      "Terpasang selang nasogastrik",
      "Terpasang trakeostomi atau ETT",
    ],
    slki: {
      code: "L.01006",
      name: "Tingkat aspirasi menurun",
      criteria: [
        "Tingkat kesadaran meningkat",
        "Kemampuan menelan meningkat",
        "Dispnea menurun",
        "Kelemahan otot menurun",
        "Akumulasi sekret menurun",
      ],
    },
    siki: [
      { code: "I.01011", name: "Manajemen Jalan Napas" },
      { code: "I.01018", name: "Pencegahan Aspirasi" },
    ],
  },
  // SIRKULASI (D.0007 - D.0017)
  {
    code: "D.0007",
    name: "Gangguan Sirkulasi Spontan",
    category: "Sirkulasi",
    definition:
      "ketidakmampuan untuk mempertahankan sirkulasi yang adekuat untuk menunjang kehidupan",
    type: "Aktual",
    signsSymptoms: {
      subjective: ["Tidak berespon (unrespon)"],
      objective: [
        "Frekuensi nadi < 50 atau > 150 kali/menit",
        "Tekanan darah sistolik < 60 atau > 200 mmHg",
        "Frekuensi napas < 6 atau > 30 kali/menit",
        "Kesadaran menurun",
      ],
    },
    relatedFactors: [
      "Abnormalitas kelistrikan jantung",
      "Abnormalitas struktur jantung",
      "Penurunan fungsi ventrikel",
    ],
    slki: {
      code: "L.02015",
      name: "Sirkulasi spontan meningkat",
      criteria: [
        "Tingkat kesadaran meningkat",
        "Frekuensi nadi membaik",
        "Tekanan darah membaik",
        "Frekuensi napas membaik",
      ],
    },
    siki: [
      { code: "I.02038", name: "Manajemen Defibrilasi" },
      { code: "I.03139", name: "Resusitasi Cairan" },
      { code: "I.02083", name: "Resusitasi Jantung Paru" },
    ],
  },
  {
    code: "D.0008",
    name: "Penurunan Curah Jantung",
    category: "Sirkulasi",
    definition:
      "ketidakmampuan jantung memompa darah untuk memenuhi kebutuhan metabolisme tubuh",
    type: "Aktual",
    signsSymptoms: {
      subjective: [
        "Palpitasi",
        "Lelah",
        "Dispnea",
        "Paroxysmal nocturnal dyspnea",
        "Ortopnea",
        "Batuk",
      ],
      objective: [
        "Bradikardia/takikardia",
        "Gambar EKG Aritmia",
        "Edema",
        "Distensi vena jugularis",
        "Tekanan darah meningkat/menurun",
        "Nadi perifer teraba lemah",
        "Oliguria",
        "S3 dan/atau S4",
        "EF menurun",
      ],
    },
    relatedFactors: [
      "Perubahan irama jantung",
      "Perubahan preload",
      "Perubahan afterload",
      "Perubahan kontraktilitas",
    ],
    slki: {
      code: "L.02008",
      name: "Curah jantung meningkat",
      criteria: [
        "Kekuatan nadi perifer meningkat",
        "EF meningkat",
        "Palpitasi menurun",
        "Edema menurun",
        "Dispnea menurun",
        "Oliguria menurun",
      ],
    },
    siki: [
      { code: "I.02075", name: "Perawatan jantung" },
      { code: "I.02076", name: "Perawatan jantung akut" },
    ],
  },
  {
    code: "D.0009",
    name: "Perfusi Perifer Tidak Efektif",
    category: "Sirkulasi",
    definition:
      "Penurunan sirkulasi darah pada level kapiler yang dapat mengganggu metabolisme tubuh",
    type: "Aktual",
    signsSymptoms: {
      subjective: [],
      objective: [
        "Pengisian kapiler >3 detik",
        "Nadi perifer menurun atau tidak teraba",
        "Akral teraba dingin",
        "Warna kulit pucat",
        "Turgor kulit menurun",
      ],
    },
    relatedFactors: [
      "Hiperglikemia",
      "Penurunan konsentrasi hemoglobin",
      "Peningkatan tekanan darah",
      "Kekurangan volume cairan",
      "Penurunan aliran arteri dan/atau vena",
    ],
    slki: {
      code: "L.02011",
      name: "Perfusi Perifer Meningkat",
      criteria: [
        "Kekuatan nadi perifer meningkat",
        "Warna kulit pucat menurun",
        "Pengisian kapiler membaik",
        "Akral membaik",
        "Turgor kulit membaik",
      ],
    },
    siki: [
      { code: "I.02079", name: "Perawatan Sirkulasi" },
      { code: "I.06195", name: "Manajemen Sensasi Perifer" },
    ],
  },
  {
    code: "D.0010",
    name: "Risiko Gangguan Sirkulasi Spontan",
    category: "Sirkulasi",
    definition:
      "Risiko mengalami ketidakmampuan untuk mempertahankan sirkulasi yang adekuat untuk menunjang kehidupan",
    type: "Risiko",
    riskFactors: [
      "Kekurangan volume cairan",
      "Hipoksia",
      "Hipotermia",
      "Hipokalemia/Hiperkalemia",
      "Hipoglikemia/Hiperglikemia",
      "Asidosis",
      "Toksin",
      "Tamponade Jantung",
      "Tension Pneumothorax",
      "Trombosis",
    ],
    slki: {
      code: "L.02015",
      name: "Sirkulasi spontan meningkat",
      criteria: [
        "Tingkat kesadaran meningkat",
        "Saturasi oksigen meningkat",
        "Gambaran EKG aritmia menurun",
        "Frekuensi nadi membaik",
        "Tekanan darah membaik",
      ],
    },
    siki: [
      { code: "I.02068", name: "Pencegahan Syok" },
      { code: "I.02083", name: "Resusitasi Jantung Paru" },
    ],
  },
  {
    code: "D.0011",
    name: "Risiko Penurunan Curah Jantung",
    category: "Sirkulasi",
    definition:
      "Risiko mengalami pemompaan jantung yang tidak adekuat untuk memenuhi kebutuhan metabolisme tubuh",
    type: "Risiko",
    riskFactors: [
      "Perubahan afterload",
      "Perubahan frekuensi jantung",
      "Perubahan irama jantung",
      "Perubahan kontraktilitas",
      "Perubahan preload",
    ],
    slki: {
      code: "L.02008",
      name: "Curah jantung meningkat",
      criteria: [
        "Kekuatan nadi perifer meningkat",
        "EF meningkat",
        "Palpitasi menurun",
        "Edema menurun",
        "Dispnea menurun",
      ],
    },
    siki: [
      { code: "I.02075", name: "Perawatan jantung" },
      { code: "I.02076", name: "Perawatan jantung akut" },
    ],
  },
  {
    code: "D.0012",
    name: "Risiko Perdarahan",
    category: "Sirkulasi",
    definition:
      "Berisiko mengalami kehilangan darah baik internal maupun eksternal",
    type: "Risiko",
    riskFactors: [
      "Aneurisma",
      "Gangguan gastrointestinal",
      "Gangguan fungsi hati",
      "Komplikasi kehamilan",
      "Komplikasi pasca partum",
      "Gangguan koagulasi",
      "Efek agen farmakologis",
      "Tindakan pembedahan",
      "Trauma",
    ],
    slki: {
      code: "L.02017",
      name: "Tingkat perdarahan menurun",
      criteria: [
        "Membran mukosa lembab meningkat",
        "Hemoptisis menurun",
        "Hematemesis menurun",
        "Hematuria menurun",
        "Hemoglobin membaik",
        "Hematokrit membaik",
      ],
    },
    siki: [
      { code: "I.02067", name: "Pencegahan Perdarahan" },
      { code: "I.02040", name: "Manajemen Perdarahan" },
    ],
  },
  {
    code: "D.0013",
    name: "Risiko Perfusi Gastrointestinal Tidak Efektif",
    category: "Sirkulasi",
    definition: "Berisiko mengalami penurunan sirkulasi gastrointestinal",
    type: "Risiko",
    riskFactors: [
      "Varises gastroesofagus",
      "Aneurisma aorta abdomen",
      "Diabetes melitus",
      "Sirosis hepatis",
      "Perdarahan gastrointestinal akut",
      "Gagal jantung kongestif",
      "Ulkus duodenum",
      "Kolitis iskemik",
    ],
    slki: {
      code: "L.02010",
      name: "Perfusi gastrointestinal meningkat",
      criteria: ["Mual menurun", "Muntah menurun", "Bising usus membaik"],
    },
    siki: [
      { code: "I.02040", name: "Manajemen Perdarahan" },
      { code: "I.03094", name: "Konseling Nutrisi" },
    ],
  },
  {
    code: "D.0014",
    name: "Risiko Perfusi Miokard Tidak Efektif",
    category: "Sirkulasi",
    definition:
      "Berisiko mengalami penurunan sirkulasi arteri koroner yang dapat mengganggu metabolisme miokard",
    type: "Risiko",
    riskFactors: [
      "Hipertensi",
      "Hiperlipidemia",
      "Hiperglikemia",
      "Hipoksemia",
      "Hipoksia",
      "Kekurangan volume cairan",
      "Pembedahan jantung",
      "Spasme arteri koroner",
    ],
    slki: {
      code: "L.02011",
      name: "Perfusi miokard meningkat",
      criteria: [
        "Gambaran EKG iskemia/injuri/infark menurun",
        "Nyeri dada menurun",
        "Tekanan arteri rata-rata (MAP) membaik",
      ],
    },
    siki: [
      { code: "I.02035", name: "Manajemen Aritmia" },
      { code: "I.02051", name: "Manajemen Syok Kardiogenik" },
      { code: "I.02075", name: "Perawatan Jantung" },
    ],
  },
  {
    code: "D.0015",
    name: "Risiko Perfusi Perifer Tidak Efektif",
    category: "Sirkulasi",
    definition:
      "Berisiko mengalami penurunan sirkulasi darah pada level kapiler yang dapat mengganggu metabolisme tubuh",
    type: "Risiko",
    riskFactors: [
      "Hiperglikemia",
      "Gaya hidup kurang gerak",
      "Hipertensi",
      "Merokok",
      "Prosedur endovaskuler",
      "Trauma",
    ],
    slki: {
      code: "L.02011",
      name: "Perfusi perifer meningkat",
      criteria: [
        "Kekuatan nadi perifer meningkat",
        "Warna kulit pucat menurun",
        "Pengisian kapiler membaik",
        "Akral membaik",
      ],
    },
    siki: [
      { code: "I.02068", name: "Pencegahan Syok" },
      { code: "I.02079", name: "Perawatan Sirkulasi" },
    ],
  },
  {
    code: "D.0016",
    name: "Risiko Perfusi Renal Tidak Efektif",
    category: "Sirkulasi",
    definition: "Berisiko mengalami penurunan sirkulasi darah ke ginjal",
    type: "Risiko",
    riskFactors: [
      "Kekurangan volume cairan",
      "Embolisme vaskuler",
      "Hipertensi",
      "Disfungsi ginjal",
      "Hiperglikemia",
      "Sepsis",
      "Sindrom kompartemen abdomen",
      "Trauma",
    ],
    slki: {
      code: "L.02012",
      name: "Perfusi renal meningkat",
      criteria: [
        "Jumlah urin meningkat",
        "Tekanan arteri rata-rata (MAP) membaik",
        "Kadar urea nitrogen membaik",
        "Kadar kreatinin plasma membaik",
      ],
    },
    siki: [
      { code: "I.02068", name: "Pencegahan syok" },
      { code: "I.02040", name: "Manajemen perdarahan" },
    ],
  },
  {
    code: "D.0017",
    name: "Risiko Perfusi Serebral Tidak Efektif",
    category: "Sirkulasi",
    definition: "Berisiko mengalami penurunan sirkulasi darah ke otak",
    type: "Risiko",
    riskFactors: [
      "Aterosklerosis aorta",
      "Fibrilasi atrium",
      "Tumor otak",
      "Stenosis karotis",
      "Aneurisma serebri",
      "Cidera kepala",
      "Hipertensi",
      "Endokarditis infektif",
      "Infark miokard akut",
    ],
    slki: {
      code: "L.02014",
      name: "Perfusi serebral meningkat",
      criteria: [
        "Tingkat kesadaran meningkat",
        "Sakit kepala menurun",
        "Gelisah menurun",
        "Tekanan arteri rata-rata (MAP) membaik",
      ],
    },
    siki: [
      { code: "I.06194", name: "Manajemen Peningkatan Tekanan Intrakranial" },
      { code: "I.06198", name: "Pemantauan Tekanan Intrakranial" },
    ],
  },
];

export default diagnoses;
