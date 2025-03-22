
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronRight } from 'lucide-react';
import NavBar from './NavBar';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const isMobile = useIsMobile();

  // Calculate total scroll width
  useEffect(() => {
    if (!scrollRef.current) return;

    const calculateScroll = () => {
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const clientWidth = scrollRef.current?.clientWidth || 0;
      setMaxScroll(scrollWidth - clientWidth);

      // Get all section ids
      const sectionElements = scrollRef.current?.querySelectorAll('.section');
      const sectionIds: string[] = [];
      sectionElements?.forEach((section) => {
        const id = section.id;
        if (id) sectionIds.push(id);
      });
      setSections(sectionIds);
      
      if (!isInitialized && sectionIds.length > 0) {
        setCurrentSection(sectionIds[0]);
        setIsInitialized(true);
      }
    };

    calculateScroll();
    
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      calculateScroll();
    }, 100);

    window.addEventListener('resize', calculateScroll);
    return () => {
      window.removeEventListener('resize', calculateScroll);
      clearTimeout(timer);
    };
  }, [isInitialized]);

  // Auto-hide scroll indicator after 5 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const resetTimeout = () => {
      clearTimeout(timeout);
      setShowScrollIndicator(true);
      timeout = setTimeout(() => {
        setShowScrollIndicator(false);
      }, 5000);
    };

    resetTimeout();
    window.addEventListener('wheel', resetTimeout);
    window.addEventListener('touchmove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('wheel', resetTimeout);
      window.removeEventListener('touchmove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, []);

  // Handle mouse wheel horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const newPosition = scrollPosition + delta;
      const boundedPosition = Math.max(0, Math.min(newPosition, maxScroll));
      
      setScrollPosition(boundedPosition);
      window.scrollTo({
        left: boundedPosition,
        behavior: 'smooth'
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [scrollPosition, maxScroll, isMobile]);

  // Sync scroll position to window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      setScrollPosition(window.scrollX);
      
      // Find current section
      if (scrollRef.current) {
        const sections = Array.from(scrollRef.current.children) as HTMLElement[];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          
          // If the section is in view
          if (rect.left <= window.innerWidth / 2) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Scroll to a specific section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <div className="scroll-container fixed inset-0 overflow-hidden" ref={containerRef}>
      <div 
        className="horizontal-scroll flex h-screen w-auto" 
        ref={scrollRef}
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
      
      <div className={`scroll-indicator fixed z-50 bottom-8 right-8 flex items-center gap-2 p-2 rounded-full bg-black/10 backdrop-blur-lg text-black/80 dark:bg-white/10 dark:text-white/80 transition-opacity duration-600 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-xs">Scroll</span>
        <ChevronRight className="w-4 h-4 animate-scroll-indicator" />
      </div>
      
      <NavBar 
        sections={sections.map(id => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) }))}
        currentSection={currentSection}
        onNavClick={scrollToSection}
      />
    </div>
  );
};

export default HorizontalScroll;
