"use client";

import React, { useState } from "react";
import {
  BriefcaseIcon,
  ChatBubbleIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PhotoOutlineIcon,
  VideoCameraIcon,
} from "../ui/Icons";
import { smoothScrollTo } from "@/lib/gsapUtils";

const portfolioLinks = [
  { name: "About & Vision", href: "#about", icon: ChatBubbleIcon },
  { name: "Leadership & Roles", href: "#leadership", icon: BriefcaseIcon },
  { name: "Keynotes & Media", href: "#interviews", icon: VideoCameraIcon },
  { name: "Moments & Honors", href: "#gallery", icon: PhotoOutlineIcon },
  { name: "Ventures & Portfolio", href: "#ventures", icon: GlobeIcon },
];

const credentials = [
  "Chief Executive Officer, Arksh Group",
  "Executive Member, Nepal Chamber of Commerce",
  "Executive Member, Nepal–Singapore Chamber of Commerce & Industry",
  "Business leader and long-term investor",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "info@arkshgroup.com";
    void navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const targetId = href.slice(1);
    const resolvedId =
      targetId === "about" && !document.getElementById("about")
        ? "message"
        : targetId;

    smoothScrollTo(resolvedId, {
      offset: targetId === "home" ? 0 : -75,
      duration: targetId === "home" ? 1.1 : 0.9,
    });
  };

  return (
    <footer
      id="contact"
      className="relative isolate w-full overflow-hidden bg-[#07549c] pt-16 pb-8 font-sans text-white sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1.2px)",
          backgroundSize: "39px 39px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-sky-400/10 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.18fr_1.08fr] lg:gap-10 xl:px-12">
        <section aria-label="Personal profile" className="max-w-sm">
          <a
            href="#home"
            onClick={(event) => handleScrollTo(event, "#home")}
            className="group mb-7 inline-flex items-center gap-4"
            aria-label="Rajul Shrestha — back to top"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003d7b] text-xl font-extrabold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_24px_rgba(0,30,77,0.2)] transition-transform duration-300 group-hover:scale-105">
              RS
            </span>
            <span>
              <span className="block text-[17px] font-extrabold tracking-tight text-white sm:text-lg">
                Rajul Shrestha
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                Personal Portfolio
              </span>
            </span>
          </a>

          <p className="text-sm leading-7 text-sky-100/75">
            Entrepreneur and business leader focused on building enduring
            enterprises, meaningful partnerships, and opportunities for Nepal.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href="https://maps.google.com/?q=Arksh+Group+Lazimpat+Kathmandu+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-sky-100/75 transition-colors hover:text-white"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-300 transition-colors group-hover:bg-white group-hover:text-[#07549c]">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <span className="pt-1 leading-5">
                152 Rani Devi Marg, Lazimpat
                <br />
                Kathmandu, Nepal
              </span>
            </a>
            <a
              href="tel:+97714002049"
              className="group flex items-center gap-3 text-sky-100/75 transition-colors hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-300 transition-colors group-hover:bg-white group-hover:text-[#07549c]">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span>+977 1 4002049 / +977 980 2074449</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex w-full items-center gap-3 text-left text-sky-100/75 transition-colors hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-300 transition-colors group-hover:bg-white group-hover:text-[#07549c]">
                <MailIcon className="h-4 w-4" />
              </span>
              <span>
                <span className="block">info@arkshgroup.com</span>
              </span>
            </button>
          </div>
        </section>

        <section aria-labelledby="portfolio-links-title">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-300/75">
            Portfolio
          </p>
          <h2
            id="portfolio-links-title"
            className="mt-2 text-xl font-bold tracking-tight"
          >
            Explore This Site
          </h2>
          <div className="mt-6 h-0.5 w-10 rounded-full bg-cyan-400" />

          <ul className="mt-5 space-y-1.5">
            {portfolioLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={(event) => handleScrollTo(event, href)}
                  className="group inline-flex items-center gap-3 rounded-lg py-1.5 pr-3 text-sm text-sky-100/70 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="credentials-title">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-300/75">
            Profile
          </p>
          <h2
            id="credentials-title"
            className="mt-2 text-xl font-bold tracking-tight"
          >
            Key Credentials
          </h2>
          <div className="mt-6 h-0.5 w-10 rounded-full bg-cyan-400" />

          <ul className="mt-5 space-y-4">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="flex gap-3 text-sm leading-5 text-sky-100/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{credential}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="location-title" className="min-w-0">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-300/75">
            Location
          </p>
          <h2
            id="location-title"
            className="mt-2 text-xl font-bold tracking-tight"
          >
            Office Location
          </h2>
          <div className="mt-6 h-0.5 w-10 rounded-full bg-cyan-400" />

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-[0_12px_28px_rgba(0,28,68,0.24)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7063399626504!2d85.31907747568266!3d27.7263518246527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1918569c8961%3A0x5f43dd27a908ad94!2sArksh%20Group!5e0!3m2!1sen!2snp!4v1773384215008!5m2!1sen!2snp"
              width="100%"
              height="245"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajul Shrestha's Kathmandu office location"
            />
          </div>
          <a
            href="https://maps.google.com/?q=Arksh+Group+Lazimpat+Kathmandu+Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
          >
            <GlobeIcon className="h-4 w-4" />
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-6 sm:px-10 xl:px-12">
        <div className="flex flex-col gap-3 text-xs text-sky-200/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear}{" "}
            <span className="font-bold text-white">Rajul Shrestha</span>. All
            rights reserved.
          </p>
          <p className="text-sky-200/55">
            Personal portfolio <span className="mx-2">•</span> Kathmandu, Nepal
          </p>
        </div>
      </div>

      <a
        href="#home"
        onClick={(event) => handleScrollTo(event, "#home")}
        aria-label="Back to top"
        className="absolute bottom-8 right-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-[#0d62b3] text-2xl text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1672c7] sm:right-8"
      >
        ↑
      </a>
    </footer>
  );
}
