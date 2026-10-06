import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true); // default hidden until checked

  useEffect(() => {
    const isConsent = localStorage.getItem('tpr_cookie_consent');
    if (!isConsent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tpr_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-fadeIn">
      <div className="glass-panel p-4 sm:p-5 border-amber-500/30 bg-[#0e071e]/95 backdrop-blur-xl shadow-2xl flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Privacy & Cookie Notice
            </span>
          </div>
          <button
            onClick={() => setAccepted(true)}
            className="text-slate-400 hover:text-white"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-normal">
          We use cookies to analyze website performance, deliver high-definition media showreels, and elevate your discovery experience.
        </p>

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={handleAccept}
            className="btn-gold !py-1.5 !px-4 text-xs font-bold flex-1 text-center"
          >
            Accept Cookies
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="text-xs text-slate-400 hover:text-white px-2 py-1"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
