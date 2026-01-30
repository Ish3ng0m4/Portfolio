import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITIES } from '../constants';
import CapabilityCard from '../components/CapabilityCard';

const Capabilities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-12 md:py-20 lg:py-32">
      <header className="mb-16 md:mb-24 border-b border-border pb-12 md:pb-16">
        <div className="font-mono text-[10px] md:text-xs text-accent uppercase tracking-[0.4em] mb-4 md:6">Service Catalog</div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-text tracking-tighter uppercase">Capabilities</h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed font-light">
          Technical security services designed to identify and remediate weaknesses in enterprise ecosystems through data-driven analysis.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-32 mb-24 md:mb-48">
        {CAPABILITIES.map((cap) => (
          <CapabilityCard key={cap.title} capability={cap} />
        ))}
      </div>

      {/* Technical Scope Section with Scroll-Triggered Animation */}
      <section 
        ref={sectionRef}
        className="border border-border/40 bg-secondary/20 p-8 md:p-12 lg:p-20 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors duration-1000"></div>
        
        <div className={`flex items-center gap-6 md:gap-8 mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-text tracking-tight whitespace-nowrap">Technical Scope</h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-border to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {/* Ecosystems Column */}
          <div 
            className={`space-y-6 md:space-y-10 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 border-b border-border/60 pb-4 md:pb-5">
               <span className="w-1.5 h-1.5 bg-accent"></span>
               <h4 className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.3em] font-bold">Ecosystems</h4>
            </div>
            <ul className="space-y-4 md:space-y-6">
              {[
                'Hardened Linux Kernels',
                'Multi-Cloud Architecture (AWS/GCP)',
                'Hybrid Enterprise Infrastructure',
                'Containerized Orchestration (K8s)'
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start gap-3 md:gap-4 text-[13px] md:text-[14px] text-muted hover:text-text transition-all duration-700 group/item ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <span className="text-accent font-mono text-[9px] md:text-[10px] mt-1 opacity-40 group-hover/item:opacity-100 transition-opacity">0{idx+1}</span>
                  <span className="font-light leading-tight group-hover/item:translate-x-1 transition-transform duration-300 inline-block">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocols Column */}
          <div 
            className={`space-y-6 md:space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 border-b border-border/60 pb-4 md:pb-5">
               <span className="w-1.5 h-1.5 bg-accent"></span>
               <h4 className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.3em] font-bold">Protocols</h4>
            </div>
            <ul className="space-y-4 md:space-y-6">
              {[
                'TLS 1.3 / mTLS Enforcement',
                'Zero Trust Access (OIDC/SAML)',
                'BGP & Network Routing Integrity',
                'Encrypted Payload Analysis'
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start gap-3 md:gap-4 text-[13px] md:text-[14px] text-muted hover:text-text transition-all duration-700 group/item ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + (idx * 100)}ms` }}
                >
                  <span className="text-accent font-mono text-[9px] md:text-[10px] mt-1 opacity-40 group-hover/item:opacity-100 transition-opacity">0{idx+1}</span>
                  <span className="font-light leading-tight group-hover/item:translate-x-1 transition-transform duration-300 inline-block">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div 
            className={`space-y-6 md:space-y-10 md:col-span-2 lg:col-span-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 border-b border-border/60 pb-4 md:pb-5">
               <span className="w-1.5 h-1.5 bg-accent"></span>
               <h4 className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.3em] font-bold">Compliance</h4>
            </div>
            <ul className="space-y-4 md:space-y-6">
              {[
                'NIST 800-53 Technical Controls',
                'SOC2 Type II Operational Readiness',
                'PCI-DSS 4.0 Verification',
                'ISO/IEC 27001 ISMS Alignment'
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start gap-3 md:gap-4 text-[13px] md:text-[14px] text-muted hover:text-text transition-all duration-700 group/item ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${600 + (idx * 100)}ms` }}
                >
                  <span className="text-accent font-mono text-[9px] md:text-[10px] mt-1 opacity-40 group-hover/item:opacity-100 transition-opacity">0{idx+1}</span>
                  <span className="font-light leading-tight group-hover/item:translate-x-1 transition-transform duration-300 inline-block">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;