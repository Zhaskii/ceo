"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, VideoCameraIcon } from "./Icons";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  title: string;
  category?: string;
}

const emptySubscribe = () => () => {};

export default function VideoModal({
  isOpen,
  onClose,
  youtubeId,
  title,
  category,
}: VideoModalProps) {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-backdrop-in overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Top-Right Floating Circular Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Video"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[100000] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
      >
        <CloseIcon className="w-5 h-5" />
      </button>

      {/* Centered Video Player & Metadata Block */}
      <div
        className="relative flex flex-col items-center justify-center max-w-4xl w-full mx-auto select-none pointer-events-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Player Frame with rounded corners */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Info Centered Directly Below */}
        <div className="mt-4 sm:mt-5 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-1.5 text-sky-400 font-semibold text-xs tracking-wider uppercase">
            <VideoCameraIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{category || "EXECUTIVE KEYNOTE & INTERVIEW"}</span>
          </div>
          <h3
            id="video-modal-title"
            className="mt-2 text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl mx-auto text-center"
          >
            {title}
          </h3>
        </div>
      </div>
    </div>,
    document.body
  );
}
