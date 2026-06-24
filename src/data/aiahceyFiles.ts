export type FileSubject = 'aiah' | 'stacey' | 'both';
export type FileDynamicType =
  | 'aiah-grounds-stacey'
  | 'stacey-energizes-aiah'
  | 'both-as-rappers'
  | 'blue-meets-pink'
  | 'watcher-moment'
  | 'together';

export interface AiahceyFile {
  id: string;
  caseLabel: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  context: string;
  observation: string;
  significance: string;
  tags: string[];
  sourceLabel: string | null;
  sourceUrl: string | null;
  subject: FileSubject;
  dynamicType: FileDynamicType;
  status: 'verified' | 'needs-review';
  dateAdded: string;
}

const aiahceyFiles: AiahceyFile[] = [
  {
    id: 'file-001',
    caseLabel: 'FILE-001',
    title: 'DJ Aiah & DJ Stacey — "Lose My Breath"',
    imageSrc: '/images/files/file-001.jpg',
    imageAlt: 'Stacey facing Aiah on stage, directing mic toward her during a concert performance',
    context: 'Grand BINIverse Concert, Araneta Coliseum, November 16, 2024. Duo segment where Aiah and Stacey performed "Lose My Breath" by Destiny\'s Child as DJs.',
    observation:
      'Two main rappers. Shared segment. Opposite energies — one measured, one expressive — both at the same board. The production chose this pairing for the duo slot.',
    significance:
      'The largest, most formally produced Aiahcey-specific moment on record. Official photos, official caption ("When DJ skills meet diva vibes"), multiple fancam recordings.',
    tags: ['concert', 'both-as-rappers', 'grand-biniverse', 'official', 'dj', '2024'],
    sourceLabel: 'Grand BINIverse Concert Fancam',
    sourceUrl: 'https://www.youtube.com/watch?v=nWtunfmUIlA',
    subject: 'both',
    dynamicType: 'both-as-rappers',
    status: 'verified',
    dateAdded: '2024-11-16',
  },
  {
    id: 'file-002',
    caseLabel: 'FILE-002',
    title: 'The Deep Dish — Aiah on Stacey\'s Energy',
    imageSrc: '/images/files/file-002.jpg',
    imageAlt: 'Aiah and Stacey at a radio station with headphones and mics, mid-conversation, both pointing at each other',
    context: 'RX931 radio interview, The Deep Dish. Aiah expressed her love for Stacey\'s energy on air. Official caption used 🐶🐱 to describe the dynamic.',
    observation:
      'Aiah did not describe Stacey\'s energy as something she manages or tolerates. She said she loves it. This was stated on air, captured by official media.',
    significance:
      'This is the quote I point at when someone asks me why I love this pairing. Aiah said it out loud, on air. Everything else here is just context for that one moment.',
    tags: ['interview', 'verified-quote', 'rx931', 'aiah-about-stacey', 'dog-and-cat'],
    sourceLabel: 'RX931 The Deep Dish (TikTok)',
    sourceUrl: 'https://www.tiktok.com/@rx931/video/7540281305607621895',
    subject: 'both',
    dynamicType: 'stacey-energizes-aiah',
    status: 'verified',
    dateAdded: '2025-01-01',
  },
  {
    id: 'file-003',
    caseLabel: 'FILE-003',
    title: 'GrandBINIverse Official Duo Photo Series',
    imageSrc: '/images/placeholder-file-003.jpg',
    imageAlt: 'Official GrandBINIverse duo photo featuring Stacey and Aiah',
    context: 'Official BINI social media release. After the Grand BINIverse Concert, BINI\'s official channels released a photo series pairing members into duos. Stacey and Aiah were paired.',
    observation:
      'Of eight members, the official channels chose to pair these two for a duo photo series. The caption — "When DJ skills meet diva vibes" — maps exactly onto the dynamic fans had been documenting.',
    significance:
      'Official visual documentation of the Aiahcey pairing. Management named the contrast. Fans had named it first; management confirmed it.',
    tags: ['official', 'photo', 'blue-meets-pink', 'grand-biniverse', '2024'],
    sourceLabel: 'BINI Official Instagram',
    sourceUrl: 'https://www.instagram.com/p/DCtH5X7yZaD/',
    subject: 'both',
    dynamicType: 'blue-meets-pink',
    status: 'verified',
    dateAdded: '2024-11-21',
  },
  {
    id: 'file-004',
    caseLabel: 'FILE-004',
    title: 'Coachella 2026 — On the Plane Together',
    imageSrc: '/images/files/file-004.jpg',
    imageAlt: 'Stacey with pink hair and Aiah with braids seated across from each other in business class on Philippines Airlines, en route to Coachella',
    context: 'April 2026. Aiah, Stacey, Gwen, and Maloi departed as the first batch of BINI members headed to Coachella, where BINI became the first Filipino act to perform at the festival. Photo shows them aboard Philippines Airlines in business class.',
    observation:
      'Pink hair and braids. Sunglasses and a calm pose. Both headed to the same moment in history, seated across from each other. The Philippines Airlines cabin on the most significant flight of their careers.',
    significance:
      'Coachella 2026 is BINI\'s largest milestone. This is the documented image of them aboard the departure flight — together at the start of something historic. Two of the four documented first-batch members.',
    tags: ['milestone', 'coachella', 'travel', '2026', 'together', 'plane'],
    sourceLabel: 'Coachella 2026 departure documentation',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'together',
    status: 'needs-review',
    dateAdded: '2026-04-10',
  },
  {
    id: 'file-005',
    caseLabel: 'FILE-005',
    title: 'Aiah — The Five Beauty Queen Titles',
    imageSrc: '/images/files/file-005.jpg',
    imageAlt: 'Aiah in a backstage setting before a performance — the composure before the stage',
    context: 'Before BINI. Aiah held five beauty queen titles in Cebu, including Miss Silka Philippines 2018. She left Cebu at 18 to pursue idol training in Manila.',
    observation:
      'The calm she projects now was built across years of performing composure under scrutiny. The quiet anchor was first a beauty queen from Cebu who left everything she knew.',
    significance:
      'The backstory makes the present persona legible. Fans who know this read Aiah\'s composure as something earned. It also creates an unexpected parallel with Stacey, who also has beauty pageant experience.',
    tags: ['aiah', 'backstory', 'cebu', 'beauty-queen', 'pre-bini'],
    sourceLabel: 'Vogue Philippines — BINI\'s Aiah Arceta on Growing in Glamour and Grit',
    sourceUrl: null,
    subject: 'aiah',
    dynamicType: 'aiah-grounds-stacey',
    status: 'needs-review',
    dateAdded: '2024-01-01',
  },
  {
    id: 'file-006',
    caseLabel: 'FILE-006',
    title: 'Stacey — The Pink Princessification',
    imageSrc: '/images/files/file-006.jpg',
    imageAlt: 'Stacey in a white fluffy outfit doing a pout pose next to Aiah in white and red — both radiating kikay energy',
    context: 'Stacey is the member credited with starting the "pink princessification" of BINI — a phrase used by the official BINI account. Her representative color, Warm Pink, is worn as identity.',
    observation:
      'The pink is not costuming. It is genuine. Stacey\'s love of pink, Barbie, and Bratz predates BINI by years. She carried her childhood aesthetic forward unmodified.',
    significance:
      'Stacey\'s color is not assigned to a concept — it is assigned to a person who already was that concept. This makes the Glacier Blue × Warm Pink contrast more meaningful: both colors are genuinely representative.',
    tags: ['stacey', 'pink', 'identity', 'official', 'pink-princess', 'kikay'],
    sourceLabel: 'BINI Official — Pink Princessification post',
    sourceUrl: null,
    subject: 'stacey',
    dynamicType: 'blue-meets-pink',
    status: 'needs-review',
    dateAdded: '2024-01-01',
  },
  {
    id: 'file-007',
    caseLabel: 'FILE-007',
    title: 'Born To Win — Aiah\'s Anxiety Disclosure',
    imageSrc: '/images/placeholder-file-007.jpg',
    imageAlt: 'BINI in their Born To Win docuseries',
    context: 'BINI\'s three-part docuseries Born To Win. In Chapter 1, Aiah opened up publicly about her struggles with anxiety.',
    observation:
      'The calm one has a complicated relationship with calmness. Aiah\'s composure is something she maintains; it is not the absence of struggle. She said: "If sharing my experience can help someone, then I\'ll do it."',
    significance:
      'For fans, this disclosure reframes every Aiah observation. Her steadiness is not effortless — it is a choice. This makes her grounding role in the pairing more meaningful, not less.',
    tags: ['aiah', 'docuseries', 'anxiety', 'born-to-win', 'vulnerability'],
    sourceLabel: 'Born To Win Docuseries — Chapter 1',
    sourceUrl: null,
    subject: 'aiah',
    dynamicType: 'aiah-grounds-stacey',
    status: 'needs-review',
    dateAdded: '2024-01-01',
  },
  {
    id: 'file-008',
    caseLabel: 'FILE-008',
    title: 'The Shared Role — Both Main Rappers',
    imageSrc: '/images/files/file-008.jpg',
    imageAlt: 'Aiah and Stacey in matching metallic pink holographic outfits performing together on stage',
    context: 'Formal group role documentation. Both Aiah and Stacey carry the title of Main Rapper in BINI — the same tier, in a group of eight, with distinct stylistic approaches.',
    observation:
      'Aiah\'s rap: composed, measured, grounded. Stacey\'s rap: punchy, expressive, energy-driven. Same title. Different expression. This is the artistic dimension of the calm/chaos dynamic.',
    significance:
      'The shared role is what separates Aiahcey from other pairings in the group. They do not merely appear together — they occupy the same musical position with opposite methods. The contrast is structural in the music, not just in the personalities.',
    tags: ['both', 'main-rapper', 'music', 'role', 'artistic-kinship'],
    sourceLabel: 'BINI official member profiles',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'both-as-rappers',
    status: 'verified',
    dateAdded: '2021-06-11',
  },

  // NEW ENTRIES — added from gallery audit June 2026

  {
    id: 'file-009',
    caseLabel: 'FILE-009',
    title: 'Coachella — Matching Cowboy Hats',
    imageSrc: '/images/files/file-009.jpg',
    imageAlt: 'Aiah and Stacey in the back seat of a car, both wearing matching brown cowboy hats and sunglasses, heading to Coachella',
    context: 'In the car en route to Coachella 2026. Both wearing matching brown cowboy hats and sunglasses — Stacey in gingham, Aiah in red. Pre-show selfie on the way to the biggest performance of their careers.',
    observation:
      'Nobody coordinated this. They both arrived at cowboy hats independently for Coachella, and ended up matching. The car photo captures the "same wavelength" principle without a single word exchanged.',
    significance:
      'Fans frequently describe the Aiahcey Effect as things that happen without planning. This is a documented example: two people who did not coordinate their outfits, coordinated their outfits. On their way to Coachella. Together.',
    tags: ['coachella', 'matching', 'travel', '2026', 'cowboy-hats', 'car-selfie'],
    sourceLabel: 'Coachella 2026 documentation',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'blue-meets-pink',
    status: 'needs-review',
    dateAdded: '2026-04-10',
  },
  {
    id: 'file-010',
    caseLabel: 'FILE-010',
    title: 'Here With You — On Stage, Laughing, Hands Joined',
    imageSrc: '/images/files/file-010.jpg',
    imageAlt: 'Aiah and Stacey facing each other on stage, both laughing, hands joined between them',
    context: '"Here With You" SM-branded performance event. Both in performance outfits — Stacey in red/silver sparkle, Aiah in denim with statement necklace. Captured mid-performance, facing each other.',
    observation:
      'They are facing each other. They are laughing. Their hands are joined between them. The audience is visible behind them — this happened in front of people. The performance paused for this.',
    significance:
      'One of the strongest single-frame captures of "The Spark." Proximity, laughter, physical contact — all in one image. "The chemistry is insane" does not require a caption here.',
    tags: ['concert', 'spark', 'laughing', 'hands', 'here-with-you', 'stage'],
    sourceLabel: 'Here With You event (SM Entertainment)',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'stacey-energizes-aiah',
    status: 'needs-review',
    dateAdded: '2025-01-01',
  },
  {
    id: 'file-011',
    caseLabel: 'FILE-011',
    title: 'Back-to-Back — Visual Chemistry, Defined',
    imageSrc: '/images/files/file-011.jpg',
    imageAlt: 'Stacey in teal sequins and Aiah in red sequins, back-to-back on stage, both mid-laugh during a concert',
    context: 'Concert performance — Stacey in teal/green sequined top, Aiah in red sequined outfit. Standing back-to-back facing the audience, both laughing. Photo credit: aiGM lights.',
    observation:
      'Back-to-back. Opposite colors. Both laughing. Nobody is looking at the other. Nobody has to be. This is what "chemistry even without trying" looks like when documented.',
    significance:
      'The most complete single-frame demonstration of the Aiahcey Effect in the gallery: blue meets pink, calm meets chaos, both present and joyful. The contrast is the point and the proof.',
    tags: ['concert', 'visual-chemistry', 'back-to-back', 'laughing', 'spark', 'joint-slayage'],
    sourceLabel: 'Concert fancam (aiGM lights credit)',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'blue-meets-pink',
    status: 'needs-review',
    dateAdded: '2024-01-01',
  },
  {
    id: 'file-012',
    caseLabel: 'FILE-012',
    title: 'Mirror Selfie — The Comfort Photo',
    imageSrc: '/images/files/file-012.jpg',
    imageAlt: 'Mirror selfie at home — Stacey leaning her head into Aiah\'s shoulder while Aiah takes the photo',
    context: 'Casual home setting — stairs and living room visible in mirror. Stacey in white cap and grey sweatpants, head leaning onto Aiah\'s shoulder. Aiah in camo bucket hat and white set, taking the mirror photo. Off-duty, no makeup, fully relaxed.',
    observation:
      'No performance context. No stage. No audience. Stacey is leaning on Aiah like she has nowhere she would rather be. Aiah is taking the photo like this is just Tuesday.',
    significance:
      'The Comfort Duo observation is frequently discussed but rarely documented in this register. This is what it looks like when the dynamic is real rather than performed.',
    tags: ['comfort', 'home', 'casual', 'mirror-selfie', 'silent-comfort', 'off-duty'],
    sourceLabel: 'Personal post (source confirmation pending)',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'aiah-grounds-stacey',
    status: 'needs-review',
    dateAdded: '2025-01-01',
  },
  {
    id: 'file-013',
    caseLabel: 'FILE-013',
    title: 'STEEZY Studio — The TikTok Bond',
    imageSrc: '/images/files/file-013.jpg',
    imageAlt: 'Aiah and Stacey dancing together at STEEZY studio — Stacey in white NY cap, both mid-move',
    context: 'STEEZY dance studio session. Stacey in white jacket with NY cap, Aiah in casual clothes. Both dancing freely in the studio space, no performance pressure.',
    observation:
      'They look like they are having fun. Two main rappers in a dance studio, no audience, no choreography pressure — just dancing.',
    significance:
      'TikTok content is where a lot of this lives — not supplementary, central. The STEEZY session is exactly that: shared movement, shared space, shared energy, no performance pressure.',
    tags: ['dance', 'steezy', 'tiktok-bond', 'casual', 'studio', 'matching-energy'],
    sourceLabel: 'STEEZY studio session',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'both-as-rappers',
    status: 'needs-review',
    dateAdded: '2025-01-01',
  },
  {
    id: 'file-014',
    caseLabel: 'FILE-014',
    title: 'New York City — Walking Together',
    imageSrc: '/images/files/file-014.jpg',
    imageAlt: 'GoPro-style selfie of Aiah and Stacey walking on a New York City street',
    context: 'New York City — GoPro-style wide-angle selfie. Aiah in dark outfit holding the camera, Stacey in a red/maroon top behind her. Both looking at the camera, mid-walk.',
    observation:
      'A busy city, full of strangers. Two people from the Philippines, walking together in New York, completely at ease in each other\'s presence.',
    significance:
      'The Comfort Duo dynamic does not require a Filipino backdrop. International travel documentation: same energy, different timezone.',
    tags: ['new-york', 'travel', 'international', 'off-stage', 'comfort', 'walking'],
    sourceLabel: 'Social media post (source confirmation pending)',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'together',
    status: 'needs-review',
    dateAdded: '2025-01-01',
  },
  {
    id: 'file-015',
    caseLabel: 'FILE-015',
    title: 'Coachella Grounds — Cowboy Era',
    imageSrc: '/images/files/file-015.jpg',
    imageAlt: 'Aiah and Stacey on the Coachella grounds in matching cowboy hats — Aiah in red dress smiling, Stacey in red gingham drinking water',
    context: 'Coachella Valley Music and Arts Festival, April 2026. Both on the grounds in Western-themed outfits — matching brown cowboy hats. Aiah in red, Stacey in red gingham.',
    observation:
      'Both wearing red. Both in cowboy hats. Both looking like they are exactly where they are supposed to be, with exactly who they are supposed to be with.',
    significance:
      'Candid documentation on the actual Coachella grounds. BINI\'s most significant career milestone, experienced side-by-side in matching hats.',
    tags: ['coachella', 'cowboy', 'grounds', '2026', 'milestone', 'matching-energy'],
    sourceLabel: 'Coachella 2026 fan documentation',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'together',
    status: 'needs-review',
    dateAdded: '2026-04-10',
  },
  {
    id: 'file-016',
    caseLabel: 'FILE-016',
    title: 'Coachella — Matching Freak, Documented',
    imageSrc: '/images/files/file-016.jpg',
    imageAlt: 'One giving the other a piggyback outside in California — both laughing, baseball cap and headphones, stop sign in background',
    context: 'Outdoor US setting — stop sign visible, bright California light. One carrying the other on their back while both laugh. Baseball cap and headphones on the one being carried.',
    observation:
      'This is the chaos one might expect from the "Matching Freak" dynamic. The same humor, the same energy, the same willingness to be completely unhinged in the middle of their biggest career moment.',
    significance:
      'The Aiahcey Effect is not just chemistry. It is also comfort at maximum absurdity. This is fan-favorite Aiahcey content: unscripted chaos that reveals how naturally they share the same energy.',
    tags: ['coachella', 'piggyback', 'chaotic', 'matching-freak', 'playful', '2026'],
    sourceLabel: 'Coachella 2026 fan documentation',
    sourceUrl: null,
    subject: 'both',
    dynamicType: 'stacey-energizes-aiah',
    status: 'needs-review',
    dateAdded: '2026-04-10',
  },
];

export default aiahceyFiles;
