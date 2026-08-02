import React from 'react';
import { BeforeAfterCard } from './BeforeAfterCard';
import { ASSETS } from '../assets/images';

interface PrestationsSectionProps {
  onSelectService: (serviceKey: string) => void;
  onOpenBooking: () => void;
}

export const PrestationsSection: React.FC<PrestationsSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const services = [
    {
      key: 'auto',
      title: 'AUTO',
      iconSvg: (
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      lines: ['Lavage intérieur & extérieur', 'Nettoyage en profondeur'],
      beforeImage: ASSETS.autoBeforeSeat,
      afterImage: ASSETS.autoAfterSeat,
    },
    {
      key: 'moto',
      title: 'MOTO',
      iconSvg: (
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-.34-.04-.67-.1-.99L11.8 15h2.39l2 2h-2.19l-2-2H8.41l-2-2h4.38l1.6-1.6 3.1 3.1 1.42-1.42-2.88-2.88zM5 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14-8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      lines: ['Lavage complet', 'Protection et finition'],
      beforeImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'tapis',
      title: 'TAPIS',
      iconSvg: (
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 16H5V6h14v12zm-3-9H8v2h8V9zm0 4H8v2h8v-2z" />
        </svg>
      ),
      lines: ['Nettoyage en profondeur', 'Élimine taches et odeurs'],
      beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'meuble',
      title: 'MEUBLE',
      iconSvg: (
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-14-3h12v3H6V7zm14 10H4v-5h16v5z" />
        </svg>
      ),
      lines: ['Nettoyage canapé, siège,', 'matelas, etc.'],
      beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="prestations" className="py-20 bg-[#020712] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.25em] text-[#FFB800] uppercase mb-2">
            NOS PRESTATIONS
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Un service complet<br />
            pour un résultat impeccable
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.key}
              className="flex flex-col space-y-4 group"
            >
              {/* Top Service Box */}
              <div className="bg-[#030d22] border border-[#182a4d] hover:border-[#FFB800]/60 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(255,184,0,0.15)] flex-1 justify-between">
                <div>
                  {/* Yellow Circle Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFD000] via-[#FFB800] to-[#E69500] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,184,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                    {service.iconSvg}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-xl text-white tracking-wider uppercase mb-3">
                    {service.title}
                  </h3>

                  {/* Subtext */}
                  <div className="text-slate-300 text-xs leading-relaxed mb-6 font-medium space-y-1">
                    {service.lines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* En Savoir Plus Button */}
                <button
                  onClick={() => onSelectService(service.key)}
                  className="w-full py-2 px-4 rounded border border-[#2a4375] hover:border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 font-heading font-extrabold text-[11px] tracking-wider uppercase transition-all duration-200"
                >
                  EN SAVOIR PLUS
                </button>
              </div>

              {/* Bottom Before/After Card */}
              <BeforeAfterCard
                beforeImage={service.beforeImage}
                afterImage={service.afterImage}
                title={service.title}
              />
            </div>
          ))}
        </div>

        {/* Bottom Main CTA Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] hover:from-[#FFD926] hover:to-[#FFA000] transition-all duration-300 shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:shadow-[0_8px_25px_rgba(255,184,0,0.5)] transform hover:-translate-y-0.5 active:scale-95"
          >
            VOIR TOUTES LES PRESTATIONS
          </button>
        </div>
      </div>
    </section>
  );
};
