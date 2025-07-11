"use client";

import React, { useState, useEffect, useRef } from 'react';

const StreamSection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Gestion des erreurs de vidéo
  useEffect(() => {
    const handleVideoError = () => {
      if (videoRef.current) {
        setVideoError(true);
        console.error('Erreur de chargement de la vidéo');
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', handleVideoError);
      return () => {
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, []);

  return (
    <div className="bg-[#0B0518] text-[#f5f5f5] p-3 sm:p-4 h-full flex flex-col">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Live Stream</h2>
      <div className="flex-grow bg-[#1a0e2e] rounded-lg flex items-center justify-center overflow-hidden">
        {/* Utilisation d'une iframe YouTube comme solution fiable */}
        <div className="relative w-full h-full">
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/UT00dGBnvjw?autoplay=1&mute=1&loop=1&playlist=UT00dGBnvjw&controls=0&showinfo=0" 
            title="Rocket League Live Stream" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StreamSection;
