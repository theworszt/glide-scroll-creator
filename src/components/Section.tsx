
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
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, root: null }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        'section flex-shrink-0 h-screen flex flex-col justify-center relative w-screen',
        bgColor,
        className
      )}
    >
      <div className={cn(
        'section-content px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full relative z-10',
        fullWidth ? 'max-w-none px-0' : ''
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
