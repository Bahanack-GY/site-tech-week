import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: March 23, 2026 at 08:00:00
    // Note: Using 2026 based on current system year
    const targetDate = new Date('2026-03-23T08:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: t('hero.countdown.days'), value: timeLeft.days },
    { label: t('hero.countdown.hours'), value: timeLeft.hours },
    { label: t('hero.countdown.minutes'), value: timeLeft.minutes },
    { label: t('hero.countdown.seconds'), value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-start mt-0 mb-0 z-20 relative">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex items-start">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm font-bold text-neon-cyan mt-2 uppercase tracking-[0.2em]">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-neon-purple mx-2 md:mx-3 mt-1 md:mt-2 animate-pulse">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
