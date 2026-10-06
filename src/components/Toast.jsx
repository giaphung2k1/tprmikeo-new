import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-fadeIn max-w-sm">
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#140b2b] border border-amber-400/50 shadow-2xl text-white">
        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
        <p className="text-xs font-semibold flex-1 leading-snug">{message}</p>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
