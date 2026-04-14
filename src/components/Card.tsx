import { cn } from '@/utils/helpers';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'glow' | 'interactive';
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({ 
  variant = 'default', 
  hover = true, 
  className, 
  children,
  ...props 
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-500 opacity-0 animate-fade-in-up';

  const variants = {
    default: 'bg-white/5 border border-white/10',
    glass: 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl',
    glow: 'bg-black/40 border border-white/10 shadow-lg shadow-violet-500/10',
    interactive: 'bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10',
  };

  const hoverStyles = hover
    ? variant === 'glow'
      ? 'hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/30 hover:-translate-y-2'
      : 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-2'
    : '';

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      style={{ animationFillMode: 'forwards' }}
      {...props}
    >
      {children}
    </div>
  );
}
