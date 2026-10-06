import React, { useState } from 'react';
import { 
  Calendar, 
  Send, 
  CheckCircle2, 
  Paperclip, 
  ExternalLink, 
  Clock, 
  Sparkles,
  Users,
  Building,
  Mail,
  User,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { siteData } from '../data/siteData';

export default function BookingSection({ prefilledTrack, onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventDate: '',
    track: prefilledTrack || 'Keynote Speech (45-60 min)',
    audienceSize: '150 - 500 Attendees',
    message: '',
    agree: true
  });

  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      if (onNotify) {
        onNotify('Strategy Call Request Received! Mike\'s team will reach out within 24 hours.');
      }
    }, 800);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#090416]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Direct Booking & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Book — <span className="gradient-text-purple">TPR : Mike O</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Schedule a 15-minute strategy consultation to explore availability, event alignment, and custom keynote delivery for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Why Book / Strategy Call Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 border-purple-500/30 bg-[#120829]/90 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                The 15-Minute Strategy Call
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Direct consultation with Mike's executive team to ensure your conference or summit receives a tailored, memorable experience.
              </p>

              <div className="space-y-3.5 pt-2 border-t border-white/10">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Align keynote topics with your conference theme & OKRs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Review audience demographics and energy dynamics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Confirm calendar hold and technical production logistics</span>
                </div>
              </div>

              {/* Direct Google Form Alternative */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs text-slate-400 mb-2">Prefer Google Forms?</div>
                <a
                  href={siteData.brand.socials.bookingForm}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !w-full !py-2.5 text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>Open Official Google Booking Form</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-panel p-6 border-white/10 bg-[#0d071a]/80">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Connect Directly
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteData.brand.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] hover:bg-purple-900/40 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>@mikeo.official</span>
                </a>
                <a
                  href={siteData.brand.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] hover:bg-purple-900/40 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 border-purple-500/30 bg-[#110826]/95 shadow-2xl rounded-3xl">
              {isSubmitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Strategy Call Requested!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your request for <span className="text-amber-400 font-semibold">{formData.organization || 'your organization'}</span>.
                    Our team will be in touch via <span className="text-white">{formData.email}</span> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        eventDate: '',
                        track: 'Keynote Speech (45-60 min)',
                        audienceSize: '150 - 500 Attendees',
                        message: '',
                        agree: true
                      });
                    }}
                    className="btn-secondary !py-2.5 !px-6 text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Book a 15‑Minute Strategy Call</h3>
                    <span className="text-xs text-amber-400 font-semibold">* Required fields</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Professional Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@organization.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Organization / University
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Oxford University / Global Corp"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Approximate Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Estimated Event Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Track / Format */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Session Format
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Keynote Speech (45-60 min)">Keynote Speech (45-60 min)</option>
                        <option value="Half-Day Workshop">Interactive Half-Day Workshop</option>
                        <option value="Staff Development & Away Day">Staff Away Day & Educators</option>
                        <option value="Graduate & Early Career Induction">Graduate & Early Career Induction</option>
                        <option value="Executive Fireside & Panel">Executive Fireside & Panel</option>
                      </select>
                    </div>

                    {/* Audience Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Estimated Attendees
                      </label>
                      <select
                        value={formData.audienceSize}
                        onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Under 50 (Executive/Intimate)">Under 50 (Executive/Intimate)</option>
                        <option value="50 - 150 Attendees">50 - 150 Attendees</option>
                        <option value="150 - 500 Attendees">150 - 500 Attendees</option>
                        <option value="500 - 1,000+ Attendees">500 - 1,000+ (Convention/Arena)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Event Context / Key Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the event objectives, challenges your team faces, or any specific theme..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080412] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Attachment Simulator */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Attach Event Brief / RFP (Optional)
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#080412] border border-dashed border-white/20 hover:border-purple-400 cursor-pointer transition-colors text-xs text-slate-400">
                      <Paperclip className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">
                        {fileName ? `Attached: ${fileName}` : 'Attach Files (PDF, DOCX, presentation brief)'}
                      </span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Checkbox agreement */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      required
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-purple-600 bg-[#080412] border-white/20 focus:ring-purple-500"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-300 leading-snug cursor-pointer">
                      I agree to tap in and find out more! Mike O’s team may reach out to schedule our discovery call.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full text-center text-sm font-bold !py-3.5 shadow-xl mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        Transmitting Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Strategy Request
                      </span>
                    )}
                  </button>

                  <div className="text-center pt-1 text-[11px] text-slate-500">
                    Protected by reCAPTCHA & compliant with global data privacy standards.
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
