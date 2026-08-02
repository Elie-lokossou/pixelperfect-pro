import React, { useState } from 'react';
import { X, Star, CheckCircle, Send } from 'lucide-react';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: {
    name: string;
    vehicle: string;
    service: string;
    rating: number;
    comment: string;
  }) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('Lavage Intérieur & Extérieur');
  const [comment, setComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    onAddReview({
      name,
      vehicle: vehicle || 'Véhicule Client',
      service,
      rating,
      comment,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setVehicle('');
      setComment('');
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#030d24] border border-[#1e3868] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#152749] flex items-center justify-between bg-[#020816]">
          <div className="flex items-center gap-2">
            <Star className="text-[#FFB800] w-5 h-5 fill-[#FFB800]" />
            <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase">
              DONNER VOTRE AVIS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Form */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-heading font-black text-xl text-white">Merci pour votre avis !</h4>
              <p className="text-slate-300 text-xs">
                Votre témoignage a bien été publié sur le site de Lavage DKB.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-2">
                  Votre note globale *
                </label>
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          (hoverRating || rating) >= star
                            ? 'fill-[#FFB800] text-[#FFB800]'
                            : 'text-slate-600 fill-transparent'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 font-heading font-black text-sm text-[#FFB800]">
                    {hoverRating || rating} / 5
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                  Votre Nom / Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Marc Dubois"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                />
              </div>

              {/* Vehicle Model & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                    Véhicule ou Surface
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Golf 8 GTI, Moto Z900..."
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                    Service réalisé
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none focus:border-[#FFB800]"
                  >
                    <option value="Lavage Intérieur & Extérieur">Lavage Intérieur & Extérieur</option>
                    <option value="Formule VIP Detail Pro">Formule VIP Detail Pro</option>
                    <option value="Soin Moto Complet">Soin Moto Complet</option>
                    <option value="Nettoyage Tapis / Injection">Nettoyage Tapis / Injection</option>
                    <option value="Rénovation Canapé / Meuble">Rénovation Canapé / Meuble</option>
                  </select>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                  Votre commentaire *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Partagez votre expérience sur la qualité du nettoyage, l'accueil, le résultat final..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-xs font-heading font-bold uppercase"
                >
                  ANNULER
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] text-black font-heading font-black text-xs tracking-wider uppercase shadow-lg hover:brightness-110"
                >
                  <span>PUBLIER MON AVIS</span>
                  <Send className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
