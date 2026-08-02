import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets/images';

interface BannerCTAProps {
  onOpenBooking: () => void;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 bg-[#020712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Container */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#02102b] via-[#041a45] to-[#020d24] border border-[#1d3c75] shadow-[0_10px_40px_rgba(0,60,180,0.35)] overflow-hidden">
          {/* Water Splash Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-full bg-cyan-400/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-10">
            {/* Left SUV under water splash (Cols 1 to 5) */}
            <div className="lg:col-span-5 relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden border border-blue-500/40 shadow-xl">
              <img
                src={ASSETS.ctaBanner}
                alt="Voiture de luxe sous eau et jet de lavage"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#041a45]/30 to-[#041a45]" />
            </div>

            {/* Middle/Right Text & Button (Cols 6 to 12) */}
            <div className="lg:col-span-7 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <h3 className="font-heading font-black italic text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase leading-tight">
                  PRENEZ RENDEZ-VOUS<br />
                  DÈS MAINTENANT !
                </h3>
                <p className="text-slate-300 font-sans italic text-sm sm:text-base">
                  Offrez à votre véhicule le soin qu'il mérite.
                </p>
              </div>

              {/* Gold CTA Button */}
              <button
                onClick={onOpenBooking}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] hover:from-[#FFD926] hover:to-[#FFA000] transition-all duration-300 shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:shadow-[0_8px_25px_rgba(255,184,0,0.5)] transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>PRENDRE RENDEZ-VOUS</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
