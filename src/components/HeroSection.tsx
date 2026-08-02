import React from 'react';
import { Shield, Sparkles, Leaf, ChevronDown, Star } from 'lucide-react';
import { ASSETS } from '../assets/images';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToPrestations = () => {
    const el = document.getElementById('prestations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#020712]"
    >
      {/* FULL BACKGROUND IMAGE (Car + Motorcycle + Water Splash) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.heroVehicles}
          alt="Lavage DKB Background Véhicules et Eau"
          className="w-full h-full object-cover object-center opacity-85 contrast-105 brightness-105 scale-105 transform transition-opacity duration-700"
        />

        {/* Subtle Top & Bottom Gradient Overlay for Text Contrast without darkening center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020712]/75 via-[#020712]/30 to-[#020712]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-[#020712]/80" />

        {/* Light Flares */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center my-auto">
        {/* Quality Seal Circular Badge (Top-Left Floating) */}
        <div className="lg:absolute lg:left-6 lg:top-4 mb-6 lg:mb-0 z-30 transform hover:scale-105 transition-transform duration-300">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2px] bg-gradient-to-tr from-[#FFD700] via-[#B8860B] to-[#FFD700] shadow-[0_0_30px_rgba(255,184,0,0.4)] flex items-center justify-center">
            {/* Inner Ring */}
            <div className="w-full h-full rounded-full bg-[#020a1c]/95 border-2 border-[#FFB800]/70 p-2 flex flex-col items-center justify-center text-[#FFB800] backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800] mb-0.5" />
              <div className="font-heading font-black text-[9px] sm:text-[10px] leading-tight uppercase tracking-wider text-white text-center">
                QUALITÉ<br />
                SOIGNÉE<br />
                <span className="text-[#FFB800]">RÉSULTAT</span><br />
                GARANTI
              </div>
              <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800] mt-0.5" />
            </div>
          </div>
        </div>

        {/* Top Tagline */}
        <div className="mb-3 inline-block bg-[#020a1c]/60 backdrop-blur-md border border-[#FFB800]/30 px-4 py-1 rounded-full shadow-lg">
          <p className="font-heading italic font-extrabold tracking-[0.25em] text-xs sm:text-sm text-[#FFB800] uppercase drop-shadow">
            PROPRETÉ . BRILLANCE . SATISFACTION .
          </p>
        </div>

        {/* Main Title "LAVAGE DKB" */}
        <div className="relative my-3 select-none">
          <h1 className="font-heading font-black italic tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[110px] leading-none flex flex-wrap justify-center items-center gap-x-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)]">
              LAVAGE
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8B3] via-[#FFB800] to-[#C47D00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] gold-title-3d">
              DKB
            </span>
          </h1>
        </div>

        {/* Subtitle Bar */}
        <div className="mt-2 mb-10">
          <p className="font-heading font-extrabold text-base sm:text-xl md:text-2xl tracking-[0.3em] text-white uppercase flex items-center justify-center gap-3 sm:gap-6 flex-wrap drop-shadow-md">
            <span>AUTO</span>
            <span className="text-[#FFB800] text-sm">•</span>
            <span>MOTO</span>
            <span className="text-[#FFB800] text-sm">•</span>
            <span>TAPIS</span>
            <span className="text-[#FFB800] text-sm">•</span>
            <span>MEUBLE</span>
          </p>
        </div>

        {/* 3 Feature Badges Bar */}
        <div className="mt-4 w-full max-w-4xl bg-[#020b1f]/85 backdrop-blur-lg border border-[#1a3566] rounded-2xl py-5 px-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] gold-glow-box">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1a3566]">
            {/* Feature 1 */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-0 md:px-4">
              <div className="p-2.5 rounded-xl bg-[#FFB800]/15 text-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.25)]">
                <Shield className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <div className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase leading-tight">
                  NETTOYAGE
                </div>
                <div className="font-heading font-bold text-[11px] text-[#FFB800] tracking-wide uppercase">
                  PROFESSIONNEL
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-0 md:px-4">
              <div className="p-2.5 rounded-xl bg-[#FFB800]/15 text-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.25)]">
                <Sparkles className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <div className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase leading-tight">
                  SOINS
                </div>
                <div className="font-heading font-bold text-[11px] text-[#FFB800] tracking-wide uppercase">
                  HAUTE QUALITÉ
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-0 md:px-4">
              <div className="p-2.5 rounded-xl bg-[#FFB800]/15 text-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.25)]">
                <Leaf className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <div className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase leading-tight">
                  PROPRETÉ
                </div>
                <div className="font-heading font-bold text-[11px] text-[#FFB800] tracking-wide uppercase">
                  QUI DURE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Arrow Button */}
        <div className="mt-10">
          <button
            onClick={scrollToPrestations}
            className="w-11 h-11 rounded-full border-2 border-[#FFB800]/50 bg-[#020a1c]/90 text-[#FFB800] hover:bg-[#FFB800] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,184,0,0.3)] flex items-center justify-center group animate-bounce"
            aria-label="Défiler vers les prestations"
          >
            <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
