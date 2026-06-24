'use client';

import React from 'react';
import { TimelineEntry } from '@/data/timeline';

interface TimelineYearProps {
  year: number;
  entries: TimelineEntry[];
  isActive: boolean;
}

const typeConfig: Record<string, { icon: string; color: string }> = {
  moment: { icon: '✨', color: '#B8D4E8' },
  photo: { icon: '📷', color: '#F2C4CE' },
  tweet: { icon: '💬', color: '#FAD4DC' },
  milestone: { icon: '⭐', color: '#87BFDA' },
};

const placeholderGradients: Record<number, string> = {
  1: 'linear-gradient(135deg, #B8D4E8, #87BFDA)',
  2: 'linear-gradient(135deg, #F2C4CE, #E8A0B0)',
  3: 'linear-gradient(135deg, #D0E8F2, #B8D4E8)',
  4: 'linear-gradient(135deg, #FAD4DC, #F2C4CE)',
  5: 'linear-gradient(135deg, #87BFDA, #4A6080)',
  6: 'linear-gradient(135deg, #F2C4CE, #C4888E)',
  7: 'linear-gradient(135deg, #B8D4E8, #D0E8F2)',
  0: 'linear-gradient(135deg, #C8C0BC, #F5EFE6)',
};

function getGradient(src: string): string {
  const match = src.match(/(\d+)/);
  const idx = match ? parseInt(match[1]) % 8 : 0;
  return placeholderGradients[idx] ?? placeholderGradients[0];
}

export default function TimelineYear({ entries, isActive }: TimelineYearProps) {
  if (!isActive) return null;

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#B8D4E8]" />

      <div className="space-y-6">
        {entries.map((entry) => {
          const tc = typeConfig[entry.type] ?? typeConfig.moment;
          const isMilestone = entry.type === 'milestone';

          return (
            <div key={entry.id} className="relative pl-12">
              {/* Dot on line */}
              <div
                className="absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[10px]"
                style={{ backgroundColor: tc.color }}
              >
                {tc.icon}
              </div>

              <div
                className={`bg-white rounded-lg p-4 shadow-sm border ${
                  isMilestone ? 'border-[#87BFDA] shadow-md' : 'border-[#F5EFE6]'
                }`}
              >
                {isMilestone && (
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[10px] font-semibold text-[#87BFDA] uppercase tracking-wider">Milestone</span>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  {/* Optional image */}
                  {entry.imageSrc && (
                    <div
                      className="shrink-0 w-16 h-16 rounded-sm"
                      style={{ background: getGradient(entry.imageSrc) }}
                      role="img"
                      aria-label={entry.title}
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#C8C0BC] mb-0.5">{entry.date}</p>
                    <h4
                      className={`font-bold text-[#4A6080] leading-tight mb-1 ${isMilestone ? 'text-base' : 'text-sm'}`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {entry.title}
                    </h4>
                    <p className="text-xs text-[#C8C0BC] leading-relaxed">
                      {entry.description}
                    </p>

                    {/* Tags */}
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-[#FDF8F0] text-[#C4888E]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
