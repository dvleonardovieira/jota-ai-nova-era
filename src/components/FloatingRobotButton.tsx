
import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

const FloatingRobotButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToServices}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black border border-jota-neon text-jota-neon hover:bg-jota-neon/20 transition-all duration-300 shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-500`}
    >
      <div className="relative">
        <Bot size={24} />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-jota-neon rounded-full animate-pulse"></span>
      </div>
    </button>
  );
};

export default FloatingRobotButton;
