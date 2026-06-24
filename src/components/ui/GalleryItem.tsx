'use client';

import React from 'react';
import { GalleryItem as GalleryItemType } from '@/data/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
}

const placeholderGradients: Record<number, string> = {
  1: 'linear-gradient(135deg, #B8D4E8, #87BFDA)',
  2: 'linear-gradient(135deg, #F2C4CE, #E8A0B0)',
  3: 'linear-gradient(135deg, #D0E8F2, #B8D4E8)',
  4: 'linear-gradient(135deg, #FAD4DC, #F2C4CE)',
  5: 'linear-gradient(135deg, #87BFDA, #4A6080)',
  6: 'linear-gradient(135deg, #F2C4CE, #C4888E)',
  7: 'linear-gradient(135deg, #B8D4E8, #D0E8F2)',
  8: 'linear-gradient(135deg, #FAD4DC, #E8A0B0)',
  9: 'linear-gradient(135deg, #D0E8F2, #87BFDA)',
  10: 'linear-gradient(135deg, #FAD4DC, #C4888E)',
  11: 'linear-gradient(135deg, #B8D4E8, #FAD4DC)',
  12: 'linear-gradient(135deg, #87BFDA, #E8A0B0)',
  0: 'linear-gradient(135deg, #C8C0BC, #F5EFE6)',
};

function getGradient(src: string): string {
  const match = src.match(/(\d+)/);
  const idx = match ? parseInt(match[1]) % 13 : 0;
  return placeholderGradients[idx] ?? placeholderGradients[0];
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const isPlaceholder = item.src.startsWith('/images/placeholder');
  const bg = getGradient(item.src);

  return (
    <div className="mb-3 break-inside-avoid group relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
      {isPlaceholder ? (
        <div
          className="w-full flex items-end text-white/80 text-xs font-medium"
          style={{ background: bg, minHeight: '140px', aspectRatio: item.featured ? '1/1.2' : '1/1' }}
          role="img"
          aria-label={item.alt}
        >
          <div className="w-full bg-black/20 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="leading-tight">{item.caption}</p>
            <p className="text-[10px] opacity-70 mt-0.5">{item.date}</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs leading-tight">{item.caption}</p>
            <p className="text-white/70 text-[10px] mt-0.5">{item.date}</p>
          </div>
        </div>
      )}
    </div>
  );
}
