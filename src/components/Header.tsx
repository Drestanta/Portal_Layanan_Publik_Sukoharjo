import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Menu, X } from 'lucide-react';

export type AppView = 'home' | 'layanan-dinas' | 'transparansi' | 'sentra-potensi' | 'faq' | 'design-system';

interface HeaderProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  brandTheme?: 'inaku' | 'inapas' | 'inagov';
  setBrandTheme?: (brand: 'inaku' | 'inapas' | 'inagov') => void;
  textSize?: 'normal' | 'large' | 'xl';
  setTextSize?: (size: 'normal' | 'large' | 'xl') => void;
  highContrast?: boolean;
  setHighContrast?: (val: boolean) => void;
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
  onOpenAuth: () => void;
  userAuthenticated: boolean;
  userName?: string;
  onNavigateToTab?: (tab: 'layanan' | 'dinas') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  brandTheme: _brandTheme,
  setBrandTheme: _setBrandTheme,
  textSize: _textSize,
  setTextSize: _setTextSize,
  highContrast: _highContrast,
  setHighContrast: _setHighContrast,
  darkMode: _darkMode,
  setDarkMode: _setDarkMode,
  onOpenAuth,
  userAuthenticated,
  userName,
  onNavigateToTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: AppView, tab?: 'layanan' | 'dinas') => {
    setActiveView(view);
    if (tab && onNavigateToTab) {
      onNavigateToTab(tab);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Main Bar: Zone 1 (Wordmark) — Zone 2 (4 Nav Links) — Zone 3 (1 Primary Action + Mobile Hamburger) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-slate-900 dark:text-white group whitespace-nowrap shrink-0 text-left focus:outline-none"
        >
          <img
            src="src/assets/images/logo .png"
            alt="Lambang Kabupaten Sukoharjo"
            className="w-8 h-10 object-contain drop-shadow-xs shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg leading-tight text-slate-900 dark:text-white">
              Portal Sukoharjo
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              KABUPATEN SUKOHARJO MAKMUR
            </span>
          </div>
        </button>

        {/* Zone 2: Desktop 4 Clean Navigation Links (Hidden on small/minimized screens) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeView === 'home'
                ? 'text-rose-700 dark:text-rose-400 font-bold border-b-2 border-rose-700 dark:border-rose-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Beranda
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('layanan-dinas', 'layanan')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeView === 'layanan-dinas'
                ? 'text-rose-700 dark:text-rose-400 font-bold border-b-2 border-rose-700 dark:border-rose-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Layanan &amp; Dinas Daerah
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('transparansi')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeView === 'transparansi'
                ? 'text-rose-700 dark:text-rose-400 font-bold border-b-2 border-rose-700 dark:border-rose-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Transparansi
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('sentra-potensi')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeView === 'sentra-potensi'
                ? 'text-rose-700 dark:text-rose-400 font-bold border-b-2 border-rose-700 dark:border-rose-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Sentra &amp; Potensi Daerah
          </button>
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenAuth}
            className="px-3 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white shadow-xs focus-visible:outline-2 focus-visible:outline-rose-700"
          >
            {userAuthenticated ? (
              <>
                <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span className="truncate max-w-[100px] sm:max-w-[130px] font-bold">{userName || 'Akun Warga'}</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-rose-200" />
                <span>Masuk / Daftar</span>
              </>
            )}
          </button>

          {/* Mobile Navigation Toggle (Visible when minimized / small screen) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-800 dark:text-slate-100" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800 dark:text-slate-100" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Collapsible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-4 space-y-1.5 shadow-lg animate-fade-in">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              activeView === 'home'
                ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>Beranda</span>
            {activeView === 'home' && <span className="w-2 h-2 rounded-full bg-rose-600" />}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('layanan-dinas', 'layanan')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              activeView === 'layanan-dinas'
                ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>Layanan &amp; Dinas Daerah</span>
            {activeView === 'layanan-dinas' && <span className="w-2 h-2 rounded-full bg-rose-600" />}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('transparansi')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              activeView === 'transparansi'
                ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>Transparansi</span>
            {activeView === 'transparansi' && <span className="w-2 h-2 rounded-full bg-rose-600" />}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('sentra-potensi')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              activeView === 'sentra-potensi'
                ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>Sentra &amp; Potensi Daerah</span>
            {activeView === 'sentra-potensi' && <span className="w-2 h-2 rounded-full bg-rose-600" />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
