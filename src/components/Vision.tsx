import { useTranslation } from 'react-i18next';
import Section from './Section';
import { FaHandshake, FaLightbulb } from 'react-icons/fa';

import TechWeekFinal from '../assets/Tech-week-final.png';

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
        
        <div className="relative rounded-2xl overflow-hidden glass-panel border-0 group">
          <div className="absolute inset-0 bg-linear-to-br from-neon-purple/20 to-neon-cyan/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <img 
            src={TechWeekFinal} 
            alt="Tech Week Vision" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </Section>
  );
}
