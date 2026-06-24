export interface Moment {
  id: string;
  title: string;
  date: string;
  year: number;
  category: 'funny' | 'soft' | 'chaotic' | 'concert' | 'backstage' | 'friendship';
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  relatedTweetIds: string[];
  featured: boolean;
}

export const moments: Moment[] = [
  {
    id: 'moment-1',
    title: "That Time Stacey Couldn't Stop Laughing",
    date: 'March 15, 2022',
    year: 2022,
    category: 'funny',
    shortDescription: 'During a live broadcast, Stacey completely lost it over something Aiah whispered — and Aiah tried so hard to keep a straight face.',
    fullDescription: 'It started as a perfectly normal vlive. Then Aiah leaned in and whispered something — no one knows what — and Stacey absolutely dissolved. Full body laughing, unable to speak, tears forming in her eyes. Aiah, for her part, tried valiantly to maintain composure while clearly fighting her own smile. The fans watching in real time were convinced they witnessed something sacred. The clip circulated for weeks. To this day, nobody knows the secret.',
    imageSrc: '/images/placeholder-moment-1.jpg',
    imageAlt: 'Stacey laughing uncontrollably during a vlive with Aiah',
    tags: ['vlive', 'laughing', 'secret', 'iconic'],
    relatedTweetIds: ['tweet-1', 'tweet-3'],
    featured: true,
  },
  {
    id: 'moment-2',
    title: "Aiah Quietly Fixing Stacey's Hair",
    date: 'July 8, 2022',
    year: 2022,
    category: 'soft',
    shortDescription: 'Mid-interview, Aiah reached over without a word and tucked Stacey\'s hair behind her ear. Stacey didn\'t even pause her sentence.',
    fullDescription: 'They were mid-interview — Stacey was answering a question about her favorite memory from their debut — when Aiah simply reached over, gentle and unhurried, and fixed a strand of Stacey\'s hair that had fallen across her face. Stacey didn\'t miss a beat in her answer. She didn\'t even acknowledge it. But the camera caught her smile just slightly widening. The clip was 4 seconds long. It broke the internet.',
    imageSrc: '/images/placeholder-moment-2.jpg',
    imageAlt: 'Aiah gently fixing Stacey\'s hair during an interview',
    tags: ['soft', 'interview', 'hair', 'tender', 'iconic'],
    relatedTweetIds: ['tweet-2'],
    featured: true,
  },
  {
    id: 'moment-3',
    title: 'The Concert Glance',
    date: 'December 3, 2022',
    year: 2022,
    category: 'concert',
    shortDescription: 'During the bridge of their most emotional song, their eyes met across the stage. The fancams caught everything.',
    fullDescription: 'It was the Manila concert, the final song of the night, the emotional bridge that always gets fans crying. Stacey was at stage left, Aiah at stage right. And then — just for a moment — they both turned toward each other at the exact same time. The look lasted maybe two seconds. The whole arena seemed to hold its breath. Several fancams captured it from different angles. Each one tells the same story. Fans who were there say the air felt different in that moment.',
    imageSrc: '/images/placeholder-moment-3.jpg',
    imageAlt: 'Aiah and Stacey sharing a look across the stage during concert',
    tags: ['concert', 'stage', 'eye contact', 'emotional', 'manila'],
    relatedTweetIds: ['tweet-4'],
    featured: true,
  },
  {
    id: 'moment-4',
    title: "Stacey Protecting Aiah from the Rain",
    date: 'April 20, 2023',
    year: 2023,
    category: 'friendship',
    shortDescription: 'Airport footage showed Stacey immediately pulling Aiah under her umbrella, walking slightly slower so Aiah wouldn\'t get wet.',
    fullDescription: 'It was raining at the airport. Fan-taken footage shows the group walking out — and Stacey, who had the umbrella, pivoting almost instinctively to cover Aiah. She slowed her pace, angled the umbrella specifically so Aiah would be fully sheltered, and continued talking like nothing happened. Aiah glanced up at the umbrella, then at Stacey, and kept walking. Fans spent three days analyzing the footage frame by frame.',
    imageSrc: '/images/placeholder-moment-4.jpg',
    imageAlt: 'Stacey holding umbrella over Aiah at the airport',
    tags: ['airport', 'umbrella', 'rain', 'protective', 'sweet'],
    relatedTweetIds: ['tweet-5'],
    featured: false,
  },
  {
    id: 'moment-5',
    title: 'The Simultaneous Snack Reach',
    date: 'August 11, 2023',
    year: 2023,
    category: 'chaotic',
    shortDescription: 'Both reached for the same chip at the exact same moment during a group eating show. Neither backed down.',
    fullDescription: 'The group was doing a mukbang-style content shoot. The camera was rolling. Both Aiah and Stacey reached for the same chip — the exact same chip, at the exact same time — and froze. Then Stacey slowly withdrew her hand. Then immediately reached for Aiah\'s chip off Aiah\'s plate. Aiah\'s face cycled through disbelief, exasperation, and fond resignation in under two seconds. It\'s a three-act play in six seconds of footage.',
    imageSrc: '/images/placeholder-moment-5.jpg',
    imageAlt: 'Aiah and Stacey reaching for the same snack simultaneously',
    tags: ['food', 'chaotic', 'funny', 'eating show', 'competitive'],
    relatedTweetIds: ['tweet-1'],
    featured: false,
  },
  {
    id: 'moment-6',
    title: "Aiah Whispering Lyrics to Stacey Mid-Performance",
    date: 'February 14, 2024',
    year: 2024,
    category: 'backstage',
    shortDescription: 'Fancam footage caught Aiah quietly mouthing the next lyrics to Stacey during a live performance when Stacey briefly froze.',
    fullDescription: 'During a Valentine\'s Day performance, Stacey appeared to momentarily lose her place in the choreography — just a split-second pause. Before anyone in the crowd could notice, Aiah was already there, standing close, mouthing the lyrics. Stacey picked up immediately and the performance continued flawlessly. The whole exchange lasted four seconds. The fancam that captured it has millions of views. Fans called it the "quietest save."',
    imageSrc: '/images/placeholder-moment-6.jpg',
    imageAlt: 'Aiah quietly mouthing lyrics to Stacey on stage',
    tags: ['performance', 'lyrics', 'save', 'teamwork', 'valentines'],
    relatedTweetIds: ['tweet-6'],
    featured: true,
  },
  {
    id: 'moment-7',
    title: "Stacey's Surprise Birthday Message for Aiah",
    date: 'October 27, 2024',
    year: 2024,
    category: 'soft',
    shortDescription: 'Stacey posted a long, handwritten birthday message for Aiah that referenced moments only they would know.',
    fullDescription: 'On Aiah\'s birthday, instead of the usual social media post, Stacey shared a photo of a handwritten letter. It was long — three paragraphs — and full of inside references that fans spent weeks decoding. Lines like "remember that time with the elevator" and "you always know when I need you to say nothing." Aiah\'s reply was a single heart emoji. Then she screenshotted Stacey\'s post and added it to her own story. Fans consider this the definitive Aiahcey document.',
    imageSrc: '/images/placeholder-moment-7.jpg',
    imageAlt: 'Stacey\'s handwritten birthday letter for Aiah',
    tags: ['birthday', 'letter', 'handwritten', 'soft', 'emotional'],
    relatedTweetIds: ['tweet-2', 'tweet-6'],
    featured: true,
  },
  {
    id: 'moment-8',
    title: "The Matching Outfits Nobody Planned",
    date: 'June 5, 2025',
    year: 2025,
    category: 'funny',
    shortDescription: 'They showed up to an event in nearly identical outfits. Neither knew. The photos side by side became a meme.',
    fullDescription: 'For a low-key industry event, Aiah wore a powder blue blazer with white details. Stacey wore a pale blue blazer — different cut, different brand, but nearly the same color and energy. They arrived separately. When they saw each other, both pointed. Fan photos from the red carpet show them standing next to each other, looking simultaneously mortified and delighted. The side-by-side comparison photo circulated for months. Their stylist teams released a joint statement clarifying it was completely unplanned. Nobody believed them.',
    imageSrc: '/images/placeholder-moment-8.jpg',
    imageAlt: 'Aiah and Stacey in accidental matching outfits at an event',
    tags: ['matching outfits', 'funny', 'coincidence', 'fashion', 'event'],
    relatedTweetIds: ['tweet-3', 'tweet-5'],
    featured: false,
  },
];
