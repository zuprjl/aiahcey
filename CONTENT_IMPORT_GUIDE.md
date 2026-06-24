# AIAHCEY Content Import Guide

This guide explains how to add real content to the archive.

---

## 1. Replacing Placeholder Images with Real Photos

All images go in the `public/images/` directory.

**Path conventions:**
- Moments: `public/images/moment-[id].jpg` (e.g. `moment-1.jpg`)
- Gallery: `public/images/gallery-[number].jpg`
- Timeline: `public/images/timeline-[number].jpg`

**Recommended dimensions:**
- Moment images: 800×600px (4:3 ratio)
- Gallery items: 600×600px to 600×900px (portrait preferred for masonry)
- Timeline thumbnails: 200×200px
- Hero polaroids: 400×400px

**To replace a placeholder:**
1. Add your image to `public/images/`
2. Open `src/data/moments.ts` (or gallery.ts / timeline.ts)
3. Change `imageSrc: '/images/placeholder-moment-1.jpg'` to `imageSrc: '/images/your-actual-file.jpg'`
4. Update `imageAlt` to a descriptive string

The `PolaroidFrame` and `MomentCard` components automatically render a colored gradient div for any `src` starting with `/images/placeholder`. Real image paths will render as `<img>` tags.

---

## 2. Adding Tweet URLs to tweets.ts

Open `src/data/tweets.ts`. Find the tweet record with `tweetUrl: null` and replace it:

```ts
tweetUrl: 'https://twitter.com/username/status/123456789',
```

Also change `status: 'needs-review'` to `status: 'approved'` once the URL is verified.

---

## 3. Adding New Moments to moments.ts

Open `src/data/moments.ts`. Add a new object to the `moments` array:

```ts
{
  id: 'moment-9',        // must be unique
  title: 'Your Title Here',
  date: 'Month DD, YYYY',
  year: 2025,
  category: 'soft',      // funny | soft | chaotic | concert | backstage | friendship
  shortDescription: 'One sentence teaser shown on the card.',
  fullDescription: 'Full paragraph shown in the modal. Can be longer.',
  imageSrc: '/images/placeholder-moment-9.jpg',  // or real path
  imageAlt: 'Descriptive alt text for the image',
  tags: ['tag1', 'tag2'],
  relatedTweetIds: [],    // reference tweet IDs from tweets.ts
  featured: false,
},
```

---

## 4. Adding Timeline Entries to timeline.ts

Open `src/data/timeline.ts`. Add to the `timelineEntries` array:

```ts
{
  id: 'tl-2025-3',       // year-indexed for clarity
  year: 2025,
  date: 'September 2025',
  title: 'Entry Title',
  description: 'One or two sentences describing what happened.',
  type: 'moment',        // moment | photo | tweet | milestone
  imageSrc: '/images/placeholder-timeline-8.jpg',  // optional
  tweetUrl: 'https://twitter.com/...',             // optional
  tags: ['tag1', 'tag2'],
},
```

Milestone entries render larger and with a special badge.

---

## 5. Adding New Gallery Items to gallery.ts

Open `src/data/gallery.ts`. Add to the `galleryItems` array:

```ts
{
  id: 'gallery-13',
  src: '/images/gallery-13.jpg',
  alt: 'Descriptive alt text',
  category: 'cute',   // events | concerts | selfies | cute | chaotic | bts | tweets
  caption: 'Caption shown on hover',
  date: 'Month YYYY',
  year: 2025,
  featured: false,
},
```

---

## 6. Adding New Categories

**For moments:** Edit the `category` type in `src/data/moments.ts` and add the new value to the union:
```ts
category: 'funny' | 'soft' | 'chaotic' | 'concert' | 'backstage' | 'friendship' | 'your-new-category';
```
Then add a config entry in `src/components/ui/MomentCard.tsx` under `categoryConfig`.
Also add it to the `categories` array in `src/components/sections/FeaturedMomentsSection.tsx`.

**For gallery:** Same pattern — add to the union in `gallery.ts` and to the `allCategories` array in `PhotoGallerySection.tsx`.

---

## 7. File Naming Conventions

- Use lowercase and hyphens: `aiah-stacey-concert.jpg` not `AiahStaceyConcert.JPG`
- Include a year prefix for easy sorting: `2023-airport-umbrella.jpg`
- Keep filenames descriptive and short
- Use `.jpg` for photos, `.png` for graphics/screenshots

---

## 8. Recommended Image Sizes

| Use | Dimensions | Max file size |
|-----|-----------|--------------|
| Moment card (4:3) | 800×600px | 200KB |
| Gallery (masonry) | 600–800px wide | 300KB |
| Hero polaroid | 400×400px | 150KB |
| Timeline thumbnail | 200×200px | 80KB |
| Modal image (16:9) | 1200×675px | 400KB |

Run images through [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) before adding to keep the archive fast.
