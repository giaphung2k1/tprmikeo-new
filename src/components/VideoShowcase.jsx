import React, { useState } from 'react';
import { Play, Sparkles, Volume2, Maximize2, CheckCircle2, User } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function VideoShowcase({ onOpenModal }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const currentVideo = siteData.videos[activeVideoIndex];

  return (
    <section id="showreel" className="py-24 relative overflow-hidden bg-[#0a0516]">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Media & Live Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            TPR : Showreel & <span className="gradient-text-gold">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            See the transformative power of Mike O's message live on stage and hear authentic feedback from executives, L&D managers, and attendees.
          </p>
        </div>

        {/* Primary Theater View */}
        <div className="glass-panel p-3 sm:p-5 mb-10 max-w-5xl mx-auto border-purple-500/30 shadow-2xl bg-[#0f0920]/80">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner border border-white/10 group">
            <iframe
              key={currentVideo.id}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&autoplay=0&modestbranding=1`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Under-player Meta bar */}
          <div className="mt-4 px-2 sm:px-4 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-amber-400 text-slate-950">
                  {currentVideo.badge}
                </span>
                <span className="text-xs text-purple-300 font-medium">
                  Duration: {currentVideo.duration}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentVideo.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl mt-1">
                {currentVideo.description}
              </p>
            </div>

            <button
              onClick={() => onOpenModal(currentVideo.id, currentVideo.title)}
              className="btn-secondary !py-2 !px-4 text-xs font-semibold self-start sm:self-center flex items-center gap-2 shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              Full Theater View
            </button>
          </div>
        </div>

        {/* Video Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {siteData.videos.map((vid, index) => {
            const isActive = activeVideoIndex === index;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveVideoIndex(index)}
                className={`text-left p-4 rounded-xl transition-all relative overflow-hidden group ${
                  isActive
                    ? 'bg-purple-900/40 border-2 border-amber-400 shadow-lg shadow-purple-900/30'
                    : 'glass-panel hover:bg-white/5 border border-white/10'
                }`}
              >
                {/* Thumbnail Preview with Play Icon */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-black/60 border border-white/10">
                  <img
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 scale-110'
                          : 'bg-white/30 backdrop-blur-md text-white group-hover:scale-110'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 text-[10px] font-mono px-1.5 py-0.5 bg-black/80 rounded text-slate-200">
                    {vid.duration}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                  {vid.badge}
                </div>
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {vid.title}
                </h4>
                {vid.speaker && (
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-purple-400" /> {vid.speaker}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
