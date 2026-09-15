import { useState, useEffect } from 'react';
import { BUSINESS, NAV } from '../data/content';

export default function Navbar({ onOpenBooking }) {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 40);
      const secs = NAV.map(l => l.toLowerCase());
      for (let i = secs.length - 1; i >= 0; i--) {
        const el = document.getElementById(secs[i]);
        if (el && el.getBoundingClientRect().top <= 100) { setActive(secs[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const nav = (href) => { setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <header className={`nav${stuck ? ' is-stuck' : ''}`}>
        <div className="container nav__inner">
          <a href="#home" className="logo" onClick={e => { e.preventDefault(); nav('#home'); }}>
            <span className="logo__mark" aria-hidden="true">F</span>
            <span>{BUSINESS.name}<span className="logo__sub">Citylight · Surat</span></span>
          </a>
          <nav className="nav__links" aria-label="Main">
            {NAV.map(l => (
              <a key={l} className={`nav__link${active === l.toLowerCase() ? ' is-active' : ''}`} href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); nav(`#${l.toLowerCase()}`); }}>{l}</a>
            ))}
          </nav>
          <div className="nav__actions">
            <button className="btn btn--sm" onClick={onOpenBooking}>Start your journey</button>
            <button className="burger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__list" aria-label="Mobile">
          {NAV.slice(1).map((l, i) => (
            <a key={l} className="mobile-menu__link" href={`#${l.toLowerCase()}`}
              onClick={e => { e.preventDefault(); nav(`#${l.toLowerCase()}`); }}>
              {l} <span>0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <button className="btn btn--block" onClick={() => { setMenuOpen(false); onOpenBooking(); }}>Book a free trial</button>
          <p className="mobile-menu__meta">{BUSINESS.address}<br /><a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a></p>
        </div>
      </div>
    </>
  );
}
