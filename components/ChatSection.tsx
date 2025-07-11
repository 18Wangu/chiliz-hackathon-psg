"use client";

import React, { useState } from 'react';

const ChatSection = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowPopup(true);
  };

  const handleConfirm = () => {
    // Here you would handle the bet confirmation
    setShowPopup(false);
    // You could add a confirmation message to the chat
  };

  return (
    <div className="bg-[#0B0518] text-[#f5f5f5] p-4 h-full flex flex-col relative">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      
      {/* Betting question box */}
      <div className="bg-[#1a0e2e] rounded-lg p-4 mb-4 border border-[#FF0052]">
        <h3 className="text-center font-bold mb-3">La team Vitality va t'elle marquer le prochain but ?</h3>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => handleOptionSelect('oui')}
            className={`px-6 py-2 rounded-full font-bold ${selectedOption === 'oui' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Oui
          </button>
          <button 
            onClick={() => handleOptionSelect('non')}
            className={`px-6 py-2 rounded-full font-bold ${selectedOption === 'non' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
          >
            Non
          </button>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-grow bg-[#1a0e2e] rounded-lg mb-4 overflow-y-auto p-3">
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User1:</span> Hello everyone!
          </div>
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User2:</span> Great match today!
          </div>
          <div className="text-sm">
            <span className="font-bold text-[#FF0052]">User3:</span> Can't wait for the next game!
          </div>
        </div>
      </div>
      
      {/* Message input */}
      <div className="flex">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-grow bg-[#1a0e2e] text-[#f5f5f5] p-2 rounded-l-lg focus:outline-none"
        />
        <button className="bg-[#FF0052] hover:bg-[#d6004a] text-white px-4 rounded-r-lg transition-all">
          Send
        </button>
      </div>
      
      {/* Confirmation popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0B0518] p-6 rounded-lg border-2 border-[#FF0052] max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center">La team Vitality va t'elle marquer le prochain but ?</h3>
            <div className="flex justify-center space-x-4 mb-6">
              <button 
                onClick={() => setSelectedOption('oui')}
                className={`px-6 py-2 rounded-full font-bold ${selectedOption === 'oui' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
              >
                Oui
              </button>
              <button 
                onClick={() => setSelectedOption('non')}
                className={`px-6 py-2 rounded-full font-bold ${selectedOption === 'non' ? 'bg-[#FF0052] text-white' : 'bg-[#2a1c3e] text-[#f5f5f5]'}`}
              >
                Non
              </button>
            </div>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleConfirm}
                className="bg-[#FF0052] hover:bg-[#d6004a] text-white font-bold py-2 px-6 rounded-full transition-all"
              >
                Valider
              </button>
              <button 
                onClick={() => setShowPopup(false)}
                className="bg-[#2a1c3e] hover:bg-[#3a2c4e] text-[#f5f5f5] font-bold py-2 px-6 rounded-full transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
