
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
import RobotImage from '../components/RobotImage';

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
        
        <div className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
              <RobotImage 
                src="/lovable-uploads/73cd98df-cff7-433c-b5bb-8450d9ba0f25.png" 
                alt="AI Globe" 
                className="transform hover:-translate-y-4 transition-transform duration-500"
              />
              <RobotImage 
                src="/lovable-uploads/d68cbd46-a65a-4d2f-b7af-adec980ca9d0.png" 
                alt="AI Robot" 
                className="transform hover:translate-y-4 transition-transform duration-500"
              />
              <RobotImage 
                src="/lovable-uploads/1ad918e0-a482-46d5-8624-c7e88c3085ab.png" 
                alt="AI Workspace" 
                className="transform hover:-translate-y-4 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <ServicesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
