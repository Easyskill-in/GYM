import { useEffect } from 'react';
import { GALLERY } from '../data/content';

export default function Lightbox({ isOpen, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onNext(); if (e.key === 'ArrowLeft') onPrev(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  if (!isOpen || index == null) return null;

  const item = GALLERY[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close lightbox" onClick={onClose}>
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M11 1L1 11M1 1l10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      </button>
      <button className="lightbox__prev" aria-label="Previous image" onClick={e => { e.stopPropagation(); onPrev(); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <img key={index} src={item.full} alt={item.alt} onClick={e => e.stopPropagation()} />
      <button className="lightbox__next" aria-label="Next image" onClick={e => { e.stopPropagation(); onNext(); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div className="lightbox__counter" onClick={e => e.stopPropagation()}>
        {index + 1} / {GALLERY.length}
      </div>
    </div>
  );
}
