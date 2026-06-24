export interface DirectQuote {
  id: string;
  speaker: 'aiah' | 'stacey' | 'sheena' | 'official';
  subject: 'about-stacey' | 'about-aiah' | 'about-dynamic' | 'about-self';
  quote: string;
  context: string;
  date: string | null;
  sourceLabel: string;
  sourceUrl: string | null;
  status: 'verified' | 'needs-review';
}

const directQuotes: DirectQuote[] = [
  {
    id: 'stacey-goosebumps',
    speaker: 'stacey',
    subject: 'about-aiah',
    quote: 'When she sings, it just gives me goosebumps.',
    context: 'Stacey describing the effect of Aiah\'s voice',
    date: null,
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
  },
  {
    id: 'stacey-grounds-us',
    speaker: 'stacey',
    subject: 'about-aiah',
    quote: 'She also has such a gentle and caring side that really grounds us.',
    context: 'Stacey on Aiah\'s role in the group',
    date: null,
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
  },
  {
    id: 'sheena-calm-confident',
    speaker: 'sheena',
    subject: 'about-aiah',
    quote: 'A calm, confident vibe that reassures us when we\'re nervous.',
    context: 'Sheena (fellow BINI member) describing Aiah\'s presence',
    date: null,
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
  },
  {
    id: 'rx931-beauty-of-aiahcey',
    speaker: 'official',
    subject: 'about-dynamic',
    quote: 'The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱',
    context: 'RX931 media caption from The Deep Dish interview, after Aiah spoke about loving Stacey\'s energy on air',
    date: '2025',
    sourceLabel: 'RX931 The Deep Dish Interview (TikTok)',
    sourceUrl: 'https://www.tiktok.com/@rx931/video/7540281305607621895',
    status: 'verified',
  },
  {
    id: 'stacey-not-talkative',
    speaker: 'stacey',
    subject: 'about-self',
    quote: 'Before, I wasn\'t talkative at all. I didn\'t really talk to people. It was hard, really hard for me to interact and socialize with anyone.',
    context: 'Stacey on her childhood shyness, which contrasts with her now-loud persona',
    date: null,
    sourceLabel: 'Interview (source confirmation pending)',
    sourceUrl: null,
    status: 'needs-review',
  },
  {
    id: 'aiah-sharing-experience',
    speaker: 'aiah',
    subject: 'about-self',
    quote: 'If sharing my experience can help someone, then I\'ll do it.',
    context: 'Aiah on the decision to speak publicly about her anxiety',
    date: null,
    sourceLabel: 'Born To Win Docuseries',
    sourceUrl: null,
    status: 'needs-review',
  },
];

export default directQuotes;
