import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScroll';

export default function ScrollToTop() {
  const { showButton, scrollToTop } = useScrollToTop();

  if (!showButton) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
