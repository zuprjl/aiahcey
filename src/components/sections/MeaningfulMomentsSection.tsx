'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meaningfulMoments, { type MeaningfulMoment, type DynamicType } from '@/data/meaningfulMoments';
import { openLightbox } from '@/components/ui/Lightbox';

const allMomentImages = meaningfulMoments
  .filter((m) => !m.imageSrc.startsWith('/images/placeholder'))
  .map((m) => ({ src: m.imageSrc, alt: m.imageAlt, caption: m.title, label: m.date }));

const FILTER_OPTIONS: { label: string; value: DynamicType | 'all' }[] = [
  { label: 'All Moments', value: 'all' },
  { label: 'Aiah Grounds Her', value: 'aiah-grounds-stacey' },
  { label: "Stacey Sparks Her", value: 'stacey-energizes-aiah' },
  { label: 'Both as Rappers', value: 'both-as-rappers' },
  { label: 'Blue × Pink', value: 'blue-meets-pink' },
  { label: 'Aiah Watching', value: 'watcher-moment' },
  { label: 'Just Together', value: 'together' },
];

function MomentImage({
  src, alt, dynamicType, maxHeight = '280px', onClick,
}: {
  src: string;
  alt: string;
  dynamicType: DynamicType;
  maxHeight?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const isPlaceholder = !src || src.startsWith('/images/placeholder');
  const bg =
    dynamicType === 'aiah-grounds-stacey'
      ? '#D0E8F2'
      : dynamicType === 'stacey-energizes-aiah'
      ? '#F2C4CE'
      : '#EDE9E3';
  const textColor =
    dynamicType === 'aiah-grounds-stacey'
      ? '#3D5A73'
      : dynamicType === 'stacey-energizes-aiah'
      ? '#8B4A5A'
      : '#6B6360';

  if (isPlaceholder) {
    return (
      <div style={{ background: bg, minHeight: '120px', display: 'flex', alignItems: 'flex-end', padding: '12px 14px' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '11px', color: textColor, lineHeight: 1.4, opacity: 0.8 }}>
          {alt}
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      style={{
        width: '100%',
        maxHeight,
        objectFit: 'contain',
        display: 'block',
        background: '#111111',
        cursor: onClick ? 'zoom-in' : 'default',
      }}
    />
  );
}

function MomentModal({ moment, onClose }: { moment: MeaningfulMoment; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(28,28,30,0.6)', backdropFilter: 'blur(8px)' }} />
      <motion.div
        style={{
          background: '#FFFFFF',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          borderRadius: '2px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
          position: 'relative',
        }}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top stripe */}
        <div style={{ height: '3px', display: 'flex' }}>
          <div style={{ flex: 1, background: '#87BFDA' }} />
          <div style={{ flex: 1, background: '#E8A0B0' }} />
        </div>

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#8C8884',
            fontSize: '18px',
            lineHeight: 1,
            padding: '4px',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div style={{ padding: '32px 32px 40px' }}>
          <MomentImage
            src={moment.imageSrc}
            alt={moment.imageAlt}
            dynamicType={moment.dynamicType}
            maxHeight="55vh"
            onClick={() => {
              const idx = allMomentImages.findIndex((i) => i.src === moment.imageSrc);
              if (idx >= 0) openLightbox(allMomentImages, idx);
            }}
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: '#F7F4F0',
                color: '#4A4A4A',
                padding: '3px 8px',
                border: '1px solid #EDE9E3',
                borderRadius: '2px',
              }}
            >
              {moment.category}
            </span>
            <span style={{ fontSize: '11px', color: '#8C8884' }}>{moment.date}</span>
            {moment.status === 'needs-review' && (
              <span className="badge-review">Needs Review</span>
            )}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#1C1C1E',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}
          >
            {moment.title}
          </h3>

          {/* Three-block content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '10px', color: '#87BFDA' }}>What Happened</p>
              <p style={{ color: '#1C1C1E', fontSize: '14px', lineHeight: 1.75 }}>{moment.whatHappened}</p>
            </div>

            <div style={{ paddingLeft: '16px', borderLeft: '2px solid #D0E8F2' }}>
              <p className="eyebrow" style={{ marginBottom: '10px', color: '#87BFDA' }}>Why It Hits Different</p>
              <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.75 }}>{moment.whatItReveals}</p>
            </div>

            <div style={{ paddingLeft: '16px', borderLeft: '2px solid #F2C4CE' }}>
              <p className="eyebrow" style={{ marginBottom: '10px', color: '#E8A0B0' }}>Why I Keep Coming Back To This</p>
              <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.75 }}>{moment.whyFansCare}</p>
            </div>
          </div>

          {/* Source */}
          <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid #EDE9E3' }}>
            {moment.sourceLabel && (
              <p style={{ fontSize: '12px', color: '#8C8884', marginBottom: '12px' }}>
                Source: {moment.sourceLabel}
              </p>
            )}
            {moment.sourceUrl ? (
              <a
                href={moment.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1C1C1E',
                  border: '1px solid #EDE9E3',
                  padding: '8px 16px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                View Original →
              </a>
            ) : (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#C4BEB8',
                  border: '1px solid #EDE9E3',
                  padding: '8px 16px',
                  borderRadius: '2px',
                }}
              >
                Source Needed
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MeaningfulMomentsSection() {
  const [activeFilter, setActiveFilter] = useState<DynamicType | 'all'>('all');
  const [selectedMoment, setSelectedMoment] = useState<MeaningfulMoment | null>(null);

  const filtered =
    activeFilter === 'all'
      ? meaningfulMoments
      : meaningfulMoments.filter((m) => m.dynamicType === activeFilter);

  return (
    <section id="moments" style={{ background: '#F7F4F0', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>moments that got me</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1C1C1E',
              maxWidth: '520px',
            }}
          >
            Moments With Meaning
          </h2>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#4A4A4A',
              marginTop: '20px',
              maxWidth: '560px',
            }}
          >
            Some of these are huge — concerts, milestones, on-air quotes. Some are just a look,
            a lean, a laugh that lasted two seconds. Each one gets three layers: what happened,
            what it says about the dynamic, and why fans keep coming back to it.
          </p>
        </motion.div>

        {/* Filter bar — clean text pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '40px' }}>
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: activeFilter === opt.value ? 600 : 400,
                padding: '6px 14px',
                border: `1px solid ${activeFilter === opt.value ? '#1C1C1E' : '#EDE9E3'}`,
                background: activeFilter === opt.value ? '#1C1C1E' : '#FFFFFF',
                color: activeFilter === opt.value ? '#FFFFFF' : '#8C8884',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                letterSpacing: '0.02em',
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: '#EDE9E3',
          }}
        >
          <AnimatePresence>
            {filtered.map((moment) => (
              <motion.div
                key={moment.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ background: '#FFFFFF', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setSelectedMoment(moment)}
              >
                <MomentImage
                  src={moment.imageSrc}
                  alt={moment.imageAlt}
                  dynamicType={moment.dynamicType}
                  maxHeight="260px"
                  onClick={(e) => {
                    e.stopPropagation();
                    const idx = allMomentImages.findIndex((i) => i.src === moment.imageSrc);
                    if (idx >= 0) openLightbox(allMomentImages, idx);
                  }}
                />
                <div style={{ padding: '16px 16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#8C8884',
                      }}
                    >
                      {moment.category}
                    </span>
                    <span style={{ fontSize: '11px', color: '#C4BEB8' }}>{moment.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#1C1C1E',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {moment.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#4A4A4A',
                      lineHeight: 1.65,
                    }}
                    className="line-clamp-3"
                  >
                    {moment.whyFansCare}
                  </p>
                  {moment.status === 'needs-review' && (
                    <div style={{ marginTop: '10px' }}>
                      <span className="badge-review">Needs Review</span>
                    </div>
                  )}
                  <p
                    style={{
                      marginTop: '12px',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#87BFDA',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Read more →
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
            No moments in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedMoment && (
          <MomentModal
            moment={selectedMoment}
            onClose={() => setSelectedMoment(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
