import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface PriceCalculatorProps {
  onOpenBookingWithDetails: (service: string, formula: string, options: string[]) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  onOpenBookingWithDetails,
}) => {
  const [vehicleType, setVehicleType] = useState<'citadine' | 'berline' | 'suv' | 'moto' | 'meuble'>('berline');
  const [formulaLevel, setFormulaLevel] = useState<'express' | 'complet' | 'vip'>('complet');
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['cuir', 'jantes']);

  // Base prices by vehicle & formula
  const basePrices: Record<string, Record<string, number>> = {
    citadine: { express: 30, complet: 65, vip: 120 },
    berline: { express: 35, complet: 75, vip: 140 },
    suv: { express: 45, complet: 90, vip: 160 },
    moto: { express: 25, complet: 50, vip: 95 },
    meuble: { express: 35, complet: 70, vip: 130 },
  };

  // Additional options price
  const availableOptions = [
    { id: 'cuir', label: 'Traitement & Nourrissant Cuir', price: 20 },
    { id: 'jantes', label: 'Décontamination & Brillant Jantes', price: 15 },
    { id: 'ozone', label: 'Désinfection & Anti-odeurs Ozone', price: 25 },
    { id: 'hydrophobe', label: 'Protection Céramique Hydrophobe', price: 35 },
  ];

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const calculatedBase = basePrices[vehicleType]?.[formulaLevel] || 75;
  const optionsTotal = selectedOptions.reduce((acc, optId) => {
    const found = availableOptions.find((o) => o.id === optId);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = calculatedBase + optionsTotal;

  const handleBook = () => {
    const serviceKey = vehicleType === 'moto' ? 'moto' : vehicleType === 'meuble' ? 'meuble' : 'auto';
    onOpenBookingWithDetails(serviceKey, formulaLevel, selectedOptions);
  };

  return (
    <section className="py-16 bg-[#020817] relative overflow-hidden border-t border-[#122240]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-heading font-black tracking-widest uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATEUR DE TARIF EN DIRECT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Calculez votre tarif sur-mesure
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto font-sans">
            Obtenez un devis instantané selon le type de véhicule et les options de soin souhaitées.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-[#030d24] border border-[#162a50] rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* 1. Vehicle Selection */}
            <div>
              <label className="block text-xs font-heading font-black tracking-wider uppercase text-[#FFB800] mb-3">
                1. TYPE DE VÉHICULE OU SURFACE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { id: 'citadine', label: 'Citadine' },
                  { id: 'berline', label: 'Berline' },
                  { id: 'suv', label: 'SUV / 4x4' },
                  { id: 'moto', label: 'Moto' },
                  { id: 'meuble', label: 'Canapé / Tapis' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicleType(v.id as any)}
                    className={`py-3 px-2 rounded-xl font-heading font-black text-xs uppercase tracking-wider border transition-all text-center ${
                      vehicleType === v.id
                        ? 'bg-[#FFB800] text-black border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                        : 'bg-[#020713] text-slate-300 border-[#1a2e54] hover:border-slate-600'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Formula Selection */}
            <div>
              <label className="block text-xs font-heading font-black tracking-wider uppercase text-[#FFB800] mb-3">
                2. FORMULE DE LAVAGE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'express', name: 'Express', time: '45 min', desc: 'Nettoyage rapide intérieur/extérieur' },
                  { id: 'complet', name: 'Complet Premium', time: '1h 30', desc: 'Shampoing intégral & soin jantes' },
                  { id: 'vip', name: 'VIP Detail Pro', time: '3h 00', desc: 'Décontamination & céramique' },
                ].map((f) => (
                  <div
                    key={f.id}
                    onClick={() => setFormulaLevel(f.id as any)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formulaLevel === f.id
                        ? 'bg-[#0a1b3f] border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.2)]'
                        : 'bg-[#020713] border-[#1a2e54] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-black text-sm text-white">{f.name}</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">
                        {f.time}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Extra Options */}
            <div>
              <label className="block text-xs font-heading font-black tracking-wider uppercase text-[#FFB800] mb-3">
                3. OPTIONS DE PROTECTION & SOIN
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableOptions.map((opt) => {
                  const isChecked = selectedOptions.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-[#0b1c40] border-[#FFB800] text-white'
                          : 'bg-[#020713] border-[#1a2e54] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#FFB800] border-[#FFB800] text-black'
                              : 'border-slate-600 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-heading font-bold text-slate-200">{opt.label}</span>
                      </div>
                      <span className="text-xs font-heading font-extrabold text-[#FFB800]">+{opt.price} €</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Price Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#041333] to-[#02091c] border border-[#1b3466] rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-24 space-y-6">
            <div className="flex items-center gap-2 text-white border-b border-[#162a50] pb-4">
              <Sparkles className="w-5 h-5 text-[#FFB800]" />
              <h3 className="font-heading font-black text-lg uppercase tracking-wider">RECAPITULATIF</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex justify-between">
                <span>Véhicule:</span>
                <strong className="text-white capitalize">{vehicleType}</strong>
              </div>
              <div className="flex justify-between">
                <span>Formule:</span>
                <strong className="text-white capitalize">{formulaLevel}</strong>
              </div>
              <div className="flex justify-between">
                <span>Tarif de base:</span>
                <strong className="text-white">{calculatedBase} €</strong>
              </div>
              {optionsTotal > 0 && (
                <div className="flex justify-between">
                  <span>Options cumulées ({selectedOptions.length}):</span>
                  <strong className="text-[#FFB800]">+{optionsTotal} €</strong>
                </div>
              )}
            </div>

            {/* Total Price Display */}
            <div className="pt-4 border-t border-[#162a50] text-center">
              <span className="text-slate-400 text-xs font-heading font-bold uppercase block mb-1">
                ESTIMATION TOTALE
              </span>
              <div className="font-heading font-black italic text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF599] via-[#FFB800] to-[#C98000] drop-shadow">
                {totalPrice} €
              </div>
              <span className="text-[11px] text-slate-400 block mt-1">TTC • Sans engagement</span>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBook}
              className="w-full py-4 rounded-xl font-heading font-black text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] hover:from-[#FFD926] hover:to-[#FFA000] transition-all duration-300 shadow-[0_4px_20px_rgba(255,184,0,0.35)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>RÉSERVER AVEC CE TARIF</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
