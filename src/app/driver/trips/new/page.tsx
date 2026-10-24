import type { Metadata } from 'next';
import { NewRidePage } from '@/features/rides/new-ride-page';
import { lagosNow } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Publish a trip — Driver — WayPadi',
  description: 'Publish a trip with route, time, seats, and fare.',
};

export default function Page() {
  return <NewRidePage minDeparture={lagosNow()} />;
}
