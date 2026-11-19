import React, { useState } from 'react';
import { 
  Building2, 
  HeartPulse, 
  Sparkles, 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  Award, 
  Compass, 
  TreePine, 
  Wheat, 
  Flame, 
  Bed, 
  ChevronRight 
} from 'lucide-react';

export const RegionalPotentialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mpp' | 'rsud' | 'potensi'>('mpp');

  const scrollToMap = () => {
    const el = document.getElementById('peta-layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-rose-700 dark:text-rose-500" />
              <span>Sentra Pelayanan &amp; Potensi Daerah</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-500 dark:text-slate-400">Kabupaten Sukoharjo Makmur</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fasilitas Terpadu &amp; Warisan Unggulan Daerah
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed">
              Mengenal pusat layanan satu atap Mal Pelayanan Publik (MPP), rumah sakit rujukan tipe B RSUD Ir. Soekarno, serta potensi unggulan ekonomi kerakyatan Sukoharjo dari sentra herbal jamu hingga ekspor mebel rotan dunia.
            </p>
          </div>

          {/* Quick Segmented Nav Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('mpp')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'mpp'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Mal Pelayanan Publik (MPP)</span>
            </button>
            <button
              onClick={() => setActiveTab('rsud')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'rsud'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>RSUD Ir. Soekarno</span>
            </button>
            <button
              onClick={() => setActiveTab('potensi')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'potensi'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Potensi &amp; Sentra Unggulan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Body Content based on Active Tab */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Tab 1: Mal Pelayanan Publik (MPP) */}
        {activeTab === 'mpp' && (
          <div className="space-y-10">
            {/* Hero Card for MPP */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wide mb-2">
                      <Building2 className="w-4 h-4 text-rose-700 dark:text-rose-500" />
                      <span>Gedung Pelayanan Terpadu Satu Atap</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                      Mal Pelayanan Publik (MPP) Sevaka Bhakti Wijaya
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 mt-3 leading-relaxed">
                      Wadah integrasi pelayanan publik terpadu yang memadukan <strong>32 instansi</strong> pemerintah daerah, kementerian/lembaga vertikal, BUMN, dan BUMD dalam satu atap yang nyaman, bersih, dan modern.
                    </p>

                    {/* MPP Key Details */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" /> Jam Buka Pelayanan:
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          Senin – Kamis: 08.00 – 15.00 WIB<br />Jumat: 08.00 – 14.30 WIB
                        </span>
                      </div>

                      <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" /> Lokasi Pelayanan:
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          Gedung Menara Wijaya Lt. 1, Jl. Jend. Sudirman 199, Sukoharjo
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Predikat WBK Wilayah Bebas Korupsi dari KemenPAN-RB</span>
                    </span>
                    <button
                      onClick={scrollToMap}
                      className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Lihat Rute di Peta Bawah &darr;</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative bg-slate-900 min-h-[320px]">
                  <img
                    src="src/assets/images/mal pelayanan publik.png"
                    alt="Interior Mal Pelayanan Publik Sukoharjo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="font-bold text-white text-sm">Loket Terpadu Ramah Inklusi</div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Fasilitas jalur tunanetra (guiding block), lift difabel, kursi roda, dan ruang laktasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gerai Instansi Terintegrasi di MPP */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="max-w-3xl mb-6">
                <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                  Daftar Layanan Terpadu
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Gerai Instansi Vertikal, BUMN, &amp; OPD di MPP Sukoharjo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Masyarakat dapat mengurus beragam keperluan administrasi hukum, kepolisian, perbankan, dan perpajakan tanpa harus bepergian ke kantor terpisah.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {[
                  {
                    name: 'Disdukcapil Sukoharjo',
                    services: 'Cetak fisik KTP-el, KIA, Akta Kelahiran, Aktivasi IKD Mobile',
                    counter: 'Loket 01 - 04',
                  },
                  {
                    name: 'DPMPTSP Sukoharjo',
                    services: 'Penerbitan NIB OSS RBA, Izin Usaha Mikro, Persetujuan Bangunan (PBG)',
                    counter: 'Loket 05 - 08',
                  },
                  {
                    name: 'Bapenda Kabupaten Sukoharjo',
                    services: 'Cek PBB-P2, cetak e-STTS, pembayaran pajak daerah & reklame',
                    counter: 'Loket 09 - 10',
                  },
                  {
                    name: 'Polres Sukoharjo',
                    services: 'Perpanjangan SIM A & C, Penerbitan SKCK online, tilang ETLE',
                    counter: 'Loket 11 - 13',
                  },
                  {
                    name: 'KPP Pratama Sukoharjo',
                    services: 'Pendaftaran NPWP, validasi NIK-NPWP, pelaporan SPT Tahunan',
                    counter: 'Loket 14 - 15',
                  },
                  {
                    name: 'Kantor Pertanahan (ATR/BPN)',
                    services: 'Informasi sertifikat tanah, balik nama waris, roya sertifikat hak milik',
                    counter: 'Loket 16 - 17',
                  },
                  {
                    name: 'BPJS Kesehatan Kantor Cabang',
                    services: 'Pendaftaran peserta mandiri, aktivasi kartu KIS, mutasi faskes',
                    counter: 'Loket 18 - 19',
                  },
                  {
                    name: 'BPJS Ketenagakerjaan (BPJAMSOSTEK)',
                    services: 'Klaim JHT & JKK, pendaftaran pekerja Bukan Penerima Upah (BPU)',
                    counter: 'Loket 20',
                  },
                  {
                    name: 'Bank Jateng Kantor Kas MPP',
                    services: 'Pembayaran retribusi daerah, setoran kas daerah, pembukaan rekening',
                    counter: 'Loket 21 - 22',
                  },
                  {
                    name: 'Kantor Imigrasi Surakarta (Unit Layanan)',
                    services: 'Layanan paspor elektronik & reguler, perpanjangan paspor WNI',
                    counter: 'Loket 23 - 24',
                  },
                  {
                    name: 'Kementerian Agama (Kemenag)',
                    services: 'Konsultasi nikah, rekomendasi haji/umrah, sertifikasi halal produk',
                    counter: 'Loket 25',
                  },
                  {
                    name: 'PT Pos Indonesia & BUMD',
                    services: 'Meterai elektronik (e-Meterai), pengiriman berkas dokumen, legalisir',
                    counter: 'Loket 26 - 28',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-750 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="font-mono font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/70 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900">
                          {item.counter}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.name}</h4>
                      <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">{item.services}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fasilitas Inklusif */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Fasilitas Penunjang Standar Aksesibilitas Nasional
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 text-center">
                  <div className="text-rose-700 dark:text-rose-400 font-bold mb-1">Ramah Disabilitas</div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">Ramp kursi roda landai &amp; toilet khusus difabel berstandar SNI.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 text-center">
                  <div className="text-rose-700 dark:text-rose-400 font-bold mb-1">Ruang Laktasi &amp; Bayi</div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">Bilik nyaman untuk ibu menyusui dan perawatan balita.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 text-center">
                  <div className="text-rose-700 dark:text-rose-400 font-bold mb-1">Pojok Bermain Anak</div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">Arena edukatif ramah anak agar orang tua dapat mengurus berkas dengan tenang.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 text-center">
                  <div className="text-rose-700 dark:text-rose-400 font-bold mb-1">Pojok Baca &amp; Wifi</div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">Koleksi perpustakaan daerah, tablet digital, dan internet cepat gratis.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: RSUD Ir. Soekarno Kabupaten Sukoharjo */}
        {activeTab === 'rsud' && (
          <div className="space-y-10">
            {/* Hero Card for RSUD */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide mb-2">
                      <HeartPulse className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Rumah Sakit Daerah Rujukan Tipe B</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                      RSUD Ir. Soekarno Kabupaten Sukoharjo
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 mt-3 leading-relaxed">
                      Pusat pelayanan kesehatan rujukan utama terakreditasi Paripurna (Bintang Lima) oleh KARS. Dilengkapi dengan instalasi gawat darurat (IGD) 24 jam terpadu PONEK, unit perawatan intensif (ICU/NICU/PICU), serta layanan kateterisasi jantung (Cath Lab).
                    </p>

                    {/* RSUD Key Details */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                          <Phone className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" /> IGD &amp; Ambulans 24 Jam:
                        </span>
                        <span className="font-bold text-rose-700 dark:text-rose-400 font-mono text-sm">
                          (0271) 593116 / PSC 119
                        </span>
                      </div>

                      <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" /> Alamat Faskes:
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          Jl. Dr. Muwardi No. 56, Gayam, Sukoharjo
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Terakreditasi Paripurna KARS &amp; Ramah BPJS Kesehatan</span>
                    </span>
                    <button
                      onClick={scrollToMap}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Lokasi RSUD di Peta &darr;</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative bg-slate-900 min-h-[320px]">
                  <img
                    src="/assets/images/rsud_healthcare_service_1791897667542.jpg"
                    alt="Poliklinik dan Fasilitas Medis RSUD Ir. Soekarno Sukoharjo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="font-bold text-white text-sm">Layanan Spesialis &amp; Bedah Modern</div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Didukung oleh 48 dokter spesialis dan sub-spesialis terkemuka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ketersediaan Tempat Tidur (Bed Management Real-time) */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                    Sistem Bed Management Terintegrasi
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Ketersediaan Tempat Tidur Rawat Inap RSUD
                  </h3>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Update real-time sistem SIRANAP Kemenkes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
                {[
                  { class: 'Kelas VVIP', total: 8, available: 3, color: 'text-slate-900 dark:text-white' },
                  { class: 'Kelas VIP', total: 24, available: 6, color: 'text-slate-900 dark:text-white' },
                  { class: 'Kelas 1 (BPJS)', total: 42, available: 11, color: 'text-slate-900 dark:text-white' },
                  { class: 'Kelas 2 (BPJS)', total: 64, available: 18, color: 'text-slate-900 dark:text-white' },
                  { class: 'Kelas 3 (PBI)', total: 110, available: 26, color: 'text-emerald-700 dark:text-emerald-400' },
                  { class: 'ICU / ICCU', total: 16, available: 4, color: 'text-rose-700 dark:text-rose-400' },
                ].map((bed, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 text-center">
                    <Bed className="w-5 h-5 mx-auto text-slate-400 dark:text-slate-500 mb-2" />
                    <span className="text-slate-600 dark:text-slate-400 block text-[11px] font-medium">{bed.class}</span>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span className={`text-2xl font-black font-mono ${bed.color}`}>{bed.available}</span>
                      <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">/ {bed.total}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-1">Kamar Tersedia</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Layanan Unggulan RSUD Soekarno */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400">01 / JANTUNG &amp; VASKULAR</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Unit Kateterisasi Jantung (Cath Lab)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                  Layanan angiografi dan pemasangan ring jantung (stent) oleh tim dokter spesialis jantung intervensi tanpa harus dirujuk ke luar kota.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">02 / GINJAL &amp; HEMODIALISA</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Unit Cuci Darah 40 Mesin</h4>
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                  Kapasitas 40 mesin hemodialisa modern dengan kenyamanan ruang ber-AC, didukung perawat bersertifikasi ginjal dan hipertensi terakreditasi.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400">03 / GAWAT DARURAT</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">PSC 119 Sukoharjo Makmur Siaga</h4>
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                  Penjemputan pasien kritis di rumah atau korban kecelakaan jalan raya gratis oleh tim paramedis ambulans siaga 24 jam se-Sukoharjo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Potensi & Sentra Unggulan Daerah */}
        {activeTab === 'potensi' && (
          <div className="space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                Ekonomi Kreatif &amp; Budaya Lokal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Kekayaan Unggulan Sukoharjo Makmur
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Kabupaten Sukoharjo dianugerahi potensi industri kreatif, tradisi jamu herbal turun-temurun, kerajinan mebel berstandar global, serta ketahanan pangan lumbung padi Jawa Tengah.
              </p>
            </div>

            {/* Grid 4 Potensi Utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Potensi 1: Sentra Jamu Nguter */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative aspect-16/9 bg-slate-900">
                    <img
                      src="/assets/images/sukoharjo_jamu_heritage_1791897667176.jpg"
                      alt="Sentra Jamu Tradisional Nguter Sukoharjo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Warisan Leluhur Dunia
                      </span>
                      <h3 className="text-lg font-bold text-white">Sukoharjo Kota Jamu (Sentra Nguter)</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                      Kecamatan Nguter merupakan sentra perajin jamu tradisional terbesar di Indonesia dengan keberadaan <strong>Pasar Jamu Nguter</strong> dan Koperasi Jamu Indonesia (KOJAI). Pemkab Sukoharjo memfasilitasi sertifikasi Halal (SEHATI), uji mutu P-IRT, hingga pendampingan digitalisasi e-Katalog bagi 250+ kelompok pengrajin jamu gendong dan herbal seduh.
                    </p>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/50 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200">
                      <strong>Layanan Terpadu Terkait:</strong> Pendampingan izin edar BPOM dan fasilitasi pameran ekspor rempah difasilitasi Dinas Koperasi &amp; UMKM.
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs mt-4">
                  <span className="text-slate-500 dark:text-slate-400">Lokasi: Kecamatan Nguter</span>
                  <button
                    onClick={scrollToMap}
                    className="text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 font-semibold flex items-center gap-1"
                  >
                    <span>Cek di Peta Bawah</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Potensi 2: Mebel & Rotan Trangsan Gatak */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative aspect-16/9 bg-slate-900">
                    <img
                      src="/assets/images/hero_sukoharjo_civic_1791897665007.jpg"
                      alt="Industri Mebel Rotan Trangsan Sukoharjo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1">
                        <TreePine className="w-3.5 h-3.5" /> Ekspor Manca Negara
                      </span>
                      <h3 className="text-lg font-bold text-white">Sentra Kerajinan Mebel &amp; Rotan Trangsan</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                      Desa Wisata Trangsan di Kecamatan Gatak adalah sentra industri rotan tersohor yang telah mengekspor furnitur, kursi santai, keranjang, dan ornamen dekoratif ke lebih dari 30 negara termasuk Amerika Serikat, Jerman, Prancis, dan Jepang. Didukung perajin berpengalaman puluhan tahun dengan sentuhan desain kontemporer.
                    </p>
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-950 dark:text-emerald-200">
                      <strong>Layanan Terpadu Terkait:</strong> Pengurusan izin ekspor NIB OSS dan sertifikasi SVLK (Legalitas Kayu &amp; Rotan) di MPP Sukoharjo.
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs mt-4">
                  <span className="text-slate-500 dark:text-slate-400">Lokasi: Desa Trangsan, Kec. Gatak</span>
                  <button
                    onClick={scrollToMap}
                    className="text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 font-semibold flex items-center gap-1"
                  >
                    <span>Cek di Peta Bawah</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Potensi 3: Sentra Gamelan Wirun Mojolaban */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wide mb-2">
                    <Flame className="w-4 h-4 text-rose-700 dark:text-rose-500" />
                    <span>Warisan Budaya UNESCO</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Desa Pengrajin Gamelan Wirun Mojolaban
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-2 leading-relaxed">
                    Desa Wirun di Kecamatan Mojolaban terkenal sebagai pusat pembuatan gamelan perunggu dan kuningan berkualitas adiluhung. Setiap set gong, kempul, kenong, dan saron ditempa secara tradisional melalui pembakaran suhu tinggi oleh empu berpengalaman. Produk gamelan Wirun menjadi instrumen musik keraton dan digunakan universitas-universitas seni di Eropa, Amerika, dan Asia.
                  </p>

                  <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750 text-xs text-slate-700 dark:text-slate-300">
                    <strong>Pelestarian Kebudayaan:</strong> Dinas Pendidikan &amp; Kebudayaan Sukoharjo secara rutin mengadakan pembinaan sanggar dan registrasi Warisan Budaya Takbenda (WBTb).
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Lokasi: Desa Wirun, Kec. Mojolaban</span>
                  <span className="font-semibold text-rose-700 dark:text-rose-400">Kawasan Wisata Seni Tradisi</span>
                </div>
              </div>

              {/* Potensi 4: Lumbung Padi IP 400 & Ketahanan Pangan */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-2">
                    <Wheat className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                    <span>Penyangga Pangan Nasional</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Lumbung Padi Modern &amp; Pertanian IP 400
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-2 leading-relaxed">
                    Kabupaten Sukoharjo merupakan salah satu produsen beras utama di Jawa Tengah. Melalui inovasi Indeks Pertanaman (IP) 400, petani Sukoharjo mampu memanen padi hingga 4 kali dalam kurun satu tahun pada lahan yang sama. Didukung sistem irigasi teknis Waduk Mulur dan saluran Bengawan Solo, serta mekanisasi pertanian canggih.
                  </p>

                  <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/50 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200">
                    <strong>Layanan Petani Terpadu:</strong> Pendaftaran Asuransi Usaha Tani Padi (AUTP) Rp 0 subsidi Pemkab dan penyaluran pupuk bersubsidi melalui Kartu Tani.
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Lokasi: Hamparan Sawah 12 Kecamatan</span>
                  <span className="font-semibold text-amber-800 dark:text-amber-400">Swasembada Beras Terpadu</span>
                </div>
              </div>
            </div>

            {/* Destinasi Wisata Unggulan Sukoharjo */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Destinasi Wisata Unggulan Kabupaten Sukoharjo
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Rekomendasi destinasi rekreasi alam, pemandian alami, dan situs bersejarah yang dapat dikunjungi masyarakat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Geopark Batu Seribu Bulu</div>
                  <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                    Kawasan wisata alam pegunungan kars di Kecamatan Bulu dengan kolam renang sumber mata air alami, jalur trekking bukit, dan gardu pandang panorama.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Waduk Mulur Bendosari</div>
                  <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                    Danau buatan luas di Kecamatan Bendosari dengan pemandangan senja eksotis, area memancing, bumi perkemahan, dan pusat budidaya ikan air tawar.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Pesanggrahan Langenharjo Grogol</div>
                  <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                    Situs cagar budaya peninggalan Keraton Kasunanan Surakarta di tepi Bengawan Solo, terkenal dengan pemandian air belerang hangat alami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Quiet Banner at the bottom linking to Footer Map */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>
              Ingin melihat titik lokasi koordinat MPP, RSUD Soekarno, dan 12 Kantor Kecamatan?
            </span>
          </div>
          <button
            onClick={scrollToMap}
            className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-bold flex items-center gap-2 transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Buka Mini Peta Layanan di Footer &darr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
