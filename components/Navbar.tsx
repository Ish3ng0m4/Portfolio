import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'STATUS', page: 'home' },
    { label: 'DOSSIER', page: 'projects' },
    { label: 'CAPABILITIES', page: 'capabilities' },
    { label: 'PROFILE', page: 'about' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 nav-glass border-b border-border/40 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        <button 
          onClick={() => handleNavigate('home')} 
          className="flex items-center gap-5 group focus:outline-none"
        >
          {/* Enhanced Monogram: Multi-layered security mark */}
          <div className="w-11 h-11 flex items-center justify-center bg-secondary/30 border border-border/60 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500 relative overflow-hidden">
            <span className="font-mono text-[10px] font-black text-text/60 group-hover:text-accent transition-colors z-10">GDI</span>
            
            {/* Pulsing Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent/40 group-hover:border-accent transition-all duration-500 group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent/40 group-hover:border-accent transition-all duration-500 group-hover:animate-pulse"></div>
            
            {/* Scanning line for the box */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent h-[2px] w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
          </div>
          
          <div className="flex flex-col text-left leading-none">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black tracking-[-0.04em] text-text uppercase transition-all duration-500 group-hover:tracking-[0.1em] group-hover:text-accent">
                ISHENGOMA
              </span>
            </div>
            <span className="text-[7px] font-mono text-muted/50 uppercase tracking-[0.4em] font-bold mt-1.5 transition-colors group-hover:text-muted/80">
              Cybersecurity Practitioner
            </span>
          </div>
        </button>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-10 items-center">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button 
                  key={item.page}
                  onClick={() => handleNavigate(item.page)} 
                  className="relative py-2 group"
                >
                  <span className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    isActive ? 'text-accent' : 'text-text/50 group-hover:text-text'
                  }`}>
                    {item.label}
                  </span>
                  <div className={`absolute bottom-0 left-0 h-[1.5px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </button>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-border/40 hidden md:block"></div>
          
          {/* Enhanced Theme Toggle */}
          <button 
            onClick={onToggleTheme}
            aria-label="Toggle visual mode"
            className={`h-9 px-4 border flex items-center gap-3 group active:scale-95 transition-all duration-300 relative overflow-hidden ${
              isDarkMode 
                ? 'bg-secondary/40 border-accent/40 hover:border-accent shadow-[0_0_15px_rgba(37,99,235,0.1)]' 
                : 'bg-white border-border hover:border-muted shadow-sm'
            }`}
          >
            <div className="flex flex-col h-full justify-center">
              <span className={`font-mono text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                isDarkMode ? 'text-accent' : 'text-muted'
              }`}>
                {isDarkMode ? 'NIGHT' : 'DAY'}
              </span>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-accent animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)] scale-110' 
                  : 'bg-muted/30 scale-90'
              }`}></div>
              {isDarkMode && (
                 <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm animate-ping"></div>
              )}
            </div>
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-text p-1 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" className={`transition-all ${isMenuOpen ? 'opacity-0' : ''}`}/>
              <line x1="4" x2="20" y1="6" y2="6" className={`transition-all ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}/>
              <line x1="4" x2="20" y1="18" y2="18" className={`transition-all ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-primary/98 backdrop-blur-2xl border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`text-left text-[11px] font-bold tracking-widest uppercase transition-colors ${currentPage === item.page ? 'text-accent' : 'text-text/50'}`}
            >
              {item.label}
            </button>
          ))}
          {/* Mobile Theme Toggle integration */}
          <button 
            onClick={onToggleTheme}
            className="flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-text/50 pt-2 border-t border-border/20"
          >
            <span>Appearance</span>
            <span className="text-accent">{isDarkMode ? 'NIGHT' : 'DAY'}</span>
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;