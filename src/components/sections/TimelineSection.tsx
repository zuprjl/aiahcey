'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import TimelineYear from '@/components/ui/TimelineYear';
import { timelineEntries } from '@/data/timeline';

const years = [2021, 2022, 2023, 2024, 2025, 2026];

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState(2022);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const entriesByYear = years.reduce<Record<number, typeof timelineEntries>>((acc, year) => {
    acc[year] = timelineEntries.filter((e) => e.year === year);
    return acc;
  }, {});

  return (
    <section
      id="timeline"
      style={{ background: '#FFFFFF', padding: '96px 24px' }}
    >
      <div ref={ref} style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>2021 — Present</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1C1C1E',
            }}
          >
            Timeline
          </h2>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
        </motion.div>

        {/* Year tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '40px' }}
        >
          {years.map((year) => {
            const isActive = year === activeYear;
            const count = entriesByYear[year]?.length ?? 0;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '6px 16px',
                  border: `1px solid ${isActive ? '#1C1C1E' : '#EDE9E3'}`,
                  background: isActive ? '#1C1C1E' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#8C8884',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {year}
                <span style={{ marginLeft: '6px', opacity: 0.5, fontSize: '10px' }}>
                  ({count})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Year content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            <TimelineYear
              year={activeYear}
              entries={entriesByYear[activeYear] ?? []}
              isActive
            />
            {(entriesByYear[activeYear]?.length ?? 0) === 0 && (
              <p
                style={{
                  textAlign: 'center',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: '#C4BEB8',
                  padding: '64px 0',
                }}
              >
                No entries yet for {activeYear}.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
