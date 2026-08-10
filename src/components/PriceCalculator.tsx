import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface PriceCalculatorProps {
  onOpenBookingWithDetails: (service: string, formula: string, options: string[]) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  onOpenBookingWithDetails,
}) => {
  const [vehicleType, setVehicleType] = useState<'citadine' | 'berline' | 'suv' | 'moto' | 'meuble'>('citadine');
  const [formulaLevel, setFormulaLevel] = useState<'express' | 'complet' | 'fond'>('complet');
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['jantes']);

  // Base prices in FCFA by vehicle & formula
  // Moto: 500 F (Express), 1 000 F (Complet), 2 000 F (Lavage à fond)
  // Petite voiture (Citadine): 1 000 F (Express), 1 500 F (Complet), 13 000 F (Lavage à fond)
  // Berline (Moyenne): 1 500 F (Express), 2 000 F (Complet), 14 000 F (Lavage à fond)
  // Grande voiture (SUV / 4x4): 2 000 F (Express), 3 000 F (Complet), 15 000 F (Lavage à fond)
  // Canapé / Tapis: 1 500 F (Simple), 4 000 F (Complet), 8 000 F (Lavage à fond)
  const basePrices: Record<string, Record<string, number>> = {
    moto: { express: 500, complet: 1000, fond: 2000 },
    citadine: { express: 1000, complet: 1500, fond: 13000 },
    berline: { express: 1500, complet: 2000, fond: 14000 },
    suv: { express: 2000, complet: 3000, fond: 15000 },
    meuble: { express: 1500, complet: 4000, fond: 8000 },
  };

  // Additional options price in FCFA
  const availableOptions = [
    { id: 'jantes', label: 'Brillant Jantes & Pneus', price: 500 },
    { id: 'cuir', label: 'Traitement Cuir & Plastiques UV', price: 1000 },
    { id: 'ozone', label: 'Désinfection & Anti-odeurs', price: 1000 },
    { id: 'hydrophobe', label: 'Protection Hydrophobe & Lustrage', price: 2000 },
  ];

  const formatFCFA = (val: number) => {
    return val.toLocaleString('fr-FR') + ' FCFA';
  };

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const calculatedBase = basePrices[vehicleType]?.[formulaLevel] || 1500;
  const optionsTotal = selectedOptions.reduce((acc, optId) => {
    const found = availableOptions.find((o) => o.id === optId);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = calculatedBase + optionsTotal;

  const handleBook = () => {
    const serviceKey = vehicleType === 'moto' ? 'moto' : vehicleType === 'meuble' ? 'meuble' : 'auto';
    onOpenBookingWithDetails(serviceKey, formulaLevel, selectedOptions);
  };

  const getVehicleLabel = (type: string) => {
    switch (type) {
      case 'citadine': return 'Petite Voiture (Citadine)';
      case 'berline': return 'Berline (Moyenne)';
      case 'suv': return 'Grande Voiture (SUV / 4x4)';
      case 'moto': return 'Moto';
      case 'meuble': return 'Canapé / Tapis';
      default: return type;
    }
  };

  const getFormulaLabel = (f: string) => {
    switch (f) {
      case 'express': return 'Lavage Simple (Express)';
      case 'complet': return 'Lavage Complet';
      case 'fond': return 'Lavage à Fond (Intégral)';
      default: return f;
    }
  };

  return (
    <section id="calculateur" className="py-16 bg-[#020817] relative overflow-hidden border-t border-[#122240]">
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
            Obtenez un devis instantané en FCFA selon votre véhicule et la formule sélectionnée.
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
                  { id: 'moto', label: 'Moto', badge: '500 F' },
                  { id: 'citadine', label: 'Petite voiture', badge: '1 000 - 1 500 F' },
                  { id: 'berline', label: 'Berline', badge: '1 500 - 2 000 F' },
                  { id: 'suv', label: 'Grande voiture', badge: '2 000 - 3 000 F' },
                  { id: 'meuble', label: 'Tapis & Meuble', badge: 'Dès 1 500 F' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicleType(v.id as any)}
                    className={`py-3 px-2 rounded-xl font-heading font-black text-xs uppercase tracking-wider border transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      vehicleType === v.id
                        ? 'bg-[#FFB800] text-black border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                        : 'bg-[#020713] text-slate-300 border-[#1a2e54] hover:border-slate-600'
                    }`}
                  >
                    <span>{v.label}</span>
                    <span className={`text-[10px] font-sans font-bold px-1.5 py-0.2 rounded ${
                      vehicleType === v.id ? 'bg-black/20 text-black' : 'text-[#FFB800]'
                    }`}>
                      {v.badge}
                    </span>
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
                  {
                    id: 'express',
                    name: 'Lavage Simple',
                    time: '30-45 min',
                    desc: 'Extérieur haute pression, mousse & séchage pro',
                  },
                  {
                    id: 'complet',
                    name: 'Lavage Complet',
                    time: '1h 15 min',
                    desc: 'Intérieur + Extérieur, aspiration & brillant pneus',
                  },
                  {
                    id: 'fond',
                    name: 'Lavage à Fond',
                    time: '3h 00 min',
                    desc: 'Shampoing intégral sièges, moquettes & habitacle à neuf',
                  },
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
                    <div className="mt-2 text-right">
                      <span className="text-xs font-heading font-black text-[#FFB800]">
                        {formatFCFA(basePrices[vehicleType]?.[f.id] || 0)}
                      </span>
                    </div>
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
                      <span className="text-xs font-heading font-extrabold text-[#FFB800]">
                        +{opt.price.toLocaleString('fr-FR')} F
                      </span>
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
              <h3 className="font-heading font-black text-lg uppercase tracking-wider">RÉCAPITULATIF</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex justify-between">
                <span>Véhicule / Surface :</span>
                <strong className="text-white text-right">{getVehicleLabel(vehicleType)}</strong>
              </div>
              <div className="flex justify-between">
                <span>Formule :</span>
                <strong className="text-white text-right">{getFormulaLabel(formulaLevel)}</strong>
              </div>
              <div className="flex justify-between">
                <span>Tarif de base :</span>
                <strong className="text-white">{formatFCFA(calculatedBase)}</strong>
              </div>
              {optionsTotal > 0 && (
                <div className="flex justify-between">
                  <span>Options ({selectedOptions.length}) :</span>
                  <strong className="text-[#FFB800]">+{formatFCFA(optionsTotal)}</strong>
                </div>
              )}
            </div>

            {/* Total Price Display */}
            <div className="pt-4 border-t border-[#162a50] text-center">
              <span className="text-slate-400 text-xs font-heading font-bold uppercase block mb-1">
                ESTIMATION TOTALE
              </span>
              <div className="font-heading font-black italic text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF599] via-[#FFB800] to-[#C98000] drop-shadow">
                {formatFCFA(totalPrice)}
              </div>
              <span className="text-[11px] text-slate-400 block mt-1">Lavage professionnel Dèkoungbé • Sans engagement</span>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBook}
              className="w-full py-4 rounded-xl font-heading font-black text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#FFD000] via-[#FFB800] to-[#E69500] hover:from-[#FFD926] hover:to-[#FFA000] transition-all duration-300 shadow-[0_4px_20px_rgba(255,184,0,0.35)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>RÉSERVER CE SERVICE</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
