export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: 'backend' | 'frontend' | 'fullstack' | 'ai';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'ai' | 'other';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
