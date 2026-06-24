'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import MomentCard from '@/components/ui/MomentCard';
import MomentModal from '@/components/ui/MomentModal';
import FilterBar from '@/components/ui/FilterBar';
import { moments, Moment } from '@/data/moments';
import { TinyHeart } from '@/components/ui/DecorativeElements';

const categories = ['all', 'funny', 'soft', 'chaotic', 'concert', 'backstage', 'friendship'];

export default function FeaturedMomentsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'all'
    ? moments
    : moments.filter((m) => m.category === activeCategory);

  return (
    <section id="moments" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-2">
            <TinyHeart className="text-[#F2C4CE] w-5 h-5" />
            <span className="text-xs tracking-widest uppercase text-[#C8C0BC]" style={{ fontFamily: "'Inter', sans-serif" }}>
              documented & collected
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#4A6080] mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Featured Moments
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#87BFDA] to-[#E8A0B0] rounded-full" />
            <div className="h-0.5 w-8 bg-[#F5EFE6] rounded-full" />
          </div>

          <FilterBar
            options={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <MomentCard
                moment={moment}
                onClick={() => setSelectedMoment(moment)}
              />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#C8C0BC] py-12 text-sm">
            No moments in this category yet.
          </p>
        )}
      </div>

      <MomentModal moment={selectedMoment} onClose={() => setSelectedMoment(null)} />
    </section>
  );
}
