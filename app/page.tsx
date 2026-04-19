'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './components/FadeIn';
import { ImgPlaceholder } from './components/ImgPlaceholder';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 55%, #2d6a4f 100%)' }}
    >
      {/* Radial glow overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, rgba(45,106,79,0.45) 0%, transparent 65%),
                       radial-gradient(ellipse at 10% 80%, rgba(200,169,110,0.08) 0%, transparent 50%)`,
        }}
      />
      {/* Decorative rings */}
      <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-[60px] right-[300px] w-[180px] h-[180px] rounded-full border border-[#86c99e]/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#86c99e] inline-block" />
            Ogbomoso, Oyo State · Nigeria
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] mb-6"
          >
            Serving Our
            <br />
            Community,{' '}
            <span className="text-[#86c99e]">One Life at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/75 text-base leading-relaxed mb-10 max-w-lg"
          >
            The Reverend Peter Olaleye Charity Foundation exists to uplift the vulnerable, empower the overlooked, and advocate for a just society — right here in Ogbomoso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-[#1a4731] font-extrabold rounded-full text-sm shadow-xl tracking-wide"
            >
              Donate Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('involved')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 border-2 border-white/35 bg-white/12 backdrop-blur-sm text-white font-bold rounded-full text-sm transition-all"
            >
              Get Involved
            </motion.button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {['Faith-Centered', 'Community-Driven', 'Locally Rooted'].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-white/55 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-[#86c99e] text-xs">✦</span>
                  {item}
                </span>
                {i < 2 && <span className="w-px h-4 bg-white/15" />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Community Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <Image
            src="/community.jpg"
            alt="Community"
            width={600}
            height={440}
            priority
            className="w-full h-72 lg:h-[440px] object-cover rounded-2xl shadow-2xl"
          />

          {/* Floating stat — top right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-white/60"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-base flex-shrink-0">🎓</div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Scholarships awarded</p>
              <p className="text-[#1a4731] font-bold text-sm">10+ Students</p>
            </div>
          </motion.div>

          {/* Floating stat — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-white/60"
          >
            <div className="w-9 h-9 rounded-xl bg-[#fff3cd] flex items-center justify-center text-base flex-shrink-0">❤️</div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Lives touched</p>
              <p className="text-[#1a4731] font-bold text-sm">50+ in Ogbomoso</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <Image
              src="/Founder.jpg"
              alt="Founder Rev. Peter Olaleye"
              width={500}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#1a4731]/8 border border-[#1a4731]/15" />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
  <div>
    <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Our Story</p>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f] leading-tight mb-6">
      Rooted in Faith,
      <br />
      Driven by Compassion
    </h2>

    <p className="text-stone-600 leading-relaxed mb-5 text-sm">
      The Reverend Peter Olaleye Charity Foundation was built on a simple belief: everyone deserves dignity, opportunity, and care, regardless of their circumstances.
    </p>

    <p className="text-stone-600 leading-relaxed mb-5 text-sm">
      Founded by Reverend Peter Olaleye, Head Pastor of New Estate Baptist Church, Ogbomoso, founder and former President of the Ogbomoso Community Youth Forum (OCYF), and currently Special Assistant on Media and Community Relations to the Soun of Ogbomosoland, the foundation reflects his decades of service to the people of Oyo State.
    </p>

    <p className="text-stone-600 leading-relaxed mb-8 text-sm">
      Through outreach, education, and youth empowerment, the foundation supports vulnerable communities and creates opportunities for lasting impact, driven by compassion, integrity, and a commitment to meaningful change.
    </p>
        
            <div className="flex flex-wrap gap-6">
              {['Faith-Centered', 'Community-Driven', 'Locally Rooted'].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm font-semibold text-[#1a4731]">
                  <span className="text-[#2d6a4f] text-xs">✦</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Focus Areas ───────────────────────────────────────────────────────────────
const focusAreas = [
  {
    title: 'Scholarships',
    desc: 'Supporting bright, hardworking students who lack the financial means to pursue their education.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Free Healthcare',
    desc: 'Providing medical outreaches and health support to families who cannot afford basic care.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M12 21s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 10v4M10 12h4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Empowerment',
    desc: 'Equipping youth and market women with skills, resources, and opportunities to build sustainable livelihoods.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#1a4731" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M17 11l2 2 4-4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Rights & Governance',
    desc: 'Advocating for the rights of ordinary citizens and promoting accountability in local governance.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 3l9 4.5v5c0 5-3.5 9.5-9 11C6.5 21.5 3 17 3 12V7.5L12 3z"
          stroke="#1a4731"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function FocusAreas() {
  return (
    <section id="focus" className="py-24 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Four Areas of Focus
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map(({ title, desc, icon }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 40px #1a473114' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-7 border border-stone-100 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] flex items-center justify-center mb-5">{icon}</div>
                <h3 className="font-bold text-[#0f2d1f] text-base mb-3">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Impact ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '10+', label: 'Scholarships Awarded' },
  { value: '5+', label: 'Healthcare Outreaches' },
  { value: '50+', label: 'Lives Touched' },
  { value: '2+', label: 'Community Partnerships' },
];

function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 60%, #2d6a4f 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />
      <div className="relative max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#86c99e] text-xs font-bold tracking-widest uppercase mb-3">Our Impact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Small Steps, Real Change
          </h2>
          <p className="text-white/55 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            We believe in honesty. These numbers are modest — but behind each one is a real person whose life was touched.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className="text-center bg-white/8 border border-white/12 rounded-2xl p-8">
                <p className="text-5xl font-extrabold text-white mb-2">
                  {value}
                </p>
                <p className="text-white/55 text-sm font-medium leading-tight">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stories ───────────────────────────────────────────────────────────────────
const stories = [
  {
    tag: 'Healthcare',
    title: 'A Mother of Four — Against All Odds',
    body: `When a financially struggling mother discovered she was expecting quadruplets, fear and uncertainty consumed her family. Without resources to monitor such a high-risk pregnancy, the odds were daunting. The foundation stepped in, partnering with Genesis Medical Diagnostic Center to provide free monitoring and care throughout her pregnancy. When the day came, she delivered all four babies safely. Today, that family of six is a testament to what community care looks like.`,
    image: 'Healthcare.jpg',
    bg: '#e8f5e9',
    accent: '#1a4731',
  },
  {
    tag: 'Scholarship',
    title: 'A Champion Who Needed a Champion',
    body: `Master Oladunni Success Eniayo earned something extraordinary — first place in a national mathematics competition. His brilliance was undeniable. But academic prizes rarely pay school fees. Partnering with the Ogbomoso Community Youth Forum (OCYF), the foundation awarded him a scholarship, ensuring that his talent would not be wasted by circumstance. Success is now living up to his name.`,
    image: 'Scholarship.jpg',
    bg: '#f0f4ff',
    accent: '#1a3a6b',
  },
];

function Stories() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Stories of Impact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Real People. Real Change.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map(({ tag, title, body, image, bg, accent }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-stone-100 shadow-sm h-full flex flex-col"
              >
                <Image
                  src={`/${image}`}
                  alt={title}
                  width={500}
                  height={224}
                  className="w-full h-56 object-cover rounded-none rounded-t-3xl"
                />
                <div className="p-8 flex-1" style={{ backgroundColor: bg }}>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${accent}18`, color: accent }}>
                    {tag}
                  </span>
                  <h3 className="text-xl font-extrabold mb-4 leading-snug" style={{ color: accent }}>
                    {title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">What We&apos;re Working On</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Our Project
          </h2>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A small step we&apos;re taking right now — one family, one home at a time.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 20px 50px #1a473110' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm max-w-3xl mx-auto"
          >
            {/* Card content */}
            <div className="p-8 sm:p-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 bg-[#e8f5e9] text-[#1a4731]">
                Housing & Family Support
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f2d1f] mb-4 leading-snug">
                Building a Home for the Quadruplets
              </h3>
              {/* Images: stacked on mobile, side-by-side on desktop */}
              <div className="mt-2 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                  <Image
                    src="https://res.cloudinary.com/dkuda0je5/image/upload/q_auto/f_auto/v1776622612/WhatsApp_Image_2026-04-18_at_11.13.34_AM_cc6uz3.jpg"
                    alt="Project photo 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                  <Image
                    src="https://res.cloudinary.com/dkuda0je5/image/upload/q_auto/f_auto/v1776622799/WhatsApp_Image_2026-04-18_at_11.13.34_AM_1_v1hwbe.jpg"
                    alt="Project photo 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Story paragraphs */}
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                A mother we supported through a high-risk pregnancy gave birth to quadruplets, four fragile lives brought safely into the world against the odds.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                What should have been a time of relief and joy quickly met a harsh reality. The family does not have a safe or adequate home to care for four newborns and is currently living in difficult conditions. In moments like this, the difference between struggle and stability often comes down to community.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                This is our current mission: to help provide a simple, safe, and dignified home where these children can grow, and where their mother can care for them without fear or uncertainty.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-8">
                We are just at the beginning and every contribution, no matter how small, brings this family one step closer to a better future.
              </p>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 28px #1a473130' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-[#1a4731] text-white font-bold rounded-full text-sm shadow-md hover:bg-[#2d6a4f] transition-colors"
              >
                Help Us Build Their Home
              </motion.button>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}


function Donation() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText('0949462000').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="donate" className="py-24 bg-[#f4f8f5]">
      <div className="max-w-2xl mx-auto px-5">
        <FadeIn className="text-center mb-10">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Give Today</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f] mb-4">
            Support This Project
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed max-w-lg mx-auto">
            You can support this project by making a direct bank transfer using the details below. Every contribution helps provide a safe home for this family.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Bank details card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 mb-6">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-5">Bank Transfer Details</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Account Name</span>
                <span className="text-sm font-semibold text-[#0f2d1f]">Olaleye Olawuyi Peter</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Bank Name</span>
                <span className="text-sm font-semibold text-[#0f2d1f]">Guaranty Trust Bank (GTB)</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Account Number</span>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-extrabold text-[#1a4731] tracking-widest">0949462000</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={copyAccountNumber}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg border-2 border-[#1a4731] text-[#1a4731] hover:bg-[#1a4731] hover:text-white transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </motion.button>
                </div>
              </div>
            </div>
            {copied && (
              <p className="mt-4 text-center text-xs font-semibold text-[#2d6a4f] bg-[#e8f5e9] rounded-xl py-2">
                Account number copied ✓
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* How to Donate steps */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 mb-6">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-5">How to Donate</p>
            <ol className="space-y-4">
              {[
                'Copy the account details above',
                'Make a transfer from your bank or mobile app',
                'Send your transaction receipt via WhatsApp',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#e8f5e9] text-[#1a4731] text-xs font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-stone-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/2348160579977?text=Hello%2C%20I%20just%20made%20a%20donation%20to%20the%20foundation.%20Please%20find%20my%20receipt%20attached"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 28px #25d36630' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#25d366] text-white font-bold rounded-2xl text-sm shadow-md hover:bg-[#1ebe5a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Receipt on WhatsApp
          </motion.a>

          <p className="text-center text-xs text-stone-400 mt-5 leading-relaxed">
            All donations are acknowledged and tracked to ensure transparency and accountability.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Get Involved ──────────────────────────────────────────────────────────────
interface InvolvementOption {
  title: string;
  desc: string;
  icon: string;
  cta: string;
  type: 'route' | 'whatsapp';
  to?: string;
}

const involvementOptions: InvolvementOption[] = [
  {
    title: 'Volunteer',
    desc: 'Join our team on the ground. From outreaches to events, your time and skills make a real difference.',
    icon: '🤝',
    cta: 'Volunteer With Us',
    type: 'route',
    to: '/volunteer',
  },
  {
    title: 'Partner With Us',
    desc: 'Are you an organisation, business, or institution that shares our values? Let\'s work together.',
    icon: '🏛️',
    cta: 'Become a Partner',
    type: 'route',
    to: '/partner',
  },
  {
    title: 'Spread the Word',
    desc: 'Follow us, share our work, and help us reach more people who need our support or want to give.',
    icon: '📢',
    cta: 'Share Our Mission',
    type: 'whatsapp',
  },
];


function Involved() {
  const handleShare = () => {
    const text = encodeURIComponent('Check out the Rev. Peter Olaleye Charity Foundation — serving Ogbomoso through scholarships, healthcare, and empowerment. ' + window.location.origin);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="involved" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Get Involved</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            There's a Place for You Here
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {involvementOptions.map((option, i) => (
            <FadeIn key={option.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-stone-100 rounded-2xl p-8 text-center hover:border-[#1a4731]/25 transition-colors h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-extrabold text-[#0f2d1f] text-xl mb-3">
                  {option.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">{option.desc}</p>

                {option.type === 'route' && option.to ? (
                  <Link href={option.to}>
                    <motion.span
                      whileHover={{ backgroundColor: '#1a4731', color: '#fff', scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-block w-full px-6 py-3 border-2 border-[#1a4731] text-[#1a4731] font-bold rounded-full text-sm transition-all"
                    >
                      {option.cta}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ backgroundColor: '#1a4731', color: '#fff', scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleShare}
                    className="px-6 py-3 border-2 border-[#1a4731] text-[#1a4731] font-bold rounded-full text-sm transition-all"
                  >
                    {option.cta}
                  </motion.button>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="antialiased text-stone-800">
      <Nav />
      <Hero />
      <About />
      <FocusAreas />
      <Impact />
      <Stories />
      <Projects />
      <Donation />
      <Involved />
      <Footer />
    </div>
  );
}
