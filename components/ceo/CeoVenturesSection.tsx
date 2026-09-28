"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { businessSectorsData } from "@/data/ceoData";
import { ChevronRight, SearchIcon, BriefcaseIcon } from "../ui/Icons";
import { gsap } from "@/lib/gsapUtils";

// Custom Sector Icons for Executive Visual Differentiation
const CarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const FoodIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2v20M18 2v20M6 12h12M12 2v20" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const BeverageIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const WatchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="6" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path d="M16 17.5l-.3 3.5a1.5 1.5 0 0 1-1.5 1.5h-4.4a1.5 1.5 0 0 1-1.5-1.5L8 17.5m.3-11L8 3a1.5 1.5 0 0 1 1.5-1.5h4.4A1.5 1.5 0 0 1 15.4 3l.3 3.5" />
  </svg>
);

const HotelIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
  </svg>
);

const TravelIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const FlooringIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6" />
  </svg>
);

const HealthIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);

const BeautyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

const BedIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
  </svg>
);

const FashionIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IndustryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2z" />
    <path d="M17 18h1M12 18h1M7 18h1" />
  </svg>
);

const BiotechIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ConstructionIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M12 6v12M2 12h20M7 6v6M17 12v6" />
  </svg>
);

const TechIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
);

const AgencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

interface SectorDetails {
  macroCategory: string;
  scopeBadge: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  featured?: boolean;
}

const SECTOR_METADATA: Record<string, SectorDetails> = {
  Automobiles: {
    macroCategory: "Mobility & Transit",
    scopeBadge: "Commercial Fleet & EVs",
    description:
      "Spearheading national fleet electrification with exclusive distribution of Higer and Golden Dragon commercial electric buses across public and corporate transit networks.",
    icon: CarIcon,
    featured: true,
  },
  Food: {
    macroCategory: "Consumer Goods & FMCG",
    scopeBadge: "National Food Distribution",
    description:
      "Delivering daily consumer staples, noodles, packaged foods, and confectionery across retail supply chains in all 77 districts of Nepal.",
    icon: FoodIcon,
    featured: true,
  },
  Beverages: {
    macroCategory: "Consumer Goods & FMCG",
    scopeBadge: "Instant Coffee & Beverages",
    description:
      "Exclusive national distribution of market-leading instant coffee, premix teas, and specialty beverage brands including MacCoffee, Klassno, and Nutirite.",
    icon: BeverageIcon,
    featured: true,
  },
  "Luxury Watches & Eyewear": {
    macroCategory: "Luxury & Lifestyle",
    scopeBadge: "Swiss Horology & Boutiques",
    description:
      "Curating Nepal's premier luxury retail destinations through Sulux Centre and Sulux Hour, showcasing authentic Swiss timepieces and designer optical wear.",
    icon: WatchIcon,
    featured: true,
  },
  "Hotels & Restaurants": {
    macroCategory: "Hospitality & Leisure",
    scopeBadge: "Destination Assets",
    description:
      "Operating distinguished hospitality properties including Hotel Peaceland at the UNESCO World Heritage site in Lumbini and Hotel Rara.",
    icon: HotelIcon,
  },
  "Tours & Travels": {
    macroCategory: "Hospitality & Leisure",
    scopeBadge: "Corporate & Leisure Travel",
    description:
      "Full-service corporate travel, ticketing, and bespoke international vacation management through Lifestyle Holidays and Stream Travels.",
    icon: TravelIcon,
  },
  "Carpet and Flooring": {
    macroCategory: "Industrial & Tech",
    scopeBadge: "Interior & Architectural Surfaces",
    description:
      "Supplying luxury commercial carpets, European laminate, and engineered flooring solutions via Urban Earth, Gem Flooring, and Swiss Krono.",
    icon: FlooringIcon,
  },
  "Health & Wellness": {
    macroCategory: "Hospitality & Leisure",
    scopeBadge: "Clinical Rehabilitation",
    description:
      "State-of-the-art physiotherapy, musculoskeletal rehabilitation, and preventive wellness therapies through Nirvana Physiotherapy & Wellness Centre.",
    icon: HealthIcon,
  },
  "Beauty & Cosmetics": {
    macroCategory: "Luxury & Lifestyle",
    scopeBadge: "Skincare & Fragrances",
    description:
      "Omnichannel retail platforms introducing premium Korean skincare, dermatology-backed formulas, and niche international fragrances to Nepal.",
    icon: BeautyIcon,
  },
  "Bed & Mattress": {
    macroCategory: "Consumer Goods & FMCG",
    scopeBadge: "Ergonomic Sleep Systems",
    description:
      "Manufacturing and distributing orthopedic sleep solutions, pocket-spring mattresses, and luxury hospitality bedding under Darling Mattress.",
    icon: BedIcon,
  },
  "Fashion & Accessories": {
    macroCategory: "Luxury & Lifestyle",
    scopeBadge: "Apparel & Contemporary Fashion",
    description:
      "Trendsetting fashion distribution, contemporary innerwear, and lifestyle retail concepts through brands like Fynaza, Clovia, and Suoyue.",
    icon: FashionIcon,
  },
  Industry: {
    macroCategory: "Consumer Goods & FMCG",
    scopeBadge: "Industrial Food Milling",
    description:
      "Large-scale industrial food processing, modern packaging infrastructure, and localized value addition under Arksh Food Industry.",
    icon: IndustryIcon,
  },
  Biotechnology: {
    macroCategory: "Industrial & Tech",
    scopeBadge: "Agri-Tech & Bio-Science",
    description:
      "Advancing high-yield agricultural inputs, sustainable crop management, and bio-tech agronomy through Arksh Agro.",
    icon: BiotechIcon,
  },
  "Construction Materials": {
    macroCategory: "Industrial & Tech",
    scopeBadge: "Building Hardware & Supply",
    description:
      "Direct importation and B2B distribution of certified structural materials and specialized building hardware for major commercial developments.",
    icon: ConstructionIcon,
  },
  // "Electronics & Technology": {
  //   macroCategory: "Industrial & Tech",
  //   scopeBadge: "Consumer Tech & Storage",
  //   description:
  //     "Distribution of high-performance digital storage peripherals, flash memory, and smart consumer technology solutions via PQI.",
  //   icon: TechIcon,
  // },
  "Marketing Agency": {
    macroCategory: "Industrial & Tech",
    scopeBadge: "Digital Growth & Advisory",
    description:
      "Integrated digital marketing, performance media, brand storytelling, and corporate creative production through Arksh Digital.",
    icon: AgencyIcon,
  },
};

export default function CeoVenturesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Mobility & Transit",
    "Consumer Goods & FMCG",
    "Luxury & Lifestyle",
    "Hospitality & Leisure",
    "Industrial & Tech",
  ];

  const getMacroCategory = (sectorName: string): string => {
    return SECTOR_METADATA[sectorName]?.macroCategory || "Industrial & Tech";
  };

  const filteredSectors = useMemo(() => {
    return businessSectorsData.filter((sector) => {
      const macroCat = getMacroCategory(sector.name);
      const matchesCategory =
        selectedCategory === "All" || macroCat === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const matchesName = sector.name.toLowerCase().includes(query);
      const matchesBrands = sector.subBrands.some((b) =>
        b.name.toLowerCase().includes(query),
      );
      const matchesDesc = (SECTOR_METADATA[sector.name]?.description || "")
        .toLowerCase()
        .includes(query);

      return matchesName || matchesBrands || matchesDesc;
    });
  }, [selectedCategory, searchQuery]);

  // Counts for each category tab
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: businessSectorsData.length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = businessSectorsData.filter(
        (s) => getMacroCategory(s.name) === cat,
      ).length;
    });
    return counts;
  }, [categories]);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".venture-card");
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { autoAlpha: 0, scale: 0.96, y: 16 },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.03,
        ease: "power3.out",
      },
    );
  }, [selectedCategory, searchQuery]);

  return (
    <section id="ventures" className="py-20 sm:py-24 bg-[#f0f6ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db] mb-2.5">
            Enterprise Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3a6e] mb-3 tracking-tight">
            Ventures &amp; Enterprise Portfolio
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
            The diversified multi-industry conglomerate spearheaded by Rajul
            Shrestha — directing strategic expansion, joint ventures, and
            operational governance across Nepal&apos;s leading consumer,
            mobility, and industrial sectors.
          </p>
        </div>

        {/* Executive Portfolio Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-100/80 shadow-xs text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black text-[#0154A5]">
              16
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a6e] mt-1">
              Active Sectors
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Conglomerate Breadth
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-100/80 shadow-xs text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black text-[#0154A5]">
              30+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a6e] mt-1">
              Operating Brands
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Global &amp; National Franchises
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-100/80 shadow-xs text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black text-[#0154A5]">
              1978
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a6e] mt-1">
              Enterprise Roots
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Four Decades Heritage
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-100/80 shadow-xs text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black text-[#0154A5]">
              77
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a6e] mt-1">
              Districts Covered
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Pan-Nepal Reach
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search sector or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-blue-100/90 text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#0154A5] focus:ring-1 focus:ring-[#0154A5] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-[#0154A5] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-blue-50/80 hover:text-[#0154A5] border border-blue-100/80"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    selectedCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State when no sectors match */}
        {filteredSectors.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 border border-blue-100 text-center max-w-lg mx-auto shadow-xs my-8">
            <div className="w-12 h-12 bg-blue-50 text-[#0154A5] rounded-full flex items-center justify-center mx-auto mb-4">
              <BriefcaseIcon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1a3a6e] mb-1">
              No Sectors Found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              No ventures matched &quot;{searchQuery}&quot;. Try searching
              another brand or reset filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#0154A5] text-white text-xs font-semibold rounded-xl hover:bg-[#014a94] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Balanced Ventures Grid with Zero Empty Space */
          <div
            ref={gridRef}
            className={`grid gap-6 ${
              filteredSectors.length === 1
                ? "max-w-2xl mx-auto grid-cols-1"
                : filteredSectors.length === 2
                  ? "max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {filteredSectors.map((sector) => {
              const meta = SECTOR_METADATA[sector.name] || {
                macroCategory: "Industrial & Tech",
                scopeBadge: "Conglomerate Sector",
                description:
                  "Directing commercial operations and strategic growth within Rajul Shrestha's executive portfolio.",
                icon: BriefcaseIcon,
              };
              const SectorIconComponent = meta.icon;

              return (
                <div
                  key={sector.name}
                  className="venture-card bg-white rounded-2xl p-6 sm:p-7 border border-blue-100/90 hover:border-blue-300/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Glowing Gradient Accent on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0154A5] via-[#3498db] to-[#013b78] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Badge & Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0154A5] flex items-center justify-center group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                        <SectorIconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap justify-end">
                        {meta.featured && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70">
                            ★ Flagship
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100/80">
                          {meta.macroCategory}
                        </span>
                      </div>
                    </div>

                    {/* Sector Title & Scope */}
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3498db] block mb-1">
                        {meta.scopeBadge}
                      </span>
                      <h3 className="font-bold text-lg text-[#1a3a6e] group-hover:text-[#0154A5] transition-colors duration-200 leading-snug">
                        {sector.name}
                      </h3>
                    </div>

                    {/* Strategic Executive Role Overview */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5">
                      {meta.description}
                    </p>

                    {/* Operating Brands & Divisions Cluster */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Portfolio Brands &amp; Involvements (
                        {sector.subBrands.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {sector.subBrands.map((brand) => (
                          <a
                            key={brand.name}
                            href={brand.href}
                            target={
                              brand.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                              brand.href.startsWith("http")
                                ? "bg-blue-50/70 text-[#0154A5] hover:bg-[#0154A5] hover:text-white border border-blue-100/80 shadow-2xs hover:shadow-xs group/pill"
                                : "bg-slate-50 text-slate-600 border border-slate-200/60 cursor-default"
                            }`}
                          >
                            <span>{brand.name}</span>
                            {brand.href.startsWith("http") && (
                              <ChevronRight className="w-3 h-3 text-[#0154A5] group-hover/pill:text-white group-hover/pill:translate-x-0.5 transition-all duration-200 shrink-0" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Active Sector
                    </span>
                    <span className="text-[#0154A5] font-semibold flex items-center gap-0.5">
                      Rajul Shrestha Portfolio
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Strategic Stewardship Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#0154A5] via-[#014a94] to-[#013b78] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300">
              Corporate Governance &amp; Scale
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">
              Institutional Stewardship &amp; Brand Partnerships
            </h3>
            <p className="text-xs text-blue-100/80 mt-1.5 max-w-xl leading-relaxed">
              Leading sustainable industry modernizations, international joint
              ventures, and nationwide value chains under Arksh Group.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 bg-white text-[#0154A5] hover:bg-sky-50 font-bold text-xs rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Connect With Secretariat →
          </a>
        </div>
      </div>
    </section>
  );
}
