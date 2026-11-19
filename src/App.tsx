import React, { useState } from 'react';
import { Header, AppView } from './components/Header.tsx';
import { HomePage } from './components/HomePage';
import { UnifiedServicesAndAgencies } from './components/UnifiedServicesAndAgencies';
import { TransparencyPage } from './components/TransparencyPage';
import { RegionalPotentialPage } from './components/RegionalPotentialPage';
import { FAQPage } from './components/FAQPage';
import { DesignSystemStudy } from './components/DesignSystemStudy';
import { ServiceDetailDrawer } from './components/ServiceDetailDrawer';
import { ServiceApplicationModal } from './components/ServiceApplicationModal';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { 
  PUBLIC_SERVICES_DATA, 
  INITIAL_APPLICATION_TICKETS 
} from './data/mockData';
import { PublicService, ApplicationTicket } from './types';
import { useAuth } from './context/AuthContext';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const { userProfile } = useAuth();
  const userAuthenticated = !!userProfile;
  const userName = userProfile?.fullName || '';

  const [activeView, setActiveView] = useState<AppView>('home');
  const [brandTheme, setBrandTheme] = useState<'inaku' | 'inapas' | 'inagov'>('inaku');
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesTab, setServicesTab] = useState<'layanan' | 'dinas'>('layanan');
  const [initialFaqId, setInitialFaqId] = useState<string | null>(null);

  // Application Data State
  const [services] = useState<PublicService[]>(PUBLIC_SERVICES_DATA);
  const [tickets, setTickets] = useState<ApplicationTicket[]>(INITIAL_APPLICATION_TICKETS);

  // Modals state
  const [detailModalService, setDetailModalService] = useState<PublicService | null>(null);
  const [applyModalService, setApplyModalService] = useState<PublicService | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleApplySuccess = (newTicket: ApplicationTicket) => {
    setTickets([newTicket, ...tickets]);
    showToast(`Permohonan berhasil dikirim dengan Nomor Resi ${newTicket.ticketNumber}`);
  };

  // Text size classes
  const textSizeClass =
    textSize === 'large' ? 'text-[17px]' : textSize === 'xl' ? 'text-[19px]' : 'text-[15px]';

  return (
    <div
      data-brand={brandTheme}
      className={`min-h-screen flex flex-col transition-colors ${textSizeClass} ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : highContrast ? 'bg-slate-950 text-slate-100 contrast-125' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 text-xs max-w-md animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        brandTheme={brandTheme}
        setBrandTheme={setBrandTheme}
        textSize={textSize}
        setTextSize={setTextSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAuth={() => setAuthModalOpen(true)}
        userAuthenticated={userAuthenticated}
        userName={userName}
        onNavigateToTab={(tab) => {
          setServicesTab(tab);
          setActiveView('layanan-dinas');
        }}
      />

      {/* Main Body: Multi-Page Routing with smooth fade-in transition */}
      <main className="flex-1 overflow-x-visible">
        <div key={activeView} className="animate-fade-in">
          {activeView === 'home' && (
            <HomePage
              services={services}
              tickets={tickets}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectService={(srv) => setDetailModalService(srv)}
              onApplyService={(srv) => setApplyModalService(srv)}
              onNavigate={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeView === 'layanan-dinas' && (
            <div className="py-6">
              <UnifiedServicesAndAgencies
                services={services}
                searchQuery={searchQuery}
                onSelectService={(srv) => setDetailModalService(srv)}
                onApplyService={(srv) => setApplyModalService(srv)}
                activeSubTab={servicesTab}
                onSubTabChange={(tab) => setServicesTab(tab)}
              />
            </div>
          )}

          {activeView === 'transparansi' && (
            <TransparencyPage tickets={tickets} />
          )}

          {activeView === 'sentra-potensi' && (
            <RegionalPotentialPage />
          )}

          {activeView === 'faq' && (
            <FAQPage
              initialFaqId={initialFaqId}
              onNavigate={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToTab={(tab) => {
                setServicesTab(tab);
                setActiveView('layanan-dinas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeView === 'design-system' && (
            <DesignSystemStudy brandTheme={brandTheme} setBrandTheme={setBrandTheme} />
          )}
        </div>
      </main>

      {/* Quiet Civic Footer with Compact Mini Map */}
      <Footer
        onSelectView={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToTab={(tab) => {
          setServicesTab(tab);
          setActiveView('layanan-dinas');
        }}
      />

      {/* Service Detail Drawer */}
      <ServiceDetailDrawer
        service={detailModalService}
        onClose={() => setDetailModalService(null)}
        onApply={(srv) => {
          setDetailModalService(null);
          setApplyModalService(srv);
        }}
      />

      {/* Service Application Wizard Modal */}
      <ServiceApplicationModal
        service={applyModalService}
        onClose={() => setApplyModalService(null)}
        onSubmitSuccess={handleApplySuccess}
      />

      {/* INA Pass / SSO Auth Modal with Registration and Login */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
