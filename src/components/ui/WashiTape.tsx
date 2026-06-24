'use client';

import React from 'react';

interface WashiTapeProps {
  color?: 'blue' | 'pink' | 'mixed';
  orientation?: 'horizontal' | 'diagonal';
  className?: string;
}

const colorMap = {
  blue: {
    bg: 'rgba(184,212,232,0.55)',
    stripe: 'rgba(135,191,218,0.35)',
  },
  pink: {
    bg: 'rgba(242,196,206,0.55)',
    stripe: 'rgba(232,160,176,0.35)',
  },
  mixed: {
    bg: 'rgba(221,208,222,0.55)',
    stripe: 'rgba(196,136,142,0.25)',
  },
};

export default function WashiTape({ color = 'blue', orientation = 'horizontal', className = '' }: WashiTapeProps) {
  const c = colorMap[color];
  const angle = orientation === 'diagonal' ? '35deg' : '45deg';

  return (
    <div
      className={`rounded-sm ${className}`}
      style={{
        background: `repeating-linear-gradient(
          ${angle},
          ${c.stripe},
          ${c.stripe} 3px,
          transparent 3px,
          transparent 9px
        )`,
        backgroundColor: c.bg,
        height: '14px',
        minWidth: '60px',
      }}
      aria-hidden="true"
    />
  );
}
