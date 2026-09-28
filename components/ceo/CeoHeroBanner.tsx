"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronRight,
  AcademicCapIcon,
  MailIcon,
  MapPinOutlineIcon,
  GlobeIcon,
  BriefcaseIcon,
} from "../ui/Icons";
import { gsap, smoothScrollTo } from "@/lib/gsapUtils";
import { ceoProfileData } from "@/data/ceoData";

export default function CeoHeroBanner() {
  const { name, image, alt } = ceoProfileData;

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        badgeRef.current,
        { autoAlpha: 0, y: -20, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.4)" },
      )
        .fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 30, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
          "-=0.4",
        )
        .fromTo(
          subtitleRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          descRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          ctaRef.current ? ctaRef.current.children : [],
          { autoAlpha: 0, y: 15, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          metricsRef.current ? metricsRef.current.children : [],
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          photoRef.current,
          { autoAlpha: 0, scale: 0.94, y: 25 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.8",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId, {
      offset: -72,
      duration: 0.6,
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative text-white pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Personal Portfolio Intro & Branding (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Status Capsule */}
            <div ref={badgeRef} className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-sky-200">
                <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
                <span>Entrepreneur • Investor • Business Leader</span>
              </span>
            </div>

            {/* Personal Portfolio Greeting & Name */}
            <p className="text-sky-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-2">
              Hello, I&apos;m
            </p>
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-4 drop-shadow-sm"
            >
              {name}
            </h1>

            {/* Sub-headline: Personal Tagline */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl font-medium text-sky-100 max-w-xl mb-4 leading-snug"
            >
              Building purposeful enterprises &amp; championing Nepal&apos;s
              next generation of business.
            </p>

            {/* Concise Personal Bio */}
            <p
              ref={descRef}
              className="text-blue-100/80 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            >
              Driven by innovation and sustainable impact, I lead diversified
              ventures across Nepal while actively working with national
              commerce bodies to foster cross-border partnerships.
            </p>

            {/* Personal Action CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
                className="w-full sm:w-auto text-center bg-white hover:bg-sky-50 text-[#0154A5] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>My Story &amp; Vision</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-white/20 backdrop-blur-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MailIcon className="w-4 h-4 text-sky-300" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Personal Quick Highlights */}
            <div
              ref={metricsRef}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-5 border-t border-white/15 text-xs text-sky-100/90 w-full"
            >
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                <MapPinOutlineIcon className="w-3.5 h-3.5 text-sky-300" />
                <span>Kathmandu, Nepal</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                <AcademicCapIcon className="w-3.5 h-3.5 text-sky-300" />
                <span>UK Distinction</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                <GlobeIcon className="w-3.5 h-3.5 text-sky-300" />
                <span>Arksh Group</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                <BriefcaseIcon className="w-3.5 h-3.5 text-sky-300" />
                <span>NCC Executive</span>
              </span>
            </div>
          </div>

          {/* Right Column: Executive Portrait WITHOUT any outline (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft ambient back-glow behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-sky-400/25 via-[#0154A5]/30 to-cyan-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Photo Container - Completely Outline-Free, Border-Free */}
              <div
                ref={photoRef}
                className="relative aspect-[3.8/4.8] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group hover:scale-[1.02] border-none outline-none ring-0"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle bottom vignette gradient for smooth readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#013b78]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Executive Capsule (Outline-free) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl text-[#1a3a6e] flex items-center justify-between pointer-events-none border-none">
                  <div>
                    <p className="font-extrabold text-sm text-[#0154A5] leading-tight">
                      {name}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      Entrepreneur &amp; Investor
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full">
                    Kathmandu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
