export interface TimelineEntry {
  id: string;
  year: number;
  date: string;
  title: string;
  description: string;
  canonTheme: string;
  type: 'moment' | 'photo' | 'tweet' | 'milestone';
  imageSrc?: string;
  sourceLabel?: string | null;
  sourceUrl?: string | null;
  tags: string[];
  status: 'verified' | 'needs-review';
}

export const timelineEntries: TimelineEntry[] = [
  // 2021

  {
    id: 'tl-2021-debut',
    year: 2021,
    date: 'June 11, 2021',
    title: 'BINI Debuts — Both Main Rappers',
    description:
      'BINI officially debuts under Star Music. Aiah and Stacey are introduced as the group\'s two Main Rappers — the only group of eight with a shared top-tier rap designation. The pairing is structural from day one, built into the group\'s architecture before fans have a name for it.',
    canonTheme: 'The Chemistry Department',
    type: 'milestone',
    sourceLabel: 'BINI Official Debut',
    sourceUrl: null,
    tags: ['debut', 'milestone', 'main-rapper', 'beginning'],
    status: 'verified',
  },

  // 2024 — GBV and surrounding documented moments

  {
    id: 'tl-2024-born-to-win',
    year: 2024,
    date: '2024',
    title: 'Born To Win — Aiah\'s Anxiety Disclosure',
    description:
      'In BINI\'s three-part docuseries Born To Win, Aiah speaks publicly about her struggles with anxiety. She says: "If sharing my experience can help someone, then I\'ll do it." The disclosure reframes the composure fans observe — her steadiness is earned, not effortless. For fans already watching the pairing, the disclosure made the grounding dynamic more meaningful: the anchor has her own weight to carry.',
    canonTheme: 'Comfort Duo',
    type: 'moment',
    sourceLabel: 'Born To Win Docuseries — Chapter 1',
    sourceUrl: null,
    tags: ['aiah', 'docuseries', 'vulnerability', 'born-to-win'],
    status: 'needs-review',
  },

  {
    id: 'tl-2024-back-to-back',
    year: 2024,
    date: '2024',
    title: 'Back-to-Back — Visual Chemistry, Defined',
    description:
      'A concert photograph captures Aiah and Stacey standing back-to-back on stage — Stacey in teal/green sequins, Aiah in red sequins — both laughing, neither looking at the other. The image circulates widely as a summary of what fans had been trying to explain for years: the chemistry does not require interaction. They only have to exist in the same frame.',
    canonTheme: 'Visual Chemistry',
    type: 'photo',
    imageSrc: '/images/moments/stage-back-to-back.jpg',
    sourceLabel: 'Concert fancam (aiGM lights credit)',
    sourceUrl: null,
    tags: ['concert', 'visual-chemistry', 'back-to-back', 'iconic'],
    status: 'needs-review',
  },

  {
    id: 'tl-2024-gbv',
    year: 2024,
    date: 'November 16, 2024',
    title: 'Grand BINIverse — The DJ Duo Segment',
    description:
      'Grand BINIverse Concert, Araneta Coliseum. Aiah and Stacey got their own duo segment — performing "Lose My Breath" by Destiny\'s Child as DJs. Official BINI caption: "When DJ skills meet diva vibes." For a lot of fans, this is the moment everything clicked. Before GBV, you suspected it. After GBV, you couldn\'t unsee it.',
    canonTheme: 'GBV Origin Story',
    type: 'milestone',
    imageSrc: '/images/moments/grand-biniverse-dj.jpg',
    sourceLabel: 'Grand BINIverse Concert — BINI Official',
    sourceUrl: 'https://www.youtube.com/watch?v=nWtunfmUIlA',
    tags: ['concert', 'grand-biniverse', 'dj', 'official', 'origin', 'milestone'],
    status: 'verified',
  },

  {
    id: 'tl-2024-gbv-photo',
    year: 2024,
    date: 'November 2024',
    title: 'Official Duo Photo Series Released',
    description:
      'After the concert, BINI\'s official channels released a photo series pairing members into duos. Aiah and Stacey got their own frame. The caption used the exact same language fans had been using for years. Management made it official. Fans had already known.',
    canonTheme: 'GBV Origin Story',
    type: 'photo',
    sourceLabel: 'BINI Official Instagram',
    sourceUrl: 'https://www.instagram.com/p/DCtH5X7yZaD/',
    tags: ['official', 'photo', 'grand-biniverse', 'blue-meets-pink'],
    status: 'verified',
  },

  // 2025 — documented interview, casual, travel entries

  {
    id: 'tl-2025-here-with-you',
    year: 2025,
    date: '2025',
    title: '"Here With You" — On Stage, Hands Joined',
    description:
      'During an SM-branded "Here With You" performance event, a photograph captures Aiah and Stacey facing each other mid-performance, both laughing, their hands joined between them. The audience is visible behind them — this happened in front of people. Fans immediately note that the performance paused, in public, for this.',
    canonTheme: 'The Spark',
    type: 'photo',
    imageSrc: '/images/files/file-010.jpg',
    sourceLabel: 'Here With You event (SM Entertainment)',
    sourceUrl: null,
    tags: ['concert', 'spark', 'laughing', 'hands', 'stage'],
    status: 'needs-review',
  },

  {
    id: 'tl-2025-steezy',
    year: 2025,
    date: '2025',
    title: 'STEEZY Dance Studio Session',
    description:
      'STEEZY dance studio. Stacey in a white jacket, Aiah in casual clothes, both just dancing. No stage, no performance pressure. This is the kind of content that makes the fandom point and go: see? Same energy everywhere. It doesn\'t stop when the cameras go off.',
    canonTheme: 'TikTok Bond',
    type: 'moment',
    imageSrc: '/images/files/file-013.jpg',
    sourceLabel: 'STEEZY studio session',
    sourceUrl: null,
    tags: ['dance', 'steezy', 'tiktok-bond', 'casual', 'studio'],
    status: 'needs-review',
  },

  {
    id: 'tl-2025-mirror-selfie',
    year: 2025,
    date: '2025',
    title: 'Mirror Selfie — The Comfort Photo',
    description:
      'Mirror selfie, home setting. Stacey in grey sweats, leaning her head onto Aiah\'s shoulder. Aiah in a camo bucket hat, taking the photo like it\'s nothing. No stage, no makeup, no performance — just comfortable. This is the one I keep coming back to.',
    canonTheme: 'Comfort Duo',
    type: 'photo',
    imageSrc: '/images/files/file-012.jpg',
    sourceLabel: 'Personal post (source confirmation pending)',
    sourceUrl: null,
    tags: ['comfort', 'home', 'casual', 'mirror-selfie', 'silent-comfort'],
    status: 'needs-review',
  },

  {
    id: 'tl-2025-nyc',
    year: 2025,
    date: '2025',
    title: 'New York City — Walking Together',
    description:
      'A GoPro-style wide-angle selfie on a New York City street. Aiah holding the camera in a dark outfit; Stacey behind her in maroon, both mid-walk, both looking at the lens. The Comfort Duo dynamic does not require a Filipino backdrop. Two people from the Philippines, in New York City, with the same ease they have everywhere else.',
    canonTheme: 'Comfort Duo',
    type: 'photo',
    imageSrc: '/images/files/file-014.jpg',
    sourceLabel: 'Social media post (source confirmation pending)',
    sourceUrl: null,
    tags: ['travel', 'new-york', 'international', 'off-stage', 'comfort'],
    status: 'needs-review',
  },

  {
    id: 'tl-2025-rx931',
    year: 2025,
    date: '2025',
    title: 'RX931 — "I Love Stacey\'s Energy"',
    description:
      'RX931\'s The Deep Dish. Aiah said it on air: she loves Stacey\'s energy. The official clip caption even used the phrase "The beauty of AiahCey" with the 🐶🐱 together. This is the quote I keep pointing at when someone asks me what the deal is. Aiah said it herself.',
    canonTheme: 'The Chemistry Department',
    type: 'moment',
    imageSrc: '/images/moments/rx931-interview.jpg',
    sourceLabel: 'RX931 The Deep Dish',
    sourceUrl: 'https://www.tiktok.com/@rx931/video/7540281305607621895',
    tags: ['interview', 'verified-quote', 'rx931', 'dog-and-cat', 'aiah-about-stacey'],
    status: 'verified',
  },

  // 2026 — Coachella era

  {
    id: 'tl-2026-coachella-plane',
    year: 2026,
    date: 'April 2026',
    title: 'First Filipino Act at Coachella — On the Plane Together',
    description:
      'Aiah and Stacey are among the first batch of BINI members departing for Coachella 2026, where BINI becomes the first Filipino act to perform at the festival. Documented aboard Philippines Airlines in business class: pink-hair Stacey and braided Aiah, seated across from each other. Whatever the Aiahcey Effect means, it was present on the most significant flight of their careers.',
    canonTheme: 'Aiahcey Effect',
    type: 'milestone',
    imageSrc: '/images/moments/coachella-departure.jpg',
    sourceLabel: 'Coachella 2026 — first batch departure',
    sourceUrl: null,
    tags: ['coachella', 'milestone', 'travel', 'plane', '2026'],
    status: 'needs-review',
  },

  {
    id: 'tl-2026-cowboy-hats',
    year: 2026,
    date: 'April 2026',
    title: 'Matching Cowboy Hats — Nobody Planned This',
    description:
      'En route to Coachella, Aiah and Stacey are photographed in the car — both wearing matching brown cowboy hats and sunglasses, both in red. Neither coordinated with the other. They both simply showed up in cowboy hats. The image becomes one of the most-shared pieces of Aiahcey content from the Coachella era. The Matching Energy principle, documented.',
    canonTheme: 'Matching Energy',
    type: 'photo',
    imageSrc: '/images/moments/coachella-cowboy-car.jpg',
    sourceLabel: 'Coachella 2026 documentation',
    sourceUrl: null,
    tags: ['coachella', 'matching', 'cowboy-hats', 'car-selfie', '2026'],
    status: 'needs-review',
  },

  {
    id: 'tl-2026-coachella-grounds',
    year: 2026,
    date: 'April 2026',
    title: 'Coachella Grounds — The Cowboy Era',
    description:
      'On the Coachella festival grounds, Aiah in a red dress and Stacey in red gingham, both still in matching cowboy hats. Both look like they are exactly where they are supposed to be, with exactly who they are supposed to be with. BINI\'s most significant career milestone, experienced side-by-side, documented in daylight.',
    canonTheme: 'Matching Energy',
    type: 'photo',
    imageSrc: '/images/files/file-015.jpg',
    sourceLabel: 'Coachella 2026 fan documentation',
    sourceUrl: null,
    tags: ['coachella', 'grounds', 'milestone', '2026', 'matching-energy'],
    status: 'needs-review',
  },

  {
    id: 'tl-2026-piggyback',
    year: 2026,
    date: 'April 2026',
    title: 'The Piggyback — Matching Freak, Documented',
    description:
      'Outdoor US setting, bright California light: one carrying the other on their back while both laugh. Unscripted chaos at BINI\'s biggest career moment. The Aiahcey Effect is not only chemistry — it is also comfort at maximum absurdity. Fans call this the Matching Freak principle: the same humor, the same willingness to be completely unhinged, at the exact same time.',
    canonTheme: 'Matching Freak',
    type: 'photo',
    imageSrc: '/images/files/file-016.jpg',
    sourceLabel: 'Coachella 2026 fan documentation',
    sourceUrl: null,
    tags: ['coachella', 'piggyback', 'chaotic', 'matching-freak', '2026'],
    status: 'needs-review',
  },
];
