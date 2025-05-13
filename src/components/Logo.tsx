import React from 'react';
const Logo: React.FC = () => {
  return <div className="flex flex-col items-start">
      <span className="text-2xl font-bold tracking-wider font-rajdhani">
        <span className="text-white">JOTASYSTEMS</span>
        <span className="text-jota-neon">.AI</span>
      </span>
      <span className="text-xs text-gray-200 italic mt-0.5">&quot;Inteligência que se adapta ao seu negócio&quot;</span>
    </div>;
};
export default Logo;