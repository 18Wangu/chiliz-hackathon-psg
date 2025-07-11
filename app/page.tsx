"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GamesList from "../components/GamesList";
import StreamSection from "../components/StreamSection";
import ChatSection from "../components/ChatSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("stream");
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
    <div className="flex flex-col h-screen">
      <div className="relative">
        <Navbar />
        <div className="h-[4px] bg-gradient-to-r from-[#0B0518] via-[#FF0052] to-[#0B0518]"></div>
        <div className="absolute w-full h-6 bg-gradient-to-b from-[rgba(255,0,82,0.2)] to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-[#FF0052] opacity-30"></div>
      </div>
      
      {/* Navigation par onglets pour mobile */}
      {isMobile && (
        <div className="flex justify-around bg-[#0B0518] border-b border-[#FF0052] py-2">
          <button 
            onClick={() => setActiveTab("games")} 
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "games" ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Games
          </button>
          <button 
            onClick={() => setActiveTab("stream")} 
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "stream" ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Stream
          </button>
          <button 
            onClick={() => setActiveTab("chat")} 
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "chat" ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Chat
          </button>
        </div>
      )}
      
      {/* Affichage desktop */}
      {!isMobile && (
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/4">
            <GamesList />
          </div>
          <div className="w-2/4">
            <StreamSection />
          </div>
          <div className="w-1/4">
            <ChatSection />
          </div>
        </div>
      )}
      
      {/* Affichage mobile */}
      {isMobile && (
        <div className="flex-1 overflow-hidden">
          {activeTab === "games" && <GamesList />}
          {activeTab === "stream" && <StreamSection />}
          {activeTab === "chat" && <ChatSection />}
        </div>
      )}
    </div>
  );
}
