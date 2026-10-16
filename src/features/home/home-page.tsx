import { HeroSection } from '@/features/home/components/hero-section';
import { OfferBanner } from '@/features/home/components/offer-banner';
import { RideSearch } from '@/features/home/components/ride-search';
import { ValueProps } from '@/features/home/components/value-props';

export function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <RideSearch />
      <ValueProps />
      <OfferBanner />
    </main>
  );
}
