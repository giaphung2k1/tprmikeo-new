import React from 'react';
import { ArrowUp, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenSpeakerKit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05020c] border-t border-purple-950/60 pt-16 pb-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-purple-500 to-indigo-500">
                <img
                  src={siteData.brand.logo}
                  alt="TPR Logo"
                  className="w-full h-full object-cover rounded-full bg-[#0a0614]"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  TPR <span className="text-amber-400">|</span> MIKE O
                </span>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-purple-300 block">
                  Keynote Speaker & Thought Leader
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Navigate well, not just perform well. Empowering organizations, universities, and high-stakes leaders worldwide through the transformative TPR framework.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteData.brand.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="Instagram @mikeo.official"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteData.brand.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:booking@tprmikeo.com"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="Email Booking"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Explore Keynotes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#showreel" className="hover:text-white transition-colors">2026 Showreel</a></li>
              <li><a href="#framework" className="hover:text-white transition-colors">TPR Framework</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Target Audiences</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Mike O</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Live Auditoriums Gallery</a></li>
            </ul>
          </div>

          {/* Framework Pillars */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              The TPR Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#framework" className="hover:text-emerald-400 transition-colors">☘️ Thrive Under Pressure</a></li>
              <li><a href="#framework" className="hover:text-amber-400 transition-colors">⛰️ Pursue With Purpose</a></li>
              <li><a href="#framework" className="hover:text-purple-400 transition-colors">⛳️ Respond & Rise</a></li>
              <li><a href="#podcast" className="hover:text-white transition-colors">Podcast & Video Clips</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Event Planner FAQ</a></li>
            </ul>
          </div>

          {/* Booking & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Event Booking
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#booking" className="hover:text-white transition-colors">15-Min Strategy Call</a></li>
              <li>
                <button
                  onClick={onOpenSpeakerKit}
                  className="hover:text-white text-left transition-colors"
                >
                  Download Speaker Kit
                </button>
              </li>
              <li>
                <a
                  href={siteData.brand.socials.bookingForm}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  Google Booking Form <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li><span className="text-emerald-400 font-medium">Calendar Open for 2026</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright &copy; {new Date().getFullYear()} TPR | MIKE O. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
