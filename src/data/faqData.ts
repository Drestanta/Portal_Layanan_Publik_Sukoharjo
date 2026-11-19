export interface FAQItem {
  id: string;
  category: 'kependudukan' | 'kesehatan' | 'perizinan' | 'pengaduan' | 'umum';
  categoryLabel: string;
  shortTitle: string;
  question: string;
  answer: string;
  highlights?: string[];
  actionLabel?: string;
  actionTarget?: 'layanan-dinas' | 'transparansi' | 'sentra-potensi';
}

export const SUKOHARJO_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'kependudukan',
    categoryLabel: 'Administrasi Kependudukan',
    shortTitle: 'Cara Cetak KTP-el, KIA, & Kartu Keluarga Online',
    question: 'Bagaimana cara mengajukan cetak KTP-el, KIA, atau Kartu Keluarga baru secara daring?',
    answer: 'Warga Kabupaten Sukoharjo dapat mengajukan permohonan melalui menu "Layanan & Dinas Daerah" pada portal ini atau aplikasi PRASOJO Disdukcapil. Cukup pilih layanan yang dibutuhkan, isi formulir digital dengan NIK, dan unggah foto dokumen persyaratan (seperti foto KK atau Surat Kehilangan Kepolisian). Berkas diproses dalam 1x24 jam kerja dan fisik kartu dapat diambil di Mal Pelayanan Publik (MPP) atau kantor kecamatan domisili Anda.',
    highlights: [
      'Biaya resmi: Rp 0 (100% Gratis Tanpa Pungli)',
      'Estimasi penyelesaian: 1 Hari Kerja (24 Jam)',
      'Bisa diambil di loket MPP Sukoharjo atau 12 Kantor Kecamatan',
    ],
    actionLabel: 'Buka Katalog Layanan Adminduk',
    actionTarget: 'layanan-dinas',
  },
  {
    id: 'faq-2',
    category: 'umum',
    categoryLabel: 'Ketentuan & Biaya',
    shortTitle: 'Biaya Pengurusan & Kebijakan Bebas Pungli (Rp 0)',
    question: 'Apakah seluruh layanan perizinan dan kependudukan di Sukoharjo bebas biaya (Rp 0)?',
    answer: 'Ya. Pemerintah Kabupaten Sukoharjo menerapkan prinsip Zona Integritas Wilayah Bebas Korupsi (WBK). Seluruh pelayanan administrasi kependudukan (KTP-el, KIA, Akta Kelahiran, KK), pembuatan Kartu Kuning AK-1 Disperinaker, serta perizinan usaha mikro (NIB OSS RBA) adalah GRATIS (Rp 0). Biaya resmi yang berlaku hanyalah pembayaran Pajak Daerah (seperti PBB-P2 atau BPHTB) dan retribusi yang ditetapkan oleh Peraturan Daerah, yang dibayarkan langsung secara nontunai melalui QRIS atau transfer Bank Jateng ke Rekening Kas Umum Daerah.',
    highlights: [
      'Tidak ada pungutan liar dalam bentuk apa pun',
      'Pembayaran pajak & retribusi resmi menggunakan QRIS/e-Channel',
      'Tanda terima sah e-STTS langsung terbit otomatis',
    ],
    actionLabel: 'Lihat Standar Transparansi',
    actionTarget: 'transparansi',
  },
  {
    id: 'faq-3',
    category: 'kesehatan',
    categoryLabel: 'Kesehatan & Rumah Sakit',
    shortTitle: 'Pendaftaran Antrean Online & Bed RSUD Ir. Soekarno',
    question: 'Bagaimana cara mendaftar antrean online dan memeriksa ketersediaan kamar rawat inap di RSUD Ir. Soekarno?',
    answer: 'Pendaftaran rawat jalan ke 24 poliklinik spesialis RSUD Ir. Soekarno dapat dilakukan secara mandiri secara daring H-1 sebelum jadwal kunjungan dengan memasukkan NIK atau nomor kartu BPJS Kesehatan aktif. Anda akan langsung menerima kode booking dan estimasi jam periksa. Ketersediaan tempat tidur rawat inap (VVIP, VIP, Kelas 1, Kelas 2, Kelas 3 BPJS, hingga ICU) dapat dipantau secara real-time pada halaman "Sentra & Potensi Daerah". Untuk kondisi gawat darurat, tim PSC 119 ambulans siaga 24 jam bebas pulsa.',
    highlights: [
      'Reservasi dokter spesialis H-1 tanpa perlu mengantre pagi',
      'Integrasi antrean digital Mobile JKN BPJS Kesehatan',
      'Hotline IGD Darurat: (0271) 593116 / Ambulans PSC 119',
    ],
    actionLabel: 'Cek Profil & Fasilitas RSUD',
    actionTarget: 'sentra-potensi',
  },
  {
    id: 'faq-4',
    category: 'umum',
    categoryLabel: 'Fasilitas Terpadu MPP',
    shortTitle: 'Lokasi & 32 Gerai Pelayanan MPP Sevaka Bhakti Wijaya',
    question: 'Di mana lokasi Mal Pelayanan Publik (MPP) Sevaka Bhakti Wijaya dan instansi apa saja yang ada di sana?',
    answer: 'Mal Pelayanan Publik (MPP) Kabupaten Sukoharjo beralamat di Gedung Menara Wijaya Lantai 1, Jl. Jenderal Sudirman No. 199, Sukoharjo. MPP menghadirkan 32 instansi pemerintah daerah, kepolisian, kementerian vertikal, dan BUMD/BUMN dalam satu lantai. Warga dapat mengurus perpanjangan SIM A/C dan SKCK di loket Polres, pembayaran pajak dan sertifikat tanah di loket BPN/KPP Pratama, kepesertaan BPJS, serta izin usaha DPMPTSP tanpa harus berpindah kantor.',
    highlights: [
      'Jam buka: Senin - Kamis (08.00 - 15.00 WIB) & Jumat (08.00 - 14.30 WIB)',
      '32 gerai terpadu dalam 1 gedung ber-AC',
      'Fasilitas inklusif: Kursi roda gratis, lift difabel, ruang laktasi, & arena bermain anak',
    ],
    actionLabel: 'Lihat Detail 32 Gerai MPP',
    actionTarget: 'sentra-potensi',
  },
  {
    id: 'faq-5',
    category: 'pengaduan',
    categoryLabel: 'Pelacakan Dokumen & Aduan',
    shortTitle: 'Cara Melacak Posisi Resi Permohonan Berkas',
    question: 'Bagaimana cara melacak posisi berkas permohonan yang telah saya ajukan?',
    answer: 'Setiap permohonan yang diajukan melalui portal ini akan mendapatkan Nomor Resi Registrasi resmi berformat SKH-2026-XXXX. Masukkan nomor tersebut pada kolom "Cek Progres Resi" di Beranda atau buka halaman "Transparansi Pelayanan Publik". Anda akan melihat status berkas (Diajukan, Verifikasi, Diproses Cetak, atau Selesai), riwayat petugas yang memproses, catatan disposisi resmi, serta estimasi tanggal selesai.',
    highlights: [
      'Lacak status kapan saja 24/7 tanpa perlu datang ke kantor dinas',
      'Notifikasi tahapan pemrosesan transparan',
      'Unduh tanda terima elektronik permohonan',
    ],
    actionLabel: 'Buka Halaman Lacak Resi',
    actionTarget: 'transparansi',
  },
  {
    id: 'faq-6',
    category: 'pengaduan',
    categoryLabel: 'Aspirasi & Lapor Makmur',
    shortTitle: 'Pengaduan Layanan via Lapor Makmur & Call Center 112',
    question: 'Ke mana saya harus melapor jika menemukan lampu PJU mati, jalan berlubang, atau kendala pelayanan publik?',
    answer: 'Masyarakat dapat menyampaikan laporan melalui kanal terpadu "Lapor Makmur" pada halaman Transparansi di portal ini, atau melalui SP4N LAPOR! nasional. Laporan Anda akan diteruskan langsung ke Command Center Diskominfo Sukoharjo dan OPD penanggung jawab (misalnya Dishub untuk lampu PJU atau DPUPR untuk jalan rusak). Tindak lanjut diverifikasi maksimal 1x24 jam kerja. Untuk kejadian darurat yang butuh penanganan instan (bencana, kecelakaan, kebakaran), segera hubungi Call Center Darurat 112 (Bebas Pulsa).',
    highlights: [
      'Laporan dipantau langsung oleh pimpinan daerah',
      'Estimasi respon awal ≤ 24 jam kerja',
      'Nomor darurat: 112 (Bebas Pulsa)',
    ],
    actionLabel: 'Buat Laporan di Lapor Makmur',
    actionTarget: 'transparansi',
  },
  {
    id: 'faq-7',
    category: 'perizinan',
    categoryLabel: 'UMKM & Potensi Daerah',
    shortTitle: 'Legalitas Usaha UMKM Jamu Nguter & Mebel Rotan Trangsan',
    question: 'Bagaimana bantuan bagi pelaku UMKM jamu Nguter dan mebel rotan Trangsan untuk memperoleh izin legalitas?',
    answer: 'Pemerintah Kabupaten Sukoharjo melalui Dinas Koperasi, UMKM & Perdagangan serta DPMPTSP menyediakan fasilitas asistensi terpadu gratis. Pelaku usaha jamu herbal di Nguter difasilitasi uji laboratorium higienis dan pendaftaran Sertifikasi Halal Gratis (SEHATI) bersama BPJPH Kemenag, serta izin P-IRT Dinkes. Sedangkan perajin mebel rotan di Trangsan Gatak didampingi dalam penerbitan NIB OSS RBA berbasis risiko dan pengurusan SVLK (Sertifikasi Verifikasi Legalitas Kayu/Rotan) untuk kebutuhan ekspor.',
    highlights: [
      'Pendampingan NIB OSS kilat langsung terbit',
      'Fasilitasi Sertifikasi Halal SEHATI gratis (Rp 0)',
      'Integrasi etalase e-Katalog Lokal Kabupaten Sukoharjo',
    ],
    actionLabel: 'Buka Informasi Potensi & Sentra',
    actionTarget: 'sentra-potensi',
  },
  {
    id: 'faq-8',
    category: 'umum',
    categoryLabel: 'Identitas Digital (INA Pass)',
    shortTitle: 'Integrasi Single Identity INA Pass & IKD Kemendagri',
    question: 'Apa itu INA Pass dan apa keuntungannya bagi masyarakat Sukoharjo saat menggunakan portal ini?',
    answer: 'INA Pass adalah sistem identitas digital Single Sign-On (SSO) nasional berbasis standar INA Digital (GovTech Indonesia) yang terintegrasi dengan Identitas Kependudukan Digital (IKD) Ditjen Dukcapil Kemendagri. Dengan masuk menggunakan INA Pass, Anda tidak perlu lagi mengisi ulang data NIK, nama lengkap, dan alamat setiap kali mengajukan layanan berbeda. Data Anda terlindungi dengan standar enkripsi nasional dan keabsahan identitas Anda diakui secara hukum untuk transaksi digital pemerintahan.',
    highlights: [
      'Satu akun untuk seluruh layanan publik nasional & daerah',
      'Autofill formulir aman terverifikasi IKD',
      'Mematuhi UU Perlindungan Data Pribadi (PDP)',
    ],
    actionLabel: 'Buka Katalog Layanan Digital',
    actionTarget: 'layanan-dinas',
  },
];
