import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { AddReviewModal } from './AddReviewModal';

interface ReviewsSectionProps {
  onOpenReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewsModal }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Alexandre Roche',
      vehicle: 'Porsche Cayenne Coupe',
      service: 'Formule VIP Detail Pro',
      date: 'Il y a 3 jours',
      rating: 5,
      comment:
        'Résultat tout simplement hallucinant sur ma carrosserie noire. Les micro-rayures ont disparu et l’effet hydrophobe est impressionnant sous la pluie. Je recommande Lavage DKB sans hésiter !',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      name: 'Julien Mercier',
      vehicle: 'BMW M4 Competition',
      service: 'Lavage Intérieur & Extérieur',
      date: 'Il y a 1 semaine',
      rating: 5,
      comment:
        'Équipe hyper pro et ponctuelle. Le cuir des sièges a retrouvé sa souplesse d’origine et l’odeur de propre dans l’habitacle est digne d’une sortie de concessionnaire.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      name: 'Sophie Dupont',
      vehicle: 'Yamaha YZF-R1',
      service: 'Soin Moto Complet',
      date: 'Il y a 2 semaines',
      rating: 5,
      comment:
        'Moteur dégraissé au millimètre, carénages polis à la perfection. C’est rare de trouver un centre de lavage qui traite les motos avec autant de précision et de respect !',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 4,
      name: 'Thomas Laurent',
      vehicle: 'Canapé 4 Places Roche Bobois',
      service: 'Rénovation Canapé',
      date: 'Il y a 1 mois',
      rating: 5,
      comment:
        'Taches de café et d’usure totalement éliminées grâce au shampooinage injection-extraction ! Mon canapé retrouve une seconde jeunesse.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Auto sliding JS effect
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / (window.innerWidth >= 768 ? 3 : 1)));
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, reviews.length]);

  const nextSlide = () => {
    const maxPages = Math.ceil(reviews.length / (window.innerWidth >= 768 ? 3 : 1));
    setCurrentIndex((prev) => (prev + 1) % maxPages);
  };

  const prevSlide = () => {
    const maxPages = Math.ceil(reviews.length / (window.innerWidth >= 768 ? 3 : 1));
    setCurrentIndex((prev) => (prev - 1 + maxPages) % maxPages);
  };

  const handleAddNewReview = (newRev: {
    name: string;
    vehicle: string;
    service: string;
    rating: number;
    comment: string;
  }) => {
    const reviewItem = {
      id: Date.now(),
      name: newRev.name,
      vehicle: newRev.vehicle,
      service: newRev.service,
      date: 'À l’instant',
      rating: newRev.rating,
      comment: newRev.comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    };
    setReviews([reviewItem, ...reviews]);
  };

  return (
    <section id="avis" className="py-20 bg-[#020712] relative overflow-hidden border-t border-[#122240]">
      {/* Ambient Background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.25em] text-[#FFB800] uppercase mb-2">
            AVIS DE NOS CLIENTS
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            La satisfaction garantie à 100%
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <div className="flex text-[#FFB800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <span className="font-heading font-extrabold text-sm text-white">4.9 / 5</span>
            <span className="text-slate-400 text-xs font-sans">({reviews.length + 380} avis vérifiés)</span>

            {/* Leave Review Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFB800]/15 hover:bg-[#FFB800]/25 border border-[#FFB800]/50 text-[#FFB800] text-xs font-heading font-bold uppercase transition-all duration-200"
            >
              <PlusCircle className="w-4 h-4" />
              <span>DONNER MON AVIS</span>
            </button>
          </div>
        </div>

        {/* Sliding Carousel Container */}
        <div
          className="relative px-2 sm:px-10"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#030d22] border border-[#1d3868] text-white hover:bg-[#FFB800] hover:text-black flex items-center justify-center transition-all shadow-lg"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#030d22] border border-[#1d3868] text-white hover:bg-[#FFB800] hover:text-black flex items-center justify-center transition-all shadow-lg"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            {reviews
              .slice(currentIndex * 3, currentIndex * 3 + 3)
              .concat(
                reviews.slice(0, Math.max(0, currentIndex * 3 + 3 - reviews.length))
              )
              .map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#030d22] border border-[#182c52] hover:border-[#FFB800]/50 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.avatar}
                          alt={rev.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#FFB800]/40"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                            {rev.name}
                            <CheckCircle className="w-3.5 h-3.5 text-[#FFB800]" />
                          </h4>
                          <p className="text-[11px] text-slate-400 font-sans">{rev.vehicle}</p>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-[#FFB800]/20 group-hover:text-[#FFB800]/40 transition-colors" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex text-[#FFB800]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                        ))}
                      </div>
                      <span className="text-[10px] bg-blue-500/10 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-500/20">
                        {rev.service}
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#122240] flex justify-between items-center text-[11px] text-slate-500 font-sans">
                    <span>Client Vérifié</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(Math.ceil(reviews.length / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-[#FFB800]' : 'w-2 bg-slate-700'
                }`}
                aria-label={`Aller au groupe d'avis ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Modal Trigger Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onOpenReviewsModal}
            className="px-6 py-2.5 rounded-full border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 font-heading font-extrabold text-xs tracking-widest uppercase transition-all duration-200"
          >
            VOIR TOUS LES AVIS CLIENTS
          </button>
        </div>
      </div>

      {/* Modal to add a review */}
      <AddReviewModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddReview={handleAddNewReview}
      />
    </section>
  );
};
