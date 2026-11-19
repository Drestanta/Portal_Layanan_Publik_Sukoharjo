import React, { useState } from 'react';
import { SUKOHARJO_SUBDISTRICTS } from '../data/mockData';
import { ComplaintTicket } from '../types';
import { MessageSquarePlus, Send, CheckCircle2, MapPin } from 'lucide-react';

export const ComplaintSection: React.FC = () => {
  const [complaints, setComplaints] = useState<ComplaintTicket[]>([
    {
      id: 'aduan-1',
      ticketNumber: 'LAPOR-SKH-9012',
      category: 'Infrastruktur Jalan',
      title: 'Penerangan Jalan Umum Mati di Sekitar Jembatan Bacem Telukan',
      description: 'Lampu PJU padam sejak 3 hari lalu sehingga jalur rawan kecelakaan di malam hari.',
      location: 'Kecamatan Grogol',
      department: 'Dinas Perhubungan Sukoharjo',
      status: 'selesai',
      date: '10 Okt 2026',
      response: 'Tim teknis Dishub Sukoharjo telah melakukan perbaikan ballast dan lampu PJU telah menyala kembali pada 11 Okt 2026 pukul 20.15 WIB.',
    },
    {
      id: 'aduan-2',
      ticketNumber: 'LAPOR-SKH-9045',
      category: 'Pelayanan Publik',
      title: 'Konsultasi Antrean Rekam Medis RSUD Ir. Soekarno Poli Jantung',
      description: 'Mohon info ketersediaan kuota dokter spesialis jantung untuk pasien rujukan BPJS.',
      location: 'Kecamatan Sukoharjo',
      department: 'RSUD Ir. Soekarno',
      status: 'ditindaklanjuti',
      date: '12 Okt 2026',
      response: 'Petugas customer care RSUD telah menghubungi pemohon melalui WhatsApp untuk konfirmasi jadwal kunjungan Rabu.',
    },
  ]);

  // Form state
  const [category, setCategory] = useState('Infrastruktur Jalan & Jembatan');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subdistrict, setSubdistrict] = useState(SUKOHARJO_SUBDISTRICTS[0]);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket: ComplaintTicket = {
      id: `aduan-${Date.now()}`,
      ticketNumber: `LAPOR-SKH-${randomNum}`,
      category,
      title,
      description,
      location: `Kecamatan ${subdistrict}`,
      department: 'Pusat Aspirasi & Pengaduan Sukoharjo Makmur',
      status: 'menunggu',
      date: 'Hari ini',
      response: 'Laporan telah diteruskan ke OPD penanggung jawab dan akan diverifikasi maksimal 1x24 jam kerja.',
    };

    setComplaints([newTicket, ...complaints]);
    setSubmittedMessage(newTicket.ticketNumber);
    setTitle('');
    setDescription('');

    setTimeout(() => {
      setSubmittedMessage(null);
    }, 8000);
  };

  return (
    <section id="aduan" className="py-8 bg-transparent">
      <div>
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase mb-1">
            Kanal Aspirasi &amp; Pengawasan Warga
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lapor Makmur · Pengaduan Terpadu Sukoharjo
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Sampaikan laporan kerusakan fasilitas, hambatan layanan birokrasi, atau saran pembangunan daerah secara langsung kepada pimpinan daerah dan OPD terkait.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-4">
              <MessageSquarePlus className="w-4 h-4 text-rose-700 dark:text-rose-400" />
              <span>Buat Laporan / Pengaduan Baru</span>
            </div>

            {submittedMessage && (
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Laporan Anda Berhasil Terkirim!</p>
                  <p className="mt-0.5">
                    Nomor tiket laporan Anda adalah <strong className="font-mono text-emerald-800 dark:text-emerald-300">{submittedMessage}</strong>. Tim Command Center Sukoharjo akan menindaklanjuti dalam waktu &le; 24 jam.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Kategori Permasalahan
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 font-medium"
                >
                  <option value="Infrastruktur Jalan & Jembatan">Infrastruktur Jalan &amp; Jembatan</option>
                  <option value="Penerangan Jalan (PJU) & Kebersihan">Penerangan Jalan (PJU) &amp; Kebersihan</option>
                  <option value="Pelayanan Administrasi Kependudukan">Pelayanan Administrasi Kependudukan</option>
                  <option value="Fasilitas Kesehatan & Rumah Sakit">Fasilitas Kesehatan &amp; Rumah Sakit</option>
                  <option value="Bantuan Sosial & Kesejahteraan">Bantuan Sosial &amp; Kesejahteraan</option>
                  <option value="Ketertiban Umum & Satpol PP">Ketertiban Umum &amp; Satpol PP</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Kecamatan Lokasi Kejadian
                </label>
                <select
                  value={subdistrict}
                  onChange={(e) => setSubdistrict(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 font-medium"
                >
                  {SUKOHARJO_SUBDISTRICTS.map((kec) => (
                    <option key={kec} value={kec}>
                      Kecamatan {kec}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Judul Ringkas Laporan <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Aspal berlubang di jalan raya Sukoharjo - Solo KM 5"
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Uraian Lengkap Kejadian &amp; Detail Lokasi <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tuliskan secara jelas kronologi, alamat detail, atau patokan agar petugas dapat segera melakukan pengecekan..."
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan Resmi</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Feed (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                Daftar Tanggapan Aduan Terkini
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Terbuka &amp; Terverifikasi
              </span>
            </div>

            <div className="space-y-4">
              {complaints.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono font-bold text-rose-800 dark:text-rose-400 text-[11px]">
                      {item.ticketNumber}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.status === 'selesai'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          : item.status === 'ditindaklanjuti'
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.status === 'selesai'
                        ? 'Selesai Diperbaiki'
                        : item.status === 'ditindaklanjuti'
                        ? 'Sedang Ditindaklanjuti'
                        : 'Menunggu Verifikasi'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-350 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                      <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      {item.location}
                    </span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>

                  {item.response && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-100 dark:border-slate-700 text-[11px] text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                        Tindak Lanjut OPD:
                      </span>
                      <p className="leading-relaxed">{item.response}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
