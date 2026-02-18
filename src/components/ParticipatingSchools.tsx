import { useTranslation } from 'react-i18next';
import Section from './Section';

export default function ParticipatingSchools() {
  const { t } = useTranslation();

  const schools = [
    "Polytech Maroua",
    "Polytech Douala",
    "Polytech Bamenda",
    "FET Buea",
    "IUC",
    "UCAC-ICAM",
    "St Jean",
    "Siantou",
    "IAI Cameroun",
    "Suptic",
    "FacSciences (Ngoa Ekele)",
    "ENSPY",
    "ICT-University / Digital College",
    "UPAC"
  ];

  return (
    <Section id="schools" className="bg-black/40">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">
        {t('schools.title')}
      </h2>
      
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 text-center">
        {t('schools.subtitle')}
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {schools.map((school, index) => (
          <div 
            key={index} 
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 cursor-default"
          >
            <span className="text-white font-medium text-sm md:text-base tracking-wide">
              {school}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
