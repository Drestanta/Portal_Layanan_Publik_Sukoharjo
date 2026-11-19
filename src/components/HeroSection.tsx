import React from 'react';
import { Search, ArrowRight, ShieldCheck, CreditCard, Stethoscope, FileText, Building2 } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectQuickCategory: (cat: string) => void;
  onOpenQuickService: (serviceId: string) => void;
  onScrollToCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenQuickService,
  onScrollToCatalog,
}) => {
  const quickShortcuts = [
    { id: 'ktp-el', title: 'Cetak KTP-el / KIA', icon: FileText, cat: 'kependudukan' },
    { id: 'rsud-antrean', title: 'Antrean RSUD Soekarno', icon: Stethoscope, cat: 'kesehatan' },
    { id: 'pbb-cek-bayar', title: 'Cek Pajak e-PBB', icon: CreditCard, cat: 'pajak' },
    { id: 'izin-umkm-oss', title: 'Izin Usaha NIB', icon: Building2, cat: 'perizinan' },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 via-white to-slate-50/60 dark:from-rose-950/20 dark:via-slate-900 dark:to-slate-950/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition & Search */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed human editorial kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase">
              <span>Pemerintah Kabupaten Sukoharjo</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Portal Layanan Terpadu SPBE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              Layanan Publik Sukoharjo, Lebih Cepat, Mudah, dan Transparan.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Akses terintegrasi administrasi kependudukan, antrean rumah sakit, perpajakan daerah, dan perizinan usaha dalam satu portal resmi Kabupaten Sukoharjo.
            </p>

            {/* Global Search Bar */}
            <div className="pt-2">
              <div className="relative max-w-xl group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari layanan (contoh: KTP, Antrean RSUD, PBB, NIB, Bansos)..."
                  className="w-full pl-11 pr-28 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-4 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all text-sm font-medium shadow-xs"
                />
                <button
                  onClick={onScrollToCatalog}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Cari</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Search Suggestions */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-medium">Paling sering dicari:</span>
                <button
                  onClick={() => setSearchQuery('KTP')}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-medium"
                >
                  KTP Elektronik
                </button>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <button
                  onClick={() => setSearchQuery('PBB')}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-medium"
                >
                  e-PBB Sukoharjo
                </button>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <button
                  onClick={() => setSearchQuery('RSUD')}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-medium"
                >
                  RSUD Ir. Soekarno
                </button>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <button
                  onClick={() => setSearchQuery('NIB')}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-medium"
                >
                  Izin Usaha UMKM
                </button>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <button
                  onClick={() => setSearchQuery('PRASOJO')}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-medium"
                >
                  PRASOJO Adminduk
                </button>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3">
                Akses Kilat Layanan Warga
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quickShortcuts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onOpenQuickService(item.id)}
                      className="flex flex-col items-start p-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 rounded-xl hover:border-rose-600 dark:hover:border-rose-500 hover:shadow-sm transition-all text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 flex items-center justify-center mb-2 group-hover:bg-rose-700 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-rose-700 dark:group-hover:text-rose-400">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Ajukan Online
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Civic Landmark */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-4/3 group">
              <img
                src="src/assets/images/kabupaten sukoharjo.png"
                alt="Pusat Pemerintahan dan Alun-Alun Satya Negara Kabupaten Sukoharjo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-[11px] font-medium text-amber-300 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sukoharjo Makmur Berkemajuan</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Pusat Pemerintahan &amp; Pelayanan Publik Terpadu
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Mengintegrasikan 12 kecamatan di Sukoharjo untuk menghadirkan birokrasi yang melayani tanpa hambatan jarak dan waktu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Rigor Proof Strip (Adjacency Rule) */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              12
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
              Kecamatan Terpadu
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Pelayanan terhubung dari Grogol hingga Weru
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
              Bebas Pungli (Rp 0)
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Layanan kependudukan &amp; perizinan resmi gratis
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              98.4%
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
              Indeks Kepuasan (IKM)
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Berdasarkan 45.200 ulasan warga Sukoharjo
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              &lt; 24 Jam
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
              Rata-rata Respon SLA
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Sesuai standar pelayanan minimum (SPM)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
