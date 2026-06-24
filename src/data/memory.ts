export interface MemoryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  iconic: boolean;
}

export const memoryItems: MemoryItem[] = [
  {
    id: 'memory-1',
    title: 'The Four-Second Clip',
    description: 'Aiah fixing Stacey\'s hair mid-interview. Four seconds. Still being quoted in fan posts three years later.',
    category: 'soft moment',
    date: 'July 2022',
    tags: ['iconic', 'interview', 'tender', 'hair'],
    iconic: true,
  },
  {
    id: 'memory-2',
    title: 'The Whispered Secret',
    description: 'Whatever Aiah whispered that made Stacey lose it on vlive. We will never know. That\'s part of why it matters.',
    category: 'mystery',
    date: 'March 2022',
    tags: ['vlive', 'mystery', 'laughing', 'private'],
    iconic: true,
  },
  {
    id: 'memory-3',
    title: 'Bridge Eye Contact',
    description: 'Two seconds of eye contact across a stage during an emotional bridge. Captured from seventeen fancam angles. Still unforgettable.',
    category: 'concert',
    date: 'December 2022',
    tags: ['concert', 'stage', 'emotional', 'iconic'],
    iconic: true,
  },
  {
    id: 'memory-4',
    title: 'The Chip Incident',
    description: 'She took her chip. Off her plate. While looking her in the eyes. And Aiah let her. Classic Aiahcey.',
    category: 'chaotic',
    date: 'August 2023',
    tags: ['food', 'chaotic', 'funny', 'chip'],
    iconic: false,
  },
  {
    id: 'memory-5',
    title: 'Stacey\'s Handwritten Letter',
    description: '"Remember that time with the elevator." — Stacey, in the birthday letter. Nobody knows the elevator story. Nobody has ever found out.',
    category: 'mystery',
    date: 'October 2024',
    tags: ['birthday', 'letter', 'mystery', 'elevator'],
    iconic: true,
  },
  {
    id: 'memory-6',
    title: 'The Quiet Save',
    description: 'Half a second pause on stage. Aiah already moving. Performance flawless. Nobody in the audience knew. The fancam saw.',
    category: 'performance',
    date: 'February 2024',
    tags: ['concert', 'save', 'teamwork', 'valentines'],
    iconic: true,
  },
  {
    id: 'memory-7',
    title: 'Matching Blazers',
    description: 'Different brands. Nearly identical color. Completely accidental. Both their faces when they saw each other were a full feature film.',
    category: 'fashion',
    date: 'June 2025',
    tags: ['fashion', 'matching', 'funny', 'coincidence'],
    iconic: false,
  },
  {
    id: 'memory-8',
    title: 'The Airport Umbrella',
    description: 'Stacey didn\'t think. Just pivoted, slowed down, held the umbrella over Aiah. Automatic. No announcement. That\'s the thing about this dynamic.',
    category: 'soft moment',
    date: 'April 2023',
    tags: ['airport', 'protective', 'umbrella', 'automatic'],
    iconic: false,
  },
];
