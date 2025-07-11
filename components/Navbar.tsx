"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Détecte si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-[#0B0518] text-white">
      <div className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>PREDICTION.LIVE</div>
      <button className={`bg-[#FF0052] hover:bg-[#d6004a] text-white font-bold transition-all rounded-full ${isMobile ? 'text-sm py-1.5 px-4' : 'py-2 px-6'}`}>
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
