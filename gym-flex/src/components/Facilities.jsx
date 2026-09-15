import { FACILITIES } from '../data/content';

export default function Facilities() {
  return (
    <section className="section section--alt" id="facilities">
      <div className="container">
        <div className="facilities__head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow reveal">Facilities</span>
            <h2 className="h2 reveal" data-d="1">Everything you need<br />under one roof.</h2>
          </div>
          <p className="lead reveal" data-d="2" style={{ maxWidth: '34ch', fontSize: '.92rem' }}>
            Training zones shown for the concept. Final list to be confirmed with the owner.
          </p>
        </div>
        <div className="fac-grid">
          {FACILITIES.map((f, i) => (
            <article key={f.id} className={`fac reveal${i ? ` data-d="${Math.min(i, 4)}"` : ''}`}>
              <img loading="lazy" src={f.img} alt={f.alt} />
              <span className="fac__no">0{f.id}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              {f.tags.length > 0 && (
                <ul className="fac__tags">{f.tags.map(t => <li key={t}>{t}</li>)}</ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
