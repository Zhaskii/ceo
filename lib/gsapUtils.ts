"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.config({ force3D: true });
  ScrollTrigger.config({ limitCallbacks: true });
}

export { gsap, ScrollTrigger, ScrollToPlugin };

/**
 * Inertia-based smooth scrolling to an element or selector with custom offset
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  options: { offset?: number; duration?: number; onComplete?: () => void } = {},
) {
  if (typeof window === "undefined") return;

  const { offset = -72, duration = 0.6, onComplete } = options;

  let targetEl: HTMLElement | null = null;
  if (typeof target === "string") {
    const id = target.startsWith("#") ? target.slice(1) : target;
    targetEl = document.getElementById(id);
  } else {
    targetEl = target;
  }

  if (!targetEl) return;

  const targetPosition =
    targetEl.getBoundingClientRect().top + window.pageYOffset + offset;

  gsap.to(window, {
    scrollTo: { y: targetPosition, autoKill: true },
    duration,
    ease: "power3.out",
    onComplete,
  });
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    start?: string;
  } = {},
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          autoAlpha: options.opacity ?? 0,
          y: options.y ?? 35,
          x: options.x ?? 0,
        },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          duration: options.duration ?? 0.85,
          delay: options.delay ?? 0,
          ease: options.ease ?? "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 88%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [
    options.y,
    options.x,
    options.opacity,
    options.duration,
    options.delay,
    options.ease,
    options.start,
  ]);

  return ref;
}

export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  itemSelector: string,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    ease?: string;
    start?: string;
  } = {},
) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const container = containerRef.current;
    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(itemSelector);
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: options.y ?? 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? 0.75,
          stagger: options.stagger ?? 0.08,
          ease: options.ease ?? "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: container,
            start: options.start ?? "top 88%",
            once: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, [
    itemSelector,
    options.y,
    options.duration,
    options.stagger,
    options.ease,
    options.start,
  ]);

  return containerRef;
}

/**
 * Animates a numeric element from 0 to its target value when scrolled into view
 */
export function useGsapCounter(
  targetValue: number,
  options: { duration?: number; suffix?: string; prefix?: string } = {},
) {
  const { duration = 1.6, suffix = "", prefix = "" } = options;
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetValue,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [targetValue, duration, suffix, prefix]);

  return ref;
}
