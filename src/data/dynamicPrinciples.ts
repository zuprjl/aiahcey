export interface DynamicPrinciple {
  id: string;
  title: string;
  aiahSide: string;
  staceySide: string;
  explanation: string;
  evidence: string;
  color: 'blue' | 'pink' | 'both';
  icon: 'music' | 'color' | 'animal' | 'energy' | 'history';
}

const dynamicPrinciples: DynamicPrinciple[] = [
  {
    id: 'same-artistic-lane',
    title: 'Same Artistic Lane',
    aiahSide: 'Main Rapper — official designation. Fan-documented style: measured, composed, anchoring.',
    staceySide: 'Main Rapper — official designation. Fan-documented style: expressive, punchy, energy-forward.',
    explanation:
      'Both of them are Main Rappers — same official title, completely different approaches. Aiah is measured and anchoring. Stacey is punchy and explosive. Watch them in the same performance and you feel the contrast immediately. Same rank. Opposite styles. Sharing a stage just works.',
    evidence:
      'At the Grand BINIverse Concert, they were given a shared duo segment — the only duo of the night with a DJ setup. Both as main rappers. Both at the controls.',
    color: 'both',
    icon: 'music',
  },
  {
    id: 'opposite-colors',
    title: 'Glacier Blue × Warm Pink',
    aiahSide: 'Glacier Blue — cool, composed, clear.',
    staceySide: 'Warm Pink — expressive, vibrant, present.',
    explanation:
      'These aren\'t fan-invented colors — Glacier Blue is Aiah\'s official representative color, Warm Pink is Stacey\'s. Management made it official, but honestly it was always obvious. Put them in the same frame and you feel the contrast before you even consciously register it.',
    evidence:
      'The official GrandBINIverse photo series paired them specifically, framing the visual as "DJ skills meet diva vibes" — the blue precision and the pink presence, officially named.',
    color: 'both',
    icon: 'color',
  },
  {
    id: 'dog-and-cat',
    title: '🐶🐱 — The Shorthand',
    aiahSide: '🐶 Dog — loyal, steady, grounding. Always there.',
    staceySide: '🐱 Cat — spirited, self-directed, unpredictable. Always interesting.',
    explanation:
      'This one actually came from official media first. RX931\'s caption for The Deep Dish clip used the 🐶🐱 pairing to describe Aiahcey. Fans didn\'t invent it — we just recognized it immediately and ran. Two emojis that somehow explain years of content.',
    evidence:
      'RX931\'s official caption: "The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱" — verified source.',
    color: 'both',
    icon: 'animal',
  },
  {
    id: 'calm-meets-chaos',
    title: 'Calm Meets Chaos',
    aiahSide: 'Documented: Aiah said she loves Stacey\'s energy. The calm one is drawn to the chaos.',
    staceySide: 'Documented: Stacey says Aiah grounds her. The chaotic one seeks the calm.',
    explanation:
      'Neither side of this is speculation. Aiah said she loves Stacey\'s energy — on air, on record. Stacey said Aiah has a gentle caring side that grounds her — in her own words. They\'ve both pointed at each other. You don\'t have to wonder what this dynamic is. They already told you.',
    evidence:
      '"The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy" (RX931, verified). "She has such a gentle and caring side that really grounds us." (Stacey, source pending).',
    color: 'both',
    icon: 'energy',
  },
  {
    id: 'grown-into-each-other',
    title: 'Grown Into Each Other',
    aiahSide: 'Self-described: shy, awkward, a lone wolf — left Cebu alone at 18 to pursue idol training.',
    staceySide: 'Self-described: "Before, I wasn\'t talkative at all. It was hard, really hard for me to interact and socialize with anyone."',
    explanation:
      'Both of them have said they used to be shy. Aiah: lone wolf, left home at 18 to train in Manila alone. Stacey: "It was hard, really hard for me to interact with anyone." They both built this loudness from something quieter. And then they ended up in the same group. If you wanted to explain why these two specifically click — that\'s part of it.',
    evidence:
      'Aiah: "I was shy and awkward — a lone wolf" (self-described, source pending). Stacey: "Before, I wasn\'t talkative at all" (direct quote, source pending). Both documented in separate interviews.',
    color: 'both',
    icon: 'history',
  },
];

export default dynamicPrinciples;
