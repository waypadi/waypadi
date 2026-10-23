import type { Metadata } from 'next';
import { RequestsPage } from '@/features/requests/requests-page';
import { firstParam, type SearchParams } from '@/lib/search-params';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ride requests — WayPadi',
  description: 'See where riders are headed, what they can pay per seat, and offer them a ride if you are going that way.',
};

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;

  return (
    <RequestsPage
      origin={firstParam(params.origin)}
      destination={firstParam(params.destination)}
      date={firstParam(params.date)}
      posted={firstParam(params.posted) === '1'}
    />
  );
}
