import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X, Users, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = siteData.galleryImages;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImg = images[currentIndex];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0a0518]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            Live On Stage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Keynote Speaker : <span className="gradient-text-purple">THRIVE, PURSUE, RESPOND</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Captivating audiences from university auditoriums to corporate summits. Transforming rooms into high-energy hubs of clarity and inspiration.
          </p>
        </div>

        {/* Featured Showcase Stage */}
        <div className="glass-panel p-3 sm:p-5 max-w-5xl mx-auto border-purple-500/30 shadow-2xl bg-[#0f0920]/80 mb-8">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black/60 group">
            <img
              src={currentImg.url}
              alt={currentImg.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expand button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20"
              title="View full screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Image Overlay Information */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  Photo {currentIndex + 1} of {images.length}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                  {currentImg.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {currentImg.location}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  {currentImg.attendees}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 max-w-5xl mx-auto px-2 justify-start sm:justify-center">
          {images.map((img, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  isSelected
                    ? 'border-amber-400 scale-105 shadow-lg shadow-amber-400/20'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-purple-400/60'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={currentImg.url}
              alt={currentImg.title}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-white">{currentImg.title}</h4>
              <p className="text-sm text-slate-400">{currentImg.location} • {currentImg.attendees}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
