import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Badge from '@/components/Badge';
import { projects } from '@/data/projects';

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', bounce: 0.3 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5 rotate-45" />
        </button>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="glow">{tech}</Badge>
            ))}
          </div>

          <p className="text-gray-300 text-lg mb-8">{project.description}</p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400" />
              Key Features
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <ChevronRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section>
      <SectionTitle
        title="Featured Projects"
        subtitle="A showcase of my work and technical expertise"
      />

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="default">+{project.tech.length - 4}</Badge>
                  )}
                </div>

                <div className="flex items-center text-sm text-violet-400 group-hover:text-violet-300 transition-colors">
                  <span>View details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
