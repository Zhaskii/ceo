"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon, AwardIcon, GlobeIcon, ChevronRight } from "../ui/Icons";
import { ceoProfileData } from "@/data/ceoData";

export default function ExecutiveHero() {
  const { name, role, company, image, alt } = ceoProfileData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#014080] via-[#0154A5] to-[#f0f6ff] text-white pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text & Bio Summary (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
                {role} • {company}
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/25 border border-sky-400/30 text-xs font-semibold text-sky-100">
                Master&apos;s with Distinction (UK)
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
              {name}
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-sky-100/90 mb-6 leading-snug">
              Transforming Nepali Enterprise with Global Vision &amp; Purpose-Driven Leadership
            </p>

            <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed mb-8 max-w-2xl font-normal">
              Directing a diversified conglomerate across 16+ key industry verticals including Automobiles, Food &amp; Beverages, Hospitality, Health &amp; Wellness, and International Trading. Committed to national advancement, youth empowerment, and operational excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#message"
                onClick={(e) => scrollToSection(e, "#message")}
                className="w-full sm:w-auto text-center bg-white hover:bg-blue-50 text-[#0154A5] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Read CEO Message</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#interviews"
                onClick={(e) => scrollToSection(e, "#interviews")}
                className="w-full sm:w-auto text-center bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/25 backdrop-blur-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <PlayIcon className="w-4 h-4 text-sky-300" />
                <span>Watch Interviews</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full sm:w-auto text-center bg-sky-500/20 hover:bg-sky-500/30 text-sky-100 font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-sky-400/30 transition-all flex items-center justify-center"
              >
                Connect with CEO
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/15 w-full">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">1978</span>
                <p className="text-[11px] font-semibold text-sky-200/80 uppercase tracking-wider mt-0.5">
                  Group Heritage
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-300">16+</span>
                <p className="text-[11px] font-semibold text-sky-200/80 uppercase tracking-wider mt-0.5">
                  Industry Sectors
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">30+</span>
                <p className="text-[11px] font-semibold text-sky-200/80 uppercase tracking-wider mt-0.5">
                  Global Brands
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-300">1,000+</span>
                <p className="text-[11px] font-semibold text-sky-200/80 uppercase tracking-wider mt-0.5">
                  Workforce
                </p>
              </div>
            </div>
          </div>

          {/* Right Executive Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/40 group">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2050]/80 via-transparent to-transparent" />

                {/* Floating Chamber Ribbon */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-white text-[11px] font-medium">
                    <AwardIcon className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    <span className="truncate">Executive Member, Nepal Chamber of Commerce</span>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-blue-50 text-[#1a3a6e]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-lg text-[#0154A5] leading-tight">
                        {name}
                      </h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {role}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0154A5]">
                      <GlobeIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
