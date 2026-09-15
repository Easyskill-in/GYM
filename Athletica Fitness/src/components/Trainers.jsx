import { TRAINERS } from '../data/content';

export default function Trainers() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">The floor team</span>
          <h2 className="h2 reveal" data-d="1">Coaches who watch<br />your every rep.</h2>
          <p className="lead reveal" data-d="2">
            Led by Vispy Kharadi — 10× Guinness World Record Holder, awarded as Steel Man
            of India, and alumni of S. R. Luthra Institute of Management. The Athletica Fitness
            team of certified trainers delivers personalised coaching across strength, functional,
            and group training.
          </p>
        </div>
        <div className="trainers">
          {TRAINERS.map((t, i) => (
            <article key={i} className={`trainer reveal${i ? ` data-d="${i}"` : ''}`}>
              <div className="trainer__img">
                <img loading="lazy" src={t.img} alt={t.alt} />
                <span className="trainer__tag">{i === 0 ? 'Managing Director' : i === 1 ? 'Director' : 'Certified Trainer'}</span>
              </div>
              <div className="trainer__body">
                <h3>{t.title}</h3>
                <div className="trainer__role">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
