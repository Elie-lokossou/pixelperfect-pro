import React, { useState } from 'react';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  beforeImage,
  afterImage,
  title,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div
      className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#1a2c4e] bg-[#020917] select-none group shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`${title} Après`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} Avant`}
          loading="lazy"
          decoding="async"
          className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Darkening filter for dirty state */}
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Yellow Tags */}
      {/* AVANT Tag */}
      <div className="absolute top-2 left-2 z-20 bg-[#FFB800] text-black font-heading font-black text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded shadow-md">
        AVANT
      </div>

      {/* APRÈS Tag */}
      <div className="absolute top-2 right-2 z-20 bg-[#FFB800] text-black font-heading font-black text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded shadow-md">
        APRÈS
      </div>

      {/* Vertical Slider Line */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-[#FFB800] shadow-[0_0_10px_#FFB800] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Center handle knob */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FFB800] border-2 border-black flex items-center justify-center text-black text-[10px] font-bold shadow-md">
          ↔
        </div>
      </div>

      {/* Hover Instruction Overlay */}
      {!isHovering && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-sm text-slate-200 text-[10px] font-heading font-semibold px-2.5 py-0.5 rounded-full border border-slate-700 pointer-events-none opacity-80">
          Glissez pour comparer
        </div>
      )}
    </div>
  );
};
