'use client';

import { motion } from 'framer-motion';
import fanObservations from '@/data/fanLens';

export default function FanLensSection() {
  return (
    <section id="fan-lens" style={{ background: '#FFFFFF', padding: '96px 24px' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>what I notice every time</p>
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
            What Fans Notice
          </h2>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#4A4A4A',
              marginTop: '20px',
              maxWidth: '520px',
            }}
          >
            What casual viewers scroll past and fans screenshot immediately.
            Read this once, then go watch any BINI video — you won&apos;t unsee it.
          </p>
        </motion.div>

        {/* Observations — editorial list */}
        {fanObservations.map((obs, i) => (
          <motion.div
            key={obs.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              padding: '44px 0',
              borderTop: '1px solid #EDE9E3',
              alignItems: 'start',
            }}
            className="max-md:grid-cols-1 max-md:gap-6"
          >
            {/* Left: title + description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '3px',
                    height: '20px',
                    background: 'linear-gradient(180deg, #87BFDA 0%, #E8A0B0 100%)',
                    flexShrink: 0,
                    borderRadius: '2px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#1C1C1E',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {obs.title}
                </h3>
              </div>
              <p style={{ color: '#4A4A4A', fontSize: '14px', lineHeight: 1.75, margin: 0 }}>
                {obs.description}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#8C8884',
                  marginTop: '12px',
                }}
              >
                {obs.documentedIn}
              </p>
            </div>

            {/* Right: casual vs fans contrast */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '8px', color: '#8C8884' }}>
                  Casual viewers
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: '#4A4A4A',
                    lineHeight: 1.6,
                  }}
                >
                  {obs.casualViewerSees}
                </p>
              </div>
              <div
                style={{
                  paddingLeft: '16px',
                  borderLeft: '2px solid #D0E8F2',
                }}
              >
                <p className="eyebrow" style={{ marginBottom: '8px', color: '#87BFDA' }}>
                  Fans see
                </p>
                <p style={{ fontSize: '14px', color: '#1C1C1E', lineHeight: 1.65 }}>
                  {obs.fansSee}
                </p>
              </div>
              {obs.status === 'needs-review' && (
                <span className="badge-review" style={{ alignSelf: 'flex-start' }}>Needs Review</span>
              )}
            </div>
          </motion.div>
        ))}

        <div style={{ height: '1px', background: '#EDE9E3' }} />
      </div>
    </section>
  );
}
