import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const ScrambledText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHJKMNOPQRSTUVWXYZ0123456789!@#$%&*';

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, [scramble, delay]);

  return <span>{displayText || text}</span>;
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 md:py-24 lg:py-32 space-y-24 md:space-y-40">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              <span className="font-mono text-[9px] text-accent uppercase tracking-wide-technical font-semibold">
                <ScrambledText text="OPERATOR IDENTIFIED: Gabriel D ISHENGOMA" />
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-[1.1] tracking-tight-professional uppercase">
            Strategic <span className="text-accent">Resilience</span> <br /> 
            for the Enterprise.
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl font-light leading-relaxed">
            Engineering robust security architectures and clinical forensic diagnostics to mitigate complex adversarial threats at scale.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-accent text-white font-semibold text-xs uppercase tracking-widest hover:bg-hover hover:scale-105 transition-all duration-300 cursor-pointer border-none shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)]"
            >
              Access Dossier
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="px-8 py-4 border border-border text-text font-semibold text-xs uppercase tracking-widest hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-pointer bg-transparent"
            >
              Consult Profile
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="p-8 border border-border bg-secondary/50 backdrop-blur-md relative group hover:border-accent transition-all duration-500">
            <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-accent/40 group-hover:bg-accent transition-colors"></div>
            <h3 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-8 font-bold">Metadata_Log</h3>
            <div className="space-y-4">
              {[
                { label: 'Operator', val: 'Gabriel D. Ishengoma' },
                { label: 'Role', val: 'Security Architect' },
                { label: 'Focus', val: 'Adversary Emulation' },
                { label: 'Node', val: 'Arusha-TZ-01' }
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-xs border-b border-border/20 pb-2">
                  <span className="text-muted uppercase font-medium">{item.label}</span>
                  <span className="text-text font-mono text-[11px]">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 p-12 md:p-20 border border-border text-center md:text-left rounded-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-accent/5 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
        <div className="max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text uppercase tracking-tight-professional">
            Validate Your <span className="text-accent italic">Security Posture.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            Targeted technical assessments designed for organizations requiring surgical precision in vulnerability management and defensive hardening.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="px-10 py-5 bg-accent text-white font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all cursor-pointer border-none shadow-[0_15px_30px_-15px_rgba(37,99,235,0.5)]"
          >
            Initiate Engagement
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;