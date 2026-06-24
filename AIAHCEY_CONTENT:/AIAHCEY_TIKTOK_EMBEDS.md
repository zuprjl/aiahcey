# AIAHCEY_TIKTOK_EMBEDS.md

Use this file for the AIAHCEY TikTok Bond / video embed section.

Instruction for Claude:
Do not paste raw TikTok embed HTML directly into multiple components.
Create a clean data file first, then render embeds through one reusable TikTokEmbed component.

Preferred sections:
- TikTok Bond
- The Chemistry Department
- The Aiahcey Effect
- Visual Chemistry
- Kikay Duo
- Matching Energy
- Comfort Duo

Design rules:
- TikToks should be watchable inside the website.
- Do not crop TikTok embeds.
- Do not hide videos inside tiny cards.
- Use horizontal swipe/carousel on mobile where appropriate.
- Each embed should have a short fan-style caption, not formal analysis.
- Include original creator/source credit.
- Load TikTok embed script only once.

---

## TikTok Data

```ts
export const aiahceyTikToks = [
  {
    id: "tt-001",
    title: "Underrated Duo, Increasing",
    creator: "@axelicvile",
    url: "https://www.tiktok.com/@axelicvile/video/7648138947968699668",
    videoId: "7648138947968699668",
    category: "The Aiahcey Effect",
    section: "TikTok Bond",
    status: "needs-review",
    fanCaption:
      "Underrated duo daw pero parang hindi na siya secret. This is the kind of edit that makes people ask what exactly is in the air when Aiahcey is together.",
    whyFansCare:
      "It captures the growing 'people are starting to get it' energy around Aiahcey.",
    tags: ["aiahcey-effect", "fan-edit", "visual-chemistry", "underrated-duo"]
  },
  {
    id: "tt-002",
    title: "Missing My Aiahcey",
    creator: "@sunnyujin",
    url: "https://www.tiktok.com/@sunnyujin/video/7651583695396244754",
    videoId: "7651583695396244754",
    category: "Comfort Duo",
    section: "TikTok Bond",
    status: "needs-review",
    fanCaption:
      "This is for the soft side of Aiahcey. The kind of edit that feels less like a crashout and more like, wait, I actually miss seeing them together.",
    whyFansCare:
      "It supports the comfort-duo side of the canon, not just the chemistry crashout side.",
    tags: ["comfort-duo", "soft-edit", "missing-aiahcey"]
  },
  {
    id: "tt-003",
    title: "Build A Baobab With AiahCey",
    creator: "@baobabeyewear",
    url: "https://www.tiktok.com/@baobabeyewear/video/7566568019489525000",
    videoId: "7566568019489525000",
    category: "Official Pair Moment",
    section: "TikTok Bond",
    status: "needs-review",
    fanCaption:
      "Aiahcey in actual branded content. This belongs here because it shows the duo outside the usual fan-edit context.",
    whyFansCare:
      "Fans keep asking for brands to notice the Aiahcey spark. This is useful as real pair-content evidence.",
    tags: ["official-content", "brand-content", "pair-moment", "baobab"]
  },
  {
    id: "tt-004",
    title: "Aiahcey Ka Ba?",
    creator: "@drey_needsyou",
    url: "https://www.tiktok.com/@drey_needsyou/video/7615597448928447762",
    videoId: "7615597448928447762",
    category: "Crashout Wall",
    section: "The Aiahcey Effect",
    status: "needs-review",
    fanCaption:
      "Aiahcey ka ba? Kung hindi, scroll ka na. Very direct. Very unserious. Very Starphrodite-coded.",
    whyFansCare:
      "This uses one of the most recognizable fandom phrases and works well for the raw fan-reaction side of the site.",
    tags: ["aiahcey-ka-ba", "crashout-wall", "fan-language"]
  },
  {
    id: "tt-005",
    title: "I Miss Aiahcey TikTok",
    creator: "@dmonytang_njl",
    url: "https://www.tiktok.com/@dmonytang_njl/video/7474516240560590088",
    videoId: "7474516240560590088",
    category: "TikTok Bond",
    section: "TikTok Bond",
    status: "needs-review",
    fanCaption:
      "The caption says it all. Aiahcey TikToks became their own little genre and people miss them when they disappear.",
    whyFansCare:
      "It proves that TikTok is not filler content for Aiahcey. Fans treat it as part of the duo’s core archive.",
    tags: ["tiktok-bond", "missing-aiahcey", "fan-edit"]
  },
  {
    id: "tt-006",
    title: "Probably Us If We Ever Play Basketball",
    creator: "@bini_aiah",
    url: "https://www.tiktok.com/@bini_aiah/video/7362341175631842566",
    videoId: "7362341175631842566",
    category: "Matching Freak",
    section: "TikTok Bond",
    status: "verified-source",
    fanCaption:
      "This is the exact type of Aiahcey content that makes the 'same braincell' allegations feel believable.",
    whyFansCare:
      "It is posted from Aiah’s own account and tags Stacey, making it strong primary-source content for their playful dynamic.",
    tags: ["official-post", "same-braincell", "matching-freak", "playful"]
  },
  {
    id: "tt-007",
    title: "Pink Flower Emoji Moment",
    creator: "@bini_aiah",
    url: "https://www.tiktok.com/@bini_aiah/video/7362156772901031173",
    videoId: "7362156772901031173",
    category: "Kikay Duo",
    section: "TikTok Bond",
    status: "verified-source",
    fanCaption:
      "The caption is literally just the kikay department reporting for duty. This is Aiahcey’s soft-pink, pretty-girl energy in one post.",
    whyFansCare:
      "It supports the Kikay Duo and femme x femme canon better than any long explanation could.",
    tags: ["official-post", "kikay-duo", "femme-x-femme", "pretty-girl-energy"]
  },
  {
    id: "tt-008",
    title: "Truth Or Dare",
    creator: "@bini_aiah",
    url: "https://www.tiktok.com/@bini_aiah/video/7338664011539516678",
    videoId: "7338664011539516678",
    category: "TikTok Bond",
    section: "TikTok Bond",
    status: "verified-source",
    fanCaption:
      "Aiahcey TikTok canon. Simple, clean, and exactly why people keep saying their video chemistry works.",
    whyFansCare:
      "This is primary-source TikTok content from Aiah’s account, useful for showing that their TikTok bond is not just fan-edited.",
    tags: ["official-post", "tiktok-bond", "video-chemistry"]
  },
  {
    id: "tt-009",
    title: "We Feel Bonita",
    creator: "@bini_aiah",
    url: "https://www.tiktok.com/@bini_aiah/video/7286113054398467333",
    videoId: "7286113054398467333",
    category: "Kikay Duo",
    section: "TikTok Bond",
    status: "verified-source",
    fanCaption:
      "We feel bonita. Honestly, that is the thesis. Aiahcey as the kikay duo makes so much sense here.",
    whyFansCare:
      "This is strong for the femme x femme / kikay duo section because the vibe is instantly readable.",
    tags: ["official-post", "kikay-duo", "bonita", "femme-x-femme"]
  }
];
```

---

## Claude Implementation Prompt

Paste this to Claude after saving this file inside `AIAHCEY_CONTENT/`.

```text
Add a proper TikTok embed experience to the AIAHCEY website.

Read AIAHCEY_CONTENT/AIAHCEY_TIKTOK_EMBEDS.md.

Create a data file:
src/data/tiktoks.ts

Use the provided aiahceyTikToks array.

Create a reusable component:
src/components/TikTokEmbed.tsx

Requirements:
- Use the TikTok blockquote embed format with cite and data-video-id.
- Load https://www.tiktok.com/embed.js only once.
- Avoid duplicate script tags per embed.
- Make embeds responsive.
- Do not crop embeds.
- On mobile, allow swipe/scroll carousel.
- On desktop, use a clean 2-column or 3-column layout depending on width.
- Provide a fallback link: "Watch on TikTok" if embed fails.

Create a new section:
src/components/sections/TikTokBondSection.tsx

Section title:
TikTok Bond

Section intro copy:
"Some duos need a whole explanation. Aiahcey just needs one TikTok and suddenly you get it."

Show:
- embedded TikTok
- title
- creator
- fanCaption
- whyFansCare
- tags

Tone:
- fan-friendly
- warm
- not formal
- not robotic
- not academic

Important:
This section should feel alive. TikToks are primary content for Aiahcey, not side content.

Add TikTokBondSection to the homepage after the introduction / Aiahcey Effect section and before heavier essay sections.

After implementation:
- run npm run build
- fix all errors
- start the correct AIAHCEY dev server
- confirm embeds render
```
