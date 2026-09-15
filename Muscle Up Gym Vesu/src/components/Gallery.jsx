import { GALLERY } from '../data/content';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Gallery</span>
          <h2 className="h2 reveal" data-d="1">Inside the floor.</h2>
          <p className="lead reveal" data-d="2">
            Stock photography standing in for real Gym Flex photos. Swapping in your own
            images is a straight file replacement.
          </p>
        </div>
        <div className="gallery">
          {GALLERY.map((g, i) => (
            <button key={i}
              className={`shot${g.w2 ? ' shot--w2' : ''}${g.h2 ? ' shot--h2' : ''} reveal`}
              data-d={String(Math.min(i, 3))}
              onClick={() => onOpenLightbox(i)}>
              <img loading="lazy" src={g.src} alt={g.alt} />
              <span className="shot__cap">{g.cap}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
