'use client';

import React from 'react';

interface FilterBarProps {
  options: string[];
  active: string;
  onChange: (val: string) => void;
}

export default function FilterBar({ options, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter options">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 capitalize ${
              isActive
                ? 'bg-[#4A6080] text-white border-[#4A6080] shadow-sm'
                : 'bg-white text-[#4A6080] border-[#B8D4E8] hover:bg-[#D0E8F2] hover:border-[#87BFDA]'
            }`}
            aria-pressed={isActive}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
