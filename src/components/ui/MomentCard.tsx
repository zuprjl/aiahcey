'use client';

import React from 'react';
import { Moment } from '@/data/moments';

interface MomentCardProps {
  moment: Moment;
  onClick: () => void;
}

const categoryConfig: Record<string, { label: string; bg: string; text: string }> = {
  funny: { label: 'Funny', bg: 'bg-[#FAD4DC]', text: 'text-[#C4888E]' },
  soft: { label: 'Soft', bg: 'bg-[#D0E8F2]', text: 'text-[#4A6080]' },
  chaotic: { label: 'Chaotic', bg: 'bg-[#F2C4CE]', text: 'text-[#C4888E]' },
  concert: { label: 'Concert', bg: 'bg-[#B8D4E8]', text: 'text-[#4A6080]' },
  backstage: { label: 'Backstage', bg: 'bg-[#D0E8F2]', text: 'text-[#4A6080]' },
  friendship: { label: 'Friendship', bg: 'bg-[#FAD4DC]', text: 'text-[#C4888E]' },
};

const placeholderGradients: Record<number, string> = {
  1: 'linear-gradient(135deg, #B8D4E8, #87BFDA)',
  2: 'linear-gradient(135deg, #F2C4CE, #E8A0B0)',
  3: 'linear-gradient(135deg, #D0E8F2, #B8D4E8)',
  4: 'linear-gradient(135deg, #FAD4DC, #F2C4CE)',
  5: 'linear-gradient(135deg, #87BFDA, #4A6080)',
  6: 'linear-gradient(135deg, #F2C4CE, #C4888E)',
  7: 'linear-gradient(135deg, #B8D4E8, #D0E8F2)',
  8: 'linear-gradient(135deg, #FAD4DC, #E8A0B0)',
  0: 'linear-gradient(135deg, #C8C0BC, #F5EFE6)',
};

function getGradientIndex(src: string): number {
  const match = src.match(/(\d+)/);
  if (match) return parseInt(match[1]) % 9;
  return 0;
}

export default function MomentCard({ moment, onClick }: MomentCardProps) {
  const cat = categoryConfig[moment.category] ?? categoryConfig.funny;
  const isPlaceholder = moment.imageSrc.startsWith('/images/placeholder');
  const gradientIndex = getGradientIndex(moment.imageSrc);
  const bg = placeholderGradients[gradientIndex] ?? placeholderGradients[0];

  return (
    <button
      onClick={onClick}
      className="group text-left bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden border border-[#F5EFE6] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#87BFDA]"
      style={{ padding: '6px 6px 16px' }}
    >
      {/* Image area */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        {isPlaceholder ? (
          <div
            className="w-full h-full flex items-center justify-center text-white/80 text-xs font-medium text-center px-3"
            style={{ background: bg }}
            aria-label={moment.imageAlt}
            role="img"
          >
            {moment.imageAlt}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={moment.imageSrc}
            alt={moment.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-3 px-1">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cat.bg} ${cat.text}`}>
            {cat.label}
          </span>
          <span className="text-[10px] text-[#C8C0BC]">{moment.date}</span>
        </div>
        <h3
          className="text-sm font-bold text-[#4A6080] leading-tight mb-1.5 group-hover:text-[#C4888E] transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {moment.title}
        </h3>
        <p className="text-xs text-[#C8C0BC] leading-relaxed line-clamp-2">
          {moment.shortDescription}
        </p>
      </div>
    </button>
  );
}
