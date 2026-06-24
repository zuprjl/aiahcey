'use client';

import { useEffect, useRef } from 'react';

// Module-level guard so the script only loads once across all instances
let scriptStatus: 'idle' | 'loading' | 'loaded' = 'idle';

interface Props {
  videoId: string;
  url: string;
  creator: string;
  title: string;
}

export default function TikTokEmbed({ videoId, url, creator, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject the blockquote embed markup
    container.innerHTML = `
      <blockquote
        class="tiktok-embed"
        cite="${url}"
        data-video-id="${videoId}"
        style="max-width: 605px; min-width: 325px;"
      >
        <section></section>
      </blockquote>
    `;

    if (scriptStatus === 'idle') {
      scriptStatus = 'loading';
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => { scriptStatus = 'loaded'; };
      document.body.appendChild(script);
    } else if (scriptStatus === 'loaded') {
      // Script already ran — ask TikTok to re-process new embeds
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.tiktokEmbed?.lib?.render) {
        win.tiktokEmbed.lib.render(container.querySelectorAll('.tiktok-embed'));
      } else if (win.TikTok?.Embed?.reload) {
        win.TikTok.Embed.reload();
      }
    }
    // If status === 'loading', the script will fire and process all .tiktok-embed
    // elements on the page — no further action needed
  }, [videoId, url]);

  return (
    <div>
      <div ref={containerRef} />
      {/* Fallback shown before embed loads or if it fails */}
      <noscript>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: '#87BFDA',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Watch {title} by {creator} on TikTok ↗
        </a>
      </noscript>
    </div>
  );
}
