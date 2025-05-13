
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="hidden md:block">
          <button 
            onClick={scrollToContact}
            className="bg-transparent hover:bg-jota-neon/10 text-white border border-jota-neon font-semibold py-2.5 px-6 rounded-md transition-all duration-300 hover:scale-105 transform"
          >
            Fale com um Agente de IA
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
