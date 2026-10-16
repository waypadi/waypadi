import { ButtonLink } from '@/components/ui/button';

export function OfferBanner() {
  return (
    <section className="offer-banner" id="offer">
      <div className="offer-mark" aria-hidden="true">↗</div>
      <div><div className="section-kicker">Driving that way?</div><h2>There might be a seat to share.</h2><p>Post your route and meet people heading in the same direction.</p></div>
      <ButtonLink href="#offer" variant="dark">Offer a seat <span aria-hidden="true">→</span></ButtonLink>
      <div className="banner-sun" aria-hidden="true" />
    </section>
  );
}
