'use client';

import React from 'react';

interface LoadingSkeletonProps {
  count?: number;
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-sm border border-[#F5EFE6] overflow-hidden" style={{ padding: '6px 6px 16px' }}>
      <div className="w-full aspect-[4/3] bg-[#F5EFE6] animate-pulse rounded-sm" />
      <div className="pt-3 px-1 space-y-2">
        <div className="h-3 bg-[#F5EFE6] animate-pulse rounded w-1/3" />
        <div className="h-4 bg-[#F5EFE6] animate-pulse rounded w-3/4" />
        <div className="h-3 bg-[#F5EFE6] animate-pulse rounded w-full" />
        <div className="h-3 bg-[#F5EFE6] animate-pulse rounded w-2/3" />
      </div>
    </div>
  );
}

export default function LoadingSkeleton({ count = 6 }: LoadingSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
