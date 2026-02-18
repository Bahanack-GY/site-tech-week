import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { key: 'home', to: '#hero' },
    { key: 'vision', to: '#vision' },
    { key: 'activities', to: '#activities' },
    { key: 'schedule', to: '#schedule' },
    { key: 'schools', to: '#schools' },
    { key: 'contact', to: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel m-4 mt-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-display font-bold text-white tracking-widest neon-text">
          TECH WEEK
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.key} href={link.to} className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors uppercase tracking-wider">
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <button
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${i18n.language === 'fr' ? 'bg-neon-cyan text-black' : 'text-gray-400 hover:text-white'}`}
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>
            <button
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${i18n.language === 'en' ? 'bg-neon-cyan text-black' : 'text-gray-400 hover:text-white'}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-space/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.to}
                  className="text-lg font-medium text-gray-300 hover:text-neon-cyan uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-bold ${i18n.language === 'fr' ? 'bg-neon-cyan text-black' : 'text-gray-400 border border-white/10'}`}
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-bold ${i18n.language === 'en' ? 'bg-neon-cyan text-black' : 'text-gray-400 border border-white/10'}`}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
