import { useTranslation } from 'react-i18next';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Schedule() {
  const { t } = useTranslation();

  const days = [1, 2, 3, 4, 5, 6];

  return (
    <Section id="schedule">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
        {t('schedule.title')}
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/50 to-neon-cyan/0" />

        <div className="flex flex-col gap-12 md:gap-24">
          {days.map((day, index) => (
            <motion.div 
              key={day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8`}
            >
              {/* Left Side */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {index % 2 === 0 && (
                   <div className="md:pr-8 md:border-r-2 border-l-2 md:border-l-0 border-neon-cyan/50 pl-6 md:pl-0 py-2">
                     <h3 className="text-3xl font-bold text-white mb-2 text-shadow-neon">{t(`schedule.day${day}.title`)}</h3>
                     <p className="text-gray-300 text-lg">{t(`schedule.day${day}.desc`)}</p>
                   </div>
                )}
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-deep-space border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.8)] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
              </div>

              {/* Right Side */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                {index % 2 !== 0 && (
                  <div className="md:pl-8 border-l-2 border-neon-cyan/50 pl-6 py-2">
                    <h3 className="text-3xl font-bold text-white mb-2 text-shadow-neon">{t(`schedule.day${day}.title`)}</h3>
                    <p className="text-gray-300 text-lg">{t(`schedule.day${day}.desc`)}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
