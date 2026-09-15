import { BUSINESS, NAV } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a className="footer__logo" href="#home">
            <span className="logo__mark" aria-hidden="true">AF</span> Athletica Fitness
          </a>
          <p className="footer__addr">{BUSINESS.address}</p>
          <div className="footer__links">
            <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://www.google.com/maps/search/?api=1" target="_blank" rel="noopener">Map</a>
            <a href="https://athletica.fitness" target="_blank" rel="noopener">Website</a>
          </div>
        </div>
        <div className="footer__right">
          <p>© {new Date().getFullYear()} Athletica Fitness, Athwa, Surat. Demo site only. Built from public info.</p>
          <nav className="footer__nav" aria-label="Sections">
            {NAV.map((n, i) => (
              <span key={n}>
                <a href={`#${n.toLowerCase()}`} onClick={e => { e.preventDefault(); document.querySelector(`#${n.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' }); }}>{n}</a>
                {i < NAV.length - 1 && <span aria-hidden="true"> · </span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
