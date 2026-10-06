import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Video, Calendar, Download } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenBooking, onOpenSpeakerKit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Showreel", href: "#showreel" },
    { label: "TPR Framework", href: "#framework" },
    { label: "Who It's For", href: "#audience" },
    { label: "About Mike", href: "#about" },
    { label: "Live Gallery", href: "#gallery" },
    { label: "Podcast", href: "#podcast" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090514]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-purple-500 to-indigo-500 shadow-md group-hover:scale-105 transition-transform">
            <img
              src={siteData.brand.logo}
              alt="TPR Mike O"
              className="w-full h-full object-cover rounded-full bg-[#0a0614]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              TPR <span className="text-amber-400">|</span> MIKE O
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-purple-300/80 -mt-0.5">
              Keynote Speaker
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative px-3 py-1.5 whitespace-nowrap after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:w-0 hover:after:w-[calc(100%-1.5rem)] after:bg-gradient-to-r after:from-purple-400 after:to-amber-400 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSpeakerKit}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-purple-500/30 text-purple-200 hover:bg-purple-900/30 hover:border-purple-400 transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            Speaker Kit
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              if (onOpenBooking) onOpenBooking();
            }}
            className="btn-gold !py-2 !px-5 !text-xs !shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Mike O
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold !py-1.5 !px-3 !text-xs"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e081e]/98 backdrop-blur-xl border-b border-purple-900/40 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSpeakerKit();
                }}
                className="w-full py-2.5 rounded-full border border-purple-500/40 text-sm font-semibold text-purple-200 hover:bg-purple-900/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download Speaker Kit
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold w-full text-center text-sm py-2.5"
              >
                Book 15-Minute Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
