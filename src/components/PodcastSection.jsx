import React, { useState } from 'react';
import { Mic, Play, Sparkles, Radio, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PodcastSection({ onOpenVimeoModal }) {
  const [activeVimeoId, setActiveVimeoId] = useState(siteData.podcastClips[0].id);

  return (
    <section id="podcast" className="py-24 relative overflow-hidden bg-[#070311]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            Bite-Sized Wisdom
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            TPR : Podcast <span className="gradient-text-gold">Clips</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Short, potent video snippets exploring the psychology of pressure, resilience under scrutiny, and intentional growth.
          </p>
        </div>

        {/* 3 Vertical Reel / Clip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {siteData.podcastClips.map((clip) => (
            <div
              key={clip.id}
              className="glass-panel overflow-hidden border-purple-500/30 bg-[#0e071e]/90 flex flex-col group hover:border-amber-400/60 transition-all duration-300 shadow-xl"
            >
              {/* Video Player Frame */}
              <div className="relative aspect-[9/14] sm:aspect-[9/13] bg-black/80 overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${clip.id}?badge=0&byline=0&portrait=0&title=0&controls=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={clip.title}
                />
              </div>

              {/* Meta Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                      {clip.series}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-500/30">
                      {clip.topic}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {clip.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {clip.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Share or reflect</span>
                  <a
                    href="https://www.instagram.com/mikeo.official/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>More on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
