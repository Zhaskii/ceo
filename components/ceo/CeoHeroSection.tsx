import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "../ui/Icons";
import { ceoProfileData } from "@/data/ceoData";

export default function CeoHeroSection() {
  const {
    name,
    role,
    company,
    tagline,
    badge,
    image,
    alt,
    bioParagraphs,
    keyQuote,
    promisePillars,
  } = ceoProfileData;

  return (
    <section id="message" className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(52,152,219,0.10)] flex flex-col lg:flex-row overflow-hidden border border-blue-50">
        {/* Left Column (lg:w-2/5) - Exact Chairman profile styling */}
        <div className="lg:w-2/5 p-8 bg-gradient-to-b from-[#f8fbff] to-white flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-blue-50">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(52,152,219,0.18)] w-full aspect-square mb-7 group">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2050]/65 to-transparent" />

            {/* Corner Badge */}
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#2357A6] to-[#3498db] text-white px-5 py-3 rounded-tl-2xl text-center shadow-lg z-10">
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
                Distinction
              </p>
              <p className="text-[9px] uppercase tracking-widest mt-0.5 opacity-90">
                Master&apos;s (UK)
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2">
              {role}
            </p>
            <h2 className="text-[#1a3a6e] text-2xl font-bold leading-tight">
              {name}
            </h2>
            <p className="text-gray-400 text-[11px] uppercase tracking-widest mt-1 font-medium">
              CEO • {company}
            </p>
            <div className="w-10 h-0.75 bg-gradient-to-r from-[#2357A6] to-[#3498db] mx-auto mt-4 rounded-full" />
          </div>
        </div>

        {/* Right Column (lg:w-3/5) - Exact Chairman text styling */}
        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="h-0.75 w-full bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mb-8" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-3">
              {badge}
            </p>
            <h3 className="text-[#1a3a6e] text-xl sm:text-2xl font-bold mb-6 leading-snug">
              {tagline}
            </h3>

            <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">
              {bioParagraphs[0]}
            </p>

            <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">
              {bioParagraphs[1]}
            </p>

            {/* Highlighted Quote Callout */}
            <div className="relative bg-[#f0f6ff] border-l-4 border-[#3498db] rounded-r-2xl px-6 py-5 mb-7">
              <p className="text-[#1a3a6e] font-medium leading-[1.8] text-[15px] italic">
                &ldquo;{keyQuote}&rdquo;
              </p>
            </div>

            {/* Grid Checkmark Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {promisePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 bg-[#f8fbff] rounded-2xl p-4 border border-blue-50"
                >
                  <CheckCircleIcon className="text-[#3498db] w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-gray-500 text-[13px] leading-[1.75]">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-500 leading-[1.85] text-[15px]">
              {bioParagraphs[2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

