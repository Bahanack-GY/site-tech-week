import { useTranslation } from 'react-i18next';
import Section from './Section';
import { FaLaptopCode, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <Section id="vision" className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">
            {t('vision.title')}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {t('vision.description')}
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 glass-panel hover:border-neon-cyan/50 transition-colors">
              <FaLightbulb className="text-3xl text-neon-purple" />
              <div>
                <h3 className="font-bold text-white">Innovation</h3>
                <p className="text-sm text-gray-400">Pushing boundaries of what's possible</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-panel hover:border-neon-cyan/50 transition-colors">
              <FaHandshake className="text-3xl text-neon-cyan" />
              <div>
                <h3 className="font-bold text-white">Synergy</h3>
                <p className="text-sm text-gray-400">Connecting academia and industry</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel border-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 z-10" />
           {/* Abstract visual representation since we don't have specific images */}
           <div className="absolute inset-0 flex items-center justify-center">
              <FaLaptopCode className="text-9xl text-white/5" />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-neon-cyan rounded-full blur-[80px] opacity-20" />
           <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-20" />
        </div>
      </div>
    </Section>
  );
}
