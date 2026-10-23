import type { Metadata } from 'next';
import { NewRidePage } from '@/features/rides/new-ride-page';
import { lagosNow } from '@/lib/format';
import { getRequest } from '@/lib/server/requests';
import { firstParam, type SearchParams } from '@/lib/search-params';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Offer a seat — WayPadi',
  description: 'Post your route, pickup joint, takeoff time, available seats, and price per seat so riders can book.',
};

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const requestId = firstParam(params.request);
  const request = requestId ? await getRequest(requestId) : undefined;

  return <NewRidePage minDeparture={lagosNow()} request={request} />;
}
