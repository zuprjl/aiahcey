'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DynamicCard as DynamicCardType } from '@/data/dynamic';

interface DynamicCardProps {
  card: DynamicCardType;
}

const colorStyles = {
  blue: {
    gradient: 'linear-gradient(135deg, #D0E8F2 0%, #87BFDA 100%)',
    border: '#B8D4E8',
    title: '#4A6080',
    accent: '#87BFDA',
  },
  pink: {
    gradient: 'linear-gradient(135deg, #FAD4DC 0%, #E8A0B0 100%)',
    border: '#F2C4CE',
    title: '#C4888E',
    accent: '#E8A0B0',
  },
  mixed: {
    gradient: 'linear-gradient(135deg, #D0E8F2 0%, #FAD4DC 100%)',
    border: '#D9C8D2',
    title: '#4A6080',
    accent: '#C4888E',
  },
};

export default function DynamicCard({ card }: DynamicCardProps) {
  const [hovered, setHovered] = useState(false);
  const styles = colorStyles[card.color];

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-default shadow-sm border"
      style={{ borderColor: styles.border, minHeight: '220px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(74,96,128,0.12)' }}
      transition={{ duration: 0.25 }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: styles.gradient, opacity: 0.5 }} />

      {/* Content */}
      <div className="relative p-5 flex flex-col h-full" style={{ minHeight: '220px' }}>
        {/* Emoji */}
        <div className="text-2xl mb-2">{card.emoji}</div>

        {/* Pairing title */}
        <h3
          className="text-lg font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: styles.title }}
        >
          {card.pairing}
        </h3>

        {/* Traits */}
        <div className="flex gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/60 text-[#4A6080]">
            Aiah: {card.aiahTrait}
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/60 text-[#C4888E]">
            Stacey: {card.staceyTrait}
          </span>
        </div>

        {/* Short description */}
        <p
          className="text-sm text-[#4A6080] leading-relaxed"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {card.description}
        </p>

        {/* Hover detail */}
        <motion.div
          className="absolute inset-0 p-5 flex flex-col justify-center"
          style={{ background: `${styles.gradient}`, opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none' }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-xl mb-2">{card.emoji}</div>
          <h3
            className="text-base font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: styles.title }}
          >
            {card.pairing}
          </h3>
          <p
            className="text-xs text-[#4A6080] leading-relaxed"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {card.longDescription}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
