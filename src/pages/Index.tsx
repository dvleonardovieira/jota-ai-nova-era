
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NeuralNetwork from '../components/NeuralNetwork';
import FloatingRobotButton from '../components/FloatingRobotButton';
import { initAnimations } from '../lib/animations';

const Index = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="bg-jota-dark min-h-screen text-white overflow-x-hidden">
      <NeuralNetwork />
      <Header />
      <FloatingRobotButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
