export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__body">
          <span className="eyebrow reveal">About Gym Flex</span>
          <h2 className="h2 reveal" data-d="1">More than a gym.<br />A floor built for progress.</h2>
          <p className="lead reveal" data-d="2">
            Gym Flex sits on the upper floor of V3 Corner, a few steps from L.P. Savani School.
            Members consistently describe it the same way in public reviews: spacious, well kept,
            and stocked with equipment you can actually train on.
          </p>
          <div className="about__points">
            {[
              { n: '01', h: 'Space to train properly', p: 'Room for compound lifts, warm-ups and stretching without working around someone else\'s set.' },
              { n: '02', h: 'Equipment that holds up', p: 'Free weights, plate-loaded machines and cardio maintained well enough that reviewers mention it by name.' },
              { n: '03', h: 'Timings that fit your day', p: 'Doors open from 6 AM through 10 PM, so early shifts and late finishes both work.' },
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
            <span>Open every day</span>
          </div>
        </div>
      </div>
    </section>
  );
}
