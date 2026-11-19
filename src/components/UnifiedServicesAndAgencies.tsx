import React, { useState } from 'react';
import { PublicService } from '../types';
import { ServicesCatalog } from './ServicesCatalog';
import { DirectorySection } from './DirectorySection';
import { Layers, Building2, FileText } from 'lucide-react';

interface UnifiedServicesAndAgenciesProps {
  services: PublicService[];
  searchQuery: string;
  onSelectService: (service: PublicService) => void;
  onApplyService: (service: PublicService) => void;
  activeSubTab?: 'layanan' | 'dinas';
  onSubTabChange?: (tab: 'layanan' | 'dinas') => void;
}

export const UnifiedServicesAndAgencies: React.FC<UnifiedServicesAndAgenciesProps> = ({
  services,
  searchQuery,
  onSelectService,
  onApplyService,
  activeSubTab = 'layanan',
  onSubTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<'layanan' | 'dinas'>('layanan');

  const currentTab = onSubTabChange ? activeSubTab : internalTab;
  const setTab = (tab: 'layanan' | 'dinas') => {
    if (onSubTabChange) {
      onSubTabChange(tab);
    } else {
      setInternalTab(tab);
    }
  };

  return (
    <section id="layanan-dan-dinas" className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header & Segmented Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-rose-700 dark:text-rose-500" />
              <span>Pusat Layanan &amp; Pemerintahan Terpadu</span>
              <span aria-hidden="true">·</span>
              <span>Kabupaten Sukoharjo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Layanan Publik &amp; Dinas Daerah
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Satu pintu terintegrasi untuk mengajukan permohonan administrasi warga dan mengakses direktori resmi OPD &amp; 12 Kecamatan di Kabupaten Sukoharjo.
            </p>
          </div>

          {/* Segmented Tab Switcher (IDDS Standard) */}
          <div className="p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs flex flex-wrap items-center gap-1.5 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => setTab('layanan')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'layanan'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Katalog Layanan</span>
            </button>

            <button
              type="button"
              onClick={() => setTab('dinas')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'dinas'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Dinas &amp; OPD</span>
            </button>
          </div>
        </div>

        {/* Dynamic View: Tab 1 (Layanan) vs Tab 2 (Dinas) with smooth transition */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
          <div key={currentTab} className="animate-fade-in">
            {currentTab === 'layanan' && (
              <div className="p-4 sm:p-8">
                <ServicesCatalog
                  services={services}
                  searchQuery={searchQuery}
                  onSelectService={onSelectService}
                  onApplyService={onApplyService}
                />
              </div>
            )}

            {currentTab === 'dinas' && (
              <div className="p-4 sm:p-8">
                <DirectorySection />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
