import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles, Send, ShieldCheck, Mail } from 'lucide-react';

export default function SpeakerKitSection({ onNotify }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    if (onNotify) {
      onNotify('Speaker Kit successfully sent to ' + email + '!');
    }
  };

  const kitFeatures = [
    "Full Keynote Outlines & Learning Outcomes",
    "Technical Rider, Stage & AV Requirements",
    "High-Resolution Press Headshots & Bios",
    "Workshop & Away-Day Modular Add-ons",
    "Client Case Studies & Verified Ratings"
  ];

  return (
    <section id="speaker-kit" className="py-20 relative overflow-hidden bg-[#0c061e] border-y border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 lg:p-16 border-amber-500/30 bg-gradient-to-r from-[#12082b] via-[#160a34] to-[#14082e] shadow-2xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Description & Checklist */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <FileText className="w-3.5 h-3.5" />
                Event Organizer Resource
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Receive The Official <span className="gradient-text-gold">TPR Speaker Kit</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                Everything meeting planners, conference chairs, and L&D directors need to brief internal committees, review session formats, and confirm speaker availability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {kitFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quick Request Card */}
            <div className="lg:col-span-5 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Instant Kit Access</h3>
              <p className="text-xs text-slate-300 mb-5">
                Enter your work email to receive immediate PDF download and fee guidelines.
              </p>

              {submitted ? (
                <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white">Speaker Kit Sent!</h4>
                  <p className="text-xs text-emerald-300 mt-1">
                    Check your inbox at <span className="font-semibold text-white">{email}</span> for the complete PDF dossier.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[11px] font-semibold text-slate-400 hover:text-white underline"
                  >
                    Send to another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work / Organization Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="planner@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090514] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full text-center text-sm font-bold !py-3"
                  >
                    <Download className="w-4 h-4" />
                    Download 2026 Speaker Kit (PDF)
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Instant delivery. Zero spam guarantee.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
