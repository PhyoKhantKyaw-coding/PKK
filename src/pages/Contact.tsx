import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'phyokhantkyaw187@gmail.com',
      href: 'mailto:phyokhantkyaw187@gmail.com',
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+959 972 737 107',
      href: 'tel:+959972737107',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yangon, Myanmar',
      gradient: 'from-fuchsia-600 to-pink-600',
    },
  ];

  return (
    <Section>
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's discuss your next project or opportunity"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <p className="text-gray-400 mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your visions. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all group"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient}`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{info.label}</div>
                  <div className="text-white font-medium group-hover:text-violet-300 transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-violet-950/50 via-black to-cyan-950/50 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-[50px]" />
            <div className="relative flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. Let's start a conversation!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
