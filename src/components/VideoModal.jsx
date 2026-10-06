import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  const isVimeo = video.isVimeo;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0e071e] rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <h3 className="text-base font-bold text-white leading-tight">{video.title}</h3>
            <p className="text-xs text-amber-400">TPR : Mike O Live Experience</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video bg-black">
          {isVimeo ? (
            <iframe
              src={`https://player.vimeo.com/video/${video.id}?autoplay=1&badge=0&byline=0&portrait=0&title=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
