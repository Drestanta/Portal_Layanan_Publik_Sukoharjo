import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  KeyRound, 
  QrCode, 
  UserPlus, 
  LogIn, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  Lock,
  Loader2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUKOHARJO_DISTRICTS = [
  'Kec. Baki',
  'Kec. Bendosari',
  'Kec. Bulu',
  'Kec. Gatak',
  'Kec. Grogol',
  'Kec. Kartasura',
  'Kec. Mojolaban',
  'Kec. Nguter',
  'Kec. Polokarto',
  'Kec. Sukoharjo',
  'Kec. Tawangsari',
  'Kec. Weru'
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { userProfile, login, register, loginWithSimulatedIKD, logout } = useAuth();

  // Tab State: 'login' | 'register' | 'ikd'
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'ikd'>('login');

  // Form States - Login
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Form States - Register
  const [regFullName, setRegFullName] = useState('');
  const [regNik, setRegNik] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regDistrict, setRegDistrict] = useState(SUKOHARJO_DISTRICTS[4]); // Default Grogol
  const [regAddress, setRegAddress] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Status & Feedback States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle Login Submit
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setErrorMessage('Harap isi email/NIK dan kata sandi Anda.');
      return;
    }

    setLoading(true);
    try {
      await login(loginIdentifier, loginPassword);
      setSuccessMessage('Berhasil masuk ke Portal Sukoharjo!');
      setTimeout(() => {
        onClose();
        setSuccessMessage(null);
      }, 700);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setErrorMessage('Email/NIK atau kata sandi tidak cocok. Silakan periksa kembali.');
      } else if (err.code === 'auth/invalid-email') {
        setErrorMessage('Format email tidak valid.');
      } else {
        setErrorMessage(err.message || 'Gagal masuk. Silakan periksa koneksi dan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validations
    if (!regFullName.trim()) {
      setErrorMessage('Nama lengkap wajib diisi sesuai KTP-el.');
      return;
    }
    if (!/^\d{16}$/.test(regNik.trim())) {
      setErrorMessage('NIK harus terdiri dari tepat 16 digit angka.');
      return;
    }
    if (!regEmail.trim() || !regEmail.includes('@')) {
      setErrorMessage('Harap masukkan alamat email aktif yang valid.');
      return;
    }
    if (regPassword.length < 6) {
      setErrorMessage('Kata sandi minimal 6 karakter.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMessage('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    if (!agreeTerms) {
      setErrorMessage('Anda harus menyetujui ketentuan privasi data kependudukan.');
      return;
    }

    setLoading(true);
    try {
      await register({
        fullName: regFullName,
        nik: regNik,
        email: regEmail,
        password: regPassword,
        phone: regPhone,
        district: regDistrict,
        address: regAddress,
      });

      setSuccessMessage('Pendaftaran berhasil! Akun warga Anda telah aktif.');
      setTimeout(() => {
        onClose();
        setSuccessMessage(null);
      }, 900);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setErrorMessage('Alamat email ini sudah terdaftar. Silakan gunakan menu Masuk.');
      } else if (err.code === 'auth/weak-password') {
        setErrorMessage('Kata sandi terlalu lemah. Gunakan minimal 6 karakter kombinasi.');
      } else {
        setErrorMessage(err.message || 'Gagal mendaftar. Silakan coba kembali.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Quick IKD Simulation
  const handleIKDSimulation = async () => {
    setLoading(true);
    try {
      await loginWithSimulatedIKD('Bagus Priyambodo, S.Kom.', '3311081504990002');
      setSuccessMessage('Autentikasi IKD Kemendagri berhasil diverifikasi!');
      setTimeout(() => {
        onClose();
        setSuccessMessage(null);
      }, 700);
    } catch {
      setErrorMessage('Simulasi verifikasi IKD gagal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        {/* Header Dialog */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src="src/assets/images/logo .png"
              alt="Lambang Kabupaten Sukoharjo"
              className="w-7 h-9 object-contain drop-shadow-xs shrink-0"
            />
            <div>
              <h2 id="auth-modal-title" className="text-sm font-bold text-white flex items-center gap-2">
                <span>INA Pass · Portal Sukoharjo Makmur</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-900/60 text-rose-300 font-normal">SSO GovTech</span>
              </h2>
              <span className="text-[11px] text-slate-400">Layanan Otentikasi Terpadu Kependudukan &amp; SPBE</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup dialog autentikasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 max-h-[85vh] overflow-y-auto">
          {/* User Logged In Profile View */}
          {userProfile ? (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mt-2">
                  Akun Warga Terverifikasi
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {userProfile.fullName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  NIK: {userProfile.nik.slice(0, 6)}******{userProfile.nik.slice(-4)} · {userProfile.district}
                </p>
              </div>

              {/* Citizen Card IDDS */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-2xl text-xs space-y-2">
                <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Email Terdaftar:
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white truncate max-w-[200px]">
                    {userProfile.email}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    No. Handphone:
                  </span>
                  <span className="font-mono text-slate-900 dark:text-white">
                    {userProfile.phone || '-'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Wilayah Domisili:
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {userProfile.district}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-slate-600 dark:text-slate-350">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Status Dukcapil:
                  </span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    Aktif (Tersinkronisasi IKD)
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={async () => {
                    await logout();
                  }}
                  className="w-1/2 py-2.5 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Keluar Akun
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Top Navigation Tabs: Masuk / Daftar / QR IKD */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 mb-5">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('login');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'login'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('register');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'register'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Daftar Akun</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('ikd');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'ikd'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Pindai IKD</span>
                </button>
              </div>

              {/* Error & Success Alerts */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/80 rounded-xl text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* 1. TAB MASUK (LOGIN) */}
              {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Alamat Email atau NIK 16 Digit
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        placeholder="contoh: nama@email.com atau 331108xxxxxxxxxx"
                        className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      Masukkan email yang Anda gunakan saat mendaftar, atau 16 digit NIK Anda.
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Kata Sandi (Password)
                      </label>
                      <button
                        type="button"
                        onClick={() => alert('Untuk bantuan pemulihan kata sandi akun warga, hubungi Helpdesk Diskominfo Sukoharjo di Call Center 112 atau email diskominfo@sukoharjokab.go.id.')}
                        className="text-[11px] text-rose-700 dark:text-rose-400 hover:underline cursor-pointer"
                      >
                        Lupa sandi?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? 'text' : 'password'}
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Masukkan kata sandi..."
                        className="w-full px-3.5 py-2.5 pr-10 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        tabIndex={-1}
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-rose-700 hover:bg-rose-800 disabled:bg-rose-400 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Memverifikasi Akun...</span>
                        </>
                      ) : (
                        <span>Masuk ke Portal Layanan &rarr;</span>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Belum memiliki akun warga?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('register');
                        setErrorMessage(null);
                      }}
                      className="text-rose-700 dark:text-rose-400 font-bold hover:underline cursor-pointer"
                    >
                      Daftar Akun Baru Sekarang
                    </button>
                  </div>
                </form>
              )}

              {/* 2. TAB DAFTAR (REGISTRASI) */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Nama Lengkap (KTP) *
                      </label>
                      <input
                        type="text"
                        required
                        value={regFullName}
                        onChange={(e) => setRegFullName(e.target.value)}
                        placeholder="Contoh: Bagus Priyambodo"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        NIK (16 Digit) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        value={regNik}
                        onChange={(e) => setRegNik(e.target.value.replace(/\D/g, ''))}
                        placeholder="331108xxxxxxxxxx"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Email Aktif *
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Nomor WhatsApp / HP
                      </label>
                      <input
                        type="tel"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Kecamatan Domisili *
                      </label>
                      <select
                        value={regDistrict}
                        onChange={(e) => setRegDistrict(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium cursor-pointer"
                      >
                        {SUKOHARJO_DISTRICTS.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Alamat Domisili Singkat
                      </label>
                      <input
                        type="text"
                        value={regAddress}
                        onChange={(e) => setRegAddress(e.target.value)}
                        placeholder="Nama jalan / RT / RW / Desa"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Kata Sandi (Min. 6 Karakter) *
                      </label>
                      <div className="relative">
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          required
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Minimal 6 karakter"
                          className="w-full px-3 py-2 pr-9 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                          tabIndex={-1}
                        >
                          {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Ulangi Kata Sandi *
                      </label>
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        required
                        value={regConfirmPassword}
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                        placeholder="Ulangi kata sandi"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-rose-700 dark:focus:border-rose-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2 cursor-pointer text-slate-600 dark:text-slate-400 text-[11px] leading-tight">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-0.5 rounded text-rose-700 focus:ring-rose-500 cursor-pointer"
                      />
                      <span>
                        Saya menyatakan data yang saya masukkan adalah benar sesuai dokumen kependudukan resmi dan menyetujui ketentuan privasi data SPBE Kabupaten Sukoharjo.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-rose-700 hover:bg-rose-800 disabled:bg-rose-400 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Mendaftarkan Akun Anda...</span>
                        </>
                      ) : (
                        <span>Daftar Akun Warga Sukoharjo &rarr;</span>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Sudah memiliki akun?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('login');
                        setErrorMessage(null);
                      }}
                      className="text-rose-700 dark:text-rose-400 font-bold hover:underline cursor-pointer"
                    >
                      Masuk di sini
                    </button>
                  </div>
                </form>
              )}

              {/* 3. TAB PINDAI QR IKD (SIMULASI KEMENDAGRI) */}
              {activeTab === 'ikd' && (
                <div className="text-center py-3 space-y-3">
                  <div className="w-40 h-40 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center mx-auto p-4 text-slate-700 dark:text-slate-200 shadow-inner">
                    <QrCode className="w-24 h-24 text-slate-800 dark:text-slate-100 mb-1" />
                    <span className="text-[10px] text-slate-500 font-mono">KEMENDAGRI IKD QR</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-350 max-w-sm mx-auto leading-relaxed">
                    Buka aplikasi <strong>Identitas Kependudukan Digital (IKD)</strong> di ponsel Anda, pilih menu <strong>Pindai QR</strong>, lalu arahkan kamera ke kode di atas untuk autentikasi otomatis.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleIKDSimulation}
                      disabled={loading}
                      className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                    >
                      {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                      <span>Simulasikan Masuk via IKD (Warga Demo)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
