import React, { useState } from 'react';
import { X, Star, MessageSquare, ThumbsUp } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'Thomas R.',
      service: 'Lavage Auto Complet',
      rating: 5,
      date: 'Il y a 2 jours',
      comment: 'Service irréprochable ! Ma voiture ressort comme neuve. Les plastiques intérieurs et les cuirs ont retrouvé leur éclat d’origine. Je recommande vivement Lavage DKB.',
    },
    {
      id: 2,
      author: 'Sophie M.',
      service: 'Nettoyage Canapé 3 places',
      rating: 5,
      date: 'Il y a 1 semaine',
      comment: 'Impressionnant ! Mon canapé en tissu avait plusieurs taches anciennes d’eau et de café. Tout a disparu avec l’injection/extraction.',
    },
    {
      id: 3,
      author: 'Alexandre B.',
      service: 'Lavage Moto Detail',
      rating: 5,
      date: 'Il y a 2 semaines',
      comment: 'Très pro avec les motards. La chaîne est parfaitement graissée, la bulle est comme neuve et le séchage à l’air chaud évite les traces d’eau.',
    },
  ]);

  const [newReview, setNewReview] = useState({
    author: '',
    service: 'Auto',
    rating: 5,
    comment: '',
  });

  if (!isOpen) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;
    setReviews([
      {
        id: Date.now(),
        author: newReview.author,
        service: `Lavage ${newReview.service}`,
        rating: newReview.rating,
        date: "À l'instant",
        comment: newReview.comment,
      },
      ...reviews,
    ]);
    setNewReview({ author: '', service: 'Auto', rating: 5, comment: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#030e25] border border-[#1d3868] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#152749] flex items-center justify-between bg-[#020816]">
          <div className="flex items-center gap-2">
            <Star className="text-[#FFB800] fill-[#FFB800] w-5 h-5" />
            <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase">
              AVIS CLIENTS (4.9 / 5)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Reviews List & Submission */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Submit form */}
          <form onSubmit={handleAddReview} className="bg-[#020714] border border-[#1a2d52] rounded-xl p-4 space-y-3">
            <h4 className="font-heading font-bold text-xs text-[#FFB800] uppercase">
              Laissez votre avis :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Votre nom"
                required
                value={newReview.author}
                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                className="bg-[#030d22] border border-[#1a2e54] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FFB800]"
              />
              <select
                value={newReview.service}
                onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                className="bg-[#030d22] border border-[#1a2e54] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FFB800]"
              >
                <option value="Auto">Service Auto</option>
                <option value="Moto">Service Moto</option>
                <option value="Tapis">Service Tapis</option>
                <option value="Meuble">Service Meuble</option>
              </select>
            </div>
            <textarea
              placeholder="Votre commentaire..."
              required
              rows={2}
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full bg-[#030d22] border border-[#1a2e54] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FFB800]"
            />
            <button
              type="submit"
              className="px-4 py-1.5 rounded bg-[#FFB800] text-black font-heading font-bold text-xs uppercase"
            >
              Publier l'avis
            </button>
          </form>

          {/* List of reviews */}
          <div className="space-y-3">
            {reviews.map((rev) => (
              <div key={rev.id} className="p-4 rounded-xl bg-[#020817] border border-[#152749]">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-heading font-bold text-sm text-white">{rev.author}</div>
                  <div className="flex items-center text-[#FFB800]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FFB800]" />
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mb-2">
                  <span>{rev.service}</span> • <span>{rev.date}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#122240] bg-[#020714] flex justify-end">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-6 py-2 rounded-full bg-[#FFB800] text-black font-heading font-black text-xs uppercase"
          >
            PRENDRE RDV
          </button>
        </div>
      </div>
    </div>
  );
};
