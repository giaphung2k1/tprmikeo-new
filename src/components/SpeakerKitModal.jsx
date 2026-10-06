import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Mail, ShieldCheck } from 'lucide-react';

export default function SpeakerKitModal({ isOpen, onClose, onNotify }) {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
    if (onNotify) {
      onNotify('Speaker Kit successfully delivered to ' + email);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#110826] rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3 shadow-lg border border-amber-500/30">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-white">
            Download The <span className="gradient-text-gold">Speaker Kit</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
            Comprehensive PDF guide with session outlines, technical AV rider, and verified client testimonials.
          </p>
        </div>

        {downloaded ? (
          <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-white">PDF Dispatched!</h4>
            <p className="text-xs text-emerald-300 mt-1">
              Sent to <strong className="text-white">{email}</strong>. Please check your inbox or download directly below.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading TPR_Mike_O_Speaker_Kit_2026.pdf...');
              }}
              className="btn-gold !py-2.5 !px-5 text-xs font-bold inline-flex mt-4"
            >
              <Download className="w-3.5 h-3.5" />
              Direct Download PDF
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Organization Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="organizer@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080414] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full text-center text-sm font-bold !py-3 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Access Speaker Kit (PDF)
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Free instant download for conference planners</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
