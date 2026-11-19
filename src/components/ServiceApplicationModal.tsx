import React, { useState, useEffect } from 'react';
import { PublicService, ApplicationTicket } from '../types';
import { SUKOHARJO_SUBDISTRICTS } from '../data/mockData';
import { X, Check, ArrowRight, ArrowLeft, Upload, FileCheck, CheckCircle2, Copy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface ServiceApplicationModalProps {
  service: PublicService | null;
  onClose: () => void;
  onSubmitSuccess: (newTicket: ApplicationTicket) => void;
}

export const ServiceApplicationModal: React.FC<ServiceApplicationModalProps> = ({
  service,
  onClose,
  onSubmitSuccess,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [copied, setCopied] = useState(false);

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [subdistrict, setSubdistrict] = useState(SUKOHARJO_SUBDISTRICTS[0]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Generated Ticket Result
  const [generatedTicket, setGeneratedTicket] = useState<ApplicationTicket | null>(null);

  const { userProfile } = useAuth();

  useEffect(() => {
    if (userProfile && service) {
      if (userProfile.fullName) setApplicantName(userProfile.fullName);
      if (userProfile.nik) setNik(userProfile.nik);
      if (userProfile.phone) setPhone(userProfile.phone);
      if (userProfile.district) {
        const found = SUKOHARJO_SUBDISTRICTS.find((k) =>
          userProfile.district.toLowerCase().includes(k.toLowerCase())
        );
        if (found) setSubdistrict(found);
      }
    }
  }, [userProfile, service]);

  if (!service) return null;

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!applicantName.trim()) {
      errs.applicantName = 'Nama lengkap wajib diisi sesuai KTP.';
    }
    if (!nik.trim() || nik.length !== 16 || !/^\d+$/.test(nik)) {
      errs.nik = 'NIK harus berupa 16 digit angka kependudukan.';
    }
    if (!phone.trim() || phone.length < 10) {
      errs.phone = 'Nomor WhatsApp aktif wajib diisi untuk notifikasi status permohonan.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = async () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      // Generate Ticket
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const ticketNum = `SKH-2026-${randomSuffix}`;

      const newTicket: ApplicationTicket = {
        ticketNumber: ticketNum,
        serviceId: service.id,
        serviceName: service.title,
        applicantName,
        nik,
        phone,
        subdistrict,
        submittedDate: '13 Oktober 2026, 10:15 WIB',
        estimatedCompletionDate: '14 Oktober 2026, 16:00 WIB',
        status: 'verifikasi',
        statusLabel: 'Verifikasi Berkas Daring',
        notes: notes || 'Permohonan berhasil dikirim melalui Portal Terpadu Sukoharjo IDDS.',
        history: [
          {
            stage: 'Permohonan Berhasil Dikirim Pemohon',
            date: '13 Okt 2026, 10:15',
            officer: 'Sistem Portal Terpadu Sukoharjo',
            completed: true,
          },
          {
            stage: 'Verifikasi Validitas Dokumen Digital',
            date: 'Sedang Berjalan',
            officer: `Tim Petugas Loket ${service.department.split('(')[0]}`,
            completed: false,
          },
          {
            stage: 'Pemrosesan & Validasi Pejabat Berwenang',
            date: 'Menunggu Tahap 2',
            officer: 'Kepala Bidang Terkait',
            completed: false,
          },
          {
            stage: 'Dokumen Siap / Pelayanan Selesai',
            date: 'Estimasi Esok Hari',
            officer: 'Unit Pelayanan MPP Sukoharjo',
            completed: false,
          },
        ],
      };

      // Persist to Firestore tickets collection for live tracking
      try {
        await setDoc(doc(db, 'tickets', ticketNum), {
          ...newTicket,
          userId: userProfile?.id || 'warga-guest',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } catch (err) {
        console.warn('Could not write ticket to Firestore, fallback to local state:', err);
      }

      setGeneratedTicket(newTicket);
      onSubmitSuccess(newTicket);
      setCurrentStep(3);
    }
  };

  const handleCopyTicket = () => {
    if (generatedTicket) {
      navigator.clipboard.writeText(generatedTicket.ticketNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleMockUpload = (reqTitle: string) => {
    if (uploadedFiles.includes(reqTitle)) {
      setUploadedFiles(uploadedFiles.filter((f) => f !== reqTitle));
    } else {
      setUploadedFiles([...uploadedFiles, reqTitle]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-apply-title"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b dark:border-slate-800">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-rose-300 uppercase">
              Formulir Permohonan Layanan Digital
            </span>
            <h2 id="modal-apply-title" className="text-base font-bold text-white line-clamp-1 mt-0.5">
              {service.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Tutup form permohonan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Wizard Indicator (IDDS Standard) */}
        <div className="bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-6 py-3">
          <div className="flex items-center justify-between max-w-sm mx-auto text-xs font-semibold">
            <div className={`flex items-center gap-1.5 ${currentStep >= 1 ? 'text-rose-700 dark:text-rose-400' : 'text-slate-400 dark:text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep >= 1 ? 'bg-rose-700 dark:bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                1
              </span>
              <span>Data Pemohon</span>
            </div>
            <div className="w-8 h-px bg-slate-300 dark:bg-slate-700" />
            <div className={`flex items-center gap-1.5 ${currentStep >= 2 ? 'text-rose-700 dark:text-rose-400' : 'text-slate-400 dark:text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep >= 2 ? 'bg-rose-700 dark:bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                2
              </span>
              <span>Unggah Dokumen</span>
            </div>
            <div className="w-8 h-px bg-slate-300 dark:bg-slate-700" />
            <div className={`flex items-center gap-1.5 ${currentStep === 3 ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 3 ? 'bg-emerald-600 dark:bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                3
              </span>
              <span>Bukti Resi</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Nama Lengkap Pemohon (Sesuai KTP) <span className="text-rose-600 dark:text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg text-xs focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all font-medium"
                />
                {errors.applicantName && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.applicantName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Nomor Induk Kependudukan (NIK 16 Digit) <span className="text-rose-600 dark:text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  maxLength={16}
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                  placeholder="331108xxxxxxxxxx"
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg text-xs font-mono tracking-wider focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all"
                />
                {errors.nik && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.nik}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Nomor WhatsApp / HP Aktif <span className="text-rose-600 dark:text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08123456789"
                    className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg text-xs focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all font-medium"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Kecamatan Domisili di Sukoharjo <span className="text-rose-600 dark:text-rose-400">*</span>
                  </label>
                  <select
                    value={subdistrict}
                    onChange={(e) => setSubdistrict(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg text-xs focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all font-medium"
                  >
                    {SUKOHARJO_SUBDISTRICTS.map((kec) => (
                      <option key={kec} value={kec}>
                        Kecamatan {kec}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 rounded-lg text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                <strong>Catatan Keamanan Data:</strong> NIK Anda akan diverifikasi secara otomatis dengan database kependudukan Ditjen Dukcapil Kemendagri &amp; Disdukcapil Sukoharjo sesuai UU PDP No. 27 Tahun 2022.
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Silakan centang berkas yang telah Anda siapkan untuk simulasi pengajuan online layanan ini:
              </div>

              <div className="space-y-2.5">
                {service.requirements.map((req, idx) => {
                  const isUploaded = uploadedFiles.includes(req);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleMockUpload(req)}
                      className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                        isUploaded
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isUploaded ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                          }`}
                        >
                          {isUploaded && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{req}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Upload className="w-3 h-3" />
                        {isUploaded ? 'Terlampir' : 'Lampirkan'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Catatan Tambahan untuk Petugas (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Mohon pengambilan diarahkan ke kantor Kecamatan Baki..."
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg text-xs focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950 transition-all"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && generatedTicket && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">
                  Permohonan Berhasil Diajukan
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Nomor Resi Permohonan Resmi
                </h3>
              </div>

              {/* Ticket Box */}
              <div className="bg-slate-50 dark:bg-slate-800/60 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 max-w-sm mx-auto">
                <div className="font-mono text-xl font-extrabold text-rose-700 dark:text-rose-400 tracking-widest">
                  {generatedTicket.ticketNumber}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Pemohon: {generatedTicket.applicantName} · Kec. {generatedTicket.subdistrict}
                </div>
                <button
                  onClick={handleCopyTicket}
                  className="mt-3 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Tersalin!' : 'Salin Nomor Resi'}</span>
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Nomor tiket di atas dapat Anda gunakan sewaktu-waktu di kolom <strong>Lacak Permohonan</strong> untuk memantau proses verifikasi secara berkala.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          {currentStep === 1 && (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleNextStep}
                className="px-5 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Lanjut Dokumen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>
              <button
                onClick={handleNextStep}
                className="px-5 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Kirim Permohonan</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {currentStep === 3 && (
            <div className="w-full flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Selesai &amp; Tutup
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
