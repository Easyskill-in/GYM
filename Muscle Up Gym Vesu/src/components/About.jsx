export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About Muscle Up Gym</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A fitness destination.</h2>
          <p className="lead reveal" data-d="2">
            A premium fitness centre on the 4th floor of Sun Arcade Mall, VIP Road, Vesu, Surat.
            Open Mon–Sat with certified trainers, comprehensive equipment, and a motivating
            atmosphere — from strength training to group classes.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Complete training floor', p: 'Free weights, resistance machines, cardio zone, and a dedicated functional training area for HIIT, CrossFit, calisthenics and plyometrics.' },
              { n: '02', h: 'Premium amenities', p: 'Clean restrooms, changing rooms, air conditioning, well-maintained equipment and certified trainers — everything you need under one roof.' },
              { n: '03', h: 'Open Mon–Sat', p: '6 AM – 12 PM every day. Morning batches available for early risers. Convenient mall location with easy access from VIP Road.' },
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
            <strong>6 AM – <br />12 PM</strong>
            <span>Mon–Sat · Sun Closed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
