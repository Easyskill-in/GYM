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
            Example structure only. The amounts below are placeholders so you can see how
            real Gym Flex pricing would sit in the layout.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((plan, i) => (
            <article key={plan.name} className={`plan reveal${plan.featured ? ' plan--featured' : ''}${i ? ` data-d="${i}"` : ''}`}>
              <div>
                <div className="plan__name">{plan.name}</div>
                <div className="plan__price" style={{ marginTop: '.8rem' }}><b>₹{plan.price}</b><span>/ month</span></div>
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
          <b>Placeholder pricing.</b> Plans, inclusions and amounts are shown to demonstrate the layout —
          they are not Gym Flex's actual membership rates.
        </p>
      </div>
    </section>
  );
}
