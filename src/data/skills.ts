import { Skill } from '../types';

export const skills: Skill[] = [
  // Backend
  { name: '.NET Core', level: 90, category: 'backend' },
  { name: 'C#', level: 90, category: 'backend' },
  { name: 'ASP.NET Core', level: 85, category: 'backend' },
  { name: 'Entity Framework', level: 85, category: 'backend' },
  { name: 'Dapper', level: 80, category: 'backend' },
  { name: 'REST API', level: 90, category: 'backend' },
  { name: 'Microservices', level: 75, category: 'backend' },
  { name: 'SQL Server', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },

  // Frontend
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },

  // AI & Cloud
  { name: 'OpenAI API', level: 80, category: 'ai' },
  { name: 'Azure', level: 70, category: 'ai' },
  { name: 'Docker', level: 75, category: 'ai' },
  { name: 'Redis', level: 70, category: 'ai' },
  { name: 'RabbitMQ', level: 65, category: 'ai' },
  { name: 'Tesseract OCR', level: 70, category: 'ai' },
];

export const skillCategories = {
  backend: 'Backend Development',
  frontend: 'Frontend Development',
  ai: 'AI & DevOps Tools',
  other: 'Other',
};
