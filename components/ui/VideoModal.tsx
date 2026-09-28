"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, VideoCameraIcon } from "./Icons";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  title: string;
  category?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  youtubeId,
  title,
  category,
}: VideoModalProps) {
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [shouldLoadPlayer, setShouldLoadPlayer] = useState(false);
  const [isPlayerLoading, setIsPlayerLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Let the backdrop and modal paint first. Creating a YouTube iframe in the
    // same click frame can block the entrance animation on slower devices.
    const playerTimer = window.setTimeout(() => setShouldLoadPlayer(true), 140);

    return () => {
      window.clearTimeout(playerTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center overflow-hidden bg-black/80 p-4 backdrop-blur-xl animate-backdrop-in sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl animate-video-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950 p-4 text-white sm:p-5">
          <div className="flex min-w-0 items-center gap-2">
            <VideoCameraIcon className="h-4 w-4 shrink-0 text-sky-400" />
            <h3
              id="video-modal-title"
              className="truncate text-sm font-bold text-slate-100 sm:text-base"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:scale-105 hover:bg-white/20 active:scale-95"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          {shouldLoadPlayer && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsPlayerLoading(false)}
            />
          )}
          {isPlayerLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 text-sky-200">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-sky-300/25 border-t-sky-300" />
              <span className="text-xs font-medium">Loading video</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 bg-slate-950 p-4 text-xs text-slate-400 sm:flex-row">
          <span>{category || "EXECUTIVE KEYNOTE & INTERVIEW"}</span>
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-400 transition-colors hover:text-sky-300"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
