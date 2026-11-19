import React from 'react';
import { MapPin, Phone, Mail, PhoneCall } from 'lucide-react';
import { CompactFooterMap } from './CompactFooterMap';
import { AppView } from './Header';

interface FooterProps {
  onSelectView: (view: AppView) => void;
  onNavigateToTab?: (tab: 'layanan' | 'dinas') => void;
}

const SukoharjoLogo: React.FC = () => {
  return (
    <img
      src="src/assets/images/logo .png"
      alt="Lambang Kabupaten Sukoharjo"
      className="w-9 h-11 object-contain shrink-0 drop-shadow-md"
    />
  );
};

export const Footer: React.FC<FooterProps> = ({ 
  onSelectView, 
}) => {
  return (
    <footer id="peta-layanan" className="bg-[#0B0F19] text-slate-300 border-t border-slate-800/80 text-xs relative overflow-x-auto">
      {/* Subtle Dot Matrix Background Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Main Container maintains identical 4-column layout both in fullscreen and when minimized */}
      <div className="min-w-[1100px] max-w-7xl mx-auto px-6 sm:px-8 py-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Kolom 1: Logo & Kontak Darurat (3 cols) */}
          <div className="col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <SukoharjoLogo />
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight leading-tight">
                  Portal Sukoharjo
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  Kabupaten Sukoharjo
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Portal Resmi Kabupaten Sukoharjo
            </p>

            {/* Kontak Darurat 24 Jam */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Panggilan Darurat 24 Jam:</span>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:112"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 transition-colors group cursor-pointer"
                  title="Hubungi Darurat Pemkab 112 (Bebas Pulsa)"
                >
                  <span className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    112
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-rose-300 transition-colors">
                      Darurat Pemkab
                    </div>
                    <div className="text-[10px] text-slate-400">Bebas Pulsa · Siaga 24 Jam</div>
                  </div>
                </a>

                <a
                  href="tel:119"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 transition-colors group cursor-pointer"
                  title="Hubungi PSC Ambulans RSUD 119"
                >
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    119
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      PSC Ambulans RSUD
                    </div>
                    <div className="text-[10px] text-slate-400">Medis Kedaruratan Nonstop</div>
                  </div>
                </a>

                <a
                  href="tel:110"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 transition-colors group cursor-pointer"
                  title="Hubungi Polres Sukoharjo 110"
                >
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    110
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                      Polres Sukoharjo
                    </div>
                    <div className="text-[10px] text-slate-400">Siaga Kamtibmas</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigasi (2 cols) */}
          <div className="col-span-2">
            <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">
              NAVIGASI
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left font-medium"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectView('layanan-dinas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left font-medium"
                >
                  Layanan &amp; Dinas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectView('transparansi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left font-medium"
                >
                  Transparansi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectView('sentra-potensi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left font-medium"
                >
                  Sentra &amp; Potensi
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak (3 cols) */}
          <div className="col-span-3">
            <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">
              KONTAK
            </h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-slate-300 pt-1">
                  Jl. Jend. Sudirman No.199, Sukoharjo, Jawa Tengah
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-xs sm:text-sm">
                  <a 
                    href="tel:0271593068" 
                    className="hover:text-white transition-colors text-slate-300 font-medium"
                  >
                    (0271) 593068
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-xs sm:text-sm min-w-0">
                  <a 
                    href="mailto:pemkab@sukoharjokab.go.id" 
                    className="hover:text-white transition-colors text-slate-300 font-medium truncate block"
                  >
                    pemkab@sukoharjokab.go.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 4: Peta Lokasi (4 cols) */}
          <div className="col-span-4">
            <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">
              PETA LOKASI
            </h4>
            <CompactFooterMap />
          </div>
        </div>

        {/* Quiet Bottom Copyright & Info */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-row items-center justify-between gap-4 text-[11px] text-slate-500 whitespace-nowrap">
          <div>
            &copy; {new Date().getFullYear()} Pemerintah Kabupaten Sukoharjo. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">SPBE Sukoharjo Makmur</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Standar INA Digital Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
