import { REVIEWS } from '../data/content';

const Stars = ({ count }) => (
  <div className="review__stars" aria-label={`${count} stars`}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="14" height="13" viewBox="0 0 14 13" fill={i <= count ? '#FF9A1F' : '#4B4944'}><path d="M7 0l2.1 4.3 4.9.7-3.5 3.4.8 4.8L7 10.9 2.7 13.2l.8-4.8L0 5l4.9-.7z"/></svg>
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Public feedback</span>
          <h2 className="h2 reveal" data-d="1">What members have<br />already said publicly.</h2>
          <p className="lead reveal" data-d="2">
            Verdicts from public listing sites, rewritten here for layout only. No private data, no invented claims.
          </p>
        </div>
        <div className="reviews">
          {REVIEWS.map((r, i) => (
            <article key={i} className={`review reveal${i ? ` data-d="${i}"` : ''}`}>
              <Stars count={r.stars} />
              <p>"{r.text}"</p>
              <div className="review__name">
                <div className="review__avatar">{r.initial}</div>
                <div><strong>{r.name}</strong><span>Verified listing review</span></div>
              </div>
            </article>
          ))}
        </div>
        <p className="notice reveal">
          <b>Note:</b> Reviews are rewritten from public sources for concept purposes and checked against
          Google Business Profile rules.
        </p>
      </div>
    </section>
  );
}
