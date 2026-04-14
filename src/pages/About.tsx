import { motion } from 'framer-motion';
import { Code, Database, Brain, Cloud, MapPin } from 'lucide-react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';

const highlights = [
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Expert in .NET Core, C#, and building scalable RESTful APIs with microservices architecture.',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    icon: Code,
    title: 'Full-Stack Skills',
    description: 'Proficient in React, Vue.js, and modern frontend technologies for complete solutions.',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Experience integrating OpenAI, OCR, and machine learning into production applications.',
    gradient: 'from-fuchsia-600 to-pink-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Skilled in Azure, Docker, and modern deployment practices for scalable systems.',
    gradient: 'from-emerald-600 to-teal-600',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer focused on building robust, scalable solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-cyan-600/20 to-fuchsia-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="aspect-square bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">PK</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Yangon, Myanmar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hi, I'm <span className="text-gradient">Phyo Khant Kyaw</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A Mid-Level .NET Developer with a passion for building scalable backend systems and
                integrating cutting-edge AI technologies. With over 3 years of professional
                experience, I specialize in creating robust APIs, microservices, and full-stack
                applications.
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">
              My journey in software development has led me to work on diverse projects ranging from
              e-commerce platforms to AI-powered document processing systems. I'm constantly learning
              and exploring new technologies to deliver the best solutions.
            </p>
            
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
