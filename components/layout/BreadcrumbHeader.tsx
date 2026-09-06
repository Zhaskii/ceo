import React from "react";
import Link from "next/link";
import { HomeIcon, ChevronRight } from "../ui/Icons";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  bgColor?: string;
}

export default function BreadcrumbHeader({
  title,
  subtitle,
  breadcrumb = [{ name: "Home", href: "/" }, { name: "CEO Message" }],
  bgColor = "#0154A5",
}: BreadcrumbHeaderProps) {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="relative text-white py-14 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden shadow-md"
    >
      {/* Decorative gradient overlay & pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
          {title}
        </h1>

        {subtitle && (
          <p className="text-blue-100/90 text-sm sm:text-base max-w-2xl mb-4 font-normal">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm text-blue-100 font-medium"
        >
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <React.Fragment key={item.name}>
                {index === 0 ? (
                  <Link
                    href={item.href || "/"}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <HomeIcon className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </Link>
                ) : item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{item.name}</span>
                )}

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
