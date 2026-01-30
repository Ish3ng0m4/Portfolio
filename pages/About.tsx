import React from 'react';
import { EXPERIENCES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-7 space-y-20">
          <section>
            <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 font-bold">
              Identity_Report // ISHENGOMA.G
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-10 text-text tracking-tight-professional uppercase leading-none">
              Ishengoma
            </h1>
            <div className="space-y-6 text-lg text-muted leading-relaxed font-light">
              <p>
                As a cybersecurity practitioner, I specialize in <span className="text-text font-semibold">Resilience Engineering</span> and tactical security validation. I operate at the intersection of risk management and advanced technical exploitation.
              </p>
              <p>
                Based in <span className="text-text font-bold uppercase tracking-wide">Arusha, Tanzania</span>, I architect hardened infrastructures and conduct forensic investigations with a focus on evidentiary integrity and operational continuity.
              </p>
              <p>
                My methodology emphasizes <span className="text-accent font-medium italic">Continuous Technical Verification</span>, ensuring defensive controls are stress-tested against real-world adversarial tactics through surgical assessments.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-6 mb-12">
               <h2 className="text-xs font-mono text-text uppercase tracking-widest font-bold">Professional_History</h2>
               <div className="h-[1px] flex-grow bg-border/40"></div>
            </div>
            
            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="relative pl-8 border-l-2 border-border/60 hover:border-accent transition-all duration-500 pb-10 group bg-secondary/5 hover:bg-secondary/20 p-6 rounded-r-md cursor-default hover:scale-[1.02] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),0_0_30px_rgba(37,99,235,0.25)] hover-glow"
                >
                  <div className="absolute -left-[5px] top-7 w-2 h-2 bg-border group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(37,99,235,0.9)] transition-all duration-500"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-text tracking-tight uppercase group-hover:text-accent transition-colors duration-500">
                      {exp.role}
                    </h3>
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 border transition-all duration-500 ${
                      exp.period === 'Active Engagement' 
                        ? 'border-accent text-accent bg-accent/5 shadow-[0_0_10px_rgba(37,99,235,0.15)]' 
                        : 'border-border text-muted bg-secondary/20'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-accent/80 font-bold text-[10px] mb-4 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent/40 group-hover:w-8 group-hover:bg-accent transition-all duration-500"></span>
                    {exp.company}
                  </div>
                  <p className="text-muted text-base leading-relaxed font-light group-hover:text-text transition-colors duration-500">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div className="p-8 border border-border bg-secondary/30 rounded-sm">
            <h3 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-8 border-b border-border/40 pb-4 font-bold">
              Technical_Credentials
            </h3>
            <ul className="space-y-8">
              {[
                { title: 'CCSP', desc: 'Certified Cloud Security Professional' },
                { title: 'CC', desc: 'Certified in Cybersecurity' },
                { title: 'CNSP', desc: 'Certified Network Security Practitioner' },
                { title: 'CRTA', desc: 'Certified Red Team Analyst' },
                { title: 'DFC', desc: 'Digital Forensics Certified | EC-Council' },
                { title: 'TCRA RECOGNITION', desc: 'National Cyber Security Award 2023/24 - 2024/25' }
              ].map((cert) => (
                <li key={cert.title} className="group cursor-default">
                  <span className="block text-xl font-bold text-text group-hover:text-accent transition-colors uppercase tracking-tight">
                    {cert.title}
                  </span>
                  <span className="block text-[10px] text-muted uppercase tracking-widest mt-1 font-medium group-hover:text-muted/80 transition-colors">
                    {cert.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border border-border bg-secondary/50 group relative hover:border-accent/40 transition-colors duration-500">
            <div className="relative z-10">
              <h3 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 font-bold">
                Engagement_Channels
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light mb-8">
                For architectural reviews or confidential adversarial engagements, please utilize official professional channels.
              </p>
              <div className="flex gap-6">
                <a href="mailto:gabrieldishengoma@gmail.com" className="text-muted hover:text-accent transition-all hover:scale-110" title="Secure Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-d-ishengoma-1533631a5/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all hover:scale-110" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/Ish3ng0m4" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all hover:scale-110" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://x.com/GD_Ishengoma/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all hover:scale-110" title="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;