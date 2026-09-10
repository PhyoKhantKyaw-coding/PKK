interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'glow';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-black/5 dark:bg-white/10 text-black dark:text-white border-black/10 dark:border-white/10',
    primary: 'bg-violet-100 dark:bg-violet-500/20 text-black dark:text-white border-violet-300 dark:border-violet-500/30',
    secondary: 'bg-cyan-100 dark:bg-cyan-500/20 text-black dark:text-white border-cyan-300 dark:border-cyan-500/30',
    glow: 'bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-500/20 dark:to-fuchsia-500/20 text-black dark:text-white border-black/10 dark:border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border backdrop-blur-sm ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
