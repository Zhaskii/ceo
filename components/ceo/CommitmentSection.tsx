import React from "react";
import { CheckCircleIcon } from "../ui/Icons";
import { ceoProfileData } from "@/data/ceoData";

export default function CommitmentSection() {
  const {
    promiseSubtitle,
    promiseTitle,
    promiseDescription,
    promisePillars,
  } = ceoProfileData;

  return (
    <section id="commitments" className="pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-blue-50 shadow-[0_8px_40px_rgba(52,152,219,0.08)] overflow-hidden">
          {/* Top colored accent line */}
          <div className="h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db]" />

          <div className="p-6 sm:p-10 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
              {promiseSubtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3">
              {promiseTitle}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mb-6 sm:mb-8" />

            <p className="text-gray-600 text-sm sm:text-[15px] leading-[1.88] mb-8 sm:mb-10">
              {promiseDescription}
            </p>

            {/* Core societal pillars */}
            <div className="space-y-4 sm:space-y-5">
              {promisePillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-[#f8fbff] rounded-2xl p-4 sm:p-5 border border-blue-50 hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div className="bg-gradient-to-br from-[#2357A6] to-[#3498db] p-1.5 rounded-full mt-0.5 shrink-0 shadow-[0_4px_12px_rgba(52,152,219,0.3)] text-white">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-gray-700 text-xs sm:text-[14px] leading-[1.85] font-medium">
                    {pillar}
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
