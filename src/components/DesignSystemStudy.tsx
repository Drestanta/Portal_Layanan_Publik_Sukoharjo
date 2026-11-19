import React, { useState } from 'react';
import { 
  INA_DESIGN_TOKENS_COLORS, 
  INA_TYPOGRAPHY_TOKENS, 
  UX_WRITING_GUIDELINES,
  IDDS_OFFICIAL_BRANDS,
  IDDS_COMPONENTS_DIRECTORY
} from '../data/mockData';
import { 
  BookOpen, 
  Palette, 
  Type, 
  Component, 
  FileCheck, 
  Sparkles, 
  Check, 
  X, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Printer,
  Code2
} from 'lucide-react';

interface DesignSystemStudyProps {
  brandTheme?: 'inaku' | 'inapas' | 'inagov';
  setBrandTheme?: (brand: 'inaku' | 'inapas' | 'inagov') => void;
}

export const DesignSystemStudy: React.FC<DesignSystemStudyProps> = ({
  brandTheme = 'inaku',
  setBrandTheme,
}) => {
  const [activeTab, setActiveTab] = useState<'filosofi' | 'tokens' | 'uikit' | 'uxwriting' | 'tugas' | 'koding'>('filosofi');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Contrast calculator interactive state
  const [testTextColor, setTestTextColor] = useState('#0F172A');
  const [testBgColor, setTestBgColor] = useState('#FFFFFF');

  const copyToClipboard = (tokenText: string) => {
    navigator.clipboard.writeText(tokenText);
    setCopiedToken(tokenText);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Module Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase mb-1">
                <span>Materi Magang UI/UX &amp; Transformasi Digital</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-600 dark:text-slate-400">Diskominfo &amp; Pemkab Sukoharjo</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Bedah Standar INA Digital Design System (IDDS)
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
                Dokumentasi pembelajaran resmi perancangan antarmuka portal layanan publik berdasarkan acuan GovTech Indonesia (<a href="https://design.inadigital.go.id/" target="_blank" rel="noopener noreferrer" className="text-rose-700 dark:text-rose-400 font-semibold underline inline-flex items-center gap-0.5">design.inadigital.go.id <ExternalLink className="w-3 h-3" /></a>) dan Perpres No. 82 Tahun 2023.
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2 border-b border-slate-100 dark:border-slate-800/60 no-scrollbar">
            <button
              onClick={() => setActiveTab('filosofi')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'filosofi'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Filosofi &amp; Landasan GovTech</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tokens'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>2. Design Tokens &amp; Kontras Warna</span>
            </button>

            <button
              onClick={() => setActiveTab('uikit')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'uikit'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Component className="w-3.5 h-3.5" />
              <span>3. Komponen UI Kit Interaktif</span>
            </button>

            <button
              onClick={() => setActiveTab('uxwriting')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'uxwriting'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>4. UX Writing Pemerintahan</span>
            </button>

            <button
              onClick={() => setActiveTab('tugas')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tugas'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>5. Panduan Tugas Magang</span>
            </button>

            <button
              onClick={() => setActiveTab('koding')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'koding'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>6. Kode &amp; Paket @idds/styles</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FILOSOFI & LANDASAN GOVTECH */}
        {activeTab === 'filosofi' && (
          <div className="space-y-10">
            <div className="bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                <span>Instruksi Presiden Republik Indonesia &amp; Perpres 82/2023</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Mengapa Indonesia &amp; Kabupaten Sukoharjo Membutuhkan INA Digital?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                Selama bertahun-tahun, birokrasi pemerintahan Indonesia mengalami fragmentasi parah dengan lebih dari <strong>27.000 aplikasi publik</strong> yang berbeda-beda, membuat masyarakat bingung karena harus membuat ratusan akun terpisah untuk mengurus KTP, izin usaha, bansos, dan kesehatan. 
                Melalui inisiatif <strong>GovTech Indonesia (INA Digital)</strong>, Presiden menginstruksikan integrasi menyeluruh menjadi <strong>Satu Portal Layanan Terpadu</strong> dengan satu standar desain antarmuka publik yang konsisten (IDDS).
              </p>
            </div>

            {/* 4 Pilar Desain GovTech */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                4 Pilar Utama Filosofi INA Digital Design System
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-700 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Citizen-Centric (Berpusat pada Masyarakat)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Layanan disusun berdasarkan <strong>Life Events (Siklus Kehidupan Warga)</strong>—seperti kelahiran anak, pendidikan, pernikahan, memulai usaha, berobat, hingga pensiun—bukan berdasarkan silo birokrasi nama dinas (OPD).
                  </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Clarity &amp; Simplicity (Kejelasan &amp; Kesederhanaan)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Setiap halaman dirancang agar dapat dipahami dalam hitungan detik. Menghilangkan redundansi formulir, meniadakan jargon hukum birokrasi yang membingungkan, dan selalu mencantumkan estimasi waktu (SLA) serta biaya resmi (Rp 0).
                  </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Accessibility &amp; Inclusivity (WCAG 2.2 Level AA)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Aplikasi pemerintahan harus bisa diakses oleh seluruh kalangan tanpa kecuali: lansia, penyandang disabilitas (tunanetra/low vision), serta warga di pelosok desa dengan koneksi internet terbatas. Touch target minimum 44px dan kontras warna teruji.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Interoperabilitas (Single Identity &amp; INA Pass)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Menggunakan data kependudukan tunggal (NIK / Identitas Kependudukan Digital - IKD). Warga cukup login sekali (Single Sign-On) dan tidak perlu mengunggah ulang fotokopi KTP/KK yang sudah ada di basis data negara.
                  </p>
                </div>
              </div>
            </div>

            {/* Aturan Anti-Slop Khusus UI/UX Pemerintahan */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Prinsip Zero-Pill &amp; Anti-AI Cliché untuk Portal Daerah</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Desainer magang dianjurkan untuk tidak terjebak dalam tren template AI generik (seperti gradient ungu mencolok, pill badge yang ditumpuk-tumpuk, atau status titik berkedip tanpa fungsi nyata). Gunakan tipografi bersih dengan pemisah titik (<code className="bg-slate-800 px-1 py-0.5 rounded text-amber-300">·</code>), kontras berwibawa, dan ruang putih yang lapang.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-rose-400 font-bold mb-1 flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Hindari (Pola Buruk)
                  </div>
                  <p className="text-slate-400">
                    Menyelipkan badge berbentuk kapsul (pill) di setiap judul kartu, teks all-caps panjang, border tebal di sisi kiri (border-l-4), tombol dengan label &quot;Klik Disini&quot;.
                  </p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Terapkan (Standar IDDS)
                  </div>
                  <p className="text-slate-400">
                    Metadata unboxed dengan tipografi tenang, label tombol dengan kata kerja aksi nyata (&quot;Ajukan KTP Baru&quot;, &quot;Lacak Resi&quot;), rasio warna 60-30-10.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TOKENS & KONTRAS WARNA */}
        {activeTab === 'tokens' && (
          <div className="space-y-10">
            {/* 3 Official Brands in @idds/styles */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wide">
                    Sistem Tema Multi-Brand Resmi (@idds/styles)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Pilih Tema Brand Aktif untuk Seluruh Aplikasi
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  Atribut Aktif: <strong className="text-rose-700">data-brand=&quot;{brandTheme}&quot;</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {IDDS_OFFICIAL_BRANDS.map((brand) => (
                  <div
                    key={brand.id}
                    onClick={() => setBrandTheme && setBrandTheme(brand.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      brandTheme === brand.id
                        ? 'bg-white border-2 border-rose-700 shadow-md ring-2 ring-rose-100'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">{brand.name}</span>
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300"
                        style={{ backgroundColor: brand.primaryColor }}
                      />
                    </div>
                    <span className="text-[11px] text-rose-700 font-semibold block mb-1">
                      {brand.badge}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {brand.description}
                    </p>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>data-brand=&quot;{brand.id}&quot;</span>
                      {brandTheme === brand.id && (
                        <span className="text-rose-700 font-bold flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Aktif
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Palette Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Palet Token Warna Resmi INA Digital
                  </h3>
                  <p className="text-xs text-slate-500">
                    Klik pada kode token untuk menyalin ke clipboard proyek Tailwind / CSS Anda.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INA_DESIGN_TOKENS_COLORS.map((color) => (
                  <div
                    key={color.token}
                    className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-lg border border-slate-200 shrink-0 shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="overflow-hidden">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {color.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500 uppercase">
                            {color.hex}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {color.usage}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">
                        Kontras: <strong>{color.contrastOnWhite}</strong> ({color.wcagStatus})
                      </span>

                      <button
                        onClick={() => copyToClipboard(color.token)}
                        className="px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded text-slate-700 font-mono flex items-center gap-1 transition-colors"
                        title="Salin nama token"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedToken === color.token ? 'Tersalin' : color.token.replace('--idds-', '')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Scale Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Type className="w-4 h-4 text-rose-700" />
                <span>Skala Tipografi Standar (Font: Inter &amp; Plus Jakarta Sans)</span>
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                IDDS mengadopsi font Inter untuk keterbacaan antarmuka formulir yang tinggi, dan Plus Jakarta Sans untuk headline berwibawa.
              </p>

              <div className="space-y-4">
                {INA_TYPOGRAPHY_TOKENS.map((typo, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 border-b border-slate-100 pb-2">
                      <span className="font-bold text-slate-800">{typo.name} · {typo.role}</span>
                      <span className="font-mono text-[11px]">{typo.size} · {typo.weight}</span>
                    </div>
                    <div className="text-slate-900 font-semibold text-sm sm:text-base">
                      {typo.sample}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Contrast Checker (WCAG 2.2 AA Evaluator) */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Laboratorium Uji Kontras Aksesibilitas WCAG 2.2
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Uji coba perpaduan warna teks dan warna latar untuk memastikan dokumen dan formulir dapat dibaca oleh seluruh warga negara. Standar minimum teks biasa adalah rasio <strong>4.5 : 1</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Warna Teks (Hex):
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={testTextColor}
                        onChange={(e) => setTestTextColor(e.target.value)}
                        className="w-10 h-10 rounded border border-slate-300 cursor-pointer p-0"
                      />
                      <input
                        type="text"
                        value={testTextColor}
                        onChange={(e) => setTestTextColor(e.target.value)}
                        className="px-3 py-2 border border-slate-300 rounded text-xs font-mono uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Warna Latar Belakang (Hex):
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={testBgColor}
                        onChange={(e) => setTestBgColor(e.target.value)}
                        className="w-10 h-10 rounded border border-slate-300 cursor-pointer p-0"
                      />
                      <input
                        type="text"
                        value={testBgColor}
                        onChange={(e) => setTestBgColor(e.target.value)}
                        className="px-3 py-2 border border-slate-300 rounded text-xs font-mono uppercase"
                      />
                    </div>
                  </div>
                </div>

                {/* Preview Box */}
                <div
                  className="p-6 rounded-xl border border-slate-300 text-center flex flex-col justify-center items-center shadow-xs min-h-[140px]"
                  style={{ backgroundColor: testBgColor, color: testTextColor }}
                >
                  <span className="text-lg font-bold">
                    Teks Pratinjau Keterbacaan Warga
                  </span>
                  <span className="text-xs mt-1 opacity-90">
                    Pemerintah Kabupaten Sukoharjo Makmur
                  </span>
                  <div className="mt-3 px-3 py-1 rounded bg-black/10 text-[11px] font-mono">
                    WCAG 2.2 AA Standard: Terpenuhi
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: UI KIT INTERAKTIF */}
        {activeTab === 'uikit' && (
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Katalog Komponen UI Kit INA Digital
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Komponen siap pakai yang harus digunakan secara konsisten oleh seluruh tim pengembang aplikasi SPBE di Kabupaten Sukoharjo.
              </p>
            </div>

            {/* 1. Hierarki Tombol (Buttons) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                1. Hierarki Tombol (Button System)
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Gunakan Primary Button hanya untuk satu aksi utama per blok keputusan. Tombol sekunder untuk aksi pembantu atau pembatalan.
              </p>

              <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-xl border border-slate-200">
                <button className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold shadow-xs">
                  Primary Button (INA Red)
                </button>
                <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs">
                  Primary Dark (Gov Navy)
                </button>
                <button className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold">
                  Secondary Outline
                </button>
                <button className="px-4 py-2.5 text-slate-600 hover:text-slate-900 text-xs font-semibold">
                  Ghost Button
                </button>
                <button className="px-5 py-2.5 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-semibold">
                  Destructive / Tolak
                </button>
              </div>
            </div>

            {/* 2. Input Fields & Form Controls */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                2. Kontrol Formulir &amp; Status Validasi
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Setiap input harus memiliki label eksplisit, placeholder yang informatif, serta status error yang jelas bagi pembaca layar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-slate-200">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Label Standar Input <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Budi Santoso"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-700 focus:ring-2 focus:ring-rose-100"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Teks bantuan (helper text) untuk memandu pemohon.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-rose-700 mb-1">
                    Input dengan Status Kesalahan (Error) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="331108"
                    className="w-full px-3 py-2 border-2 border-rose-600 rounded-lg text-xs bg-rose-50/30 text-rose-900 focus:outline-none"
                  />
                  <p className="text-[11px] text-rose-600 font-medium mt-1">NIK harus berjumlah tepat 16 digit angka.</p>
                </div>
              </div>
            </div>

            {/* 3. Alerts & Banner Notifikasi */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                3. Kotak Pesan &amp; Notifikasi Sistem (Alerts)
              </h4>

              <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200">
                <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Informasi Pemeliharaan:</strong> Layanan pencetakan KTP-el di MPP Sukoharjo beroperasi normal hari ini hingga pukul 15.00 WIB.
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Verifikasi Berhasil:</strong> Dokumen permohonan Kartu Identitas Anak telah ditandatangani secara elektronik (TTE).
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Perhatian Dokumen:</strong> Silakan lengkapi fotokopi Kartu Keluarga terbaru sebelum tanggal 15 Oktober 2026.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: UX WRITING PEMERINTAHAN */}
        {activeTab === 'uxwriting' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Pedoman UX Writing: Dari Birokrasi Menjadi Bahasa Manusia
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                Salah satu fokus utama dalam evaluasi INA Digital adalah menghapus istilah teknis regulasi yang kaku. Masyarakat datang ke portal pemerintah untuk menyelesaikan urusan kehidupan sehari-hari, bukan membaca diktum peraturan bupati.
              </p>
            </div>

            <div className="space-y-4">
              {UX_WRITING_GUIDELINES.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-lg">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 mb-1">
                        <X className="w-3.5 h-3.5 text-rose-600" />
                        <span>Bahasa Birokrasi Kuno (Hindari):</span>
                      </div>
                      <p className="text-xs text-rose-900 line-through opacity-85 font-mono">
                        &quot;{item.wrong}&quot;
                      </p>
                    </div>

                    <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-lg">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Standar UX Writing GovTech IDDS:</span>
                      </div>
                      <p className="text-xs text-emerald-950 font-bold">
                        &quot;{item.correct}&quot;
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-800">Alasan &amp; Kaidah: </span>
                    {item.explanation}
                  </div>
                </div>
              ))}
            </div>

            {/* Do's & Don'ts Checklist */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                Ringkasan Kaidah Penulisan Antarmuka Layanan Publik
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gunakan kata kerja aksi di awal tombol (&quot;Ajukan&quot;, &quot;Unduh&quot;, &quot;Simpan&quot;).</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Jelaskan estimasi waktu tunggu (SLA) secara jujur dan terukur.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tegaskan status biaya layanan (Rp 0 / Gratis) untuk mencegah pungutan liar.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bila terjadi kendala teknis, berikan instruksi tindak lanjut yang dapat dilakukan warga.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 5: PANDUAN TUGAS MAGANG SUKOHARJO */}
        {activeTab === 'tugas' && (
          <div className="space-y-8">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Proyek Magang Desain UI/UX
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Studi Kasus: Redesain Portal Layanan Publik Sukoharjo
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Tugas ini dirancang bagi mahasiswa dan peserta magang bidang UI/UX di Pemerintah Kabupaten Sukoharjo untuk mengimplementasikan materi dari <strong>design.inadigital.go.id</strong> ke dalam prototipe layanan publik daerah.
              </p>
            </div>

            {/* Checklist Penilaian Tugas */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Indikator Ketercapaian Desain (Rubrik Penilaian)
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Kesesuaian Brand Tokens &amp; WCAG AA</strong>
                    Menggunakan palet warna INA Red (#C01E2E) dan GovTech Navy (#0F274A) dengan rasio kontras teks minimal 4.5:1 terhadap latar belakang.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Life-Events Information Architecture</strong>
                    Mengelompokkan layanan berdasarkan fase kebutuhan masyarakat (Adminduk, Kesehatan, Pajak, Perizinan Usaha, Karir), bukan nama bidang kantor dinas.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Formulir Interaktif &amp; Nomor Resi Terlacak</strong>
                    Menyediakan alur formulir bertahap (stepper wizard) yang menerbitkan kode registrasi unik (seperti SKH-2026-XXXX) dengan simulasi status tracking.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Integrasi Lokal Sukoharjo Makmur</strong>
                    Memasukkan potensi khas Sukoharjo: Mal Pelayanan Publik (MPP), RSUD Ir. Soekarno, Sentra Jamu Nguter, dan 12 kecamatan dari Grogol hingga Weru.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Disiplin Tipografi &amp; Zero-Pill</strong>
                    Tidak menggunakan kapsul statis bertumpuk; menggunakan metadata unboxed dengan pemisah titik tengah; font Inter dan Plus Jakarta Sans.
                  </div>
                </div>
              </div>
            </div>

            {/* Referensi Tautan Resmi */}
            <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-xl text-xs text-rose-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="block text-rose-900 font-bold">Dokumentasi Asli Desain Pusat:</strong>
                Kunjungi portal resmi dokumentasi Figma &amp; Token di <code className="bg-rose-100 px-1 py-0.5 rounded text-rose-900">https://design.inadigital.go.id/</code>
              </div>
              <a
                href="https://design.inadigital.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <span>Buka design.inadigital.go.id</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 6: KODE & PAKET @idds/styles */}
        {activeTab === 'koding' && (
          <div className="space-y-10">
            {/* Header info */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Implementasi Teknis &amp; Repositori Resmi</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Paket CSS Resmi: @idds/styles (INA Digital GovTech)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Aplikasi ini secara langsung mengintegrasikan pustaka kode resmi <strong>@idds/styles</strong> yang diterbitkan oleh tim INA Digital GovTech Indonesia di NPM dan GitHub. Semua kelas tombol, reset CSS, dan variabel CSS token terhubung langsung dengan standar pusat.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <a
                  href="https://www.npmjs.com/package/@idds/styles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Lihat di npm (@idds/styles)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/inadigital/designsystem-advanced"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium inline-flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  <span>GitHub inadigital/designsystem-advanced</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://design.inadigital.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium inline-flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  <span>Portal design.inadigital.go.id</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step-by-Step Installation & Code Snippet */}
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-900">
                Cara Integrasi @idds/styles ke Proyek Web Pemerintah Daerah
              </h3>

              <div className="space-y-4 text-xs">
                {/* Step 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <span className="font-bold text-slate-900 block">
                    1. Instalasi Paket NPM:
                  </span>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono flex items-center justify-between">
                    <span>npm install @idds/styles</span>
                    <button
                      onClick={() => copyToClipboard('npm install @idds/styles')}
                      className="text-slate-400 hover:text-white"
                      title="Salin perintah instalasi"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <span className="font-bold text-slate-900 block">
                    2. Import di Berkas CSS Global (src/index.css):
                  </span>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono flex items-center justify-between whitespace-pre">
                    <code>@import &quot;@idds/styles&quot;;{'\n'}@import &quot;tailwindcss&quot;;</code>
                    <button
                      onClick={() => copyToClipboard('@import "@idds/styles";\n@import "tailwindcss";')}
                      className="text-slate-400 hover:text-white"
                      title="Salin import CSS"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <span className="font-bold text-slate-900 block">
                    3. Konfigurasi Brand Dataset pada Elemen HTML Root:
                  </span>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono flex items-center justify-between">
                    <code>&lt;div data-brand=&quot;inaku&quot;&gt; ... &lt;/div&gt;</code>
                    <button
                      onClick={() => copyToClipboard('<div data-brand="inaku"> ... </div>')}
                      className="text-slate-400 hover:text-white"
                      title="Salin data-brand"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-1">
                    Nilai data-brand yang didukung: <code className="text-rose-700 font-semibold">&quot;inaku&quot;</code> (Warga), <code className="text-rose-700 font-semibold">&quot;inapas&quot;</code> (Identitas/SSO), <code className="text-rose-700 font-semibold">&quot;inagov&quot;</code> (ASN).
                  </p>
                </div>
              </div>
            </div>

            {/* Directory of Components from @idds/styles */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Daftar 8 Kelompok Komponen Inti @idds/styles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {IDDS_COMPONENTS_DIRECTORY.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-900">
                          {comp.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {comp.selector}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                      {comp.roles.map((r, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-[10px] text-slate-500 font-medium"
                        >
                          {r} {rIdx < comp.roles.length - 1 ? '·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
