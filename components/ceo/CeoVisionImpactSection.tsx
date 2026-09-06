"use client";

import React, { useEffect, useRef } from "react";
import {
  CompassIcon,
  GlobeIcon,
  AwardIcon,
  CheckCircleIcon,
} from "../ui/Icons";
import { gsap } from "@/lib/gsapUtils";

export default function CeoVisionImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger stats
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll(".stat-box");
        gsap.fromTo(
          stats,
          { autoAlpha: 0, y: 30, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );

        // Animate counter values smoothly from 0 to target with a single trigger
        const counters = statsRef.current.querySelectorAll(".metric-num");
        const counterObjects: {
          el: Element;
          target: number;
          suffix: string;
          val: number;
        }[] = [];

        counters.forEach((counter) => {
          const target = parseInt(
            counter.getAttribute("data-target") || "0",
            10,
          );
          const suffix = counter.getAttribute("data-suffix") || "";
          counterObjects.push({ el: counter, target, suffix, val: 0 });
        });

        if (counterObjects.length > 0) {
          gsap.to(counterObjects, {
            val: (i: number) => counterObjects[i].target,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              counterObjects.forEach((c) => {
                c.el.textContent = `${Math.round(c.val)}${c.suffix}`;
              });
            },
          });
        }
      }

      // Stagger philosophy cards with smooth power4 curve
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".philosophy-card");
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      icon: <GlobeIcon className="w-6 h-6 transition-colors duration-300" />,
      badge: "Global Perspective",
      title: "International Exposure, Local Impact",
      description:
        "Leveraging rigorous distinction-level Master's education from the United Kingdom and global systems to elevate industrial governance, technology integration, and operational standards in Nepal.",
    },
    {
      icon: <AwardIcon className="w-6 h-6 transition-colors duration-300" />,
      badge: "Shared Prosperity",
      title: "Inclusive Economic Growth",
      description:
        "Firmly believing that every part of society must advance alongside the nation's economy — giving back to communities, empowering youth, and advocating through the Nepal Chamber of Commerce.",
    },
    {
      icon: <CompassIcon className="w-6 h-6 transition-colors duration-300" />,
      badge: "Modernization",
      title: "Conglomerate Revamp & Innovation",
      description:
        "Spearheading digital modernization, forward-looking strategic investments, and brand revitalizations across all 16 diverse business sectors of the Arksh Group.",
    },
    {
      icon: (
        <CheckCircleIcon className="w-6 h-6 transition-colors duration-300" />
      ),
      badge: "Human Potential",
      title: "Empowering People & Capabilities",
      description:
        "Instilling confidence across every team member and partner — fostering a collaborative ecosystem where individuals of all capabilities are equipped to excel and achieve their goals.",
    },
  ];

  const impactMetrics = [
    {
      targetNum: 1978,
      suffix: " AD",
      initialText: "1978 AD",
      label: "Enterprise Heritage",
      desc: "Stewardship of an enduring business legacy",
    },
    {
      targetNum: 16,
      suffix: "+",
      initialText: "16+",
      label: "Sectors Spearheaded",
      desc: "Strategic leadership across key market verticals",
    },
    {
      targetNum: 30,
      suffix: "+",
      initialText: "30+",
      label: "Brand Partnerships",
      desc: "Trusted domestic and international alliances",
    },
    {
      targetNum: 2,
      suffix: "",
      initialText: "2",
      label: "Chamber Leadership",
      desc: "Executive appointments at NCC & Singapore Chamber",
    },
  ];

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-t border-blue-50 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none animate-ambient-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f0f6ff]/80 rounded-full blur-3xl pointer-events-none animate-ambient-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
            Philosophy &amp; Impact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3">
            Core Principles &amp; Executive Vision
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
            The values shaping Rajul Shrestha&apos;s leadership philosophy —
            merging UK distinction-level academic grounding, cross-border
            perspective, and purpose-driven enterprise stewardship.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16"
        >
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="philosophy-card bg-gradient-to-br from-[#f8fbff] to-white p-7 sm:p-8 rounded-3xl border border-blue-100/70 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#0154A5] border border-blue-100 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-500">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3498db] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1a3a6e] mb-3 group-hover:text-[#0154A5] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3498db] group-hover:scale-125 transition-transform duration-300" />
                <span className="text-[11px] font-semibold text-[#0154A5] uppercase tracking-wider">
                  Core CEO Principle
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Banner */}
        <div
          ref={statsRef}
          className="bg-gradient-to-r from-[#0154A5] to-[#2357A6] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none animate-ambient-1" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200 block mb-1">
                Arksh Group Conglomerate
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Enterprise Scale &amp; Bilateral Reach
              </h3>
              <p className="text-blue-100/80 text-xs sm:text-sm mt-2 leading-relaxed">
                A legacy established in 1978, continuously evolving under
                forward-looking executive leadership.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {impactMetrics.map((stat, idx) => (
                <div
                  key={idx}
                  className="stat-box text-center bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/18 hover:scale-105 hover:border-white/30 transition-all duration-300"
                >
                  <p
                    className="metric-num text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1"
                    data-target={stat.targetNum}
                    data-suffix={stat.suffix}
                  >
                    {stat.initialText}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-sky-200 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-blue-100/70 leading-snug">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
