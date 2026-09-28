"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "../ui/Icons";
import VideoModal from "../ui/VideoModal";
import { videoInterviewsData } from "@/data/ceoData";
import { gsap } from "@/lib/gsapUtils";

export default function CeoVideosCarousel() {
  const [videos] = useState(videoInterviewsData);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setItemsToShow(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    const maxIndex = Math.max(0, videos.length - itemsToShow);
    if (maxIndex !== 0) {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  }, [videos.length, itemsToShow]);

  const handlePrev = () => {
    const maxIndex = Math.max(0, videos.length - itemsToShow);
    if (maxIndex !== 0) {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  useEffect(() => {
    if (isPaused || videos.length <= itemsToShow) return;
    const interval = setInterval(handleNext, 3800);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, videos.length, itemsToShow]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current,
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  if (videos.length === 0) return null;

  return (
    <section
      id="interviews"
      ref={carouselRef}
      className="py-10 max-w-7xl mx-auto px-6 mt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-3">
          Media &amp; Perspectives
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6e] mb-3">
          Keynotes &amp; Interviews
        </h2>
        <div className="w-12 h-0.75 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
          Public addresses, media dialogues, and keynotes by Rajul Shrestha on
          modern enterprise leadership, global education, and national economic
          growth.
        </p>
      </div>

      {/* Carousel Track */}
      <div className="relative px-4 sm:px-12">
        {videos.length > itemsToShow && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-blue-100 rounded-full shadow-md hover:bg-[#0154A5] hover:text-white hover:scale-110 active:scale-90 hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#0154A5] cursor-pointer"
              aria-label="Previous Video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-blue-100 rounded-full shadow-md hover:bg-[#0154A5] hover:text-white hover:scale-110 active:scale-90 hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#0154A5] cursor-pointer"
              aria-label="Next Video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="overflow-hidden py-2">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
              width: "100%",
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                style={{ minWidth: `${100 / itemsToShow}%` }}
                className="px-3 shrink-0"
              >
                <div
                  onClick={() => setSelectedVideoId(video.youtubeId)}
                  className="group relative aspect-video rounded-2xl overflow-hidden shadow-md border border-blue-50 block bg-black transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                >
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    unoptimized={video.thumbnailUrl.includes("youtube.com")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Circular Play Button with Subtle Pulse */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-14 h-14 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center group-hover:scale-115 group-hover:bg-[#0154A5] transition-all duration-300 shadow-xl">
                        <div className="w-0 h-0 border-t-[9px] border-t-transparent border-l-16 border-l-white border-b-[9px] border-b-transparent ml-1 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                  </div>

                  {/* Title Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xs sm:text-sm line-clamp-1 drop-shadow-md group-hover:text-sky-200 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {videos.length > itemsToShow && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({
              length: Math.max(0, videos.length - itemsToShow) + 1,
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-7 bg-[#0154A5]"
                    : "w-2 bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        key={selectedVideoId ?? "closed"}
        isOpen={Boolean(selectedVideoId)}
        onClose={() => setSelectedVideoId(null)}
        youtubeId={selectedVideoId || ""}
        title={
          videos.find((v) => v.youtubeId === selectedVideoId)?.title ||
          "Executive Keynote & Media Interview"
        }
        category="EXECUTIVE KEYNOTE & INTERVIEW"
      />
    </section>
  );
}
