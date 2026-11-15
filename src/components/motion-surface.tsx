"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/** Progressive enhancement: content is never hidden while waiting for JavaScript. */
export function MotionSurface({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = root.current;
    if (!surface || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const registered = new WeakSet<Element>();
    const active = new Map<Element, Animation>();
    const cancelMotion = () => {
      active.forEach((animation) => animation.cancel());
      active.clear();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (
            preference.matches ||
            entry.target.contains(document.activeElement)
          )
            continue;

          const animation = entry.target.animate(
            [
              { opacity: 0.3, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 560, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          active.set(entry.target, animation);
          animation.onfinish = () => active.delete(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    const register = (node: Element) => {
      const candidates = node.matches("[data-reveal]")
        ? [node, ...node.querySelectorAll("[data-reveal]")]
        : node.querySelectorAll("[data-reveal]");
      for (const candidate of candidates) {
        if (registered.has(candidate)) continue;
        registered.add(candidate);
        observer.observe(candidate);
      }
    };
    register(surface);

    // App Router streaming and archive filters can insert content after mount.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) register(node);
        });
        record.removedNodes.forEach((node) => {
          if (!(node instanceof Element) || surface.contains(node)) return;
          [node, ...node.querySelectorAll("[data-reveal]")].forEach(
            (element) => {
              observer.unobserve(element);
              active.get(element)?.cancel();
              active.delete(element);
            }
          );
        });
      }
    });
    mutations.observe(surface, { childList: true, subtree: true });

    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const [element, animation] of active) {
        if (element.contains(event.target)) {
          animation.cancel();
          active.delete(element);
        }
      }
    };
    preference.addEventListener("change", cancelMotion);
    surface.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      preference.removeEventListener("change", cancelMotion);
      surface.removeEventListener("focusin", revealFocused);
      cancelMotion();
    };
  }, []);

  return (
    <div ref={root} className="motion-surface">
      {children}
    </div>
  );
}
