import React from 'react';
import { MapPin, Clock, Phone, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';

export const RegionalShowcase: React.FC = () => {
  return (
    <section id="mpp" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-1">
            Sentra Pelayanan &amp; Potensi Daerah
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mal Pelayanan Publik (MPP) &amp; Fasilitas Daerah
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Selain layanan digital daring 24/7, Pemkab Sukoharjo menyediakan gerai terpadu satu atap dan fasilitas kesehatan berstandar tinggi untuk masyarakat.
          </p>
        </div>

        {/* Feature 1: MPP Sukoharjo (2-column balanced split) */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 uppercase mb-2">
                  <Building2 className="w-4 h-4 text-rose-700" />
                  <span>Gerai Terpadu Satu Atap</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  Mal Pelayanan Publik (MPP) Kabupaten Sukoharjo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Menghadirkan 32 instansi pemerintah dan BUMD dalam satu gedung. Warga dapat mengurus KTP, SIM, paspor, sertifikat tanah, pembayaran pajak daerah, hingga perizinan berusaha tanpa harus berpindah kantor dinas.
                </p>

                {/* Info List */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-slate-700" /> Jam Operasional Loket:
                    </span>
                    <span className="font-semibold text-slate-900">
                      Senin - Kamis: 08.00 - 15.00 WIB<br />Jumat: 08.00 - 14.30 WIB
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-700" /> Lokasi Sentral:
                    </span>
                    <span className="font-semibold text-slate-900">
                      Jl. Jenderal Sudirman No. 199, Sukoharjo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Zona Integritas Wilayah Bebas Korupsi (WBK)</span>
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-medium text-slate-700">
                    Call Center: <strong>(0271) 593003</strong>
                  </span>
                  <a
                    href="#peta-layanan"
                    className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-800 font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Buka Peta &amp; Rute &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative bg-slate-900 min-h-[280px]">
              <img
                src="src/assets/images/mal pelayanan publik.png"
                alt="Interior Mal Pelayanan Publik Sukoharjo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-semibold">Loket Terpadu Ramah Disabilitas &amp; Lansia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 & 3: RSUD Ir Soekarno & Sentra Jamu (Bento 2-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card RSUD */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative aspect-16/9 bg-slate-900">
              <img
                src="/assets/images/rsud_healthcare_service_1791897667542.jpg"
                alt="Pelayanan Poliklinik RSUD Ir Soekarno Sukoharjo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                  <HeartPulse className="w-3.5 h-3.5" /> Faskes Rujukan Utama
                </span>
                <h4 className="text-base font-bold text-white">RSUD Ir. Soekarno Sukoharjo</h4>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Rumah sakit daerah tipe B dengan pelayanan poliklinik spesialis lengkap, pendaftaran online terpadu, antrean digital BPJS, serta IGD 24 Jam dengan unit ambulans siaga tanggap darurat 119.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                <span>Layanan Ambulans 24 Jam:</span>
                <span className="font-mono font-bold text-rose-700">119 / (0271) 593118</span>
              </div>
            </div>
          </div>

          {/* Card Sentra Jamu */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative aspect-16/9 bg-slate-900">
              <img
                src="/assets/images/sukoharjo_jamu_heritage_1791897667176.jpg"
                alt="Sentra Herbal Jamu Tradisional Sukoharjo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Warisan Budaya &amp; Ekonomi
                </span>
                <h4 className="text-base font-bold text-white">Sukoharjo Kota Jamu &amp; Sentra Herbal</h4>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Pusat pengrajin jamu gendong nasional di Nguter Sukoharjo. Portal ini menyediakan fasilitasi sertifikasi Halal gratis, uji kelayakan P-IRT Dinkes, dan integrasi pameran e-Katalog UMKM Makmur.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                <span>Fasilitasi Sertifikasi UMKM:</span>
                <span className="font-semibold text-emerald-700">Difasilitasi Pemkab (Rp 0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
