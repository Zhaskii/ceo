"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomInIcon } from "../ui/Icons";
import Lightbox from "../ui/Lightbox";
import { galleryPhotosData } from "@/data/ceoData";
import { GalleryPhoto } from "@/types";

export default function PhotoGallerySection() {
  const [photos] = useState<GalleryPhoto[]>(galleryPhotosData);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setItemsToShow(w < 640 ? 1 : w < 768 ? 2 : w < 1024 ? 3 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    const maxIndex = Math.max(0, photos.length - itemsToShow);
    if (maxIndex !== 0) {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  }, [photos.length, itemsToShow]);

  const handlePrev = () => {
    const maxIndex = Math.max(0, photos.length - itemsToShow);
    if (maxIndex !== 0) {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  useEffect(() => {
    if (isPaused || photos.length <= itemsToShow || lightboxIndex >= 0) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, photos.length, itemsToShow, lightboxIndex]);

  if (photos.length === 0) return null;

  return (
    <section
      id="gallery"
      className="pt-16 pb-16 max-w-7xl mx-auto px-6 border-t border-blue-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-3">
          Visual Moments
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6e] mb-3">
          Accomplishments &amp; Moments
        </h2>
        <div className="w-12 h-0.75 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
      </div>

      {/* Carousel Track */}
      <div className="relative px-4 sm:px-12">
        {photos.length > itemsToShow && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-blue-100 rounded-full shadow-md hover:bg-[#2357A6] hover:text-white transition-all flex items-center justify-center text-[#2357A6] cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-blue-100 rounded-full shadow-md hover:bg-[#2357A6] hover:text-white transition-all flex items-center justify-center text-[#2357A6] cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="overflow-hidden py-3">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
              width: "100%",
            }}
          >
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                style={{ minWidth: `${100 / itemsToShow}%` }}
                className="px-2 shrink-0"
              >
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-blue-50 shadow-sm group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                >
                  <Image
                    src={photo.url}
                    alt={photo.title || photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Search / Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/25 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-white shadow-md">
                      <ZoomInIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold drop-shadow-md line-clamp-1">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        currentIndex={lightboxIndex >= 0 ? lightboxIndex : 0}
        photos={photos}
        onClose={() => setLightboxIndex(-1)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
