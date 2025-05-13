
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="hidden md:block">
          <button className="bg-jota-neon hover:bg-opacity-80 text-black font-semibold py-2.5 px-6 rounded-md transition-all duration-300">
            Fale com um Agente de IA
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
