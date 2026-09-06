"use client";

import React, { useState, useEffect, useRef } from "react";
import { SearchIcon } from "../ui/Icons";
import { gsap } from "@/lib/gsapUtils";

export default function CeoAffiliationsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const tableRef = useRef<HTMLDivElement>(null);

  const ceoAffiliations = [
    {
      title: "Executive Member",
      organization: "Nepal Chamber Of Commerce",
    },
    {
      title: "Executive Member",
      organization: "Nepal - Singapore Chamber Of Commerce & Industry",
    },
  ];

  const filteredAffiliations = ceoAffiliations.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.organization.toLowerCase().includes(q)
    );
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = tableRef.current?.querySelectorAll(".affiliation-row");
      if (!rows || rows.length === 0) return;

      if (isInitialMount.current) {
        gsap.fromTo(
          rows,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: tableRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
        isInitialMount.current = false;
      } else {
        gsap.fromTo(
          rows,
          { autoAlpha: 0, scale: 0.98 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out",
          },
        );
      }
    }, tableRef);

    return () => ctx.revert();
  }, [searchQuery]);

  return (
    <section
      id="leadership"
      className="py-20 bg-white border-t border-b border-blue-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-3">
            Governance &amp; Public Service
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6e] mb-3">
            Institutional Leadership &amp; Board Roles
          </h2>
          <div className="w-12 h-0.75 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
            Active appointments held by Rajul Shrestha across apex national
            commerce bodies, bilateral trade councils, and economic policy
            councils.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search positions or chambers..."
              className="w-full pl-11 pr-10 py-2.5 rounded-full border border-blue-100 bg-[#f8fbff] text-xs sm:text-sm text-[#1a3a6e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0154A5]/25 focus:border-[#0154A5] transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 text-xs"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Striped Row Table */}
        <div ref={tableRef} className="flex flex-col gap-3">
          {filteredAffiliations.map((item, idx) => (
            <div
              key={idx}
              className="affiliation-row group flex flex-col sm:flex-row sm:items-center justify-between bg-[#f0f6ff] rounded-2xl overflow-hidden border border-blue-50/80 border-l-4 border-l-transparent hover:border-l-[#0154A5] hover:bg-white hover:border-blue-200 hover:shadow-md hover:translate-x-1 transition-all duration-300 p-4 sm:py-4 sm:px-6 cursor-default"
            >
              <div className="sm:w-[42%] font-bold text-[#1a3a6e] text-xs sm:text-sm group-hover:text-[#0154A5] transition-colors leading-snug mb-1 sm:mb-0 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0154A5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                <span>{item.title}</span>
              </div>
              <div className="flex-1 sm:text-right text-gray-600 text-xs sm:text-sm font-medium leading-snug group-hover:text-gray-900 transition-colors">
                {item.organization}
              </div>
            </div>
          ))}

          {filteredAffiliations.length === 0 && (
            <div className="text-center py-10 text-xs text-gray-400 animate-fade-in">
              No positions matching &ldquo;{searchQuery}&rdquo; found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
