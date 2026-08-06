'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'Photoshop', value: 95, color: '#8B5CF6' },
  { name: 'Illustrator', value: 92, color: '#F472B6' },
  { name: 'Figma', value: 90, color: '#06B6D4' },
  { name: 'After Effects', value: 85, color: '#6366F1' },
  { name: 'InDesign', value: 80, color: '#10B981' },
];

function CircularProgress({
  value,
  color,
  name,
  delay,
}: {
  value: number;
  color: string;
  name: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [progress, setProgress] = useState(0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * value);
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, value]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative h-44 w-44">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">
        {name}
      </h3>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
            Skills
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-start justify-center gap-8 lg:gap-4">
          {skills.map((skill, i) => (
            <CircularProgress
              key={skill.name}
              value={skill.value}
              color={skill.color}
              name={skill.name}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
