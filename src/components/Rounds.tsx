
import React, { useEffect } from 'react';
import { Lightbulb, Code, Trophy } from 'lucide-react';

const Rounds = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-round');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const rounds = [
    {
      number: "01",
      title: "Dot-Dash Decipher",
      icon: <Lightbulb size={28} className="text-tech-green" />,
      description: "Teams race against time to decode hidden messages.",
      rules: [
        "Each team will receive a set of encoded Morse code sequences.",
        "Teams must use the provided reference list to decode the word.",
        "Answers must be submitted within the time limit; late submissions wont be considered.",
        "The top teams with the fastest and most accurate answers will proceed to the next round."
      ]
    },
    {
      number: "02",
      title: "Coding Challenge",
      icon: <Code size={28} className="text-tech-green" />,
      description: "Solve algorithmic problems and demonstrate your coding skills under time pressure.",
      rules: [
        "Same teams from Round 1",
        "3 progressively difficult problems to solve",
        "Choice of programming languages: C, C++, Java, Python",
        "Evaluation based on correctness, efficiency and time taken",
        "Top teams qualify for the final round"
      ]
    },
    {
      number: "03",
      title: "Technical Innovation Challenge",
      icon: <Trophy size={28} className="text-tech-green" />,
      description: "Design and present a technical solution to a real-world problem.",
      rules: [
        "Finalists will receive a problem statement",
        "Design a technical solution with architecture diagram",
        "10-minute presentation followed by Q&A",
        "Judged by industry professionals",
        "Winners receive prizes and recognition"
      ]
    }
  ];

  return (
    <section 
      id="rounds" 
      className="py-20 bg-gradient-to-b from-charcoal to-charcoal/90"
    >
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 reveal-round">
          <h2 className="section-subtitle">Challenge Yourself</h2>
          <h3 className="section-title">Event <span className="text-tech-green">Rounds</span></h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            TECH-TREX features three challenging rounds that will test different aspects of your technical knowledge and skills.
          </p>
        </div>
        
        <div className="space-y-12 mt-16">
          {rounds.map((round, index) => (
            <div 
              key={index} 
              className="glass-card p-8 opacity-0 reveal-round relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Round number background */}
              <div className="absolute -right-10 -top-10 text-[180px] font-bold text-tech-green/5 select-none pointer-events-none">
                {round.number}
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-lg bg-tech-green/10 mb-4 md:mb-0">
                    {round.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      Round {round.number}: {round.title}
                    </h4>
                    <p className="text-white/70 mb-6 max-w-2xl">
                      {round.description}
                    </p>
                    
                    <div className="bg-charcoal/50 p-6 rounded-lg border border-white/5">
                      <h5 className="text-lg font-semibold text-tech-green mb-4">Rules</h5>
                      <ul className="space-y-3">
                        {round.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2">
                            <span className="text-tech-green mt-1">•</span>
                            <span className="text-white/80">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rounds;
