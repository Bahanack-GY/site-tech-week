import { useTranslation } from 'react-i18next';
import Section from './Section';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-black/50 pt-20 pb-10 border-t border-white/10 mt-20">
      <Section className="!py-0">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              {t('contact.title')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-neon-cyan text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">ENSPY</h4>
                  <p className="text-gray-400">École Nationale Supérieure Polytechnique de Yaoundé</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaPhone className="text-neon-cyan text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">{t('contact.phone')}</h4>
                  <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+237 683 862 442</p>
                  <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+237 697 597 179</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-neon-cyan text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">{t('contact.email')}</h4>
                  <a href="mailto:clubinfoenspy@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                    clubinfoenspy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="p-8 glass-panel border-neon-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Génie Informatique Club</h3>
                <p className="text-gray-400 mb-6">
                  "Bâtir le plus grand rassemblement technologique académique du Cameroun"
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
                    <FaFacebook />
                  </a>
                </div>
             </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 text-gray-600 text-sm">
          <p>&copy; 2025 Tech Week - ENSPY GI Club. All rights reserved.</p>
        </div>
      </Section>
    </footer>
  );
}
