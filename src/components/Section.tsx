
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className,
  children, 
  bgColor = 'bg-transparent',
  fullWidth = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        'section',
        bgColor,
        className
      )}
    >
      <div className={cn(
        'section-content',
        fullWidth ? 'max-w-none px-0' : ''
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
