import { BUSINESS } from '../data/content';

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;

  return (
    <section className="section" id="location">
      <div className="container location__grid">
        <div className="location__body">
          <span className="eyebrow reveal">Find us</span>
          <h2 className="h2 reveal" data-d="1">Athwalines,<br />Athwa, Surat.</h2>
          <p className="lead reveal" data-d="2">
            Opposite Lourdes Convent School, Meghdoot Society, Athwalines, Athwa, Surat.
            Premium location with easy access from Athwalines road.
          </p>
          <ul className="contact-list reveal" data-d="3">
            <li><b>Address:</b> {BUSINESS.address}</li>
            <li><b>Hours:</b> {BUSINESS.hours}</li>
            <li><b>Phone:</b> <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a></li>
            <li><b>Landmark:</b> Opposite Lourdes Convent School, Meghdoot Society</li>
          </ul>
          <div className="contact-chips reveal" data-d="4">
            <a className="chip" href={mapsUrl} target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Open in Google Maps
            </a>
            <a className="chip" href={`tel:${BUSINESS.phoneRaw}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call
            </a>
            <a className="chip" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.49a.5.5 0 00.627.616l4.586-1.202A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953l-.421-.316-2.718.712.724-2.649-.339-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="location__map reveal" data-d="1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.2231179336025!2d72.78738617463055!3d21.23859218074066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzE5LjAiTiA3MsKwNDcnMTQuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Athletica Fitness location on Google Maps" />
          <a className="map-cta" href={mapsUrl} target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
