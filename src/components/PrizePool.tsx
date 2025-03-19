
import React from 'react';
import { Trophy } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    { position: '1st', amount: '₹2,500', icon: <Trophy size={32} className="text-yellow-400" /> },
    { position: '2nd', amount: '₹1,500', icon: <Trophy size={28} className="text-gray-300" /> },
    { position: '3rd', amount: '₹1,000', icon: <Trophy size={24} className="text-amber-700" /> },
  ];

  return (
    <div className="py-16 bg-charcoal/70">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 reveal">
          <h2 className="section-subtitle">Rewards</h2>
          <h3 className="section-title">Prize <span className="text-tech-green">Pool</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col items-center text-center opacity-0 reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                {prize.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{prize.position} Place</h4>
              <p className="text-3xl font-bold text-tech-green">{prize.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
