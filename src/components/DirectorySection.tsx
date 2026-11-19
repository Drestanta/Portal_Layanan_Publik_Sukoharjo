import React, { useState, useMemo } from 'react';
import { AgencyItem, AgencyType } from '../types';
import { SUKOHARJO_AGENCIES_DATA, SUKOHARJO_DIGITAL_SERVICES } from '../data/mockData';
import { 
  Building2, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Briefcase,
  Smartphone,
  X
} from 'lucide-react';

interface DirectorySectionProps {
  onSelectServiceApp?: (appName: string) => void;
}

const AGENCY_TYPE_TABS: { id: AgencyType | 'semua' | 'aplikasi'; label: string }[] = [
  { id: 'semua', label: 'Semua Instansi' },
  { id: 'aplikasi', label: 'Aplikasi & Portal Digital' },
  { id: 'dinas', label: 'Dinas Daerah' },
  { id: 'badan', label: 'Badan Daerah' },
  { id: 'bagian_setda', label: 'Bagian Setda' },
  { id: 'instansi_vertikal', label: 'Instansi Vertikal' },
  { id: 'bumd', label: 'BUMD & BLUD' },
  { id: 'kecamatan', label: '12 Kecamatan' },
];

export const DirectorySection: React.FC<DirectorySectionProps> = () => {
  const [selectedType, setSelectedType] = useState<AgencyType | 'semua' | 'aplikasi'>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgency, setSelectedAgency] = useState<AgencyItem | null>(null);

  // Filtered agencies
  const filteredAgencies = useMemo(() => {
    return SUKOHARJO_AGENCIES_DATA.filter((agency) => {
      const matchType = selectedType === 'semua' || agency.type === selectedType;
      const matchSearch =
        !searchQuery ||
        agency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agency.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agency.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agency.mainDuties.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agency.keyServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchType && matchSearch;
    });
  }, [selectedType, searchQuery]);

  // Filtered apps
  const filteredApps = useMemo(() => {
    return SUKOHARJO_DIGITAL_SERVICES.filter((app) => {
      return (
        !searchQuery ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <section id="direktori" className="py-8 bg-transparent">
      <div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase mb-1">
              <span>Sesuai Struktur Resmi portal.sukoharjokab.go.id</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">Pemerintah Kabupaten Sukoharjo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Direktori Dinas, Badan, Instansi &amp; Layanan Publik
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Daftar lengkap Organisasi Perangkat Daerah (OPD), Bagian di Sekretariat Daerah, Instansi Vertikal, BUMD, 12 Kecamatan, serta ekosistem aplikasi resmi Sukoharjo.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Building2 className="w-4 h-4 text-rose-700 dark:text-rose-400" />
            <span>Total <strong className="text-slate-900 dark:text-white">{SUKOHARJO_AGENCIES_DATA.length}</strong> Unit Kerja Terdaftar</span>
          </div>
        </div>

        {/* Search Bar for Directory */}
        <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dinas, badan, bagian Setda, kecamatan, atau nama aplikasi (contoh: Disdukcapil, BPKPAD, PRASOJO, Grogol, Hukum)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 font-medium"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
            {AGENCY_TYPE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap border ${
                  selectedType === tab.id
                    ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: Aplikasi & Portal Digital */}
        {selectedType === 'aplikasi' ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                <span>Ekosistem Aplikasi &amp; Layanan Publik Digital Sukoharjo</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {filteredApps.length} Aplikasi Terhubung
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750 p-5 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-rose-700 dark:text-rose-400">{app.category}</span>
                      <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Terintegrasi SPBE
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                      {app.name}
                    </h4>

                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
                      Pengelola: {app.department}
                    </span>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                      {app.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
                    <span className="text-slate-400 dark:text-slate-500 text-[11px]">Resmi Pemkab Sukoharjo</span>
                    {app.url && app.url !== '#' ? (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 font-semibold inline-flex items-center gap-1 py-1"
                      >
                        <span>Akses Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px]">Tersedia di MPP Sukoharjo</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* View Mode 2: Direktori Unit Kerja & Instansi */
          <div>
            {filteredAgencies.length === 0 ? (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-10 text-center max-w-md mx-auto">
                <Building2 className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Instansi tidak ditemukan</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tidak ada data yang cocok dengan pencarian &quot;{searchQuery}&quot;. Silakan coba kata kunci lain.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredAgencies.map((agency) => (
                  <div
                    key={agency.id}
                    className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-750 p-5 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Quiet Unboxed Metadata Line */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                        <span className="font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wide">
                          {agency.typeLabel}
                        </span>
                        <span className="font-mono text-slate-400 dark:text-slate-500">{agency.shortName}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {agency.name}
                      </h3>

                      {agency.headOfAgency && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span>Pimpinan: <strong className="text-slate-700 dark:text-slate-300">{agency.headOfAgency}</strong></span>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                        {agency.mainDuties}
                      </p>

                      {/* Contact & Location Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-start gap-1.5 line-clamp-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                          <span className="truncate">{agency.address}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span className="font-mono text-[11px]">{agency.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setSelectedAgency(agency)}
                        className="text-rose-700 dark:text-rose-400 hover:text-rose-900 dark:hover:text-rose-300 font-semibold inline-flex items-center gap-1 py-1"
                      >
                        <span>Lihat Tugas &amp; Layanan</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {agency.website && (
                        <a
                          href={agency.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                          title="Buka situs web resmi"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Agency Detail Modal */}
        {selectedAgency && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div 
              className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-750"
              role="dialog"
              aria-modal="true"
              aria-labelledby="agency-modal-title"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-slate-900 dark:bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-semibold text-rose-300 uppercase tracking-wider">
                    {selectedAgency.typeLabel} · Pemerintah Kabupaten Sukoharjo
                  </span>
                  <h3 id="agency-modal-title" className="text-base font-bold text-white mt-0.5">
                    {selectedAgency.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedAgency(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
                  aria-label="Tutup jendela rincian instansi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 text-xs text-slate-700 dark:text-slate-300">
                {/* Info contact box */}
                <div className="p-4 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">Alamat Kantor:</strong> {selectedAgency.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0" />
                    <span><strong className="text-slate-900 dark:text-white">Kontak / Telepon:</strong> {selectedAgency.phone}</span>
                  </div>
                  {selectedAgency.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0" />
                      <span><strong className="text-slate-900 dark:text-white">Email Resmi:</strong> {selectedAgency.email}</span>
                    </div>
                  )}
                  {selectedAgency.headOfAgency && (
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0" />
                      <span><strong className="text-slate-900 dark:text-white">Pimpinan:</strong> {selectedAgency.headOfAgency}</span>
                    </div>
                  )}
                </div>

                {/* Tugas Pokok */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1.5">
                    Tugas Pokok &amp; Fungsi
                  </h4>
                  <p className="leading-relaxed bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-3 text-slate-600 dark:text-slate-300">
                    {selectedAgency.mainDuties}
                  </p>
                </div>

                {/* Layanan Utama */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-2">
                    Layanan Publik &amp; Kewenangan Utama
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedAgency.keyServices.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800 dark:text-slate-200">{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aplikasi Digital */}
                {selectedAgency.digitalApps && selectedAgency.digitalApps.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-2">
                      Aplikasi Digital Unggulan
                    </h4>
                    <div className="space-y-2">
                      {selectedAgency.digitalApps.map((app, idx) => (
                        <div key={idx} className="p-3 bg-rose-50/60 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-rose-900 dark:text-rose-300">{app.name}</span>
                            {app.url && (
                              <a
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-semibold text-rose-700 dark:text-rose-400 hover:underline flex items-center gap-1"
                              >
                                <span>Buka</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-350 mt-0.5">{app.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Data Terverifikasi PPID &amp; portal.sukoharjokab.go.id
                </span>
                <button
                  onClick={() => setSelectedAgency(null)}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
