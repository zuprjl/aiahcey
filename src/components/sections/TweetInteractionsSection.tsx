'use client';

import { motion } from 'framer-motion';

/* Fan-voice reaction cards — these are illustrative fan sentiments, not real tweets */
const fanCards = [
  {
    id: 1,
    text: 'stacey really looked aiah in the eyes and took her chip. aiah\'s face said "i can\'t believe you." her smile said "i\'d let you do it again"',
    tag: 'mukbang era',
    color: '#87BFDA',
  },
  {
    id: 2,
    text: 'whatever aiah whispered that made stacey lose it on vlive. we will never know. that\'s part of why it matters.',
    tag: 'vlive mystery',
    color: '#E8A0B0',
  },
  {
    id: 3,
    text: 'aiah losing my breath to stacey\'s energy and stacey saying aiah\'s voice gives her goosebumps. they both said it. out loud. on record.',
    tag: 'they said it themselves',
    color: '#87BFDA',
  },
  {
    id: 4,
    text: 'two seconds of eye contact across an emotional bridge. captured from seventeen fancam angles. still unforgettable.',
    tag: 'concert',
    color: '#E8A0B0',
  },
  {
    id: 5,
    text: 'nobody planned the matching cowboy hats. they both just showed up like that. for coachella. the biggest show of their lives.',
    tag: 'coachella 2026',
    color: '#87BFDA',
  },
  {
    id: 6,
    text: 'the 🐶🐱 caption was official. rx931 put it there. fans didn\'t invent it. we just recognized it immediately.',
    tag: 'the deep dish',
    color: '#E8A0B0',
  },
];

export default function TweetInteractionsSection() {
  return (
    <section
      id="fan-reactions"
      style={{ background: '#1C1C1E', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p className="eyebrow" style={{ color: '#E8A0B0', marginBottom: '12px' }}>
            fan reactions
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
            The moments that break people
          </h2>
          <p style={{ color: '#8C8884', fontSize: '14px', maxWidth: '420px', margin: '12px auto 0', lineHeight: 1.7 }}>
            These are the moments fans keep coming back to. You know the ones.
          </p>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {fanCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              style={{
                background: 'rgba(247,244,240,0.04)',
                border: '1px solid rgba(247,244,240,0.1)',
                padding: '24px',
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  width: '24px',
                  height: '3px',
                  background: card.color,
                  marginBottom: '16px',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: '#F7F4F0',
                  lineHeight: 1.65,
                  marginBottom: '16px',
                }}
              >
                &ldquo;{card.text}&rdquo;
              </p>
              <span
                style={{
                  fontSize: '10px',
                  color: card.color,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            color: '#8C8884',
            marginTop: '40px',
            fontStyle: 'italic',
          }}
        >
          These are illustrative fan sentiments, not direct quotes — the feeling is real, the exact wording is mine.
        </p>
      </div>
    </section>
  );
}
