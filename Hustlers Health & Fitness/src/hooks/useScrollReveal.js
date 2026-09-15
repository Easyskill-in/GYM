import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(c => {
        c.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    );

    el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
