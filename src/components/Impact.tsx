import { useTranslation } from 'react-i18next';
import Section from './Section';
import { FaGlobeAfrica, FaUsers, FaBroadcastTower } from 'react-icons/fa';

export default function Impact() {
  const { t } = useTranslation();

  return (
    <Section id="impact" className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">
        {t('impact.title')}
      </h2>
      
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
        {t('impact.description')}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 flex flex-col items-center">
          <FaUsers className="text-5xl text-neon-cyan mb-4" />
          <h3 className="text-4xl font-bold text-white mb-2">1M+</h3>
          <p className="text-gray-400">Audience Cumulée</p>
        </div>
        <div className="glass-panel p-8 flex flex-col items-center">
          <FaBroadcastTower className="text-5xl text-neon-purple mb-4" />
          <h3 className="text-4xl font-bold text-white mb-2">4+</h3>
          <p className="text-gray-400">Médias Partenaires</p>
        </div>
        <div className="glass-panel p-8 flex flex-col items-center">
          <FaGlobeAfrica className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-4xl font-bold text-white mb-2">Intl.</h3>
          <p className="text-gray-400">Couverture via BRUT Afrique</p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder for partner logos - using text for now as no images provided */}
        <span className="text-2xl font-bold text-gray-500">CRTV</span>
        <span className="text-2xl font-bold text-gray-500">CANAL 2</span>
        <span className="text-2xl font-bold text-gray-500">VISION 4</span>
        <span className="text-2xl font-bold text-gray-500">BRUT AFRIQUE</span>
      </div>
    </Section>
  );
}
