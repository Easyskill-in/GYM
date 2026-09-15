export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About Hustlers Health & Fitness</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A floor built for progress.</h2>
          <p className="lead reveal" data-d="2">
            An air-conditioned gym with sauna on the 1st floor of Pyramid Square, LP Savani Circle, Adajan.
            Open 362 days a year with free weights, resistance machines, CrossFit zone, and group classes
            from Zumba to HIIT — everything you need under one roof.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Complete training floor', p: 'Free weights, resistance machines, cardio zone, and a dedicated CrossFit & functional training area.' },
              { n: '02', h: 'Premium amenities', p: 'Air-conditioned throughout with sauna, clean locker rooms, showers, and ample parking — all included.' },
              { n: '03', h: 'Open 362 days a year', p: 'Mon–Sat 6 AM – 11 PM, Sunday 7 AM – 12 PM & 5 – 9 PM. Early mornings or late nights, we are open.' },
            ].map((pt, i) => (
              <div key={i} className={`about__point reveal`} data-d={String(i + 2)}>
                <b>{pt.n}</b>
                <div><h4>{pt.h}</h4><p>{pt.p}</p></div>
              </div>
            ))}
          </div>
          <a className="btn btn--ghost reveal" data-d="4" href="#facilities"
            onClick={e => { e.preventDefault(); document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>
            See the facilities
          </a>
        </div>
        <div className="about__media reveal" data-d="1">
          <img loading="lazy" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1100&q=70"
            alt="Rack of dumbbells arranged along a gym wall" />
          <div className="about__badge">
            <strong>6 AM – <br />11 PM</strong>
            <span>Open 362 days/year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
