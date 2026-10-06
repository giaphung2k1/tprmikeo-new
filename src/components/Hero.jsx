import React from 'react';
import { Play, Calendar, Download, Sparkles, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero({ onPlayVideo, onOpenSpeakerKit }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Keynote & Transformational Speaker</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
              <span className="hero-headline-line">Navigate Well,</span>
              <span className="hero-headline-line">
                <span className="gradient-text-purple">Not Just Perform</span>{' '}
                <span className="text-amber-400">Well.</span>
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Having turned severe childhood adversity into profound leadership advantage,{' '}
              <span className="text-white font-semibold">Mike O</span> equips global corporate teams, universities, and high-stakes leaders to build unshakeable mental clarity, purposeful systems, and lasting influence.
            </p>

            {/* Framework Quick Micro-Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <span>☘️</span> THRIVE under pressure
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-950/60 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <span>⛰️</span> PURSUE with purpose
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                <span>⛳️</span> RESPOND & rise
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#booking"
                className="btn-gold !py-3.5 !px-8 text-center text-sm sm:text-base font-bold shadow-xl shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                Book Strategy Call
              </a>

              <button
                onClick={() => onPlayVideo(siteData.videos[0].id, siteData.videos[0].title)}
                className="btn-primary !py-3.5 !px-7 text-center text-sm sm:text-base font-semibold"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch 2026 Showreel
              </button>

              <button
                onClick={onOpenSpeakerKit}
                className="btn-secondary !py-3.5 !px-6 text-center text-sm font-medium"
              >
                <Download className="w-4 h-4 text-purple-300" />
                Speaker Kit
              </button>
            </div>
          </div>

          {/* Right Column: Speaker Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-amber-500 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse-subtle" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e071d] shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={siteData.brand.portrait}
                    alt="Mike O - Keynote Speaker"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/30 to-transparent" />
                </div>

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#120a26]/90 backdrop-blur-md border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-white font-bold text-lg leading-tight">Mike O</h2>
                      <p className="text-amber-400 text-xs font-medium">Multidisciplinary Keynote Speaker</p>
                    </div>
                    <button
                      onClick={() => onPlayVideo(siteData.videos[0].id, siteData.videos[0].title)}
                      className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-amber-400/40"
                      title="Play Showreel"
                    >
                      <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Available for 2026 Bookings
                    </span>
                    <span className="text-purple-300">UK & Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge 1 (Top Left) */}
              <div className="absolute -top-5 -left-5 bg-[#170e30]/95 backdrop-blur-lg border border-amber-500/40 rounded-2xl p-3 shadow-2xl animate-float hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">From Adversity</div>
                  <div className="text-[10px] text-amber-300 font-medium">To Unstoppable Advantage</div>
                </div>
              </div>

              {/* Floating Highlight Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-5 bg-[#170e30]/95 backdrop-blur-lg border border-purple-500/40 rounded-2xl p-3 shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">99.4% Approval</div>
                  <div className="text-[10px] text-purple-300">Rated Highly Actionable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics / Credibility Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {siteData.brand.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-panel p-5 text-center sm:text-left relative overflow-hidden group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-purple-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-normal">
                  {stat.detail}
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-600/5 rounded-bl-full pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
