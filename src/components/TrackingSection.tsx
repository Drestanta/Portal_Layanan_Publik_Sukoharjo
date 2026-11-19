import React, { useState, useEffect } from 'react';
import { ApplicationTicket, ApplicationStatus } from '../types';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  AlertCircle, 
  Radio, 
  Clock, 
  Copy, 
  Check, 
  RefreshCw, 
  Sliders, 
  Send, 
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

interface TrackingSectionProps {
  tickets: ApplicationTicket[];
}

export const TrackingSection: React.FC<TrackingSectionProps> = ({ tickets }) => {
  const [ticketInput, setTicketInput] = useState('SKH-2026-8941');
  const [activeTicketNumber, setActiveTicketNumber] = useState('SKH-2026-8941');
  const [activeTicket, setActiveTicket] = useState<ApplicationTicket | null>(tickets[0] || null);
  const [searchError, setSearchError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Real-time Firestore state
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [statusNotification, setStatusNotification] = useState<string | null>(null);

  // Officer Simulator Panel State
  const [showSimulator, setShowSimulator] = useState(false);
  const [simStatus, setSimStatus] = useState<ApplicationStatus>('diproses');
  const [simStatusLabel, setSimStatusLabel] = useState('Sedang Dicetak di MPP Sukoharjo');
  const [simNotes, setSimNotes] = useState('Blangko fisik KTP-el telah selesai dicetak. Silakan ambil di Loket 4 MPP Gedung Menara Wijaya.');
  const [simOfficer, setSimOfficer] = useState('Anisa Wulandari, S.STP (Petugas MPP)');
  const [isSavingUpdate, setIsSavingUpdate] = useState(false);

  // Helper to get formatted status label
  const getStatusMetadata = (status: ApplicationStatus) => {
    switch (status) {
      case 'diajukan':
        return {
          label: 'Permohonan Diterima',
          badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        };
      case 'verifikasi':
        return {
          label: 'Verifikasi Berkas Daring',
          badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        };
      case 'diproses':
        return {
          label: 'Sedang Diproses / Dicetak',
          badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200 dark:border-rose-800',
        };
      case 'selesai':
        return {
          label: 'Selesai & Siap Diambil',
          badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
        };
      case 'ditolak':
        return {
          label: 'Perlu Perbaikan Dokumen',
          badgeClass: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-200 dark:border-red-800',
        };
      default:
        return {
          label: 'Dalam Proses',
          badgeClass: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700',
        };
    }
  };

  // Seed demo ticket to Firestore if not yet present
  const seedTicketIfMissing = async (ticket: ApplicationTicket) => {
    try {
      await setDoc(
        doc(db, 'tickets', ticket.ticketNumber),
        {
          ...ticket,
          userId: 'system-seed',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (err) {
      console.warn('Seeding ticket warning:', err);
    }
  };

  // Real-time Firestore onSnapshot Listener
  useEffect(() => {
    if (!activeTicketNumber) return;

    const ticketDocRef = doc(db, 'tickets', activeTicketNumber);
    let previousStatus: ApplicationStatus | null = null;

    const unsubscribe = onSnapshot(
      ticketDocRef,
      (docSnapshot) => {
        setIsLiveConnected(true);
        setLastSyncTime(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB');

        if (docSnapshot.exists()) {
          const liveData = docSnapshot.data() as ApplicationTicket;
          
          // Trigger live update notification if status changed
          if (previousStatus && previousStatus !== liveData.status) {
            setStatusNotification(
              `Status permohonan berubah menjadi: "${liveData.statusLabel || liveData.status}" via Firestore Live Sync`
            );
            setTimeout(() => setStatusNotification(null), 6000);
          }
          previousStatus = liveData.status;

          setActiveTicket(liveData);
          setSearchError(false);
        } else {
          // If not in Firestore yet, check if matches initial preloaded list and auto-seed
          const fallback = tickets.find(
            (t) => t.ticketNumber.trim().toLowerCase() === activeTicketNumber.trim().toLowerCase()
          );

          if (fallback) {
            seedTicketIfMissing(fallback);
            setActiveTicket(fallback);
            previousStatus = fallback.status;
            setSearchError(false);
          } else {
            setActiveTicket(null);
            setSearchError(true);
          }
        }
      },
      (error) => {
        setIsLiveConnected(false);
        console.warn('Firestore onSnapshot listener error:', error);
        try {
          handleFirestoreError(error, OperationType.GET, `tickets/${activeTicketNumber}`);
        } catch {
          // Fallback gracefully to memory if permissions issue occurs
        }
        const fallback = tickets.find(
          (t) => t.ticketNumber.trim().toLowerCase() === activeTicketNumber.trim().toLowerCase()
        );
        if (fallback) {
          setActiveTicket(fallback);
          setSearchError(false);
        }
      }
    );

    return () => unsubscribe();
  }, [activeTicketNumber, tickets]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = ticketInput.trim().toUpperCase();
    if (cleaned) {
      setActiveTicketNumber(cleaned);
    }
  };

  const handleSelectPreload = (ticketNum: string) => {
    setTicketInput(ticketNum);
    setActiveTicketNumber(ticketNum);
  };

  const handleCopyTicket = () => {
    if (activeTicket) {
      navigator.clipboard.writeText(activeTicket.ticketNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simulate Officer Updating Ticket Status in Firestore
  const handleSimulateOfficerUpdate = async () => {
    if (!activeTicket) return;
    setIsSavingUpdate(true);

    try {
      const now = new Date();
      const timeStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + 
        ', ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

      // Build updated history steps
      const newHistory = activeTicket.history.map((step, idx) => {
        if (simStatus === 'selesai') {
          return { ...step, completed: true };
        }
        if (simStatus === 'diproses' && idx <= 2) {
          return { ...step, completed: true };
        }
        if (simStatus === 'verifikasi' && idx <= 1) {
          return { ...step, completed: true };
        }
        if (simStatus === 'diajukan' && idx === 0) {
          return { ...step, completed: true };
        }
        return { ...step, completed: false };
      });

      // Append or modify active stage description
      if (simNotes) {
        newHistory[Math.min(2, newHistory.length - 1)].officer = simOfficer;
        newHistory[Math.min(2, newHistory.length - 1)].date = timeStr;
      }

      await updateDoc(doc(db, 'tickets', activeTicket.ticketNumber), {
        status: simStatus,
        statusLabel: simStatusLabel,
        notes: simNotes,
        history: newHistory,
        updatedAt: now.toISOString(),
      });

      setStatusNotification(`Pembaruan status ke "${simStatusLabel}" berhasil dikirim ke Cloud Firestore.`);
      setTimeout(() => setStatusNotification(null), 5000);
    } catch (err) {
      console.error('Error updating ticket in Firestore:', err);
    } finally {
      setIsSavingUpdate(false);
    }
  };

  return (
    <section id="tracking" className="py-4 bg-transparent">
      <div>
        {/* Section Header */}
        <div className="max-w-3xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-400 uppercase mb-1">
            <ShieldCheck className="w-4 h-4 text-rose-700 dark:text-rose-500" />
            <span>Transparansi Pelayanan Publik</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
              Real-time Firestore
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lacak Resi &amp; Progres Permohonan
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Pantau status verifikasi dan pencetakan dokumen Anda secara transparan kapan saja dengan memasukkan nomor registrasi tiket permohonan resmi. Data disinkronkan secara langsung melalui listener Firestore.
          </p>
        </div>

        {/* Real-time Status Alert Banner */}
        {statusNotification && (
          <div className="mb-6 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 p-4 rounded-2xl flex items-center gap-3 text-xs text-emerald-900 dark:text-emerald-200 animate-fade-in shadow-xs">
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 animate-bounce" />
            <div className="flex-1">
              <span className="font-bold block">Pembaruan Real-Time Diterima!</span>
              <span>{statusNotification}</span>
            </div>
          </div>
        )}

        {/* Search Bar for Ticket Tracking with Live Indicator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 mb-8 shadow-xs max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Masukkan Nomor Resi Registrasi
            </span>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono font-medium text-[11px]">
                <span className={`w-2 h-2 rounded-full ${isLiveConnected ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
                <span>{isLiveConnected ? 'Live Cloud Firestore' : 'Menghubungkan...'}</span>
              </div>
              {lastSyncTime && (
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">
                  Sync: {lastSyncTime}
                </span>
              )}
            </div>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                placeholder="Contoh: SKH-2026-8941..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Lacak Dokumen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Preloads */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="text-slate-400 dark:text-slate-500 font-medium">Contoh resi terdaftar:</span>
            {tickets.slice(0, 4).map((t) => (
              <button
                key={t.ticketNumber}
                type="button"
                onClick={() => handleSelectPreload(t.ticketNumber)}
                className={`font-mono px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors border ${
                  activeTicketNumber === t.ticketNumber
                    ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-400'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {t.ticketNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Result View */}
        {searchError && (
          <div className="p-6 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 rounded-2xl text-rose-900 dark:text-rose-200 text-xs flex items-start gap-3 max-w-4xl mb-8">
            <AlertCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Nomor resi &quot;{ticketInput}&quot; tidak ditemukan dalam database Firestore.</p>
              <p className="text-rose-700 dark:text-rose-350 mt-1">
                Pastikan Anda mengetik nomor resi dengan benar (format: SKH-2026-XXXX) atau pilih salah satu contoh nomor resi terdaftar di atas.
              </p>
            </div>
          </div>
        )}

        {activeTicket && (
          <div className="space-y-6 max-w-4xl">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all">
              {/* Card Header info */}
              <div className="p-6 sm:p-7 bg-slate-900 dark:bg-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-rose-300 font-mono tracking-wider font-bold">
                    <span>RES-ID: {activeTicket.ticketNumber}</span>
                    <span>·</span>
                    <span className="text-slate-300 uppercase">Kec. {activeTicket.subdistrict}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-emerald-400 font-sans font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Listener Aktif
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mt-1.5">
                    {activeTicket.serviceName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Pemohon: <span className="font-semibold text-white">{activeTicket.applicantName}</span> · NIK: {activeTicket.nik || '331108xxxxxxxxxx'}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Status Berkas Terkini
                  </span>
                  <div className={`mt-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getStatusMetadata(activeTicket.status).badgeClass}`}>
                    {activeTicket.statusLabel || activeTicket.status}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    Target Selesai: {activeTicket.estimatedCompletionDate || '1 Hari Kerja'}
                  </span>
                </div>
              </div>

              {/* Stepper Timeline */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Alur &amp; Riwayat Pemrosesan Berkas
                  </h4>
                  <button
                    onClick={handleCopyTicket}
                    className="text-xs text-slate-600 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 font-medium flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Nomor Resi Tersalin' : 'Salin Nomor Resi'}</span>
                  </button>
                </div>

                <div className="relative pl-7 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {activeTicket.history.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      {/* Step Marker */}
                      <div
                        className={`absolute -left-7 top-0 w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900 ${
                          step.completed
                            ? 'bg-emerald-600 text-white'
                            : idx === activeTicket.history.findIndex((s) => !s.completed)
                            ? 'bg-rose-700 text-white animate-pulse'
                            : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {step.stage}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {step.date}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-350 mt-1.5 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          <span>Penanggung Jawab: {step.officer}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Officer Disposisi Note */}
                {activeTicket.notes && (
                  <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                      <FileText className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" />
                      <span>Catatan Disposisi Petugas:</span>
                    </div>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">{activeTicket.notes}</p>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                  Terhubung langsung dengan server database Kabupaten Sukoharjo
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSimulator(!showSimulator)}
                    className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Sliders className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" />
                    <span>{showSimulator ? 'Tutup Panel Simulasi' : 'Simulasi Update Petugas'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Officer Status Simulator (Live Test Firestore Tool) */}
            {showSimulator && (
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl animate-fade-in space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                      <Sliders className="w-4 h-4 text-rose-400" />
                      <span>Panel Pengujian Disdukcapil / MPP</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Simulasi Perubahan Status Berkas Real-Time
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Gunakan kontrol di bawah ini untuk mensimulasikan petugas yang memperbarui status berkas di backend. Perubahan akan dikirim ke Cloud Firestore dan langsung diterima oleh listener tanpa refresh halaman.
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-slate-800 text-rose-300 rounded-md shrink-0">
                    {activeTicket.ticketNumber}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Pilih Status Baru
                    </label>
                    <select
                      value={simStatus}
                      onChange={(e) => {
                        const val = e.target.value as ApplicationStatus;
                        setSimStatus(val);
                        if (val === 'diajukan') setSimStatusLabel('Permohonan Diterima');
                        if (val === 'verifikasi') setSimStatusLabel('Verifikasi Berkas Daring');
                        if (val === 'diproses') setSimStatusLabel('Sedang Dicetak di MPP Sukoharjo');
                        if (val === 'selesai') setSimStatusLabel('Dokumen Selesai & Siap Diambil di MPP');
                        if (val === 'ditolak') setSimStatusLabel('Perlu Perbaikan Dokumen');
                      }}
                      className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500 font-medium"
                    >
                      <option value="diajukan">1. Permohonan Diterima (Diajukan)</option>
                      <option value="verifikasi">2. Verifikasi Berkas Daring</option>
                      <option value="diproses">3. Sedang Dicetak / Diproses</option>
                      <option value="selesai">4. Dokumen Selesai &amp; Siap Diambil</option>
                      <option value="ditolak">5. Berkas Perlu Perbaikan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Nama Petugas Verifikator
                    </label>
                    <input
                      type="text"
                      value={simOfficer}
                      onChange={(e) => setSimOfficer(e.target.value)}
                      placeholder="Nama petugas..."
                      className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 font-semibold mb-1">
                    Catatan Disposisi Petugas
                  </label>
                  <textarea
                    rows={2}
                    value={simNotes}
                    onChange={(e) => setSimNotes(e.target.value)}
                    placeholder="Tuliskan catatan disposisi..."
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500 text-xs font-medium"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">
                    Aksi ini akan menulis ke dokumen Firestore <code className="font-mono text-rose-300">tickets/{activeTicket.ticketNumber}</code>.
                  </span>
                  <button
                    onClick={handleSimulateOfficerUpdate}
                    disabled={isSavingUpdate}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {isSavingUpdate ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    <span>{isSavingUpdate ? 'Mengirim...' : 'Kirim Update Real-Time'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
