import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CareerHubSection } from './components/CareerHubSection';
import { AboutHCMUT } from './components/AboutHCMUT';
import { AdmissionSimulator } from './components/AdmissionSimulator';
import { SalaryPredictor } from './components/SalaryPredictor';
import { CareerSorter } from './components/CareerSorter';
import { LeadCaptureModal } from './components/LeadCaptureModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('');

  const handleOpenModal = (context: string) => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navigation />
      <HeroSection />
      <CareerHubSection onOpenModal={handleOpenModal} />
      <AboutHCMUT />
      <AdmissionSimulator onOpenModal={handleOpenModal} />
      <SalaryPredictor onOpenModal={handleOpenModal} />
      <CareerSorter onOpenModal={handleOpenModal} />
      
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        context={modalContext}
      />
    </div>
  );
}
