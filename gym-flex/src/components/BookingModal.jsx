import { useState, useEffect } from 'react';
import { BUSINESS } from '../data/content';

const STEP_COUNT = 4;

export default function BookingModal({ isOpen, onClose, defaultPlan }) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(defaultPlan || 'Starter');

  useEffect(() => { setStep(1); }, [isOpen]);
  useEffect(() => { if (isOpen && defaultPlan) setSelected(defaultPlan); }, [isOpen, defaultPlan]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  if (!isOpen) return null;

  const next = () => setStep(s => Math.min(s + 1, STEP_COUNT));
  const finish = () => {
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi Gym Flex, I'm interested in the ${selected} plan. Could we talk?`)}`, '_blank', 'noopener');
    onClose();
  };

  return (
    <div className="modal is-open" role="dialog" aria-modal="true" aria-label="Free trial booking" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal__panel">
        <div className="modal__header">
          <div>
            <h3>Book a free trial</h3>
            <div className="stepper">
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <i key={i} className={i < step ? 'done' : ''} />
              ))}
            </div>
          </div>
          <button className="modal__close" aria-label="Close booking" onClick={onClose}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M11 1L1 11M1 1l10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>

        <div className="modal__body">
          {step === 1 && (
            <div>
              <h3 className="modal__title">Which plan are you looking at?</h3>
              <div className="modal__options" role="radiogroup" aria-label="Choose plan">
                {['Starter', 'Pro', 'Elite'].map(p => (
                  <button key={p} className={`modal__opt${selected === p ? ' selected' : ''}`}
                    onClick={() => setSelected(p)} role="radio" aria-checked={selected === p}>
                    <div className="modal__opt__top">
                      <svg className="modal__opt__tick" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M1 5l4 4 7-8"/></svg>
                      <strong>{p}</strong>
                    </div>
                    <span>{p === 'Starter' ? 'Full floor access, one induction' : p === 'Pro' ? 'Classes plus a personalised plan' : 'Weekly one-to-one coaching'}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h3 className="modal__title">What time do you usually train?</h3>
              <div className="modal__options modal__options--half" role="radiogroup" aria-label="Choose time">
                {['Early morning (6–8 AM)', 'Daytime (10 AM–4 PM)', 'Evening (5–9 PM)'].map(t => (
                  <button key={t} className="modal__opt modal__opt--choice"
                    onClick={e => { e.currentTarget.closest('.modal__options').querySelectorAll('.modal__opt').forEach(o => o.classList.remove('selected')); e.currentTarget.classList.add('selected'); }} role="radio">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h3 className="modal__title">Best number to reach you?</h3>
              <div className="form modal__form">
                <input type="tel" name="phone" placeholder="Phone number" autoComplete="tel" required />
                <small>So the gym can confirm your trial slot by call or WhatsApp.</small>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <h3 className="modal__title">How did you hear about us?</h3>
              <div className="modal__options modal__options--half modal__options--sources" role="radiogroup" aria-label="Source">
                {['Instagram', 'Google Maps', 'Friend or family', 'Walked past', 'YouTube', 'Other'].map(s => (
                  <button key={s} className="modal__opt modal__opt--choice"
                    onClick={e => { e.currentTarget.closest('.modal__options').querySelectorAll('.modal__opt').forEach(o => o.classList.remove('selected')); e.currentTarget.classList.add('selected'); }} role="radio">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal__footer">
          {step < STEP_COUNT ? (
            <button className="btn btn--block" onClick={next}>
              Continue <svg width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M1 4.5h11M9 .5l3.5 4-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          ) : (
            <button className="btn btn--block btn--send" onClick={finish}>
              Send on WhatsApp <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.49a.5.5 0 00.627.616l4.586-1.202A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
