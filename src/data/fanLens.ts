export interface FanObservation {
  id: string;
  title: string;
  description: string;
  casualViewerSees: string;
  fansSee: string;
  documentedIn: string;
  relatedMomentIds: string[];
  status: 'verified' | 'needs-review';
}

const fanObservations: FanObservation[] = [
  {
    id: 'the-way-aiah-watches',
    title: 'The Way Aiah Watches',
    description:
      'Nobody told me to watch Aiah\'s face when Stacey is being chaotic nearby. I just started noticing it. There\'s something specific in how she looks — warmer than normal group awareness, more directed. Pay attention once and you can\'t stop looking for it.',
    casualViewerSees: 'A group member reacting to something funny.',
    fansSee:
      'Aiah watching Stacey specifically — with something softer in her expression than just polite attention. Once you see the difference, you can\'t unsee it.',
    documentedIn: 'Concert fancams, variety show reactions, interview B-roll — no single clip, but you\'ll recognize it the moment it happens.',
    relatedMomentIds: ['grand-biniverse-dj-duo'],
    status: 'needs-review',
  },
  {
    id: 'staceys-gravity',
    title: "Stacey Ends Up Next to Aiah",
    description:
      'Nobody\'s staging this. But in airport footage, backstage clips, group interviews — wherever Stacey can choose where to stand, she tends to end up near Aiah. Notice it once and you start looking for it in every video. It\'s one of those things that\'s hard to explain and almost impossible to unsee.',
    casualViewerSees: 'Group members standing near each other.',
    fansSee:
      'Stacey drifting toward Aiah whenever nobody\'s telling her where to be. Every. Single. Time.',
    documentedIn: 'Airport footage, backstage clips, group interview B-roll — the pattern shows up anywhere staging isn\'t assigned.',
    relatedMomentIds: ['coachella-first-batch'],
    status: 'needs-review',
  },
  {
    id: 'dog-and-cat-symbol',
    title: 'The 🐶🐱 — It Came From Official Media',
    description:
      'This one actually started in an official caption. RX931 used 🐶🐱 to describe Aiahcey in The Deep Dish clip: "The beauty of AiahCey — where Aiah expresses her love for Stacey\'s energy 🐶🐱." Fans didn\'t invent it. We just recognized it immediately and ran.',
    casualViewerSees: 'Two emojis in a TikTok caption.',
    fansSee:
      'Shorthand for the whole dynamic. Dog: loyal, steady, always there. Cat: spirited, self-directed, unpredictable. Two emojis that somehow explain years of content.',
    documentedIn: 'RX931 TikTok caption — verified, source link available.',
    relatedMomentIds: ['rx931-deep-dish-interview'],
    status: 'verified',
  },
  {
    id: 'main-rapper-kinship',
    title: 'They\'re Both Main Rappers',
    description:
      'Here\'s the thing a lot of casual viewers miss: they share the same official title in BINI. Both Main Rappers. And they do it completely differently — Aiah is measured and composed, Stacey is punchy and explosive. The GBV concert gave them a whole duo segment together, both at the DJ controls. That wasn\'t random.',
    casualViewerSees: 'Two members performing together.',
    fansSee:
      'Two Main Rappers — same rank, completely opposite energy — sharing one stage. The contrast isn\'t just personality. It\'s built into the music.',
    documentedIn: 'Grand BINIverse DJ duo performance (fancam on YouTube). Official BINI member profiles confirm both as Main Rapper.',
    relatedMomentIds: ['grand-biniverse-dj-duo', 'grandbiniverse-photo-series'],
    status: 'verified',
  },
  {
    id: 'grounding-language',
    title: 'Stacey Named It First',
    description:
      'Stacey described Aiah as having "a gentle and caring side that really grounds us." She chose that word — grounds. So when people say "Aiah grounds Stacey," they\'re not making things up. They\'re quoting her back to herself. The source is pending, but the quote exists.',
    casualViewerSees: 'A group member saying something nice about another in an interview.',
    fansSee:
      'Confirmation that the grounding dynamic isn\'t fan projection. Stacey named it. We just noticed.',
    documentedIn: 'Stacey interview — quote exists, specific video source still being located.',
    relatedMomentIds: ['stacey-grounds-interview'],
    status: 'needs-review',
  },
  {
    id: 'quiet-contradiction',
    title: 'Neither of Them Is What They Look Like',
    description:
      'The Stacey you see — loud, chaotic, the energy in every room — is reportedly one of the most disciplined people privately: prayerful, tidy, organized. Meanwhile Aiah — the composed, steady one — opened up about anxiety in Born To Win. The exterior isn\'t the full story for either of them. Once you know this, the way they fit together makes a completely different kind of sense.',
    casualViewerSees: 'A calm member and a loud member.',
    fansSee:
      'Two people whose visible personalities are the opposite of their private ones — in ways that mirror each other perfectly. That\'s not a coincidence. That\'s why it works.',
    documentedIn: 'Aiah: Born To Win Docuseries, Chapter 1. Stacey: interview characterizations (source pending).',
    relatedMomentIds: [],
    status: 'needs-review',
  },
];

export default fanObservations;
