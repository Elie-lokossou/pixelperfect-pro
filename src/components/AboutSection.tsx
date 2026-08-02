import React from 'react';
import { Sparkles, Users, ShieldCheck, Clock } from 'lucide-react';
import { ASSETS } from '../assets/images';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenAboutDetails: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onOpenAboutDetails,
}) => {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-black" />,
      title: 'Produits haut de gamme',
      subtitle: 'Respectueux et efficaces',
    },
    {
      icon: <Users className="w-5 h-5 text-black" />,
      title: 'Équipe professionnelle',
      subtitle: 'Expérimentée & passionnée',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
      title: 'Résultat garanti',
      subtitle: 'Satisfaction 100%',
    },
    {
      icon: <Clock className="w-5 h-5 text-black" />,
      title: 'Service rapide',
      subtitle: 'Sur rendez-vous',
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-[#020712] relative overflow-hidden">
      {/* Dark Ambient Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column (Cols 1 to 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-heading font-extrabold text-xs tracking-[0.25em] text-[#FFB800] uppercase mb-2">
                À PROPOS DE NOUS
              </p>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                L'exigence du détail,<br />
                la passion du propre.
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Chez Lavage DKB, chaque véhicule et chaque surface reçoivent le soin qu'ils méritent.
              Nous utilisons des produits de haute qualité et des techniques professionnelles pour un
              résultat éclatant et durable.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAboutDetails}
                className="py-2.5 px-6 rounded border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 font-heading font-extrabold text-xs tracking-widest uppercase transition-all duration-200 shadow-[0_0_15px_rgba(255,184,0,0.15)]"
              >
                EN SAVOIR PLUS
              </button>
            </div>
          </div>

          {/* Middle Feature Icons List (Cols 6 to 8) */}
          <div className="lg:col-span-3 space-y-5">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFD000] via-[#FFB800] to-[#E69500] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,184,0,0.35)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual Frame (Cols 9 to 12) - Slanted Trapezoid Photo */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-md h-[380px] sm:h-[440px]">
              {/* Slanted Image Wrapper matching mockup */}
              <div className="w-full h-full rounded-2xl lg:rounded-none lg:slanted-frame overflow-hidden border-2 border-blue-500/50 p-1 bg-gradient-to-br from-blue-500/40 via-blue-900/20 to-transparent shadow-[0_0_35px_rgba(14,165,233,0.35)]">
                <div className="w-full h-full overflow-hidden relative rounded-xl lg:rounded-none">
                  <img
                    src={ASSETS.aboutDetailer}
                    alt="Technicien essuyant capot de voiture avec chiffon microfibre jaune"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
