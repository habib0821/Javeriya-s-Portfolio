'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    position: 'CEO, Lumen Studio',
    rating: 5,
    text: 'Javeriya transformed our brand identity completely. The attention to detail and creative vision exceeded every expectation. Our rebrand helped us land three major clients within a month.',
    initials: 'SM',
    gradient: 'from-purple-600 to-indigo-500',
  },
  {
    name: 'James Carter',
    position: 'Founder, Nova Coffee',
    rating: 5,
    text: 'Working with Javeriya was a game-changer for our startup. The logo and packaging design she delivered told our story perfectly. Professional, creative, and incredibly responsive.',
    initials: 'JC',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Aisha Khan',
    position: 'Marketing Director, Bloom',
    rating: 5,
    text: 'The social media kit Javeriya designed gave our brand a cohesive, premium feel across every platform. Engagement went up 40% in the first quarter. Absolutely brilliant work.',
    initials: 'AK',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
            Testimonials
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-transform hover:-translate-y-2"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-brand opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />

              <Quote className="mb-5 h-10 w-10 text-purple-500/40" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-zinc-300">{t.text}</p>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
