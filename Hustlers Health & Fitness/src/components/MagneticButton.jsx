import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const strength = 0.3;

    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <span ref={btnRef} className={`magnetic-btn inline-block ${className}`} {...props}>
      {children}
    </span>
  );
}
