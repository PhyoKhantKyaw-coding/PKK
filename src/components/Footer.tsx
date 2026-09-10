import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/PhyoKhantKyaw-coding', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/phyo-khant-kyaw-282674265/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:phyokhantkyaw187@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-black border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-50 dark:from-violet-950/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-200 dark:bg-violet-600/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-200 dark:bg-cyan-600/10 rounded-full blur-[60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-violet-600 dark:text-violet-400">PKK</span>
            </a>
            <p className="text-black dark:text-white text-sm mb-6">
              Mid-Level .NET Developer specializing in building scalable APIs, AI integration, and microservices architecture.
            </p>
            <div className="flex items-center gap-2 text-sm text-black dark:text-white">
              <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400" />
              <span>Available for freelance work</span>
            </div>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white hover:text-violet-600 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-violet-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black dark:text-white text-sm">
            © {new Date().getFullYear()} Phyo Khant Kyaw. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
