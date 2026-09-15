export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About B Natural Gym</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A floor built on ethics.</h2>
          <p className="lead reveal" data-d="2">
            A 100% natural and steroid-free gym on the 4th floor of Orchid Harmony, Gaurav Path Road, Adajan.
            Open Mon–Sat with certified coaches, commercial-grade equipment, and a disciplined community that
            believes in real progress through hard work.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Natural training philosophy', p: 'Zero shortcuts. Science-based coaching, sustainable transformations, and a steroid-free environment for authentic progress.' },
              { n: '02', h: 'Premium equipment & hygiene', p: 'Commercial Realleader and Impulse equipment, sanitised daily. Spotless restrooms, locker rooms, and showers.' },
              { n: '03', h: 'Certified fitness coaches', p: 'Professional trainers offering structured, ethical and personalised workout plans — led by founder Bhavesh Mahida.' },
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
            <strong>5:30 AM –<br />10 PM</strong>
            <span>Mon–Sat · Sun Closed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
