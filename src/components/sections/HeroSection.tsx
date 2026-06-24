'use client';

import { motion } from 'framer-motion';

/* Two real photos — strongest visual chemistry shots */
const photocards = [
  {
    src: '/images/files/file-011.jpg',
    alt: 'Back-to-back on stage — Stacey in teal, Aiah in red, both mid-laugh',
    caption: 'back-to-back, GBV era',
    rotation: -3.5,
    floatY: 10,
    floatDuration: 5.2,
    floatDelay: 0,
    /* left side, upper */
    style: {
      left: '3%',
      top: '18%',
      width: '190px',
    },
  },
  {
    src: '/images/files/file-016.jpg',
    alt: 'Coachella piggyback — both laughing in California sun',
    caption: 'coachella 2026 ☀️',
    rotation: 3,
    floatY: 8,
    floatDuration: 4.8,
    floatDelay: 1.8,
    /* right side, lower */
    style: {
      right: '3%',
      bottom: '22%',
      width: '175px',
    },
  },
];

function FloatingPhotocard({
  src, alt, caption, rotation, floatY, floatDuration, floatDelay, style,
}: typeof photocards[number]) {
  return (
    <motion.div
      className="absolute pointer-events-none hidden lg:block"
      style={{
        ...style,
        zIndex: 2,
        rotate: rotation,
        filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.14)) drop-shadow(0 1px 4px rgba(0,0,0,0.08))',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: floatDelay + 0.4 },
        y: {
          delay: floatDelay + 0.4,
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {/* Polaroid frame */}
      <div
        style={{
          background: '#FFFFFF',
          padding: '7px 7px 28px 7px',
          borderRadius: '1px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            aspectRatio: '4/3',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '10px',
            color: '#8C8884',
            textAlign: 'center',
            marginTop: '8px',
            lineHeight: 1.3,
          }}
        >
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#F7F4F0' }}
    >
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] flex">
        <div className="flex-1" style={{ background: '#87BFDA' }} />
        <div className="flex-1" style={{ background: '#E8A0B0' }} />
      </div>

      {/* Floating photocards — desktop only, positioned outside the text column */}
      {photocards.map((card) => (
        <FloatingPhotocard key={card.src} {...card} />
      ))}

      {/* Main editorial content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="eyebrow mb-8" style={{ color: '#8C8884' }}>
            a love letter to aiahcey
          </p>

          {/* Masthead */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(72px, 14vw, 144px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(110deg, #87BFDA 0%, #B8D4E8 42%, #E8A0B0 68%, #C4757F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AIAHCEY
          </h1>

          {/* Rule */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex-1 h-px" style={{ background: '#EDE9E3' }} />
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#87BFDA' }} />
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#E8A0B0' }} />
            </div>
            <div className="flex-1 h-px" style={{ background: '#EDE9E3' }} />
          </div>

          {/* Thesis */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.8vw, 1.45rem)',
              lineHeight: 1.5,
              color: '#1C1C1E',
              letterSpacing: '-0.01em',
            }}
          >
            Blue meets Pink. Calm meets Chaos.<br className="hidden sm:block" /> Main Rapper meets Main Rapper.
          </p>

          {/* Sub-copy */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6B6360', maxWidth: '420px', margin: '16px auto 0' }}
          >
            My personal corner of the internet for Aiah and Stacey of BINI —
            the moments that made me understand the hype, and why I haven&apos;t looked away since.
          </p>

          {/* Fan-made note */}
          <p
            className="text-xs leading-relaxed"
            style={{
              color: '#8C8884',
              maxWidth: '320px',
              margin: '20px auto 0',
              fontStyle: 'italic',
            }}
          >
            Not official. Not affiliated. Just a fan-made love letter.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-2"
          style={{ color: '#C4BEB8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="eyebrow">Scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #C4BEB8, transparent)' }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
