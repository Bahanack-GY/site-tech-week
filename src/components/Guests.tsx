import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';

const guestsData = [
  { name: "Samuel Eto'o", role: "Football Legend & President of FECAFOOT", color: "from-green-400 to-yellow-400" },
  { name: "Rigobert Song", role: "Football Manager & Former Captain", color: "from-green-500 to-red-500" },
  { name: "Indira", role: "Artist & Influencer", color: "from-pink-500 to-purple-500" },
  { name: "Miss Cameroun", role: "Beauty Queen & Ambassador", color: "from-blue-400 to-cyan-400" }
];

export default function Guests() {
  const { t } = useTranslation();

  return (
    <Section id="guests" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
          {t('guests.title')}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {t('guests.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {guestsData.map((guest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group-hover:border-white/30 transition-colors">
              
              {/* Decorative Circle */}
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br ${guest.color} opacity-80 blur-lg group-hover:opacity-100 group-hover:blur-md transition-all duration-300`} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {guest.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  {guest.role}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-t from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
