'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <button
              onClick={scrollTop}
              className="font-display text-2xl font-bold tracking-tight"
            >
              Javeriya<span className="text-gradient">.</span>
            </button>
            <p className="mt-2 text-sm text-zinc-500">
              © 2026 All Rights Reserved.
            </p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-zinc-500 sm:justify-start">
              Designed with <Heart className="h-3 w-3 fill-pink-500 text-pink-500" /> by Javeriya
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand shadow-lg shadow-purple-500/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
