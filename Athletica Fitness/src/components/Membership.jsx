import { PLANS } from '../data/content';

const Check = () => <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5l4 4 7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const X = () => <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 1l10 8M11 1L1 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;

export default function Membership({ onSelectPlan }) {
  return (
    <section className="section section--alt" id="membership">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Membership</span>
          <h2 className="h2 reveal" data-d="1">Pick a plan,<br />start this week.</h2>
          <p className="lead reveal" data-d="2">
            Flexible membership options for every fitness level. Full floor access, group classes,
            and personal training — all at Athletica Fitness, Athwalines, Athwa, Surat.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((plan, i) => (
            <article key={plan.name} className={`plan reveal${plan.featured ? ' plan--featured' : ''}${i ? ` data-d="${i}"` : ''}`}>
              <div>
                <div className="plan__name">{plan.name}</div>
                <div className="plan__price" style={{ marginTop: '.8rem' }}><b>{plan.price === '—' ? '—' : plan.price}</b><span>{plan.price === '—' ? '' : '/ month'}</span></div>
              </div>
              <p className="plan__desc">{plan.desc}</p>
              <ul className="plan__list">
                {plan.features.map(f => <li key={f}><Check />{f}</li>)}
                {plan.off.map(f => <li key={f} className="off"><X />{f}</li>)}
              </ul>
              <button className={`btn${plan.featured ? '' : ' btn--ghost'} btn--block`}
                onClick={() => onSelectPlan(plan.name)}>
                Enquire about {plan.name}
              </button>
            </article>
          ))}
        </div>
        <p className="notice reveal">
          <b>Verify pricing with the gym.</b> Plans, inclusions and amounts are shown as examples —
          please confirm current rates directly with Athletica Fitness.
        </p>
      </div>
    </section>
  );
}
