'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meaningfulMoments, { MeaningfulMoment } from '@/data/meaningfulMoments';
import { openLightbox } from '@/components/ui/Lightbox';

const photos = meaningfulMoments.filter(
  (m) => !m.imageSrc.startsWith('/images/placeholder')
);

const lightboxImages = photos.map((m) => ({
  src: m.imageSrc,
  alt: m.imageAlt,
  caption: m.title,
  label: m.date,
}));

export default function MemoryWallSection() {
  const [selected, setSelected] = useState<MeaningfulMoment | null>(null);

  return (
    <section
      id="memory"
      style={{ background: '#F0ECE6', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p className="eyebrow" style={{ color: '#E8A0B0', marginBottom: '12px' }}>
            memory album
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#1C1C1E',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            The moments I keep returning to
          </h2>
          <p style={{ color: '#4A4A4A', fontSize: '14px', marginTop: '10px' }}>
            tap any photo to read more
          </p>
        </div>

        {/* Masonry grid — CSS columns */}
        <div
          style={{
            columnCount: 3,
            columnGap: '12px',
          }}
          className="memory-masonry"
        >
          {photos.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onClick={() => {
                const idx = lightboxImages.findIndex((img) => img.src === moment.imageSrc);
                if (idx >= 0) openLightbox(lightboxImages, idx);
                else setSelected(moment);
              }}
              style={{
                breakInside: 'avoid',
                marginBottom: '12px',
                cursor: 'zoom-in',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
              }}
              whileHover="hover"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={moment.imageSrc}
                alt={moment.imageAlt}
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              {/* Hover overlay */}
              <motion.div
                variants={{
                  hover: { opacity: 1 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28,28,30,0.85) 0%, rgba(28,28,30,0.1) 55%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '14px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    color: '#F7F4F0',
                    lineHeight: 1.35,
                    marginBottom: '4px',
                  }}
                >
                  {moment.title}
                </p>
                <p style={{ fontSize: '10px', color: '#C4BEB8', letterSpacing: '0.06em' }}>
                  {moment.date}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(28,28,30,0.92)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.imageSrc}
                alt={selected.imageAlt}
                onClick={() => {
                  const idx = lightboxImages.findIndex((img) => img.src === selected.imageSrc);
                  if (idx >= 0) openLightbox(lightboxImages, idx);
                }}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#111111',
                  cursor: 'zoom-in',
                }}
              />
              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '11px', color: '#8C8884', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {selected.date}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1C1C1E',
                    lineHeight: 1.2,
                    marginBottom: '16px',
                  }}
                >
                  {selected.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#1C1C1E', lineHeight: 1.75, marginBottom: '12px' }}>
                  {selected.whatHappened}
                </p>
                <p style={{ fontSize: '14px', color: '#4A4A4A', lineHeight: 1.75, marginBottom: '12px', borderLeft: '2px solid #87BFDA', paddingLeft: '12px' }}>
                  {selected.whatItReveals}
                </p>
                <p style={{ fontSize: '14px', color: '#4A4A4A', lineHeight: 1.75, borderLeft: '2px solid #E8A0B0', paddingLeft: '12px' }}>
                  {selected.whyFansCare}
                </p>
                {selected.sourceLabel && (
                  <p style={{ fontSize: '11px', color: '#8C8884', marginTop: '20px', fontStyle: 'italic' }}>
                    {selected.sourceLabel}
                    {selected.sourceUrl && (
                      <> — <a href={selected.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#87BFDA' }}>view source ↗</a></>
                    )}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'sticky',
                  bottom: 0,
                  width: '100%',
                  padding: '14px',
                  background: '#1C1C1E',
                  color: '#F7F4F0',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-body)',
                }}
              >
                close ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .memory-masonry { column-count: 2 !important; }
        }
        @media (max-width: 480px) {
          .memory-masonry { column-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}
