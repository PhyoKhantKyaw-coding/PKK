import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { skills } from '@/data/skills';

const categoryLabels: Record<string, { label: string; gradient: string }> = {
  backend: { label: 'Backend', gradient: 'from-violet-600 to-purple-600' },
  frontend: { label: 'Frontend', gradient: 'from-cyan-600 to-blue-600' },
  database: { label: 'Database', gradient: 'from-emerald-600 to-teal-600' },
  devops: { label: 'DevOps', gradient: 'from-orange-600 to-red-600' },
  ai: { label: 'AI & ML', gradient: 'from-fuchsia-600 to-pink-600' },
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <Section>
      <SectionTitle
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with"
      />

      <div className="space-y-16">
        {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryLabels[category]?.gradient || 'from-gray-600 to-gray-600'} text-white text-sm font-medium`}>
                {categoryLabels[category]?.label || category}
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 cursor-pointer transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2">
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-violet-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-violet-950/50 via-black to-cyan-950/50 border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-600/20 rounded-full blur-[60px] animation-delay-2000" />
        
        <div className="relative text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technology evolves rapidly, and I stay at the forefront by continuously exploring 
            new frameworks, tools, and best practices to deliver cutting-edge solutions.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
