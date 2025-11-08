
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/membership', name: 'Membership' },
  { path: '/store', name: 'Store' },
  { path: '/#portfolio', name: 'Work' },
  { path: '/#about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (path.includes('/#')) {
      const id = path.split('/#')[1];
      if (location.pathname !== '/') {
        window.location.href = `/#${id}`;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-[#0c0d0d]/80 backdrop-blur-lg border-b border-gray-800/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <Rocket className="text-accent-purple" />
          <span className="bg-gradient-to-r from-accent-purple to-white bg-clip-text text-transparent">Cle`Agency</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path.includes('/#') ? location.pathname + item.path.substring(1) : item.path}
              onClick={() => handleNavClick(item.path)}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  (isActive && !item.path.includes('/#')) || (location.hash === item.path.substring(2) && item.path.includes('/#'))
                    ? "bg-accent-purple/10 text-accent-purple"
                    : "text-gray-300 hover:bg-white/5"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button asChild className="bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-6 py-2 rounded-full">
            <NavLink to="/membership">Join Now</NavLink>
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0c0d0d]/95 backdrop-blur-lg absolute top-20 left-0 w-full"
          >
            <nav className="flex flex-col items-center gap-4 py-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path.includes('/#') ? '/' : item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg text-gray-200 hover:text-accent-purple transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild className="mt-4 bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-8 py-3 rounded-full">
                <NavLink to="/membership" onClick={() => setIsOpen(false)}>Join Now</NavLink>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
