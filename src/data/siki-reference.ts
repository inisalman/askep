// Referensi lengkap SIKI (Standar Intervensi Keperawatan Indonesia)
// Database semua intervensi dengan definisi dan tindakan

import type { Intervensi } from './diagnosis';

export const sikiReference: Record<string, Omit<Intervensi, 'kode' | 'nama'>> = {
  // === RESPIRASI (01) ===
  'I.01002': {
    definisi: 'Pemberian bantuan mekanis atau non-mekanis untuk mempertahankan ventilasi yang adekuat',
    tindakan: {
      observasi: [
        'Monitor frekuensi dan kedalaman napas',
        'Monitor volume tidal dan menit volume',
        'Monitor saturasi oksigen',
        'Monitor tanda-tanda kelelahan otot pernapasan',
        'Monitor GDA',
        'Monitor parameter ventilator jika terpasang'
      ],
      terapeutik: [
        'Siapkan alat bantu ventilasi (bag valve mask, ventilator)',
        'Berikan bantuan napas sesuai kebutuhan',
        'Pasang jalan napas artifisial jika diperlukan',
        'Atur parameter ventilator sesuai kondisi pasien',
        'Lakukan suctioning jika diperlukan',
        'Berikan oksigen tambahan',
        'Posisikan pasien untuk memaksimalkan ventilasi'
      ],
      edukasi: [
        'Jelaskan tujuan dan prosedur bantuan ventilasi',
        'Ajarkan komunikasi dengan alat bantu napas',
        'Jelaskan pentingnya kooperasi dengan prosedur'
      ],
      kolaborasi: [
        'Kolaborasi intubasi dengan dokter',
        'Kolaborasi pengaturan ventilator',
        'Kolaborasi pemeriksaan GDA berkala'
      ]
    }
  },
  'I.01006': {
    definisi: 'Membantu pasien melakukan batuk efektif untuk membersihkan sekret dari jalan napas',
    tindakan: {
      observasi: [
        'Monitor kemampuan batuk pasien',
        'Monitor karakteristik sputum (warna, bau, konsistensi, jumlah)',
        'Monitor tanda-tanda distress pernapasan',
        'Auskultasi bunyi napas sebelum dan setelah batuk'
      ],
      terapeutik: [
        'Anjurkan pasien minum air hangat untuk mengencerkan dahak',
        'Bantu pasien dalam posisi duduk atau semi Fowler',
        'Instruksikan pasien untuk tarik napas dalam, tahan 2-3 detik, lalu batuk kuat',
        'Lakukan perkusi dada jika diperlukan',
        'Lakukan vibrasi dada saat ekspirasi',
        'Bantu penghisapan sekret jika pasien tidak mampu batuk'
      ],
      edukasi: [
        'Jelaskan tujuan dan teknik batuk efektif',
        'Jelaskan pentingnya hidrasi adekuat',
        'Ajarkan teknik pernapasan diafragma',
        'Ajarkan cara mengeluarkan dahak ke tisu/wadah'
      ],
      kolaborasi: [
        'Kolaborasi pemberian mukolitik dengan dokter',
        'Kolaborasi fisioterapi dada jika diperlukan'
      ]
    }
  },
  'I.01011': {
    definisi: 'Menjamin patensi jalan napas dan pertukaran gas yang adekuat',
    tindakan: {
      observasi: [
        'Monitor kepatenan jalan napas',
        'Monitor tanda-tanda obstruksi jalan napas',
        'Auskultasi bunyi napas',
        'Monitor saturasi oksigen (SpO2)',
        'Monitor pola napas dan frekuensi napas',
        'Observasi adanya penggunaan otot bantu napas'
      ],
      terapeutik: [
        'Posisikan pasien semi Fowler atau high Fowler',
        'Lakukan penghisapan sekret (suctioning) jika diperlukan',
        'Berikan oksigen tambahan sesuai kebutuhan',
        'Pertahankan jalan napas paten (posisi chin lift/jaw thrust)',
        'Pasang mayo/guedel jika perlu',
        'Lakukan nebulizer jika terdapat bronkospasme',
        'Beri humidifikasi udara inspirasi'
      ],
      edukasi: [
        'Jelaskan teknik posisi yang aman untuk pernapasan',
        'Jelaskan tanda-tanda yang perlu segera dilaporkan',
        'Ajarkan teknik bernapas yang benar'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan gas darah arteri (GDA)',
        'Kolaborasi pemeriksaan foto thorax',
        'Kolaborasi pemberian bronkodilator',
        'Kolaborasi untuk intubasi jika diperlukan'
      ]
    }
  },
  'I.01014': {
    definisi: 'Pengumpulan dan analisis data pasien untuk memastikan patensi jalan napas dan pertukaran gas yang adekuat',
    tindakan: {
      observasi: [
        'Monitor frekuensi, irama, kedalaman, dan upaya bernapas',
        'Auskultasi bunyi napas (vesikuler, bronkial, ronkhi, wheezing)',
        'Monitor pola napas (takipnea, bradipnea, dispnea)',
        'Monitor penggunaan otot bantu napas',
        'Monitor saturasi oksigen (SpO2)',
        'Monitor warna kulit dan membran mukosa (sianosis)',
        'Monitor produksi dan karakteristik sputum',
        'Monitor tingkat kesadaran',
        'Monitor tanda-tanda hipoksia dan hiperkapnia'
      ],
      terapeutik: [
        'Catat hasil observasi secara akurat',
        'Beri posisi yang memudahkan pernapasan',
        'Berikan oksigen tambahan sesuai order',
        'Pertahankan patensi jalan napas'
      ],
      edukasi: [
        'Jelaskan hasil pemantauan kepada pasien/keluarga',
        'Ajarkan tanda-tanda gangguan pernapasan yang perlu dilaporkan'
      ],
      kolaborasi: [
        'Laporkan perubahan signifikan kepada dokter',
        'Kolaborasi pemeriksaan GDA',
        'Kolaborasi pemeriksaan penunjang (foto thorax, spirometri)'
      ]
    }
  },
  'I.01021': {
    definisi: 'Membantu pasien untuk beradaptasi dan toleran terhadap pengurangan bantuan ventilator mekanik',
    tindakan: {
      observasi: [
        'Monitor parameter ventilator (mode, TV, RR, PEEP, FiO2)',
        'Monitor parameter weaning (RSBI, VC, NIF)',
        'Monitor tanda-tanda intoleransi weaning',
        'Monitor GDA sebelum dan sesudah weaning',
        'Monitor tanda vital sebelum, selama, dan setelah weaning',
        'Monitor tingkat kesadaran dan status kognitif'
      ],
      terapeutik: [
        'Siapkan pasien secara fisik dan psikologis sebelum weaning',
        'Gunakan protokol weaning yang sesuai (T-piece, PSV, SIMV)',
        'Tingkatkan durasi weaning secara bertahap',
        'Berikan dukungan emosional selama proses weaning',
        'Posisikan pasien semi Fowler atau Fowler tinggi',
        'Pastikan nutrisi dan hidrasi adekuat',
        'Kurangi faktor stres lingkungan'
      ],
      edukasi: [
        'Jelaskan proses weaning kepada pasien dan keluarga',
        'Ajarkan teknik relaksasi dan pernapasan',
        'Jelaskan tanda-tanda yang perlu dilaporkan saat weaning'
      ],
      kolaborasi: [
        'Kolaborasi dengan tim medis untuk jadwal weaning',
        'Kolaborasi pemeriksaan GDA berkala',
        'Kolaborasi nutrisionis untuk dukungan nutrisi',
        'Kolaborasi fisioterapi untuk latihan otot pernapasan'
      ]
    }
  },
  'I.01026': {
    definisi: 'Pemberian oksigen tambahan untuk mencegah atau mengatasi hipoksia',
    tindakan: {
      observasi: [
        'Monitor saturasi oksigen (SpO2) sebelum dan selama terapi',
        'Monitor tanda-tanda hipoksia',
        'Monitor efektivitas terapi oksigen',
        'Monitor tanda-tanda toksisitas oksigen',
        'Monitor kondisi kulit dan membran mukosa'
      ],
      terapeutik: [
        'Pasang kanula nasal, masker oksigen, atau alat bantu oksigen lainnya sesuai kebutuhan',
        'Atur debit oksigen sesuai order dan kondisi pasien',
        'Pastikan aliran oksigen lancar dan tidak ada kebocoran',
        'Humidifikasi oksigen untuk mencegah pengeringan mukosa',
        'Posisikan pasien semi Fowler atau Fowler',
        'Monitor dan ganti alat bantu oksigen secara berkala'
      ],
      edukasi: [
        'Jelaskan tujuan terapi oksigen kepada pasien dan keluarga',
        'Jelaskan cara penggunaan alat bantu oksigen',
        'Jelaskan pentingnya tidak merokok saat menggunakan oksigen',
        'Ajarkan tanda-tanda yang perlu dilaporkan'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan GDA',
        'Kolaborasi penyesuaian dosis oksigen dengan dokter'
      ]
    }
  },
  'I.01019': {
    definisi: 'Memindahkan atau mempertahankan posisi tubuh untuk memaksimalkan ventilasi dan pertukaran gas',
    tindakan: {
      observasi: [
        'Monitor toleransi pasien terhadap posisi',
        'Monitor efek posisi terhadap pernapasan',
        'Monitor tanda-tanda distress pernapasan saat perubahan posisi'
      ],
      terapeutik: [
        'Posisikan pasien semi Fowler atau Fowler tinggi untuk memaksimalkan ekspansi paru',
        'Bantu perubahan posisi setiap 2 jam',
        'Gunakan bantal untuk mendukung posisi yang nyaman',
        'Untuk pasien dengan hemiparese, posisikan sisi yang baik di bawah',
        'Hindari posisi supine yang dapat memperberat pernapasan'
      ],
      edukasi: [
        'Jelaskan pentingnya posisi yang tepat untuk pernapasan',
        'Ajarkan teknik perubahan posisi yang aman'
      ],
      kolaborasi: [
        'Kolaborasi fisioterapi untuk posisi optimal'
      ]
    }
  },
  'I.01018': {
    definisi: 'Pencegahan atau pengurangan risiko aspirasi pada pasien dengan gangguan menelan atau penurunan kesadaran',
    tindakan: {
      observasi: [
        'Monitor kemampuan menelan pasien',
        'Monitor tingkat kesadaran',
        'Monitor tanda-tanda aspirasi (batuk saat makan, desaturasi)',
        'Monitor residu lambung pada pasien dengan NGT',
        'Monitor posisi pasien saat dan setelah makan'
      ],
      terapeutik: [
        'Posisikan pasien Fowler 90 derajat saat makan dan 30 menit setelah makan',
        'Berikan makanan dengan konsistensi yang sesuai',
        'Berikan makan dalam porsi kecil dan sering',
        'Lakukan aspirasi lambung sebelum pemberian makanan melalui NGT',
        'Pastikan cuff ETT terisi udara adekuat pada pasien terintubasi',
        'Hindari pemberian makan oral pada pasien dengan tingkat kesadaran menurun',
        'Lakukan oral care setelah makan'
      ],
      edukasi: [
        'Jelaskan teknik makan yang aman',
        'Jelaskan konsistensi makanan yang sesuai',
        'Jelaskan tanda-tanda aspirasi yang perlu dilaporkan',
        'Ajarkan teknik menelan yang benar'
      ],
      kolaborasi: [
        'Kolaborasi dengan SLP untuk evaluasi menelan',
        'Kolaborasi pemberian makanan melalui NGT atau parenteral'
      ]
    }
  },
  // === SIRKULASI ===
  'I.02038': {
    definisi: 'Pemberian kejut listrik terkontrol untuk mengakhiri aritmia jantung yang mengancam jiwa',
    tindakan: {
      observasi: [
        'Monitor ritme jantung (ECG)',
        'Monitor tanda-tanda vital',
        'Monitor tingkat kesadaran',
        'Monitor saturasi oksigen'
      ],
      terapeutik: [
        'Siapkan alat defibrilator',
        'Kenakan gel pada paddles atau pad',
        'Terapkan energi sesuai protokol',
        'Bersihkan dada dari obat atau cairan',
        'Pastikan tidak ada yang menyentuh pasien saat kejut',
        'Lakukan kejut sesuai ritme (VF/VT = shockable)',
        'Lanjutkan RJP 2 menit setelah kejut',
        'Dokumentasikan setiap kejut dan hasilnya'
      ],
      edukasi: [
        'Jelaskan prosedur kepada tim resusitasi',
        'Koordinasikan dengan tim'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat resusitasi',
        'Kolaborasi intubasi'
      ]
    }
  },
  'I.03139': {
    definisi: 'Pemberian cairan intravena untuk memulihkan volume sirkulasi yang adekuat',
    tindakan: {
      observasi: [
        'Monitor tekanan darah',
        'Monitor frekuensi nadi',
        'Monitor tekanan vena sentral (CVP) jika terpasang',
        'Monitor urine output',
        'Monitor tanda-tanda kelebihan cairan'
      ],
      terapeutik: [
        'Pasang akses intravena 2 jalur besar',
        'Berikan cairan kristaloid atau koloid sesuai protokol',
        'Infus cairan dengan kecepatan tinggi jika syok',
        'Monitor respons terhadap cairan',
        'Siapkan produk darah jika diperlukan'
      ],
      edukasi: [
        'Jelaskan prosedur kepada keluarga'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan laboratorium',
        'Kolaborasi transfusi darah'
      ]
    }
  },
  'I.02083': {
    definisi: 'Pelaksanaan kompresi dada dan ventilasi buatan untuk mempertahankan sirkulasi dan oksigenasi selama henti jantung',
    tindakan: {
      observasi: [
        'Monitor kepatenan jalan napas',
        'Monitor kualitas kompresi dada',
        'Monitor ritme jantung',
        'Monitor saturasi oksigen',
        'Monitor karbondioksida akhir ekspirasi (ETCO2)'
      ],
      terapeutik: [
        'Panggil bantuan dan aktifkan kode biru',
        'Mulai kompresi dada 30:2 (perbandingan kompresi : ventilasi)',
        'Kompresi dada minimal 100-120x/menit dengan kedalaman 5-6 cm',
        'Izinkan dada recoil penuh antara kompresi',
        'Ganti orang kompresi setiap 2 menit',
        'Pasang AED/defibrilator secepat mungkin',
        'Bersihkan jalan napas dan berikan ventilasi',
        'Intubasi jika memungkinkan',
        'Lanjutkan RJP sampai ROSC atau dihentikan'
      ],
      edukasi: [
        'Koordinasikan tim resusitasi'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat resusitasi (epinefrin, amiodaron)',
        'Kolaborasi untuk tindakan lanjutan (ECMO, kateterisasi)'
      ]
    }
  },
  'I.02075': {
    definisi: 'Pemantauan dan pengelolaan pasien dengan gangguan fungsi jantung untuk memaksimalkan curah jantung',
    tindakan: {
      observasi: [
        'Monitor tekanan darah, nadi, dan frekuensi napas',
        'Monitor irama jantung (ECG)',
        'Monitor saturasi oksigen',
        'Monitor intake dan output cairan',
        'Monitor berat badan harian',
        'Monitor tanda-tanda gagal jantung (edema, dispnea, ortopnea)',
        'Auskultasi bunyi jantung (S3, S4, murmur)'
      ],
      terapeutik: [
        'Posisikan pasien semi Fowler atau Fowler',
        'Batasi aktivitas sesuai kondisi',
        'Batasi asupan natrium dan cairan',
        'Berikan oksigen tambahan sesuai kebutuhan',
        'Pantau dan pertahankan akses IV',
        'Catat asupan dan haluaran cairan',
        'Timbang berat badan setiap hari'
      ],
      edukasi: [
        'Jelaskan tentang penyakit jantung dan pengelolaannya',
        'Jelaskan pentingnya pembatasan cairan dan natrium',
        'Ajarkan cara mengenali tanda-tanda perburukan',
        'Jelaskan pentingnya minum obat teratur',
        'Ajarkan teknik pengukuran tekanan darah di rumah'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat jantung (diuretik, ACE inhibitor, beta blocker)',
        'Kolaborasi pemeriksaan laboratorium (BNP, troponin, elektrolit)',
        'Kolaborasi pemeriksaan ekokardiografi'
      ]
    }
  },
  'I.02076': {
    definisi: 'Penanganan darurat pasien dengan gangguan fungsi jantung akut',
    tindakan: {
      observasi: [
        'Monitor kontinu tekanan darah, nadi, dan ECG',
        'Monitor saturasi oksigen kontinu',
        'Monitor tanda-tanda gagal jantung akut',
        'Monitor kesadaran',
        'Monitor urine output'
      ],
      terapeutik: [
        'Beri posisi Fowler tinggi',
        'Pasang monitor kardiak kontinu',
        'Pasang akses IV',
        'Berikan oksigen dengan kanula nasal atau masker',
        'Siapkan alat resusitasi jantung',
        'Pasang kateter urine untuk monitor output',
        'Kurangi aktivitas pasien'
      ],
      edukasi: [
        'Jelaskan kondisi kepada pasien dan keluarga',
        'Jelaskan tujuan pemantauan ketat'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat inotropik atau vasopresor',
        'Kolaborasi intubasi jika diperlukan',
        'Kolaborasi tindakan invasif (balon pump, ventilasi mekanik)'
      ]
    }
  },
  'I.02079': {
    definisi: 'Pemantauan dan pengelolaan sirkulasi perifer untuk memastikan perfusi yang adekuat',
    tindakan: {
      observasi: [
        'Monitor nadi perifer (radial, pedis dorsalis, posterior tibialis)',
        'Monitor pengisian kapiler (CRT)',
        'Monitor suhu dan warna ekstremitas',
        'Monitor tanda-tanda gangguan perfusi (nyeri, parestesia, paralisis, pallor, pulselessness)',
        'Monitor edema perifer'
      ],
      terapeutik: [
        'Posisikan ekstremitas lebih rendah dari jantung untuk arteri, lebih tinggi untuk vena',
        'Hindari tekanan pada ekstremitas',
        'Lakukan latihan gerak pasif/aktif',
        'Pertahankan suhu ruangan hangat',
        'Berikan selimut hangat',
        'Hindari pakaian ketat',
        'Lakukan pijatan ringan pada area yang tidak terkena'
      ],
      edukasi: [
        'Jelaskan pentingnya aktivitas dan latihan kaki',
        'Jelaskan cara memeriksa nadi perifer',
        'Jelaskan tanda-tanda gangguan sirkulasi',
        'Jelaskan cara menjaga kehangatan ekstremitas'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan Doppler',
        'Kolaborasi pemberian vasodilator',
        'Kolaborasi pemeriksaan ABI (Ankle Brachial Index)'
      ]
    }
  },
  'I.06195': {
    definisi: 'Pencegahan atau penanganan gangguan sensorik pada ekstremitas',
    tindakan: {
      observasi: [
        'Monitor sensasi perifer (raba, nyeri, suhu, getar)',
        'Monitor reflex tendon',
        'Monitor kekuatan otot ekstremitas',
        'Monitor tanda-tanda neuropati'
      ],
      terapeutik: [
        'Lakukan pemeriksaan sensorik berkala',
        'Lindungi ekstremitas dari cedera',
        'Gunakan alas kaki yang tepat',
        'Periksa kaki setiap hari untuk luka atau kemerahan',
        'Jaga kebersihan dan kelembaban kulit',
        'Hindari paparan suhu ekstrem'
      ],
      edukasi: [
        'Jelaskan cara perawatan kaki harian',
        'Ajarkan cara memeriksa kaki',
        'Jelaskan pentingnya alas kaki yang tepat',
        'Jelaskan tanda-tanda neuropati'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan neurologi',
        'Kolaborasi podiatry jika diperlukan'
      ]
    }
  },
  'I.02068': {
    definisi: 'Pencegahan dan deteksi dini tanda-tanda syok untuk mencegah gangguan sirkulasi',
    tindakan: {
      observasi: [
        'Monitor tanda-tanda vital secara berkala',
        'Monitor tingkat kesadaran',
        'Monitor urine output',
        'Monitor saturasi oksigen',
        'Monitor tanda-tanda perfusi perifer'
      ],
      terapeutik: [
        'Identifikasi dan atasi faktor risiko syok',
        'Pertahankan akses IV patent',
        'Siapkan cairan resusitasi',
        'Posisikan pasien trendelenburg atau supine',
        'Berikan oksigen tambahan',
        'Koreksi gangguan elektrolit dan asam-basa'
      ],
      edukasi: [
        'Jelaskan tanda-tanda syok kepada pasien/keluarga'
      ],
      kolaborasi: [
        'Kolaborasi pemeriksaan laboratorium',
        'Kolaborasi pemberian cairan dan obat'
      ]
    }
  },
  'I.02067': {
    definisi: 'Pencegahan dan penanganan perdarahan untuk meminimalkan komplikasi',
    tindakan: {
      observasi: [
        'Monitor tanda-tanda perdarahan',
        'Monitor tanda vital',
        'Monitor hasil laboratorium (Hb, Ht, trombosit, koagulasi)',
        'Monitor intake dan output',
        'Monitor tanda-tanda syok hipovolemik'
      ],
      terapeutik: [
        'Lakukan tekanan langsung pada sumber perdarahan',
        'Tinggikan ekstremitas jika perlu',
        'Pertahankan akses IV',
        'Berikan cairan intravena sesuai order',
        'Siapkan produk darah jika diperlukan',
        'Lakukan perawatan luka dengan teknik aseptik'
      ],
      edukasi: [
        'Jelaskan tanda-tanda perdarahan yang perlu dilaporkan',
        'Ajarkan cara mencegah perdarahan',
        'Jelaskan pentingnya istirahat'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat hemostatik',
        'Kolaborasi transfusi darah',
        'Kolaborasi tindakan bedah jika diperlukan'
      ]
    }
  },
  'I.02040': {
    definisi: 'Penanganan perdarahan aktif untuk mengontrol kehilangan darah',
    tindakan: {
      observasi: [
        'Monitor jumlah dan karakteristik perdarahan',
        'Monitor tanda vital',
        'Monitor tanda-tanda syok',
        'Monitor hasil laboratorium'
      ],
      terapeutik: [
        'Lakukan tekanan langsung pada sumber perdarahan',
        'Gunakan balutan tekan',
        'Tinggikan bagian yang berdarah',
        'Berikan kompres dingin jika perlu',
        'Pertahankan akses IV',
        'Berikan cairan atau darah sesuai order'
      ],
      edukasi: [
        'Jelaskan prosedur yang akan dilakukan',
        'Berikan dukungan emosional'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat hemostatik',
        'Kolaborasi transfusi',
        'Kolaborasi tindakan bedah'
      ]
    }
  },
  'I.02035': {
    definisi: 'Penanganan aritmia jantung untuk mempertahankan curah jantung yang adekuat',
    tindakan: {
      observasi: [
        'Monitor ritme dan frekuensi jantung (ECG)',
        'Monitor tekanan darah',
        'Monitor tanda-tanda penurunan curah jantung',
        'Monitor elektrolit',
        'Monitor respons terhadap obat antiaritmia'
      ],
      terapeutik: [
        'Berikan oksigen sesuai kebutuhan',
        'Pertahankan akses IV',
        'Siapkan alat defibrilasi/kardioversi',
        'Berikan obat antiaritmia sesuai order',
        'Koreksi gangguan elektrolit',
        'Kurangi faktor pencetus (stres, kafein)'
      ],
      edukasi: [
        'Jelaskan jenis aritmia dan pengobatannya',
        'Ajarkan cara mengukur nadi',
        'Jelaskan tanda-tanda yang perlu dilaporkan'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat antiaritmia',
        'Kolaborasi elektrolit',
        'Kolaborasi prosedur kardioversi/ablasi'
      ]
    }
  },
  'I.02051': {
    definisi: 'Penanganan syok kardiogenik untuk mempertahankan perfusi jaringan',
    tindakan: {
      observasi: [
        'Monitor tekanan darah invasif/non-invasif',
        'Monitor ECG kontinu',
        'Monitor urine output',
        'Monitor tanda-tanda perfusi perifer',
        'Monitor GDA',
        'Monitor CVP jika terpasang'
      ],
      terapeutik: [
        'Posisikan pasien supine dengan kaki elevasi',
        'Berikan oksigen atau ventilasi mekanik',
        'Pertahankan akses IV',
        'Berikan vasopresor/inotropik sesuai order',
        'Siapkan alat bantu sirkulasi mekanik (IABP, ECMO)',
        'Batasi aktivitas pasien'
      ],
      edukasi: [
        'Jelaskan kondisi kritis kepada keluarga',
        'Jelaskan tujuan pemantauan ketat'
      ],
      kolaborasi: [
        'Kolaborasi pemberian obat inotropik/vasopresor',
        'Kolaborasi pemasangan IABP/ECMO',
        'Kolaborasi revascularisasi'
      ]
    }
  },
  'I.02066': {
    definisi: 'Pencegahan pembentukan atau perpindahan emboli',
    tindakan: {
      observasi: [
        'Monitor tanda-tanda emboli (napas tiba-tiba, nyeri dada)',
        'Monitor ekstremitas untuk DVT',
        'Monitor status neurologis',
        'Monitor hasil koagulasi'
      ],
      terapeutik: [
        'Gunakan stocking kompresi elastis',
        'Lakukan latihan kaki pasif/aktif',
        'Hindari pijatan pada ekstremitas dengan DVT',
        'Posisikan ekstremitas sesuai kebutuhan',
        'Dorong mobilisasi dini'
      ],
      edukasi: [
        'Jelaskan faktor risiko emboli',
        'Ajarkan tanda-tanda emboli',
        'Jelaskan pentingnya mobilisasi'
      ],
      kolaborasi: [
        'Kolaborasi pemberian antikoagulan',
        'Kolaborasi pemeriksaan Doppler',
        'Kolaborasi pemasangan filter vena cava'
      ]
    }
  }
};
