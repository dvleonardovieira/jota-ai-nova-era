
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-jota-dark min-h-screen text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
