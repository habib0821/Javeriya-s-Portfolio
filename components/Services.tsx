'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  PenTool,
  Share2,
  Layout,
  Package,
  Printer,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Complete visual identity systems—from logo and color to typography and brand guidelines.',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    description:
      'Memorable, versatile logos crafted to communicate your brand essence at a glance.',
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description:
      'Scroll-stopping social content and templates that keep your brand consistent and engaging.',
  },
  {
    icon: Layout,
    title: 'UI Design',
    description:
      'Clean, intuitive interfaces for web and mobile—designed with users and conversions in mind.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description:
      'Shelf-ready packaging that tells your product story and earns a second look.',
  },
  {
    icon: Printer,
    title: 'Print Design',
    description:
      'Brochures, posters, and print collateral produced with meticulous attention to detail.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
            Services
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What I <span className="text-gradient">Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient glow on hover */}
              <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-cyan-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-purple-600/20 group-hover:to-cyan-500/20 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>

              {/* Bottom gradient line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
