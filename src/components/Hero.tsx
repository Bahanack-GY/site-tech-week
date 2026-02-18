import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-deep-space)_0%,_#000000_100%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] opacity-20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] whitespace-pre-line">
            {t('hero.title')}
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-10 border-l-2 border-neon-cyan pl-6 text-left md:text-center md:border-l-0 md:pl-0"
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
