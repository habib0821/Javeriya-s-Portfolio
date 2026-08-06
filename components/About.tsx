'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects' },
  { value: 80, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '', label: 'Awards' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
              About Me
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Designing Visual Experiences That Connect{' '}
              <span className="text-gradient">Brands With People</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              I&apos;m Javeriya, a passionate graphic designer with over five
              years of experience crafting compelling visual narratives. I
              specialize in brand identity, digital design, and creative
              direction—blending strategy with aesthetics to deliver work that
              resonates. My approach is simple: understand the brand, tell its
              story, and make it unforgettable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              From early-stage startups to established companies, I&apos;ve
              helped brands find their voice through thoughtful design systems,
              memorable logos, and immersive digital experiences.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition-transform hover:-translate-y-1 sm:p-8"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-brand opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl lg:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-zinc-400 sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
