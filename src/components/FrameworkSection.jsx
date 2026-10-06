import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, Compass, Target, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FrameworkSection({ onSelectTrack }) {
  const [selectedPillar, setSelectedPillar] = useState('thrive');
  const activePillar = siteData.frameworkPillars.find(p => p.id === selectedPillar) || siteData.frameworkPillars[0];

  return (
    <section id="framework" className="py-24 relative overflow-hidden bg-[#070311]">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            The Signature System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Organization <span className="gradient-text-purple">Outcomes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A battle-tested 3-part methodology developed through overcoming extreme adversity. Designed to shift mindset, accelerate execution, and cultivate unshakeable leadership.
          </p>
        </div>

        {/* 3 Pillars Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {siteData.frameworkPillars.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all relative overflow-hidden border ${
                  isSelected
                    ? 'bg-[#150d2e] border-2 shadow-2xl scale-[1.02]'
                    : 'glass-panel hover:bg-white/5 opacity-80 hover:opacity-100'
                }`}
                style={{
                  borderColor: isSelected ? pillar.accent : 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Pillar Icon & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                    style={{ backgroundColor: `${pillar.accent}18` }}
                  >
                    <span>{pillar.icon}</span>
                  </div>
                  <span
                    className="text-xs font-extrabold uppercase px-3 py-1 rounded-full border"
                    style={{
                      color: pillar.accent,
                      borderColor: `${pillar.accent}40`,
                      backgroundColor: `${pillar.accent}12`
                    }}
                  >
                    Phase {pillar.id === 'thrive' ? '01' : pillar.id === 'pursue' ? '02' : '03'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {pillar.tagline}
                </h3>

                <p className="text-sm text-slate-300 line-clamp-3 mb-6">
                  {pillar.leadText}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
                  style={{ color: pillar.accent }}
                >
                  <span>{isSelected ? 'Currently Viewing Deep-Dive' : 'Explore Pillar Outcomes'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Deep-Dive Interactive Showcase */}
        <div className="glass-panel p-6 sm:p-10 border-purple-500/30 bg-[#120a28]/90 shadow-2xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Full Philosophy & Core Outcomes */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activePillar.icon}</span>
                <div>
                  <span
                    className="text-xs font-extrabold uppercase tracking-widest"
                    style={{ color: activePillar.accent }}
                  >
                    Signature Pillar Deep-Dive
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activePillar.name}: {activePillar.tagline}
                  </h3>
                </div>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {activePillar.bodyText}
              </p>

              {/* Deliverable Outcomes Checklist */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Measurable Impact for Your Team:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.keyTakeaways.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activePillar.accent }}
                      />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Leadership Lens & Reflective Question */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Leadership Lens Card */}
              <div
                className="p-6 rounded-2xl border relative overflow-hidden bg-black/40 backdrop-blur-md"
                style={{ borderColor: `${activePillar.accent}30` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4" style={{ color: activePillar.accent }} />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Leadership Lens
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg font-bold text-white italic leading-snug">
                  "{activePillar.leadershipLens}"
                </blockquote>
              </div>

              {/* Reflective Inquiry Card */}
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                    Reflective Inquiry (Ask Yourself)
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {activePillar.reflectiveQuestion}
                </p>
                <div className="mt-4 pt-3 border-t border-amber-500/20 flex justify-between items-center">
                  <span className="text-[11px] text-amber-300/80">Keynote discussion catalyst</span>
                  <a
                    href="#booking"
                    className="text-xs font-bold text-amber-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Bring this session to your event &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
