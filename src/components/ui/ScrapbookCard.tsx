'use client';

import React from 'react';
import WashiTape from './WashiTape';

interface ScrapbookCardProps {
  children: React.ReactNode;
  id?: string;
  rotation?: number;
  label?: string;
  className?: string;
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
  const deg = (h % 41) / 10 - 2; // range: -2 to +2
  return deg;
}

function getTapeColor(id: string): 'blue' | 'pink' {
  return Math.abs(hashId(id)) % 2 === 0 ? 'blue' : 'pink';
}

export default function ScrapbookCard({ children, id = 'card', rotation, label, className = '' }: ScrapbookCardProps) {
  const deg = rotation !== undefined ? rotation : getRotation(id);
  const tapeColor = getTapeColor(id);

  return (
    <div
      className={`relative bg-white shadow-md rounded-sm ${className}`}
      style={{ transform: `rotate(${deg}deg)`, padding: '8px 8px 16px 8px' }}
    >
      {/* Washi tape at top */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 z-10">
        <WashiTape color={tapeColor} />
      </div>

      {/* Optional handwritten label */}
      {label && (
        <p className="text-xs text-[#C4888E] mb-2 text-center" style={{ fontFamily: 'cursive' }}>
          {label}
        </p>
      )}

      {children}
    </div>
  );
}
