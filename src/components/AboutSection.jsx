import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, Award, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function AboutSection({ onOpenSpeakerKit }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070312]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-purple-600/30 to-indigo-600/20 rounded-3xl blur-2xl opacity-70" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0d071a] shadow-2xl">
                <img
                  src={siteData.brand.portrait}
                  alt="Mike O overlooking London"
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                />
                <div className="p-5 bg-gradient-to-t from-[#0e071c] via-[#0e071c]/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Mike O</h3>
                      <p className="text-amber-400 text-xs font-semibold">Thought Leader & Keynote Speaker</p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-900/60 text-purple-200 border border-purple-500/30">
                      London, UK
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#160c2e]/95 backdrop-blur-md border border-amber-500/40 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-amber-400/20" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Childhood Leukaemia Survivor</div>
                  <div className="text-[11px] text-slate-300">Resilience forged in real-life survival</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              About TPR : Mike O
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              From Adversity To <span className="gradient-text-gold">Advantage</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Having faced <strong className="text-white">childhood leukaemia</strong>, profound personal loss, and intense professional setbacks, Mike O understands high pressure not as an abstract theory, but firsthand through lived survival.
              </p>
              <p>
                Today, he serves as an internationally requested keynote speaker, partnering with high-growth corporations, prestigious universities, and pioneering schools to turn adversity into an unstoppable catalyst for growth.
              </p>
              <p>
                Through compelling storytelling and the proprietary <strong className="text-purple-300">THRIVE, PURSUE, RESPOND (TPR)</strong> framework, Mike equips audiences to think stronger, act with unwavering purpose, and sustain elite performance over time.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="my-8 p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 relative">
              <Quote className="w-8 h-8 text-amber-400/40 absolute -top-3 -left-3" />
              <blockquote className="text-white font-medium italic text-base sm:text-lg leading-relaxed pl-2">
                "Pressure is not here to break you — it is an invitation to reveal who you are and navigate with clarity rather than react with fear."
              </blockquote>
              <div className="mt-3 pl-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                — Mike O
              </div>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Multidisciplinary Speaker</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">High-Impact Frameworks</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Actionable Keynotes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#booking" className="btn-gold !py-3 !px-7 text-sm font-bold">
                Book Mike O For Your Event
              </a>
              <button
                onClick={onOpenSpeakerKit}
                className="btn-secondary !py-3 !px-6 text-sm font-semibold"
              >
                Download Speaker One-Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
