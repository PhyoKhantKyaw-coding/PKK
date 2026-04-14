import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <Section>
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and achievements"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-cyan-600 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-0"
              >
                <div className="hidden md:block w-16 flex-shrink-0 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 shadow-lg shadow-violet-500/50"
                  />
                </div>

                <div className="flex-1 md:ml-4 relative">
                  <div className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 md:hidden" />
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-violet-400 font-medium mt-1">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-3 md:mt-0 px-3 py-1.5 rounded-full bg-white/5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-400 mb-5">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                              className="flex items-start gap-3 text-gray-400 text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mt-1.5 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border border-white/10 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Want to work together?
          </h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:from-violet-500 hover:to-cyan-500 transition-all group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
