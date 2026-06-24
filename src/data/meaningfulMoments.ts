export type MomentCategory = 'concert' | 'interview' | 'travel' | 'backstage' | 'reaction-capture' | 'daily' | 'milestone';
export type DynamicType =
  | 'aiah-grounds-stacey'
  | 'stacey-energizes-aiah'
  | 'both-as-rappers'
  | 'blue-meets-pink'
  | 'watcher-moment'
  | 'together';

export interface MeaningfulMoment {
  id: string;
  title: string;
  date: string;
  year: number;
  whatHappened: string;
  whatItReveals: string;
  whyFansCare: string;
  category: MomentCategory;
  dynamicType: DynamicType;
  imageSrc: string;
  imageAlt: string;
  relatedQuoteIds: string[];
  sourceLabel: string | null;
  sourceUrl: string | null;
  status: 'verified' | 'needs-review';
  featured: boolean;
}

const meaningfulMoments: MeaningfulMoment[] = [
  {
    id: 'grand-biniverse-dj-duo',
    title: 'The DJ Duo at Grand BINIverse',
    date: 'November 16, 2024',
    year: 2024,
    whatHappened:
      'At the Grand BINIverse Concert at Araneta Coliseum — BINI\'s largest concert at the time — Aiah and Stacey shared a duo production segment, performing "Lose My Breath" by Destiny\'s Child as DJs. The official BINI caption: "When DJ skills meet diva vibes."',
    whatItReveals:
      'Out of eight members, production chose these two for the duo segment. Not just proximity — a scripted, designed moment built around their specific contrast. DJ Aiah, measured and composed. DJ Stacey, expressive and electric. Paired on purpose.',
    whyFansCare:
      'This is the biggest, most officially staged Aiahcey moment on record. Official caption. Official photos. Multiple fancams. And the song they performed was "Lose My Breath." Fans noticed. The production picked that pairing, that song, and acknowledged what everyone had already been watching.',
    category: 'concert',
    dynamicType: 'both-as-rappers',
    imageSrc: '/images/moments/grand-biniverse-dj.jpg',
    imageAlt: 'Aiah and Stacey performing together at the Grand BINIverse Concert',
    relatedQuoteIds: ['rx931-beauty-of-aiahcey'],
    sourceLabel: 'Grand BINIverse Concert, Araneta Coliseum — November 2024',
    sourceUrl: 'https://www.youtube.com/watch?v=nWtunfmUIlA',
    status: 'verified',
    featured: true,
  },
  {
    id: 'rx931-deep-dish-interview',
    title: 'The RX931 Deep Dish Interview',
    date: '2025',
    year: 2025,
    whatHappened:
      'During an interview on RX931\'s The Deep Dish, Aiah expressed her love for Stacey\'s energy on air. The media outlet captured this as a defining moment and published it with the caption: "The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱."',
    whatItReveals:
      'The calm one doesn\'t just tolerate the chaos — she loves it. Aiah said so, on air. That one line reframes every clip you\'ve ever watched of them together. It\'s not fan projection. She told you.',
    whyFansCare:
      'This is the quote I come back to every time. Aiah said it on air — her own words, on record. The official caption even put 🐶🐱 together, and fans ran with it from there.',
    category: 'interview',
    dynamicType: 'stacey-energizes-aiah',
    imageSrc: '/images/moments/rx931-interview.jpg',
    imageAlt: 'Aiah and Stacey at a radio station with headphones and mics, mid-banter, both pointing at each other',
    relatedQuoteIds: ['rx931-beauty-of-aiahcey', 'stacey-grounds-us'],
    sourceLabel: 'RX931 The Deep Dish Interview',
    sourceUrl: 'https://www.tiktok.com/@rx931/video/7540281305607621895',
    status: 'verified',
    featured: true,
  },
  {
    id: 'coachella-first-batch',
    title: 'First Batch to Coachella',
    date: 'April 2026',
    year: 2026,
    whatHappened:
      'Aiah, Stacey, Gwen, and Maloi departed as the first batch of BINI members heading to Coachella 2026, where BINI became the first Filipino act to perform at the festival. Documented on the Philippines Airlines flight in business class: pink-hair Stacey and braided Aiah, seated across from each other.',
    whatItReveals:
      'The biggest performance of BINI\'s career, and these two were on the same flight. Pink hair Stacey and braided Aiah, captured in the same frame on the way to something historic.',
    whyFansCare:
      'Coachella 2026 is BINI\'s landmark moment — first Filipino act to perform there. The departure photo has weight because of that. Two of them, together, at the start of something that will only ever happen once.',
    category: 'milestone',
    dynamicType: 'together',
    imageSrc: '/images/moments/coachella-departure.jpg',
    imageAlt: 'Stacey with pink hair and Aiah with braids seated in Philippines Airlines business class en route to Coachella 2026',
    relatedQuoteIds: [],
    sourceLabel: 'Coachella 2026 Coverage',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'stacey-grounds-interview',
    title: '"She Really Grounds Us"',
    date: '2024–2025',
    year: 2024,
    whatHappened:
      'In an interview, Stacey described Aiah as having "a gentle and caring side that really grounds us."',
    whatItReveals:
      '"Grounds" is Stacey\'s word, not ours. She chose it. And honestly she described it more accurately than any fan essay I\'ve read.',
    whyFansCare:
      'When fans say "Aiah grounds Stacey," they\'re quoting Stacey back to herself. That\'s why this moment matters.',
    category: 'interview',
    dynamicType: 'aiah-grounds-stacey',
    imageSrc: '/images/moments/stacey-interview-grounds.jpg',
    imageAlt: 'Aiah and Stacey in a radio interview together — the setting where their dynamic is most naturally documented',
    relatedQuoteIds: ['stacey-grounds-us', 'sheena-calm-confident'],
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'grandbiniverse-photo-series',
    title: 'GrandBINIverse Official Duo Photo Series',
    date: 'November 2024',
    year: 2024,
    whatHappened:
      'The official BINI channels released a photo series pairing Stacey and Aiah as the duo from the Grand BINIverse concert. Caption: "When DJ skills meet diva vibes."',
    whatItReveals:
      'Blue and pink, together, framed deliberately in official photos. The caption — "DJ skills meet diva vibes" — is exactly the language fans had been using for years. Management saw it too.',
    whyFansCare:
      'Official photography. Official caption. The exact words fans had been saying, now in print from the source. Sometimes the validation just lands.',
    category: 'concert',
    dynamicType: 'blue-meets-pink',
    imageSrc: '/images/moments/gbv-cinematic.jpg',
    imageAlt: 'Cinematic side-profile stage shot — Aiah in silver top, Stacey partially visible behind her, GBV concert',
    relatedQuoteIds: ['rx931-beauty-of-aiahcey'],
    sourceLabel: 'BINI Official — GrandBINIverse Photo Series',
    sourceUrl: 'https://www.instagram.com/p/DCtH5X7yZaD/',
    status: 'verified',
    featured: false,
  },
  {
    id: 'goosebumps-confession',
    title: '"It Just Gives Me Goosebumps"',
    date: '2024–2025',
    year: 2024,
    whatHappened:
      'In an interview, Stacey said of Aiah: "When she sings, it just gives me goosebumps."',
    whatItReveals:
      'Stacey isn\'t usually the one saying quiet, specific things about how someone makes her feel. When she does, and it\'s about Aiah\'s voice, people notice. It\'s the dynamic in reverse — the expressive one being moved by the composed one.',
    whyFansCare:
      'This isn\'t something Stacey would just say for content. The specificity is what makes it land. Goosebumps. Her word.',
    category: 'interview',
    dynamicType: 'watcher-moment',
    imageSrc: '/images/moments/stacey-behind-aiah-backstage.jpg',
    imageAlt: 'Stacey standing behind a seated Aiah backstage, smiling broadly — the warm dynamic in a quiet moment',
    relatedQuoteIds: ['stacey-goosebumps'],
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
    featured: false,
  },
  {
    id: 'coachella-cowboy-hats',
    title: 'Matching Cowboy Hats — Coachella',
    date: 'April 2026',
    year: 2026,
    whatHappened:
      'En route to Coachella 2026, Aiah and Stacey were photographed in the car together — both wearing matching brown cowboy hats and sunglasses, in coordinating red outfits. Neither planned to match. They both showed up in cowboy hats.',
    whatItReveals:
      'People talk about Aiahcey\'s "matching energy" all the time. This is what it actually looks like: two people who didn\'t plan to match, matching. For Coachella. On the way to the biggest show of their careers.',
    whyFansCare:
      'Nobody coordinated this. They both just showed up in cowboy hats. If you needed proof that the matching energy isn\'t a performance — here it is.',
    category: 'travel',
    dynamicType: 'blue-meets-pink',
    imageSrc: '/images/moments/coachella-cowboy-car.jpg',
    imageAlt: 'Aiah and Stacey in the backseat of a car in matching brown cowboy hats, sunglasses on, heading to Coachella',
    relatedQuoteIds: [],
    sourceLabel: 'Coachella 2026 documentation',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'stage-back-to-back-laugh',
    title: 'Back-to-Back — Visual Chemistry, Defined',
    date: '2024',
    year: 2024,
    whatHappened:
      'During a concert performance, Aiah and Stacey stood back-to-back on stage — Stacey in teal/green sequins, Aiah in red sequins — both laughing at the same moment. Neither was looking at the other. Neither had to.',
    whatItReveals:
      'The whole Aiahcey thing in one frame: they don\'t need to look at each other. Back-to-back, opposite colors, both laughing — the chemistry doesn\'t require interaction. It just exists.',
    whyFansCare:
      'When I try to explain Aiahcey to someone who hasn\'t seen it, this is the photo I send. Everything is in it — the contrast, the joy, the complete absence of effort. One frame.',
    category: 'concert',
    dynamicType: 'both-as-rappers',
    imageSrc: '/images/moments/stage-back-to-back.jpg',
    imageAlt: 'Stacey in teal sequins and Aiah in red sequins, standing back-to-back on stage, both laughing during a concert',
    relatedQuoteIds: [],
    sourceLabel: 'Concert fancam (aiGM lights credit)',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'the-look',
    title: 'The Look',
    date: '2024',
    year: 2024,
    whatHappened:
      'A captured moment at an event — Aiah and Stacey in the same frame, the particular way one of them is looking at the other. The kind of photo fans share without needing to explain it.',
    whatItReveals:
      'Some moments don\'t need context. This is one of those photos where the image does all the work.',
    whyFansCare:
      'Fans keep this one in their camera rolls. You\'ll understand when you see it.',
    category: 'backstage',
    dynamicType: 'watcher-moment',
    imageSrc: '/images/moments/event-the-look.jpg',
    imageAlt: 'Aiah and Stacey at an event — the particular way one is looking at the other',
    relatedQuoteIds: [],
    sourceLabel: null,
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'aiahcey-effect-captured',
    title: 'Same Frame. Different Energy. Zero Effort.',
    date: '2024–2025',
    year: 2024,
    whatHappened:
      'At a concert, Aiah and Stacey stood side-by-side in matching gold feather outfits — not interacting, not performing a moment together, just existing in the same frame. Fans screenshot it anyway.',
    whatItReveals:
      'This is the thesis. The Aiahcey Effect is not produced by interaction. It does not require a look, a touch, or a shared line. This photo is proof: they are standing next to each other. That is the whole content. And it is enough.',
    whyFansCare:
      'The Canon document says it plainly: "They don\'t have to do anything. They just have to exist next to each other." This is the photo that proves it.',
    category: 'concert',
    dynamicType: 'blue-meets-pink',
    imageSrc: '/images/moments/aiahcey-effect-stage.jpg',
    imageAlt: 'Aiah and Stacey in matching gold feather concert outfits, side-by-side, not interacting — the Aiahcey Effect captured still',
    relatedQuoteIds: [],
    sourceLabel: 'Concert documentation',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'fan-lens-the-lean',
    title: 'The Lean — What Fan Cameras Catch',
    date: '2024–2025',
    year: 2024,
    whatHappened:
      'Mid-concert, Stacey (pink hair era) leaned in very close toward Aiah from behind — captured by a fan photographer in the crowd. This is the kind of moment that happens in a second and disappears. A fan camera caught it.',
    whatItReveals:
      'There is a whole category of Aiahcey content that exists because fans are watching more carefully than the main cameras. This is why Starphrodites say the fandom rewards close attention.',
    whyFansCare:
      'Casual viewers miss this. Fan photographers catch it. That is the difference between watching BINI and being a Starphrodite.',
    category: 'concert',
    dynamicType: 'stacey-energizes-aiah',
    imageSrc: '/images/moments/stacey-leans-stage.jpg',
    imageAlt: 'Stacey with pink hair leaning very close toward Aiah from behind on stage — a fan lens capture',
    relatedQuoteIds: [],
    sourceLabel: 'Fan concert photography (alahchu credit)',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
  {
    id: 'coachella-airport-departure',
    title: 'Airport Night — Pushing Toward Something Historic',
    date: 'April 2026',
    year: 2026,
    whatHappened:
      'The night before Coachella 2026 departure, Aiah and Stacey were photographed at the airport from behind — both pushing luggage carts down the terminal. Stacey\'s iconic pink suitcase is visible.',
    whatItReveals:
      'This is the quiet before the biggest moment of their careers. Shot from behind, luggage in hand, walking toward something. The pink suitcase is unmistakable.',
    whyFansCare:
      'Coachella 2026 will always be BINI\'s landmark. This is the airport photo. Both of them, walking toward it together.',
    category: 'milestone',
    dynamicType: 'together',
    imageSrc: '/images/moments/coachella-airport.jpg',
    imageAlt: 'Aiah and Stacey from behind at an airport, pushing luggage carts — Stacey\'s pink suitcase visible, heading to Coachella 2026',
    relatedQuoteIds: [],
    sourceLabel: 'Coachella 2026 fan documentation',
    sourceUrl: null,
    status: 'needs-review',
    featured: true,
  },
];

export default meaningfulMoments;
