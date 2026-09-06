import React from "react";
import { ceoProfileData } from "@/data/ceoData";

export default function AffiliationsSection() {
  const { affiliations } = ceoProfileData;

  const extendedAffiliations = [
    ...affiliations,
    {
      title: "Chief Executive Officer",
      organization: "Arksh Group (Est. 1978 AD)",
      period: "Present",
      description: "Leading executive strategy and operations across 16 conglomerate business sectors.",
    },
    {
      title: "Board Director",
      organization: "Arksh Motors, Arksh Food & Dream Skin Nepal",
      period: "Present",
      description: "Executive oversight of distribution, retail, and manufacturing enterprises.",
    },
    {
      title: "Delegate & Keynote Speaker",
      organization: "BIMSTEC Youth Leadership & Regional Summit",
      period: "2026",
      description: "Representing private sector youth leadership across South Asian nations.",
    },
    {
      title: "Keynote Speaker",
      organization: "ACE Institute of Management",
      period: "2025",
      description: "Mentoring next-generation Nepali business leaders and entrepreneurs.",
    },
  ];

  return (
    <section id="leadership" className="py-20 mt-16 bg-white border-t border-b border-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-3">
            Leadership Roles
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6e] mb-3">
            Positions &amp; Affiliations
          </h2>
          <div className="w-12 h-0.75 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
        </div>

        {/* Chairman-style 2-column striped row list */}
        <div className="flex flex-col gap-3">
          {extendedAffiliations.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between bg-[#f0f6ff] rounded-2xl overflow-hidden border border-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="w-[45%] sm:w-[40%] md:w-[35%] px-5 py-4 font-bold text-[#1a3a6e] text-xs sm:text-sm group-hover:text-[#3498db] transition-colors leading-snug">
                {item.title}
              </div>
              <div className="flex-1 px-5 py-4 text-right text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                {item.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
