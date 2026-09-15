import { TRAINERS } from '../data/content';

export default function Trainers() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">The floor team</span>
          <h2 className="h2 reveal" data-d="1">Coaches who watch<br />your every rep.</h2>
          <p className="lead reveal" data-d="2">
            Sample profiles showing how the real Gym Flex team would appear once photos
            and details are supplied.
          </p>
        </div>
        <div className="trainers">
          {TRAINERS.map((t, i) => (
            <article key={i} className={`trainer reveal${i ? ` data-d="${i}"` : ''}`}>
              <div className="trainer__img">
                <img loading="lazy" src={t.img} alt={t.alt} />
                <span className="trainer__tag">Sample profile</span>
              </div>
              <div className="trainer__body">
                <h3>{t.title}</h3>
                <div className="trainer__role">{t.role}</div>
                <p className="trainer__bio">Placeholder bio. Replace with the coach's name, certifications and training focus.</p>
              </div>
            </article>
          ))}
        </div>
        <p className="notice reveal">
          <b>Note for the concept:</b> these are stock photographs and placeholder roles, not real Gym Flex staff.
          Send across the team's names, photos and specialities and they'll drop straight into this layout.
        </p>
      </div>
    </section>
  );
}
