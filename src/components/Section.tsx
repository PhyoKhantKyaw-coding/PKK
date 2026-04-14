import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ container = true, className, children, ...props }, ref) => {
    const containerStyles = container ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : '';

    return (
      <section
        ref={ref}
        className={cn('py-24 md:py-32', containerStyles, className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
