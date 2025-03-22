
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

interface SidebarProps {
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  const navItems = [
    { label: 'Projekty', to: '/projects' },
    { label: 'Usługi', to: '/services' },
    { label: 'O nas', to: '/about' },
    { label: 'Kontakt', to: '/contact' }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className="fixed right-8 top-6 z-50 rounded-md p-2 hover:bg-black/5 transition-colors"
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0 bg-white">
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-end">
            <SheetClose className="rounded-full p-2 hover:bg-black/5">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <SheetClose asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        'block text-xl font-light transition-colors hover:text-primary',
                        currentPath === item.to ? 'text-primary font-normal' : 'text-muted-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              <li>
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="inline-block mt-8 px-6 py-3 border border-black/20 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    Kontakt
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
