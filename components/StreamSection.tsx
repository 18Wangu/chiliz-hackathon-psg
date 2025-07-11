import React from 'react';

const StreamSection = () => {
  return (
    <div className="bg-[#0B0518] text-[#f5f5f5] p-4 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">Live Stream</h2>
      <div className="flex-grow bg-[#1a0e2e] rounded-lg flex items-center justify-center overflow-hidden">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/rocket-league-live1.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default StreamSection;
