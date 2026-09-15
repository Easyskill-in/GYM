import { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import Transformation from './components/Transformation';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';
import Lightbox from './components/Lightbox';
import Toast, { useToast } from './components/Toast';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState('');
  const [lb, setLb] = useState({ open: false, index: null });
  const cursorRef = useRef(null);
  const toast = useToast();

  // Lenis smooth scroll
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => lenis.destroy();
  }, []);

  // GSAP scroll reveals
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 86%',
        once: true,
        onEnter: () => el.classList.add('in'),
      });
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Animated count-up for stat numbers
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll('[data-count]').forEach(el => {
        const dec = parseInt(el.dataset.dec) || 0;
        el.textContent = parseFloat(el.dataset.count).toFixed(dec);
      });
      return;
    }
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec) || 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        onUpdate: () => { el.textContent = obj.v.toFixed(dec); },
      });
    });
  }, []);

  // Custom cursor
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window;
    if (reduced || isTouch || !cursorRef.current) return;
    const cursor = cursorRef.current;
    const move = e => { cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; };
    const addHover = () => cursor.classList.add('is-hover');
    const removeHover = () => cursor.classList.remove('is-hover');
    document.addEventListener('mousemove', move);
    const hoverEls = document.querySelectorAll('a, button, .fac, .shot');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });
    return () => {
      document.removeEventListener('mousemove', move);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.querySelector('.progress-bar');
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Demo ribbon close
  useEffect(() => {
    const ribbon = document.querySelector('.demo-ribbon');
    if (!ribbon) return;
    const btn = ribbon.querySelector('.demo-ribbon__close');
    if (!btn) { ribbon.style.display = 'none'; return; }
    btn.onclick = () => { ribbon.remove(); };
  }, []);

  const openBooking = useCallback(plan => { setModalPlan(plan || ''); setModalOpen(true); }, []);
  const closeBooking = useCallback(() => setModalOpen(false), []);
  const openLightbox = useCallback(i => setLb({ open: true, index: i }), []);
  const closeLightbox = useCallback(() => setLb({ open: false, index: null }), []);
  const prevLightbox = useCallback(() => setLb(s => ({ ...s, index: (s.index + 7) % 8 })), []);
  const nextLightbox = useCallback(() => setLb(s => ({ ...s, index: (s.index + 1) % 8 })), []);

  return (
    <div className="page">
      <div className="demo-ribbon">
        {/* <div className="container demo-ribbon__inner">
          <p className="demo-ribbon__text">
            <strong>Demo:</strong> This is a website concept built for Gym Flex, Adajan.
          </p>
          <button className="demo-ribbon__close" type="button" aria-label="Close demo banner">
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M11 1L1 11M1 1l10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div> */}
      </div>
      <div className="progress-bar" aria-hidden="true" />
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <ParticleCanvas />
      <Navbar onOpenBooking={openBooking} />
      <Hero onOpenBooking={openBooking} />
      <TrustStrip />
      <About />
      <Facilities />
      <Trainers />
      <Transformation />
      <Membership onSelectPlan={openBooking} />
      <Gallery onOpenLightbox={openLightbox} />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BookingModal isOpen={modalOpen} onClose={closeBooking} defaultPlan={modalPlan} />
      <Lightbox isOpen={lb.open} index={lb.index} onClose={closeLightbox} onPrev={prevLightbox} onNext={nextLightbox} />
      <Toast toast={toast} />
    </div>
  );
}
