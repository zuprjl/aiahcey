export interface TweetRecord {
  id: string;
  title: string;
  authorName: string;
  handle: string;
  tweetUrl: string | null;
  date: string;
  excerpt: string;
  context: string;
  tags: string[];
  status: 'approved' | 'needs-review';
}

export const tweets: TweetRecord[] = [
  {
    id: 'tweet-1',
    title: 'The Chip Incident Breakdown',
    authorName: 'aiahcey archivist',
    handle: '@aiahceyarchive',
    tweetUrl: 'https://twitter.com/aiahceyarchive/status/example1',
    date: 'August 12, 2023',
    excerpt: 'stacey really looked aiah in the eyes and took her chip. aiah\'s face said "i can\'t believe you" but her smile said "i\'d let you do it again"',
    context: 'Posted the morning after the mukbang content dropped. Went viral within hours. The original tweet spawned a 47-reply thread analyzing every second of the clip.',
    tags: ['mukbang', 'chaotic', 'viral', 'chip incident'],
    status: 'approved',
  },
  {
    id: 'tweet-2',
    title: 'Aiah Hair Moment Analysis Thread',
    authorName: 'softgirlanalytics',
    handle: '@softgirlanalytics',
    tweetUrl: 'https://twitter.com/softgirlanalytics/status/example2',
    date: 'July 9, 2022',
    excerpt: 'THREAD: aiah fixing stacey\'s hair mid-interview is the most "we\'ve been through things together" gesture i have ever witnessed in my life and i will not elaborate',
    context: 'The tweet that started a 15-part thread examining the gesture\'s placement during the specific interview question about debut memories. Screenshots attached.',
    tags: ['interview', 'soft', 'analysis', 'hair moment', 'thread'],
    status: 'approved',
  },
  {
    id: 'tweet-3',
    title: 'Matching Outfits Meme Tweet',
    authorName: 'ppopfashionwatch',
    handle: '@ppopfashionwatch',
    tweetUrl: null,
    date: 'June 6, 2025',
    excerpt: 'aiah and stacey showing up in matching outfits "by accident" is the most married thing i\'ve ever seen. the stylist teams know.',
    context: 'This tweet reportedly got thousands of likes before the account went private. The original screenshot was saved by multiple fan accounts. URL needs verification.',
    tags: ['matching outfits', 'fashion', 'funny', 'iconic'],
    status: 'needs-review',
  },
  {
    id: 'tweet-4',
    title: 'The Concert Glance Fancam Drop',
    authorName: 'pinkblueforever',
    handle: '@pinkblueforever',
    tweetUrl: 'https://twitter.com/pinkblueforever/status/example4',
    date: 'December 4, 2022',
    excerpt: 'i was in the arena. i was there. i SAW it. the look during the bridge. nothing prepared me for that. nothing will ever prepare me for anything again.',
    context: 'Posted immediately after the Manila concert ended, from someone who attended in person. The tweet is accompanied by a shaky but clear fancam video capturing the glance from the floor section.',
    tags: ['concert', 'manila', 'fancam', 'live', 'emotional'],
    status: 'approved',
  },
  {
    id: 'tweet-5',
    title: 'Airport Umbrella Moment Thread',
    authorName: 'aiahceymoments',
    handle: '@aiahceymoments',
    tweetUrl: null,
    date: 'April 21, 2023',
    excerpt: 'the way stacey slowed down specifically so aiah would be fully covered. she didn\'t even think about it. it was automatic. that\'s what gets me.',
    context: 'Part of a longer thread with frame-by-frame screenshots of the airport footage. The account has since been deactivated; URL unverifiable. Screenshots of the thread are saved in the fan discord.',
    tags: ['airport', 'umbrella', 'protective', 'analysis'],
    status: 'needs-review',
  },
  {
    id: 'tweet-6',
    title: 'The Quiet Save Reaction Thread',
    authorName: 'stagemagicwatcher',
    handle: '@stagemagicwatcher',
    tweetUrl: 'https://twitter.com/stagemagicwatcher/status/example6',
    date: 'February 15, 2024',
    excerpt: 'aiah saw stacey pause for one half of one second and was already moving. already there. already helping. without being asked. without making it a thing. that\'s the whole story.',
    context: 'Posted with a slowed-down version of the fancam clip showing the exact moment Aiah moves toward Stacey. The thread has 200+ replies from fans sharing their own observations.',
    tags: ['performance', 'stage', 'save', 'valentines', 'analysis'],
    status: 'approved',
  },
];
