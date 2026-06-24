'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aiahceyFiles from '@/data/aiahceyFiles';
import { openLightbox } from '@/components/ui/Lightbox';

const slides = aiahceyFiles
  .filter((f) => !f.imageSrc.startsWith('/images/placeholder'))
  .map((f) => ({
    src: f.imageSrc,
    alt: f.imageAlt,
    caption: f.title,
    label: f.caseLabel,
  }));

export default function PhotoGallerySection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next >= index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const prev = useCallback(
    () => go(index === 0 ? slides.length - 1 : index - 1),
    [go, index]
  );
  const next = useCallback(
    () => go(index === slides.length - 1 ? 0 : index + 1),
    [go, index]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const current = slides[index];

  return (
    <section id="gallery" style={{ background: '#1C1C1E', paddingTop: 'clamp(64px,8vw,96px)', paddingBottom: 'clamp(64px,8vw,96px)' }}>
      <style>{`
        .gallery-carousel-wrapper { padding: 0 68px; }
        @media (max-width: 640px) { .gallery-carousel-wrapper { padding: 0 44px; } }
        @media (max-width: 390px) { .gallery-carousel-wrapper { padding: 0 36px; } }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <p className="eyebrow" style={{ color: '#87BFDA', marginBottom: '12px' }}>
          the gallery
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#F7F4F0',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Swipe through
        </h2>
        <p style={{ color: '#8C8884', fontSize: '13px', marginTop: '10px' }}>
          drag · arrows · ← → keys
        </p>
      </div>

      {/* Carousel */}
      <div className="gallery-carousel-wrapper" style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>

        {/* Prev */}
        <ArrowBtn onClick={prev} label="Previous photo" dir="left" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            initial={{ opacity: 0, x: dir * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -48 }}
            transition={{ duration: 0.26, ease: [0.32, 0, 0.67, 0] }}
            style={{
              background: '#FFFFFF',
              padding: '10px 10px 46px 10px',
              cursor: 'grab',
              userSelect: 'none',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              draggable={false}
              onClick={(e) => { e.stopPropagation(); openLightbox(slides, index); }}
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'contain',
                display: 'block',
                background: '#111111',
                pointerEvents: 'auto',
                cursor: 'zoom-in',
              }}
            />
            <div style={{ textAlign: 'center', marginTop: '12px', padding: '0 4px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '13px',
                  color: '#1C1C1E',
                  lineHeight: 1.4,
                }}
              >
                {current.caption}
              </p>
              <p
                style={{
                  fontSize: '10px',
                  color: '#8C8884',
                  marginTop: '4px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {current.label}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        <ArrowBtn onClick={next} label="Next photo" dir="right" />
      </div>

      {/* Thumbnail strip — scroll to see all images */}
      <div
        style={{
          overflowX: 'auto',
          display: 'flex',
          gap: '6px',
          padding: '32px 24px 8px',
          scrollbarWidth: 'none',
          maxWidth: '900px',
          margin: '0 auto',
        }}
        className="hide-scrollbar"
      >
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to: ${slide.caption}`}
            style={{
              flex: '0 0 72px',
              height: '54px',
              padding: 0,
              border: i === index ? '2px solid #87BFDA' : '2px solid transparent',
              cursor: 'pointer',
              overflow: 'hidden',
              opacity: i === index ? 1 : 0.45,
              transition: 'opacity 0.2s, border-color 0.2s',
              background: 'none',
            }}
            onMouseEnter={(e) => { if (i !== index) e.currentTarget.style.opacity = '0.75'; }}
            onMouseLeave={(e) => { if (i !== index) e.currentTarget.style.opacity = '0.45'; }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: '11px', color: '#8C8884', marginTop: '8px', letterSpacing: '0.05em' }}>
        {index + 1} / {slides.length}
      </p>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}

function ArrowBtn({
  onClick, label, dir,
}: {
  onClick: () => void;
  label: string;
  dir: 'left' | 'right';
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: 'absolute',
        [dir]: '12px',
        top: '50%',
        transform: 'translateY(-65%)',
        zIndex: 10,
        background: 'rgba(247,244,240,0.07)',
        border: '1px solid rgba(247,244,240,0.14)',
        color: '#F7F4F0',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(247,244,240,0.16)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(247,244,240,0.07)')}
    >
      {dir === 'left' ? '←' : '→'}
    </button>
  );
}
