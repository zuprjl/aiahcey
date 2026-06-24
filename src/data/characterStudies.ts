export interface CharacterStudy {
  id: 'aiah' | 'stacey';
  name: string;
  fullName: string;
  role: string;
  color: 'blue' | 'pink';
  representativeColor: string;
  hexColor: string;
  birthdate: string;
  birthOrder: string;
  coreTraits: string[];
  whoSheIs: string;
  hiddenDepth: string;
  groupRole: string;
  partnerSays: string;
  partnerSaysContext: string;
  partnerSaysSource: string;
  partnerSaysStatus: 'verified' | 'needs-review';
  backstory: string;
  selfQuote: string;
  selfQuoteContext: string;
  selfQuoteSource: string;
  selfQuoteStatus: 'verified' | 'needs-review';
  portraitSrc: string;
  portraitAlt: string;
}

const characterStudies: CharacterStudy[] = [
  {
    id: 'aiah',
    name: 'Aiah',
    fullName: 'Maraiah Queen Arceta',
    role: 'Main Rapper · Visual · Eldest Member',
    color: 'blue',
    representativeColor: 'Glacier Blue',
    hexColor: '#87BFDA',
    birthdate: 'January 27, 2001',
    birthOrder: 'Eldest member',
    coreTraits: ['Calm', 'Grounding', 'Eloquent', 'Introspective', 'Safe Space', 'Quiet Strength', 'Responsible', 'Caring'],
    whoSheIs:
      'Stacey has described Aiah as having "a gentle and caring side that really grounds us." Sheena said she brings "a calm, confident vibe that reassures us when we\'re nervous." So this isn\'t fans projecting — her own members say it. The word that keeps coming up from everyone who watches her closely is "safe place." She speaks carefully, listens more than she performs. You feel her presence more than you hear it.',
    hiddenDepth:
      'The composure isn\'t effortless — and she\'s actually said so. In Born To Win, she talked about her anxiety. Her own words: "If sharing my experience can help someone, then I\'ll do it." She also described her younger self as a lone wolf who left Cebu at 18, alone, to train in Manila. The steadiness you see now? She built that. It\'s not her resting state. She also runs Aiahdvocacy, a yearly charity project she keeps pretty quiet about.',
    groupRole: 'The group\'s documented safe place. The quiet emotional anchor. The eldest who cares without making it a performance.',
    partnerSays: 'I love Stacey\'s energy.',
    partnerSaysContext: 'Aiah, speaking about Stacey on-air — documented by RX931 as "Aiah expresses her love for Stacey\'s energy"',
    partnerSaysSource: 'RX931 The Deep Dish Interview (TikTok)',
    partnerSaysStatus: 'verified',
    backstory:
      'Grew up in Cebu holding five beauty queen titles, including Miss Silka Philippines 2018 — a background that trained public composure before BINI gave her a stage. Left home at 18, alone, to pursue idol training in Manila. She described her younger self as shy and awkward, a self-described lone wolf. BINI gave her a group. She became its eldest.',
    selfQuote: 'If sharing my experience can help someone, then I\'ll do it.',
    selfQuoteContext: 'On opening up about her anxiety — Born To Win Docuseries',
    selfQuoteSource: 'Born To Win Docuseries',
    selfQuoteStatus: 'needs-review',
    portraitSrc: '/images/files/file-005.jpg',
    portraitAlt: 'Aiah backstage — the composure before the stage',
  },
  {
    id: 'stacey',
    name: 'Stacey',
    fullName: 'Lindtsey Stacey Aubrey Sevilleja',
    role: 'Main Rapper · Lead Dancer · 5th Member',
    color: 'pink',
    representativeColor: 'Warm Pink',
    hexColor: '#E8A0B0',
    birthdate: 'July 13, 2003',
    birthOrder: '5th eldest member',
    coreTraits: ['Energetic', 'Playful', 'Unapologetic', 'Chaotic', 'Feminine', 'Funny', 'Loud', 'Pink'],
    whoSheIs:
      'Stacey is the Pink Princess of BINI — that\'s actually official, BINI\'s own channels have used that phrase. But more than that, it\'s genuinely true. She grew up on Barbie, Bratz, and Care Bears and never tried to outgrow any of it. The kikay energy isn\'t a character she plays. It\'s just who she is. She\'s the loudest presence in a group that is not quiet, and she knows exactly what she\'s doing.',
    hiddenDepth:
      'Here\'s the thing people miss: the chaos outside doesn\'t match the inside. Behind the loud, explosive energy is reportedly one of the most disciplined members privately — prayerful, tidy, organized. And she\'s actually talked about where she started: "Before, I wasn\'t talkative at all. I didn\'t really talk to people. It was hard, really hard for me to interact and socialize with anyone." The loudest one in the room used to be the quietest. That\'s not a small detail.',
    groupRole: 'The spark. The one who brings energy into every room. The documented pink presence that makes BINI\'s Warm Pink more than a color.',
    partnerSays: 'When she sings, it just gives me goosebumps.',
    partnerSaysContext: 'Stacey describing the effect of Aiah\'s voice in an interview',
    partnerSaysSource: 'Interview (source confirmation pending)',
    partnerSaysStatus: 'needs-review',
    backstory:
      'Grew up loving all things pink and feminine — Barbie, Bratz, Care Bears — and made no attempt to outgrow it. Describes her childhood self as quiet and avoidant of social interaction. Became, through BINI, one of its loudest and most recognizable presences. The pink aesthetic was always there. The loud confidence was built.',
    selfQuote: 'Before, I wasn\'t talkative at all. I didn\'t really talk to people. It was hard, really hard for me to interact and socialize with anyone.',
    selfQuoteContext: 'On her childhood shyness — in direct contrast to who she became',
    selfQuoteSource: 'Interview (source confirmation pending)',
    selfQuoteStatus: 'needs-review',
    portraitSrc: '/images/files/file-006.jpg',
    portraitAlt: 'Stacey in a white fluffy outfit beside Aiah — pink presence, full kikay energy',
  },
];

export default characterStudies;
