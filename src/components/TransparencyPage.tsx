import React, { useState } from 'react';
import { 
  BarChart3, 
  Award, 
  CheckCircle2, 
  Clock, 
  Download, 
  FileText, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  ExternalLink
} from 'lucide-react';
import { ApplicationTicket } from '../types';
import { TrackingSection } from './TrackingSection';
import { ComplaintSection } from './ComplaintSection';

interface TransparencyPageProps {
  tickets: ApplicationTicket[];
}

export const TransparencyPage: React.FC<TransparencyPageProps> = ({ tickets }) => {
  const [activeTab, setActiveTab] = useState<'lacak' | 'ikm' | 'dokumen' | 'aduan'>('lacak');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const publicDocuments = [
    {
      id: 'doc-apbd-2026',
      title: 'Ringkasan APBD Kabupaten Sukoharjo Tahun Anggaran 2026',
      category: 'Keuangan & Anggaran Daerah',
      publisher: 'Badan Pengelolaan Keuangan, Pendapatan dan Aset Daerah (BPKPAD)',
      size: '2.4 MB',
      date: 'Januari 2026',
      status: 'Terpublikasi Sah',
      highlight: 'Alokasi Belanja Publik 64.2% untuk infrastruktur, kesehatan & pendidikan',
    },
    {
      id: 'doc-sakip-2025',
      title: 'Laporan Kinerja Instansi Pemerintah (LKjIP / SAKIP) Nilai "A"',
      category: 'Akuntabilitas Kinerja',
      publisher: 'Bagian Organisasi Sekretariat Daerah Sukoharjo',
      size: '4.8 MB',
      date: 'Desember 2025',
      status: 'Predikat Memuaskan (A)',
      highlight: 'Capaian 94.6% target indikator kinerja utama pembangunan daerah',
    },
    {
      id: 'doc-spbe-2025',
      title: 'Laporan Hasil Evaluasi SPBE Sukoharjo (Indeks 4.12 - Sangat Baik)',
      category: 'Tata Kelola Digital',
      publisher: 'Dinas Komunikasi dan Informatika Sukoharjo',
      size: '1.9 MB',
      date: 'November 2025',
      status: 'KemenPAN-RB',
      highlight: 'Peringkat 5 Besar Nasional Tata Kelola Sistem Elektronik Daerah',
    },
    {
      id: 'doc-ikm-semester',
      title: 'Laporan Survei Kepuasan Masyarakat (IKM) Unit Layanan Semester II',
      category: 'Survei Mutu Layanan',
      publisher: 'Pemerintah Kabupaten Sukoharjo & BPS',
      size: '3.1 MB',
      date: 'Januari 2026',
      status: 'Skor 88.42 (Sangat Baik)',
      highlight: 'Tingkat kepuasan tertinggi pada MPP dan RSUD Ir. Soekarno',
    },
    {
      id: 'doc-maklumat-pelayanan',
      title: 'Maklumat Standar Pelayanan Minimal (SPM) 40+ Layanan Daerah',
      category: 'Standar Pelayanan',
      publisher: 'DPMPTSP & Disdukcapil Sukoharjo',
      size: '1.2 MB',
      date: '2026',
      status: 'Berlaku Efektif',
      highlight: 'Komitmen bebas biaya Rp 0 dan garansi penyelesaian &le; 24 Jam',
    },
    {
      id: 'doc-lppd-2025',
      title: 'Ringkasan Laporan Penyelenggaraan Pemerintahan Daerah (RLPPD)',
      category: 'Pemerintahan Daerah',
      publisher: 'Sekretariat Daerah Kabupaten Sukoharjo',
      size: '3.6 MB',
      date: 'Maret 2026',
      status: 'Terverifikasi Kemendagri',
      highlight: 'Transparansi program kerja dan realisasi janji bupati dan wakil bupati',
    },
  ];

  const handleSimulateDownload = (docTitle: string) => {
    setDownloadSuccess(docTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4500);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-rose-700 dark:text-rose-500" />
              <span>Transparansi Pelayanan Publik</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-500 dark:text-slate-400">Kabupaten Sukoharjo Makmur</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Keterbukaan Data &amp; Kinerja Layanan
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed">
              Pemerintah Kabupaten Sukoharjo berkomitmen membuka akses informasi kinerja birokrasi, pelacakan proses permohonan warga secara real-time, evaluasi Indeks Kepuasan Masyarakat (IKM), serta pertanggungjawaban dokumen publik.
            </p>
          </div>

          {/* Quick Segmented Nav Tabs for Transparency */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('lacak')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'lacak'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Lacak Resi Dokumen</span>
              <span className="flex items-center gap-1 text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-mono px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-800 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </button>
            <button
              onClick={() => setActiveTab('ikm')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'ikm'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Indeks Kepuasan &amp; SPBE</span>
            </button>
            <button
              onClick={() => setActiveTab('dokumen')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'dokumen'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Dokumen Publik &amp; APBD</span>
            </button>
            <button
              onClick={() => setActiveTab('aduan')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'aduan'
                  ? 'border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Kanal Aduan Lapor Makmur</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quantified Rigor Metrics Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-4 gap-6">
            <div className="border-l-2 border-rose-600 pl-4">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-medium">
                <Award className="w-4 h-4" />
                <span>IKM Sukoharjo</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                88.42
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Mutu Layanan: <strong>Sangat Baik (A)</strong>
              </p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>Indeks SPBE</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                4.12
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Predikat: <strong>Sangat Baik</strong> (Top 5 Nasional)
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-medium">
                <Clock className="w-4 h-4" />
                <span>SLA Tepat Waktu</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                98.2%
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Dari 128.400+ permohonan terselesaikan
              </p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Biaya Resmi</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                Rp 0
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Bebas Pungli · Layanan adminduk &amp; izin UMKM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area based on Tab */}
      <div className="py-12">
        {downloadSuccess && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 px-4 py-3 rounded-xl flex items-center gap-3 text-xs animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                Dokumen <strong>{downloadSuccess}</strong> berhasil diunduh ke perangkat Anda.
              </span>
            </div>
          </div>
        )}

        {/* Tab 1: Lacak Resi Permohonan */}
        {activeTab === 'lacak' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <TrackingSection tickets={tickets} />
          </div>
        )}

        {/* Tab 2: Indeks Kepuasan & SPBE Detail */}
        {activeTab === 'ikm' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                  Hasil Pengukuran Berkala
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Evaluasi Indeks Kepuasan Masyarakat (IKM) Per Sektor Pelayanan
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Survei berkala dilaksanakan oleh Bagian Organisasi Setda bersama Badan Pusat Statistik (BPS) kepada pemohon langsung di loket pelayanan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    unit: 'Mal Pelayanan Publik (MPP)',
                    score: 92.15,
                    grade: 'Sangat Baik (A)',
                    respondents: '14.820 responden',
                    aspect: 'Kenyamanan ruangan, kepastian jam buka loket, keramahan petugas',
                  },
                  {
                    unit: 'Disdukcapil (Adminduk & PRASOJO)',
                    score: 89.60,
                    grade: 'Sangat Baik (A)',
                    respondents: '28.450 responden',
                    aspect: 'Kecepatan cetak KTP 24 jam dan kemudahan aplikasi mandiri',
                  },
                  {
                    unit: 'RSUD Ir. Soekarno Sukoharjo',
                    score: 87.80,
                    grade: 'Sangat Baik (A)',
                    respondents: '32.100 responden',
                    aspect: 'Kepastian antrean dokter spesialis dan ketersediaan obat',
                  },
                  {
                    unit: 'DPMPTSP (Izin Usaha NIB)',
                    score: 88.90,
                    grade: 'Sangat Baik (A)',
                    respondents: '9.340 responden',
                    aspect: 'Kemudahan asistensi izin UMKM gratis tanpa perantara',
                  },
                  {
                    unit: 'Bapenda (e-PBB P2)',
                    score: 86.40,
                    grade: 'Sangat Baik (A)',
                    respondents: '22.180 responden',
                    aspect: 'Kecepatan verifikasi bukti bayar QRIS dan cetak e-STTS',
                  },
                  {
                    unit: 'Pelayanan 12 Kantor Kecamatan',
                    score: 85.70,
                    grade: 'Baik (B+)',
                    respondents: '18.900 responden',
                    aspect: 'Kemudahan jangkauan desa, rekomendasi surat domisili',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-750 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-bold text-slate-900 dark:text-white">{item.unit}</span>
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-[11px]">
                          {item.grade}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                          {item.score}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">/ 100</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                        {item.aspect}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                      <span>Sampel warga:</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{item.respondents}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SPBE Breakdown */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="max-w-3xl mb-6">
                <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                  Transformasi Digital
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Arsitektur Sistem Pemerintahan Berbasis Elektronik (SPBE)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  KemenPAN-RB memberikan nilai indeks SPBE Kabupaten Sukoharjo sebesar 4.12 berkat integrasi pusat data daerah, portal layanan warga INA Ku, dan audit keamanan persandian CSIRT.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750">
                  <span className="text-slate-500 dark:text-slate-400 block mb-1">Domain Kebijakan SPBE</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">4.50</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-1 font-semibold">Predikat Sangat Memuaskan</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750">
                  <span className="text-slate-500 dark:text-slate-400 block mb-1">Domain Tata Kelola SPBE</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">4.08</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-1 font-semibold">Predikat Sangat Baik</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750">
                  <span className="text-slate-500 dark:text-slate-400 block mb-1">Domain Manajemen SPBE</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">3.95</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-1 font-semibold">Predikat Baik</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750">
                  <span className="text-slate-500 dark:text-slate-400 block mb-1">Domain Layanan Digital</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">4.25</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-1 font-semibold">Predikat Sangat Baik</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Dokumen Publik & APBD */}
        {activeTab === 'dokumen' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                    PPID Kabupaten Sukoharjo
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Dokumen Keterbukaan Informasi Publik
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Sesuai Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, seluruh dokumen berikut dapat diunduh bebas oleh masyarakat.
                  </p>
                </div>
                <a
                  href="https://ppid.sukoharjokab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors self-start shrink-0"
                >
                  <span>Portal PPID Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {publicDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 hover:border-slate-300 dark:hover:border-slate-650 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                        <span className="font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                          {doc.category}
                        </span>
                        <span className="font-mono">{doc.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-350 mt-2">
                        {doc.highlight}
                      </p>
                      <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                        Penerbit: <span className="font-medium text-slate-700 dark:text-slate-300">{doc.publisher}</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-700 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        PDF · {doc.size}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSimulateDownload(doc.title)}
                        className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh Ringkasan</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparansi Anggaran Ringkasan APBD */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Struktur Ringkas APBD Kabupaten Sukoharjo TA 2026
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Data resmi postur pendapatan dan belanja daerah untuk pembangunan merata di 12 kecamatan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-800/80">
                  <span className="text-emerald-800 dark:text-emerald-300 font-semibold block mb-1">
                    Pendapatan Daerah (Target)
                  </span>
                  <span className="text-2xl font-black text-emerald-950 dark:text-emerald-200 font-mono">
                    Rp 2,24 Triliun
                  </span>
                  <p className="text-[11px] text-emerald-800 dark:text-emerald-350 mt-2">
                    PAD Mandiri (PBB, PBJT, Retribusi): Rp 520 Miliar + Transfer Pusat/Provinsi
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-2xl border border-blue-200 dark:border-blue-800/80">
                  <span className="text-blue-800 dark:text-blue-300 font-semibold block mb-1">
                    Belanja Daerah (Alokasi)
                  </span>
                  <span className="text-2xl font-black text-blue-950 dark:text-blue-200 font-mono">
                    Rp 2,31 Triliun
                  </span>
                  <p className="text-[11px] text-blue-800 dark:text-blue-350 mt-2">
                    Prioritas: Pendidikan (23.4%), Kesehatan (17.2%), Infrastruktur (21.5%)
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/50 rounded-2xl border border-purple-200 dark:border-purple-800/80">
                  <span className="text-purple-800 dark:text-purple-300 font-semibold block mb-1">
                    Pembiayaan Netto
                  </span>
                  <span className="text-2xl font-black text-purple-950 dark:text-purple-200 font-mono">
                    Rp 70 Miliar
                  </span>
                  <p className="text-[11px] text-purple-800 dark:text-purple-350 mt-2">
                    Ditutup melalui Sisa Lebih Pembiayaan Anggaran (SILPA) tahun sebelumnya
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Kanal Aduan Warga Lapor Makmur */}
        {activeTab === 'aduan' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <ComplaintSection />
          </div>
        )}
      </div>
    </div>
  );
};
