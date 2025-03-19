
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 10,
    seconds: 40
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date('April 4, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    } else {
      // If the date has passed
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    // Calculate immediately on mount
    calculateTimeLeft();
    
    // Set up the interval
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="glass-card p-6 lg:p-8 max-w-3xl mx-auto">
      <h3 className="text-center text-white text-xl md:text-2xl font-bold mb-6">
        Event Starts In
      </h3>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeBlocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-tech-green mb-1 md:mb-2">
              {String(block.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-white/60">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
