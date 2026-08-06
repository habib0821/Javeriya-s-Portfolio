'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Dribbble,
  Instagram,
  Linkedin,
} from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@javeriya.design' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Location', value: 'Remote · Worldwide' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
            Contact
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Create Something <span className="text-gradient">Amazing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              Have a project in mind? I&apos;d love to hear about it. Reach out
              through the form or connect with me directly—let&apos;s build
              something memorable together.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-lg shadow-purple-500/20">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {[Dribbble, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full glass text-zinc-300 transition-all hover:scale-110 hover:text-white hover:glow-purple"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/10"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Subject
                </label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/10"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/10"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-brand px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sent ? 'Message Sent!' : 'Send Message'}
                  {!sent && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
