import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';

const partnersData = {
  public: [
    "MINSUP", "MINRESI", "MINPOSTEL", "MINJEC", "MINSANTE", "ANTIC"
  ],
  private: [
    "Orange", "MTN", "Camtel", "TANKS", "Venture Capital plc", "Campost", "Paseo AI", "Brasseries du Cameroun"
  ],
  international: [
    "UNDP", "AUF", "GIZ"
  ]
};

export default function Partners() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="partners" className="">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
          {t('partners.title')}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {t('partners.subtitle')}
        </p>
      </div>

      <div className="grid gap-12 md:gap-16">
        {/* Public Institutions */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-neon-cyan pl-4">
            {t('partners.public')}
          </h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {partnersData.public.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="h-24 flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 group"
              >
                <span className="font-bold text-gray-300 group-hover:text-white text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Private Sector */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-neon-purple pl-4">
            {t('partners.private')}
          </h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
          >
            {partnersData.private.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="h-24 flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-300 group"
              >
                <span className="font-bold text-gray-300 group-hover:text-white text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* International Organizations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-white pl-4">
            {t('partners.international')}
          </h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {partnersData.international.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="h-24 flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="font-bold text-gray-300 group-hover:text-white text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
