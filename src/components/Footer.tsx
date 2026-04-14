import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Github, href: 'https://github.com/PhyoKhantKyaw-coding', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/phyo-khant-kyaw-282674265/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:phyokhantkyaw187@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Learning Notes', path: '/learning-notes' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-600/10 rounded-full blur-[60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-gradient">PKK</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Mid-Level .NET Developer specializing in building scalable APIs, AI integration, and microservices architecture.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Available for freelance work</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Phyo Khant Kyaw. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
