
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhySection from '@/components/WhySection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { handleScrollAnimations } from '@/lib/animations';

const Index = () => {
  useEffect(() => {
    // Initialize animations
    handleScrollAnimations();
    
    // Re-run on window resize to catch newly visible elements
    window.addEventListener('resize', handleScrollAnimations);
    
    return () => {
      window.removeEventListener('resize', handleScrollAnimations);
    };
  }, []);

  return (
    <div className="min-h-screen bg-notify-darker text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhySection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
