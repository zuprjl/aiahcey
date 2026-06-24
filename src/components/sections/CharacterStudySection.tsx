'use client';

import { motion } from 'framer-motion';
import type { CharacterStudy } from '@/data/characterStudies';
import { openLightbox } from '@/components/ui/Lightbox';

interface Props { study: CharacterStudy }

function StatusBadge({ status }: { status: 'verified' | 'needs-review' }) {
  return status === 'needs-review'
    ? <span className="badge-review">Needs Review</span>
    : <span className="badge-verified">✓ Verified</span>;
}

export default function CharacterStudySection({ study }: Props) {
  const isAiah = study.id === 'aiah';
  const accent = isAiah ? '#87BFDA' : '#E8A0B0';
  const accentLight = isAiah ? '#D0E8F2' : '#F2C4CE';
  const panelBg = isAiah
    ? 'linear-gradient(160deg, #7AB8D4 0%, #87BFDA 60%, #A0CBE0 100%)'
    : 'linear-gradient(160deg, #E09AB0 0%, #E8A0B0 60%, #EEB8C4 100%)';

  return (
    <section
      id={study.id}
      style={{ background: '#FFFFFF', overflow: 'hidden' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isAiah ? '380px 1fr' : '1fr 380px',
          minHeight: '640px',
        }}
        className="max-lg:flex max-lg:flex-col"
      >
        {/* Photo + color panel */}
        <motion.div
          initial={{ opacity: 0, x: isAiah ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            minHeight: '480px',
            order: isAiah ? 0 : 1,
            overflow: 'hidden',
          }}
          className="max-lg:order-first"
        >
          {/* Portrait fills the panel — click to view full image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.portraitSrc}
            alt={study.portraitAlt}
            onClick={() => openLightbox([{ src: study.portraitSrc, alt: study.portraitAlt, caption: study.name }])}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              position: 'absolute',
              inset: 0,
              cursor: 'zoom-in',
            }}
          />
          {/* Gradient overlay — panel colour tinted */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, ${panelBg} 0%, ${panelBg}99 30%, transparent 70%)`,
            }}
          />
          {/* Text overlay at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '36px 40px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '10px',
              }}
            >
              Character Study
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                lineHeight: 0.95,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              {study.name}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.4,
                marginBottom: '18px',
              }}
            >
              {study.role}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
              {study.coreTraits.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Essay panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            padding: 'clamp(40px, 6vw, 72px) clamp(32px, 5vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: isAiah ? 1 : 0,
          }}
          className="max-lg:order-last"
        >
          {/* Background */}
          <div style={{ marginBottom: '32px' }}>
            <p className="eyebrow" style={{ marginBottom: '10px', color: '#8C8884' }}>
              Background
            </p>
            <p style={{ color: '#4A4A4A', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
              {study.backstory}
            </p>
          </div>

          {/* Who She Is */}
          <div style={{ marginBottom: '40px' }}>
            <p
              className="eyebrow"
              style={{ marginBottom: '14px', color: accent }}
            >
              Who She Is
            </p>
            <p style={{ color: '#1C1C1E', fontSize: '15px', lineHeight: 1.75, margin: 0 }}>
              {study.whoSheIs}
            </p>
          </div>

          {/* What People Miss */}
          <div
            style={{
              marginBottom: '40px',
              paddingLeft: '20px',
              borderLeft: `3px solid ${accentLight}`,
            }}
          >
            <p
              className="eyebrow"
              style={{ marginBottom: '10px', color: accent }}
            >
              What People Miss
            </p>
            <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.75, margin: 0 }}>
              {study.hiddenDepth}
            </p>
          </div>

          {/* Partner quote */}
          <div style={{ marginBottom: '40px' }}>
            <p
              className="eyebrow"
              style={{ marginBottom: '14px', color: '#8C8884' }}
            >
              {study.id === 'aiah' ? 'What Stacey Says' : 'What Aiah Says'}
            </p>
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: '#1C1C1E',
                  lineHeight: 1.5,
                  marginBottom: '10px',
                }}
              >
                &ldquo;{study.partnerSays}&rdquo;
              </p>
              <footer
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: '12px', color: '#8C8884' }}>
                  {study.partnerSaysContext}
                </span>
                <StatusBadge status={study.partnerSaysStatus} />
              </footer>
            </blockquote>
          </div>

          {/* Self quote */}
          <div
            style={{
              background: accentLight,
              padding: '24px 28px',
              borderRadius: '2px',
            }}
          >
            <p
              className="eyebrow"
              style={{ marginBottom: '10px', color: accent }}
            >
              In Her Own Words
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: '#1C1C1E',
                lineHeight: 1.55,
                marginBottom: '10px',
              }}
            >
              &ldquo;{study.selfQuote}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: '#4A4A4A' }}>
                {study.selfQuoteSource}
              </span>
              <StatusBadge status={study.selfQuoteStatus} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
