interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'glow';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-gray-300 border-white/10',
    primary: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    secondary: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    glow: 'bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-white border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border backdrop-blur-sm ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
