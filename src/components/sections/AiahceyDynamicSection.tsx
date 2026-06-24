'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DynamicCard from '@/components/ui/DynamicCard';
import { dynamicCards } from '@/data/dynamic';
import { TinyBow } from '@/components/ui/DecorativeElements';

export default function AiahceyDynamicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="dynamic"
      className="py-20 px-4 sm:px-6"
      style={{ background: 'linear-gradient(180deg, #FDF8F0 0%, #FAF6EF 100%)' }}
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <TinyBow className="text-[#E8A0B0] w-6 h-4" />
            <span className="text-xs tracking-widest uppercase text-[#8C8884]" style={{ fontFamily: "'Inter', sans-serif" }}>
              visual essay
            </span>
            <TinyBow className="text-[#B8D4E8] w-6 h-4" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1C1E' }}
          >
            The Aiahcey Dynamic
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#87BFDA] rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#E8A0B0] rounded-full" />
          </div>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', color: '#4A4A4A' }}
          >
            Nobody agreed on a single word for what this is. So here are five ways of looking at it — pick the one that fits what you&apos;re already feeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dynamicCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <DynamicCard card={card} />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs mt-10"
          style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', color: '#8C8884' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Hover each card to read more.
        </motion.p>
      </div>
    </section>
  );
}
