
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between items-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
