export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About Gym 11</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A community for progress.</h2>
          <p className="lead reveal" data-d="2">
            A complete gym on the 3rd floor of Shiv Pooja Complex, City Light Road, Athwa, Surat.
            Open all days with certified trainers, a wide variety of equipment, and a motivating
            atmosphere — from strength training to yoga and zumba.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Complete training floor', p: 'Free weights, resistance machines, cardio zone, and a separate functional training area for HIIT, CrossFit, calisthenics and plyometrics.' },
              { n: '02', h: 'Professional & friendly staff', p: 'Well-trained, experienced trainers. Clean restrooms, gender-neutral toilets, free Wi-Fi and multiple payment options including Google Pay.' },
              { n: '03', h: 'Open all days', p: 'Mon–Sat 6 AM – 10 PM, Sunday 8 AM – 12 PM. Central city location, easy to reach from anywhere in Surat.' },
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
            <span>Open all days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
