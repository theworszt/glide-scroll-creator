
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  label: string;
  sectionId: string;
  active: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, sectionId, active, onClick }) => {
  return (
    <li>
      <button
        onClick={() => onClick(sectionId)}
        className={cn(
          'nav-link',
          active ? 'active' : ''
        )}
      >
        {label}
      </button>
    </li>
  );
};

interface NavBarProps {
  sections: Array<{ id: string; label: string }>;
  currentSection: string;
  onNavClick: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ sections, currentSection, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

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
      'fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-medium">
          Bertani
        </a>

        <nav>
          <ul className="flex space-x-8">
            {sections.map((section) => (
              <NavItem
                key={section.id}
                label={section.label}
                sectionId={section.id}
                active={currentSection === section.id}
                onClick={onNavClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
