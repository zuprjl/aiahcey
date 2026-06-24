'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import aiahceyTikToks, { type AiahceyTikTok } from '@/data/tiktoks';
import TikTokEmbed from '@/components/TikTokEmbed';

// Show all 9 — the section covers the full TikTok archive
const tiktoks = aiahceyTikToks;

function StatusBadge({ status }: { status: AiahceyTikTok['status'] }) {
  if (status === 'verified-source') {
    return (
      <span
        style={{
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#87BFDA',
          background: 'rgba(135,191,218,0.12)',
          border: '1px solid rgba(135,191,218,0.25)',
          padding: '2px 8px',
          borderRadius: '2px',
        }}
      >
        ✓ from Aiah's account
      </span>
    );
  }
  return (
    <span
      style={{
        fontSize: '10px',
        color: '#8C8884',
        background: 'rgba(247,244,240,0.06)',
        border: '1px solid rgba(247,244,240,0.1)',
        padding: '2px 8px',
        borderRadius: '2px',
        letterSpacing: '0.06em',
      }}
    >
      fan-made
    </span>
  );
}

function TikTokCard({ tiktok, index }: { tiktok: AiahceyTikTok; index: number }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{
        background: 'rgba(247,244,240,0.04)',
        border: '1px solid rgba(247,244,240,0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Accent stripe */}
      <div
        style={{
          height: '2px',
          background: index % 2 === 0
            ? 'linear-gradient(90deg, #87BFDA, transparent)'
            : 'linear-gradient(90deg, #E8A0B0, transparent)',
        }}
      />

      {/* Embed — full width, not cropped */}
      <div
        style={{
          background: '#000000',
          display: 'flex',
          justifyContent: 'center',
          padding: '0',
          minHeight: '560px',
        }}
      >
        <TikTokEmbed
          videoId={tiktok.videoId}
          url={tiktok.url}
          creator={tiktok.creator}
          title={tiktok.title}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {/* Title + creator row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: '#F7F4F0',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {tiktok.title}
          </h3>
          <StatusBadge status={tiktok.status} />
        </div>

        {/* Creator */}
        <p
          style={{
            fontSize: '12px',
            color: '#87BFDA',
            fontWeight: 500,
            letterSpacing: '0.04em',
            margin: 0,
          }}
        >
          {tiktok.creator} · {tiktok.category}
        </p>

        {/* Fan caption */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '13px',
            color: '#C4BEB8',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {tiktok.fanCaption}
        </p>

        {/* Why fans care — toggleable */}
        {showMore && (
          <p
            style={{
              fontSize: '12px',
              color: '#8C8884',
              lineHeight: 1.7,
              margin: 0,
              paddingLeft: '12px',
              borderLeft: '2px solid rgba(247,244,240,0.1)',
            }}
          >
            {tiktok.whyFansCare}
          </p>
        )}

        {/* Tags + more toggle */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center', marginTop: 'auto' }}>
          {tiktok.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10px',
                color: '#8C8884',
                background: 'rgba(247,244,240,0.05)',
                border: '1px solid rgba(247,244,240,0.08)',
                padding: '2px 7px',
                borderRadius: '2px',
                letterSpacing: '0.03em',
              }}
            >
              {tag}
            </span>
          ))}
          <button
            onClick={() => setShowMore((v) => !v)}
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              color: '#8C8884',
              fontFamily: 'var(--font-body)',
              padding: '2px 0',
              letterSpacing: '0.04em',
            }}
          >
            {showMore ? 'less ↑' : 'more ↓'}
          </button>
        </div>

        {/* Fallback watch link */}
        <a
          href={tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            color: '#8C8884',
            textDecoration: 'none',
            borderTop: '1px solid rgba(247,244,240,0.07)',
            paddingTop: '12px',
            marginTop: '4px',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#F7F4F0')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#8C8884')}
        >
          Watch on TikTok ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function TikTokBondSection() {
  return (
    <section
      id="tiktoks"
      style={{ background: '#1C1C1E', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p
            className="eyebrow"
            style={{ color: '#87BFDA', marginBottom: '16px' }}
          >
            tiktok bond
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F7F4F0',
              marginBottom: '20px',
            }}
          >
            TikTok Bond
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: '#C4BEB8',
              lineHeight: 1.55,
              maxWidth: '560px',
              margin: 0,
            }}
          >
            Some duos need a whole explanation. Aiahcey just needs one TikTok
            and suddenly you get it.
          </p>
        </motion.div>

        {/* TikTok grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(247,244,240,0.06)',
          }}
          className="tiktok-grid"
        >
          {tiktoks.map((tt, i) => (
            <TikTokCard key={tt.id} tiktok={tt} index={i} />
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            fontSize: '11px',
            color: '#8C8884',
            marginTop: '28px',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          If a video doesn't load inside the site, use the "Watch on TikTok" link below each one.
          TikTok embeds require an active connection to TikTok's servers.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tiktok-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .tiktok-grid {
            grid-template-columns: 1fr !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
