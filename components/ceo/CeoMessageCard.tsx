"use client";

import React, { useEffect, useRef } from "react";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  BuildingIcon,
  GlobeIcon,
  CompassIcon,
} from "../ui/Icons";
import { ceoProfileData } from "@/data/ceoData";
import { gsap } from "@/lib/gsapUtils";

export default function CeoMessageCard() {
  const { name, tagline, badge, bioParagraphs, keyQuote, promisePillars } =
    ceoProfileData;

  const cardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        rightColRef.current,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      const credItems =
        leftColRef.current?.querySelectorAll(".credential-item");
      if (credItems && credItems.length > 0) {
        gsap.fromTo(
          credItems,
          { autoAlpha: 0, x: -16 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      const promiseCards =
        rightColRef.current?.querySelectorAll(".promise-card");
      if (promiseCards && promiseCards.length > 0) {
        gsap.fromTo(
          promiseCards,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative z-20 px-4 sm:px-6 md:px-12 pt-2 sm:pt-4 pb-4"
    >
      {/* Legacy anchor target compatibility */}
      <span id="message" className="absolute -top-24 pointer-events-none" />

      <div
        ref={cardRef}
        className="max-w-7xl mx-auto bg-white rounded-3xl sm:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.28)] p-6 sm:p-10 lg:p-14 border border-white/20 flex flex-col lg:flex-row gap-8 lg:gap-12 relative"
      >
        {/* Left Column (Executive Profile Dossier & Credentials Card - No Duplicate Photo) */}
        <div
          ref={leftColRef}
          className="lg:w-[38%] xl:w-[36%] shrink-0 flex flex-col gap-4 sm:gap-5"
        >
          {/* Executive Dossier Identity Card */}
          <div className="bg-gradient-to-br from-[#0154A5] via-[#014a94] to-[#0a2f64] text-white p-6 sm:p-7 rounded-3xl shadow-xl relative overflow-hidden group">
            {/* Background ambient lighting */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-900/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              {/* Top Row: RS Monogram & Status Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center font-black text-lg tracking-wider border border-white/20 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  RS
                </div>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
                  <span>Executive Dossier</span>
                </span>
              </div>

              {/* Personal Executive Identity */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {name}
              </h3>
              <p className="text-xs sm:text-[13px] font-semibold text-sky-200 uppercase tracking-wider mt-1 mb-3">
                Entrepreneur &amp; Business Leader
              </p>

              <div className="w-10 h-0.5 bg-gradient-to-r from-sky-300 to-transparent rounded-full mb-3" />

              <p className="text-xs sm:text-[13px] text-blue-100/85 leading-relaxed mb-5">
                Steering Arksh Group&apos;s multi-industry enterprise ecosystem
                with a focus on sustainable nation-building, bilateral commerce,
                and next-generation leadership in Nepal.
              </p>

              {/* Quick Profile Metadata Strip */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/15 text-[11px]">
                <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                  <p className="text-sky-300 text-[10px] font-bold uppercase tracking-wider">
                    Education
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    UK Master&apos;s (Dist.)
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                  <p className="text-sky-300 text-[10px] font-bold uppercase tracking-wider">
                    Enterprise
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    CEO, Arksh Group
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Credentials & Institutional Leadership Card */}
          <div className="bg-gradient-to-br from-[#f8fbff] to-white p-5 sm:p-6 rounded-3xl border border-blue-100/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-blue-50 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0154A5]">
                Qualifications &amp; Roles
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                Official Appointments
              </span>
            </div>

            {/* Credential 1: Academic Distinction */}
            <div className="credential-item flex items-start gap-3 group p-2 -mx-2 rounded-xl hover:bg-blue-50/70 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0154A5] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5 group-hover:bg-[#0154A5] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <AcademicCapIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-[#1a3a6e] leading-snug group-hover:text-[#0154A5] transition-colors">
                  Master&apos;s with Distinction
                </span>
                <span className="text-[11px] text-slate-500">
                  England, United Kingdom
                </span>
              </div>
            </div>

            {/* Credential 2: Nepal Chamber of Commerce */}
            <div className="credential-item flex items-start gap-3 group p-2 -mx-2 rounded-xl hover:bg-blue-50/70 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0154A5] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5 group-hover:bg-[#0154A5] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <BuildingIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-[#1a3a6e] leading-snug group-hover:text-[#0154A5] transition-colors">
                  Executive Committee Member
                </span>
                <span className="text-[11px] text-slate-500">
                  Nepal Chamber Of Commerce (NCC)
                </span>
              </div>
            </div>

            {/* Credential 3: Nepal - Singapore Chamber */}
            <div className="credential-item flex items-start gap-3 group p-2 -mx-2 rounded-xl hover:bg-blue-50/70 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0154A5] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5 group-hover:bg-[#0154A5] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <GlobeIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-[#1a3a6e] leading-snug group-hover:text-[#0154A5] transition-colors">
                  Executive Committee Member
                </span>
                <span className="text-[11px] text-slate-500">
                  Nepal - Singapore Chamber of Commerce &amp; Industry
                </span>
              </div>
            </div>

            {/* Credential 4: Conglomerate Heritage */}
            <div className="credential-item flex items-start gap-3 group p-2 -mx-2 rounded-xl hover:bg-blue-50/70 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0154A5] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5 group-hover:bg-[#0154A5] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <CompassIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-[#1a3a6e] leading-snug group-hover:text-[#0154A5] transition-colors">
                  Conglomerate Leadership
                </span>
                <span className="text-[11px] text-slate-500">
                  CEO, Arksh Group • 16+ Sectors • Est. 1978 AD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Message & Keynote) */}
        <div
          ref={rightColRef}
          className="lg:w-[62%] xl:w-[64%] flex flex-col justify-between"
        >
          <div>
            {/* Top Blue Accent Rule */}
            <div className="w-16 h-1 bg-[#0154A5] rounded-full mb-4" />

            {/* Sparkle Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0154A5] mb-2.5">
              <span className="text-[#3498db]">✨</span>
              <span>{badge}</span>
            </div>

            {/* Large Keynote Title */}
            <h2 className="text-[#1a3a6e] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
              {tagline}
            </h2>

            {/* Bio Paragraphs */}
            <p className="text-gray-600 leading-[1.85] mb-5 text-[15px] sm:text-base">
              {bioParagraphs[0]}
            </p>

            <p className="text-gray-600 leading-[1.85] mb-6 text-[15px] sm:text-base">
              {bioParagraphs[1]}
            </p>

            {/* Highlighted Quote Callout */}
            <div className="relative bg-[#f0f6ff] border-l-4 border-[#3498db] rounded-r-2xl px-6 py-4.5 mb-6 shadow-xs hover:border-[#0154A5] transition-colors duration-300">
              <p className="text-[#1a3a6e] font-semibold leading-[1.8] text-[15px] italic">
                &ldquo;{keyQuote}&rdquo;
              </p>
            </div>

            {/* Master's Degree Context */}
            <p className="text-gray-600 leading-[1.85] mb-6 text-[15px] sm:text-base">
              {bioParagraphs[2]}
            </p>

            {/* 2-Column Checkmark Promise Cards */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0154A5]">
                  Core Principles &amp; Societal Commitment
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {promisePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="promise-card flex gap-3 bg-[#f8fbff] rounded-2xl p-4 border border-blue-100/70 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <CheckCircleIcon className="text-[#0154A5] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-[#3498db] transition-all duration-300" />
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-medium">
                      {pillar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
