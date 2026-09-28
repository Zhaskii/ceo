"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  ChatBubbleIcon,
  BriefcaseIcon,
  VideoCameraIcon,
  PhotoOutlineIcon,
  MapPinOutlineIcon,
} from "../ui/Icons";
import { smoothScrollTo } from "@/lib/gsapUtils";
import ceo from "@/public/images/ARKSH-CEO.png";

interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const navItems: NavItemConfig[] = [
    {
      id: "about",
      label: "About & Vision",
      href: "#about",
      icon: <ChatBubbleIcon className="w-4 h-4" />,
    },
    {
      id: "leadership",
      label: "Leadership & Roles",
      href: "#leadership",
      icon: <BriefcaseIcon className="w-4 h-4" />,
    },
    {
      id: "interviews",
      label: "Keynotes & Media",
      href: "#interviews",
      icon: <VideoCameraIcon className="w-4 h-4" />,
    },
    {
      id: "gallery",
      label: "Moments & Honors",
      href: "#gallery",
      icon: <PhotoOutlineIcon className="w-4 h-4" />,
    },
    {
      id: "ventures",
      label: "Ventures & Portfolio",
      href: "#ventures",
      icon: <GlobeIcon className="w-4 h-4" />,
    },
    {
      id: "contact",
      label: "Secretariat & Contact",
      href: "#contact",
      icon: <MapPinOutlineIcon className="w-4 h-4" />,
    },
  ];

  // Smooth scroll handler using GSAP inertia scrolling
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      // Resolve alias
      const resolvedId =
        targetId === "about" && !document.getElementById("about")
          ? "message"
          : targetId;

      smoothScrollTo(resolvedId, {
        offset: -72,
        duration: 0.6,
      });
      setActiveSection(targetId === "message" ? "about" : targetId);
      setMobileMenuOpen(false);
    }
  };

  // Ultra-lightweight rAF-throttled scroll progress & isScrolled tracker (Zero React re-render thrash)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const nextScrolled = scrollY > 20;

          if (isScrolledRef.current !== nextScrolled) {
            isScrolledRef.current = nextScrolled;
            setIsScrolled(nextScrolled);
          }

          if (progressBarRef.current) {
            const winHeight =
              document.documentElement.scrollHeight - window.innerHeight;
            const progress = winHeight > 0 ? scrollY / winHeight : 0;
            progressBarRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Native IntersectionObserver for zero-reflow ScrollSpy off the main thread
  useEffect(() => {
    const sections = [
      "about",
      "message",
      "leadership",
      "interviews",
      "gallery",
      "ventures",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id === "message" ? "about" : id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. Top Blue Bar - Mobile and Desktop Responsive Design */}
      <div className="bg-[#0154A5] text-white py-2 px-4 sm:px-8 lg:px-14 border-b border-white/10 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left: Email (and Phone on sm+) */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <a
              href="mailto:info@arkshgroup.com"
              className="flex items-center gap-2 text-white/95 hover:text-white transition-colors"
            >
              <div className="bg-white/15 p-1 rounded-md">
                <MailIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs">info@arkshgroup.com</span>
            </a>

            <span className="hidden sm:inline text-white/30 font-light">|</span>

            <a
              href="tel:+9779802074449"
              className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <div className="bg-white/15 p-1 rounded-md">
                <PhoneIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span>+977 980-2074449</span>
            </a>
          </div>

          {/* Right: Green Status Dot + Arksh Group */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-bold text-sky-300">
              EXECUTIVE PORTFOLIO
            </span>
            <span className="w-2 h-2 rounded-full bg-[#00e676] inline-block animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide">
              Arksh Group
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar - Sticky with Exact Outline Icons, Clean and No Dropdowns */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-blue-100/80 shadow-[0_8px_30px_rgba(1,84,165,0.08)] py-2"
            : "bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-2.5"
        }`}
      >
        {/* Subtle Reading Scroll Progress Bar (Hardware-accelerated scaleX, 0 re-renders) */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
          <div
            ref={progressBarRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[#0154A5] via-[#3498db] to-[#00e676] will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8 2xl:px-12 flex justify-between items-center gap-2 xl:gap-4">
          {/* Left Brand Identity - Initials & Executive Title */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
            aria-label="Rajul Shrestha - Back to top"
          >
            {/* ARKSH logo */}
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-[#0154A5]/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md sm:h-11 sm:w-11">
              <Image
                src={ceo}
                alt="ARKSH logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile Brand / Executive Identity Text (2 Lines - Matching Screenshot) */}
            <div className="flex lg:hidden flex-col text-left">
              <span className="font-extrabold text-[15px] sm:text-base text-[#0f2050] tracking-tight group-hover:text-[#0154A5] transition-colors leading-tight">
                Rajul Shrestha
              </span>
              <span className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                Executive Portfolio • Arksh Group
              </span>
            </div>

            {/* Desktop Brand / Executive Identity Text (Single Line for Clean Alignment) */}
            <div className="hidden lg:flex items-center gap-2 text-left shrink-0">
              <span className="font-extrabold text-sm sm:text-base text-[#1a3a6e] tracking-tight group-hover:text-[#0154A5] transition-colors whitespace-nowrap">
                Rajul Shrestha
              </span>
              <span className="text-slate-300 font-light select-none hidden 2xl:inline">
                |
              </span>
              <span className="text-[10px] 2xl:text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap hidden 2xl:inline">
                Executive Portfolio • Arksh Group
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Outline Icons - Guaranteed Single Line */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 flex-nowrap shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-xl text-xs xl:text-[13px] font-semibold transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap shrink-0 select-none ${
                    isActive
                      ? "bg-[#eef6ff] text-[#0154A5] font-bold border border-blue-200/80 shadow-2xs"
                      : "text-[#334155] hover:text-[#0154A5] hover:bg-blue-50/70"
                  }`}
                >
                  <span
                    className={`transition-colors duration-200 shrink-0 hidden xl:inline-flex ${
                      isActive
                        ? "text-[#0154A5]"
                        : "text-slate-400 group-hover:text-[#0154A5]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap leading-none">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Toggle - Soft Rounded Card Button Matching Screenshot */}
          <button
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 bg-[#f0f6ff] hover:bg-blue-100/70 active:scale-95 rounded-2xl flex items-center justify-center text-[#0154A5] transition-all shadow-2xs border border-blue-100/60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-5 h-5 text-[#0154A5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[85vh] border-t border-blue-100 shadow-2xl"
              : "max-h-0"
          }`}
        >
          <div className="bg-white/98 backdrop-blur-xl px-4 py-4 overflow-y-auto max-h-[85vh] text-[#1a3a6e]">
            {/* Direct Navigation Links */}
            <div className="space-y-1 pb-3 mb-3 border-b border-blue-50">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#eef6ff] text-[#0154A5] font-bold border border-blue-100"
                        : "hover:bg-blue-50/50 text-slate-700"
                    }`}
                  >
                    <span
                      className={isActive ? "text-[#0154A5]" : "text-slate-400"}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <a
                href="mailto:info@arkshgroup.com"
                className="flex items-center gap-2.5 text-gray-600 hover:text-[#0154A5]"
              >
                <div className="bg-blue-50 p-1.5 rounded-lg text-[#0154A5]">
                  <MailIcon className="w-3.5 h-3.5" />
                </div>
                <span>info@arkshgroup.com</span>
              </a>
              <a
                href="tel:+9779802074449"
                className="flex items-center gap-2.5 text-gray-600 hover:text-[#0154A5]"
              >
                <div className="bg-blue-50 p-1.5 rounded-lg text-[#0154A5]">
                  <PhoneIcon className="w-3.5 h-3.5" />
                </div>
                <span>+977 980-2074449</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
