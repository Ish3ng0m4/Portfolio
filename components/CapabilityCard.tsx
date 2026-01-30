import React from 'react';
import { Capability } from '../types';

interface CapabilityCardProps {
  capability: Capability;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability }) => {
  return (
    <div className="group border-l-[3px] border-border hover:border-accent pl-10 py-6 transition-all duration-500">
      <div className="font-mono text-[10px] text-accent uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
        Security Domain
      </div>
      <h3 className="text-3xl font-bold mb-6 text-text group-hover:text-accent transition-colors duration-300">
        {capability.title}
      </h3>
      <p className="text-lg text-muted mb-10 leading-relaxed font-light italic">
        {capability.description}
      </p>
      <ul className="grid grid-cols-1 gap-5">
        {capability.points.map((point, idx) => (
          <li key={idx} className="text-[13px] font-medium text-text/90 flex items-center gap-5">
            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent group-hover:scale-125 transition-all"></span>
            <span className="tracking-wide">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapabilityCard;