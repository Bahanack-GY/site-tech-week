import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SplashCursor from './SplashCursor';
import Countdown from './Countdown';

// Import images
import heroImg1 from '../assets/images/image.png';
import heroImg2 from '../assets/images/image copy.png';
import heroImg3 from '../assets/images/image copy 2.png';
import heroImg4 from '../assets/images/image copy 3.png';

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

export default function Hero() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <SplashCursor />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-deep-space)_0%,_#000000_100%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] opacity-20" />

      {/* Slideshow Background - Full Width with Fade */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        
        {/* Color Overlay to tint images */}
        <div className="absolute inset-0 bg-deep-space/80 mix-blend-overlay" />
        
        {/* Gradient Mask to fade into bottom color */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-space/80 via-transparent to-deep-space/80" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="text-left">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] whitespace-pre-line">
              {t('hero.title')}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl font-light mb-10 border-l-2 border-neon-cyan pl-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#vision" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-neon-cyan/30 rounded-full text-neon-cyan font-bold tracking-widest overflow-hidden hover:bg-neon-cyan hover:text-black transition-all duration-300">
              <span className="relative z-10">{t('hero.cta')}</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Countdown */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-end"
        >
            <Countdown />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
      </motion.div>
    </div>
  );
}
