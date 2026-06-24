'use client';

import { motion } from 'framer-motion';
import directQuotes from '@/data/directQuotes';

const speakerLabel: Record<string, string> = {
  aiah: 'Aiah',
  stacey: 'Stacey',
  sheena: 'Sheena (BINI)',
  official: 'Official Media',
};

const subjectLabel: Record<string, string> = {
  'about-stacey': 'on Stacey',
  'about-aiah': 'on Aiah',
  'about-dynamic': 'on Aiahcey',
  'about-self': 'on herself',
};

function getAccentColor(subject: string, speaker: string): string {
  // Color reversal rule: Stacey speaking about Aiah → Blue. Aiah speaking about Stacey → Pink.
  if (subject === 'about-aiah') return '#87BFDA';
  if (subject === 'about-stacey') return '#E8A0B0';
  if (subject === 'about-dynamic') return '#B8D4E8';
  return '#C4BEB8';
}

export default function DirectQuotesSection() {
  const priority = directQuotes.filter(
    (q) => q.subject === 'about-aiah' || q.subject === 'about-stacey' || q.subject === 'about-dynamic'
  );
  const rest = directQuotes.filter((q) => q.subject === 'about-self');
  const ordered = [...priority, ...rest];

  return (
    <section
      id="evidence"
      style={{ background: '#F7F4F0', padding: '96px 24px' }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>they said it themselves</p>
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
            They Said It Themselves
          </h2>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#8C8884',
              marginTop: '20px',
            }}
          >
            Not interpretation. Not projection. Their own words, on record.
          </p>
        </motion.div>

        {/* Quotes — pull-quote editorial format */}
        <div>
          {ordered.map((quote, i) => {
            const accent = getAccentColor(quote.subject, quote.speaker);
            const isAboutSelf = quote.subject === 'about-self';

            return (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  borderTop: '1px solid #EDE9E3',
                  padding: '48px 0',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                }}
              >
                {/* Speaker label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '2px',
                      background: accent,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className="eyebrow"
                    style={{ color: accent }}
                  >
                    {speakerLabel[quote.speaker]} {subjectLabel[quote.subject]}
                  </p>
                </div>

                {/* The quote itself — the visual centerpiece */}
                <blockquote style={{ margin: '0 0 28px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: isAboutSelf
                        ? 'clamp(1.1rem, 2.5vw, 1.35rem)'
                        : 'clamp(1.3rem, 3vw, 1.75rem)',
                      lineHeight: 1.45,
                      color: '#1C1C1E',
                      letterSpacing: '-0.01em',
                      maxWidth: '720px',
                    }}
                  >
                    &ldquo;{quote.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Attribution row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: '#8C8884' }}>
                    {quote.context}
                  </span>
                  {quote.date && (
                    <span style={{ fontSize: '11px', color: '#8C8884' }}>
                      {quote.date}
                    </span>
                  )}
                  <span style={{ fontSize: '11px', color: '#8C8884' }}>
                    {quote.sourceLabel}
                  </span>
                  {quote.status === 'needs-review' ? (
                    <span className="badge-review">Needs Review</span>
                  ) : (
                    <span className="badge-verified">✓ Verified</span>
                  )}
                  {quote.sourceUrl && (
                    <a
                      href={quote.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '11px',
                        color: accent,
                        fontWeight: 500,
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      View source →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final rule + note */}
        <div style={{ height: '1px', background: '#EDE9E3', marginBottom: '32px' }} />
        <p
          style={{
            fontSize: '12px',
            color: '#8C8884',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Quotes marked &ldquo;Needs Review&rdquo; have correct content but require source confirmation.
          Update <code style={{ fontFamily: 'monospace', fontSize: '11px', background: '#EDE9E3', padding: '1px 5px', borderRadius: '2px' }}>src/data/directQuotes.ts</code> with a sourceUrl to verify.
        </p>
      </div>
    </section>
  );
}
