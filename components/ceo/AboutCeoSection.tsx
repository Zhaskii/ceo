import React from "react";
import { AwardIcon, GlobeIcon, CompassIcon, CheckCircleIcon } from "../ui/Icons";

export default function AboutCeoSection() {
  const milestones = [
    {
      period: "Academic Distinction",
      title: "Global Education in the United Kingdom",
      description:
        "Completed a Master's degree with distinction from England, UK, acquiring advanced knowledge of international commerce, institutional systems, and corporate governance.",
      icon: <AwardIcon className="w-5 h-5" />,
    },
    {
      period: "Strategic Leadership",
      title: "Executive Modernization of Arksh Group",
      description:
        "Spearheading the group-wide image revamp, establishing modern working environments, optimizing supply chains, and integrating digital tools across 16 business verticals.",
      icon: <CompassIcon className="w-5 h-5" />,
    },
    {
      period: "National Trade Policy",
      title: "Chambers of Commerce Governance",
      description:
        "Serving as Executive Member of the Nepal Chamber of Commerce and Nepal - Singapore Chamber of Commerce & Industry to drive foreign direct investments and private sector advocacy.",
      icon: <GlobeIcon className="w-5 h-5" />,
    },
    {
      period: "Societal Progress",
      title: "Philanthropy & Youth Empowerment",
      description:
        "Championing community welfare initiatives through Arksh Helps and mentoring young entrepreneurs across Nepal to build scalable, value-creating ventures.",
      icon: <CheckCircleIcon className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about-ceo" className="py-16 sm:py-20 bg-white border-t border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
            Executive Profile
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3">
            Leadership Story &amp; Vision
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
            Bridging international academic excellence with decisive entrepreneurial execution to lead one of Nepal&apos;s most diversified business conglomerates.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              As the Chief Executive Officer of Arksh Group, <strong>Rajul Shrestha</strong> represents a new generation of dynamic Nepali business leaders who synthesize global perspectives with deep-rooted domestic market wisdom.
            </p>
            <p>
              Having spent nearly half his life abroad for rigorous academic pursuits in England, United Kingdom, where he completed his Master&apos;s degree with distinction, he brings high standards of institutional governance, transparency, and operational efficiency to Arksh Group.
            </p>
            <div className="p-5 rounded-2xl bg-[#f0f6ff] border border-blue-100 border-l-4 border-l-[#0154A5]">
              <p className="text-[#1a3a6e] font-semibold italic text-sm">
                &ldquo;Our vision is to build an enduring enterprise that doesn&apos;t just generate commercial value, but elevates the quality of life for our consumers and creates sustainable growth for our nation.&rdquo;
              </p>
            </div>
            <p>
              Under his executive stewardship, Arksh Group continues to expand into high-growth sectors including automotive distribution, modern food and beverage manufacturing, hospitality, healthcare, and technology.
            </p>
          </div>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#f8fbff] p-5 sm:p-6 rounded-2xl border border-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0154A5] text-white flex items-center justify-center mb-4 shadow-sm">
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3498db]">
                    {m.period}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#1a3a6e] mt-1 mb-2 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
