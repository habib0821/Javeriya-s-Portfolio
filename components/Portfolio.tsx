'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  'All',
  'Logo',
  'Poster',
  'Social Media',
];

type Project = {
  title: string;
  category: string;
  image: string;
  size: 'tall' | 'wide' | 'normal';
};

const projects: Project[] = [
  { title: 'Lumen Brand System', category: 'Logo', image: '/images/javeriya.png', size: 'normal' },
  { title: 'Lumen Brand System', category: 'Poster', image: '/images/javeriya.png', size: 'normal' },
  { title: 'Lumen Brand System', category: 'Social Media', image: '/images/javeriya.png', size: 'normal' },
  
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
            Portfolio
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Selected <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${active === cat
                  ? 'bg-gradient-brand text-white shadow-lg shadow-purple-500/20'
                  : 'glass text-zinc-400 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl ${project.size === 'tall'
                    ? 'row-span-2'
                    : project.size === 'wide'
                      ? 'col-span-2'
                      : ''
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
