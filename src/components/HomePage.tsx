import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Bell, 
  Phone, 
  Compass, 
  BarChart3,
  AlertCircle
} from 'lucide-react';
import { HeroSection } from './HeroSection';
import { PublicService, ApplicationTicket } from '../types';

interface HomePageProps {
  services: PublicService[];
  tickets: ApplicationTicket[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectService: (service: PublicService) => void;
  onApplyService: (service: PublicService) => void;
  onNavigate: (view: 'home' | 'layanan-dinas' | 'transparansi' | 'sentra-potensi' | 'faq' | 'design-system') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  services,
  tickets,
  searchQuery,
  setSearchQuery,
  onSelectService,
  onApplyService,
  onNavigate,
}) => {
  const [quickResi, setQuickResi] = useState('SKH-2026-8941');
  const [resiResult, setResiResult] = useState<ApplicationTicket | null>(tickets[0] || null);
  const [resiSearched, setResiSearched] = useState(false);

  const handleQuickResiSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResiSearched(true);
    const found = tickets.find(
      (t) => t.ticketNumber.trim().toLowerCase() === quickResi.trim().toLowerCase()
    );
    setResiResult(found || null);
  };

  const popularServices = services.filter((s) => s.isPopular).slice(0, 6);

  const civicAnnouncements = [
    {
      id: 'ann-1',
      date: '14 Oktober 2026',
      badge: 'Layanan Ekstra',
      dept: 'Disdukcapil Sukoharjo',
      title: 'Pelayanan Adminduk Weekend & Jemput Bola di The Park Solo Baru (Grogol)',
      summary: 'Warga Sukoharjo dapat melakukan perekaman KTP-el, cetak KIA, dan aktivasi IKD setiap hari Sabtu - Minggu pukul 10.00 - 19.00 WIB.',
      linkText: 'Info Loket Disdukcapil',
    },
    {
      id: 'ann-2',
      date: '12 Oktober 2026',
      badge: 'Kebijakan Fiskal',
      dept: 'Bapenda Kabupaten Sukoharjo',
      title: 'Program Bebas Denda Pajak Bumi & Bangunan (PBB-P2) Sukoharjo Makmur 2026',
      summary: 'Pembebasan sanksi administratif dan denda tunggakan PBB-P2 untuk ketetapan hingga tahun 2025. Berlaku hingga 31 Desember 2026.',
      linkText: 'Cek Tagihan e-PBB',
    },
    {
      id: 'ann-3',
      date: '10 Oktober 2026',
      badge: 'Fasilitasi UMKM',
      dept: 'Dinas Koperasi & Perdagangan',
      title: 'Pendampingan Sertifikasi Halal Gratis (SEHATI) bagi 500 Pengrajin Jamu Nguter',
      summary: 'Kerja sama Pemkab Sukoharjo bersama BPJPH Kemenag memfasilitasi uji lab higienis gratis bagi kelompok usaha jamu gendong dan herbal seduh.',
      linkText: 'Panduan Izin UMKM',
    },
    {
      id: 'ann-4',
      date: '08 Oktober 2026',
      badge: 'Kesehatan Daerah',
      dept: 'RSUD Ir. Soekarno',
      title: 'Optimalisasi Layanan Poliklinik Sore dan Reservasi Antrean Online Si-Apik',
      summary: 'Kini poli spesialis anak, penyakit dalam, dan mata buka pelayanan hingga pukul 20.00 WIB untuk memudahkan warga pekerja.',
      linkText: 'Daftar Antrean RSUD',
    },
  ];

  return (
    <div className="space-y-0 transition-colors">
      {/* 1. Hero Section with Global Search & Proof Strip */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectQuickCategory={() => {}}
        onOpenQuickService={(id) => {
          const srv = services.find((s) => s.id === id);
          if (srv) onApplyService(srv);
        }}
        onScrollToCatalog={() => onNavigate('layanan-dinas')}
      />

      {/* 2. Featured Services & Direct Actions (Zero-Pill Discipline) */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-1">
                <FileText className="w-4 h-4 text-rose-700 dark:text-rose-500" />
                <span>Pelayanan Favorit Warga Sukoharjo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Layanan Cepat &amp; Paling Sering Diakses
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                Pengurusan administrasi kependudukan, antrean medis, dan izin usaha resmi dengan biaya Rp 0 tanpa calo.
              </p>
            </div>

            <button
              onClick={() => onNavigate('layanan-dinas')}
              className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shrink-0 shadow-xs self-start md:self-auto"
            >
              <span>Buka Semua Layanan &amp; Dinas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-750 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-650 transition-all hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className="font-mono text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase">
                      {service.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-700 space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center justify-between">
                      <span>Estimasi SLA:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{service.sla}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Biaya Retribusi:</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono">{service.cost}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700 grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="w-full py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-semibold transition-colors text-center"
                  >
                    Detail Syarat
                  </button>
                  <button
                    type="button"
                    onClick={() => onApplyService(service)}
                    className="w-full py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg font-semibold transition-colors text-center shadow-xs"
                  >
                    Ajukan Online
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quick Ticket Tracking Box & Direct Link to Transparansi */}
      <section className="py-14 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-rose-700 dark:text-rose-500" />
                <span>Pelayanan Transparan &amp; Akuntabel</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Cek Progres Resi Permohonan Anda
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Pantau setiap tahapan verifikasi, cetak blangko, hingga tanda tangan elektronik berkas secara langsung dengan nomor resi resmi.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('transparansi')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 transition-colors"
                >
                  <span>Buka Halaman Transparansi, IKM &amp; APBD Sukoharjo &rarr;</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
                <form onSubmit={handleQuickResiSearch} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={quickResi}
                      onChange={(e) => setQuickResi(e.target.value)}
                      placeholder="Masukkan resi (contoh: SKH-2026-8941)..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs whitespace-nowrap"
                  >
                    <span>Cek Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Tracking Fast Result Card */}
                {resiResult ? (
                  <div className="mt-5 p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-700 pb-3">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400">
                          {resiResult.ticketNumber}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                          {resiResult.serviceName}
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-rose-700 text-white self-start sm:self-auto">
                        {resiResult.statusLabel}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span>Pemohon: <strong className="text-slate-900 dark:text-slate-200">{resiResult.applicantName}</strong> ({resiResult.subdistrict})</span>
                      <button
                        type="button"
                        onClick={() => onNavigate('transparansi')}
                        className="text-rose-700 dark:text-rose-400 hover:underline font-semibold text-xs flex items-center gap-1"
                      >
                        <span>Lihat Timeline &amp; Riwayat Lengkap &rarr;</span>
                      </button>
                    </div>
                  </div>
                ) : resiSearched ? (
                  <div className="mt-5 p-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 rounded-2xl text-xs text-rose-900 dark:text-rose-200 flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0" />
                    <span>Nomor resi &quot;{quickResi}&quot; tidak ditemukan. Periksa kembali nomor registrasi Anda.</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Berita & Pengumuman Pelayanan Publik */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-1">
              <Bell className="w-4 h-4 text-rose-700 dark:text-rose-500" />
              <span>Kabar Pelayanan Terkini</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pengumuman &amp; Kebijakan Daerah
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Informasi terkini jadwal pelayanan khusus, pembebasan sanksi administrasi, dan pendampingan izin masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {civicAnnouncements.map((ann) => (
              <div
                key={ann.id}
                className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-750 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-650 transition-all hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider text-[11px]">
                      {ann.badge} · {ann.dept}
                    </span>
                    <span className="font-mono text-[11px]">{ann.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {ann.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-2 leading-relaxed">
                    {ann.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">Pemerintah Kab. Sukoharjo</span>
                  <button
                    onClick={() => onNavigate('layanan-dinas')}
                    className="text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 font-semibold flex items-center gap-1"
                  >
                    <span>{ann.linkText} &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Teaser Cards to Dedicated Pages: Transparansi & Sentra Potensi */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Transparansi Pelayanan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-1">
                  Halaman Khusus
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Transparansi Pelayanan Publik
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Akses rincian skor Indeks Kepuasan Masyarakat (IKM 88.42), indeks evaluasi SPBE KemenPAN-RB (4.12), ringkasan APBD 2026, dokumen SAKIP/LPPD, serta kanal pengaduan warga Lapor Makmur.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigate('transparansi')}
                  className="w-full py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Buka Halaman Transparansi &rarr;</span>
                </button>
              </div>
            </div>

            {/* Card 2: Sentra Pelayanan & Potensi */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-1">
                  Halaman Khusus
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Sentra Pelayanan &amp; Potensi Daerah
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Ketahui profil Mal Pelayanan Publik (MPP) Sevaka Bhakti Wijaya dengan 32 gerai terpadu, RSUD Ir. Soekarno tipe B, Sentra Jamu Nguter, mebel rotan Trangsan, dan gamelan Wirun.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigate('sentra-potensi')}
                  className="w-full py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Buka Halaman Sentra &amp; Potensi &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
