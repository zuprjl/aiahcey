'use client';

import React from 'react';
import { MemoryItem } from '@/data/memory';
import { TinyStar, TinyHeart } from './DecorativeElements';

interface MemoryCardProps {
  item: MemoryItem;
  rotation?: number;
}

function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = ((h << 5) - h + id.charCodeAt(i)) | 0;
  }
  return h;
}

function getRotation(id: string): number {
  const h = Math.abs(hashId(id));
  return (h % 41) / 10 - 2;
}

const categoryColors: Record<string, string> = {
  'soft moment': '#D0E8F2',
  mystery: '#FAD4DC',
  concert: '#B8D4E8',
  chaotic: '#F2C4CE',
  performance: '#D0E8F2',
  fashion: '#FAD4DC',
};

export default function MemoryCard({ item, rotation }: MemoryCardProps) {
  const deg = rotation !== undefined ? rotation : getRotation(item.id);
  const catColor = categoryColors[item.category] ?? '#F5EFE6';

  return (
    <div
      className="bg-white shadow-sm border border-[#F5EFE6] rounded-sm p-4 relative"
      style={{ transform: `rotate(${deg}deg)` }}
    >
      {/* Iconic badge */}
      {item.iconic && (
        <div className="absolute -top-2 -right-2 bg-[#FAD4DC] border border-[#F2C4CE] rounded-full w-7 h-7 flex items-center justify-center shadow-sm z-10" title="Iconic moment">
          <TinyStar className="text-[#C4888E] w-3 h-3" />
        </div>
      )}

      {/* Category pill */}
      <div className="mb-2.5">
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: catColor, color: '#4A6080' }}
        >
          {item.category}
        </span>
      </div>

      {/* Title */}
      <h4
        className="text-sm font-bold text-[#4A6080] mb-1.5 leading-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {item.title}
      </h4>

      {/* Description */}
      <p className="text-xs text-[#C8C0BC] leading-relaxed mb-3">
        {item.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[#C8C0BC]">{item.date}</span>
        <TinyHeart className="text-[#F2C4CE] w-3 h-3" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-2">
        {item.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-[#FDF8F0] text-[#C4888E]">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
