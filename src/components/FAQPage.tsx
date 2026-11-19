import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MapPin, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { SUKOHARJO_FAQS, FAQItem } from '../data/faqData';
import { AppView } from './Header';

interface FAQPageProps {
  initialFaqId?: string | null;
  onNavigate: (view: AppView) => void;
  onNavigateToTab?: (tab: 'layanan' | 'dinas') => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  initialFaqId,
  onNavigate,
  onNavigateToTab,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (initialFaqId) {
      setOpenItems((prev) => ({ ...prev, [initialFaqId]: true }));
      // Scroll to question if element exists
      const el = document.getElementById(initialFaqId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Open first item by default
      setOpenItems({ 'faq-1': true });
    }
  }, [initialFaqId]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: 'semua', label: 'Semua Kategori' },
    { id: 'kependudukan', label: 'Kependudukan (KTP/KK)' },
    { id: 'kesehatan', label: 'Kesehatan & RSUD' },
    { id: 'perizinan', label: 'Perizinan & UMKM' },
    { id: 'pengaduan', label: 'Pengaduan & Resi' },
    { id: 'umum', label: 'Ketentuan & IKD' },
  ];

  const filteredFaqs = SUKOHARJO_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'semua' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.categoryLabel.toLowerCase().includes(query) ||
      faq.shortTitle.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleAction = (target?: 'layanan-dinas' | 'transparansi' | 'sentra-potensi') => {
    if (target) {
      onNavigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Subtitle */}
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-2">
          <button 
            type="button" 
            onClick={() => onNavigate('home')} 
            className="hover:underline text-slate-500 dark:text-slate-400"
          >
            Beranda
          </button>
          <span className="text-slate-400">/</span>
          <span>Tanya Jawab Layanan Publik (FAQ)</span>
        </div>

        {/* Hero Title Section */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pusat Bantuan &amp; Panduan Masyarakat</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Tanya Jawab Pelayanan Publik Kabupaten Sukoharjo
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Panduan resmi dan jawaban menyeluruh seputar administrasi kependudukan (KTP/KIA/KK), komitmen anti-pungli Rp 0, pendaftaran online &amp; kamar RSUD Ir. Soekarno, 32 loket MPP Menara Wijaya, serta pelacakan resi digital berbasis standar GovTech Indonesia.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-2xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci: KTP hilang, biaya perizinan, antrean RSUD, loket MPP, jamu..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-rose-600 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
          <span>
            Menampilkan <strong>{filteredFaqs.length}</strong> pertanyaan resmi
            {searchQuery && ` untuk pencarian "${searchQuery}"`}
          </span>
          <button
            type="button"
            onClick={() => {
              const allOpen: { [key: string]: boolean } = {};
              filteredFaqs.forEach((f) => { allOpen[f.id] = true; });
              setOpenItems(allOpen);
            }}
            className="text-rose-700 dark:text-rose-400 font-semibold hover:underline"
          >
            Buka Semua Jawaban
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center">
              <HelpCircle className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Pertanyaan tidak ditemukan
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                Tidak ada tanya jawab yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Silakan gunakan kata kunci lain atau hubungi layanan pengaduan Lapor Makmur.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('semua');
                }}
                className="mt-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className={`bg-white dark:bg-slate-900 border rounded-2xl transition-all duration-200 overflow-hidden shadow-xs ${
                    isOpen
                      ? 'border-rose-300 dark:border-rose-900/80 ring-1 ring-rose-100 dark:ring-rose-950/40'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Header / Question Button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">
                        <span>{faq.categoryLabel}</span>
                      </div>
                      <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {faq.question}
                      </h2>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen 
                        ? 'bg-rose-700 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in duration-150">
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </p>

                      {/* Key Service Highlights */}
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Poin Penting &amp; Standar Pelayanan</span>
                          </div>
                          <ul className="space-y-2">
                            {faq.highlights.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Direct Action Button */}
                      {faq.actionTarget && faq.actionLabel && (
                        <div className="pt-1 flex items-center justify-between flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => handleAction(faq.actionTarget)}
                            className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
                          >
                            <span>{faq.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-[11px] text-slate-400 dark:text-slate-500">
                            Disahkan oleh Unit Pelayanan Terkait Kab. Sukoharjo
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Helpdesk Strip */}
        <div className="mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Phone className="w-4 h-4" />
                <span>Masih Membutuhkan Informasi Tambahan?</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Hubungi Petugas Siaga Pelayanan Publik Sukoharjo
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Petugas layanan Diskominfo, Disdukcapil, dan MPP Sevaka Bhakti Wijaya siap membantu pertanyaan Anda setiap hari kerja pukul 08.00 - 15.00 WIB.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('transparansi')}
                className="px-4 py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                Kirim Laporan Pengaduan
              </button>
              <button
                type="button"
                onClick={() => onNavigate('sentra-potensi')}
                className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-slate-200 dark:border-slate-700"
              >
                Kunjungi Loket MPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
