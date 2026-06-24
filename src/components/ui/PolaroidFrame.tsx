'use client';

import React from 'react';

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  rotation?: number;
  className?: string;
}

const placeholderColors: Record<number, string> = {
  1: 'linear-gradient(135deg, #B8D4E8 0%, #87BFDA 100%)',
  2: 'linear-gradient(135deg, #F2C4CE 0%, #E8A0B0 100%)',
  3: 'linear-gradient(135deg, #D0E8F2 0%, #B8D4E8 100%)',
  4: 'linear-gradient(135deg, #FAD4DC 0%, #F2C4CE 100%)',
  5: 'linear-gradient(135deg, #87BFDA 0%, #4A6080 50%, #B8D4E8 100%)',
  6: 'linear-gradient(135deg, #F2C4CE 0%, #C4888E 50%, #FAD4DC 100%)',
  7: 'linear-gradient(135deg, #B8D4E8 0%, #D0E8F2 100%)',
  8: 'linear-gradient(135deg, #FAD4DC 0%, #E8A0B0 100%)',
  0: 'linear-gradient(135deg, #C8C0BC 0%, #F5EFE6 100%)',
};

function getColorIndex(src: string): number {
  const match = src.match(/(\d+)/);
  if (match) return parseInt(match[1]) % 9;
  return 0;
}

function isPlaceholder(src: string): boolean {
  return src.startsWith('/images/placeholder');
}

export default function PolaroidFrame({ src, alt, caption, date, rotation = 0, className = '' }: PolaroidFrameProps) {
  const colorIndex = getColorIndex(src);
  const bg = placeholderColors[colorIndex] ?? placeholderColors[0];

  return (
    <div
      className={`bg-white shadow-md inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, padding: '8px 8px 32px 8px' }}
    >
      {isPlaceholder(src) ? (
        <div
          className="w-full aspect-square flex items-center justify-center text-xs text-white/80 font-medium"
          style={{ background: bg, minWidth: '100px', minHeight: '100px' }}
          aria-label={alt}
          role="img"
        >
          <span className="text-center px-2 leading-tight drop-shadow">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full object-cover" />
      )}
      {(caption || date) && (
        <div className="mt-2 text-center">
          {caption && <p className="text-xs font-medium text-[#4A6080] leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>{caption}</p>}
          {date && <p className="text-[10px] text-[#C8C0BC] mt-0.5">{date}</p>}
        </div>
      )}
    </div>
  );
}
