'use client';

import { motion } from 'framer-motion';

const points = [
  {
    n: '01',
    title: 'Same Artistic Lane',
    body: 'Both Aiah and Stacey are Main Rappers in BINI — same title, same tier, out of eight members. That part is official. What makes it interesting is how differently they do it: Aiah\'s delivery is measured and composed; Stacey\'s is punchy and energy-forward. Same role, completely different approach. The contrast isn\'t fan-invented — it\'s built into the music.',
    color: '#87BFDA',
  },
  {
    n: '02',
    title: 'Officially Blue and Pink',
    body: "Aiah's official color is Glacier Blue. Stacey's is Warm Pink. These aren't fan nicknames — they're formally assigned within BINI's identity system. Blue and pink just happen to map onto everything fans were already saying about them. The visual contrast was always there. Fans just kept pointing at it.",
    color: '#E8A0B0',
  },
  {
    n: '03',
    title: 'They\'ve Said It Themselves',
    body: 'Aiah said it on air — 2025, RX931, The Deep Dish. The official TikTok caption even named it: "The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱." Stacey has her own words for it too: "a gentle and caring side that really grounds us." Neither of them needed to say anything. They did anyway.',
    color: '#87BFDA',
  },
  {
    n: '04',
    title: 'Both Built Themselves From Quiet',
    body: 'Aiah left Cebu at 18 to train alone in Manila. She\'s called herself a lone wolf. Stacey has said: "Before, I wasn\'t talkative at all. It was hard, really hard for me to interact and socialize with anyone." Two people who built their public personalities out of something quieter. They\'ll tell you that themselves — you just have to listen.',
    color: '#E8A0B0',
  },
];

export default function WhyAiahceySection() {
  return (
    <section id="why-aiahcey" style={{ background: '#F7F4F0', padding: '96px 24px' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '20px' }}>The Question Every New Fan Asks</p>
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
            Why Aiahcey?
          </h2>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#4A4A4A', lineHeight: 1.7, maxWidth: '520px' }}>
            <em>Aiahcey</em> (AY-ah-SEY) is the fan name for the pairing of Aiah and Stacey,
            two members of BINI — a Filipino girl group. Here are the four reasons
            fans treat them as more than just bandmates.
          </p>
          <div style={{ marginTop: '24px', height: '1px', background: '#EDE9E3', maxWidth: '120px' }} />
        </motion.div>

        {/* Points — editorial numbered list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {points.map((pt, i) => (
            <motion.div
              key={pt.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                gap: '32px',
                padding: '40px 0',
                borderBottom: '1px solid #EDE9E3',
                alignItems: 'start',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: pt.color,
                  letterSpacing: '0.08em',
                  paddingTop: '4px',
                }}
              >
                {pt.n}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1C1C1E',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pt.title}
                </h3>
                <p style={{ color: '#4A4A4A', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  {pt.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#4A4A4A',
            textAlign: 'center',
            marginTop: '56px',
          }}
        >
          Scroll to meet them individually — then watch how it clicks.
        </motion.p>
      </div>
    </section>
  );
}
