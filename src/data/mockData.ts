import { PublicService, ApplicationTicket, DesignTokenColor, TypographyToken, AgencyItem, ServiceLocation } from '../types';

export const SUKOHARJO_SUBDISTRICTS = [
  'Baki',
  'Bendosari',
  'Bulu',
  'Gatak',
  'Grogol',
  'Kartasura',
  'Mojolaban',
  'Nguter',
  'Polokarto',
  'Sukoharjo',
  'Tawangsari',
  'Weru',
];

export const PUBLIC_SERVICES_DATA: PublicService[] = [
  {
    id: 'ktp-el',
    code: 'DUKCAPIL-01',
    title: 'Penerbitan KTP Elektronik Baru / Penggantian Rusak',
    category: 'kependudukan',
    categoryLabel: 'Administrasi Kependudukan',
    department: 'Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil)',
    description: 'Layanan pencetakan KTP-el bagi warga usia 17 tahun, penggantian karena rusak, hilang, atau perubahan elemen data kependudukan.',
    sla: '1 Hari Kerja (24 Jam)',
    cost: 'Rp 0 (Gratis)',
    requirements: [
      'Foto Kartu Keluarga (KK) terbaru',
      'Surat Keterangan Kehilangan dari Kepolisian (jika hilang)',
      'Fisik KTP-el lama (jika rusak atau ganti data)',
      'Foto diri resmi latar belakang merah/biru'
    ],
    steps: [
      'Pengisian formulir permohonan digital & upload berkas',
      'Verifikasi keabsahan data oleh operator Disdukcapil Sukoharjo',
      'Pencetakan blangko KTP-el resmi',
      'Pengambilan fisik di Mal Pelayanan Publik (MPP) atau kantor kecamatan terdekat'
    ],
    isPopular: true,
    onlineSupport: true,
  },
  {
    id: 'kia-anak',
    code: 'DUKCAPIL-02',
    title: 'Kartu Identitas Anak (KIA)',
    category: 'kependudukan',
    categoryLabel: 'Administrasi Kependudukan',
    department: 'Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil)',
    description: 'Penerbitan identitas resmi anak usia 0 - 17 tahun kurang satu hari untuk pemenuhan hak sipil anak di Kabupaten Sukoharjo.',
    sla: '1 Hari Kerja',
    cost: 'Rp 0 (Gratis)',
    requirements: [
      'Fotokopi Kutipan Akta Kelahiran anak',
      'Kartu Keluarga orang tua/wali',
      'KTP-el kedua orang tua',
      'Pas foto anak ukuran 2x3 (untuk anak usia di atas 5 tahun)'
    ],
    steps: [
      'Pendaftaran daring di portal warga Sukoharjo',
      'Validasi Nomor Induk Kependudukan (NIK) anak',
      'Cetak kartu KIA dengan barcode pengaman',
      'Distribusi via paket kurir daerah atau loket kecamatan'
    ],
    isPopular: false,
    onlineSupport: true,
  },
  {
    id: 'rsud-antrean',
    code: 'KESEHATAN-01',
    title: 'Pendaftaran Poliklinik & Antrean Online RSUD Ir. Soekarno',
    category: 'kesehatan',
    categoryLabel: 'Kesehatan & Rujukan',
    department: 'RSUD Ir. Soekarno Kabupaten Sukoharjo',
    description: 'Reservasi nomor antrean dokter spesialis dan rawat jalan terintegrasi BPJS Kesehatan / Mandiri tanpa perlu mengantre pagi di loket.',
    sla: 'Instan (Kode Booking Digital Langsung Terbit)',
    cost: 'Rp 0 (Sesuai Kepesertaan BPJS / Tarif Perda)',
    requirements: [
      'Nomor Rekam Medis (RM) Sukoharjo / NIK KTP',
      'Nomor Kartu BPJS Kesehatan (jika pasien BPJS)',
      'Surat Rujukan dari Puskesmas / Faskes Tingkat I (faskes perujuk)'
    ],
    steps: [
      'Pilih poliklinik tujuan dan jadwal dokter yang bertugas',
      'Masukkan nomor rujukan FKTP aktif',
      'Sistem mengonfirmasi slot antrean otomatis',
      'Tunjukkan QR Code reservasi pada mesin check-in mandiri di RSUD'
    ],
    isPopular: true,
    onlineSupport: true,
  },
  {
    id: 'puskesmas-layanan',
    code: 'KESEHATAN-02',
    title: 'Pemeriksaan Kesehatan & Skrining PTM Puskesmas',
    category: 'kesehatan',
    categoryLabel: 'Kesehatan & Rujukan',
    department: 'Dinas Kesehatan Kabupaten Sukoharjo',
    description: 'Layanan pemeriksaan kesehatan berkala, imunisasi balita, dan skrining Penyakit Tidak Menular di 12 Puskesmas se-Sukoharjo.',
    sla: '30 Menit di Lokasi',
    cost: 'Rp 0 (Gratis faskes tingkat I)',
    requirements: [
      'KTP Sukoharjo / KK Sukoharjo',
      'Kartu Indonesia Sehat (KIS / BPJS Kesehatan)',
      'Buku KIA (bagi ibu hamil dan balita)'
    ],
    steps: [
      'Pilih Puskesmas kecamatan domisili',
      'Pilih jenis poli (Umum, Gigi, KIA, Lansia)',
      'Dapatkan perkiraan waktu pelayanan'
    ],
    isPopular: false,
    onlineSupport: true,
  },
  {
    id: 'pbb-cek-bayar',
    code: 'BAPENDA-01',
    title: 'Cek Tagihan & Pembayaran e-PBB P2 Sukoharjo',
    category: 'pajak',
    categoryLabel: 'Pajak & Pendapatan Daerah',
    department: 'Badan Pendapatan Daerah (Bapenda Sukoharjo)',
    description: 'Pengecekan tagihan Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBB-P2) secara transparan disertai kanal QRIS & VA Bank Jateng.',
    sla: 'Real-time (Status Lunas Terupdate Otomatis)',
    cost: 'Bebas Biaya Admin (via QRIS / Bank Jateng)',
    requirements: [
      'Nomor Objek Pajak (NOP) 18 Digit tertera pada SPPT PBB',
      'Tahun Pajak yang ingin dicek / dilunasi'
    ],
    steps: [
      'Ketik 18 digit NOP tanah/bangunan Anda',
      'Cek rincian ketetapan pokok dan denda (jika ada)',
      'Lakukan pembayaran via QRIS, dompet digital, atau teller bank',
      'Unduh bukti lunas sah Surat Tanda Terima Setoran (e-STTS)'
    ],
    isPopular: true,
    onlineSupport: true,
  },
  {
    id: 'izin-umkm-oss',
    code: 'DPMPTSP-01',
    title: 'Penerbitan Nomor Induk Berusaha (NIB) Usaha Mikro & Kecil',
    category: 'perizinan',
    categoryLabel: 'Perizinan & Investasi',
    department: 'Dinas Penanaman Modal & PTSP (DPMPTSP Sukoharjo)',
    description: 'Pendampingan dan penerbitan izin berusaha terintegrasi OSS RBA untuk pelaku UMKM pengrajin jamu, batik, mebel rotan, dan olahan pangan.',
    sla: 'Maksimal 2 Hari Kerja',
    cost: 'Rp 0 (Gratis Tanpa Pungli)',
    requirements: [
      'KTP Pemilik Usaha / NIK terdaftar Sukoharjo',
      'NPWP Pribadi (jika sudah memiliki)',
      'Alamat tempat usaha dan foto kegiatan produksi',
      'Rincian Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)'
    ],
    steps: [
      'Konsultasi daring desk pelayanan DPMPTSP',
      'Verifikasi kesesuaian tata ruang (KKPR Sukoharjo)',
      'Penerbitan Sertifikat NIB resmi bertanda tangan elektronik (TTE)'
    ],
    isPopular: true,
    onlineSupport: true,
  },
  {
    id: 'bansos-cek-dtks',
    code: 'DINSOS-01',
    title: 'Cek Kepesertaan Bansos & Usulan DTKS Sukoharjo',
    category: 'sosial',
    categoryLabel: 'Bantuan Sosial & Kesejahteraan',
    department: 'Dinas Sosial Kabupaten Sukoharjo',
    description: 'Pengecekan keterdaftaran keluarga dalam Data Terpadu Kesejahteraan Sosial (DTKS) serta pengajuan mandiri verifikasi lapangan.',
    sla: '3 Hari Kerja Proses Verifikasi Kelurahan',
    cost: 'Rp 0 (Gratis)',
    requirements: [
      'Nomor Kartu Keluarga (KK)',
      'Nomor Induk Kependudukan (NIK) Kepala Keluarga',
      'Foto kondisi rumah tampak depan, ruang tamu, dan dapur (bagi usulan baru)'
    ],
    steps: [
      'Masukkan NIK dan No KK pada sistem pengecekan',
      'Lihat riwayat bantuan sosial (PKH, BPNT, KSP)',
      'Ajukan aduan sanggahan jika terjadi ketidaksesuaian data di lapangan'
    ],
    isPopular: true,
    onlineSupport: true,
  },
  {
    id: 'kartu-kuning-ak1',
    code: 'DISNAKER-01',
    title: 'Pembuatan Kartu Antar Kerja (AK-1 / Kartu Kuning)',
    category: 'ketenagakerjaan',
    categoryLabel: 'Ketenagakerjaan & Karir',
    department: 'Dinas Perindustrian dan Tenaga Kerja (Disperinaker Sukoharjo)',
    description: 'Penerbitan kartu pencari kerja bagi lulusan baru dan warga Sukoharjo yang membutuhkan syarat lamaran kerja industri lokal dan nasional.',
    sla: '30 Menit (E-Dokumen Langsung Terbit)',
    cost: 'Rp 0 (Gratis)',
    requirements: [
      'KTP Kabupaten Sukoharjo',
      'Ijazah pendidikan terakhir dan transkrip nilai',
      'Pas foto formal ukuran 3x4 (file digital)',
      'Sertifikat keahlian / pelatihan (opsional)'
    ],
    steps: [
      'Isi riwayat pendidikan dan keterampilan kerja',
      'Verifikasi instan oleh operator bidang penempatan tenaga kerja',
      'Unduh langsung dokumen AK-1 ber-barcode resmi'
    ],
    isPopular: false,
    onlineSupport: true,
  },
  {
    id: 'jamu-sertifikasi-umkm',
    code: 'DINKOP-01',
    title: 'Sertifikasi Halal & P-IRT Sentra Jamu Sukoharjo Makmur',
    category: 'umkm_pertanian',
    categoryLabel: 'UMKM & Potensi Daerah',
    department: 'Dinas Koperasi, UMKM & Perdagangan Sukoharjo',
    description: 'Fasilitasi sertifikasi P-IRT dan sertifikasi halal gratis (Sehati) bagi pengrajin jamu tradisional Nguter dan UMKM kuliner khas Sukoharjo.',
    sla: '7 Hari Kerja',
    cost: 'Rp 0 (Difasilitasi Pemkab)',
    requirements: [
      'NIB UMKM aktif domisili Sukoharjo',
      'Daftar bahan baku herbal / rempah alami',
      'Denah alur proses pengolahan bersih'
    ],
    steps: [
      'Pendaftaran kelompok pengrajin / perorangan',
      'Bimbingan teknis uji higiene sanitasi pangan bersama Dinkes',
      'Penerbitan rekomendasi sertifikat resmi'
    ],
    isPopular: true,
    onlineSupport: true,
  }
];

export const INITIAL_APPLICATION_TICKETS: ApplicationTicket[] = [
  {
    ticketNumber: 'SKH-2026-8941',
    serviceId: 'ktp-el',
    serviceName: 'Penerbitan KTP Elektronik Baru / Penggantian Rusak',
    applicantName: 'Bagus Priyambodo',
    nik: '3311081504990002',
    phone: '081234567890',
    subdistrict: 'Grogol',
    submittedDate: '12 Oktober 2026, 09:30 WIB',
    estimatedCompletionDate: '13 Oktober 2026, 15:00 WIB',
    status: 'diproses',
    statusLabel: 'Sedang Dicetak di MPP Sukoharjo',
    notes: 'Berkas KK telah terverifikasi valid. Blangko KTP sedang dalam antrean cetak mesin Disdukcapil.',
    history: [
      { stage: 'Permohonan Diterima Sistem Portal Warga', date: '12 Okt 2026, 09:30', officer: 'Sistem Terpadu IDDS', completed: true },
      { stage: 'Verifikasi Berkas Kependudukan', date: '12 Okt 2026, 11:15', officer: 'Anisa Wulandari, S.STP (Disdukcapil)', completed: true },
      { stage: 'Pencetakan Fisik KTP Elektronik', date: '13 Okt 2026, 08:30', officer: 'Unit Cetak MPP Sukoharjo', completed: true },
      { stage: 'Siap Diambil di Loket 4 Kecamatan Grogol', date: 'Estimasi Hari Ini', officer: 'Petugas Loket Pelayanan', completed: false }
    ]
  },
  {
    ticketNumber: 'SKH-2026-7210',
    serviceId: 'pbb-cek-bayar',
    serviceName: 'Pengajuan Keringanan Pajak PBB-P2 Veteran & Pensiunan',
    applicantName: 'Siti Rahmawati',
    nik: '3311054201650001',
    phone: '085799881122',
    subdistrict: 'Sukoharjo',
    submittedDate: '10 Oktober 2026, 14:10 WIB',
    estimatedCompletionDate: '12 Oktober 2026, 16:00 WIB',
    status: 'selesai',
    statusLabel: 'Permohonan Telah Disetujui (Selesai)',
    notes: 'Keringanan 50% PBB-P2 tahun 2026 telah disetujui Kepala Bapenda. SPPT baru telah diterbitkan.',
    history: [
      { stage: 'Pengajuan Form Permohonan', date: '10 Okt 2026, 14:10', officer: 'Sistem Terpadu IDDS', completed: true },
      { stage: 'Verifikasi Dokumen Pensiun', date: '11 Okt 2026, 10:00', officer: 'Tim Verifikator Bapenda', completed: true },
      { stage: 'Persetujuan Penetapan SK Keringanan', date: '12 Okt 2026, 09:45', officer: 'Kabid Pajak Daerah', completed: true },
      { stage: 'Dokumen SK Elektronik Terbit', date: '12 Okt 2026, 13:20', officer: 'Sistem Otomasi SPBE', completed: true }
    ]
  }
];

export interface IDDSBrandSpec {
  id: 'inaku' | 'inapas' | 'inagov';
  name: string;
  role: string;
  primaryColor: string;
  description: string;
  badge: string;
}

export const IDDS_OFFICIAL_BRANDS: IDDSBrandSpec[] = [
  {
    id: 'inaku',
    name: 'INA Ku (Layanan Warga)',
    role: 'Portal Layanan Publik untuk Masyarakat',
    primaryColor: '#06264d',
    description: 'Tema utama portal warga dengan warna Biru Prusia Tua (--ina-primary-primary: #06264d) yang menenangkan, stabil, dan inklusif.',
    badge: 'Portal Warga Sukoharjo',
  },
  {
    id: 'inapas',
    name: 'INA Pas (Identitas & Paspor)',
    role: 'Sistem Autentikasi Single Sign-On (SSO)',
    primaryColor: '#cc1515',
    description: 'Tema identitas nasional dengan Merah Indonesia (--ina-primary-primary: #cc1515) untuk Single Sign-On, IKD, dan pengamanan hak sipil.',
    badge: 'Otoritas Identitas Nasional',
  },
  {
    id: 'inagov',
    name: 'INA Gov (Administrasi ASN)',
    role: 'Portal Aparatur Sipil Negara & Birokrasi',
    primaryColor: '#196bcd',
    description: 'Tema pemerintahan dinas dengan Biru Birokrasi Modern (--ina-primary-primary: #196bcd) untuk kolaborasi antar instansi pemerintah.',
    badge: 'Portal Internal ASN',
  },
];

export const INA_DESIGN_TOKENS_COLORS: DesignTokenColor[] = [
  {
    name: 'INA Primary (Brand)',
    token: '--ina-primary-primary',
    hex: '#06264d',
    usage: 'Warna identitas primer per tema (inaku: #06264d, inapas: #cc1515, inagov: #196bcd)',
    category: 'brand',
    contrastOnWhite: '15.6 : 1',
    wcagStatus: 'AAA',
  },
  {
    name: 'INA Red Heritage',
    token: '--ina-red-600',
    hex: '#d50b0b',
    usage: 'Identitas aksen nasional & tombol primer INA Pas',
    category: 'brand',
    contrastOnWhite: '5.4 : 1',
    wcagStatus: 'AA',
  },
  {
    name: 'INA Blue Royal',
    token: '--ina-blue-500',
    hex: '#0968f6',
    usage: 'Aksen tautan interaktif, banner informasi panduan, dan fokus ring',
    category: 'brand',
    contrastOnWhite: '4.8 : 1',
    wcagStatus: 'AA',
  },
  {
    name: 'Sentiment Positive (Success)',
    token: '--ina-sentiment-positive-500',
    hex: '#3cc14e',
    usage: 'Status selesai, berkas terverifikasi, pembayaran lunas (--ina-green-500)',
    category: 'sentiment',
    contrastOnWhite: '4.6 : 1 (UI)',
    wcagStatus: 'Pass UI',
  },
  {
    name: 'Sentiment Warning',
    token: '--ina-sentiment-warning-500',
    hex: '#eebb04',
    usage: 'Status menunggu tindakan warga, verifikasi berjalan (--ina-yellow-500)',
    category: 'sentiment',
    contrastOnWhite: '3.2 : 1 (UI)',
    wcagStatus: 'Pass UI',
  },
  {
    name: 'Sentiment Negative (Danger)',
    token: '--ina-sentiment-negative-500',
    hex: '#f02d2d',
    usage: 'Pesan kesalahan formulir, pembatalan, berkas ditolak (--ina-red-500)',
    category: 'sentiment',
    contrastOnWhite: '4.7 : 1',
    wcagStatus: 'AA',
  },
  {
    name: 'Neutral 25 (Canvas)',
    token: '--ina-neutral-25',
    hex: '#ffffff',
    usage: 'Latar kanvas bersih (60% background), kartu utama, dan modal',
    category: 'neutral',
    contrastOnWhite: '1 : 1',
    wcagStatus: 'AA',
  },
  {
    name: 'Neutral 50 (Surface)',
    token: '--ina-neutral-50',
    hex: '#f8f8f7',
    usage: 'Latar permukaan sekunder kontainer kartu dan selang-seling tabel',
    category: 'neutral',
    contrastOnWhite: '1.05 : 1',
    wcagStatus: 'AA',
  },
  {
    name: 'Neutral 200 (Stroke/Border)',
    token: '--ina-neutral-200',
    hex: '#e5e5e5',
    usage: 'Garis batas (hairline divider) pembatas kartu, input border, dan divider',
    category: 'neutral',
    contrastOnWhite: '1.25 : 1',
    wcagStatus: 'Pass UI',
  },
  {
    name: 'Neutral 800 (Text Primary)',
    token: '--ina-neutral-800',
    hex: '#1f1f1f',
    usage: 'Warna teks utama konten, judul, dan label formulir',
    category: 'neutral',
    contrastOnWhite: '14.2 : 1',
    wcagStatus: 'AAA',
  },
  {
    name: 'Neutral 900 (High Contrast)',
    token: '--ina-neutral-900',
    hex: '#141414',
    usage: 'Header berwibawa dan latar teks kontras tinggi',
    category: 'neutral',
    contrastOnWhite: '17.8 : 1',
    wcagStatus: 'AAA',
  }
];

export const IDDS_COMPONENTS_DIRECTORY = [
  {
    name: 'Button & Button Group',
    selector: '.ina-button, .ina-button-group',
    roles: ['Primary', 'Secondary', 'Tertiary', 'Link', 'Destructive', 'Grouped'],
    description: 'Tombol aksi dengan status interaktif (hover, focus ring, loading, disabled) yang mematuhi standar aksesibilitas keyboard.'
  },
  {
    name: 'TextField & Form Controls',
    selector: '.ina-input, .ina-textfield',
    roles: ['Default', 'With Helper Text', 'Error State', 'Disabled', 'Required Mark'],
    description: 'Komponen input teks, textarea, dan seleksi dengan label semantik eksplisit dan penanganan validasi ramah pembaca layar.'
  },
  {
    name: 'Alert & Toast Notification',
    selector: '.ina-alert, .ina-toast',
    roles: ['Info', 'Success', 'Warning', 'Negative/Danger'],
    description: 'Pemberitahuan kontekstual untuk memberikan status dan konfirmasi tindakan penting kepada masyarakat.'
  },
  {
    name: 'Stepper & Timeline Tracking',
    selector: '.ina-stepper, .ina-timeline',
    roles: ['Horizontal Stepper', 'Vertical Timeline', 'Progress Bar'],
    description: 'Visualisasi tahapan permohonan layanan berurutan agar masyarakat mengetahui posisi berkas mereka.'
  },
  {
    name: 'Accordion & Collapse',
    selector: '.ina-accordion',
    roles: ['Single Expand', 'Multi Expand', 'Prerequisite Accordion'],
    description: 'Penyajian informasi persyaratan dokumen dan regulasi tanpa membebani layar secara visual.'
  },
  {
    name: 'Card & Surface Container',
    selector: '.ina-card',
    roles: ['Default Card', 'Interactive Card', 'Elevated Card'],
    description: 'Kontainer layanan publik dengan batas tipis hairline 1px (--ina-neutral-200) tanpa bayangan berlebihan.'
  },
  {
    name: 'Modal & Dialog',
    selector: '.ina-modal, .ina-dialog',
    roles: ['Confirmation Dialog', 'Form Drawer', 'Detail Modal'],
    description: 'Jendela terfokus untuk input formulir dan konfirmasi tindakan dengan jebakan fokus (focus trap).'
  },
  {
    name: 'Data Table with Tabular-Nums',
    selector: '.ina-table',
    roles: ['Sortable Table', 'Striped Rows', 'Action Columns'],
    description: 'Tabel data untuk antrean rumah sakit, tarif retribusi daerah, dan riwayat laporan warga.'
  }
];

export const INA_TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    name: 'Display Hero',
    role: 'Headline utama portal (Hero title)',
    size: '36px - 44px (clamp 2.25rem - 2.75rem)',
    weight: 'Bold 700 / ExtraBold 800',
    lineHeight: '1.15',
    sample: 'Layanan Publik Terpadu Sukoharjo'
  },
  {
    name: 'Heading 1 (H1)',
    role: 'Judul seksi utama dan bab layanan',
    size: '28px - 32px',
    weight: 'Bold 700',
    lineHeight: '1.25',
    sample: 'Katalog Layanan Publik Berbasis Siklus Hidup'
  },
  {
    name: 'Heading 2 (H2)',
    role: 'Judul kartu fitur dan modul drawer',
    size: '20px - 22px',
    weight: 'SemiBold 600',
    lineHeight: '1.3',
    sample: 'Penerbitan KTP Elektronik Sukoharjo'
  },
  {
    name: 'Body Regular (P)',
    role: 'Teks instruksi, deskripsi syarat, paragraf utama',
    size: '15px - 16px',
    weight: 'Regular 400',
    lineHeight: '1.6 (65-75ch measure)',
    sample: 'Masyarakat dapat mengajukan dokumen kependudukan secara mandiri dengan verifikasi NIK nasional.'
  },
  {
    name: 'Caption / Muted Metadata',
    role: 'Pemisah informasi unboxed, estimasi SLA, kode regulasi',
    size: '12px - 13px',
    weight: 'Medium 500',
    lineHeight: '1.4',
    sample: 'Disdukcapil · 1 Hari Kerja · Biaya Rp 0'
  }
];

export const UX_WRITING_GUIDELINES = [
  {
    wrong: 'Dispensasi Retribusi SKRD Sub-Pajak Bumi & Bangunan',
    correct: 'Pengajuan Keringanan Pajak PBB-P2',
    explanation: 'Hindari jargon singkatan internal birokrasi yang membingungkan warga awam. Gunakan istilah kebutuhan warga.'
  },
  {
    wrong: 'Klik Disini Untuk Melakukan Permohonan Penerbitan Baru',
    correct: 'Ajukan KTP Baru',
    explanation: 'Gunakan kata kerja aksi langsung pada tombol; jangan gunakan frasa generik "klik disini" (melanggar standar aksesibilitas WCAG).'
  },
  {
    wrong: 'Error 503: Gagal Query Database Oracle E-KTP Server',
    correct: 'Koneksi ke data kependudukan sedang lambat. Silakan coba kembali dalam 5 menit.',
    explanation: 'Jangan tampilkan kode error server teknis kepada masyarakat. Jelaskan apa yang terjadi dan langkah solusi yang harus dilakukan.'
  },
  {
    wrong: 'Pemohon Diwajibkan Membawa Berkas Sesuai Perbup No. 42 Tahun 2021',
    correct: 'Persyaratan: Foto KK terbaru dan KTP lama Anda',
    explanation: 'Cantumkan daftar syarat yang dapat langsung dipahami dan disiapkan warga, sertakan dasar hukum hanya sebagai informasi pelengkap.'
  }
];

export const SUKOHARJO_AGENCIES_DATA: AgencyItem[] = [
  // 1. DINAS DAERAH
  {
    id: 'diskominfo',
    name: 'Dinas Komunikasi dan Informatika',
    shortName: 'Diskominfo',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Gedung Menara Wijaya Lt. 3, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003',
    email: 'diskominfo@sukoharjokab.go.id',
    website: 'https://diskominfo.sukoharjokab.go.id',
    headOfAgency: 'Suyamto, ST, M.Kom',
    mainDuties: 'Penyelenggaraan urusan komunikasi, informatika, persandian, statistik sektoral, tata kelola SPBE, dan pengelolaan portal resmi Kabupaten Sukoharjo.',
    keyServices: [
      'Pengelolaan Portal Resmi & SPBE Sukoharjo',
      'Layanan Call Center Darurat Sukoharjo 112',
      'Penyediaan Akses Internet Publik & Fiber Optic OPD',
      'Pengelolaan Pengaduan SP4N LAPOR!',
      'Pengamanan Informasi & CSIRT Daerah'
    ],
    digitalApps: [
      { name: 'Portal Sukoharjo Makmur', url: 'https://portal.sukoharjokab.go.id', description: 'Pintu gerbang informasi dan layanan terintegrasi' },
      { name: 'SP4N LAPOR! Sukoharjo', url: 'https://lapor.go.id', description: 'Kanal pengaduan masyarakat nasional dan daerah' },
      { name: 'Call Center 112', description: 'Panggilan darurat 24 jam bebas pulsa' }
    ]
  },
  {
    id: 'disdukcapil',
    name: 'Dinas Kependudukan dan Pencatatan Sipil',
    shortName: 'Disdukcapil',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Gedung Mal Pelayanan Publik (MPP) Lantai 1 & Menara Wijaya Lt. 1, Jl. Jend. Sudirman No. 199',
    phone: '(0271) 593012 / WhatsApp: 0813-2646-6000',
    email: 'disdukcapil@sukoharjokab.go.id',
    website: 'https://disdukcapil.sukoharjokab.go.id',
    headOfAgency: 'Drs. Budi Susetyo, M.Si',
    mainDuties: 'Pelayanan pendaftaran penduduk, pencatatan sipil, pengelolaan informasi administrasi kependudukan, serta pemanfaatan data kependudukan.',
    keyServices: [
      'Perekaman dan Pencetakan KTP Elektronik (KTP-el)',
      'Penerbitan Kartu Identitas Anak (KIA)',
      'Penerbitan Kartu Keluarga (KK) & Pindah Datang',
      'Akta Kelahiran, Kematian, Perkawinan, & Perceraian',
      'Aktivasi Identitas Kependudukan Digital (IKD)'
    ],
    digitalApps: [
      { name: 'PRASOJO Online', url: 'https://prasojo.sukoharjokab.go.id', description: 'Pelayanan Adminduk Online Sukoharjo mandiri tanpa antre' },
      { name: 'Aktivasi IKD Mobile', description: 'Aplikasi KTP digital resmi Ditjen Dukcapil Kemendagri' }
    ]
  },
  {
    id: 'dpmptsp',
    name: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
    shortName: 'DPMPTSP',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Gedung Mal Pelayanan Publik (MPP) Lt. 1, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 115',
    email: 'dpmptsp@sukoharjokab.go.id',
    website: 'https://dpmptsp.sukoharjokab.go.id',
    headOfAgency: 'Drs. Widodo, M.Hum',
    mainDuties: 'Koordinasi penanaman modal daerah dan penyelenggaraan pelayanan terpadu satu pintu izin berusaha serta izin non-berusaha.',
    keyServices: [
      'Penerbitan Nomor Induk Berusaha (NIB) OSS RBA',
      'Persetujuan Bangunan Gedung (PBG) & SLF',
      'Surat Izin Praktik Tenaga Kesehatan (SIP)',
      'Izin Pemasangan Reklame & Media Promosi',
      'Fasilitasi Kemitraan Investasi PMA/PMDN'
    ],
    digitalApps: [
      { name: 'SPION Sukoharjo', url: 'https://spion.sukoharjokab.go.id', description: 'Sistem Pelayanan Izin Online perizinan non-berusaha daerah' },
      { name: 'OSS-RBA Nasional', url: 'https://oss.go.id', description: 'Perizinan berusaha berbasis risiko' }
    ]
  },
  {
    id: 'dinkes',
    name: 'Dinas Kesehatan Kabupaten Sukoharjo',
    shortName: 'Dinkes',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Dr. Muwardi No. 63, Sukoharjo',
    phone: '(0271) 593125',
    email: 'dinkes@sukoharjokab.go.id',
    website: 'https://dinkes.sukoharjokab.go.id',
    headOfAgency: 'dr. Tri Tuti Rahayu, M.Kes',
    mainDuties: 'Perumusan kebijakan kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan primer di 12 Puskesmas, dan kefarmasian.',
    keyServices: [
      'Rekomendasi Izin Operasional Klinik & Apotek',
      'Sertifikat Pangan Industri Rumah Tangga (P-IRT Jamu & Pangan)',
      'Pelayanan Imunisasi Balita & Skrining PTM Puskesmas',
      'Pemeriksaan Higiene Sanitasi Depot Air & Restoran',
      'Fasilitasi Jaminan Kesehatan Daerah (Jamkesda / UHC)'
    ],
    digitalApps: [
      { name: 'Antrean Faskes Sukoharjo', description: 'Reservasi nomor antrean dokter umum & gigi di 12 Puskesmas' },
      { name: 'Sistem Informasi P-IRT Dinkes', description: 'Pendaftaran uji laboratorium kelayakan pangan dan jamu' }
    ]
  },
  {
    id: 'disdikbud',
    name: 'Dinas Pendidikan dan Kebudayaan',
    shortName: 'Disdikbud',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Veteran No. 9, Sukoharjo',
    phone: '(0271) 593051',
    email: 'disdikbud@sukoharjokab.go.id',
    website: 'https://disdikbud.sukoharjokab.go.id',
    headOfAgency: 'Heri Mulyadi, S.Pd, M.Pd',
    mainDuties: 'Penyelenggaraan pendidikan anak usia dini, pendidikan dasar (SD & SMP), pendidikan nonformal, serta pelestarian kebudayaan dan cagar budaya daerah.',
    keyServices: [
      'Penerimaan Peserta Didik Baru (PPDB) Daring SMP & SD',
      'Fasilitasi Kartu Sukoharjo Pintar (KSP) Beasiswa Siswa Kurang Mampu',
      'Legalitas Ijazah & Rekomendasi Mutasi Siswa',
      'Pembinaan Sanggar Karawitan, Tari, & Wayang Kulit',
      'Registrasi Warisan Budaya Tak Benda & Cagar Budaya'
    ],
    digitalApps: [
      { name: 'PPDB Online Sukoharjo', url: 'https://ppdb.sukoharjokab.go.id', description: 'Pendaftaran siswa baru jalur zonasi, prestasi, afirmasi' }
    ]
  },
  {
    id: 'dpupr',
    name: 'Dinas Pekerjaan Umum dan Penataan Ruang',
    shortName: 'DPUPR',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Gedung Menara Wijaya Lt. 2, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 120',
    email: 'dpupr@sukoharjokab.go.id',
    website: 'https://dpupr.sukoharjokab.go.id',
    headOfAgency: 'Ir. Bowo Sutopo Dwi Atmojo, MT',
    mainDuties: 'Pengelolaan infrastruktur jalan dan jembatan kabupaten, sumber daya air dan irigasi pertanian, drainase perkotaan, serta tata ruang.',
    keyServices: [
      'Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR)',
      'Pelayanan Perbaikan Jalan Rusak & Jembatan',
      'Izin Pemakaian Alat Berat & Laboratorium Bahan Konstruksi',
      'Pengelolaan Jaringan Irigasi Pertanian Lumbung Padi'
    ],
    digitalApps: [
      { name: 'SITARU Sukoharjo', description: 'Sistem Informasi Tata Ruang digital Kabupaten Sukoharjo' }
    ]
  },
  {
    id: 'dinsos',
    name: 'Dinas Sosial',
    shortName: 'Dinsos',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Mayor Sunaryo No. 37, Sukoharjo',
    phone: '(0271) 593132',
    email: 'dinsos@sukoharjokab.go.id',
    website: 'https://dinsos.sukoharjokab.go.id',
    headOfAgency: 'Suparmin, SH, MH',
    mainDuties: 'Perlindungan dan jaminan sosial, penanganan kemiskinan, rehabilitasi sosial penyandang disabilitas dan lansia, serta pemberdayaan sosial.',
    keyServices: [
      'Pengecekan dan Verifikasi DTKS (Data Terpadu Kesejahteraan Sosial)',
      'Rekomendasi Bantuan Sosial PKH, BPNT, & KIP',
      'Pemberian Alat Bantu Disabilitas (Kursi Roda, Alat Dengar)',
      'Penerbitan Surat Keterangan Terdaftar DTKS untuk Keringanan Biaya'
    ],
    digitalApps: [
      { name: 'Cek DTKS Mandiri Sukoharjo', description: 'Cek kepesertaan bansos NIK kepala keluarga online' }
    ]
  },
  {
    id: 'disperinaker',
    name: 'Dinas Perindustrian dan Tenaga Kerja',
    shortName: 'Disperinaker',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Veteran No. 3, Sukoharjo',
    phone: '(0271) 593042',
    email: 'disperinaker@sukoharjokab.go.id',
    website: 'https://disperinaker.sukoharjokab.go.id',
    headOfAgency: 'Drs. Sumarno, M.Si',
    mainDuties: 'Pembinaan perindustrian daerah, hubungan industrial ketenagakerjaan, penempatan tenaga kerja, serta pelatihan vokasi balai latihan kerja (BLK).',
    keyServices: [
      'Penerbitan Kartu Tanda Pencari Kerja (AK-1 / Kartu Kuning)',
      'Pendaftaran Pelatihan Kerja Gratis BLK Sukoharjo',
      'Mediasi Perselisihan Hubungan Industrial',
      'Penyelenggaraan Job Fair & Bursa Kerja Khusus (BKK)'
    ],
    digitalApps: [
      { name: 'E-Makaryo & AK-1 Digital', description: 'Pembuatan dokumen AK-1 langsung jadi dengan barcode resmi' }
    ]
  },
  {
    id: 'disperindagkop',
    name: 'Dinas Perdagangan, Koperasi, Usaha Kecil dan Menengah',
    shortName: 'Disperindagkop UKM',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Gedung Menara Wijaya Lt. 3, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 125',
    email: 'disperindagkop@sukoharjokab.go.id',
    website: 'https://disperindagkop.sukoharjokab.go.id',
    headOfAgency: 'Iwan Setiyono, S.STP, M.Hum',
    mainDuties: 'Pengembangan pasar rakyat, stabilisasi harga kebutuhan pokok, pemberdayaan koperasi dan UMKM, serta promosi produk lokal unggulan jamu & batik.',
    keyServices: [
      'Fasilitasi Sertifikasi Halal Gratis (Sehati) UMKM',
      'Bantuan Permodalan & Pelatihan Manajemen UMKM Makmur',
      'Monitoring Harga Komoditas Pasar Tradisional',
      'Penerbitan Rekomendasi Izin Toko Modern & Koperasi'
    ],
    digitalApps: [
      { name: 'Si-Pasar Sukoharjo', description: 'Informasi harga sembako harian di pasar-pasar Sukoharjo' }
    ]
  },
  {
    id: 'dlh',
    name: 'Dinas Lingkungan Hidup',
    shortName: 'DLH',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Tentara Pelajar No. 1, Sukoharjo',
    phone: '(0271) 593188',
    email: 'dlh@sukoharjokab.go.id',
    website: 'https://dlh.sukoharjokab.go.id',
    headOfAgency: 'Agus Suprapto, ST, MT',
    mainDuties: 'Pengendalian pencemaran lingkungan, pengelolaan kebersihan dan persampahan (TPA Mojorejo), pemeliharaan taman kota, serta pengawasan Amdal.',
    keyServices: [
      'Rekomendasi Dokumen Lingkungan (AMDAL, UKL-UPL, SPPL)',
      'Pelayanan Pengangkutan Sampah Domestik & Kawasan Usaha',
      'Pembinaan Bank Sampah Mandiri Tingkat Desa/Kelurahan',
      'Uji Kualitas Air Limbah & Udara Emisi'
    ]
  },
  {
    id: 'dishub',
    name: 'Dinas Perhubungan',
    shortName: 'Dishub',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Solo - Wonogiri KM 7, Begajah, Sukoharjo',
    phone: '(0271) 593254',
    email: 'dishub@sukoharjokab.go.id',
    website: 'https://dishub.sukoharjokab.go.id',
    headOfAgency: 'Toni Srigiyanto, ST, MM',
    mainDuties: 'Pengelolaan lalu lintas angkutan jalan, pengujian kelaikan kendaraan bermotor, keselamatan jalan raya, serta pemeliharaan penerangan jalan umum (PJU).',
    keyServices: [
      'Uji Berkala Kendaraan Bermotor (KIR Online)',
      'Penanganan Kerusakan Lampu Penerangan Jalan Umum (PJU)',
      'Rekomendasi Analisis Dampak Lalu Lintas (Andalalin)',
      'Izin Trayek Angkutan Umum Perdesaan'
    ],
    digitalApps: [
      { name: 'E-KIR Sukoharjo', description: 'Pendaftaran uji kir kendaraan barang & penumpang secara daring' }
    ]
  },
  {
    id: 'pertanian',
    name: 'Dinas Pertanian dan Perikanan',
    shortName: 'Distanbun',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 130',
    email: 'pertanian@sukoharjokab.go.id',
    website: 'https://pertanian.sukoharjokab.go.id',
    headOfAgency: 'Bagus Setyadi, SP, MMA',
    mainDuties: 'Pemberdayaan petani lumbung padi Sukoharjo, penyuluhan pertanian, ketahanan benih unggul, kesehatan hewan ternak, dan budidaya perikanan.',
    keyServices: [
      'Pendaftaran Asuransi Usaha Tani Padi (AUTP) Sukoharjo',
      'Penebusan Pupuk Bersubsidi & Kartu Tani',
      'Pelayanan Kesehatan Hewan Ternak & Vaksinasi PMK',
      'Bantuan Bibit Ikan & Benih Padi Petani'
    ]
  },
  {
    id: 'disporapar',
    name: 'Dinas Kepemudaan, Olahraga dan Pariwisata',
    shortName: 'Disporapar',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Veteran No. 4, Sukoharjo',
    phone: '(0271) 593175',
    email: 'disporapar@sukoharjokab.go.id',
    website: 'https://disporapar.sukoharjokab.go.id',
    headOfAgency: 'Setyo Aji Nugroho, S.Sos',
    mainDuties: 'Pengembangan potensi kepemudaan, sarana prasarana olahraga, promosi destinasi wisata heritage dan alam Sukoharjo, serta sertifikasi insan pariwisata.',
    keyServices: [
      'Pemanfaatan Sarana GOR & Stadion Gelora Merdeka',
      'Pembinaan Atlet Berprestasi & Pemuda Pelopor',
      'Informasi Desa Wisata & Kalender Wisata Sukoharjo'
    ]
  },
  {
    id: 'disperumkim',
    name: 'Dinas Perumahan dan Kawasan Permukiman',
    shortName: 'Disperumkim',
    type: 'dinas',
    typeLabel: 'Dinas Daerah',
    address: 'Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 135',
    email: 'disperumkim@sukoharjokab.go.id',
    website: 'https://disperumkim.sukoharjokab.go.id',
    headOfAgency: 'Ir. Lanjar Budi Wahyono, MT',
    mainDuties: 'Penyelenggaraan perumahan layak huni, penanganan kawasan permukiman kumuh, dan verifikasi prasarana sarana utilitas (PSU) pengembang.',
    keyServices: [
      'Bantuan Rumah Tidak Layak Huni (RTLH)',
      'Verifikasi Serah Terima PSU Perumahan Pengembang',
      'Pengelolaan Rumah Susun Sewa (Rusunawa) Joho'
    ]
  },

  // 2. BADAN DAERAH
  {
    id: 'bpkpad',
    name: 'Badan Pengelolaan Keuangan, Pendapatan dan Aset Daerah',
    shortName: 'BPKPAD',
    type: 'badan',
    typeLabel: 'Badan Daerah',
    address: 'Gedung Menara Wijaya Lt. 2, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 140',
    email: 'bpkpad@sukoharjokab.go.id',
    website: 'https://bpkpad.sukoharjokab.go.id',
    headOfAgency: 'Richard Tri Handoko, SE, MM',
    mainDuties: 'Pengelolaan anggaran pendapatan dan belanja daerah (APBD), pemungutan pajak dan retribusi daerah, akuntansi aset milik daerah.',
    keyServices: [
      'Cek Tagihan & Pembayaran e-PBB P2 Sukoharjo',
      'Pelaporan Pajak Daerah Online (PBJT, Restoran, Hotel)',
      'Validasi Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB)',
      'Penerbitan Surat Tanda Terima Setoran (e-STTS) Lunas'
    ],
    digitalApps: [
      { name: 'SIMPDRD Sukoharjo', url: 'https://simpdrd.sukoharjokab.go.id', description: 'Sistem Informasi Manajemen Pajak Daerah dan Retribusi Daerah' },
      { name: 'e-PBB Sukoharjo', description: 'Cek NOP dan pelunasan PBB online via QRIS & Bank Jateng' }
    ]
  },
  {
    id: 'bapperida',
    name: 'Badan Perencanaan Pembangunan, Riset dan Inovasi Daerah',
    shortName: 'BAPPERIDA',
    type: 'badan',
    typeLabel: 'Badan Daerah',
    address: 'Gedung Menara Wijaya Lt. 4, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 145',
    email: 'bapperida@sukoharjokab.go.id',
    website: 'https://bapperida.sukoharjokab.go.id',
    headOfAgency: 'Drs. Rudiyanto, M.Si',
    mainDuties: 'Perumusan rencana pembangunan jangka panjang dan menengah daerah (RPJPD/RPJMD), riset kebijakan, inovasi pelayanan publik, dan keterbukaan data.',
    keyServices: [
      'Penyusunan RKPD dan Fasilitasi Musrenbang Kabupaten',
      'Fasilitasi Lomba Inovasi Sukoharjo (Krenova)',
      'Pengelolaan Portal Satu Data Sukoharjo'
    ],
    digitalApps: [
      { name: 'Open Data Sukoharjo', url: 'https://data.sukoharjokab.go.id', description: 'Portal data terbuka statistik sektoral daerah' }
    ]
  },
  {
    id: 'bkpsdm',
    name: 'Badan Kepegawaian dan Pengembangan Sumber Daya Manusia',
    shortName: 'BKPSDM',
    type: 'badan',
    typeLabel: 'Badan Daerah',
    address: 'Gedung Menara Wijaya Lt. 5, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 150',
    email: 'bkpsdm@sukoharjokab.go.id',
    website: 'https://bkpsdm.sukoharjokab.go.id',
    headOfAgency: 'Sumaryono, S.Sos, M.Si',
    mainDuties: 'Pengadaan ASN, mutasi, promosi, penilaian kinerja, dan pengembangan kompetensi aparatur sipil negara di Kabupaten Sukoharjo.',
    keyServices: [
      'Pelaksanaan Seleksi CPNS & PPPK Daerah',
      'Layanan Kenaikan Pangkat & Pensiun Terintegrasi',
      'Pendidikan dan Pelatihan Kepemimpinan ASN'
    ],
    digitalApps: [
      { name: 'SIMPEG Sukoharjo', description: 'Sistem Informasi Manajemen Kepegawaian ASN Sukoharjo' }
    ]
  },
  {
    id: 'bpbd',
    name: 'Badan Penanggulangan Bencana Daerah',
    shortName: 'BPBD',
    type: 'badan',
    typeLabel: 'Badan Daerah',
    address: 'Jl. Rajawali No. 12, Sukoharjo (Pusdalops Siaga 24 Jam)',
    phone: '(0271) 590059 / Darurat 112',
    email: 'bpbd@sukoharjokab.go.id',
    website: 'https://bpbd.sukoharjokab.go.id',
    headOfAgency: 'Arianto Mulyatmojo, S.Sos',
    mainDuties: 'Pencegahan, kesiapsiagaan, tanggap darurat, dan rehabilitasi pascabencana banjir luapan Bengawan Solo, tanah longsor, dan puting beliung.',
    keyServices: [
      'Layanan Tanggap Bencana & Evakuasi Cepat 24 Jam',
      'Early Warning System (EWS) Banjir Bengawan Solo',
      'Distribusi Bantuan Air Bersih Wilayah Kekeringan (Weru/Bulu)',
      'Pelatihan Desa Tangguh Bencana (Destana)'
    ]
  },
  {
    id: 'satpolpp',
    name: 'Satuan Polisi Pamong Praja',
    shortName: 'Satpol PP',
    type: 'badan',
    typeLabel: 'Badan Daerah',
    address: 'Jl. Jenderal Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593113',
    email: 'satpolpp@sukoharjokab.go.id',
    website: 'https://satpolpp.sukoharjokab.go.id',
    headOfAgency: 'Sunarto, S.Sos, MM',
    mainDuties: 'Penegakan Peraturan Daerah (Perda) dan Peraturan Bupati, penyelenggaraan ketertiban umum, dan perlindungan masyarakat.',
    keyServices: [
      'Penertiban Reklame Liar & Pelanggaran Perda',
      'Pengaduan Gangguan Ketenteraman Lingkungan Warga',
      'Pengamanan Acara Kedinasan & Pengawalan Pejabat Daerah'
    ]
  },

  // 3. BAGIAN-BAGIAN SEKRETARIAT DAERAH (SETDA)
  {
    id: 'bagian-hukum',
    name: 'Bagian Hukum Sekretariat Daerah',
    shortName: 'Bagian Hukum',
    type: 'bagian_setda',
    typeLabel: 'Bagian Setda',
    address: 'Gedung Menara Wijaya Lt. 7, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 170',
    email: 'hukum@sukoharjokab.go.id',
    website: 'https://jdih.sukoharjokab.go.id',
    headOfAgency: 'Teguh Pramono, SH, MH',
    mainDuties: 'Penyusunan produk hukum daerah (Perda, Perbup, Kepbup), fasilitasi bantuan hukum, dan dokumentasi informasi hukum terpadu.',
    keyServices: [
      'Akses Produk Hukum Daerah & Lembaran Daerah (JDIH)',
      'Konsultasi Regulasi & Peraturan Daerah',
      'Bantuan Hukum Bagi Masyarakat Kurang Mampu'
    ],
    digitalApps: [
      { name: 'JDIH Sukoharjo', url: 'https://jdih.sukoharjokab.go.id', description: 'Jaringan Dokumentasi dan Informasi Hukum Produk Hukum Perda & Perbup' }
    ]
  },
  {
    id: 'bagian-kesra',
    name: 'Bagian Kesejahteraan Rakyat',
    shortName: 'Bagian Kesra',
    type: 'bagian_setda',
    typeLabel: 'Bagian Setda',
    address: 'Gedung Menara Wijaya Lt. 7, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 172',
    email: 'kesra@sukoharjokab.go.id',
    headOfAgency: 'H. Suparman, S.Ag, M.Si',
    mainDuties: 'Pengelolaan urusan keagamaan, kesejahteraan sosial, pemberdayaan masyarakat, fasilitasi bantuan tempat ibadah, dan beasiswa mahasiswa.',
    keyServices: [
      'Fasilitasi Hibah Renovasi Tempat Ibadah',
      'Beasiswa Mahasiswa Berprestasi Kabupaten Sukoharjo',
      'Penyelenggaraan Peringatan Hari Besar Nasional & Keagamaan'
    ]
  },
  {
    id: 'bagian-pbj',
    name: 'Bagian Pengadaan Barang dan Jasa (UKPBJ)',
    shortName: 'Bagian PBJ',
    type: 'bagian_setda',
    typeLabel: 'Bagian Setda',
    address: 'Gedung Menara Wijaya Lt. 6, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 175',
    email: 'lpse@sukoharjokab.go.id',
    website: 'https://lpse.sukoharjokab.go.id',
    headOfAgency: 'Dwi Joko, ST, MT',
    mainDuties: 'Penyelenggaraan tender barang dan jasa pemerintah secara elektronik, pembinaan vendor lokal, dan e-Katalog Lokal Sukoharjo.',
    keyServices: [
      'Pendaftaran Vendor & Penyedia Barang/Jasa LPSE',
      'Penayangan Produk UMKM Lokal di e-Katalog Sektoral',
      'Konsultasi Pengadaan Barang/Jasa Pemerintah'
    ],
    digitalApps: [
      { name: 'LPSE Sukoharjo', url: 'https://lpse.sukoharjokab.go.id', description: 'Layanan Pengadaan Secara Elektronik' }
    ]
  },
  {
    id: 'bagian-organisasi',
    name: 'Bagian Organisasi Sekretariat Daerah',
    shortName: 'Bagian Organisasi',
    type: 'bagian_setda',
    typeLabel: 'Bagian Setda',
    address: 'Gedung Menara Wijaya Lt. 7, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 178',
    email: 'organisasi@sukoharjokab.go.id',
    headOfAgency: 'Dwi Purwadi, S.STP, M.Si',
    mainDuties: 'Pembinaan kelembagaan perangkat daerah, analisis jabatan dan beban kerja (Anjab-ABK), serta standarisasi mutu pelayanan publik.',
    keyServices: [
      'Penyusunan Standar Pelayanan Publik (SPP) Seluruh OPD',
      'Evaluasi Indeks Kepuasan Masyarakat (IKM) Berkala',
      'Pembinaan Reformasi Birokrasi & Zona Integritas'
    ]
  },
  {
    id: 'bagian-prokopim',
    name: 'Bagian Protokol dan Komunikasi Pimpinan',
    shortName: 'Prokopim',
    type: 'bagian_setda',
    typeLabel: 'Bagian Setda',
    address: 'Gedung Menara Wijaya Lt. 1, Jl. Jend. Sudirman No. 199, Sukoharjo',
    phone: '(0271) 593003 ext. 180',
    email: 'prokopim@sukoharjokab.go.id',
    headOfAgency: 'Budi Santoso, S.STP, M.Si',
    mainDuties: 'Keprotokolan bupati dan wakil bupati, dokumentasi agenda pimpinan, penyebaran rilis pers resmi pemerintah kabupaten.',
    keyServices: [
      'Pengaturan Agenda Audensi Bersama Pimpinan Daerah',
      'Rilis Informasi & Konferensi Pers Resmi Pemkab'
    ]
  },

  // 4. INSTANSI VERTIKAL & BUMD
  {
    id: 'rsud-soekarno',
    name: 'RSUD Ir. Soekarno Kabupaten Sukoharjo (BLUD)',
    shortName: 'RSUD Ir. Soekarno',
    type: 'bumd',
    typeLabel: 'BLUD / BUMD',
    address: 'Jl. Dr. Muwardi No. 56, Gayam, Sukoharjo',
    phone: '(0271) 593118 / IGD 24 Jam: (0271) 593116',
    email: 'rsud@sukoharjokab.go.id',
    website: 'https://rsud.sukoharjokab.go.id',
    headOfAgency: 'dr. Yunia Wahdiyati',
    mainDuties: 'Rumah sakit umum daerah tipe B rujukan utama di Sukoharjo dengan pelayanan dokter spesialis terpadu dan IGD 24 jam.',
    keyServices: [
      'Pendaftaran Poliklinik Rawat Jalan Online BPJS / Umum',
      'Pelayanan Rawat Inap & Intensive Care (ICU/NICU/PICU)',
      'Instalasi Gawat Darurat (IGD) & Ambulans 24 Jam',
      'Layanan Hemodialisa (Cuci Darah) & Bedah Sentral'
    ],
    digitalApps: [
      { name: 'Reservasi Online RSUD Soekarno', description: 'Ambil antrean dokter spesialis H-1 tanpa perlu datang subuh' }
    ]
  },
  {
    id: 'pdam-tirta-makmur',
    name: 'Perumda Air Minum Tirta Makmur Sukoharjo',
    shortName: 'PDAM Tirta Makmur',
    type: 'bumd',
    typeLabel: 'BUMD Daerah',
    address: 'Jl. Jenderal Sudirman No. 28, Sukoharjo',
    phone: '(0271) 593108 / WhatsApp Pengaduan: 0811-2651-108',
    email: 'pdam@sukoharjokab.go.id',
    website: 'https://pdamtirtamakmur.co.id',
    headOfAgency: 'Dwi Atmojo Heri, ST',
    mainDuties: 'Penyediaan dan distribusi air bersih perpipaan yang sehat, higienis, dan terjangkau bagi warga dan industri di Sukoharjo.',
    keyServices: [
      'Pemasangan Sambungan Baru Air Bersih',
      'Cek Tagihan Rekening Air Bulanan Online',
      'Layanan Cepat Perbaikan Pipa Bocor & Tangki Air Darurat'
    ],
    digitalApps: [
      { name: 'Cek Tagihan PDAM Tirta Makmur', description: 'Cek nomor pelanggan dan bayar via mobile banking' }
    ]
  },
  {
    id: 'polres-sukoharjo',
    name: 'Kepolisian Resor (Polres) Sukoharjo',
    shortName: 'Polres Sukoharjo',
    type: 'instansi_vertikal',
    typeLabel: 'Instansi Vertikal',
    address: 'Jl. Jaksa Agung R. Soeprapto No. 15, Sukoharjo',
    phone: '(0271) 593110 / Call Center Polri: 110',
    website: 'https://tribratanews.sukoharjo.jateng.polri.go.id',
    mainDuties: 'Pemeliharaan keamanan dan ketertiban masyarakat, penegakan hukum, perlindungan, pengayoman, dan pelayanan kepada masyarakat.',
    keyServices: [
      'Penerbitan & Perpanjangan SIM di Satpas Sukoharjo & MPP',
      'Penerbitan SKCK (Surat Keterangan Catatan Kepolisian)',
      'Sentra Pelayanan Kepolisian Terpadu (SPKT 110)',
      'Layanan Tilang Elektronik (ETLE)'
    ]
  },
  {
    id: 'atrbpn-sukoharjo',
    name: 'Kantor Pertanahan / ATR BPN Kabupaten Sukoharjo',
    shortName: 'Kantor Pertanahan (BPN)',
    type: 'instansi_vertikal',
    typeLabel: 'Instansi Vertikal',
    address: 'Jl. Rajawali No. 1, Joho, Sukoharjo',
    phone: '(0271) 593026',
    website: 'https://kab-sukoharjo.atrbpn.go.id',
    mainDuties: 'Pelaksanaan pendaftaran tanah, penerbitan sertifikat hak milik, pengukuran tanah, dan program sertifikasi massal PTSL.',
    keyServices: [
      'Pendaftaran Sertifikat Tanah Elektronik',
      'Pengecekan Keaslian Sertifikat Tanah (Aplikasi Sentuh Tanahku)',
      'Peralihan Hak, Jual Beli, Hibah, & Hak Tanggungan (HT-el)',
      'Gerai Layanan Pertanahan di Mal Pelayanan Publik (MPP)'
    ]
  },
  {
    id: 'kemenag-sukoharjo',
    name: 'Kantor Kementerian Agama Kabupaten Sukoharjo',
    shortName: 'Kemenag Sukoharjo',
    type: 'instansi_vertikal',
    typeLabel: 'Instansi Vertikal',
    address: 'Jl. Veteran No. 18, Sukoharjo',
    phone: '(0271) 593035',
    website: 'https://sukoharjo.kemenag.go.id',
    mainDuties: 'Pelayanan bimbingan masyarakat Islam, Kristen, Katolik, Hindu, Buddha, pendaftaran haji dan umrah, pendidikan madrasah, dan KUA.',
    keyServices: [
      'Pendaftaran Haji & Pelimpahan Porsi Haji',
      'Layanan Nikah dan Rujuk di 12 KUA Kecamatan Sukoharjo',
      'Penerbitan Sertifikasi Halal Gratis (Self Declare)',
      'Penyuluhan Keluarga Sakinah & Wakaf'
    ]
  },

  // 5. KECAMATAN SE-KABUPATEN SUKOHARJO (12 KECAMATAN)
  {
    id: 'kec-sukoharjo',
    name: 'Pemerintah Kecamatan Sukoharjo',
    shortName: 'Kec. Sukoharjo',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Veteran No. 2, Sukoharjo (Pusat Kota)',
    phone: '(0271) 593020',
    headOfAgency: 'Camat Sukoharjo',
    mainDuties: 'Penyelenggaraan pelayanan administrasi terpadu kecamatan (PATEN) di ibukota kabupaten yang membawahi 14 kelurahan.',
    keyServices: [
      'Perekaman KTP-el & Pencetakan Kartu Keluarga',
      'Surat Keterangan Waris & Keterangan Domisili',
      'Fasilitasi Musrenbang Kecamatan & Pemberdayaan RT/RW'
    ]
  },
  {
    id: 'kec-grogol',
    name: 'Pemerintah Kecamatan Grogol',
    shortName: 'Kec. Grogol',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Raya Grogol No. 73, Sukoharjo (Kawasan Solo Baru)',
    phone: '(0271) 621187',
    headOfAgency: 'Camat Grogol',
    mainDuties: 'Penyelenggaraan pemerintahan dan pelayanan publik di kawasan pusat bisnis, perdagangan, dan perumahan modern Solo Baru (14 desa).',
    keyServices: [
      'Pelayanan Administrasi Terpadu Kecamatan (PATEN)',
      'Rekomendasi Perizinan Usaha Mikro dan Reklame',
      'Pengurusan Pindah Datang Kependudukan Wilayah Bisnis'
    ]
  },
  {
    id: 'kec-kartasura',
    name: 'Pemerintah Kecamatan Kartasura',
    shortName: 'Kec. Kartasura',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Ahmad Yani No. 120, Kartasura, Sukoharjo',
    phone: '(0271) 780004',
    headOfAgency: 'Camat Kartasura',
    mainDuties: 'Pelayanan terpadu di kawasan strategis perlintasan Jogja-Solo-Semarang dan pusat pendidikan tinggi (10 desa & 2 kelurahan).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Fasilitasi UMKM Sentra Kerupuk & Kuliner Bebek Kartasura',
      'Pengawasan Tata Kelola Lingkungan Permukiman Mahasiswa'
    ]
  },
  {
    id: 'kec-baki',
    name: 'Pemerintah Kecamatan Baki',
    shortName: 'Kec. Baki',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. WR. Supratman No. 45, Baki, Sukoharjo',
    phone: '(0271) 740112',
    headOfAgency: 'Camat Baki',
    mainDuties: 'Penyelenggaraan pelayanan kecamatan sentra mebel, kerajinan rotan, dan kuliner ayam goreng Baki yang terkenal (14 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Fasilitasi Sertifikasi UMKM Mebel Kayu & Olahan Pangan',
      'Pengelolaan Bantuan Pertanian & Irigasi'
    ]
  },
  {
    id: 'kec-nguter',
    name: 'Pemerintah Kecamatan Nguter',
    shortName: 'Kec. Nguter',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Solo - Wonogiri KM 18, Nguter, Sukoharjo',
    phone: '(0271) 594002',
    headOfAgency: 'Camat Nguter',
    mainDuties: 'Pusat kawasan industri herbal jamu tradisional nasional dan kawasan industri modern terpadu Sukoharjo (16 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Pendampingan Koperasi Jamu Gendong Indonesia',
      'Fasilitasi Sentra Pasar Jamu Nguter'
    ]
  },
  {
    id: 'kec-mojolaban',
    name: 'Pemerintah Kecamatan Mojolaban',
    shortName: 'Kec. Mojolaban',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Raya Bekonang No. 10, Mojolaban, Sukoharjo',
    phone: '(0271) 611204',
    headOfAgency: 'Camat Mojolaban',
    mainDuties: 'Penyelenggaraan pemerintahan di sentra budaya gamelan Jawa internasional dan batik Bekonang (15 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Promosi Pengrajin Gamelan Ekspor & Batik Tulis',
      'Pengendalian Banjir Sempadan Sungai Bengawan Solo'
    ]
  },
  {
    id: 'kec-polokarto',
    name: 'Pemerintah Kecamatan Polokarto',
    shortName: 'Kec. Polokarto',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Raya Polokarto No. 1, Sukoharjo',
    phone: '(0271) 659102',
    headOfAgency: 'Camat Polokarto',
    mainDuties: 'Pelayanan wilayah lumbung pertanian dan sentra mebel serta kerajinan kayu lokal Sukoharjo (17 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Bimbingan Kelompok Tani dan P3A',
      'Pelayanan SKTM & Surat Pengantar Adminduk'
    ]
  },
  {
    id: 'kec-bendosari',
    name: 'Pemerintah Kecamatan Bendosari',
    shortName: 'Kec. Bendosari',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Raya Mulur, Bendosari, Sukoharjo',
    phone: '(0271) 593301',
    headOfAgency: 'Camat Bendosari',
    mainDuties: 'Penyelenggaraan pelayanan di kawasan pusat pemerintahan baru, waduk Mulur, dan kawasan kampus perguruan tinggi (13 desa & 1 kelurahan).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Pemberdayaan Wisata Alam Waduk Mulur',
      'Pelayanan Surat Keterangan Tanah & Pertanahan'
    ]
  },
  {
    id: 'kec-tawangsari',
    name: 'Pemerintah Kecamatan Tawangsari',
    shortName: 'Kec. Tawangsari',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Raya Tawangsari No. 15, Sukoharjo',
    phone: '(0271) 595002',
    headOfAgency: 'Camat Tawangsari',
    mainDuties: 'Pelayanan masyarakat di kawasan lumbung padi agraris dan sentra anyaman bambu perbatasan Klaten (12 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Fasilitasi Saluran Irigasi Waduk Gajah Mungkur',
      'Pemberdayaan Kelompok Kerajinan Anyaman Bambu'
    ]
  },
  {
    id: 'kec-weru',
    name: 'Pemerintah Kecamatan Weru',
    shortName: 'Kec. Weru',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Candi No. 3, Weru, Sukoharjo',
    phone: '(0271) 595112',
    headOfAgency: 'Camat Weru',
    mainDuties: 'Penyelenggaraan pemerintahan di wilayah selatan Sukoharjo, sentra tembikar tanah liat, dan kawasan pertanian tadah hujan (13 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Penyaluran Air Bersih Tanggap Bencana Kekeringan',
      'Fasilitasi Kelompok Pengrajin Gerabah & Tembikar'
    ]
  },
  {
    id: 'kec-bulu',
    name: 'Pemerintah Kecamatan Bulu',
    shortName: 'Kec. Bulu',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Solo - Wonogiri KM 12, Bulu, Sukoharjo',
    phone: '(0271) 593450',
    headOfAgency: 'Camat Bulu',
    mainDuties: 'Pelayanan masyarakat di kawasan perbukitan selatan, cagar alam, dan destinasi wisata alam Batu Seribu (12 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Pemberdayaan Desa Wisata Alam Geopark Batu Seribu',
      'Fasilitasi Pertanian Lahan Kering'
    ]
  },
  {
    id: 'kec-gatak',
    name: 'Pemerintah Kecamatan Gatak',
    shortName: 'Kec. Gatak',
    type: 'kecamatan',
    typeLabel: 'Wilayah Kecamatan',
    address: 'Jl. Stasiun Gawok No. 5, Gatak, Sukoharjo',
    phone: '(0271) 781203',
    headOfAgency: 'Camat Gatak',
    mainDuties: 'Pelayanan terpadu di sentra industri kerajinan rotan Desa Trangsan yang diakui dunia dan sentra mebel ekspor (14 desa).',
    keyServices: [
      'Pelayanan PATEN Kependudukan',
      'Fasilitasi Klaster Industri Rotan Trangsan Sukoharjo',
      'Pelayanan Surat Izin Berusaha Skala Mikro'
    ]
  }
];

export const SUKOHARJO_DIGITAL_SERVICES = [
  {
    id: 'app-prasojo',
    name: 'PRASOJO (Pelayanan Adminduk Online)',
    category: 'Kependudukan',
    department: 'Disdukcapil Sukoharjo',
    url: 'https://prasojo.sukoharjokab.go.id',
    description: 'Aplikasi pengurusan KTP-el, KIA, KK, Akta Lahir, dan Surat Pindah secara mandiri dengan verifikasi online dan cetak gratis.',
    isIntegrated: true,
  },
  {
    id: 'app-spion',
    name: 'SPION (Sistem Pelayanan Izin Online)',
    category: 'Perizinan',
    department: 'DPMPTSP Sukoharjo',
    url: 'https://spion.sukoharjokab.go.id',
    description: 'Sistem permohonan perizinan daerah non-berusaha, rekomendasi praktik nakes, reklame, dan pelacakan berkas pemohon.',
    isIntegrated: true,
  },
  {
    id: 'app-simpdrd',
    name: 'SIMPDRD & e-PBB Sukoharjo',
    category: 'Perpajakan Daerah',
    department: 'BPKPAD Sukoharjo',
    url: 'https://simpdrd.sukoharjokab.go.id',
    description: 'Pengecekan tagihan PBB-P2, pelaporan pajak hotel/restoran/hiburan, validasi BPHTB, dan pembayaran instan via QRIS.',
    isIntegrated: true,
  },
  {
    id: 'app-rsud-booking',
    name: 'Pendaftaran Pasien Online RSUD Ir. Soekarno',
    category: 'Kesehatan',
    department: 'RSUD Ir. Soekarno (BLUD)',
    url: 'https://rsud.sukoharjokab.go.id',
    description: 'Reservasi nomor antrean dokter spesialis dan poliklinik rawat jalan terintegrasi BPJS Mobile JKN tanpa antre di loket.',
    isIntegrated: true,
  },
  {
    id: 'app-ppdb',
    name: 'PPDB Online Kabupaten Sukoharjo',
    category: 'Pendidikan',
    department: 'Disdikbud Sukoharjo',
    url: 'https://ppdb.sukoharjokab.go.id',
    description: 'Penerimaan peserta didik baru jenjang SD & SMP se-Kabupaten Sukoharjo jalur zonasi, prestasi, dan afirmasi.',
    isIntegrated: true,
  },
  {
    id: 'app-lapor',
    name: 'SP4N LAPOR! Sukoharjo',
    category: 'Pengaduan',
    department: 'Diskominfo Sukoharjo',
    url: 'https://lapor.go.id',
    description: 'Kanal aduan terpadu aspirasi dan laporan kerusakan fasilitas publik yang langsung diteruskan ke kepala OPD.',
    isIntegrated: true,
  },
  {
    id: 'app-callcenter112',
    name: 'Call Center Darurat Sukoharjo 112',
    category: 'Kedaruratan',
    department: 'Diskominfo & BPBD',
    url: '#',
    description: 'Layanan panggilan darurat terpadu 24 jam bebas pulsa untuk ambulans, pemadam kebakaran, kepolisian, dan SAR.',
    isIntegrated: true,
  },
  {
    id: 'app-jdih',
    name: 'JDIH Sukoharjo (Dokumentasi Hukum)',
    category: 'Hukum & Regulasi',
    department: 'Bagian Hukum Setda Sukoharjo',
    url: 'https://jdih.sukoharjokab.go.id',
    description: 'Basis data digital Peraturan Daerah (Perda), Peraturan Bupati (Perbup), dan Keputusan Bupati terlengkap.',
    isIntegrated: true,
  },
  {
    id: 'app-opendata',
    name: 'Open Data Sukoharjo',
    category: 'Transparansi Data',
    department: 'BAPPERIDA & Diskominfo',
    url: 'https://data.sukoharjokab.go.id',
    description: 'Portal satu data terbuka Sukoharjo berisi statistik sektoral pemerintahan, ekonomi, kependudukan, dan geospasial.',
    isIntegrated: true,
  },
  {
    id: 'app-ppid',
    name: 'PPID Online Sukoharjo',
    category: 'Informasi Publik',
    department: 'Diskominfo & PPID Utama',
    url: 'https://ppid.sukoharjokab.go.id',
    description: 'Permohonan informasi publik, dokumen SAKIP, LPPD, dan transparansi laporan keuangan pemerintah daerah.',
    isIntegrated: true,
  },
  {
    id: 'app-lpse',
    name: 'LPSE Sukoharjo (Pengadaan Barang & Jasa)',
    category: 'Pengadaan',
    department: 'Bagian PBJ Setda Sukoharjo',
    url: 'https://lpse.sukoharjokab.go.id',
    description: 'Portal lelang dan pengadaan barang/jasa elektronik serta pendaftaran e-Katalog lokal produk UMKM Sukoharjo.',
    isIntegrated: true,
  },
  {
    id: 'app-ak1',
    name: 'E-Makaryo & Kartu Kuning AK-1',
    category: 'Ketenagakerjaan',
    department: 'Disperinaker Sukoharjo',
    url: '#',
    description: 'Pencetakan kartu pencari kerja AK-1 ber-barcode resmi dan info lowongan kerja industri daerah Sukoharjo.',
    isIntegrated: true,
  }
];

export const SUKOHARJO_LOCATIONS_DATA: ServiceLocation[] = [
  {
    id: 'loc-mpp',
    name: 'Mal Pelayanan Publik (MPP) Sevaka Bhakti Wijaya',
    category: 'layanan_utama',
    categoryLabel: 'Mal Pelayanan Publik',
    badgeColor: '#006699',
    address: 'Jl. Jenderal Sudirman No. 199, Gabusan, Jombor, Kec. Bendosari, Kabupaten Sukoharjo',
    district: 'Bendosari',
    coordinates: [-7.680521, 110.835842],
    operatingHours: 'Senin - Kamis 08.00 - 15.00 WIB, Jumat 08.00 - 11.30 WIB',
    phone: '(0271) 593003',
    whatsapp: '08112652199',
    email: 'dpmptsp@sukoharjokab.go.id',
    headOfficer: 'Drs. Ronald Situmorang, M.Si (Kepala DPMPTSP)',
    featuredServices: [
      'Perekaman & Cetak Fisik KTP-el / KIA',
      'Perizinan Usaha OSS-RBA & IMB / PBG',
      'Layanan Pembayaran Pajak Daerah & Samsat Online',
      'Layanan Kepesertaan BPJS Kesehatan & Ketenagakerjaan',
      'Layanan Pembuatan Paspor Keimigrasian & SKCK Online'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.680521,110.835842',
    description: 'Pusat pelayanan publik terintegrasi satu atap Kabupaten Sukoharjo yang menghimpun 32 loket instansi vertikal, perbankan, BUMN/BUMD, dan dinas teknis daerah dengan sistem antrean cerdas.',
    isMainHub: true,
  },
  {
    id: 'loc-rsud-soekarno',
    name: 'RSUD Ir. Soekarno Kabupaten Sukoharjo',
    category: 'kesehatan',
    categoryLabel: 'Rumah Sakit Umum Daerah',
    badgeColor: '#059669',
    address: 'Jl. Dr. Muwardi No. 56, Gayam, Kec. Sukoharjo, Kabupaten Sukoharjo',
    district: 'Sukoharjo',
    coordinates: [-7.674815, 110.841528],
    operatingHours: 'IGD & Rawat Inap: 24 Jam Non-Stop | Poliklinik Rawat Jalan: 07.30 - 14.00 WIB',
    phone: '(0271) 593118',
    whatsapp: '08112643118',
    email: 'rsud@sukoharjokab.go.id',
    headOfficer: 'dr. H. Yunia Wahdiyati (Direktur RSUD)',
    featuredServices: [
      'Instalasi Gawat Darurat (IGD) 24 Jam & Trauma Center',
      '32 Poliklinik Rawat Jalan Spesialis & Sub-Spesialis',
      'Unit Hemodialisa (Cuci Darah Modern)',
      'Laboratorium Patologi & Radiologi Digital CT-Scan',
      'Ambulans Gawat Darurat Siaga 119'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.674815,110.841528',
    description: 'Rumah sakit rujukan utama tipe B milik Pemerintah Kabupaten Sukoharjo dengan fasilitas lengkap, akreditasi paripurna, dan sistem booking antrean digital terintegrasi Mobile JKN.',
    isMainHub: true,
  },
  {
    id: 'loc-menara-wijaya',
    name: 'Gedung Menara Wijaya (Disdukcapil & Setda Sukoharjo)',
    category: 'layanan_utama',
    categoryLabel: 'Pusat Pemerintahan Terpadu',
    badgeColor: '#004F75',
    address: 'Kompleks Kantor Bupati Sukoharjo, Jl. Jenderal Sudirman No. 199, Sukoharjo',
    district: 'Sukoharjo',
    coordinates: [-7.681142, 110.836412],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 593001',
    whatsapp: '081393001999',
    email: 'disdukcapil@sukoharjokab.go.id',
    headOfficer: 'Drs. Budi Santoso, M.Si (Kadisdukcapil)',
    featuredServices: [
      'Penerbitan Akta Kelahiran, Kematian, & Perkawinan',
      'Aktivasi Identitas Kependudukan Digital (IKD Nasional)',
      'Pengurusan Pindah Datang Antar-Kabupaten/Provinsi',
      'Layanan Sekretariat Daerah & Bagian Tata Pemerintahan',
      'Konsultasi Perencanaan Pembangunan & Bappeda'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.681142,110.836412',
    description: 'Ikon gedung administrasi setinggi 10 lantai di pusat kota Sukoharjo yang menjadi sentral koordinasi kebijakan daerah, administrasi kependudukan, serta pelayanan surat kedinasan.',
    isMainHub: true,
  },
  {
    id: 'loc-sentra-jamu',
    name: 'Sentra Industri & Pasar Jamu Herbal Indonesia Nguter',
    category: 'ekonomi_khusus',
    categoryLabel: 'Sentra Kearifan Lokal & Ekonomi',
    badgeColor: '#D97706',
    address: 'Jl. Raya Wonogiri - Sukoharjo KM 10, Dusun Jamu, Pengkol, Kec. Nguter, Kabupaten Sukoharjo',
    district: 'Nguter',
    coordinates: [-7.747230, 110.887215],
    operatingHours: 'Senin - Sabtu 08.00 - 17.00 WIB, Minggu 08.00 - 14.00 WIB',
    phone: '(0271) 594210',
    whatsapp: '082133445566',
    email: 'jamu.sukoharjo@gmail.com',
    headOfficer: 'Bpk. Suwito Raharjo (Ketua Koperasi Jamu Persada)',
    featuredServices: [
      'Pasar Perdagangan Bahan Baku Herbal & Simplisia Kering',
      'Gedung Sentra Ekstraksi & Pengolahan Jamu Terstandar',
      'Fasilitasi Sertifikasi Izin Edar BPOM & Halal Produk Herbal',
      'Pusat Wisata Edukasi Sejarah Jamu Sukoharjo',
      'Kemitraan Petani Tanaman Obat Keluarga (TOGA)'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.747230,110.887215',
    description: 'Pusat kebanggaan Sukoharjo sebagai "Kota Jamu Indonesia". Fasilitas hilirisasi pengolahan obat tradisional dan jamu herbal terintegrasi, melayani ribuan perajin dan industri kecil menengah.',
    isMainHub: true,
  },
  {
    id: 'loc-kec-sukoharjo',
    name: 'Kantor Kecamatan Sukoharjo Kota',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Veteran No. 1, Jetis, Kec. Sukoharjo, Kabupaten Sukoharjo (57512)',
    district: 'Sukoharjo',
    coordinates: [-7.6845, 110.8389],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 593021',
    whatsapp: '085700112201',
    featuredServices: [
      'Perekaman KTP-el & Legalisir Surat Kependudukan',
      'Rekomendasi Izin Keramaian & Izin Bangunan Sederhana',
      'Pelayanan Administrasi Kesejahteraan Sosial (DTKS/PBI)',
      'Konsultasi Pembinaan Kelurahan & LPMK'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.6845,110.8389',
    description: 'Kantor pelayanan publik wilayah ibukota Kabupaten Sukoharjo membawahi 14 kelurahan dengan loket PATEN berstandar modern.'
  },
  {
    id: 'loc-kec-grogol',
    name: 'Kantor Kecamatan Grogol',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Raya Grogol No. 42, Grogol, Kec. Grogol, Kabupaten Sukoharjo (57552)',
    district: 'Grogol',
    coordinates: [-7.5996, 110.8164],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 621008',
    whatsapp: '085700112202',
    featuredServices: [
      'Layanan PATEN Kependudukan Cepat',
      'Verifikasi Izin Usaha Perdagangan & Jasa Solobaru',
      'Pendaftaran Surat Keterangan Ahli Waris',
      'Pelayanan Pajak Daerah & PBB P2 Perkotaan'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.5996,110.8164',
    description: 'Wilayah pertumbuhan ekonomi dan kawasan niaga modern Solo Baru, memberikan layanan PATEN cepat untuk warga dan pelaku usaha perkotaan.'
  },
  {
    id: 'loc-kec-kartasura',
    name: 'Kantor Kecamatan Kartasura',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Ahmad Yani No. 120, Kartasura, Kabupaten Sukoharjo (57169)',
    district: 'Kartasura',
    coordinates: [-7.5519, 110.7412],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 780045',
    whatsapp: '085700112203',
    featuredServices: [
      'Perekaman KTP Elektronik & Cetak KIA',
      'Surat Keterangan Domisili Usaha & Lembaga',
      'Rekomendasi Bantuan Sosial & KIP Daerah',
      'Pelayanan Pembayaran PBB P2 Online'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.5519,110.7412',
    description: 'Pusat pelayanan kawasan segitiga emas Solo-Yogya-Semarang, melayani kebutuhan administrasi warga dan komunitas pendidikan tinggi Kartasura.'
  },
  {
    id: 'loc-kec-baki',
    name: 'Kantor Kecamatan Baki',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. WR. Supratman No. 15, Kadilangu, Kec. Baki, Kabupaten Sukoharjo (57556)',
    district: 'Baki',
    coordinates: [-7.6042, 110.7891],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 740112',
    whatsapp: '085700112204',
    featuredServices: [
      'Administrasi PATEN Kependudukan',
      'Fasilitasi Sertifikasi Halal UMKM Kuliner Baki',
      'Rekomendasi Bantuan Pertanian & Irigasi',
      'Pelayanan Surat Keterangan Tidak Mampu (SKTM)'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.6042,110.7891',
    description: 'Pusat pemerintahan wilayah Baki yang terkenal dengan sentra kuliner Nasi Liwet dan kerajinan gitar, melayani 14 desa binaan.'
  },
  {
    id: 'loc-kec-gatak',
    name: 'Kantor Kecamatan Gatak',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Stasiun Gawok No. 5, Blimbing, Kec. Gatak, Kabupaten Sukoharjo (57557)',
    district: 'Gatak',
    coordinates: [-7.5815, 110.7512],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 781203',
    whatsapp: '085700112205',
    featuredServices: [
      'Layanan PATEN Surat Pengantar & Dispensasi Nikah',
      'Pendampingan Sentra Kerajinan Rotan Trangsan',
      'Perekaman KTP-el Warga Pemula',
      'Pengurusan Rekomendasi Bantuan Alsintan'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.5815,110.7512',
    description: 'Pusat layanan masyarakat Gatak yang menjadi rumah bagi sentra mebel rotan ekspor Trangsan dan perlintasan komuter Stasiun Gawok.'
  },
  {
    id: 'loc-kec-mojolaban',
    name: 'Kantor Kecamatan Mojolaban',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Raya Bekonang - Sukoharjo No. 8, Kec. Mojolaban, Kabupaten Sukoharjo (57554)',
    district: 'Mojolaban',
    coordinates: [-7.5831, 110.8647],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 610056',
    whatsapp: '085700112206',
    featuredServices: [
      'Pelayanan Administrasi Terpadu Kependudukan',
      'Fasilitasi Izin UMKM Sentra Kerajinan Gamelan & Alkohol Teknis',
      'Pengurusan Santunan Kematian Warga',
      'Rekomendasi Tata Ruang Perdesaan'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.5831,110.8647',
    description: 'Melayani 15 desa di sisi timur Bengawan Solo termasuk sentra kerajinan gamelan tradisional Wirun dan kawasan perdagangan Bekonang.'
  },
  {
    id: 'loc-kec-polokarto',
    name: 'Kantor Kecamatan Polokarto',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Raya Polokarto - Karanganyar KM 2, Polokarto, Kabupaten Sukoharjo (57555)',
    district: 'Polokarto',
    coordinates: [-7.6364, 110.8931],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 611290',
    whatsapp: '085700112207',
    featuredServices: [
      'Layanan PATEN Kependudukan & Pindah Datang',
      'Fasilitasi Kelompok Tani & Alsintan Lumbung Padi',
      'Surat Keterangan Kesejahteraan Sosial',
      'Legalisir Berkas Administrasi Desa'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.6364,110.8931',
    description: 'Pusat pelayanan masyarakat di kawasan lumbung padi dan industri genteng Sukoharjo, membina 17 desa wilayah timur.'
  },
  {
    id: 'loc-kec-bendosari',
    name: 'Kantor Kecamatan Bendosari',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Mulur - Bendosari No. 12, Bendosari, Kabupaten Sukoharjo (57528)',
    district: 'Bendosari',
    coordinates: [-7.6821, 110.8812],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 591044',
    whatsapp: '085700112208',
    featuredServices: [
      'Perekaman KTP Elektronik & Pelayanan Akta',
      'Fasilitasi Perikanan Air Tawar Kawasan Waduk Mulur',
      'Rekomendasi Bantuan Bedah Rumah RTLH',
      'Pelayanan Pembayaran PBB Perdesaan'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.6821,110.8812',
    description: 'Kantor kecamatan di kawasan wisata alam Waduk Mulur, melayani kebutuhan administrasi warga perdesaan dan pertanian agrowisata.'
  },
  {
    id: 'loc-kec-nguter',
    name: 'Kantor Kecamatan Nguter',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Raya Solo - Wonogiri KM 18, Nguter, Kabupaten Sukoharjo (57571)',
    district: 'Nguter',
    coordinates: [-7.7381, 110.8894],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 594012',
    whatsapp: '085700112209',
    featuredServices: [
      'Layanan PATEN Kependudukan Lengkap',
      'Konsultasi Perizinan UMKM Jamu Tradisional & Pertanian',
      'Verifikasi Bantuan Sosial DTKS / PKH',
      'Surat Keterangan Catatan Kepolisian (SKCK) Pengantar'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.7381,110.8894',
    description: 'Kantor pelayanan publik di jantung industri jamu dan kawasan industri Nguter, melayani 16 desa perbatasan selatan.'
  },
  {
    id: 'loc-kec-tawangsari',
    name: 'Kantor Kecamatan Tawangsari',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Patimura No. 4, Kateguhan, Kec. Tawangsari, Kabupaten Sukoharjo (57561)',
    district: 'Tawangsari',
    coordinates: [-7.7314, 110.8197],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 595007',
    whatsapp: '085700112210',
    featuredServices: [
      'Pelayanan Administrasi Kependudukan Terpadu',
      'Rekomendasi Bantuan Pertanian Holtikultura',
      'Surat Dispensasi Nikah & Keterangan Kematian',
      'Pembinaan BUMDes & Pasar Tradisional Tawangsari'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.7314,110.8197',
    description: 'Pusat pelayanan masyarakat di kawasan perbukitan dan persawahan subur Tawangsari yang berbatasan langsung dengan Kabupaten Klaten.'
  },
  {
    id: 'loc-kec-bulu',
    name: 'Kantor Kecamatan Bulu',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Raya Bulu - Manyaran No. 7, Bulu, Kabupaten Sukoharjo (57563)',
    district: 'Bulu',
    coordinates: [-7.7885, 110.8376],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 596122',
    whatsapp: '085700112211',
    featuredServices: [
      'Perekaman KTP-el Jemput Bola Perbukitan',
      'Pelayanan Administrasi Pertanahan & PBB',
      'Pengurusan Surat Pindah Datang & Akta',
      'Fasilitasi Pariwisata Alam Batu Seribu'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.7885,110.8376',
    description: 'Kantor kecamatan di kawasan karst dan perbukitan Geopark Batu Seribu, melayani 12 desa di wilayah selatan Sukoharjo.'
  },
  {
    id: 'loc-kec-weru',
    name: 'Kantor Kecamatan Weru',
    category: 'kecamatan',
    categoryLabel: 'Kantor Kecamatan',
    badgeColor: '#1E293B',
    address: 'Jl. Candi Rejo - Karakan No. 3, Weru, Kabupaten Sukoharjo (57562)',
    district: 'Weru',
    coordinates: [-7.7712, 110.7684],
    operatingHours: 'Senin - Kamis 07.30 - 15.30 WIB, Jumat 07.30 - 11.30 WIB',
    phone: '(0271) 597018',
    whatsapp: '085700112212',
    featuredServices: [
      'Layanan PATEN Kependudukan Desa Terpencil',
      'Fasilitasi Perajin Gerabah Tradisional & Genteng',
      'Rekomendasi Bantuan Ketahanan Pangan',
      'Pelayanan Pengaduan Bencana Kekeringan'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.7712,110.7684',
    description: 'Kantor pemerintahan di ujung barat daya Sukoharjo yang kaya tradisi kerajinan gerabah tanah liat, melayani 14 desa perbatasan Klaten & DIY.'
  },
  {
    id: 'loc-polres-sukoharjo',
    name: 'Polres Sukoharjo (Sentra Pelayanan Kepolisian Terpadu)',
    category: 'layanan_utama',
    categoryLabel: 'Instansi Vertikal & Kepolisian',
    badgeColor: '#1E3A8A',
    address: 'Jl. Jaksa Agung R. Soeprapto No. 15, Sukoharjo (57512)',
    district: 'Sukoharjo',
    coordinates: [-7.6881, 110.8339],
    operatingHours: 'SPKT & Layanan Darurat 110: 24 Jam Non-Stop | SKCK & SIM: 08.00 - 14.00 WIB',
    phone: '(0271) 593110',
    whatsapp: '081234567110',
    headOfficer: 'Kapolres Sukoharjo',
    featuredServices: [
      'Sentra Pelayanan Kepolisian Terpadu (SPKT) 24 Jam',
      'Penerbitan & Perpanjangan SIM di Satpas Satlantas',
      'Penerbitan Surat Keterangan Catatan Kepolisian (SKCK)',
      'Laporan Kehilangan Barang / Dokumen Berharga',
      'Call Center Darurat Bebas Pulsa 110'
    ],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-7.6881,110.8339',
    description: 'Pusat pelayanan keamanan, ketertiban, administrasi perizinan, penerbitan SIM serta pengaduan masyarakat hukum di Kabupaten Sukoharjo.'
  }
];

