import { useEffect, useRef, useCallback } from 'react';

export function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };
    const onMouseLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Hover detection
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          dot.classList.add('hovering');
          ring.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
          dot.classList.remove('hovering');
          ring.classList.remove('hovering');
        });
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      dot.style.left = mouse.current.x + 'px';
      dot.style.top = mouse.current.y + 'px';
      ring.style.left = pos.current.x + 'px';
      ring.style.top = pos.current.y + 'px';

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return { dotRef, ringRef };
}
