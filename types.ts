
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  techStack: string[];
}

export interface Capability {
  title: string;
  description: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export type Page = 'home' | 'projects' | 'capabilities' | 'about';
