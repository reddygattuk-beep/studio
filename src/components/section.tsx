import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('w-full py-20 sm:py-28', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
