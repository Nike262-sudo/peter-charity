'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

const WHATSAPP_NUMBER = '2348160579977';

export default function VolunteerPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'Volunteer', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.interest) {
      alert('Please fill in all required fields.');
      return;
    }
    const sanitize = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
    const composed = `Hello, I'm interested in getting involved with the Rev. Peter Olaleye Charity Foundation.\n\nName: ${sanitize(form.name)}\nEmail: ${sanitize(form.email)}\nPhone: ${sanitize(form.phone)}\nInterest: ${sanitize(form.interest)}\nMessage: ${form.message.trim() || '(none)'}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composed)}`;
  };

  return (
    <div className="antialiased text-stone-800">
      <Nav />

      {/* Hero */}
      <div className="pt-16" style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 55%, #2d6a4f 100%)' }}>
        <div className="max-w-6xl mx-auto px-5 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#86c99e] inline-block" /> Get Involved
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Volunteer With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/65 text-base leading-relaxed max-w-xl mx-auto"
          >
            Whether it's a medical outreach, a community event, or a scholarship drive — your time and energy can change a life.
          </motion.p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-[#f4f8f5] py-20 px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Interest Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors bg-white text-stone-700"
                >
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partner">Partner</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Message <span className="text-stone-300">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a little about yourself and how you'd like to help..."
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px #1a473135' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#1a4731] text-white font-bold rounded-xl text-sm hover:bg-[#2d6a4f] transition-colors"
              >
                Continue on WhatsApp →
              </motion.button>
              <p className="text-center text-xs text-stone-400">You&apos;ll be redirected to WhatsApp to complete your request.</p>
            </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
