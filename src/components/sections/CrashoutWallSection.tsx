'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import crashoutReactions, { type CrashoutReaction } from '@/data/crashoutReactions';

const THEMES = [
  { label: 'All', value: 'all' },
  { label: 'One Look', value: 'one-look' },
  { label: 'Fancam Spiral', value: 'fancam-spiral' },
  { label: 'Same Braincell', value: 'same-braincell' },
  { label: 'Origin Story', value: 'origin-story' },
  { label: 'Comfort Duo', value: 'comfort-duo' },
  { label: 'No Explanation', value: 'unanswerable' },
];

// Alternate blue/pink per card for visual rhythm
function accentFor(index: number) {
  return index % 2 === 0 ? '#87BFDA' : '#E8A0B0';
}

function ReactionCard({ reaction, index }: { reaction: CrashoutReaction; index: number }) {
  const accent = accentFor(index);
  const isBlue = accent === '#87BFDA';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
      style={{
        background: '#FFFFFF',
        borderTop: `3px solid ${accent}`,
        padding: '20px 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxShadow: '0 1px 4px rgba(28,28,30,0.06)',
      }}
    >
      {/* Simulated tweet header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Avatar dot — blue or pink */}
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: isBlue
              ? 'linear-gradient(135deg, #87BFDA, #D0E8F2)'
              : 'linear-gradient(135deg, #E8A0B0, #F2C4CE)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          {isBlue ? '💙' : '🩷'}
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 600,
              color: '#1C1C1E',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            a starphrodite
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              color: '#8C8884',
              margin: 0,
            }}
          >
            fan-crafted · aiahcey era
          </p>
        </div>
        {/* fan-style badge */}
        <span
          style={{
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: accent,
            background: isBlue ? 'rgba(135,191,218,0.1)' : 'rgba(232,160,176,0.1)',
            border: `1px solid ${accent}40`,
            padding: '2px 7px',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          fan-crafted
        </span>
      </div>

      {/* Reaction text */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(15px, 3.8vw, 16px)',
          color: '#1C1C1E',
          lineHeight: 1.7,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        {reaction.text}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {reaction.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '10px',
              color: '#8C8884',
              background: '#F7F4F0',
              border: '1px solid #EDE9E3',
              padding: '2px 7px',
              borderRadius: '2px',
              letterSpacing: '0.02em',
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function CrashoutWallSection() {
  const [activeTheme, setActiveTheme] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTheme === 'all'
      ? crashoutReactions
      : crashoutReactions.filter((r) => r.theme === activeTheme);

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section
      id="crashout"
      style={{ background: '#F7F4F0', padding: '96px 24px' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '52px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '16px', color: '#E8A0B0' }}>
            crashout wall
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1C1C1E',
              marginBottom: '18px',
            }}
          >
            Crashout Wall
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: '#4A4A4A',
              lineHeight: 1.55,
              maxWidth: '520px',
              margin: '0 0 12px',
            }}
          >
            Okay, this is where I stop pretending to be normal.
          </p>
          <p style={{ fontSize: '12px', color: '#8C8884', lineHeight: 1.6, maxWidth: '460px' }}>
            These are fan-crafted reactions written in the Starphrodite voice —
            the real feeling, even if the exact words are mine.
          </p>
        </motion.div>

        {/* Filter bar */}
        <div
          className="crashout-filters"
          style={{
            marginBottom: '36px',
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '6px',
            overflowX: 'auto' as const,
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none' as const,
            paddingBottom: '4px',
          } as React.CSSProperties}
        >
          {THEMES.map((t) => (
            <button
              key={t.value}
              onClick={() => { setActiveTheme(t.value); setShowAll(false); }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: activeTheme === t.value ? 600 : 400,
                padding: '6px 14px',
                border: `1px solid ${activeTheme === t.value ? '#1C1C1E' : '#EDE9E3'}`,
                background: activeTheme === t.value ? '#1C1C1E' : '#FFFFFF',
                color: activeTheme === t.value ? '#FFFFFF' : '#8C8884',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: '#EDE9E3',
          }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((reaction, i) => (
              <ReactionCard key={reaction.id} reaction={reaction} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / less */}
        {filtered.length > 8 && (
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button
              onClick={() => setShowAll((v) => !v)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 500,
                padding: '10px 28px',
                border: '1px solid #1C1C1E',
                background: 'transparent',
                color: '#1C1C1E',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1C1C1E';
                e.currentTarget.style.color = '#F7F4F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1C1C1E';
              }}
            >
              {showAll
                ? `show less ↑`
                : `show all ${filtered.length} reactions ↓`}
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: '#C4BEB8',
              padding: '64px 0',
            }}
          >
            No reactions in this category yet.
          </p>
        )}

        {/* Disclaimer */}
        <p
          style={{
            fontSize: '11px',
            color: '#C4BEB8',
            marginTop: '40px',
            textAlign: 'center',
            fontStyle: 'italic',
            lineHeight: 1.65,
          }}
        >
          Fan-crafted reactions written in the Starphrodite voice.
          These are not real tweets — they are original lines that capture
          how Aiahcey makes fans feel. The feeling is real. The exact words are mine.
        </p>
      </div>
    </section>
  );
}
