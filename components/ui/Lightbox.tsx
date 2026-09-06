"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { GalleryPhoto } from "@/types";
import { ChevronLeft, ChevronRight, CloseIcon, AwardIcon } from "./Icons";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  photos: GalleryPhoto[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const emptySubscribe = () => () => {};

export default function Lightbox({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !mounted || !currentPhoto) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-backdrop-in overflow-hidden"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Top-Right Floating Circular Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[100000] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
      >
        <CloseIcon className="w-5 h-5" />
      </button>

      {/* Left Navigation Arrow */}
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[100000] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[100000] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Centered Photo & Metadata Block */}
      <div
        className="relative flex flex-col items-center justify-center max-w-4xl w-full mx-auto select-none pointer-events-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Container with rounded corners */}
        <div className="relative max-h-[65vh] sm:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15 flex items-center justify-center">
          <Image
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.alt || currentPhoto.title}
            width={1200}
            height={850}
            className="max-h-[65vh] sm:max-h-[70vh] w-auto h-auto max-w-full object-contain rounded-2xl"
            priority
          />
        </div>

        {/* Metadata Centered Directly Underneath Photo */}
        <div className="mt-4 sm:mt-5 text-center max-w-2xl px-4">
          {/* Category / Badge with Ribbon Medal Icon */}
          <div className="flex items-center justify-center gap-1.5 text-sky-400 font-semibold text-xs tracking-wider uppercase">
            <AwardIcon className="w-3.5 h-3.5 shrink-0" />
            <span>
              {currentPhoto.category || "HONOR & MILESTONE"}
              {currentPhoto.date ? ` • ${currentPhoto.date}` : ""}
            </span>
          </div>

          {/* Photo Title */}
          <h3 className="mt-2 text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl mx-auto text-center">
            {currentPhoto.title}
          </h3>

          {/* Pagination counter */}
          <p className="mt-1.5 text-white/40 text-xs font-normal">
            Photo {currentIndex + 1} of {photos.length}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
