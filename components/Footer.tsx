import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border mt-24 lg:mt-32 py-12 lg:py-16 bg-primary/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 lg:pb-16">
          
          {/* Expanded Brand Identity Block */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-accent/40 flex items-center justify-center bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5"></div>
                <span className="font-mono text-[10px] font-black text-accent tracking-tighter">GDI</span>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent/60"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent/60"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-[-0.02em] text-text uppercase">
                  ISHENGOMA
                </span>
                <span className="text-[9px] font-mono text-accent/60 uppercase tracking-[0.3em] font-bold">
                  Cybersecurity Practitioner
                </span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm font-light">
              High-fidelity adversarial emulation and forensic analysis for global enterprise environments. Operating with clinical precision and operational integrity across complex security domains.
            </p>
          </div>

          {/* Social Protocol */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest font-black">Social_Protocol</h4>
            <div className="flex gap-4 pt-2">
              <a 
                href="mailto:gabrieldishengoma@gmail.com" 
                className="group flex items-center justify-center w-10 h-10 border border-border/60 text-accent/50 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-500 hover:scale-105" 
                aria-label="Secure Communication"
                title="Secure Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/gabriel-d-ishengoma-1533631a5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-10 h-10 border border-border/60 text-accent/50 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-500 hover:scale-105" 
                aria-label="LinkedIn Professional Dossier"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a 
                href="https://github.com/Ish3ng0m4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-10 h-10 border border-border/60 text-accent/50 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-500 hover:scale-105" 
                aria-label="GitHub Repository"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a 
                href="https://x.com/GD_Ishengoma/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-10 h-10 border border-border/60 text-accent/50 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-500 hover:scale-105" 
                aria-label="X Operational Updates"
                title="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          {/* Operational Metadata */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest font-black">Operational Metadata</h4>
            <div className="space-y-3 font-mono text-[9px] md:text-[10px] text-muted uppercase leading-relaxed">
              <div className="flex justify-between border-b border-border/50 pb-1.5">
                <span>Home Base</span>
                <span className="text-text">Arusha, Tanzania</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-1.5">
                <span>Status</span>
                <span className="text-text flex items-center gap-2">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                  Active Operations
                </span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-1.5">
                <span>Practitioner</span>
                <span className="text-text">Ishengoma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-border flex justify-center items-center">
          <div className="font-mono text-[8px] md:text-[9px] text-muted uppercase tracking-[0.2em] text-center">
            © 2026 Ishengoma // All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;