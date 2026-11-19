import React, { useState, useMemo } from 'react';
import { PublicService, ServiceCategory } from '../types';
import { FileText, Clock, BadgeCheck, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface ServicesCatalogProps {
  services: PublicService[];
  searchQuery: string;
  onSelectService: (service: PublicService) => void;
  onApplyService: (service: PublicService) => void;
}

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'semua', label: 'Semua Layanan' },
  { id: 'kependudukan', label: 'Kependudukan' },
  { id: 'kesehatan', label: 'Kesehatan & RSUD' },
  { id: 'pajak', label: 'Pajak Daerah (PBB)' },
  { id: 'perizinan', label: 'Perizinan (OSS)' },
  { id: 'sosial', label: 'Bansos & DTKS' },
  { id: 'ketenagakerjaan', label: 'Ketenagakerjaan' },
  { id: 'umkm_pertanian', label: 'UMKM & Sentra Jamu' },
];

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  services,
  searchQuery,
  onSelectService,
  onApplyService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('semua');

  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      const matchCategory = selectedCategory === 'semua' || srv.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [services, selectedCategory, searchQuery]);

  return (
    <section id="layanan" className="py-8 bg-transparent">
      <div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase mb-1">
              Katalog Terintegrasi · SPBE Sukoharjo
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pusat Layanan Berbasis Kebutuhan Warga
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Dikelompokkan menurut kebutuhan langsung masyarakat tanpa sekat birokrasi, dilengkapi transparansi waktu penyelesaian (SLA) dan persyaratan resmi.
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Menampilkan <span className="font-mono font-bold text-slate-900 dark:text-white">{filteredServices.length}</span> dari {services.length} layanan terdaftar
          </div>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 border ${
                selectedCategory === cat.id
                  ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-lg mx-auto">
            <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Layanan tidak ditemukan</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tidak ada layanan yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba cari dengan kata kunci lain seperti &quot;KTP&quot;, &quot;Pajak&quot;, atau &quot;Kesehatan&quot;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-md transition-all flex flex-col justify-between p-5 group"
              >
                <div>
                  {/* Unboxed Metadata Line (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-medium text-rose-800 dark:text-rose-400">{service.categoryLabel}</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="truncate">{service.department.split('(')[0]}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service SLA & Cost specs (Unboxed quiet typography) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5" /> Estimasi SLA:
                      </span>
                      <span className="font-medium text-slate-800 dark:text-slate-200 font-mono text-[11px]">
                        {service.sla}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <BadgeCheck className="w-3.5 h-3.5" /> Biaya Resmi:
                      </span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        {service.cost}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 transition-colors flex items-center gap-1 py-1"
                  >
                    <span>Syarat &amp; Prosedur</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onApplyService(service)}
                    className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <span>Ajukan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Single Identity & IKD Callout */}
        <div className="mt-12 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Inovasi GovTech Terpadu Sukoharjo</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Satu Akun INA Pass untuk Seluruh Layanan Pemkab Sukoharjo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Masyarakat tidak perlu lagi membuat akun berulang kali untuk setiap dinas. Cukup gunakan akun <strong>Identitas Kependudukan Digital (IKD)</strong> atau NIK yang terverifikasi untuk mengakses layanan administrasi kependudukan, kesehatan, perpajakan, dan perizinan usaha.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                const ktpSrv = services.find(s => s.id === 'ktp-el');
                if (ktpSrv) onApplyService(ktpSrv);
              }}
              className="px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs whitespace-nowrap"
            >
              Aktivasi IKD Digital
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
