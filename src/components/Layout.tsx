import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/', hash: '#top' },
  { name: 'About', path: '/about', hash: '#about' },
  { name: 'Skills', path: '/skills', hash: '#skills' },
  { name: 'Projects', path: '/projects', hash: '#projects' },
  { name: 'Contact', path: '/contact', hash: '#contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setIsVisible(false);
        } else {
          // if scroll up show the navbar
          setIsVisible(true);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col" id="top">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50 glass-effect border-b border-outline-variant/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-center md:justify-between items-center relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.hash : link.path}
                className={cn(
                  "text-sm uppercase tracking-tight font-medium transition-all duration-300 hover:text-primary",
                  (isHomePage && location.hash === link.hash) || (!isHomePage && location.pathname === link.path)
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-on-surface opacity-70"
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={isHomePage ? "#contact" : "/contact"}
              className="px-6 py-2 bg-primary text-on-primary font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/10 text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface absolute right-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/10 p-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={isHomePage ? link.hash : link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg uppercase tracking-tight font-medium",
                    (isHomePage && location.hash === link.hash) || (!isHomePage && location.pathname === link.path)
                      ? "text-primary" 
                      : "text-on-surface opacity-70"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-full text-center"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs tracking-widest uppercase text-on-surface-variant opacity-60">
              Chethana Keshava Shettigar © 2026. Portfolio
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a 
              href="/resume_portfolio.pdf" 
              download="Chethana_Keshava_Resume.pdf"
              className="text-xs uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity mr-4"
            >
              Download Resume
            </a>
            <a href="https://github.com/chethanakeshava" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chethana-keshava-48355b29b/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:chethanakeshavaofficial@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
