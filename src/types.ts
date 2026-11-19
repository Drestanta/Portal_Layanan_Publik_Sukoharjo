export type AppView = 'home' | 'layanan-dinas' | 'transparansi' | 'sentra-potensi' | 'faq' | 'design-system';

export type ServiceCategory = 
  | 'semua'
  | 'kependudukan'
  | 'kesehatan'
  | 'pajak'
  | 'perizinan'
  | 'sosial'
  | 'ketenagakerjaan'
  | 'umkm_pertanian';

export interface PublicService {
  id: string;
  code: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  department: string; // OPD pengampu
  description: string;
  sla: string; // Estimasi waktu
  cost: string; // Biaya
  requirements: string[];
  steps: string[];
  isPopular?: boolean;
  onlineSupport: boolean;
}

export type ApplicationStatus = 'diajukan' | 'verifikasi' | 'diproses' | 'selesai' | 'ditolak';

export interface ApplicationTicket {
  ticketNumber: string;
  serviceId: string;
  serviceName: string;
  applicantName: string;
  nik: string;
  phone: string;
  subdistrict: string; // Kecamatan di Sukoharjo
  submittedDate: string;
  estimatedCompletionDate: string;
  status: ApplicationStatus;
  statusLabel: string;
  notes: string;
  history: {
    stage: string;
    date: string;
    officer: string;
    completed: boolean;
  }[];
}

export interface ComplaintTicket {
  id: string;
  ticketNumber: string;
  category: string;
  title: string;
  description: string;
  location: string;
  department: string;
  status: 'menunggu' | 'ditindaklanjuti' | 'selesai';
  date: string;
  response?: string;
}

export interface DesignTokenColor {
  name: string;
  token: string;
  hex: string;
  usage: string;
  category: 'brand' | 'sentiment' | 'neutral';
  contrastOnWhite: string;
  wcagStatus: 'AAA' | 'AA' | 'Pass UI';
}

export interface TypographyToken {
  name: string;
  role: string;
  size: string;
  weight: string;
  lineHeight: string;
  sample: string;
}

export type AgencyType = 
  | 'dinas'
  | 'badan'
  | 'bagian_setda'
  | 'instansi_vertikal'
  | 'bumd'
  | 'kecamatan';

export interface AgencyItem {
  id: string;
  name: string;
  shortName: string;
  type: AgencyType;
  typeLabel: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  headOfAgency?: string;
  mainDuties: string;
  keyServices: string[];
  digitalApps?: { name: string; url?: string; description: string }[];
}

export type LocationCategory = 
  | 'semua'
  | 'layanan_utama'
  | 'kesehatan'
  | 'kecamatan'
  | 'ekonomi_khusus';

export interface ServiceLocation {
  id: string;
  name: string;
  category: LocationCategory;
  categoryLabel: string;
  badgeColor: string; // IDDS theme color key
  address: string;
  district: string; // Kecamatan
  coordinates: [number, number]; // [lat, lng]
  operatingHours: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  headOfficer?: string;
  featuredServices: string[];
  googleMapsUrl: string;
  description: string;
  isMainHub?: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  nik: string;
  phone: string;
  district: string;
  village?: string;
  address?: string;
  role: 'citizen' | 'officer' | 'admin';
  createdAt: string;
}
