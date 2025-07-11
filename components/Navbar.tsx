import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#0B0518] text-white">
      <div className="text-xl font-bold">PREDICTION.LIVE</div>
      <button className="bg-[#FF0052] hover:bg-[#d6004a] text-white font-bold py-2 px-6 rounded-full transition-all">
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
