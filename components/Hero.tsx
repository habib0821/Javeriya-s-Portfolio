'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Dribbble, Instagram, Linkedin } from 'lucide-react';

const floatingIcons = [
  { label: 'Ps', className: 'top-[8%] left-[2%]', delay: 0 },
  { label: 'Ai', className: 'top-[18%] right-[0%]', delay: 0.5 },
  { label: 'Figma', className: 'bottom-[22%] left-[0%]', delay: 1 },
  { label: 'Ae', className: 'bottom-[8%] right-[6%]', delay: 1.5 },
  { label: 'Palette', className: 'top-[42%] right-[-4%]', delay: 2 },
  { label: 'Pen', className: 'top-[50%] left-[-6%]', delay: 2.5 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!portraitRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      portraitRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-20"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-purple-600/30 blur-[120px] animate-blob" />
        <div className="absolute right-[15%] top-[30%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Javeriya</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display text-xl font-medium text-white sm:text-2xl"
          >
            Creative Graphic Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 lg:mx-0"
          >
            I create modern visual identities, branding systems, and digital
            experiences that help businesses grow and stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <button
              onClick={() => scrollTo('#portfolio')}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105 sm:w-auto"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            {[
              { Icon: Dribbble, label: 'Dribbble' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Mail, label: 'Email' },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-zinc-300 transition-all hover:scale-110 hover:text-white hover:glow-purple"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative aspect-square w-[280px] sm:w-[360px] lg:w-[440px]">
            {/* Glow ring */}
            <div className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-gradient-brand opacity-40 blur-2xl" />
            <div className="absolute inset-[-12px] -z-10 animate-spin-slow rounded-full border border-dashed border-white/10" />

            {/* Portrait frame */}
            <div
              ref={portraitRef}
              className="relative h-full w-full rounded-full glass-strong p-3 transition-transform duration-300 ease-out"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-cyan-500/30" />
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
                  <img
                    src="/images/javeriya.png"
                    alt="Javeriya portrait"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Floating icons */}
            {floatingIcons.map((icon) => (
              <motion.div
                key={icon.label}
                className={`absolute ${icon.className}`}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: icon.delay,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-strong text-xs font-bold text-white shadow-lg sm:h-14 sm:w-14">
                  {icon.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
