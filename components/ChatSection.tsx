"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Données fictives pour les Fan Tokens de l'utilisateur
const userFanTokens = {
  Falcons: 120,
  Vitality: 85,
  KCorp: 50,
  BDS: 30,
  "G2 Esports": 45,
  NRG: 25,
  "FaZe Clan": 15,
  "Moist Esports": 10,
  Dignitas: 5,
  FURIA: 20,
  Spacestation: 15,
  "Gen.G": 10
};

// Cotes fixes pour les paris (pour le frontend uniquement)
const odds = {
  win: 2.5,
  lose: 1.8
};

const ChatSection = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [betAmount, setBetAmount] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('Vitality'); // Par défaut Vitality

  // La détection mobile est gérée au niveau de la page principale (app/page.tsx)

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Accepter uniquement les nombres
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setBetAmount(value);
    }
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(e.target.value);
  };

  const handlePlaceBet = () => {
    // Ici vous traiteriez la confirmation du pari avec le backend
    // Pour l'instant, nous affichons juste un message dans la console
    console.log(`Pari placé: ${selectedOption}, Équipe: ${selectedTeam}, Montant: ${betAmount} Fan Tokens`);
    // Vous pourriez ajouter un message de confirmation au chat
  };

  return (
    <div className="bg-[#0B0518] text-[#f5f5f5] p-3 sm:p-4 h-full flex flex-col relative">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Chat</h2>
      
      {/* Betting question box */}
      <div className="bg-[#1a0e2e] rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-[#FF0052]">
        <h3 className="text-center font-bold mb-2 sm:mb-3 text-sm sm:text-base">La team Vitality va t&apos;elle marquer le prochain but ?</h3>
        
        {/* Options de pari */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-3">
          <button 
            onClick={() => handleOptionSelect('oui')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base ${selectedOption === 'oui' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Oui
          </button>
          <button 
            onClick={() => handleOptionSelect('non')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base ${selectedOption === 'non' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Non
          </button>
        </div>
        
        {/* Informations sur les Fan Tokens */}
        <div className="bg-[#0B0518] rounded-lg p-2 mb-3">
          <h4 className="text-sm font-semibold mb-2 text-[#FF0052]">Vos Fan Tokens</h4>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="w-5 h-5 relative mr-1 flex items-center justify-center bg-[#0B0518] rounded-full overflow-hidden border border-[#2a1c3e]">
                <Image 
                  src="/falcons.png" 
                  alt="Falcons" 
                  width={20} 
                  height={20} 
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <span className="text-xs">Falcons:</span>
            </div>
            <span className="text-xs font-semibold">{userFanTokens.Falcons} tokens</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-5 h-5 relative mr-1 flex items-center justify-center bg-[#0B0518] rounded-full overflow-hidden border border-[#2a1c3e]">
                <Image 
                  src="/vitality.png" 
                  alt="Vitality" 
                  width={20} 
                  height={20} 
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <span className="text-xs">Vitality:</span>
            </div>
            <span className="text-xs font-semibold">{userFanTokens.Vitality} tokens</span>
          </div>
        </div>
        
        {/* Section de pari */}
        {selectedOption && (
          <div className="bg-[#0B0518] rounded-lg p-2 mb-2">
            <h4 className="text-sm font-semibold mb-2 text-[#FF0052]">Placer votre pari</h4>
            
            {/* Sélection du token à parier */}
            <div className="mb-2">
              <label className="text-xs mb-1 block">Parier avec</label>
              <select 
                value={selectedTeam} 
                onChange={handleTeamChange}
                className="w-full bg-[#1a0e2e] text-[#f5f5f5] text-xs p-1.5 rounded focus:outline-none border border-[#2a1c3e]"
              >
                <option value="Falcons">Falcons Fan Token</option>
                <option value="Vitality">Vitality Fan Token</option>
              </select>
            </div>
            
            {/* Montant du pari */}
            <div className="mb-2">
              <label className="text-xs mb-1 block">Montant</label>
              <div className="flex">
                <input 
                  type="text" 
                  value={betAmount} 
                  onChange={handleBetAmountChange}
                  placeholder="0" 
                  className="w-full bg-[#1a0e2e] text-[#f5f5f5] text-xs p-1.5 rounded-l focus:outline-none border border-[#2a1c3e]"
                />
                <span className="bg-[#2a1c3e] text-xs px-2 flex items-center rounded-r">Tokens</span>
              </div>
            </div>
            
            {/* Cote et gain potentiel */}
            <div className="flex justify-between text-xs mb-3">
              <span>Cote: {selectedOption === 'oui' ? odds.win : odds.lose}</span>
              <span>Gain potentiel: {betAmount ? (parseFloat(betAmount) * (selectedOption === 'oui' ? odds.win : odds.lose)).toFixed(1) : '0'} tokens</span>
            </div>
            
            {/* Bouton de validation */}
            <button 
              onClick={handlePlaceBet}
              disabled={!betAmount || parseInt(betAmount) <= 0}
              className={`w-full py-1.5 rounded-full font-bold text-sm ${betAmount && parseInt(betAmount) > 0 ? 'bg-[#FF0052] hover:bg-[#d6004a] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5] opacity-50'} transition-all`}
            >
              Valider le pari
            </button>
          </div>
        )}
        
        {/* Bouton pour acheter des Fan Tokens */}
        <button className="w-full bg-[#2a1c3e] hover:bg-[#3a2c4e] text-[#f5f5f5] text-xs py-1.5 px-4 rounded-full transition-all">
          Acheter des Fan Tokens
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-grow bg-[#1a0e2e] rounded-lg mb-3 sm:mb-4 overflow-y-auto p-2 sm:p-3">
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User1:</span> Hello everyone!
          </div>
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User2:</span> Great match today!
          </div>
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User3:</span> Can&apos;t wait for the next game!
          </div>
        </div>
      </div>
      
      {/* Message input */}
      <div className="flex">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-grow bg-[#1a0e2e] text-[#f5f5f5] p-1.5 sm:p-2 text-sm sm:text-base rounded-l-lg focus:outline-none"
        />
        <button className="bg-[#FF0052] hover:bg-[#d6004a] text-white px-3 sm:px-4 text-sm sm:text-base rounded-r-lg transition-all">
          Send
        </button>
      </div>
      
      {/* La popup a été supprimée comme demandé */}
    </div>
  );
};

export default ChatSection;
