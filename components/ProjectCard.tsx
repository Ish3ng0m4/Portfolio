import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`border transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative font-sans overflow-hidden group ${
        isExpanded 
          ? 'border-accent bg-secondary/95 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_60px_rgba(37,99,235,0.4)] z-20 scale-[1.04]' 
          : 'border-border/60 bg-secondary/30 hover:border-accent hover:bg-secondary/50 hover:scale-[1.03] hover:z-20 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7),0_0_50px_rgba(37,99,235,0.3)]'
      }`}
    >
      {/* Scanning Line Animation: Intensifies on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent h-[1px] w-full animate-[scan_6s_linear_infinite]"></div>
      </div>

      {/* Decorative Corner Accents: Reactive glow */}
      <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20 transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${isExpanded ? 'w-14 h-14 border-accent opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/10 transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${isExpanded ? 'opacity-60 w-14 h-14 border-accent' : 'opacity-0'}`}></div>

      <div className="p-6 md:p-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
               <span className="font-mono text-[9px] text-accent/50 font-black tracking-[0.4em] uppercase transition-colors group-hover:text-accent">Dossier: {project.id}</span>
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tighter transition-all duration-500 uppercase ${isExpanded ? 'text-accent' : 'text-text group-hover:text-accent'}`}>
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed font-light max-w-2xl group-hover:text-text transition-colors duration-500">
              {project.description}
            </p>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto">
             <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3">
                <span className="text-[9px] font-mono text-muted/40 uppercase tracking-[0.2em] font-bold">Node_Status</span>
                <div className={`flex items-center gap-2 px-4 py-2 border transition-all duration-500 ${
                  isExpanded ? 'bg-accent/10 border-accent shadow-[0_0_15px_rgba(37,99,235,0.2)]' : 'bg-accent/[0.02] border-accent/20 group-hover:border-accent/80'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)] ${isExpanded ? 'bg-accent animate-pulse' : 'bg-accent/40 group-hover:bg-accent'}`}></span>
                  <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${isExpanded ? 'text-accent' : 'text-muted group-hover:text-accent'}`}>
                    {isExpanded ? 'Live_Audit' : 'Verified'}
                  </span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h4 className="font-mono text-[9px] text-accent/60 uppercase tracking-[0.4em] mb-4 font-black">Technical Stack_</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="text-[10px] text-text/60 font-mono tracking-tight bg-primary/20 px-3 py-2 border border-border/40 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all cursor-default select-none">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-4 flex justify-end">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group/btn flex items-center gap-5 text-[10px] font-mono text-accent uppercase tracking-[0.4em] hover:text-text transition-all cursor-pointer border-none bg-transparent p-2 focus:outline-none"
            >
              <span className="font-black border-b border-accent/10 group-hover/btn:border-accent transition-all duration-500">
                {isExpanded ? 'Archive_Dossier' : 'Inspect_Findings'}
              </span>
              <div className={`p-2.5 border transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isExpanded 
                  ? 'rotate-180 border-accent bg-accent/20 shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                  : 'border-accent/30 group-hover/btn:border-accent/80 group-hover/btn:bg-accent/10 group-hover/btn:shadow-[0_0_15px_rgba(37,99,235,0.2)]'
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Technical Results Area */}
      <div 
        className={`grid transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] border-t border-border/40 relative z-10 ${
          isExpanded ? 'grid-rows-[1fr] opacity-100 bg-primary/30' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className={`p-8 md:p-12 transition-all duration-1000 transform ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center gap-8 mb-12">
              <h4 className="font-mono text-[10px] text-accent uppercase tracking-[0.6em] font-black">Audit_Trail</h4>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/40 to-transparent"></div>
            </div>
            
            <div className="space-y-8">
              {project.outcomes.map((outcome, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-8 group/item transition-all duration-700 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-2.5 h-2.5 rotate-45 border border-accent/60 group-hover/item:bg-accent group-hover/item:shadow-[0_0_12px_rgba(37,99,235,0.7)] transition-all duration-500 mt-2"></div>
                    <div className="w-[1px] flex-grow bg-border/30 group-hover/item:bg-accent/50 transition-all my-3"></div>
                  </div>
                  <div className="pb-6">
                    <p className="text-[15px] md:text-[16px] text-muted leading-relaxed font-light group-hover/item:text-text transition-colors duration-500 max-w-3xl">
                      {outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;