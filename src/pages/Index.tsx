
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AppShowcaseSection from '@/components/AppShowcaseSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhySection from '@/components/WhySection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { handleScrollAnimations } from '@/lib/animations';

const Index = () => {
  useEffect(() => {
    // Initialize animations
    handleScrollAnimations();
    
    // Re-run animations when elements become visible during scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Re-run on window resize to catch newly visible elements
    window.addEventListener('resize', handleScrollAnimations);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('resize', handleScrollAnimations);
    };
  }, []);

  return (
    <div className="min-h-screen bg-notify-darker text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <HowItWorksSection />
      <WhySection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
