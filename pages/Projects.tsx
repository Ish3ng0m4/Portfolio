import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 max-w-5xl mx-auto">
      <header className="mb-24 border-b border-border pb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-text tracking-tighter uppercase leading-[0.9]">Strategic <br />Engagements</h1>
        <p className="text-xl text-muted leading-relaxed font-light max-w-4xl">
          Detailed logs of high-impact security assessments, forensic investigations, and architectural hardening projects delivered across enterprise-grade ecosystems.
        </p>
      </header>

      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;