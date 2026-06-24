'use client';

import React from 'react';
import Modal from './Modal';
import { Moment } from '@/data/moments';

interface MomentModalProps {
  moment: Moment | null;
  onClose: () => void;
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

function getGradient(src: string): string {
  const match = src.match(/(\d+)/);
  const idx = match ? parseInt(match[1]) % 9 : 0;
  return placeholderGradients[idx] ?? placeholderGradients[0];
}

export default function MomentModal({ moment, onClose }: MomentModalProps) {
  if (!moment) return null;
  const cat = categoryConfig[moment.category] ?? categoryConfig.funny;
  const isPlaceholder = moment.imageSrc.startsWith('/images/placeholder');
  const bg = getGradient(moment.imageSrc);

  return (
    <Modal isOpen={!!moment} onClose={onClose}>
      {/* Close button */}
      <div className="flex justify-end p-4 pb-0">
        <button
          onClick={onClose}
          className="text-[#C8C0BC] hover:text-[#4A6080] transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Image */}
      <div className="px-6">
        <div className="w-full aspect-video overflow-hidden rounded-sm">
          {isPlaceholder ? (
            <div
              className="w-full h-full flex items-center justify-center text-white/80 text-sm font-medium text-center px-4"
              style={{ background: bg }}
              role="img"
              aria-label={moment.imageAlt}
            >
              {moment.imageAlt}
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={moment.imageSrc} alt={moment.imageAlt} className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.bg} ${cat.text}`}>
            {cat.label}
          </span>
          <span className="text-xs text-[#C8C0BC]">{moment.date}</span>
          {moment.featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FDF8F0] text-[#C4888E] border border-[#F2C4CE]">
              ★ Featured
            </span>
          )}
        </div>

        <h2
          className="text-2xl font-bold text-[#4A6080] mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {moment.title}
        </h2>

        <p
          className="text-sm text-[#4A6080] leading-relaxed mb-4"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {moment.fullDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {moment.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[#FDF8F0] text-[#C4888E] border border-[#F2C4CE]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related tweets */}
        {moment.relatedTweetIds.length > 0 && (
          <div className="pt-3 border-t border-[#F5EFE6]">
            <p className="text-xs font-medium text-[#C8C0BC] mb-1">
              Referenced in {moment.relatedTweetIds.length} fan tweet{moment.relatedTweetIds.length > 1 ? 's' : ''} — see Tweets section
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
