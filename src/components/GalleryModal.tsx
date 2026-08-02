import React, { useState } from 'react';
import { X, Sparkles, Filter } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState('all');

  if (!isOpen) return null;

  const galleryItems = [
    {
      id: 1,
      category: 'auto',
      title: 'Audi RS6 Avant - Detailing Céramique',
      img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'auto',
      title: 'Nettoyage Cuir & Habitacle Porsche',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'moto',
      title: 'Ducati Panigale V4S - Polissage Gloss',
      img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'tapis',
      title: 'Rénovation Tapis d’Orient',
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'meuble',
      title: 'Canapé Design Velours Après Traitement',
      img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'auto',
      title: 'Lavage Finition Brillant Pneus & Jantes',
      img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#030e25] border border-[#1d3868] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#152749] flex items-center justify-between bg-[#020816]">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[#FFB800] w-5 h-5" />
            <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase">
              GALERIE RÉALISATIONS DKB
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 bg-[#020714] border-b border-[#122240] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'TOUT' },
            { id: 'auto', label: 'AUTO' },
            { id: 'moto', label: 'MOTO' },
            { id: 'tapis', label: 'TAPIS' },
            { id: 'meuble', label: 'MEUBLE' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-1.5 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase transition-all ${
                filter === btn.id
                  ? 'bg-[#FFB800] text-black shadow-md'
                  : 'bg-[#030c1e] text-slate-300 border border-slate-800 hover:border-[#FFB800]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden border border-[#1a2e54] bg-[#020817] h-52 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-heading font-black text-black bg-[#FFB800] px-2 py-0.5 rounded uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-xs text-white mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-[#122240] bg-[#020714] flex items-center justify-between">
          <span className="text-xs text-slate-400">Impressionné par le résultat ?</span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-6 py-2 rounded-full bg-[#FFB800] text-black font-heading font-black text-xs uppercase"
          >
            RÉSERVER
          </button>
        </div>
      </div>
    </div>
  );
};
