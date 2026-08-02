import React from 'react';
import { X, Check, Clock, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: string;
  onOpenBooking: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  serviceKey,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const serviceData: Record<string, any> = {
    auto: {
      title: 'NETTOYAGE & DETAILING AUTO',
      badge: 'AUTOMOBILE',
      heroImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      description:
        'Un traitement intégral pour redonner à votre véhicule son éclat sortie de concession. Nous traitons aussi bien les carrosseries délicates que les cuirs et moquettes les plus exigeants.',
      included: [
        'Lavage extérieur manuel haute pression à la mousse active',
        'Nettoyage et dégraissage complet des jantes & passages de roues',
        'Aspiration intégrale de l’habitacle, coffre et moquettes',
        'Shampoing et extraction des sièges en tissu ou traitement nourrisseur pour cuirs',
        'Dépoussiérage et rénovation des plastiques avec protection UV',
        'Lavage des vitres intérieures et extérieures sans trace',
        'Désinfection à l’ozone pour éliminer bactéries et mauvaises odeurs',
      ],
      packages: [
        { name: 'Formule Express', price: '35 €', duration: '45 min' },
        { name: 'Formule Complet Interieur & Extérieur', price: '75 €', duration: '1h 30 min' },
        { name: 'VIP Detailing & Protection', price: '140 €', duration: '3h 00 min' },
      ],
    },
    moto: {
      title: 'NETTOYAGE & SOIN MOTO',
      badge: 'DEUX-ROUÈS',
      heroImg: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      description:
        'Chaque recoin de votre moto nécessite une attention particulière. Nous utilisons des dégraissants neutres et des souffleurs d’air chaud pour éviter toute corrosion.',
      included: [
        'Prélavage mousse neutre pour carénages sensibles',
        'Dégraissage minutieux de la chaîne, couronne et kit chaîne',
        'Lavage manuel du moteur, pot d’échappement et étriers',
        'Séchage complet à l’air chaud pulsé',
        'Lustrage carénage et traitement brillant pneus',
        'Graissage haute performance de la chaîne de transmission',
      ],
      packages: [
        { name: 'Quick Wash Moto', price: '25 €', duration: '30 min' },
        { name: 'Soin Intégral & Finition Pro', price: '50 €', duration: '1h 00 min' },
      ],
    },
    tapis: {
      title: 'NETTOYAGE PROFOND TAPIS & MOQUETTES',
      badge: 'TEXTILES',
      heroImg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      description:
        'Éliminez en profondeur les acariens, la poussière incrustée et les taches tenaces grâce à notre méthode professionnelle d’injection-extraction.',
      included: [
        'Aspiration haute dépression de la fibre',
        'Prétraitement enzymatique anti-taches (café, huile, boue...)',
        'Nettoyage par injection/extraction haute pression',
        'Brossage mécanique doux respectueux des fibres',
        'Application d’un traitement désinfectant et désodorisant',
        'Séchage accéléré sur soufflerie thermique',
      ],
      packages: [
        { name: 'Tapis Petit / Moyen Format', price: '20 €', duration: '30 min' },
        { name: 'Grand Tapis / Tapis de Luxe', price: '40 €', duration: '1h 00 min' },
      ],
    },
    meuble: {
      title: 'NETTOYAGE CANAPÉ, FAUTEUIL & MATELAS',
      badge: 'AMEUBLEMENT',
      heroImg: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      description:
        'Redonnez vie à votre mobilier en tissu ou cuir. Nos produits hypoallergéniques restaurent les couleurs originelles sans détremper les mousses.',
      included: [
        'Diagnostic du tissu et test de tenue des couleurs',
        'Nettoyage en profondeur des dossiers, assises et accoudoirs',
        'Traitement anti-acariens et traitement anti-odeurs certifié',
        'Extraction maximale de l’humidité pour une réutilisation rapide',
        'Option imperméabilisante anti-taches disponible',
      ],
      packages: [
        { name: 'Fauteuil / Siège individuel', price: '30 €', duration: '45 min' },
        { name: 'Canapé 2 à 4 places', price: '85 €', duration: '1h 30 min' },
        { name: 'Grand Canapé d’Angle / XXL', price: '120 €', duration: '2h 00 min' },
      ],
    },
  };

  const details = serviceData[serviceKey] || serviceData.auto;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#030e25] border border-[#1d3868] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <img
            src={details.heroImg}
            alt={details.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030e25] via-[#030e25]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#FFB800] hover:text-black transition-colors"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#FFB800] text-black font-heading font-black text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded mb-2">
              {details.badge}
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
              {details.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <p className="text-slate-300 text-sm leading-relaxed">
            {details.description}
          </p>

          {/* Included Services List */}
          <div className="bg-[#020714] border border-[#162747] rounded-xl p-5 space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#FFB800] tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={16} />
              Inclus dans la prestation :
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {details.included.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check size={14} className="text-[#FFB800] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarif & Packages */}
          <div>
            <h4 className="font-heading font-extrabold text-xs text-white tracking-widest uppercase mb-3">
              Tarifs et Formules :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {details.packages.map((pkg: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#020817] border border-[#1a2d52] rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <h5 className="font-heading font-bold text-sm text-white mb-1">
                      {pkg.name}
                    </h5>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-3">
                      <Clock size={12} className="text-[#FFB800]" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="font-heading font-black text-xl text-[#FFB800]">
                    {pkg.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 border-t border-[#122240] bg-[#020714] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <PhoneCall size={14} className="text-[#FFB800]" />
            <span>Besoin d'un devis sur mesure ? <strong className="text-white">06 12 34 56 78</strong></span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] text-black font-heading font-black text-xs tracking-wider uppercase hover:shadow-lg"
          >
            RÉSERVER CE SERVICE
          </button>
        </div>
      </div>
    </div>
  );
};
