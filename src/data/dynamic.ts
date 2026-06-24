export interface DynamicCard {
  id: string;
  pairing: string;
  aiahTrait: string;
  staceyTrait: string;
  description: string;
  longDescription: string;
  color: 'blue' | 'pink' | 'mixed';
  emoji: string;
}

export const dynamicCards: DynamicCard[] = [
  {
    id: 'dynamic-1',
    pairing: 'Quiet × Radiant',
    aiahTrait: 'Still waters',
    staceyTrait: 'Sunlit surface',
    description: 'Aiah is the quiet before the song. Stacey is the song itself. Together they make the kind of silence that sings.',
    longDescription: 'Aiah\'s stillness is not absence — it\'s presence concentrated. She watches, she absorbs, she chooses her moments carefully. Stacey fills every room she enters with warmth and movement and sound. The two of them together are the contrast that makes both more visible. You can\'t fully see the light without something steady beside it.',
    color: 'blue',
    emoji: '🌊',
  },
  {
    id: 'dynamic-2',
    pairing: 'Soft × Playful',
    aiahTrait: 'Tender instinct',
    staceyTrait: 'Chaotic joy',
    description: 'Aiah\'s softness meets Stacey\'s chaos and instead of canceling out, they amplify each other into something entirely new.',
    longDescription: 'Stacey\'s chaos is the kind that invites you in — it\'s not reckless, it\'s alive. And Aiah meets it not by reining it in but by being the soft ground beneath it. You can fall when the person next to you makes falling feel like landing. That\'s the Aiahcey dynamic in its most distilled form.',
    color: 'pink',
    emoji: '🌸',
  },
  {
    id: 'dynamic-3',
    pairing: 'Present × Protective',
    aiahTrait: 'Always noticing',
    staceyTrait: 'Always covering',
    description: 'They take care of each other differently — Aiah notices, Stacey acts. Both are watching. Both are ready.',
    longDescription: 'There\'s a difference between being looked after and being seen. Aiah sees — she catches the pauses, the moments, the things that go unsaid. Stacey acts — the umbrella, the lyric, the hand that reaches. Together they form a closed circuit of care that never needs to announce itself.',
    color: 'mixed',
    emoji: '🛡️',
  },
  {
    id: 'dynamic-4',
    pairing: 'Words × Silence',
    aiahTrait: 'Says everything with her eyes',
    staceyTrait: 'Puts language to what others feel',
    description: 'Stacey names it. Aiah already knew. A communication style perfected over years of proximity.',
    longDescription: 'Watch any interview where they\'re asked about each other. Stacey has paragraphs ready — she articulates what the dynamic is, what it means, how it works. Aiah smiles and says something brief that somehow says more. They are fluent in two different languages and somehow always, always understand each other.',
    color: 'blue',
    emoji: '📝',
  },
  {
    id: 'dynamic-5',
    pairing: 'Gravity × Light',
    aiahTrait: 'The anchor',
    staceyTrait: 'The orbit',
    description: 'Some things stay fixed so other things can move freely. Aiah is the ground. Stacey is everything that dances above it.',
    longDescription: 'This isn\'t about who matters more — it\'s about function. Gravity doesn\'t mean heavy. It means everything finds its way back. Stacey can be bright and loud and everywhere at once because she always knows where the center is. That center is Aiah. And Aiah lets herself be that — not as limitation, but as choice.',
    color: 'mixed',
    emoji: '✨',
  },
];
