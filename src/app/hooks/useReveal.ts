import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref container.
 * Every child element with class "reveal" gets "revealed" added
 * when it crosses the threshold, with an incremental stagger delay.
 *
 * @param staggerMs  - delay between sibling reveals in ms (default 80)
 * @param threshold  - intersection ratio to trigger (default 0.12)
 */
export function useReveal(staggerMs = 80, threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion at the JS level too
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = ref.current;
    if (!container) return;

    const targets = Array.from(container.querySelectorAll<HTMLElement>(".reveal"));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          // stagger index is stored on the element when we register
          const delay = Number(el.dataset.revealDelay ?? 0);
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        });
      },
      { threshold }
    );

    targets.forEach((el, i) => {
      el.dataset.revealDelay = String(i * staggerMs);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [staggerMs, threshold]);

  return ref;
}
