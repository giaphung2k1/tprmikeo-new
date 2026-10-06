import React from 'react';
import { 
  GraduationCap, 
  Target, 
  BookOpen, 
  Users, 
  HeartPulse, 
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  GraduationCap: GraduationCap,
  Target: Target,
  BookOpen: BookOpen,
  Users: Users,
  HeartPulse: HeartPulse,
  Award: Award
};

export default function AudienceSection({ onSelectTrack }) {
  return (
    <section id="audience" className="py-24 relative overflow-hidden bg-[#0a0518]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Tailored Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Who This Is <span className="gradient-text-gold">For</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Whether speaking to 1,000+ graduates in an arena, executive leaders in a boardroom, or educators on an away day, Mike O customizes each delivery for maximum impact.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.targetAudiences.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="glass-panel p-7 sm:p-8 flex flex-col justify-between group hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 bg-[#100924]/80"
              >
                <div>
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-600/15 text-purple-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Topics Pills */}
                  <div className="pt-4 border-t border-white/10 mb-5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Focal Points:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking Trigger Link */}
                  <a
                    href="#booking"
                    onClick={() => {
                      if (onSelectTrack) onSelectTrack(item.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Inquire for this track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
