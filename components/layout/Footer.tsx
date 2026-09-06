"use client";

import React, { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon } from "../ui/Icons";
import { smoothScrollTo } from "@/lib/gsapUtils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "info@arkshgroup.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      window.location.href = `mailto:${email}`;
    });
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      smoothScrollTo(targetId, {
        offset: targetId === "home" ? 0 : -75,
        duration: targetId === "home" ? 1.1 : 0.9,
      });
    }
  };

  const quickLinks = [
    { name: "About & Vision", href: "#about" },
    { name: "Leadership & Roles", href: "#leadership" },
    { name: "Keynotes & Media", href: "#interviews" },
    { name: "Moments & Honors", href: "#gallery" },
    { name: "Ventures & Portfolio", href: "#ventures" },
    { name: "Secretariat & Contact", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#0154A5] text-white pt-16 pb-8 font-sans w-full relative overflow-hidden"
    >
      {/* Decorative top curve styling */}
      <div
        className="hidden sm:block absolute top-0 left-0 w-full h-6 pointer-events-none opacity-90"
        style={{
          background: "#f0f6ff",
          clipPath: "ellipse(50% 100% at 50% 0%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pt-4">
        {/* Col 1: About & Contact */}
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
            Official Executive Portfolio
          </p>
          <h3 className="text-xl font-bold mb-2 text-white">Rajul Shrestha</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-white/70 to-transparent rounded-full mb-3" />
          <p className="text-xs sm:text-[13px] leading-relaxed mb-6 text-white/75">
            Entrepreneur, business leader, and visionary investor — CEO of Arksh
            Group (Est. 1978 AD), pioneering transformative enterprise,
            international bilateral partnerships, and economic growth in Nepal.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
            Office of the CEO & Secretariat
          </p>
          <h3 className="text-xl font-bold mb-2 text-white">Direct Contact</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-white/70 to-transparent rounded-full mb-4" />

          <div className="space-y-3.5 text-xs sm:text-[13px]">
            {/* Address */}
            <a
              href="https://maps.google.com/?q=Arksh+Group+Lazimpat+Kathmandu+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <div className="bg-white/15 group-hover:bg-white p-2 rounded-xl mt-0.5 shrink-0 transition-all border border-white/10 group-hover:text-[#0154A5]">
                <MapPinIcon className="w-3.5 h-3.5 text-white group-hover:text-[#0154A5]" />
              </div>
              <span className="text-white/75 group-hover:text-white transition-colors leading-relaxed">
                152 Rani Devi Marg Lazimpat,
                <br />
                Kathmandu, Nepal.
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+97714002049"
              className="flex items-center gap-3 group"
            >
              <div className="bg-white/15 group-hover:bg-white p-2 rounded-xl shrink-0 transition-all border border-white/10 group-hover:text-[#0154A5]">
                <PhoneIcon className="w-3.5 h-3.5 text-white group-hover:text-[#0154A5]" />
              </div>
              <span className="text-white/75 group-hover:text-white transition-colors">
                +977-1-4002049 / +977 980-2074449
              </span>
            </a>

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-3 group text-left w-full cursor-pointer"
            >
              <div className="bg-white/15 group-hover:bg-white p-2 rounded-xl shrink-0 transition-all border border-white/10 group-hover:text-[#0154A5]">
                <MailIcon className="w-3.5 h-3.5 text-white group-hover:text-[#0154A5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/75 group-hover:text-white transition-colors">
                  info@arkshgroup.com
                </span>
                {copied && (
                  <span className="text-[10px] text-sky-200 font-medium">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Col 2: Portfolio Navigation Links */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
            Navigation
          </p>
          <h3 className="text-xl font-bold mb-2 text-white">
            Portfolio Sections
          </h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-white/70 to-transparent rounded-full mb-4" />

          <ul className="space-y-1.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="group flex items-center gap-2 py-1 px-2.5 rounded-lg hover:bg-white/10 transition-colors w-fit text-xs sm:text-[13px] text-white/75 hover:text-white cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-all shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Stay Connected Facebook Embed */}
        <div className="w-full">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
            Stay Connected
          </p>
          <h3 className="text-xl font-bold mb-2 text-white">Follow Us</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-white/70 to-transparent rounded-full mb-4" />

          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-64 border border-white/15 bg-white/5">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FArksh.Group%2F&tabs=timeline&width=340&height=250&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="100%"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
              title="Arksh Group Facebook Feed"
            />
          </div>
        </div>

        {/* Col 4: Find Us Google Maps Embed */}
        <div className="w-full">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
            Headquarters
          </p>
          <h3 className="text-xl font-bold mb-2 text-white">Locate Us</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-white/70 to-transparent rounded-full mb-4" />

          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-64 border border-white/15 bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7063399626504!2d85.31907747568266!3d27.7263518246527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1918569c8961%3A0x5f43dd27a908ad94!2sArksh%20Group!5e0!3m2!1sen!2snp!4v1773384215008!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Arksh Group Location Map"
            />
          </div>
        </div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="mt-12 border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>
            © {currentYear}{" "}
            <span className="text-white/90 font-bold">RAJUL SHRESTHA</span> •{" "}
            <span className="text-white/75 font-medium">
              Official Executive Portfolio
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer inline-flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span className="text-sm">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
