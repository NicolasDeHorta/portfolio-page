import { useEffect } from "react";

/**
 * Fades in every element with the `reveal` class as it scrolls into view.
 * Respects prefers-reduced-motion by showing everything immediately.
 */
export const useReveal = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
