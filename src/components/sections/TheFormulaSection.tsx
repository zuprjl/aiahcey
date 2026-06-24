'use client';

import { motion } from 'framer-motion';
import dynamicPrinciples from '@/data/dynamicPrinciples';

export default function TheFormulaSection() {
  return (
    <section id="formula" style={{ background: '#FFFFFF', padding: '96px 24px' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>why it works</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1C1C1E',
              maxWidth: '420px',
            }}
          >
            The Formula
          </h2>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#8C8884',
              marginTop: '20px',
              maxWidth: '480px',
            }}
          >
            Five reasons I keep coming back to when someone asks me to explain it. And trust me, I have tried to explain it many times.
          </p>
        </motion.div>

        {/* Principles */}
        {dynamicPrinciples.map((principle, i) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{
              borderTop: '1px solid #EDE9E3',
              paddingTop: '48px',
              paddingBottom: '48px',
            }}
          >
            {/* Principle number + title */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '32px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#EDE9E3',
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                  color: '#1C1C1E',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                {principle.title}
              </h3>
            </div>

            {/* Aiah / Stacey columns */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: '#EDE9E3',
                marginBottom: '28px',
              }}
              className="max-sm:grid-cols-1"
            >
              <div style={{ background: '#F7F4F0', padding: '20px 24px' }}>
                <p
                  className="eyebrow"
                  style={{ marginBottom: '10px', color: '#87BFDA' }}
                >
                  Aiah
                </p>
                <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.7 }}>
                  {principle.aiahSide}
                </p>
              </div>
              <div style={{ background: '#F7F4F0', padding: '20px 24px' }}>
                <p
                  className="eyebrow"
                  style={{ marginBottom: '10px', color: '#E8A0B0' }}
                >
                  Stacey
                </p>
                <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.7 }}>
                  {principle.staceySide}
                </p>
              </div>
            </div>

            {/* Explanation */}
            <p
              style={{
                color: '#1C1C1E',
                fontSize: '15px',
                lineHeight: 1.75,
                marginBottom: '20px',
                maxWidth: '680px',
              }}
            >
              {principle.explanation}
            </p>

            {/* Evidence — pull quote style */}
            <div
              style={{
                paddingLeft: '20px',
                borderLeft: '2px solid #EDE9E3',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '8px' }}>On Record</p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.9rem',
                  color: '#8C8884',
                  lineHeight: 1.6,
                }}
              >
                {principle.evidence}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Final rule */}
        <div style={{ height: '1px', background: '#EDE9E3' }} />
      </div>
    </section>
  );
}
