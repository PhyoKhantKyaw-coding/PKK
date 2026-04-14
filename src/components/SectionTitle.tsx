import { cn } from '@/utils/helpers';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-16 md:mb-24',
        centered ? 'text-center' : '',
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
