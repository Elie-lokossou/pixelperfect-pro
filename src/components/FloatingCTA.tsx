import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageSquare, ChevronUp } from 'lucide-react';

interface FloatingCTAProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* WhatsApp / Phone Quick Call Button */}
      <a
        href="tel:0612345678"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-110"
        aria-label="Appeler directement"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-black/80 backdrop-blur-md text-white text-[11px] font-heading font-bold px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Appel Direct: 06 12 34 56 78
        </span>
      </a>

      {/* Floating Main Booking Button */}
      <button
        onClick={onOpenBooking}
        className="group relative flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] text-black font-heading font-black text-xs tracking-wider uppercase shadow-[0_4px_25px_rgba(255,184,0,0.5)] hover:shadow-[0_6px_30px_rgba(255,184,0,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <Calendar className="w-4 h-4 stroke-[2.5]" />
        <span className="hidden sm:inline">RÉSERVER UN LAVAGE</span>
        <span className="sm:hidden">RÉSERVER</span>

        {/* Ping Animation Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-black"></span>
        </span>
      </button>
    </div>
  );
};
