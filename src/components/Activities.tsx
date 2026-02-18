import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import { FaStore, FaCode, FaUserShield, FaTrophy } from 'react-icons/fa';
import LaserFlow from './LaserFlow';

export default function Activities() {
  const { t } = useTranslation();
  const revealRef = useRef<HTMLDivElement>(null);

  const activities = [
    { key: 'innovation_fair', icon: FaStore, color: 'text-neon-cyan' },
    { key: 'hackathon', icon: FaCode, color: 'text-neon-purple' },
    { key: 'security', icon: FaUserShield, color: 'text-blue-500' },
    { key: 'gala', icon: FaTrophy, color: 'text-yellow-500' },
  ];

  return (
    <div 
      id="activities"
      className="relative z-10 min-h-[800px] overflow-hidden bg-black"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#CF9EFF"
        horizontalSizing={0.5}
        verticalSizing={2}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none">
        <Section className="w-full pointer-events-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {t('activities.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-16 max-w-2xl mx-auto drop-shadow-md">
            {t('activities.description')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={activity.key} 
                  className="glass-panel p-8 flex flex-col items-center gap-6 group hover:bg-white/10 transition-colors duration-300 backdrop-blur-md border border-white/10"
                >
                  <div className={`text-5xl ${activity.color} mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                    <Icon />
                  </div>
                  <p className="text-lg font-medium text-white">
                    {t(`activities.${activity.key}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Reveal Layer */}
      <div
        ref={revealRef}
        className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-50 bg-[radial-gradient(circle,rgba(207,158,255,0.4)_0%,transparent_60%)]"
        style={{
          '--mx': '-9999px',
          '--my': '-9999px',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), black 0%, transparent 400px)',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), black 0%, transparent 400px)',
        } as React.CSSProperties}
      />
    </div>
  );
}
