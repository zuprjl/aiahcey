'use client';

import { motion } from 'framer-motion';

const sourceCards = [
  {
    platform: 'YouTube',
    color: '#FF0000',
    bg: '#FFF0F0',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
    title: 'Grand BINIverse — DJ Duo',
    quote: '"Lose My Breath" — Aiah and Stacey as DJs at Araneta Coliseum, November 2024.',
    cta: 'Watch on YouTube',
    url: 'https://www.youtube.com/watch?v=nWtunfmUIlA',
  },
  {
    platform: 'TikTok',
    color: '#010101',
    bg: '#F0F0F0',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#010101">
        <path d="M19.6 3.3A4.9 4.9 0 0 1 14.7 0h-3.8v16.4a2.9 2.9 0 1 1-2-2.8V9.7A6.8 6.8 0 1 0 14.8 16V8.1a8.6 8.6 0 0 0 5 1.6V5.9a4.9 4.9 0 0 1-0.2 0V3.3z" />
      </svg>
    ),
    title: 'RX931 Deep Dish — Aiah on Stacey\'s Energy',
    quote: '"The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱"',
    cta: 'Watch on TikTok',
    url: 'https://www.tiktok.com/@rx931/video/7540281305607621895',
  },
  {
    platform: 'Instagram',
    color: '#C13584',
    bg: '#FDF0F6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#ig-grad)">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="50%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.7 1.7 4.8 4.8.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.1-1.6 4.7-4.8 4.8-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1C4 21.4 2.5 19.8 2.4 16.7 2.3 15.5 2.3 15.1 2.3 12s0-3.6.1-4.8C2.5 4.1 4 2.5 7.2 2.4 8.4 2.3 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
    title: 'BINI Official — GrandBINIverse Duo Photos',
    quote: '"When DJ skills meet diva vibes." — Official caption for the Aiahcey photo series.',
    cta: 'See on Instagram',
    url: 'https://www.instagram.com/p/DCtH5X7yZaD/',
  },
];

export default function VideoSection() {
  return (
    <section
      id="watch"
      style={{ background: '#F7F4F0', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p className="eyebrow" style={{ color: '#8C8884', marginBottom: '12px' }}>
            watch it yourself
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
            The Moments, on Record
          </h2>
          <p
            style={{
              color: '#4A4A4A',
              fontSize: '15px',
              maxWidth: '480px',
              margin: '14px auto 0',
              lineHeight: 1.7,
            }}
          >
            Don&apos;t take my word for it. Here&apos;s where to find it for yourself.
          </p>
        </div>

        {/* YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <div
            style={{
              background: '#1C1C1E',
              padding: '16px 16px 12px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
            }}
          >
            {/* Label bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF0000' }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '12px',
                  color: '#8C8884',
                }}
              >
                Grand BINIverse — DJ Aiah &amp; DJ Stacey — &quot;Lose My Breath&quot;
              </span>
            </div>
            {/* 16:9 iframe */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/nWtunfmUIlA"
                title="Grand BINIverse — Aiah and Stacey DJ Duo — Lose My Breath"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Source cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {sourceCards.map((card, i) => (
            <motion.a
              key={card.platform}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              style={{
                display: 'block',
                background: '#FFFFFF',
                border: '1px solid #EDE9E3',
                padding: '20px',
                textDecoration: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                {card.icon}
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: card.color,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {card.platform}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1C1C1E',
                  lineHeight: 1.35,
                  marginBottom: '8px',
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '12px',
                  color: '#4A4A4A',
                  lineHeight: 1.55,
                  marginBottom: '14px',
                }}
              >
                {card.quote}
              </p>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#87BFDA',
                  letterSpacing: '0.04em',
                }}
              >
                {card.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
