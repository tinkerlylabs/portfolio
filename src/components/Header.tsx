import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contacts' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Artistic Initials Square Logo + Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 group cursor-pointer"
        >
          <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-display font-black text-xs tracking-tighter select-none transition-transform duration-300 group-hover:scale-105">
            JO
          </div>
          <span className="font-display text-sm uppercase tracking-[0.25em] font-black text-white group-hover:opacity-80 transition-opacity">
            Jensen Omega
          </span>
        </button>

        {/* Desktop Navigation (Artistic Flair Theme style) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-200 cursor-pointer relative py-1 border-b ${
                activeSection === item.id 
                  ? 'text-white border-white/60' 
                  : 'text-white/40 border-transparent hover:text-white hover:border-white/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0F0F0F] border-b border-white/5"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans text-xs uppercase tracking-[0.15em] font-bold text-left transition-colors py-2 block ${
                    activeSection === item.id 
                      ? 'text-white border-l-2 border-white pl-3' 
                      : 'text-white/40 hover:text-white pl-3'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
