export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About Athletica Fitness</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A fitness destination.</h2>
          <p className="lead reveal" data-d="2">
            A premium gym opposite Lourdes Convent School, Athwalines, Athwa, Surat.
            Open 362 days a year with certified trainers, comprehensive equipment, and a motivating
            atmosphere — led by 10× Guinness World Record Holder Vispy Kharadi.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Complete training floor', p: 'Free weights, resistance machines, cardio zone, and a dedicated functional training area for HIIT, CrossFit, calisthenics and plyometrics.' },
              { n: '02', h: 'Premium amenities', p: 'Clean restrooms, changing rooms, well-maintained equipment and certified trainers — everything you need under one roof.' },
              { n: '03', h: 'Open 362 days a year', p: 'Mon–Fri 6 AM – 10 PM, Saturday 6 AM – 8 PM, Sunday 8 AM – 12 PM. Early mornings or late nights, we are open.' },
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
            <strong>6 AM – <br />10 PM</strong>
            <span>Open 362 days/year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
