import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Car, Bike, Sparkles, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'auto',
}) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedFormula, setSelectedFormula] = useState('complet');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const formulasMap: Record<string, any[]> = {
    auto: [
      { id: 'express', name: 'Formule Express', price: '35 €', time: '45 min', features: ['Lavage extérieur haute pression', 'Séchage microfibre pro', 'Nettoyage vitres extérieures'] },
      { id: 'complet', name: 'Formule Complet', price: '75 €', time: '1h 30 min', features: ['Lavage Intérieur & Extérieur', 'Aspiration profonde & dépoussiérage', 'Shampoing tapis & sièges', 'Finition brillant pneus'] },
      { id: 'vip', name: 'VIP Detail Pro', price: '140 €', time: '3h 00 min', features: ['Traitement hydrophobe carrosserie', 'Décontamination jantes & étriers', 'Traitement cuir & plastique UV', 'Désinfection habitacle à l’ozone'] },
    ],
    moto: [
      { id: 'express', name: 'Lavage Quick Moto', price: '25 €', time: '30 min', features: ['Dégraissage chaîne & jantes', 'Lavage carénage doux', 'Séchage souffleur chaud'] },
      { id: 'complet', name: 'Soin Moto Complet', price: '50 €', time: '1h 00 min', features: ['Lavage minutieux moteur & pot', 'Lustrage carénage & bulle', 'Graissage chaîne & protection'] },
    ],
    tapis: [
      { id: 'express', name: 'Nettoyage Tapis Simple', price: '20 €', time: '30 min', features: ['Aspiration haute puissance', 'Détachage ciblé'] },
      { id: 'complet', name: 'Injection / Extraction Deep', price: '40 €', time: '1h 00 min', features: ['Lavage injection-extraction', 'Traitement anti-bactérien & anti-odeurs', 'Séchage thermique rapide'] },
    ],
    meuble: [
      { id: 'express', name: 'Nettoyage Siège / Fauteuil', price: '30 €', time: '45 min', features: ['Dépoussiérage textile', 'Traitement des taches localisées'] },
      { id: 'complet', name: 'Rénovation Canapé (2-4 places)', price: '85 €', time: '1h 30 min', features: ['Injection / Extraction intégrale', 'Désinfection & désodorisation', 'Protection anti-taches'] },
    ],
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#030d22] border border-[#1d3563] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#152749] flex items-center justify-between bg-[#020816]">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black italic text-xl text-white">LAVAGE</span>
            <span className="font-heading font-black italic text-xl text-[#FFB800]">DKB</span>
            <span className="text-xs font-heading font-bold text-slate-400 border-l border-slate-700 pl-2">
              RESERVATION
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                Rendez-vous Confirmé !
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Merci <span className="text-[#FFB800] font-bold">{formData.name}</span>. Votre réservation pour le service{' '}
                <span className="uppercase font-bold text-white">{selectedService}</span> le{' '}
                <span className="text-white font-bold">{selectedDate || 'demain'} à {selectedTime}</span> a bien été enregistrée.
              </p>
              <div className="p-4 rounded-xl bg-[#020714] border border-[#1a2d52] text-left max-w-md mx-auto text-xs space-y-2">
                <p><span className="text-slate-400">Référence:</span> <strong className="text-[#FFB800]">DKB-2025-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
                <p><span className="text-slate-400">Téléphone:</span> <span className="text-slate-200">{formData.phone}</span></p>
                <p><span className="text-slate-400">Lieu:</span> <span className="text-slate-200">123 Rue de la Propreté, 75000 Paris (ou à domicile)</span></p>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-6 px-8 py-3 rounded-full bg-[#FFB800] text-black font-heading font-black text-xs tracking-wider uppercase shadow-lg hover:bg-[#ffa700]"
              >
                RETOUR À L'ACCUEIL
              </button>
            </div>
          ) : (
            <div>
              {/* Step Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#122240] text-xs font-heading font-bold">
                <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-[#FFB800] text-black' : 'text-slate-400'}`}>
                  1. Prestation
                </span>
                <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-[#FFB800] text-black' : 'text-slate-400'}`}>
                  2. Date & Heure
                </span>
                <span className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-[#FFB800] text-black' : 'text-slate-400'}`}>
                  3. Coordonnées
                </span>
              </div>

              {/* STEP 1: Select Service & Package */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Service selector tabs */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-2">
                      Sélectionnez la catégorie :
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'auto', name: 'AUTO' },
                        { id: 'moto', name: 'MOTO' },
                        { id: 'tapis', name: 'TAPIS' },
                        { id: 'meuble', name: 'MEUBLE' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            setSelectedService(s.id);
                            setSelectedFormula('complet');
                          }}
                          className={`py-2.5 px-3 rounded-xl font-heading font-black text-xs tracking-wider uppercase border transition-all ${
                            selectedService === s.id
                              ? 'bg-[#FFB800] text-black border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                              : 'bg-[#020817] text-slate-300 border-[#152749] hover:border-[#FFB800]/50'
                          }`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Formula Options */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-3">
                      Choisissez votre formule :
                    </label>
                    <div className="space-y-3">
                      {(formulasMap[selectedService] || []).map((f) => (
                        <div
                          key={f.id}
                          onClick={() => setSelectedFormula(f.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedFormula === f.id
                              ? 'bg-[#0a1836] border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.15)]'
                              : 'bg-[#020817] border-[#152749] hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-black text-sm text-white">{f.name}</span>
                              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">
                                {f.time}
                              </span>
                            </div>
                            <span className="font-heading font-black text-base text-[#FFB800]">{f.price}</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1">
                            {f.features.map((feat: string, i: number) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <span className="text-[#FFB800]">✓</span> {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFB800] text-black font-heading font-black text-xs tracking-wider uppercase hover:bg-[#ffa700]"
                    >
                      <span>SUIVANT</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-2">
                      Choisissez la date :
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-2">
                      Choisissez le créneau horaire :
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {['08:30', '10:00', '11:30', '14:00', '15:30', '17:00', '18:15'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 rounded-lg font-heading font-bold text-xs border transition-colors ${
                            selectedTime === time
                              ? 'bg-[#FFB800] text-black border-[#FFB800]'
                              : 'bg-[#020817] text-slate-300 border-[#152749] hover:border-slate-600'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 font-heading font-bold text-xs uppercase hover:bg-slate-800"
                    >
                      <ArrowLeft size={16} />
                      <span>RETOUR</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFB800] text-black font-heading font-black text-xs tracking-wider uppercase hover:bg-[#ffa700]"
                    >
                      <span>SUIVANT</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Customer Info Form */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                        Numéro de Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-slate-300 mb-1">
                      Modèle / Marque du véhicule
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Audi A4, Yamaha MT-07, Canapé 3 places..."
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-[#020817] border border-[#1a2d52] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 font-heading font-bold text-xs uppercase hover:bg-slate-800"
                    >
                      <ArrowLeft size={16} />
                      <span>RETOUR</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] text-black font-heading font-black text-xs tracking-wider uppercase shadow-xl hover:bg-[#ffa700]"
                    >
                      CONFIRMER MON RENDEZ-VOUS
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
