import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import FrameworkSection from './components/FrameworkSection';
import AudienceSection from './components/AudienceSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import PodcastSection from './components/PodcastSection';
import SpeakerKitSection from './components/SpeakerKitSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import SpeakerKitModal from './components/SpeakerKitModal';
import CookieBanner from './components/CookieBanner';
import Toast from './components/Toast';
import { Calendar, Play } from 'lucide-react';
import { siteData } from './data/siteData';

export default function App() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [speakerKitModalOpen, setSpeakerKitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('');

  const handlePlayVideo = (id, title, isVimeo = false) => {
    setActiveVideoModal({ id, title, isVimeo });
  };

  const handleCloseVideoModal = () => {
    setActiveVideoModal(null);
  };

  const handleNotify = (msg) => {
    setToastMessage(msg);
  };

  const handleTrackSelect = (trackName) => {
    setSelectedTrack(trackName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07040d] text-slate-100 selection:bg-purple-600 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => {
          const el = document.getElementById('booking');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSpeakerKit={() => setSpeakerKitModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onPlayVideo={(id, title) => handlePlayVideo(id, title, false)}
          onOpenSpeakerKit={() => setSpeakerKitModalOpen(true)}
        />

        {/* Video Showcase (Showreel & Live Testimonials) */}
        <VideoShowcase
          onOpenModal={(id, title) => handlePlayVideo(id, title, false)}
        />

        {/* Signature TPR Framework (Thrive, Pursue, Respond) */}
        <FrameworkSection
          onSelectTrack={handleTrackSelect}
        />

        {/* Who This Is For (6 Targeted Audiences) */}
        <AudienceSection
          onSelectTrack={handleTrackSelect}
        />

        {/* About Mike O ("From Adversity to Advantage") */}
        <AboutSection
          onOpenSpeakerKit={() => setSpeakerKitModalOpen(true)}
        />

        {/* Live Auditoriums Gallery */}
        <GallerySection />

        {/* TPR Podcast & Media Clips */}
        <PodcastSection
          onOpenVimeoModal={(id, title) => handlePlayVideo(id, title, true)}
        />

        {/* Speaker Kit Download Box */}
        <SpeakerKitSection
          onNotify={handleNotify}
        />

        {/* 15-Minute Strategy Call Booking Form */}
        <BookingSection
          prefilledTrack={selectedTrack}
          onNotify={handleNotify}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenSpeakerKit={() => setSpeakerKitModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal
        video={activeVideoModal}
        onClose={handleCloseVideoModal}
      />

      <SpeakerKitModal
        isOpen={speakerKitModalOpen}
        onClose={() => setSpeakerKitModalOpen(false)}
        onNotify={handleNotify}
      />

      {/* Cookie Consent Notice */}
      <CookieBanner />

      {/* Floating Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

      {/* Persistent Floating Quick Action Button on Mobile/Tablet */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <a
          href="#booking"
          className="btn-gold !py-2.5 !px-5 text-xs font-bold shadow-2xl flex items-center gap-2 rounded-full border border-amber-300"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Mike O</span>
        </a>
      </div>
    </div>
  );
}
