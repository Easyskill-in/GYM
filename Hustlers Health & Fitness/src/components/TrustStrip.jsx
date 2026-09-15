import { useEffect, useRef } from 'react';

export default function TrustStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && trackRef.current) {
      const items = trackRef.current.children;
      const count = items.length;
      for (let i = 0; i < count; i++) {
        trackRef.current.appendChild(items[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <>
      <section className="strip" aria-label="Highlights">
        <div className="strip__track" ref={trackRef}>
          <span>Air Conditioned</span><span>Sauna</span><span>Free Weights</span>
          <span>CrossFit</span><span>Zumba</span><span>Yoga</span>
          <span>Open 362 Days</span><span>LP Savani Circle, Adajan</span>
        </div>
      </section>
      <section className="section--alt" aria-label="Reputation">
        <div className="container">
          <div className="stats">
            {[
              { num: '734', sup: '+', label: 'Google reviews', note: 'Verified member feedback' },
              { num: '4.9', sup: '★', label: 'Average rating', note: 'Consistently top-rated in Adajan' },
              { num: '362', sup: 'd', label: 'Open per year', note: 'Closed only on major holidays' },
              { num: '17', sup: 'h', label: 'Open daily', note: 'Mon–Sat 6 AM – 11 PM' },
            ].map((s, i) => (
              <div key={i} className={`stat reveal${i ? ` data-d="${i}"` : ''}`}>
                <div className="stat__num"><span data-count={s.num} data-dec={s.num.includes('.') ? 1 : 0}>0</span><sup>{s.sup}</sup></div>
                <div className="stat__label">{s.label}</div>
                <p className="stat__note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
