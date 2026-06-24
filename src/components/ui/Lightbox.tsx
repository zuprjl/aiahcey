'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
}

// ─── Global trigger ───────────────────────────────────────────────────────────
// Any component can call openLightbox(images, startIndex) without prop drilling.
export function openLightbox(images: LightboxImage[], startIndex = 0) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent('aiahcey:lightbox', { detail: { images, startIndex } })
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Lightbox() {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [dir, setDir] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Listen for open event
  useEffect(() => {
    const handler = (e: Event) => {
      const { images: imgs, startIndex } = (e as CustomEvent).detail;
      setImages(imgs);
      setIndex(startIndex ?? 0);
      setZoomed(false);
      setOpen(true);
    };
    window.addEventListener('aiahcey:lightbox', handler);
    return () => window.removeEventListener('aiahcey:lightbox', handler);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setZoomed(false);
  }, []);

  const go = useCallback(
    (next: number) => {
      if (images.length === 0) return;
      setDir(next >= index ? 1 : -1);
      setIndex(((next % images.length) + images.length) % images.length);
      setZoomed(false);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
        scrollRef.current.scrollLeft = 0;
      }
    },
    [index, images.length]
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Keyboard nav
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, close, prev, next]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const current = images[index];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10,10,12,0.97)',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Top bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(247,244,240,0.45)',
                letterSpacing: '0.06em',
                fontFamily: 'var(--font-body)',
              }}
            >
              {index + 1} / {images.length}
            </span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={() => setZoomed((z) => !z)}
                title={zoomed ? 'Zoom out' : 'Zoom in'}
                style={{
                  background: 'none',
                  border: '1px solid rgba(247,244,240,0.2)',
                  color: 'rgba(247,244,240,0.7)',
                  padding: '4px 10px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {zoomed ? '− zoom' : '+ zoom'}
              </button>
              <button
                onClick={close}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(247,244,240,0.7)',
                  fontSize: '22px',
                  cursor: 'pointer',
                  lineHeight: 1,
                  padding: '0 4px',
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Image area */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 0,
            }}
          >
            {/* Prev arrow */}
            {images.length > 1 && (
              <button
                onClick={prev}
                aria-label="Previous"
                style={{
                  position: 'absolute',
                  left: '16px',
                  zIndex: 10,
                  background: 'rgba(247,244,240,0.08)',
                  border: '1px solid rgba(247,244,240,0.15)',
                  color: '#F7F4F0',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ←
              </button>
            )}

            {/* Scrollable image container (for zoom panning) */}
            <div
              ref={scrollRef}
              style={{
                overflow: zoomed ? 'auto' : 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                padding: images.length > 1 ? '0 72px' : '0 20px',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.src + index}
                  drag={!zoomed ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: !zoomed ? 'grab' : 'auto',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.src}
                    alt={current.alt}
                    draggable={false}
                    onClick={() => setZoomed((z) => !z)}
                    style={{
                      maxWidth: zoomed ? 'none' : '100%',
                      maxHeight: zoomed ? 'none' : 'calc(100vh - 160px)',
                      width: zoomed ? 'auto' : 'auto',
                      height: zoomed ? 'auto' : 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      cursor: zoomed ? 'zoom-out' : 'zoom-in',
                      transform: zoomed ? 'scale(2.2)' : 'scale(1)',
                      transformOrigin: 'center center',
                      transition: 'transform 0.25s ease',
                      userSelect: 'none',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            {images.length > 1 && (
              <button
                onClick={next}
                aria-label="Next"
                style={{
                  position: 'absolute',
                  right: '16px',
                  zIndex: 10,
                  background: 'rgba(247,244,240,0.08)',
                  border: '1px solid rgba(247,244,240,0.15)',
                  color: '#F7F4F0',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                →
              </button>
            )}
          </div>

          {/* Caption bar */}
          {(current.caption || current.label) && (
            <div
              style={{
                padding: '12px 24px 18px',
                textAlign: 'center',
                flexShrink: 0,
              }}
            >
              {current.caption && (
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '13px',
                    color: 'rgba(247,244,240,0.8)',
                    lineHeight: 1.4,
                    marginBottom: current.label ? '4px' : 0,
                  }}
                >
                  {current.caption}
                </p>
              )}
              {current.label && (
                <p
                  style={{
                    fontSize: '10px',
                    color: 'rgba(247,244,240,0.4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {current.label}
                </p>
              )}
            </div>
          )}

          {/* Keyboard hint */}
          <p
            style={{
              textAlign: 'center',
              fontSize: '10px',
              color: 'rgba(247,244,240,0.2)',
              paddingBottom: '12px',
              flexShrink: 0,
              fontFamily: 'var(--font-body)',
            }}
          >
            ← → to navigate · click image to zoom · esc to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
