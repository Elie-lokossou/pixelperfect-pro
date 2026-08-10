import React from 'react';
import { Phone, Mail, MapPin, ChevronUp, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
  onOpenBooking: () => void;
  onOpenGallery?: () => void;
  onOpenReviews?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveSection,
  onOpenBooking,
  onOpenGallery,
  onOpenReviews,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
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

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#01050e] text-slate-300 pt-12 sm:pt-16 pb-8 border-t border-[#121f38] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Responsive 1 col (mobile) -> 2 cols (tablet) -> 4/5 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-[#0f1a2e]">
          
          {/* Col 1: Brand & Tagline & Quick CTAs (Cols 1-4 on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
            >
              <div className="flex items-baseline leading-none">
                <span className="font-heading font-black italic tracking-tighter text-2xl sm:text-3xl text-white">
                  LAVAGE
                </span>
                <span className="font-heading font-black italic tracking-tighter text-2xl sm:text-3xl ml-1.5 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0A0] via-[#FFB800] to-[#D48800]">
                  DKB
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Votre centre de référence pour le lavage et l’entretien soigné de motos, véhicules légers, SUV, tapis et meubles à Dèkoungbé.
            </p>

            {/* Quick Action Buttons (Call & WhatsApp) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://wa.me/2290199248803?text=Bonjour%20Lavage%20DKB%2C%20je%20souhaite%20prendre%20un%20rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-heading font-bold uppercase transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+2290199248803"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FFB800]/10 hover:bg-[#FFB800]/20 border border-[#FFB800]/30 text-[#FFB800] text-xs font-heading font-bold uppercase transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>01 99 24 88 03</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#0a1529] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0a1529] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#0a1529] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.05.82.13V9.4a6.34 6.34 0 00-.82-.05A6.33 6.33 0 003 15.68a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.04-4.54z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (Cols 5-6 on Desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-black text-xs text-white tracking-widest uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'Prestations', id: 'prestations' },
                { label: 'Calculateur', id: 'calculateur' },
                { label: 'À propos', id: 'apropos' },
                { label: 'Galerie', id: 'galerie' },
                { label: 'Avis', id: 'avis' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-slate-400 hover:text-[#FFB800] transition-colors py-0.5 inline-block text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tarifs & Prestations (Cols 7-8 on Desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-black text-xs text-white tracking-widest uppercase">
              TARIFS DÈKOUNGBÉ
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li className="flex items-center justify-between gap-2">
                <span>Moto :</span>
                <strong className="text-[#FFB800]">500 F</strong>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Petite voiture :</span>
                <strong className="text-white">1 000 - 1 500 F</strong>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Grande voiture :</span>
                <strong className="text-white">2 000 - 3 000 F</strong>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Lavage à fond :</span>
                <strong className="text-[#FFB800]">Dès 13 000 F</strong>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => handleNavClick('prestations')}
                  className="text-xs text-[#FFB800] hover:underline inline-flex items-center gap-1"
                >
                  <span>Voir tous les détails</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Localisation (Cols 9-12 on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <h4 className="font-heading font-black text-xs text-white tracking-widest uppercase">
              CONTACT & ACCÈS
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              {/* Telephone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+2290199248803"
                    className="text-white font-bold hover:text-[#FFB800] transition-colors"
                  >
                    +229 01 99 24 88 03
                  </a>
                  <p className="text-[11px] text-slate-400">Appels directs & WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:marval1598@gmail.com"
                    className="text-white hover:text-[#FFB800] transition-colors break-all"
                  >
                    marval1598@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400">Support & demandes de devis</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold leading-snug">
                    Von avant l’église catholique de Dèkoungbé
                  </p>
                  <p className="text-[11px] text-slate-400">Dèkoungbé, Godomey - Bénin</p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-3 pt-1 border-t border-[#101b30]">
                <Clock className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400">
                  <span className="text-white font-semibold">Lun - Sam :</span> 7h30 - 19h00 • <span className="text-white font-semibold">Dim :</span> 8h00 - 18h00
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Responsive Flex */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 LAVAGE DKB — Dèkoungbé. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact()}
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onOpenBooking}
              className="text-[#FFB800] hover:underline font-bold"
            >
              Prendre RDV
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#0a1529] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              aria-label="Retour en haut"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
