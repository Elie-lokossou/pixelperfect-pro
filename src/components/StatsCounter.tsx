import React from 'react';
import { Award, Car, ThumbsUp, ShieldCheck } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      icon: <Car className="w-6 h-6 text-[#FFB800]" />,
      value: '+ 1,500',
      label: 'VÉHICULES NETTOYÉS',
      sublabel: 'Auto & Moto Premium',
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-[#FFB800]" />,
      value: '99.8 %',
      label: 'SATISFACTION CLIENT',
      sublabel: 'Avis 5 étoiles vérifiés',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FFB800]" />,
      value: '100 %',
      label: 'PRODUITS ÉCO-CERTIFIÉS',
      sublabel: 'Sans acides ni rayures',
    },
    {
      icon: <Award className="w-6 h-6 text-[#FFB800]" />,
      value: '10+ ANS',
      label: 'D’EXPÉRIENCE PRO',
      sublabel: 'Savoir-faire artisanal',
    },
  ];

  return (
    <section className="py-12 bg-[#010612] border-y border-[#101d36] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#030d22]/60 border border-[#16274a] hover:border-[#FFB800]/40 transition-all duration-300 shadow-lg flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="p-3 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-heading font-black italic text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#FFB800]">
                {stat.value}
              </div>
              <div className="font-heading font-black text-xs text-white tracking-widest uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-sans">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
