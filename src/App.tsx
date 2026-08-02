import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrestationsSection } from './components/PrestationsSection';
import { StatsCounter } from './components/StatsCounter';
import { PriceCalculator } from './components/PriceCalculator';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BannerCTA } from './components/BannerCTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GalleryModal } from './components/GalleryModal';
import { ReviewsModal } from './components/ReviewsModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenBookingWithDetails = (serviceKey: string) => {
    setSelectedService(serviceKey);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020712] text-slate-100 flex flex-col font-sans selection:bg-[#FFB800] selection:text-black">
      {/* Header Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section matching mockup */}
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. Stats Trust Bar */}
        <StatsCounter />

        {/* 3. Prestations Section (Auto, Moto, Tapis, Meuble with Before/After sliders) */}
        <PrestationsSection
          onSelectService={(serviceKey) => setSelectedService(serviceKey)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 4. Interactive Live Price Calculator */}
        <PriceCalculator
          onOpenBookingWithDetails={(serviceKey) => handleOpenBookingWithDetails(serviceKey)}
        />

        {/* 5. About Section matching mockup */}
        <AboutSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenAboutDetails={() => setSelectedService('auto')}
        />

        {/* 6. Customer Reviews Showcase */}
        <ReviewsSection onOpenReviewsModal={() => setIsReviewsOpen(true)} />

        {/* 7. Banner CTA Section */}
        <BannerCTA onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Floating Action Button (Booking & Direct Call) */}
      <FloatingCTA
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Footer */}
      <Footer
        setActiveSection={setActiveSection}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService || 'auto'}
      />

      {/* Service Detail Modal ("EN SAVOIR PLUS") */}
      <ServiceDetailModal
        isOpen={selectedService !== null && !isBookingOpen}
        onClose={() => setSelectedService(null)}
        serviceKey={selectedService || 'auto'}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Reviews Modal */}
      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
