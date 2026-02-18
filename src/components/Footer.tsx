import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Section from './Section';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/80 pt-20 pb-10 border-t border-neon-cyan/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <Section className="!py-0 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 font-display tracking-tighter">
              TECH WEEK
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('footer.brand_desc')}
            </p>
            <div className="flex items-center gap-2 text-gray-400">
               <FaMapMarkerAlt className="text-neon-cyan" />
               <span className="text-sm">ENSPY, Yaoundé</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-neon-cyan pl-3">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'home', href: '#' },
                { label: 'vision', href: '#vision' },
                { label: 'activities', href: '#activities' },
                { label: 'schedule', href: '#schedule' },
                { label: 'partners', href: '#partners' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-neon-cyan/50 rounded-full group-hover:w-2 transition-all" />
                    {t(`nav.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-neon-purple pl-3">
              Contact
            </h3>
             <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-neon-purple mt-1 shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>+237 683 862 442</p>
                  <p>+237 697 597 179</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-neon-purple mt-1 shrink-0" />
                <a href="mailto:clubinfoenspy@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  clubinfoenspy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-white pl-3">
              {t('footer.connect')}
            </h3>
            <div className="flex gap-4">
              {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-cyan/20 hover:border-neon-cyan hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Tech Week - ENSPY GI Club. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}
