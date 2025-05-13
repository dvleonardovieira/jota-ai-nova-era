
import React from 'react';

interface RobotImageProps {
  src: string;
  alt: string;
  className?: string;
}

const RobotImage: React.FC<RobotImageProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-jota-neon/5 rounded-full blur-3xl animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img 
        src={src} 
        alt={alt} 
        className="relative z-10 w-full max-w-md mx-auto rounded-lg object-cover object-center transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
      />
      <div className="absolute inset-0 border-2 border-jota-neon/0 rounded-lg group-hover:border-jota-neon/30 transition-all duration-500 z-20"></div>
    </div>
  );
};

export default RobotImage;
