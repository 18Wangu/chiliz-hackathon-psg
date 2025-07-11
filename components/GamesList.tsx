import React from 'react';
import Image from 'next/image';

// Team logos with correct paths
const teams = [
  { id: 1, name: 'Falcons', logo: '/falcons.png' },
  { id: 2, name: 'Vitality', logo: '/vitality.png' },
  { id: 3, name: 'KCorp', logo: '/kcorp.png' },
  { id: 4, name: 'BDS', logo: '/bdsh.png' },
  { id: 5, name: 'G2 Esports', logo: '/g2esport.png' },
  { id: 6, name: 'NRG', logo: '/nrg.png' },
  { id: 7, name: 'FaZe Clan', logo: '/faze-clan.png' },
  { id: 8, name: 'Moist Esports', logo: '/moist-esport.png' },
  { id: 9, name: 'Dignitas', logo: '/Dignitas.png' },
  { id: 10, name: 'FURIA', logo: '/furia.png' },
  { id: 11, name: 'Spacestation', logo: '/Spacestation.png' },
  { id: 12, name: 'Gen.G', logo: '/gen-g.png' },
];

// Sample matches
const matches = [
  { id: 1, team1: 1, team2: 2 }, // Falcons vs Vitality
  { id: 2, team1: 3, team2: 4 }, // KCorp vs BDS
  { id: 3, team1: 1, team2: 3 }, // Falcons vs KCorp
  { id: 4, team1: 5, team2: 6 }, // G2 Esports vs NRG
  { id: 5, team1: 7, team2: 8 }, // FaZe Clan vs Moist Esports
  { id: 6, team1: 9, team2: 10 }, // Dignitas vs FURIA
  { id: 7, team1: 11, team2: 12 }, // Spacestation vs Gen.G
  { id: 8, team1: 2, team2: 5 }, // Vitality vs G2 Esports
  { id: 9, team1: 4, team2: 7 }, // BDS vs FaZe Clan
  { id: 10, team1: 6, team2: 9 }, // NRG vs Dignitas
];

const GamesList = () => {
  return (
    <div className="bg-[#0B0518] text-[#f5f5f5] p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Games</h2>
      <div className="space-y-4">
        {matches.map((match) => {
          const team1 = teams.find(t => t.id === match.team1);
          const team2 = teams.find(t => t.id === match.team2);
          
          return (
            <div key={match.id} className="bg-[#1a0e2e] p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 relative mr-2 flex items-center justify-center bg-[#0B0518] rounded-full overflow-hidden">
                  <Image 
                    src={team1?.logo || ''}
                    alt={team1?.name || ''}
                    width={32}
                    height={32}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <span>{team1?.name}</span>
              </div>
              
              <span className="mx-2">vs</span>
              
              <div className="flex items-center">
                <span>{team2?.name}</span>
                <div className="w-8 h-8 relative ml-2 flex items-center justify-center bg-[#0B0518] rounded-full overflow-hidden">
                  <Image 
                    src={team2?.logo || ''}
                    alt={team2?.name || ''}
                    width={32}
                    height={32}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesList;
