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
          <span>Strength floor</span><span>Cardio zone</span><span>Functional training</span>
          <span>Personal coaching</span><span>Group classes</span><span>Open 6 AM – 10 PM</span>
          <span>Honey Park Road, Adajan</span>
        </div>
      </section>
      <section className="section--alt" aria-label="Reputation">
        <div className="container">
          <div className="stats">
            {[
              { num: '498', sup: '+', label: 'Ratings online', note: 'Across public directories' },
              { num: '4.6', sup: '★', label: 'Average rating', note: 'Publicly listed average' },
              { num: '5', sup: '+', label: 'Years in Adajan', note: 'Listed since 2019' },
              { num: '16', sup: 'h', label: 'Open daily', note: '6 AM to 10 PM' },
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
