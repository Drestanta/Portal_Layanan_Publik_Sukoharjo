# Implementasi Fitur Registrasi dan Login Warga Sukoharjo

Telah diimplementasikan fitur registrasi akun baru dan login terintegrasi Firebase Authentication dan Cloud Firestore:

1. **Infrastruktur & Penyimpanan Data**:
   - Terintegrasi dengan Firebase Authentication untuk kredensial keamanan akun warga.
   - Cloud Firestore dikonfigurasi untuk menyimpan profil identitas kependudukan (`users/{userId}`) dengan aturan keamanan (`firestore.rules`) yang telah dideploy.
   - Entitas dan schema didefinisikan secara baku pada `firebase-blueprint.json`.

2. **Fitur Registrasi Akun Warga Baru (`Daftar Akun`)**:
   - **Nama Lengkap**: Sesuai dengan KTP-el.
   - **NIK 16 Digit**: Validasi ketat format 16 angka wilayah Jawa Tengah / Kabupaten Sukoharjo.
   - **Alamat Email Aktif & WhatsApp**: Komunikasi resmi permohonan layanan.
   - **Kecamatan Domisili**: Dropdown 12 Kecamatan di Sukoharjo (Baki, Bendosari, Bulu, Gatak, Grogol, Kartasura, Mojolaban, Nguter, Polokarto, Sukoharjo, Tawangsari, Weru).
   - **Alamat Singkat**: Detail RT/RW atau nama jalan.
   - **Kata Sandi**: Validasi minimal 6 karakter dengan konfirmasi kata sandi dan opsi intip sandi (*show/hide*).
   - **Persetujuan Privasi**: Pernyataan kepatuhan UU Pelindungan Data Pribadi (UU PDP) & SPBE.

3. **Fitur Masuk Akun (`Masuk`)**:
   - Mendukung login menggunakan **Email** maupun **NIK 16 Digit**.
   - Dilengkapi penanganan kesalahan (*error handling*) ramah pengguna (misal: sandi salah, email belum terdaftar, dsb).
   - Tetap mendukung opsi cepat **Pindai QR IKD (Identitas Kependudukan Digital)** resmi Kemendagri.

4. **Status & Profil Terverifikasi**:
   - Setelah masuk, bilah navigasi header menampilkan nama warga dan lencana terverifikasi.
   - Modal menampilkan kartu identitas digital warga dengan informasi NIK yang disamarkan sebagian demi privasi, data wilayah kependudukan, serta tombol Keluar Akun (*Logout*).
