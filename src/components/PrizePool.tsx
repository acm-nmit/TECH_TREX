
import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    { 
      position: '1st', 
      amount: '₹2,500', 
      icon: <Trophy size={38} className="text-yellow-400" />,
      gradient: "from-yellow-400 via-yellow-300 to-yellow-200"
    },
    { 
      position: '2nd', 
      amount: '₹1,500', 
      icon: <Trophy size={32} className="text-gray-300" />,
      gradient: "from-gray-300 via-gray-200 to-gray-100"
    },
    { 
      position: '3rd', 
      amount: '₹1,000', 
      icon: <Trophy size={28} className="text-amber-700" />,
      gradient: "from-amber-700 via-amber-600 to-amber-500"
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 reveal">
          <h2 className="section-subtitle flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-yellow-400" />
            Rewards
            <Sparkles size={16} className="text-yellow-400" />
          </h2>
          <h3 className="section-title">Prize <span className="text-tech-green">Pool</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 opacity-0 reveal`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-10`}></div>
              
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tech-green via-tech-green-dark to-tech-green rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition duration-300"></div>
              
              <div className="relative glass-card p-8 flex flex-col items-center text-center border-t border-white/20">
                <div className="mb-4 transform hover:rotate-12 transition-transform duration-300">
                  {prize.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{prize.position} Place</h4>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-green to-tech-green-dark">{prize.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
