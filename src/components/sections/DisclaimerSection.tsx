export default function DisclaimerSection() {
  return (
    <footer
      style={{
        background: '#F7F4F0',
        borderTop: '1px solid #EDE9E3',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '14px',
            letterSpacing: '0.12em',
            background: 'linear-gradient(90deg, #87BFDA 0%, #E8A0B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
          }}
        >
          AIAHCEY
        </p>

        {/* Personal note — prominent */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#4A4A4A',
            lineHeight: 1.7,
            maxWidth: '440px',
            margin: '0 auto 20px',
          }}
        >
          This is a personal fan-made project. Not official. Just a little corner
          of the internet for why I love Aiahcey.
        </p>

        <div style={{ height: '1px', background: '#EDE9E3', maxWidth: '120px', margin: '0 auto 20px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '12px', color: '#8C8884', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Not affiliated with, endorsed by, or connected to BINI, Star Music, ABS-CBN, or any official management or label.
          </p>
          <p style={{ fontSize: '12px', color: '#8C8884', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            All photos and original content belong to their respective owners. If you&apos;re a rights holder and want something removed, please reach out.
          </p>
          <p style={{ fontSize: '12px', color: '#8C8884', lineHeight: 1.7 }}>
            Made with love. No commercial use. No infringement intended.
          </p>
        </div>

        <div style={{ marginTop: '32px', height: '1px', background: '#EDE9E3' }} />
        <p style={{ fontSize: '10px', color: '#8C8884', marginTop: '20px', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} AIAHCEY — for Aiah, for Stacey, for every Starphrodite
        </p>
      </div>
    </footer>
  );
}
