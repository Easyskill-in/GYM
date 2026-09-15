import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.floor((width * height) / 18000);
    const accent = [255, 154, 31]; // #FF9A1F
    const base = [75, 73, 68];     // #4B4944

    for (let i = 0; i < count; i++) {
      const isAccent = Math.random() < 0.12;
      const rgb = isAccent ? accent : base;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        a: Math.random() * 0.45 + 0.08,
        rgb,
      });
    }

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]},${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}
