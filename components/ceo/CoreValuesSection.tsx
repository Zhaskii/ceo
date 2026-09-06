import React from "react";
import { GlobeIcon, AwardIcon, CompassIcon, CheckCircleIcon } from "../ui/Icons";

export default function CoreValuesSection() {
  const values = [
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Global Mindset & Exposure",
      description:
        "Infusing international best practices, systems, and institutional rigor gained from years of global academic and industrial exposure.",
    },
    {
      icon: <CompassIcon className="w-6 h-6" />,
      title: "Continuous Learning & Vision",
      description:
        "Relentlessly pursuing new knowledge, cutting-edge market insights, and sustainable modernization across all conglomerate verticals.",
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      title: "Empowering People & Society",
      description:
        "Fostering an empowering workplace while driving social welfare so every community advances alongside the national economy.",
    },
    {
      icon: <AwardIcon className="w-6 h-6" />,
      title: "Operational Excellence",
      description:
        "Championing stringent quality benchmarks, trusted partnerships, and customer delight across our 16 diversified business sectors.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
            Arksh Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3">
            Core Leadership Principles
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#f8fbff] rounded-2xl p-6 sm:p-7 border border-blue-50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0154A5] to-[#3498db] text-white flex items-center justify-center mb-5 shadow-[0_4px_16px_rgba(1,84,165,0.2)]">
                {v.icon}
              </div>
              <h3 className="font-bold text-base text-[#1a3a6e] mb-2.5">
                {v.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed grow">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
