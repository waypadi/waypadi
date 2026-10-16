import { ButtonLink } from '@/components/ui/button';

function RouteIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of a shared route across Lagos" role="img">
      <div className="sun-glow" />
      <div className="art-label label-top"><span className="mini-pin">●</span> Same route. New company.</div>
      <div className="map-grid" aria-hidden="true" />
      <svg className="route-line" viewBox="0 0 520 470" fill="none" aria-hidden="true">
        <path d="M112 390C146 356 152 328 194 302c35-21 70-5 94-36 20-25 2-53 29-76 23-19 64-13 83-40 16-23 8-61 45-90" stroke="#fff8ec" strokeWidth="13" strokeLinecap="round" />
        <path d="M112 390C146 356 152 328 194 302c35-21 70-5 94-36 20-25 2-53 29-76 23-19 64-13 83-40 16-23 8-61 45-90" stroke="#df8a21" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 1" />
        <circle cx="112" cy="390" r="9" fill="#382417" stroke="#fff8ec" strokeWidth="4" />
        <circle cx="445" cy="60" r="9" fill="#382417" stroke="#fff8ec" strokeWidth="4" />
      </svg>
      <div className="place place-a"><span className="place-dot" /><span>Lekki Phase 1</span></div>
      <div className="place place-b"><span className="place-dot destination" /><span>Victoria Island</span></div>
      <div className="route-card">
        <span className="route-icon">↗</span>
        <div><small>Example route</small><strong>Lekki <span>→</span> VI</strong></div>
        <div className="route-time"><strong>Together</strong><small>same way</small></div>
      </div>
      <div className="art-label label-bottom"><span className="sparkle">✳</span> Your way, together.</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" />Better journeys start together</div>
        <h1 id="hero-title">Share your route.<br /><em>Split your ride.</em></h1>
        <p className="hero-intro">Find people heading your way, share the journey, and make the everyday trip feel easier.</p>
        <div className="hero-actions">
          <ButtonLink href="#find">Find a ride <span aria-hidden="true">→</span></ButtonLink>
          <a className="text-link" href="#offer">I have a seat <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero-note">Made for everyday journeys around Lagos.</p>
      </div>
      <RouteIllustration />
      <div className="hero-footnote"><span className="footnote-rule" /><span>Made for the way we move in Lagos</span></div>
    </section>
  );
}
