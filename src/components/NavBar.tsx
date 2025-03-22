
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';

interface NavBarProps {
  sections?: Array<{ id: string; label: string }>;
  currentSection?: string;
  onNavClick?: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ sections = [], currentSection = '', onNavClick = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 px-8 py-4 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium z-50">
          Bertani
        </Link>
        
        <Sidebar currentPath={currentPath} />
      </div>
    </header>
  );
};

export default NavBar;
