'use client';

import { motion } from 'framer-motion';
import aiahceyFiles, { type AiahceyFile, type FileSubject } from '@/data/aiahceyFiles';
import { openLightbox } from '@/components/ui/Lightbox';

const lightboxImages = aiahceyFiles
  .filter((f) => !f.imageSrc.startsWith('/images/placeholder'))
  .map((f) => ({ src: f.imageSrc, alt: f.imageAlt, caption: f.title, label: f.caseLabel }));

function FileThumbnail({ file, onClick }: { file: AiahceyFile; onClick?: () => void }) {
  const accent =
    file.subject === 'aiah'
      ? '#87BFDA'
      : file.subject === 'stacey'
      ? '#E8A0B0'
      : '#C4BEB8';
  const bg =
    file.subject === 'aiah'
      ? '#D0E8F2'
      : file.subject === 'stacey'
      ? '#F2C4CE'
      : '#EDE9E3';

  const isPlaceholder = !file.imageSrc || file.imageSrc.startsWith('/images/placeholder');

  if (!isPlaceholder) {
    return (
      <div
        style={{ position: 'relative', borderBottom: `2px solid ${accent}`, background: '#1A1A1C', cursor: 'zoom-in' }}
        onClick={onClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={file.imageSrc}
          alt={file.imageAlt}
          style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', display: 'block' }}
        />
        {/* Case label overlay */}
        <span
          style={{
            position: 'absolute',
            top: '8px',
            left: '10px',
            fontFamily: 'monospace',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.45)',
            padding: '2px 6px',
            borderRadius: '2px',
          }}
        >
          {file.caseLabel}
        </span>
        <div style={{ display: 'flex', gap: '4px', position: 'absolute', top: '8px', right: '10px' }}>
          {(file.subject === 'aiah' || file.subject === 'both') && (
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#87BFDA', display: 'inline-block' }} />
          )}
          {(file.subject === 'stacey' || file.subject === 'both') && (
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8A0B0', display: 'inline-block' }} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: bg,
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '12px 14px',
        borderBottom: `2px solid ${accent}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: accent,
            textTransform: 'uppercase',
          }}
        >
          {file.caseLabel}
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {(file.subject === 'aiah' || file.subject === 'both') && (
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#87BFDA', display: 'inline-block' }} />
          )}
          {(file.subject === 'stacey' || file.subject === 'both') && (
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8A0B0', display: 'inline-block' }} />
          )}
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '10px', color: accent, opacity: 0.7, lineHeight: 1.3 }}>
        {process.env.NODE_ENV === 'development' ? '[image missing]' : ''}
      </p>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AiahceyFilesSection() {
  return (
    <section id="files" style={{ background: '#F7F4F0', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>what I keep coming back to</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#1C1C1E',
              }}
            >
              The Files
            </h2>
            {/* Legend */}
            <div style={{ display: 'flex', gap: '20px', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#8C8884' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#87BFDA', display: 'inline-block' }} />
                Aiah
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#8C8884' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8A0B0', display: 'inline-block' }} />
                Stacey
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#8C8884' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#87BFDA', display: 'inline-block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8A0B0', display: 'inline-block' }} />
                Both
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#4A4A4A',
              marginTop: '16px',
              maxWidth: '520px',
            }}
          >
            Sixteen entries. Each one pulls a different angle on the dynamic —
            context, what it reveals, and why it stays with you.
          </p>
          <div style={{ marginTop: '20px', height: '1px', background: '#EDE9E3' }} />
        </motion.div>

        {/* Files grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: '#EDE9E3',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {aiahceyFiles.map((file) => (
            <motion.div
              key={file.id}
              variants={itemVariants}
              style={{ background: '#FFFFFF', overflow: 'hidden' }}
            >
              <FileThumbnail
                file={file}
                onClick={() => {
                  const idx = lightboxImages.findIndex((i) => i.src === file.imageSrc);
                  if (idx >= 0) openLightbox(lightboxImages, idx);
                }}
              />

              <div style={{ padding: '18px 16px 20px' }}>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1C1C1E',
                    marginBottom: '16px',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {file.title}
                </h3>

                {/* Three layers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: '4px', color: '#8C8884' }}>Context</p>
                    <p style={{ fontSize: '12px', color: '#4A4A4A', lineHeight: 1.65 }}>
                      {file.context}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: '4px', color: '#87BFDA' }}>Observation</p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '12px',
                        color: '#4A4A4A',
                        lineHeight: 1.65,
                      }}
                    >
                      {file.observation}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: '4px', color: '#E8A0B0' }}>Significance</p>
                    <p style={{ fontSize: '12px', color: '#4A4A4A', lineHeight: 1.65 }}>
                      {file.significance}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px' }}>
                  {file.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '10px',
                        color: '#8C8884',
                        background: '#F7F4F0',
                        padding: '2px 7px',
                        border: '1px solid #EDE9E3',
                        borderRadius: '2px',
                        fontWeight: 500,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '12px',
                    borderTop: '1px solid #EDE9E3',
                  }}
                >
                  {file.status === 'needs-review' ? (
                    <span className="badge-review">Needs Review</span>
                  ) : (
                    <span className="badge-verified">✓ Verified</span>
                  )}
                  {file.sourceUrl ? (
                    <a
                      href={file.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '11px',
                        color: '#8C8884',
                        fontWeight: 500,
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      Source →
                    </a>
                  ) : (
                    <span style={{ fontSize: '11px', color: '#C4BEB8' }}>Source Needed</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
