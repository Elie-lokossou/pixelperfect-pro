import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState({ name: '', email: '', phone: '', text: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#030e25] border border-[#1d3868] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#152749] flex items-center justify-between bg-[#020816]">
          <div className="flex items-center gap-2">
            <Phone className="text-[#FFB800] w-5 h-5" />
            <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase">
              CONTACT & LOCALISATION
            </h3>
          </div>
          <button
            onClick={() => {
              setSent(false);
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-[#020714] border border-[#1a2d52] space-y-3">
                <a
                  href="tel:+2290199248803"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#FFB800]/10 text-[#FFB800]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">01 99 24 88 03</p>
                    <p className="text-[#FFB800] text-[10px]">Appel direct</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/2290199248803?text=Bonjour%20Lavage%20DKB,%20je%20souhaite%20prendre%20rendez-vous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">WhatsApp Direct</p>
                    <p className="text-emerald-400 text-[10px]">Disponible 7j/7</p>
                  </div>
                </a>

                <a
                  href="mailto:marval1598@gmail.com"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#FFB800]/10 text-[#FFB800]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">marval1598@gmail.com</p>
                    <p className="text-slate-400 text-[10px]">Réponse sous 24h</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-2">
                  <div className="p-2 rounded-lg bg-[#FFB800]/10 text-[#FFB800]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Dèkoungbé</p>
                    <p className="text-slate-300 text-xs">Von avant l’église catholique de Dèkoungbé</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2">
                  <div className="p-2 rounded-lg bg-[#FFB800]/10 text-[#FFB800]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Lun - Sam : 7h30 - 18h30</p>
                    <p className="text-slate-400 text-[10px]">Dimanche sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div>
              {sent ? (
                <div className="p-6 rounded-xl bg-[#020714] border border-[#1a2d52] text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#FFB800] mx-auto" />
                  <h4 className="font-heading font-black text-white text-base">
                    Message Envoyé !
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Merci <strong className="text-[#FFB800]">{msg.name}</strong>, notre équipe vous recontactera très rapidement.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-4 py-2 rounded-full bg-[#FFB800] text-black font-heading font-bold text-xs uppercase"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-300 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={msg.name}
                      onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                      className="w-full bg-[#020714] border border-[#1a2d52] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-300 mb-1">
                      Téléphone ou WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="01 99 24 88 03"
                      value={msg.phone}
                      onChange={(e) => setMsg({ ...msg, phone: e.target.value })}
                      className="w-full bg-[#020714] border border-[#1a2d52] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-300 mb-1">
                      Votre Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Type de véhicule (Moto, Voiture, Meuble) ou question..."
                      value={msg.text}
                      onChange={(e) => setMsg({ ...msg, text: e.target.value })}
                      className="w-full bg-[#020814] border border-[#1a2d52] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFB800]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#FFB800] text-black font-heading font-extrabold text-xs uppercase flex items-center justify-center gap-2 hover:bg-[#ffa700]"
                  >
                    <Send size={14} />
                    <span>ENVOYER LE MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
