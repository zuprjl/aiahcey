'use client';

import React from 'react';
import { TweetRecord } from '@/data/tweets';

interface TweetCardProps {
  tweet: TweetRecord;
}

export default function TweetCard({ tweet }: TweetCardProps) {
  const isApproved = tweet.status === 'approved';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#F5EFE6] p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-[#4A6080] text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {tweet.title}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs text-[#4A6080] font-medium">{tweet.authorName}</span>
            <span className="text-xs text-[#C8C0BC]">{tweet.handle}</span>
          </div>
        </div>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
            isApproved
              ? 'bg-[#D0E8F2] text-[#4A6080]'
              : 'bg-[#FAD4DC] text-[#C4888E]'
          }`}
        >
          {isApproved ? '✓ Sourced' : '? Needs Source'}
        </span>
      </div>

      {/* Excerpt */}
      <blockquote
        className="text-sm text-[#4A6080] leading-relaxed italic border-l-2 border-[#B8D4E8] pl-3"
        style={{ fontFamily: "'Lora', Georgia, serif" }}
      >
        &ldquo;{tweet.excerpt}&rdquo;
      </blockquote>

      {/* Context */}
      <p className="text-xs text-[#C8C0BC] leading-relaxed">{tweet.context}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {tweet.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[#FDF8F0] text-[#C4888E] border border-[#F2C4CE]"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-[10px] text-[#C8C0BC]">{tweet.date}</span>
        {tweet.tweetUrl ? (
          <a
            href={tweet.tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#87BFDA] hover:text-[#4A6080] transition-colors underline underline-offset-2"
          >
            View Original →
          </a>
        ) : (
          <span className="text-xs text-[#C8C0BC] line-through cursor-not-allowed" title="Source URL not yet verified">
            View Original
          </span>
        )}
      </div>
    </div>
  );
}
