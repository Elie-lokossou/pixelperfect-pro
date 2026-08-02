import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenGallery?: () => void;
  onOpenReviews?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  activeSection,
  setActiveSection,
  onOpenGallery,
  onOpenReviews,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'prestations', label: 'PRESTATIONS' },
    { id: 'apropos', label: 'À PROPOS' },
    { id: 'galerie', label: 'GALERIE' },
    { id: 'avis', label: 'AVIS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    if (id === 'galerie' && onOpenGallery) {
      onOpenGallery();
      return;
    }
    if (id === 'avis' && onOpenReviews) {
      onOpenReviews();
      return;
    }
    if (id === 'contact' && onOpenContact) {
      onOpenContact();
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020712]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#1a2c4e]'
          : 'bg-gradient-to-b from-[#020712]/90 via-[#020712]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('accueil');
          }}
          className="flex items-center gap-1 group"
        >
          <div className="flex flex-col">
            <div className="flex items-baseline leading-none">
              <span className="font-heading font-black italic tracking-tighter text-2xl sm:text-3xl text-white drop-shadow-md">
                LAVAGE
              </span>
              <span className="font-heading font-black italic tracking-tighter text-2xl sm:text-3xl ml-1.5 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0A0] via-[#FFB800] to-[#D48800] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                DKB
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-heading text-xs tracking-widest font-bold transition-all relative py-1 ${
                  isActive
                    ? 'text-[#FFB800]'
                    : 'text-slate-200 hover:text-[#FFB800]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFB800] rounded-full shadow-[0_0_8px_#FFB800]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-md font-heading font-extrabold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#FFC700] via-[#FFB800] to-[#E69500] hover:from-[#FFD000] hover:to-[#FFA000] transition-all duration-200 shadow-[0_4px_15px_rgba(255,184,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.5)] active:scale-95 transform"
          >
            PRENDRE RENDEZ-VOUS
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded font-heading font-extrabold text-[10px] tracking-wider text-black bg-[#FFB800] sm:hidden"
          >
            RDV
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0e172a] text-slate-200 border border-slate-800 hover:text-[#FFB800]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030c1e] border-b border-[#1e293b] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-heading text-sm font-bold tracking-wider py-2 px-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#FFB800]/10 text-[#FFB800] border-l-2 border-[#FFB800]'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-md font-heading font-extrabold text-xs tracking-wider uppercase text-black bg-[#FFB800] hover:bg-[#ffa700] transition-colors shadow-lg"
            >
              PRENDRE RENDEZ-VOUS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
