import { Star, Quote } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { TESTIMONIALS, BUSINESS } from '../data/content';

export default function Testimonials() {
  const ref = useGsapReveal();

  return (
    <section id="reviews" className="py-28 lg:py-40 relative" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <div data-reveal="up" className="section-label justify-center mb-6">Reviews</div>
          <h2 data-reveal="up" data-delay="0.1" className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our<br /><span className="text-[var(--color-gold)]">Members Say</span>
          </h2>
          <div data-reveal="up" data-delay="0.2" className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />)}
            </div>
            <span className="text-[var(--color-text-dim)] text-sm">{BUSINESS.rating} on Google &bull; {BUSINESS.reviewCount} Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} data-reveal="up" data-delay={i * 0.08}
              className="relative p-7 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/20 transition-all duration-400 group">
              <Quote size={28} className="text-[var(--color-gold)]/15 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={13} className={j < t.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-text-muted)]'} />)}
              </div>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-6 italic font-light">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[var(--color-border)]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 flex items-center justify-center border border-[var(--color-gold)]/10">
                  <span className="text-[var(--color-gold)] text-xs font-[family-name:var(--font-heading)] font-bold">{t.name.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <div>
                  <span className="text-[var(--color-text)] text-sm font-[family-name:var(--font-heading)] font-medium block">{t.name}</span>
                  <span className="text-[var(--color-text-muted)] text-[10px] tracking-wider uppercase font-[family-name:var(--font-heading)]">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
