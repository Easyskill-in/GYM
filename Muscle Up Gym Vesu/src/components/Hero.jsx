import { useEffect } from 'react';
import { BUSINESS } from '../data/content';

export default function Hero({ onOpenBooking }) {
  useEffect(() => {
    requestAnimationFrame(() => document.querySelector('.hero')?.classList.add('is-ready'));
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=70"
          alt="Athlete training with free weights in a dimly lit gym" fetchPriority="high" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="hero__loc hero__fade"><i aria-hidden="true" /> Sun Arcade Mall, VIP Road, Vesu · Open {BUSINESS.hours}</span>
        <h1>
          <span className="line"><i>Muscle up.</i></span>
          <span className="line"><i className="hero__outline">Level up.</i></span>
        </h1>
        <div className="hero__bottom">
          <div>
            <p className="hero__copy hero__fade hero__fade--d1">
              Premium fitness centre with free weights, cardio, CrossFit zone, group classes and certified
              coaches — 4.9★ rated, located in Sun Arcade Mall, Vesu.
            </p>
            <div className="hero__ctas hero__fade hero__fade--d2">
              <button className="btn" onClick={onOpenBooking}>
                Book a free trial
                <svg className="btn__arrow" width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden="true"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <a className="btn btn--ghost" href="#facilities" onClick={e => { e.preventDefault(); document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore the gym</a>
            </div>
          </div>
          <div className="hero__rating hero__fade hero__fade--d2">
            <strong>4.9<span className="accent">★</span></strong>
            <span>174+ reviews on Google</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true"><i /> Scroll</div>
    </section>
  );
}
