'use client';

import React from 'react';

export function TinyStar({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 1L9.5 6H14.5L10.5 9L12 14L8 11L4 14L5.5 9L1.5 6H6.5L8 1Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function TinyHeart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 13.5C8 13.5 2 9.5 2 5.5C2 3.5 3.5 2 5.5 2C6.7 2 7.7 2.6 8 3.3C8.3 2.6 9.3 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9.5 8 13.5 8 13.5Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function TinyFlower({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.8" />
      <ellipse cx="9" cy="4" rx="1.5" ry="2.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="9" cy="14" rx="1.5" ry="2.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="4" cy="9" rx="2.5" ry="1.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="14" cy="9" rx="2.5" ry="1.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="5.5" cy="5.5" rx="1.5" ry="2.5" transform="rotate(-45 5.5 5.5)" fill="currentColor" opacity="0.4" />
      <ellipse cx="12.5" cy="12.5" rx="1.5" ry="2.5" transform="rotate(-45 12.5 12.5)" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function TinyBow({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 7C10 7 6 3 2 4C0 4.5 0.5 7 2 8C4 9 8 7.5 10 7Z" fill="currentColor" opacity="0.6" />
      <path d="M10 7C10 7 14 3 18 4C20 4.5 19.5 7 18 8C16 9 12 7.5 10 7Z" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="7" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function WashiStrip({ color = 'blue', className = '' }: { color?: 'blue' | 'pink' | 'mixed'; className?: string }) {
  const colors = {
    blue: 'rgba(184,212,232,0.6)',
    pink: 'rgba(242,196,206,0.6)',
    mixed: 'rgba(213,204,219,0.6)',
  };
  return (
    <div
      className={`h-4 rounded-sm ${className}`}
      style={{
        background: `repeating-linear-gradient(
          45deg,
          ${colors[color]},
          ${colors[color]} 4px,
          transparent 4px,
          transparent 8px
        )`,
        backgroundColor: color === 'blue' ? 'rgba(208,232,242,0.5)' : color === 'pink' ? 'rgba(250,212,220,0.5)' : 'rgba(240,224,230,0.5)',
      }}
      aria-hidden="true"
    />
  );
}
