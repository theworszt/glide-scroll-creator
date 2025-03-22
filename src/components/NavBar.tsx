
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  label: string;
  to: string;
  active: boolean;
  onClick: (path: string) => void;
  isContact?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, active, onClick, isContact = false }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={() => onClick(to)}
        className={cn(
          'nav-link',
          active ? 'active' : '',
          isContact ? 'px-4 py-2 border border-black/20 rounded-lg hover:bg-black/5 transition-colors' : ''
        )}
      >
        {label}
      </Link>
    </li>
  );
};

interface NavBarProps {
  sections?: Array<{ id: string; label: string }>;
  currentSection?: string;
  onNavClick?: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ sections = [], currentSection = '', onNavClick = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

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

  const handleNavClick = (path: string) => {
    setActivePath(path);
  };

  const isHomePage = window.location.pathname === '/';

  // Handle both section navigation and page navigation
  const handleItemClick = (item: string) => {
    if (isHomePage && item.startsWith('#')) {
      // On homepage and it's a section anchor
      onNavClick(item.replace('#', ''));
    } else {
      // It's a page link
      handleNavClick(item);
    }
  };

  const navItems = isHomePage 
    ? sections.map(section => ({ label: section.label, to: `#${section.id}` }))
    : [
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: 'Services', to: '/services' },
        { label: 'About Us', to: '/about' },
        { label: 'Contact', to: '/contact', isContact: true }
      ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium">
          Bertani
        </Link>

        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                to={item.to}
                active={
                  isHomePage
                    ? currentSection === item.to.replace('#', '')
                    : activePath === item.to
                }
                onClick={handleItemClick}
                isContact={item.isContact}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
