"use client";

import React, { useState } from "react";
import { businessSectorsData } from "@/data/ceoData";
import { GlobeIcon, ChevronRight } from "../ui/Icons";

export default function PortfolioVenturesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Automobiles",
    "Food & Beverages",
    "Health & Wellness",
    "Luxury & Fashion",
    "Hospitality",
    "Industrial & Materials",
  ];

  const getMappedCategory = (sectorName: string): string => {
    if (sectorName.includes("Automobile")) return "Automobiles";
    if (sectorName.includes("Food") || sectorName.includes("Beverage")) return "Food & Beverages";
    if (sectorName.includes("Health") || sectorName.includes("Beauty") || sectorName.includes("Wellness")) return "Health & Wellness";
    if (sectorName.includes("Luxury") || sectorName.includes("Fashion")) return "Luxury & Fashion";
    if (sectorName.includes("Hotel") || sectorName.includes("Travel")) return "Hospitality";
    return "Industrial & Materials";
  };

  const filteredSectors = businessSectorsData.filter((sector) => {
    if (selectedCategory === "All") return true;
    return getMappedCategory(sector.name) === selectedCategory;
  });

  return (
    <section id="ventures" className="py-16 sm:py-20 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
            Group Conglomerate
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3">
            Involvements &amp; Industry Portfolio
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#2357A6] to-[#3498db] rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
            Arksh Group leads a portfolio spanning 16 critical business verticals and more than 30 trusted national and international brands.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0154A5] text-white shadow-md scale-102"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#0154A5] border border-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-50 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3498db] bg-blue-50 px-2.5 py-1 rounded-full">
                    {getMappedCategory(sector.name)}
                  </span>
                  <GlobeIcon className="w-4 h-4 text-gray-400" />
                </div>

                <h3 className="font-bold text-base text-[#1a3a6e] mb-3">
                  {sector.name}
                </h3>

                <div className="space-y-1.5 border-t border-blue-50/60 pt-3">
                  {sector.subBrands.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      target={brand.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs text-gray-600 hover:text-[#0154A5] font-medium py-1 px-1.5 rounded-lg hover:bg-blue-50/50 transition-colors group"
                    >
                      <span className="truncate">• {brand.name}</span>
                      {brand.href.startsWith("http") && (
                        <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0154A5] shrink-0" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-50 text-[11px] text-gray-400 font-medium">
                Arksh Group Portfolio Brand
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
