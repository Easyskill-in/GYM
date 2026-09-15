export default function Transformation() {
  return (
    <section className="section transform">
      <div className="transform__bg" aria-hidden="true">
        <img loading="lazy" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1800&q=70" alt="" />
      </div>
      <div className="container">
        <div className="transform__inner">
          <span className="eyebrow reveal">How it starts</span>
          <h2 className="h2 reveal" data-d="1" style={{ marginTop: '.5rem' }}>Your transformation<br />starts on day one.</h2>
          <p className="lead reveal" data-d="2" style={{ marginTop: '1.2rem' }}>
            Nobody walks in already knowing what to do. Here's how a first month at Gym Flex
            is designed to go.
          </p>
        </div>
        <ol className="steps">
          {[
            { step: 'Step 1', h: 'Free trial session', p: 'Walk the floor, try the equipment, ask anything. No commitment.' },
            { step: 'Step 2', h: 'Goal and fitness check', p: 'A short assessment so training starts from where you actually are.' },
            { step: 'Step 3', h: 'Your programme', p: 'A written plan for the week, matched to your schedule and experience.' },
            { step: 'Step 4', h: 'Track and adjust', p: 'Regular check-ins so the plan moves as fast as you do.' },
          ].map((s, i) => (
            <li key={i} className={`step reveal${i ? ` data-d="${i}"` : ''}`}>
              <b>{s.step}</b><h4>{s.h}</h4><p>{s.p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
