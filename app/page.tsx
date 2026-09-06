import React from "react";
import CeoHeroBanner from "@/components/ceo/CeoHeroBanner";
import CeoMessageCard from "@/components/ceo/CeoMessageCard";
import CeoAffiliationsTable from "@/components/ceo/CeoAffiliationsTable";
import CeoVisionImpactSection from "@/components/ceo/CeoVisionImpactSection";
import CeoVideosCarousel from "@/components/ceo/CeoVideosCarousel";
import CeoGalleryCarousel from "@/components/ceo/CeoGalleryCarousel";
import CeoVenturesSection from "@/components/ceo/CeoVenturesSection";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-[#f0f6ff] min-h-screen pb-16 font-sans overflow-x-hidden"
    >
      {/* 1 & 2. Hero & About Message Section on Continuous Executive Blue Gradient */}
      <div className="relative bg-gradient-to-b from-[#0154A5] via-[#014a94] to-[#013b78] text-white overflow-hidden pb-16 sm:pb-24">
        {/* Background ambient floating lighting effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3498db]/25 rounded-full blur-3xl pointer-events-none animate-ambient-1" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-950/60 rounded-full blur-3xl pointer-events-none animate-ambient-2" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none animate-float" />

        {/* Subtle Dotted Matrix Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* 1. CEO Hero & Breadcrumb Banner with GSAP */}
        <CeoHeroBanner />

        {/* 2. Official CEO Split Profile Card (Portrait + Keynote + 2 Promises) */}
        <CeoMessageCard />
      </div>

      {/* 3. Official Leadership Roles & Affiliations (NCC & Nepal-Singapore Chamber) */}
      <CeoAffiliationsTable />

      {/* 4. Leadership Vision, Strategic Principles & Conglomerate Impact Metrics */}
      <CeoVisionImpactSection />

      {/* 5. Watch & Listen — CEO Video Messages with Carousel & Modal */}
      <CeoVideosCarousel />

      {/* 6. Visual Moments — Accomplishments Gallery with Lightbox */}
      <CeoGalleryCarousel />

      {/* 7. Arksh Group 16 Conglomerate Business Sectors */}
      <CeoVenturesSection />
    </div>
  );
}
