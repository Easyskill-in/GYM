import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(el.querySelectorAll('[data-reveal]'), { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const reveals = el.querySelectorAll('[data-reveal]');
    reveals.forEach((child) => {
      const dir = child.dataset.reveal || 'up';
      const delay = parseFloat(child.dataset.delay) || 0;

      let from = { opacity: 0, duration: 1.2, ease: 'power3.out', delay };
      if (dir === 'up') from.y = 60;
      else if (dir === 'down') from.y = -60;
      else if (dir === 'left') from.x = -60;
      else if (dir === 'right') from.x = 60;
      else if (dir === 'scale') { from.scale = 0.85; }

      gsap.from(child, {
        ...from,
        scrollTrigger: {
          trigger: child,
          start: options.start || 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return ref;
}
